import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";
import { LOCALES, localePath } from "../lib/i18n/config";
import { getDocSlugs } from "../lib/docs";

// Prerender at build time for `output: "export"`.
export const dynamic = "force-static";

/* Every URL carries the trailing slash the pages actually serve (see
   trailingSlash in next.config.ts), so a sitemap entry is byte-identical to
   the canonical the page emits. Without it the sitemap advertises a second,
   non-canonical spelling of every URL.
   No lastmod, changefreq or priority: Google has ignored the latter two for
   over a decade, and a lastmod stamped with the build time would claim every
   page changed on every deploy — which makes Google discard the signal for
   the whole site. Add a real lastmod only when there is a real date. */
const abs = (path: string) => `${SITE_URL}${path.replace(/\/?$/, "/")}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    LOCALES.map((l) => [l, abs(localePath(l))]),
  );
  const alternates = { languages: { ...languages, "x-default": abs("/") } };

  const localePages: MetadataRoute.Sitemap = LOCALES.map((l) => ({
    url: abs(localePath(l)),
    alternates,
  }));

  // The docs are an English-only section, so they carry no hreflang alternates.
  const docsPages: MetadataRoute.Sitemap = [
    { url: abs("/docs") },
    ...getDocSlugs().map((slug) => ({ url: abs(`/docs/${slug}`) })),
  ];

  return [...localePages, ...docsPages];
}
