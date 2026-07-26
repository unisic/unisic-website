"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "../app/docs/docs.module.css";

/*
 * Sidebar docs filter. The corpus (page titles plus h2/h3 headings with
 * their anchor ids) is computed at build time in the docs layout and passed
 * down as a prop, so filtering is a plain substring match over a ~2KB array;
 * no search dependency. While a query is active the parent swaps the nav
 * list for the result list (onActiveChange). The input renders server-side
 * too (so it reserves its space and mounting does not shove the nav down)
 * but stays disabled until hydration, which keeps it honestly inert for
 * no-JS visitors. "/" focuses the field from anywhere on the page (desktop
 * only, where it is not inside the collapsed mobile panel), Escape clears it.
 */
export type SearchDoc = {
  slug: string;
  title: string;
  headings: { id: string; text: string }[];
};

type Result = { href: string; text: string; crumb?: string };

export function DocsSearch({
  index,
  onActiveChange,
  onNavigate,
}: {
  index: SearchDoc[];
  onActiveChange: (active: boolean) => void;
  onNavigate: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey)
        return;
      // Below 860px the input lives inside the collapsed nav panel where
      // focus() is a no-op; leave "/" to type normally there.
      if (window.matchMedia("(max-width: 860px)").matches) return;
      // Never steal "/" from another text field
      const el = document.activeElement;
      if (
        el instanceof HTMLElement &&
        (el.tagName === "INPUT" ||
          el.tagName === "TEXTAREA" ||
          el.isContentEditable)
      )
        return;
      event.preventDefault();
      inputRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const update = (value: string) => {
    setQuery(value);
    onActiveChange(value.trim().length > 0);
  };

  const q = mounted ? query.trim().toLowerCase() : "";
  const results: Result[] = [];
  if (q) {
    for (const doc of index) {
      if (doc.title.toLowerCase().includes(q)) {
        results.push({ href: `/docs/${doc.slug}`, text: doc.title });
      }
      for (const heading of doc.headings) {
        if (heading.text.toLowerCase().includes(q)) {
          results.push({
            href: `/docs/${doc.slug}#${heading.id}`,
            text: heading.text,
            crumb: doc.title,
          });
        }
      }
    }
  }

  return (
    <>
      <input
        ref={inputRef}
        type="search"
        className={styles.searchInput}
        placeholder="Filter docs"
        aria-label="Filter docs"
        value={mounted ? query : ""}
        disabled={!mounted}
        onChange={(event) => update(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Escape") update("");
        }}
      />
      {/* Announce the outcome so screen-reader users hear the list change. */}
      <span className="sr-only" role="status" aria-live="polite">
        {q
          ? results.length > 0
            ? `${results.length} result${results.length === 1 ? "" : "s"}`
            : "No matches"
          : ""}
      </span>
      {q &&
        (results.length > 0 ? (
          <ul className={styles.searchResults}>
            {results.map((result) => (
              <li key={result.href}>
                <Link
                  href={result.href}
                  className={styles.navLink}
                  onClick={() => {
                    update("");
                    onNavigate();
                  }}
                >
                  {result.crumb && (
                    <span className={styles.searchCrumb}>{result.crumb}</span>
                  )}
                  {result.text}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.searchEmpty}>No matches</p>
        ))}
    </>
  );
}
