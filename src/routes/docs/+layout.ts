import { DEFAULT_LOCALE } from "#lib/i18n/config.ts";
import { getDictionary } from "#lib/i18n/index.ts";
import type { LayoutLoad } from "./$types";

/* The docs are English only. The dictionary (skip link, footer) loads here
   rather than in +layout.server.ts, so the client reuses the shared en chunk
   instead of an 11KB copy inlined into every docs page's data. */
export const load: LayoutLoad = async ({ data }) => ({ ...data, dict: await getDictionary(DEFAULT_LOCALE) });
