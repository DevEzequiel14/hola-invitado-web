import { party } from "./data/party";

export const event = {
  slug: party.slug,
  honoree: party.honoree.name,
  firstName: party.honoree.firstName,
  headline: party.kicker,
  rsvpClosesIso: party.rsvp.closesIso,
  themeColor: "#3D8FD1",
  fonts:
    "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap",
  ogImage: "/events/luna5-s7t2/og.jpg",
  favicon: "/events/luna5-s7t2/favicon.svg",
  siteName: `Cumple de ${party.honoree.firstName}`,
  indexable: true,
} as const;

export const pageTitle = `${party.honoree.firstName} — ${party.kicker}`;

export const pageDescription = `${party.phrase}. ${party.date.label}, ${party.event.time} en ${party.venue.name}.`;

export const shareImageAlt = party.heroAlt;
