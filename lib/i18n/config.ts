import { LANGUAGES } from "../languages";

/*
 * The site's locales. English is the default and is served unprefixed at the
 * apex ("/"); every other locale lives under its own path segment ("/de",
 * "/zh-Hant", …). Codes are BCP-47 and mirror lib/languages.ts, which also
 * carries the endonym shown in the switcher.
 */

export const LOCALES = LANGUAGES.map((l) => l.code);
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/* Non-default locales only — these get a path prefix and a static page each. */
export const PREFIXED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

export function isLocale(value: string): value is Locale {
  return (LOCALES as string[]).includes(value);
}

/* "/" for English, "/de" etc. for the rest. */
export function localePath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "/" : `/${locale}`;
}
