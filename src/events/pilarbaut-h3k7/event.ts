import { baptism } from "./data/baptism";

export const event = {
  slug: baptism.slug,
  honoree: baptism.honoree.name,
  firstName: baptism.honoree.firstName,
  headline: baptism.kicker,
  rsvpClosesIso: baptism.rsvp.closesIso,
  themeColor: "#C9A227",
  fonts:
    "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Great+Vibes&family=Outfit:wght@300;400;500;600&display=swap",
  ogImage: "/events/pilarbaut-h3k7/og.jpg",
  favicon: "/events/pilarbaut-h3k7/favicon.svg",
  siteName: `Bautismo de ${baptism.honoree.firstName}`,
  indexable: true,
} as const;

export const pageTitle = `${baptism.honoree.firstName} — ${baptism.kicker}`;

export const pageDescription = `${baptism.phrase}. ${baptism.date.label}. Misa ${baptism.ceremony.time} en ${baptism.ceremony.place}; celebración ${baptism.reception.time} en ${baptism.reception.place}.`;

export const shareImageAlt = baptism.heroAlt;
