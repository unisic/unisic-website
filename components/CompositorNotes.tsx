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
      {/* Uni, the mascot: signs off from the corner beneath the compositor
          notes. Purely decorative, so hidden from assistive tech. Plain <img>
          is deliberate — the static export runs images unoptimized, so
          next/image would add no sizing/format gain here, only weight. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/uni.png"
        alt=""
        aria-hidden="true"
        width={536}
        height={906}
        loading="lazy"
        decoding="async"
        className={styles.mascot}
      />
    </div>
  );
}
