import { DEFAULT_LOCALE } from "#lib/i18n/config.ts";
import { getDictionary } from "#lib/i18n/index.ts";
import type { PageLoad } from "./$types";

/* prerendered as out/404.html, nginx's error_page for every missing path */
export const trailingSlash = "never";

export const load: PageLoad = async () => ({ dict: await getDictionary(DEFAULT_LOCALE) });
