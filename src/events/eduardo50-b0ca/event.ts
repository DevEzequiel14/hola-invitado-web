import { party } from "./data/party";

export const event = {
  slug: party.slug,
  honoree: party.honoree.name,
  firstName: party.honoree.firstName,
  headline: party.kicker,
  rsvpClosesIso: party.rsvp.closesIso,
  themeColor: "#0A1F4D",
  fonts:
    "https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;700;800;900&family=Figtree:wght@300;400;500;600;700&display=swap",
  ogImage: "/events/eduardo50-b0ca/og.jpg",
  favicon: "/events/eduardo50-b0ca/favicon.svg",
  siteName: party.honoree.name,
  indexable: true,
} as const;

export const pageTitle = `${party.headline} — ${party.kicker}`;

export const pageDescription = `${party.phrase}. ${party.date.label}, ${party.venue.name}.`;

export const shareImageAlt = party.heroAlt;
