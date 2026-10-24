import { getDictionary } from "../../../lib/i18n";
import { LOCALES, isLocale } from "../../../lib/i18n/config";
import { buildDiscordEmbed } from "../../../lib/i18n/metadata";

/* One static JSON per locale, written to out/discord-embed/<lang> at build. */
export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ lang: string }> },
) {
  const { lang } = await params;
  if (!isLocale(lang)) return new Response(null, { status: 404 });
  const body = JSON.stringify(buildDiscordEmbed(lang, await getDictionary(lang)));
  /* Discord drops an oversized payload without falling back cleanly, so a
     long translation fails the build instead of shipping a blank preview. */
  const bytes = Buffer.byteLength(body);
  if (bytes > 3000) {
    throw new Error(`Discord embed for "${lang}" is ${bytes} bytes, limit 3000`);
  }
  return new Response(body, {
    headers: { "Content-Type": "application/json" },
  });
}
