// @ts-check
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import { defineConfig, envField } from "astro/config";

const publicPaths = ["/", "/uno", "/quince", "/giuliano1-k8n2", "/sofiamateo-m4q7"];

/** @param {string} pathname */
function isPublicMarketingPath(pathname) {
  const path = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname || "/";
  return publicPaths.includes(path);
}

export default defineConfig({
  site: "https://holainvitados.com",
  adapter: vercel(),
  redirects: {
    "/giuliano": "/giuliano1-k8n2",
    "/casamiento": "/sofiamateo-m4q7",
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
    },
  },
});
