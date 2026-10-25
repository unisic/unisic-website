import { DEFAULT_LOCALE, PREFIXED_LOCALES } from "#lib/i18n/config.ts";
import { getDictionary } from "#lib/i18n/index.ts";
import type { EntryGenerator, PageLoad } from "./$types";

/* English at the apex, one prefixed page per other locale ("/de/", ...) */
export const entries: EntryGenerator = () => [{ lang: undefined }, ...PREFIXED_LOCALES.map((lang) => ({ lang }))];

export const load: PageLoad = async ({ params }) => {
  const locale = params.lang ?? DEFAULT_LOCALE;
  return { locale, dict: await getDictionary(locale) };
};
