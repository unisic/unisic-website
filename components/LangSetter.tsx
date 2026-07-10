"use client";

import { useEffect } from "react";

/*
 * Static export can't set <html lang> per locale from the single root layout
 * (it owns the html tag and can't read the [lang] param). This tiny island,
 * rendered inside the [lang] layout, corrects document.documentElement.lang
 * on the client so assistive tech and the browser see the right language.
 * The hreflang alternates in <head> carry the SEO signal regardless.
 */
export function LangSetter({ locale }: { locale: string }) {
  useEffect(() => {
    const prev = document.documentElement.lang;
    document.documentElement.lang = locale;
    return () => {
      document.documentElement.lang = prev;
    };
  }, [locale]);
  return null;
}
