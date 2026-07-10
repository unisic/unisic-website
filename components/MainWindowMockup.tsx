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
import type { Dictionary } from "../lib/i18n";

/*
 * Faithful mini-recreation of the main window (unisic/qml/Main.qml,
 * 1060x700): 38px title bar, 224px sidebar with six nav items (Capture
 * active as solid tertiary fill, SidebarItem.qml), and the Capture page
 * (CapturePage.qml): title, subtitle, three 218x172 radius-26 action
 * cards with hotkey chips, "After capture" card with toggle rows.
 */

export function MainWindowMockup({ dict }: { dict: Dictionary }) {
  const m = dict.mainWindow;
  const nav = [
    { icon: CameraIcon, label: m.nav.capture, active: true },
    { icon: RecordIcon, label: m.nav.record, active: false },
    { icon: GifIcon, label: m.nav.gif, active: false },
    { icon: HistoryIcon, label: m.nav.history, active: false },
    { icon: FolderCloudIcon, label: m.nav.destinations, active: false },
    { icon: ConfigureIcon, label: m.nav.settings, active: false },
  ];

  const cards = [
    { icon: MonitorIcon, title: m.cards.fullScreen.title, sub: m.cards.fullScreen.sub, keys: "Meta+Shift+1" },
    { icon: RegionIcon, title: m.cards.region.title, sub: m.cards.region.sub, keys: "Meta+Shift+2" },
    { icon: WindowIcon, title: m.cards.window.title, sub: m.cards.window.sub, keys: "Meta+Shift+3" },
  ];

  const toggles = [
    { label: m.toggles.editor, on: true },
    { label: m.toggles.clipboard, on: true },
    { label: m.toggles.disk, on: true },
    { label: m.toggles.upload, on: false },
  ];

  return (
    <figure className={styles.frame} role="img" aria-label={m.ariaLabel}>
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
              {nav.map(({ icon: Icon, label, active }) => (
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
            <span className={styles.pageTitle}>{m.pageTitle}</span>
            <span className={styles.pageSub}>{m.pageSub}</span>
            <div className={styles.cardRow}>
              {cards.map(({ icon: Icon, title, sub, keys }) => (
                <span key={title} className={styles.card}>
                  <Icon className={styles.cardIcon} />
                  <span className={styles.cardTitle}>{title}</span>
                  <span className={styles.cardSub}>{sub}</span>
                  <span className={styles.cardChip}>{keys}</span>
                </span>
              ))}
            </div>
            <div className={styles.afterCard}>
              <span className={styles.afterTitle}>{m.afterCapture}</span>
              {toggles.map(({ label, on }) => (
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
