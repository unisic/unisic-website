import Link from "next/link";
import styles from "./Hero.module.css";
import { CopyCommand } from "./CopyCommand";
import { EditorMockup } from "./EditorMockup";
import { MainWindowMockup } from "./MainWindowMockup";
import { CheckmarkIcon, GitHubIcon } from "./icons";
import { INSTALL_COMMAND } from "../lib/site";
import type { Dictionary } from "../lib/i18n";

export function Hero({ dict }: { dict: Dictionary }) {
  const h = dict.hero;
  const trust = [h.trust.license, h.trust.privacy, h.trust.sessions];
  return (
    <section className={styles.hero}>
      <p className={styles.eyebrow}>{h.eyebrow}</p>
      <h1 className={styles.headline}>{h.headline}</h1>
      <p className={styles.sub}>{h.sub}</p>

      <div className={styles.install}>
        <p className={styles.installLabel}>{h.installLabel}</p>
        <CopyCommand
          variant="hero"
          command={INSTALL_COMMAND}
          copyLabel={h.copy}
          copiedLabel={h.copied}
        />
        <p className={styles.installNote}>
          {h.installNote}{" "}
          <Link href="/docs/installation/">{h.installRead}</Link>
        </p>
      </div>

      <div className={styles.ctas}>
        <a href="#download" className={styles.secondary}>
          {h.otherWays}
        </a>
        <a href="https://github.com/unisic/unisic" className={styles.secondary}>
          <GitHubIcon size={18} />
          {h.github}
        </a>
      </div>

      <ul className={styles.trust}>
        {trust.map((t) => (
          <li key={t}>
            <CheckmarkIcon size={16} />
            {t}
          </li>
        ))}
      </ul>

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
