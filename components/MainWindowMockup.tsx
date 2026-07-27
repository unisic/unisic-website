import styles from "./MainWindowMockup.module.css";
import {
  CameraIcon,
  ChevronDownIcon,
  CloseIcon,
  ConfigureIcon,
  FolderCloudIcon,
  HistoryIcon,
  Logo,
  MinusIcon,
  MonitorIcon,
  PenIcon,
  RecordIcon,
  RegionIcon,
  RepeatIcon,
  WindowIcon,
} from "./icons";
import type { Dictionary } from "../lib/i18n";

/*
 * Faithful mini-recreation of the main window (unisic/qml/Main.qml,
 * 1060x700): 38px title bar, 224px sidebar flat on the backdrop with two
 * labelled groups (Main.qml:294-329) and the app card at the bottom
 * (:333-...), and the Capture page (CapturePage.qml) on the rounded content
 * card: header, three 140px radius-26 tiles with hotkey chips, then the
 * "Capture options" grid of USettingRow cells.
 */

export function MainWindowMockup({ dict }: { dict: Dictionary }) {
  const m = dict.mainWindow;

  const nav = [
    { icon: CameraIcon, label: m.nav.capture, active: true },
    { icon: RecordIcon, label: m.nav.record, active: false },
    { icon: PenIcon, label: m.nav.edit, active: false },
  ];

  const library = [
    { icon: HistoryIcon, label: m.nav.history },
    { icon: FolderCloudIcon, label: m.nav.servers },
  ];

  const cards = [
    { icon: MonitorIcon, title: m.cards.fullScreen.title, sub: m.cards.fullScreen.sub, keys: "Meta+Shift+F" },
    { icon: RegionIcon, title: m.cards.region.title, sub: m.cards.region.sub, keys: "Print" },
    { icon: WindowIcon, title: m.cards.window.title, sub: m.cards.window.sub, keys: "Meta+Shift+W" },
  ];

  /* Same eight cells in the same order as CapturePage.qml's toggleFlow, so
     the two-column wrap lands on the same pairs the app shows. */
  const toggles = [
    { label: m.options.cursor, on: true },
    { label: m.options.editor, on: true },
    { label: m.options.clipboard, on: true },
    { label: m.options.disk, on: true },
    { label: m.options.upload, on: false },
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
            <span className={styles.groupLabel}>Unisic</span>
            {nav.map(({ icon: Icon, label, active }) => (
              <span
                key={label}
                className={active ? styles.navItemActive : styles.navItem}
              >
                <Icon className={styles.navIcon} />
                {label}
              </span>
            ))}

            <span className={styles.groupLabelGap}>{m.library}</span>
            {library.map(({ icon: Icon, label }) => (
              <span key={label} className={styles.navItem}>
                <Icon className={styles.navIcon} />
                {label}
              </span>
            ))}

            <div className={styles.appCard}>
              <span className={styles.appIcon}>
                <Logo />
              </span>
              <span className={styles.appText}>
                <span className={styles.appName}>Unisic</span>
                <span className={styles.appVersion}>v0.8</span>
              </span>
              <span className={styles.gearBtn}>
                <ConfigureIcon className={styles.gearGlyph} />
              </span>
            </div>
          </div>

          <div className={styles.content}>
            <span className={styles.glow} />
            <div className={styles.page}>
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

              <span className={styles.sectionTitle}>{m.options.title}</span>

              <div className={styles.optionGrid}>
                <span className={styles.optRow}>
                  <span className={styles.optLabel}>{m.options.delay}</span>
                  <span className={styles.comboShort}>
                    200 ms
                    <ChevronDownIcon className={styles.comboChevron} />
                  </span>
                </span>

                <span className={styles.optRow}>
                  <span className={styles.optLabel}>{m.options.repeat}</span>
                  <span className={styles.tonalBtn}>
                    <RepeatIcon className={styles.btnGlyph} />
                    {m.options.repeatAction}
                  </span>
                </span>

                <span className={styles.optRow}>
                  <span className={styles.optLabel}>{m.options.server}</span>
                  <span className={styles.comboWide}>
                    catbox.moe
                    <ChevronDownIcon className={styles.comboChevron} />
                  </span>
                </span>

                {toggles.map(({ label, on }) => (
                  <span key={label} className={styles.optRow}>
                    <span className={styles.optLabel}>{label}</span>
                    <span className={on ? styles.switchOn : styles.switchOff}>
                      <span className={styles.knob} />
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
