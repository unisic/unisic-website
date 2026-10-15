import Link from "next/link";
import styles from "./FeatureGrid.module.css";
import { EditorPreview } from "./EditorPreview";
import { CheckmarkIcon, ImageIcon, LockIcon } from "./icons";
import type { Dictionary } from "../lib/i18n";

/* desktops the capture paths in docs/compositors cover; brand names */
const DESKTOPS = ["KDE Plasma", "GNOME", "niri", "Sway", "Hyprland"];

/* Fully static server component: every cell, its icons and the editor
   preview ship as plain markup, no client JS. The flagship editor cell leads
   with the app's floating annotation toolbar (EditorPreview).

   Four of the six titles link into the docs page that covers that feature.
   The landing page is the only page with any inbound authority and it
   otherwise reaches /docs through a single nav link; routing through the
   already-translated card titles costs no new dictionary keys. */
export function FeatureGrid({ dict }: { dict: Dictionary }) {
  const f = dict.features;
  return (
    <div className={styles.grid}>
      <article className={`${styles.cell} ${styles.editor}`}>
        <EditorPreview />
        <h3 className={styles.cellTitle}>
          <Link href="/docs/editor/">{f.editor.title}</Link>
        </h3>
        <p className={styles.cellBody}>{f.editor.body}</p>
      </article>

      <article className={styles.cell}>
        <div className={styles.uploadVisual} aria-hidden="true">
          <span className={styles.linkPill}>https://i.example.net/8fx2.png</span>
          <span className={styles.copiedChip}>
            <CheckmarkIcon size={13} />
            {f.upload.copied}
          </span>
        </div>
        <h3 className={styles.cellTitle}>
          <Link href="/docs/upload-destinations/">{f.upload.title}</Link>
        </h3>
        <p className={styles.cellBody}>{f.upload.body}</p>
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
        <h3 className={styles.cellTitle}>{f.history.title}</h3>
        <p className={styles.cellBody}>{f.history.body}</p>
      </article>

      <article className={styles.cell}>
        <ul className={styles.desktops}>
          {DESKTOPS.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <h3 className={styles.cellTitle}>
          <Link href="/docs/compositors/">{f.silent.title}</Link>
        </h3>
        <p className={styles.cellBody}>{f.silent.body}</p>
      </article>

      <article className={styles.cell}>
        <div className={styles.ocrVisual} aria-hidden="true">
          <span className={styles.ocrRegion}>
            <span className={styles.ocrLine} />
            <span className={styles.ocrLineShort} />
          </span>
          <span className={styles.copiedChip}>
            <CheckmarkIcon size={13} />
            {f.upload.copied}
          </span>
        </div>
        <h3 className={styles.cellTitle}>
          <Link href="/docs/capture/#copy-text-out-of-a-region-ocr">{f.ocr.title}</Link>
        </h3>
        <p className={styles.cellBody}>{f.ocr.body}</p>
      </article>

      <article className={styles.cell}>
        <span className={styles.cellIcon} aria-hidden="true">
          <LockIcon size={20} />
        </span>
        <h3 className={styles.cellTitle}>{f.yours.title}</h3>
        <p className={styles.cellBody}>{f.yours.body}</p>
      </article>
    </div>
  );
}
