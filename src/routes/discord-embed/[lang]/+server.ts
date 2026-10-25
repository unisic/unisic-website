import { error } from "@sveltejs/kit";
import { LOCALES, isLocale } from "#lib/i18n/config.ts";
import { getDictionary } from "#lib/i18n/index.ts";
import { buildDiscordEmbed } from "#lib/i18n/metadata.ts";
import type { EntryGenerator, RequestHandler } from "./$types";

/* One static JSON per locale, written to out/discord-embed/<lang> at build;
   nginx serves that directory as application/json. */
export const prerender = true;
export const trailingSlash = "never";
export const entries: EntryGenerator = () => LOCALES.map((lang) => ({ lang }));

export const GET: RequestHandler = async ({ params }) => {
  if (!isLocale(params.lang)) error(404);
  const body = JSON.stringify(buildDiscordEmbed(params.lang, await getDictionary(params.lang)));
  /* Discord drops an oversized payload without falling back cleanly, so a
     long translation fails the build instead of shipping a blank preview. */
  const bytes = Buffer.byteLength(body);
  if (bytes > 3000) throw new Error(`Discord embed for "${params.lang}" is ${bytes} bytes, limit 3000`);
  return new Response(body, { headers: { "Content-Type": "application/json" } });
};
