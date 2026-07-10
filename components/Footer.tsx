import styles from "./Footer.module.css";
import { Logo } from "./icons";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo size={26} />
          <span>Unisic</span>
          <span className={styles.license}>Free and open source, GPL-3.0</span>
        </div>
        <nav className={styles.links} aria-label="Footer">
          <a href="https://github.com/unisic/unisic" className={styles.link}>
            GitHub
          </a>
          <a
            href="https://github.com/unisic/unisic/releases"
            className={styles.link}
          >
            Releases
          </a>
          <a
            href="https://github.com/unisic/unisic/issues"
            className={styles.link}
          >
            Issues
          </a>
          <a
            href="https://github.com/unisic/unisic/blob/main/LICENSE"
            className={styles.link}
          >
            License
          </a>
        </nav>
      </div>
    </footer>
  );
}
