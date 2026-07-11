import Link from "next/link";
import styles from "../app/docs/docs.module.css";
import { GitHubIcon, Logo } from "./icons";

/*
 * Docs section header. Mirrors the landing Nav's sticky glass bar, but its
 * links point back into the marketing site (the docs are a self-contained
 * English section), so it never depends on the i18n dictionary.
 */
export function DocsHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.brand}>
          <Logo size={28} />
          <span className={styles.wordmark}>Unisic</span>
          <span className={styles.badge}>Docs</span>
        </Link>
        <div className={styles.headerLinks}>
          <Link href="/" className={styles.headerLink}>
            Home
          </Link>
          <a
            href="https://github.com/unisic/unisic"
            className={styles.iconLink}
            aria-label="Unisic on GitHub"
          >
            <GitHubIcon size={20} />
          </a>
          <Link href="/#download" className={`${styles.cta} shine`}>
            Download
          </Link>
        </div>
      </div>
    </header>
  );
}
