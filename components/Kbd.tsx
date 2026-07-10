import styles from "./Kbd.module.css";

export function Kbd({
  keys,
  pressed,
}: {
  keys: string[];
  pressed?: ReadonlySet<string>;
}) {
  return (
    <span className={styles.combo}>
      {keys.map((k, i) => (
        <span key={k + i} className={styles.group}>
          {i > 0 && <span aria-hidden="true" className={styles.plus}>+</span>}
          <kbd
            className={styles.key}
            data-pressed={pressed?.has(k) ? "" : undefined}
          >
            {k}
          </kbd>
        </span>
      ))}
    </span>
  );
}
