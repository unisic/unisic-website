import styles from "./RecordingFrame.module.css";
import type { Dictionary } from "../lib/i18n";

/*
 * Static illustration of Unisic's recording overlay (RecordBorder.qml): an
 * accent-colored frame drawn around a screen region, with a "REC 0:42" badge
 * and a pulsing dot. Replaces the former interactive demo — pure server
 * markup, no timer and no client JS. The dot's pulse is CSS-only and stops
 * under prefers-reduced-motion (RecordingFrame.module.css).
 */
export function RecordingFrame({ dict }: { dict: Dictionary }) {
  const r = dict.recording;
  return (
    <figure className={styles.frame}>
      <div className={styles.screen}>
        <div className={styles.wallpaper} aria-hidden="true">
          <div className={styles.ghostCardA}>
            <div className={styles.ghostLines} />
          </div>
          <div className={styles.ghostCardB}>
            <div className={styles.ghostLines} />
          </div>
        </div>

        <div className={styles.region}>
          <span className={styles.badge} aria-hidden="true">
            <span className={styles.dot} />
            REC 0:42
          </span>
        </div>
      </div>
      <figcaption className={styles.srOnly}>{r.caption}</figcaption>
    </figure>
  );
}
