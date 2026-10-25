import { DISCORD_URL, SITE_URL } from "../site.ts";
import { LOCALES, localePath, type Locale } from "./config.ts";
import type { Dictionary } from "./dictionaries/en.ts";

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

/* Absolute URL with the trailing slash every page is served under, so the
   canonical, hreflang and sitemap spellings are byte-identical. */
export const absUrl = (path: string) => `${SITE_URL}${path.replace(/\/?$/, "/")}`;

export type HeadMeta = {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogType: "website" | "article";
  ogLocale?: string;
  imageAlt?: string;
  /* hreflang code to absolute URL; landing pages only (the docs are English). */
  alternates?: [string, string][];
  discordEmbed?: string;
};

/* hreflang alternates: x-default at the apex, then every locale. */
export const LANGUAGE_ALTERNATES: [string, string][] = [
  ["x-default", absUrl("/")],
  ...LOCALES.map((l): [string, string] => [l, absUrl(localePath(l))]),
];

/* Per-locale <head> metadata for the landing page, shared by the apex (en)
   and every prefixed locale so title, canonical and hreflang stay in sync. */
export function landingMeta(locale: Locale, dict: Dictionary): HeadMeta {
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    canonical: absUrl(localePath(locale)),
    ogTitle: dict.meta.ogTitle,
    ogDescription: dict.meta.ogDescription,
    ogType: "website",
    ogLocale: OG_LOCALE[locale],
    imageAlt: dict.meta.ogImageAlt,
    alternates: LANGUAGE_ALTERNATES,
    discordEmbed: `${SITE_URL}/discord-embed/${locale}`,
  };
}

/* Discord shows this in place of the OG card when a landing page link is
   pasted. It is served per locale by routes/discord-embed/[lang]/+server.ts
   and linked from the landing <head> only, so docs pages keep their own OG
   cards. Accent is --accent from tokens.css.
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
