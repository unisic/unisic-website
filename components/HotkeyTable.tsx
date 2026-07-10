import styles from "./HotkeyTable.module.css";
import { Kbd } from "./Kbd";

const HOTKEYS: Array<{ action: string; keys: string[] }> = [
  { action: "Capture full screen", keys: ["Meta", "Shift", "1"] },
  { action: "Capture region", keys: ["Meta", "Shift", "2"] },
  { action: "Capture active window", keys: ["Meta", "Shift", "3"] },
  { action: "Record GIF (region)", keys: ["Meta", "Shift", "G"] },
  { action: "Record video (region)", keys: ["Meta", "Shift", "R"] },
  { action: "Stop recording (fixed)", keys: ["Ctrl", "Esc"] },
];

export function HotkeyTable() {
  return (
    <div>
      <table className={styles.table}>
        <caption className={styles.caption}>Default hotkeys</caption>
        <thead>
          <tr>
            <th scope="col" className={styles.headCell}>
              Action
            </th>
            <th scope="col" className={styles.headCell}>
              Shortcut
            </th>
          </tr>
        </thead>
        <tbody>
          {HOTKEYS.map((h) => (
            <tr key={h.action} className={styles.row}>
              <td className={styles.action}>{h.action}</td>
              <td className={styles.keys}>
                <Kbd keys={h.keys} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className={styles.note}>
        All but the fixed stop key are editable in Settings, applied to the
        system immediately.
      </p>
    </div>
  );
}
