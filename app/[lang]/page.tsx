import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Landing } from "../../components/Landing";
import { getDictionary } from "../../lib/i18n";
import { buildMetadata } from "../../lib/i18n/metadata";
import {
  PREFIXED_LOCALES,
  isLocale,
  DEFAULT_LOCALE,
} from "../../lib/i18n/config";

/* One static page per non-default locale ("/de", "/zh-Hant", ...). English
   lives at the apex, so it is excluded here; unlisted paths 404. */
export function generateStaticParams() {
  return PREFIXED_LOCALES.map((lang) => ({ lang }));
}

export const dynamicParams = false;

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang) || lang === DEFAULT_LOCALE) return {};
  const dict = await getDictionary(lang);
  return buildMetadata(lang, dict);
}

export default async function LocalePage({ params }: Params) {
  const { lang } = await params;
  if (!isLocale(lang) || lang === DEFAULT_LOCALE) notFound();
  const dict = await getDictionary(lang);
  /* The root layout owns <html> and cannot read the [lang] param, so the
     static export ships every locale with lang="en". This corrects it during
     HTML parse — a client component did the same in an effect, one hydration
     boundary later. `lang` is already validated against the locale list. */
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(lang)}`,
        }}
      />
      <Landing dict={dict} locale={lang} />
    </>
  );
}
