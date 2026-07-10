import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";
import { LOCALES, DEFAULT_LOCALE, localePath } from "../lib/i18n/config";

// Prerender at build time for `output: "export"`.
export const dynamic = "force-static";

const abs = (path: string) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    LOCALES.map((l) => [l, abs(localePath(l))]),
  );
  return LOCALES.map((l) => ({
    url: abs(localePath(l)),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: l === DEFAULT_LOCALE ? 1 : 0.8,
    alternates: { languages },
  }));
}
