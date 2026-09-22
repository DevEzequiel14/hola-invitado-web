import { wedding } from "./data/wedding";

export const event = {
  slug: wedding.slug,
  honoree: wedding.headline,
  headline: wedding.kicker,
  rsvpClosesIso: wedding.rsvp.closesIso,
  themeColor: "#3F5346",
  fonts:
    "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500;1,9..144,600&family=Great+Vibes&family=Outfit:wght@300;400;500;600&display=swap",
  ogImage: "/events/sofiamateo-m4q7/og-wedding.jpg",
  favicon: "/events/sofiamateo-m4q7/favicon.svg",
  siteName: wedding.headline,
  indexable: true,
} as const;

export const pageTitle = `${wedding.headline} — ${wedding.kicker}`;

export const pageDescription = `${wedding.phrase}. ${wedding.date.label}, ${wedding.venue.name}.`;

export const shareImageAlt = wedding.heroAlt;
