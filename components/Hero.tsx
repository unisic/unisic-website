import styles from "./Hero.module.css";
import { EditorMockup } from "./EditorMockup";
import { MainWindowMockup } from "./MainWindowMockup";
import { GitHubIcon } from "./icons";
import type { Dictionary } from "../lib/i18n";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <h1 className={styles.headline}>{dict.hero.headline}</h1>
        <p className={styles.sub}>{dict.hero.sub}</p>
        <div className={styles.ctas}>
          <a href="#download" className={`${styles.primary} shine`}>
            {dict.hero.download}
          </a>
          <a href="https://github.com/unisic/unisic" className={styles.secondary}>
            <GitHubIcon size={17} />
            {dict.hero.github}
          </a>
        </div>
      </div>
      <div className={styles.visual}>
        <div className={styles.stack}>
          <div className={styles.mainWin}>
            <MainWindowMockup dict={dict} />
          </div>
          <div className={styles.editorWin}>
            <EditorMockup dict={dict} />
          </div>
        </div>
      </div>
    </section>
  );
}
