import styles from "./CompositorNotes.module.css";
import type { Dictionary } from "../lib/i18n";

export function CompositorNotes({ dict }: { dict: Dictionary }) {
  const c = dict.compositors;
  const notes = [c.plasma, c.gnome, c.wlroots];
  return (
    <div>
      <h3 className={styles.title}>{c.title}</h3>
      <dl className={styles.list}>
        {notes.map((n) => (
          <div key={n.name} className={styles.item}>
            <dt className={styles.name}>{n.name}</dt>
            <dd className={styles.body}>{n.body}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
