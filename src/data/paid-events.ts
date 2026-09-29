import { event as federico } from "../events/federico18-n3x8/event";
import { event as giuliano } from "../events/giuliano1-k8n2/event";
import { event as casamiento } from "../events/sofiamateo-m4q7/event";
import { event as quince } from "../events/valentina15-n4w8/event";
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
  [quince.slug]: {
    slug: quince.slug,
    honoree: quince.firstName,
    rsvpClosesIso: quince.rsvpClosesIso,
    index: quince.indexable,
  },
  [federico.slug]: {
    slug: federico.slug,
    honoree: federico.firstName,
    rsvpClosesIso: federico.rsvpClosesIso,
    index: federico.indexable,
  },
};

export function getPaidEvent(slug: string) {
  const clean = slug.trim().toLowerCase();
  if (!clean || isReservedSlug(clean)) return null;
  return paidEvents[clean] ?? null;
}
