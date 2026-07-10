import styles from "./MainWindowMockup.module.css";
import {
  CameraIcon,
  CloseIcon,
  ConfigureIcon,
  FolderCloudIcon,
  GifIcon,
  HistoryIcon,
  Logo,
  MinusIcon,
  MonitorIcon,
  RecordIcon,
  RegionIcon,
  WindowIcon,
} from "./icons";

/*
 * Faithful mini-recreation of the main window (unisic/qml/Main.qml,
 * 1060x700): 38px title bar, 224px sidebar with six nav items (Capture
 * active as solid tertiary fill, SidebarItem.qml), and the Capture page
 * (CapturePage.qml): title, subtitle, three 218x172 radius-26 action
 * cards with hotkey chips, "After capture" card with toggle rows.
 */

const NAV = [
  { icon: CameraIcon, label: "Capture", active: true },
  { icon: RecordIcon, label: "Record", active: false },
  { icon: GifIcon, label: "GIF", active: false },
  { icon: HistoryIcon, label: "History", active: false },
  { icon: FolderCloudIcon, label: "Destinations", active: false },
  { icon: ConfigureIcon, label: "Settings", active: false },
];

const CARDS = [
  { icon: MonitorIcon, title: "Full screen", sub: "All monitors", keys: "Meta+Shift+1" },
  { icon: RegionIcon, title: "Region", sub: "Select + annotate live", keys: "Meta+Shift+2" },
  { icon: WindowIcon, title: "Window", sub: "Active window", keys: "Meta+Shift+3" },
];

const TOGGLES = [
  { label: "Open the editor", on: true },
  { label: "Copy image to clipboard", on: true },
  { label: "Save to disk automatically", on: true },
  { label: "Upload and copy the link", on: false },
];

export function MainWindowMockup() {
  return (
    <figure
      className={styles.frame}
      role="img"
      aria-label="The Unisic main window: a sidebar with Capture, Record, GIF, History, Destinations and Settings pages, and the Capture page with full screen, region and window actions plus after-capture toggles."
    >
      <div className={styles.window} aria-hidden="true">
        <div className={styles.titlebar}>
          <span className={styles.title}>Unisic</span>
          <span className={styles.winControls}>
            <span className={styles.winBtn}>
              <MinusIcon className={styles.winGlyph} />
            </span>
            <span className={styles.winBtn}>
              <WindowIcon className={styles.winGlyph} />
            </span>
            <span className={styles.winBtn}>
              <CloseIcon className={styles.winGlyph} />
            </span>
          </span>
        </div>

        <div className={styles.body}>
          <div className={styles.sidebar}>
            <div className={styles.brandRow}>
              <span className={styles.brandLogo}>
                <Logo />
              </span>
              <span className={styles.brandName}>Unisic</span>
            </div>
            <div className={styles.navList}>
              {NAV.map(({ icon: Icon, label, active }) => (
                <span
                  key={label}
                  className={active ? styles.navItemActive : styles.navItem}
                >
                  <Icon className={styles.navIcon} />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.content}>
            <span className={styles.pageTitle}>Capture</span>
            <span className={styles.pageSub}>
              Screenshots land in the editor, where you can annotate, then
              save, copy or upload.
            </span>
            <div className={styles.cardRow}>
              {CARDS.map(({ icon: Icon, title, sub, keys }) => (
                <span key={title} className={styles.card}>
                  <Icon className={styles.cardIcon} />
                  <span className={styles.cardTitle}>{title}</span>
                  <span className={styles.cardSub}>{sub}</span>
                  <span className={styles.cardChip}>{keys}</span>
                </span>
              ))}
            </div>
            <div className={styles.afterCard}>
              <span className={styles.afterTitle}>After capture</span>
              {TOGGLES.map(({ label, on }) => (
                <span key={label} className={styles.toggleRow}>
                  <span className={styles.toggleLabel}>{label}</span>
                  <span className={on ? styles.switchOn : styles.switchOff}>
                    <span className={styles.knob} />
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
