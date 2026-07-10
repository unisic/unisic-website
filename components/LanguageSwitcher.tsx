"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import styles from "./LanguageSwitcher.module.css";
import { LANGUAGES } from "../lib/languages";
import { localePath } from "../lib/i18n/config";
import { GlobeIcon } from "./icons";

/*
 * Nav language picker. Each entry links to that locale's static page
 * (localePath: "/" for English, "/de" … for the rest), so switching is a
 * plain navigation that works with the static export. Keyboard: Enter/Space
 * opens, Escape closes, outside click dismisses.
 */
export function LanguageSwitcher({
  current,
  label,
}: {
  current: string;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const active = LANGUAGES.find((l) => l.code === current) ?? LANGUAGES[0];

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        type="button"
        className={styles.trigger}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={label}
        onClick={() => setOpen((v) => !v)}
      >
        <GlobeIcon size={17} />
        <span className={styles.current}>{active.native}</span>
        <span className={styles.chevron} data-open={open ? "" : undefined} aria-hidden="true" />
      </button>

      {open && (
        <ul className={styles.menu} id={menuId} role="menu">
          {LANGUAGES.map((lang) => {
            const isCurrent = lang.code === current;
            return (
              <li key={lang.code} role="none">
                <Link
                  href={localePath(lang.code)}
                  className={styles.item}
                  role="menuitem"
                  lang={lang.code}
                  hrefLang={lang.code}
                  aria-current={isCurrent ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span className={styles.itemNative}>{lang.native}</span>
                  <span className={styles.itemEnglish}>{lang.english}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
