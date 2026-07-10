import styles from "./FeatureGrid.module.css";
import { EditorDemo } from "./EditorDemo";
import { Spotlight } from "./Spotlight";
import { CheckmarkIcon, ImageIcon, LockIcon, MonitorIcon } from "./icons";
import type { Dictionary } from "../lib/i18n";

/* Server component: only the cursor spotlight is interactive, and that lives
   in the thin <Spotlight> client island, so these cells and their icons ship
   as static markup (EditorDemo is its own client island). */
export function FeatureGrid({ dict }: { dict: Dictionary }) {
  const f = dict.features;
  return (
    <div className={styles.grid} data-stagger="">
      <Spotlight className={`${styles.cell} ${styles.editor}`}>
        <EditorDemo dict={dict} />
        <h3 className={styles.cellTitle}>{f.editor.title}</h3>
        <p className={styles.cellBody}>{f.editor.body}</p>
      </Spotlight>

      <Spotlight className={styles.cell}>
        <div className={styles.uploadVisual} aria-hidden="true">
          <span className={styles.linkPill}>https://i.example.net/8fx2.png</span>
          <span className={styles.copiedChip}>
            <CheckmarkIcon size={13} />
            {f.upload.copied}
          </span>
        </div>
        <h3 className={styles.cellTitle}>{f.upload.title}</h3>
        <p className={styles.cellBody}>{f.upload.body}</p>
      </Spotlight>

      <Spotlight className={styles.cell}>
        <div className={styles.thumbRow} aria-hidden="true">
          <span className={styles.thumbA} />
          <span className={styles.thumbB} />
          <span className={styles.thumbC} />
          <span className={styles.thumbD}>
            <ImageIcon size={16} />
          </span>
        </div>
        <h3 className={styles.cellTitle}>{f.history.title}</h3>
        <p className={styles.cellBody}>{f.history.body}</p>
      </Spotlight>

      <Spotlight className={styles.cell}>
        <span className={styles.cellIcon} aria-hidden="true">
          <MonitorIcon size={20} />
        </span>
        <h3 className={styles.cellTitle}>{f.silent.title}</h3>
        <p className={styles.cellBody}>{f.silent.body}</p>
      </Spotlight>

      <Spotlight className={styles.cell}>
        <span className={styles.cellIcon} aria-hidden="true">
          <LockIcon size={20} />
        </span>
        <h3 className={styles.cellTitle}>{f.yours.title}</h3>
        <p className={styles.cellBody}>{f.yours.body}</p>
      </Spotlight>
    </div>
  );
}
