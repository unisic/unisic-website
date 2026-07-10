import styles from "./Nav.module.css";
import { GitHubIcon, Logo } from "./icons";

export function Nav() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main">
        <a href="#top" className={styles.brand}>
          <Logo size={30} />
          <span className={styles.wordmark}>Unisic</span>
        </a>
        <div className={styles.links}>
          <a href="#features" className={styles.link}>
            Features
          </a>
          <a href="#recording" className={styles.link}>
            Recording
          </a>
          <a
            href="https://github.com/unisic/unisic"
            className={styles.iconLink}
            aria-label="Unisic on GitHub"
          >
            <GitHubIcon size={20} />
          </a>
          <a href="#download" className={styles.cta}>
            Download
          </a>
        </div>
      </nav>
    </header>
  );
}
