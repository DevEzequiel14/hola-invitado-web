// @ts-check
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import { defineConfig, envField } from "astro/config";
import { isPublicMarketingPath } from "./src/lib/slugs.ts";

export default defineConfig({
  site: "https://holainvitados.com",
  adapter: vercel(),
  redirects: {
    "/giuliano": "/giuliano1-k8n2",
    "/casamiento": "/sofiamateo-m4q7",
    "/quince": "/valentina15-n4w8",
  },
  integrations: [
    sitemap({
      filter: (page) => isPublicMarketingPath(new URL(page).pathname),
    }),
  ],
  env: {
    schema: {
      RSVP_SHEET_WEBHOOK: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
      RSVP_SHEET_SECRET: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
      UPSTASH_REDIS_REST_URL: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
      UPSTASH_REDIS_REST_TOKEN: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
      TURNSTILE_SECRET_KEY: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
      PUBLIC_TURNSTILE_SITE_KEY: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
    },
  },
});
