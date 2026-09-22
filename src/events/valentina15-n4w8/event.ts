import { quince } from "./data/quince";

export const event = {
  slug: quince.slug,
  honoree: quince.honoree,
  firstName: quince.firstName,
  headline: quince.headline,
  rsvpClosesIso: quince.rsvpClosesIso,
  themeColor: "#1C2B24",
  fonts:
    "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=Nunito:wght@400;500;600;700&display=swap",
  ogImage: "/events/valentina15-n4w8/og-valentina.jpg",
  favicon: "/events/valentina15-n4w8/favicon.svg",
  siteName: quince.honoree,
  indexable: true,
} as const;

export const pageTitle = quince.seo.title;

export const pageDescription = quince.seo.description;

export const shareImageAlt = quince.photos.cover.alt;
