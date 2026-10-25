import { LOCALES, localePath } from "#lib/i18n/config.ts";
import { absUrl } from "#lib/i18n/metadata.ts";
import { getDocSlugs } from "#lib/server/docs.ts";

export const prerender = true;
export const trailingSlash = "never";

/* Every URL carries the trailing slash the pages actually serve, so a
   sitemap entry is byte-identical to the canonical the page emits.
   No lastmod, changefreq or priority: Google ignores the latter two, and a
   lastmod stamped with the build time would claim every page changed on
   every deploy, which makes Google discard the signal for the whole site. */
export function GET() {
  const alternates = [...LOCALES.map((l) => [l, absUrl(localePath(l))]), ["x-default", absUrl("/")]]
    .map(([lang, href]) => `<xhtml:link rel="alternate" hreflang="${lang}" href="${href}" />\n`)
    .join("");
  // the docs are English only, so they carry no hreflang alternates
  const urls = [
    ...LOCALES.map((l) => `<url>\n<loc>${absUrl(localePath(l))}</loc>\n${alternates}</url>\n`),
    ...["/docs", ...getDocSlugs().map((s) => `/docs/${s}`)].map((p) => `<url>\n<loc>${absUrl(p)}</loc>\n</url>\n`),
  ];
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
    urls.join("") +
    "</urlset>\n";
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
