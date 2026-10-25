import { defineParams } from "@sveltejs/kit/params";
import { PREFIXED_LOCALES } from "#lib/i18n/config.ts";

export const params = defineParams({
  // only the prefixed locales; English lives at the apex with no segment
  locale: (param: string) => (PREFIXED_LOCALES.includes(param) ? param : undefined),
});
