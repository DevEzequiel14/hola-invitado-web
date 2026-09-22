/** Rutas de la marca: sí van al sitemap y al menú de la landing. */
export const PUBLIC_PATHS = ["/", "/uno", "/quince", "/giuliano1-k8n2", "/sofiamateo-m4q7"] as const;

export const RESERVED_SLUGS = ["uno", "quince", "casamiento", "giuliano"] as const;

export type ReservedSlug = (typeof RESERVED_SLUGS)[number];

export function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname || "/";
}

export function isPublicMarketingPath(pathname: string) {
  return (PUBLIC_PATHS as readonly string[]).includes(normalizePath(pathname));
}

export function isReservedSlug(slug: string) {
  return (RESERVED_SLUGS as readonly string[]).includes(slug.trim().toLowerCase());
}

/**
 * Un evento usa `/nombreedad-codigo`.
 * El código son 4 letras o números. Nunca un slug reservado de la marca.
 */
export function assertClientSlug(slug: string) {
  const clean = slug.trim().toLowerCase();
  if (!clean) throw new Error("Falta el slug del evento.");
  if (isReservedSlug(clean)) {
    throw new Error(
      `El slug "${clean}" está reservado para la marca. Un cliente nunca se llama uno, quince, casamiento ni giuliano.`,
    );
  }
  if (!/^[a-z0-9]+-[a-z0-9]{4}$/.test(clean)) {
    throw new Error(
      `El slug "${clean}" no sigue el molde nombreedad-codigo (ej. giuliano1-k8n2).`,
    );
  }
  return clean;
}
