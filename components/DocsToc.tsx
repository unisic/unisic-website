"use client";

import { useEffect, useState } from "react";
import styles from "../app/docs/docs.module.css";
import type { TocEntry } from "../lib/docs";

/*
 * On-this-page rail with scroll-spy. Server-renders the same markup the page
 * always had (the no-JS fallback: plain working anchor links), then an
 * IntersectionObserver lights up the section under the reader. The top
 * rootMargin matches the sticky header + heading scroll-margin (88px); the
 * -66% bottom margin keeps the observation band near the top of the viewport
 * so the highlight tracks what the reader is actually looking at.
 */
export function DocsToc({ toc }: { toc: TocEntry[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const headings = toc
      .map((entry) => document.getElementById(entry.id))
      .filter((el): el is HTMLElement => el !== null);
    if (headings.length === 0) return;

    /* Track which headings sit inside the band and highlight the topmost
       (toc order = document order). Between sections nothing intersects;
       the last active id is kept, so the highlight never flickers off. */
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        const current = toc.find((entry) => visible.has(entry.id));
        if (current) setActiveId(current.id);
      },
      { rootMargin: "-88px 0px -66% 0px" },
    );
    headings.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [toc]);

  const linkClass = (entry: TocEntry) => {
    const classes = [styles.tocLink];
    if (entry.depth === 3) classes.push(styles.tocLinkSub);
    if (entry.id === activeId) classes.push(styles.tocLinkActive);
    return classes.join(" ");
  };

  return (
    <aside className={styles.toc} aria-label="On this page">
      <p className={styles.tocTitle}>On this page</p>
      <ul className={styles.tocList}>
        {toc.map((entry) => (
          <li key={entry.id}>
            <a
              href={`#${entry.id}`}
              className={linkClass(entry)}
              aria-current={entry.id === activeId ? "true" : undefined}
            >
              {entry.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
