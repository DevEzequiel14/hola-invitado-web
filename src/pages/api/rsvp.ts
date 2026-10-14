import type { APIRoute } from "astro";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { getPaidEvent } from "../../data/paid-events";
import { getClientIp } from "../../lib/client-ip";
import { isSameSiteRequest } from "../../lib/origin";
import { enforceRsvpRateLimits } from "../../lib/rate-limit";
import { appendToSheet } from "../../lib/sheets";
import type { Rsvp } from "../../lib/rsvp";
import { verifyTurnstile } from "../../lib/turnstile";

export const prerender = false;

const FILE = path.join(process.cwd(), "data", "rsvps.json");

type Incoming = {
  honeypot: string;
  slug: string;
  nombre: string;
  asisteRaw: unknown;
  cantidad: number;
  comentario: string;
  menu: string;
  dieta: string;
  cancion: string;
  turnstileToken: string;
};

async function readIncoming(request: Request): Promise<Incoming> {
  const type = request.headers.get("content-type") ?? "";
  if (type.includes("application/json")) {
    const body = (await request.json()) as Record<string, unknown>;
    return {
      honeypot: String(body.company ?? body.website ?? "").trim(),
      slug: String(body.slug ?? "").trim().toLowerCase(),
      nombre: String(body.nombre ?? "").trim(),
      asisteRaw: body.asiste,
      cantidad: Number(body.cantidad),
      comentario: String(body.comentario ?? "").trim().slice(0, 500),
      menu: String(body.menu ?? "").trim().slice(0, 160),
      dieta: String(body.dieta ?? "").trim().slice(0, 120),
      cancion: String(body.cancion ?? "").trim().slice(0, 120),
      turnstileToken: String(
        body["cf-turnstile-response"] ?? body.turnstileToken ?? "",
      ).trim(),
    };
  }

  const form = await request.formData();
  return {
    honeypot: String(form.get("website") ?? form.get("company") ?? "").trim(),
    slug: String(form.get("slug") ?? "").trim().toLowerCase(),
    nombre: String(form.get("nombre") ?? "").trim(),
    asisteRaw: form.get("asiste"),
    cantidad: Number(form.get("cantidad")),
    comentario: String(form.get("comentario") ?? "").trim().slice(0, 500),
    menu: String(form.get("menu") ?? "").trim().slice(0, 160),
    dieta: String(form.get("dieta") ?? "").trim().slice(0, 120),
    cancion: String(form.get("cancion") ?? "").trim().slice(0, 120),
    turnstileToken: String(form.get("cf-turnstile-response") ?? "").trim(),
  };
}

function parseAsiste(raw: unknown): "si" | "no" | "" {
  if (raw === true || raw === "si" || raw === "true" || raw === "yes") return "si";
  if (raw === false || raw === "no" || raw === "false") return "no";
  return "";
}

async function appendLocal(row: Rsvp) {
  await mkdir(path.dirname(FILE), { recursive: true });
  let rows: Rsvp[] = [];
  try {
    rows = JSON.parse(await readFile(FILE, "utf8")) as Rsvp[];
  } catch {
    rows = [];
  }
  rows.push(row);
  await writeFile(FILE, JSON.stringify(rows, null, 2), "utf8");
}

/**
 * Confirmaciones de eventos reales (slug en paid-events).
 * Las demos de marketing con MockRsvp no llaman este endpoint.
 */
export const POST: APIRoute = async ({ request }) => {
  if (!isSameSiteRequest(request)) {
    return json({ ok: false, error: "No pudimos recibir la confirmación." }, 403);
  }

  let incoming: Incoming;
  try {
    incoming = await readIncoming(request);
  } catch {
    return json({ ok: false, error: "No pudimos leer el formulario." }, 400);
  }

  const ip = getClientIp(request);
  const limited = await enforceRsvpRateLimits(ip, incoming.slug || "unknown");
  if (!limited.success) {
    const retryAfter = Math.max(1, Math.ceil((limited.reset - Date.now()) / 1000));
    return json(
      { ok: false, error: "Demasiados intentos. Probá de nuevo en un rato." },
      429,
      {
        "Retry-After": String(retryAfter),
        "X-RateLimit-Limit": String(limited.limit),
        "X-RateLimit-Remaining": String(limited.remaining),
      },
    );
  }

  // Bots tontos: respondemos ok sin tocar Sheet ni Turnstile.
  if (incoming.honeypot) {
    return json({ ok: true });
  }

  const turnstile = await verifyTurnstile(incoming.turnstileToken, ip);
  if (turnstile.required && !turnstile.ok) {
    return json({ ok: false, error: "Completá la verificación anti-bots." }, 400);
  }

  const event = getPaidEvent(incoming.slug);
  if (!event) {
    return json({ ok: false, error: "Este evento no recibe confirmaciones acá." }, 404);
  }

  const nombre = incoming.nombre;
  const asiste = parseAsiste(incoming.asisteRaw);
  const comentario = incoming.comentario;
  let cantidad = incoming.cantidad;

  if (!nombre || nombre.length > 80 || !asiste) {
    return json({ ok: false, error: "Completá nombre y si vas a venir." }, 400);
  }

  if (asiste === "no") cantidad = 0;
  if (asiste === "si" && (!Number.isFinite(cantidad) || cantidad < 1 || cantidad > 20)) {
    return json({ ok: false, error: "Indicá cuántas personas van." }, 400);
  }

  if (Date.now() > new Date(event.rsvpClosesIso).getTime()) {
    return json({ ok: false, error: "Ya cerramos las confirmaciones." }, 400);
  }

  const row: Rsvp = {
    timestamp: new Date().toISOString(),
    slug: event.slug,
    nombre,
    asiste,
    cantidad,
    comentario,
    menu: incoming.menu,
    dieta: incoming.dieta,
    cancion: incoming.cancion,
  };

  try {
    const savedToSheet = await appendToSheet(row);
    const persistOnDisk = !process.env.VERCEL;

    if (!persistOnDisk) {
      if (!savedToSheet) {
        throw new Error("Falta RSVP_SHEET_WEBHOOK en Vercel");
      }
    } else {
      try {
        await appendLocal(row);
      } catch (error) {
        if (!savedToSheet) throw error;
        console.warn("RSVP en Sheet, pero no se pudo guardar el backup local", error);
      }
    }
  } catch (error) {
    console.error("No se pudo guardar el RSVP", error);
    return json({ ok: false, error: "No se pudo guardar." }, 500);
  }

  return json({ ok: true });
};

function json(
  body: unknown,
  status = 200,
  extraHeaders?: Record<string, string>,
) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...extraHeaders,
    },
  });
}
