import { isReservedSlug } from "../lib/slugs";

/**
 * Eventos pagos en este mismo repo.
 * Hoy está vacío a propósito: el primer cliente se agrega acá
 * y se copia una demo a `/nombreedad-codigo`.
 */
export type PaidEvent = {
  slug: string;
  honoree: string;
  rsvpClosesIso: string;
  index: false;
};

export const paidEvents: Record<string, PaidEvent> = {};

export function getPaidEvent(slug: string) {
  const clean = slug.trim().toLowerCase();
  if (!clean || isReservedSlug(clean)) return null;
  return paidEvents[clean] ?? null;
}
