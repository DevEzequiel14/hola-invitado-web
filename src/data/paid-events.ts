import { event as eduardo } from "../events/eduardo50-b0ca/event";
import { event as federico } from "../events/federico18-n3x8/event";
import { event as giuliano } from "../events/giuliano1-k8n2/event";
import { event as casamiento } from "../events/sofiamateo-m4q7/event";
import { event as quince } from "../events/valentina15-n4w8/event";
import { isPublicMarketingPath, isReservedSlug } from "../lib/slugs";

export type PaidEvent = {
  slug: string;
  honoree: string;
  rsvpClosesIso: string;
  /**
   * SEO / sitemap. Clientes contratados: siempre false.
   * Solo las muestras públicas de la marca van en true.
   */
  index: boolean;
  /**
   * Listado en el home. Clientes contratados: siempre false.
   * El link se comparte por WhatsApp, no desde la landing.
   */
  showcase: boolean;
};

export const paidEvents: Record<string, PaidEvent> = {
  [giuliano.slug]: {
    slug: giuliano.slug,
    honoree: giuliano.firstName,
    rsvpClosesIso: giuliano.rsvpClosesIso,
    index: giuliano.indexable,
    showcase: true,
  },
  [casamiento.slug]: {
    slug: casamiento.slug,
    honoree: casamiento.honoree,
    rsvpClosesIso: casamiento.rsvpClosesIso,
    index: casamiento.indexable,
    showcase: true,
  },
  [quince.slug]: {
    slug: quince.slug,
    honoree: quince.firstName,
    rsvpClosesIso: quince.rsvpClosesIso,
    index: quince.indexable,
    showcase: true,
  },
  [federico.slug]: {
    slug: federico.slug,
    honoree: federico.firstName,
    rsvpClosesIso: federico.rsvpClosesIso,
    index: federico.indexable,
    showcase: true,
  },
  [eduardo.slug]: {
    slug: eduardo.slug,
    honoree: eduardo.honoree,
    rsvpClosesIso: eduardo.rsvpClosesIso,
    index: eduardo.indexable,
    showcase: true,
  },
};

/** Garantiza que un cliente privado no se filtre al sitemap/home. */
function assertEventVisibility(event: PaidEvent) {
  const path = `/${event.slug}`;
  const onMarketing = isPublicMarketingPath(path);

  if (!event.showcase && onMarketing) {
    throw new Error(
      `El evento "${event.slug}" es privado (showcase: false) pero está en PUBLIC_PATHS. Sacalo del listado de marketing.`,
    );
  }

  if (!event.index && onMarketing) {
    throw new Error(
      `El evento "${event.slug}" tiene index: false pero está en PUBLIC_PATHS (sitemap). Sacalo de PUBLIC_PATHS.`,
    );
  }

  if (event.showcase && !event.index) {
    throw new Error(
      `La muestra "${event.slug}" debería ser indexable (o no ser showcase).`,
    );
  }
}

for (const event of Object.values(paidEvents)) {
  assertEventVisibility(event);
}

export function getPaidEvent(slug: string) {
  const clean = slug.trim().toLowerCase();
  if (!clean || isReservedSlug(clean)) return null;
  return paidEvents[clean] ?? null;
}

/**
 * Plantilla para un cliente contratado: privado, fuera de home/sitemap.
 * Copiá esto al registrar el evento y no lo agregues a PUBLIC_PATHS.
 */
export function privatePaidEvent(
  input: Pick<PaidEvent, "slug" | "honoree" | "rsvpClosesIso">,
): PaidEvent {
  return {
    ...input,
    index: false,
    showcase: false,
  };
}
