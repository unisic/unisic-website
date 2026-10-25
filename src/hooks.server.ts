import type { Handle } from "@sveltejs/kit/hooks";
import { DEFAULT_LOCALE, isLocale } from "#lib/i18n/config.ts";
import { JSON_LD } from "#lib/server/jsonld.ts";

/* <html lang> follows the first path segment ("/de/" is German, the apex and
   /docs are English), so every prerendered locale ships the right lang
   without a client-side fix-up. */
export const handle: Handle = ({ event, resolve }) => {
  const segment = event.url.pathname.split("/")[1];
  const lang = isLocale(segment) ? segment : DEFAULT_LOCALE;
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace("%lang%", lang).replace("%jsonld%", JSON_LD),
  });
};
