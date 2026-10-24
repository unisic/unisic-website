import type { Metadata } from "next";
import { DISCORD_URL, SITE_URL } from "../site";
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
          width: 1280,
          height: 640,
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

/* Discord shows this in place of the OG card when a landing page link is
   pasted. It is served per locale by app/discord-embed/[lang]/route.ts and
   linked from <Landing>, so docs pages keep their own OG cards. Accent is
   --accent from styles/tokens.css.
   https://docs.discord.com/developers/link-previews/component-embeds */
export function buildDiscordEmbed(locale: Locale, dict: Dictionary) {
  const page = `${SITE_URL}${localePath(locale)}`;
  const button = (label: string, url: string) => ({
    type: 2,
    style: 5,
    label,
    url,
  });
  return {
    component: {
      type: 17,
      accent_color: 0xc8acd6,
      components: [
        {
          type: 9,
          components: [
            { type: 10, content: `## [${dict.meta.ogTitle}](${page})` },
            { type: 10, content: `** **\n${dict.meta.ogDescription}` },
          ],
          accessory: { type: 11, media: { url: `${SITE_URL}/apple-icon.png` } },
        },
        { type: 14, divider: true, spacing: 2 },
        {
          type: 12,
          items: [{ media: { url: `${SITE_URL}/social-preview.png` } }],
        },
        { type: 14, divider: true, spacing: 1 },
        {
          type: 1,
          components: [
            button(dict.nav.download, `${page}#download`),
            button(dict.nav.docs, `${SITE_URL}/docs`),
            button("GitHub", "https://github.com/unisic/unisic"),
            button("Discord", DISCORD_URL),
          ],
        },
      ],
    },
  };
}
