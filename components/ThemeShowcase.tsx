"use client";

import { useState, type CSSProperties } from "react";
import styles from "./ThemeShowcase.module.css";
import { THEMES } from "../lib/themes";
import { CameraIcon, ConfigureIcon, MonitorIcon, RecordIcon, RegionIcon } from "./icons";

/*
 * Interactive theme picker: each chip re-skins a miniature main window
 * using the real palette values from Theme.qml. The page itself stays
 * locked to the unisic dark theme; only the preview picture recolors.
 */
export function ThemeShowcase() {
  const [active, setActive] = useState(0);
  const t = THEMES[active];

  const previewVars = {
    "--p-primary": t.primary,
    "--p-tertiary": t.tertiary,
    "--p-accent": t.accent,
    "--p-bg": t.bg,
    "--p-surface": t.surface,
    "--p-text": t.text,
    "--p-text-on-accent": t.textOnAccent,
  } as CSSProperties;

  return (
    <div>
      <div
        className={styles.chips}
        role="group"
        aria-label="Choose a theme to preview"
        data-stagger=""
      >
        {THEMES.map((theme, i) => (
          <button
            key={theme.name}
            type="button"
            className={i === active ? styles.chipActive : styles.chip}
            aria-pressed={i === active}
            onClick={() => setActive(i)}
          >
            <span className={styles.trio} aria-hidden="true">
              <span style={{ background: theme.bg }} />
              <span style={{ background: theme.surface }} />
              <span style={{ background: theme.accent }} />
            </span>
            {theme.label}
          </button>
        ))}
      </div>

      <figure
        className={styles.previewFrame}
        role="img"
        aria-label={`The Unisic main window in the ${t.label} theme`}
        style={previewVars}
      >
        <div className={styles.preview} aria-hidden="true">
          <div className={styles.titlebar}>
            <span className={styles.titleText}>Unisic</span>
            <span className={styles.winDots}>
              <span />
              <span />
              <span />
            </span>
          </div>
          <div className={styles.body}>
            <div className={styles.sidebar}>
              <span className={styles.navActive}>
                <CameraIcon className={styles.navIcon} />
                Capture
              </span>
              <span className={styles.nav}>
                <RecordIcon className={styles.navIcon} />
                Record
              </span>
              <span className={styles.nav}>
                <ConfigureIcon className={styles.navIcon} />
                Settings
              </span>
            </div>
            <div className={styles.content}>
              <span className={styles.pageTitle}>Capture</span>
              <div className={styles.cards}>
                <span className={styles.card}>
                  <MonitorIcon className={styles.cardIcon} />
                  Full screen
                </span>
                <span className={styles.card}>
                  <RegionIcon className={styles.cardIcon} />
                  Region
                </span>
              </div>
              <span className={styles.accentBtn}>Capture region</span>
            </div>
          </div>
        </div>
      </figure>

      <p className={styles.note}>
        The ninth theme is your system: it follows the desktop light or dark
        scheme and accent color live.
      </p>
    </div>
  );
}
