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
          is deliberate - the static export runs images unoptimized, so
          next/image would add no sizing/format gain here, only weight. Which
          is also why the source is a 400px WebP: it fills a 200px slot, and
          the 536px PNG it replaced was 588 KB of the landing page. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/uni.webp"
        alt=""
        aria-hidden="true"
        width={400}
        height={676}
        loading="lazy"
        decoding="async"
        className={styles.mascot}
      />
    </div>
  );
}
