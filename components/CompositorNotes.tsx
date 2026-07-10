import styles from "./CompositorNotes.module.css";

const NOTES = [
  {
    name: "KDE Plasma",
    body: "The fully silent path: native KWin ScreenShot2 with KGlobalAccel hotkeys. No portal dialogs at all.",
  },
  {
    name: "GNOME and other desktops",
    body: "Captures and recording flow through xdg-desktop-portal with PipeWire. Standard, safe, no hacks.",
  },
  {
    name: "niri and wlroots compositors",
    body: "Unisic captures through wlr-screencopy via grim, silent and multi-monitor-safe. Bind hotkeys in your compositor config; a running instance picks the command up.",
  },
];

export function CompositorNotes() {
  return (
    <div>
      <h3 className={styles.title}>Works with your compositor</h3>
      <dl className={styles.list}>
        {NOTES.map((n) => (
          <div key={n.name} className={styles.item}>
            <dt className={styles.name}>{n.name}</dt>
            <dd className={styles.body}>{n.body}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
