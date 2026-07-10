import type { Metadata } from "next";
import { SITE_URL } from "../site";
import { LOCALES, localePath, type Locale } from "./config";
import type { Dictionary } from "./dictionaries/en";

/* OpenGraph wants xx_YY locale tags; map our BCP-47 codes to the closest. */
const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  de: "de_DE",
  es: "es_ES",
  fr: "fr_FR",
  it: "it_IT",
  nl: "nl_NL",
  pl: "pl_PL",
  "zh-Hant": "zh_TW",
  "zh-Hans": "zh_CN",
};

/* hreflang alternates: every locale plus an x-default pointing at the apex. */
function languageAlternates(): Record<string, string> {
  const map: Record<string, string> = { "x-default": "/" };
  for (const l of LOCALES) map[l] = localePath(l);
  return map;
}

/* Per-locale <head> metadata, shared by the apex (en) page and every
   [lang] layout so title, description, canonical and hreflang stay in sync. */
export function buildMetadata(locale: Locale, dict: Dictionary): Metadata {
  const path = localePath(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: path,
      languages: languageAlternates(),
    },
    openGraph: {
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      type: "website",
      url: path,
      siteName: "Unisic",
      locale: OG_LOCALE[locale],
      images: [
        {
          url: "/social-preview.png",
          width: 1200,
          height: 630,
          alt: dict.meta.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [{ url: "/social-preview.png", alt: dict.meta.ogImageAlt }],
    },
    metadataBase: new URL(SITE_URL),
  };
}
