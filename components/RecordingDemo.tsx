import styles from "./RecordingDemo.module.css";
import { RecTimer } from "./RecTimer";

/*
 * Mini-recreation of the recording region frame (unisic/qml/RecordBorder.qml):
 * a 3px accent frame with 1px dark contrast lines and a "REC m:ss" badge
 * with a smoothly pulsing dot and live-ticking timer (both static under
 * reduced motion).
 */
export function RecordingDemo() {
  return (
    <figure
      className={styles.frame}
      role="img"
      aria-label="A screen region being recorded: Unisic draws an accent-colored frame around the region with a REC badge and elapsed timer."
    >
      <div className={styles.screen} aria-hidden="true">
        <div className={styles.wallpaper}>
          <div className={styles.ghostCardA}>
            <div className={styles.ghostLines} />
          </div>
          <div className={styles.ghostCardB}>
            <div className={styles.ghostLines} />
          </div>
        </div>

        <div className={styles.region}>
          <span className={styles.badge}>
            <span className={styles.dot} />
            <RecTimer />
          </span>
        </div>
      </div>
    </figure>
  );
}
