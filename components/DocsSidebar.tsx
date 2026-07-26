"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../app/docs/docs.module.css";
import type { DocGroup } from "../lib/docs";
import { DocsSearch, type SearchDoc } from "./DocsSearch";

/*
 * Docs navigation. A sticky aside on desktop; on narrow screens it folds
 * into a disclosure toggled by the "Menu" button. The active page is matched
 * off the current pathname, and any tap closes the mobile panel. While the
 * search filter has a query, the result list replaces the nav list.
 *
 * data-js gates the mobile nav collapse in docs.module.css; stamped from the
 * client bundle itself for the same reason as Reveal.tsx: the hidden state
 * must only engage when the code that can reopen the panel is provably
 * running. Without JS the full nav renders expanded and the dead Menu
 * button stays hidden.
 */
if (typeof document !== "undefined") {
  document.documentElement.dataset.js = "true";
}
export function DocsSidebar({
  groups,
  searchIndex,
}: {
  groups: DocGroup[];
  searchIndex: SearchDoc[];
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [filtering, setFiltering] = useState(false);
  const close = () => setOpen(false);

  const linkClass = (href: string) =>
    `${styles.navLink}${pathname === href ? ` ${styles.navLinkActive}` : ""}`;

  return (
    <aside className={styles.sidebar}>
      <button
        type="button"
        className={styles.menuToggle}
        aria-expanded={open}
        aria-controls="docs-nav"
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.menuBars} data-open={open ? "" : undefined} aria-hidden="true" />
        Menu
      </button>
      <nav
        id="docs-nav"
        className={styles.sidebarNav}
        data-open={open ? "" : undefined}
        aria-label="Documentation"
      >
        <DocsSearch
          index={searchIndex}
          onActiveChange={setFiltering}
          onNavigate={close}
        />
        {!filtering && (
          <>
            <Link href="/docs" className={linkClass("/docs")} onClick={close}>
              Overview
            </Link>
            {groups.map((group) => (
              <div key={group.group || "root"} className={styles.navGroup}>
                {group.group && (
                  <p className={styles.navGroupTitle}>{group.group}</p>
                )}
                <ul className={styles.navList}>
                  {group.docs.map((doc) => {
                    const href = `/docs/${doc.slug}`;
                    return (
                      <li key={doc.slug}>
                        <Link
                          href={href}
                          className={linkClass(href)}
                          aria-current={pathname === href ? "page" : undefined}
                          onClick={close}
                        >
                          {doc.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </>
        )}
      </nav>
    </aside>
  );
}
