import { shower } from "./data/shower";

export const event = {
  slug: shower.slug,
  honoree: shower.honoree.name,
  firstName: shower.honoree.firstName,
  headline: shower.kicker,
  rsvpClosesIso: shower.rsvp.closesIso,
  themeColor: "#FFB7C5",
  fonts:
    "https://fonts.googleapis.com/css2?family=Birthstone&family=Onest:wght@300;400;500;600;700&display=swap",
  ogImage: "/events/matildabb-m7w2/og.jpg",
  favicon: "/events/matildabb-m7w2/favicon.svg",
  siteName: `Baby shower de ${shower.honoree.firstName}`,
  indexable: true,
} as const;

export const pageTitle = `${shower.honoree.firstName} — ${shower.kicker}`;

export const pageDescription = `${shower.phrase}. ${shower.date.label}, ${shower.event.time} en ${shower.venue.name}.`;

export const shareImageAlt = shower.heroAlt;
