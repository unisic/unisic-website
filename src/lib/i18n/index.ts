import type { Dictionary } from "./dictionaries/en.ts";
import { DEFAULT_LOCALE, isLocale } from "./config.ts";

/*
 * Loads a locale's dictionary. Every locale is its own chunk, English
 * included: the pages are prerendered, so no locale waits on JS for first
 * paint, and the browser only fetches the one it hydrates with. Unknown
 * locales fall back to English.
 */
const loaders: Record<string, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.ts").then((m) => m.en),
  de: () => import("./dictionaries/de.ts").then((m) => m.de),
  es: () => import("./dictionaries/es.ts").then((m) => m.es),
  fr: () => import("./dictionaries/fr.ts").then((m) => m.fr),
  it: () => import("./dictionaries/it.ts").then((m) => m.it),
  nl: () => import("./dictionaries/nl.ts").then((m) => m.nl),
  pl: () => import("./dictionaries/pl.ts").then((m) => m.pl),
  "zh-Hant": () => import("./dictionaries/zh-Hant.ts").then((m) => m.zhHant),
  "zh-Hans": () => import("./dictionaries/zh-Hans.ts").then((m) => m.zhHans),
};

export async function getDictionary(locale: string): Promise<Dictionary> {
  const key = isLocale(locale) ? locale : DEFAULT_LOCALE;
  return (loaders[key] ?? loaders[DEFAULT_LOCALE])();
}

/* Fill a {token} template: interpolate("Latest release {tag}", {tag}) */
export function interpolate(
  template: string,
  values: Record<string, string>,
): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => values[k] ?? `{${k}}`);
}

export type { Dictionary };
