import { getSecret } from "astro:env/server";

/**
 * Verifica el token de Cloudflare Turnstile.
 * Si no hay secret configurado, no exige captcha (opt-in ante spam real).
 */
export async function verifyTurnstile(
  token: string,
  ip: string,
): Promise<{ required: boolean; ok: boolean }> {
  const secret = (getSecret("TURNSTILE_SECRET_KEY") ?? "").trim();
  if (!secret) return { required: false, ok: true };

  if (!token) return { required: true, ok: false };

  try {
    const body = new URLSearchParams({
      secret,
      response: token,
    });
    if (ip && ip !== "unknown") body.set("remoteip", ip);

    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    const data = (await response.json()) as { success?: boolean };
    return { required: true, ok: Boolean(data.success) };
  } catch (error) {
    console.warn("Turnstile no respondió; se rechaza el RSVP", error);
    return { required: true, ok: false };
  }
}
