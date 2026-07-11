import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";
import { LOCALES, DEFAULT_LOCALE, localePath } from "../lib/i18n/config";
import { getDocSlugs } from "../lib/docs";

// Prerender at build time for `output: "export"`.
export const dynamic = "force-static";

const abs = (path: string) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages = Object.fromEntries(
    LOCALES.map((l) => [l, abs(localePath(l))]),
  );

  const localePages: MetadataRoute.Sitemap = LOCALES.map((l) => ({
    url: abs(localePath(l)),
    lastModified,
    changeFrequency: "monthly",
    priority: l === DEFAULT_LOCALE ? 1 : 0.8,
    alternates: { languages },
  }));

  // The docs are an English-only section, so they carry no hreflang alternates.
  const docsPages: MetadataRoute.Sitemap = [
    {
      url: abs("/docs"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...getDocSlugs().map((slug) => ({
      url: abs(`/docs/${slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return [...localePages, ...docsPages];
}
