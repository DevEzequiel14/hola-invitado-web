import { party } from "./data/party";

export const event = {
  slug: party.slug,
  honoree: party.honoree.name,
  firstName: party.honoree.firstName,
  headline: party.kicker,
  rsvpClosesIso: party.rsvp.closesIso,
  themeColor: "#0A0A0A",
  fonts:
    "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,500;0,6..96,700;0,6..96,800;1,6..96,500&family=Ephesis&family=Figtree:wght@300;400;500;600;700&display=swap",
  ogImage: "/events/candela30-l4p9/og.jpg",
  favicon: "/events/candela30-l4p9/favicon.svg",
  siteName: party.honoree.name,
  indexable: true,
} as const;

export const pageTitle = `${party.headline} — ${party.kicker}`;

export const pageDescription = `${party.phrase}. ${party.date.label}, ${party.venue.name}.`;

export const shareImageAlt = party.heroAlt;
