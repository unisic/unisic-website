import type { Metadata } from "next";
import { Landing } from "../components/Landing";
import { getDictionary } from "../lib/i18n";
import { buildMetadata } from "../lib/i18n/metadata";
import { DEFAULT_LOCALE } from "../lib/i18n/config";

/* English is the default locale, served unprefixed at the apex. */
export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary(DEFAULT_LOCALE);
  return buildMetadata(DEFAULT_LOCALE, dict);
}

export default async function Home() {
  const dict = await getDictionary(DEFAULT_LOCALE);
  return <Landing dict={dict} locale={DEFAULT_LOCALE} />;
}
