import { en, type Dictionary } from "./dictionaries/en";
import { DEFAULT_LOCALE, isLocale } from "./config";

/*
 * Loads a locale's dictionary. English is bundled directly (it is the LCP
 * locale at the apex); the rest are code-split and pulled in on demand at
 * build time for their static page. Unknown locales fall back to English.
 */
const loaders: Record<string, () => Promise<Dictionary>> = {
  en: async () => en,
  de: () => import("./dictionaries/de").then((m) => m.de),
  es: () => import("./dictionaries/es").then((m) => m.es),
  fr: () => import("./dictionaries/fr").then((m) => m.fr),
  it: () => import("./dictionaries/it").then((m) => m.it),
  nl: () => import("./dictionaries/nl").then((m) => m.nl),
  pl: () => import("./dictionaries/pl").then((m) => m.pl),
  "zh-Hant": () => import("./dictionaries/zh-Hant").then((m) => m.zhHant),
  "zh-Hans": () => import("./dictionaries/zh-Hans").then((m) => m.zhHans),
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
