import type { APIRoute } from "astro";
import { siteUrl } from "../data/site";

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${new URL("sitemap-index.xml", siteUrl).href}
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
