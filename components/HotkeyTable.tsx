"use client";

import { useEffect, useState } from "react";
import styles from "./HotkeyTable.module.css";
import { Kbd } from "./Kbd";
import type { Dictionary } from "../lib/i18n";

/* Key combos are fixed data; the action label is pulled from the dictionary
   by id so only the prose translates. */
const HOTKEY_KEYS: Array<{ id: keyof Dictionary["hotkeys"]["rows"]; keys: string[] }> = [
  { id: "full", keys: ["Meta", "Shift", "1"] },
  { id: "region", keys: ["Meta", "Shift", "2"] },
  { id: "window", keys: ["Meta", "Shift", "3"] },
  { id: "gif", keys: ["Meta", "Shift", "G"] },
  { id: "video", keys: ["Meta", "Shift", "R"] },
  { id: "stop", keys: ["Ctrl", "Esc"] },
];

/* KeyboardEvent to the table's key vocabulary. Letters and digits come
   from e.code so Shift-shifted characters ("!" for 1) still match. */
function normalize(e: KeyboardEvent): string | null {
  if (e.key === "Control") return "Ctrl";
  if (e.key === "Escape") return "Esc";
  if (e.key === "Shift" || e.key === "Meta") return e.key;
  const m = /^(?:Key([A-Z])|Digit([0-9]))$/.exec(e.code);
  if (m) return m[1] ?? m[2];
  return null;
}

function isEditable(t: EventTarget | null) {
  return (
    t instanceof HTMLElement &&
    (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))
  );
}

/*
 * Live hotkey table: holding a shortcut on the real keyboard lights up the
 * matching caps and row. Compositor-grabbed combos may never reach the
 * browser; whatever does arrive is reflected. Keys are cleared on window
 * blur, since an OS shortcut (or a real screenshot) can swallow the keyup.
 */
export function HotkeyTable({ dict }: { dict: Dictionary }) {
  const h = dict.hotkeys;
  const [pressed, setPressed] = useState<ReadonlySet<string>>(new Set());

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.repeat || isEditable(e.target)) return;
      const k = normalize(e);
      if (!k) return;
      setPressed((prev) => {
        if (prev.has(k)) return prev;
        const next = new Set(prev);
        next.add(k);
        return next;
      });
    };
    const up = (e: KeyboardEvent) => {
      const k = normalize(e);
      if (!k) return;
      setPressed((prev) => {
        if (!prev.has(k)) return prev;
        const next = new Set(prev);
        next.delete(k);
        return next;
      });
    };
    const clear = () => setPressed(new Set());
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    window.addEventListener("blur", clear);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      window.removeEventListener("blur", clear);
    };
  }, []);

  return (
    <div>
      <h3 className={styles.caption}>{h.caption}</h3>
      <table className={styles.table}>
        <caption className={styles.headCell}>{h.caption}</caption>
        <thead>
          <tr>
            <th scope="col" className={styles.headCell}>
              {h.action}
            </th>
            <th scope="col" className={styles.headCell}>
              {h.shortcut}
            </th>
          </tr>
        </thead>
        <tbody>
          {HOTKEY_KEYS.map((row) => (
            <tr
              key={row.id}
              className={styles.row}
              data-hit={row.keys.every((k) => pressed.has(k)) ? "" : undefined}
            >
              <td className={styles.action}>{h.rows[row.id]}</td>
              <td className={styles.keys}>
                <Kbd keys={row.keys} pressed={pressed} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className={styles.tryHint}>{h.tryHint}</p>
      <p className={styles.note}>{h.note}</p>
    </div>
  );
}
