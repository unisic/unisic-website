import styles from "./Steps.module.css";
import { Kbd } from "./Kbd";
import { template } from "../lib/template";
import type { Dictionary } from "../lib/i18n";

/* Three numbered steps, plain markup. The ol keeps its list semantics
   (role="list" restores them where list-style: none strips them) so a screen
   reader announces "list, 3 items" and each step's position. */
export function Steps({ dict }: { dict: Dictionary }) {
  const s = dict.how.steps;
  const steps = [
    {
      title: s.hotkey.title,
      body: template(s.hotkey.body, { keys: <Kbd keys={["Meta", "Shift", "2"]} /> }),
    },
    { title: s.mark.title, body: s.mark.body },
    { title: s.share.title, body: s.share.body },
  ];
  return (
    <ol className={styles.steps} role="list">
      {steps.map((step, i) => (
        <li key={step.title} className={styles.step}>
          <span className={styles.num} aria-hidden="true">
            {i + 1}
          </span>
          <h3 className={styles.title}>{step.title}</h3>
          <p className={styles.body}>{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
