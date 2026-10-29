import { party } from "./data/party";

export const event = {
  slug: party.slug,
  honoree: party.honoree.name,
  firstName: party.honoree.firstName,
  headline: party.kicker,
  rsvpClosesIso: party.rsvp.closesIso,
  themeColor: "#C8102E",
  fonts:
    "https://fonts.googleapis.com/css2?family=Teko:wght@500;600;700&family=Source+Sans+3:wght@300;400;500;600;700&display=swap",
  ogImage: "/events/nicolas60-r1v3/og.jpg",
  favicon: "/events/nicolas60-r1v3/favicon.svg",
  siteName: party.honoree.name,
  indexable: true,
} as const;

export const pageTitle = `${party.headline} — ${party.kicker}`;

export const pageDescription = `${party.phrase}. ${party.date.label}, ${party.venue.name}.`;

export const shareImageAlt = party.heroAlt;
