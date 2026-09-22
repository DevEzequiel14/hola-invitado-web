import { event as giuliano } from "../events/giuliano1-k8n2/event";
import { event as casamiento } from "../events/sofiamateo-m4q7/event";
import { isReservedSlug } from "../lib/slugs";

export type PaidEvent = {
  slug: string;
  honoree: string;
  rsvpClosesIso: string;
  index: boolean;
};

export const paidEvents: Record<string, PaidEvent> = {
  [giuliano.slug]: {
    slug: giuliano.slug,
    honoree: giuliano.firstName,
    rsvpClosesIso: giuliano.rsvpClosesIso,
    index: giuliano.indexable,
  },
  [casamiento.slug]: {
    slug: casamiento.slug,
    honoree: casamiento.honoree,
    rsvpClosesIso: casamiento.rsvpClosesIso,
    index: casamiento.indexable,
  },
};

export function getPaidEvent(slug: string) {
  const clean = slug.trim().toLowerCase();
  if (!clean || isReservedSlug(clean)) return null;
  return paidEvents[clean] ?? null;
}
