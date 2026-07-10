import styles from "./Footer.module.css";
import { Logo } from "./icons";
import type { Dictionary } from "../lib/i18n";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo size={26} />
          <span>Unisic</span>
          <span className={styles.license}>{dict.footer.license}</span>
        </div>
        <nav className={styles.links} aria-label={dict.footer.nav}>
          <a href="https://github.com/unisic/unisic" className={styles.link}>
            {dict.footer.github}
          </a>
          <a
            href="https://github.com/unisic/unisic/releases"
            className={styles.link}
          >
            {dict.footer.releases}
          </a>
          <a
            href="https://github.com/unisic/unisic/issues"
            className={styles.link}
          >
            {dict.footer.issues}
          </a>
          <a
            href="https://github.com/unisic/unisic/blob/main/LICENSE"
            className={styles.link}
          >
            {dict.footer.licenseLink}
          </a>
        </nav>
      </div>
    </footer>
  );
}
