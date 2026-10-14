import { siteUrl } from "../data/site";

function hostFromUrlish(value: string | null): string | null {
  if (!value) return null;
  try {
    if (value.startsWith("http://") || value.startsWith("https://")) {
      return new URL(value).host;
    }
  } catch {
    return null;
  }
  return null;
}

/**
 * Acepta POST del mismo sitio (Origin o Referer).
 * Incluye el Host del request para previews de Vercel.
 */
export function isSameSiteRequest(request: Request): boolean {
  const hosts = new Set<string>();

  try {
    hosts.add(new URL(siteUrl).host);
  } catch {
    /* ignore */
  }

  const requestHost = request.headers.get("host")?.trim();
  if (requestHost) hosts.add(requestHost);

  if (import.meta.env.DEV) {
    hosts.add("localhost:4321");
    hosts.add("127.0.0.1:4321");
    hosts.add("localhost:3000");
    hosts.add("127.0.0.1:3000");
  }

  const originHost = hostFromUrlish(request.headers.get("origin"));
  if (originHost && hosts.has(originHost)) return true;

  const refererHost = hostFromUrlish(request.headers.get("referer"));
  if (refererHost && hosts.has(refererHost)) return true;

  return false;
}
