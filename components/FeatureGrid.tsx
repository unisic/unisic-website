import styles from "./FeatureGrid.module.css";
import { EditorDemo } from "./EditorDemo";
import { CheckmarkIcon, ImageIcon, LockIcon, MonitorIcon } from "./icons";

export function FeatureGrid() {
  return (
    <div className={styles.grid} data-stagger="">
      <article className={`${styles.cell} ${styles.editor}`}>
        <EditorDemo />
        <h3 className={styles.cellTitle}>A real editor, not a crop box</h3>
        <p className={styles.cellBody}>
          Twelve tools including highlight, pixelate, smart eraser, numbered
          steps and crop. Undo, redo, zoom, all in image-pixel space — and
          this card is running them right now.
        </p>
      </article>

      <article className={styles.cell}>
        <div className={styles.uploadVisual} aria-hidden="true">
          <span className={styles.linkPill}>https://i.example.net/8fx2.png</span>
          <span className={styles.copiedChip}>
            <CheckmarkIcon size={13} />
            Copied
          </span>
        </div>
        <h3 className={styles.cellTitle}>Upload anywhere</h3>
        <p className={styles.cellBody}>
          Custom HTTP destinations, ShareX uploader import, FTP and SFTP,
          built-in hosts. The link lands in your clipboard.
        </p>
      </article>

      <article className={styles.cell}>
        <div className={styles.thumbRow} aria-hidden="true">
          <span className={styles.thumbA} />
          <span className={styles.thumbB} />
          <span className={styles.thumbC} />
          <span className={styles.thumbD}>
            <ImageIcon size={16} />
          </span>
        </div>
        <h3 className={styles.cellTitle}>History with thumbnails</h3>
        <p className={styles.cellBody}>
          Every capture, one grid away. Deleting moves the file to the trash,
          never past it.
        </p>
      </article>

      <article className={styles.cell}>
        <span className={styles.cellIcon} aria-hidden="true">
          <MonitorIcon size={20} />
        </span>
        <h3 className={styles.cellTitle}>Silent capture</h3>
        <p className={styles.cellBody}>
          No shutter flash, no window juggling. Native KWin path on Plasma,
          portals everywhere else.
        </p>
      </article>

      <article className={styles.cell}>
        <span className={styles.cellIcon} aria-hidden="true">
          <LockIcon size={20} />
        </span>
        <h3 className={styles.cellTitle}>Yours, entirely</h3>
        <p className={styles.cellBody}>
          Zero telemetry, no accounts, nothing phones home. GPL-3.0 licensed
          and built in the open.
        </p>
      </article>
    </div>
  );
}
