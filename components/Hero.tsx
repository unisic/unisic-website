import styles from "./Hero.module.css";
import { EditorMockup } from "./EditorMockup";
import { MainWindowMockup } from "./MainWindowMockup";
import { GitHubIcon } from "./icons";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <h1 className={styles.headline}>
          Screenshots done right on Linux Wayland.
        </h1>
        <p className={styles.sub}>
          Silent capture, annotation before the shot, a 12-tool editor, GIF
          and video recording, instant upload. Zero telemetry. GPLv3.
        </p>
        <div className={styles.ctas}>
          <a href="#download" className={styles.primary}>
            Download
          </a>
          <a href="https://github.com/unisic/unisic" className={styles.secondary}>
            <GitHubIcon size={17} />
            View on GitHub
          </a>
        </div>
      </div>
      <div className={styles.visual}>
        <div className={styles.stack}>
          <div className={styles.mainWin}>
            <MainWindowMockup />
          </div>
          <div className={styles.editorWin}>
            <EditorMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
