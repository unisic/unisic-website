import Link from "next/link";
import styles from "./Nav.module.css";
import { GitHubIcon, Logo } from "./icons";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { Dictionary } from "../lib/i18n";

export function Nav({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: string;
}) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main">
        {/* aria-label keeps the brand link named for screen readers below
            480px, where .wordmark is hidden and the Logo svg is aria-hidden */}
        <a href="#top" className={styles.brand} aria-label="Unisic">
          <Logo size={30} />
          <span className={styles.wordmark}>Unisic</span>
        </a>
        <div className={styles.links}>
          <a href="#features" className={styles.link}>
            {dict.nav.features}
          </a>
          <a href="#recording" className={styles.link}>
            {dict.nav.recording}
          </a>
          <Link href="/docs" className={`${styles.link} ${styles.linkDocs}`}>
            {dict.nav.docs}
          </Link>
          <a
            href="https://github.com/unisic/unisic"
            className={styles.iconLink}
            aria-label={dict.nav.github}
          >
            <GitHubIcon size={20} />
          </a>
          <LanguageSwitcher
            current={locale}
            label={dict.languageSwitcher.label}
          />
          <a href="#download" className={`${styles.cta} shine`}>
            {dict.nav.download}
          </a>
        </div>
      </nav>
      <span className={styles.progress} aria-hidden="true" />
    </header>
  );
}
