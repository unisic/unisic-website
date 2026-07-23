"use client";

import {
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import styles from "./ThemeShowcase.module.css";
import { THEMES } from "../lib/themes";
import { interpolate, type Dictionary } from "../lib/i18n";
import {
  CameraIcon,
  CloseIcon,
  ConfigureIcon,
  MinusIcon,
  MonitorIcon,
  RecordIcon,
  RegionIcon,
  WindowIcon,
} from "./icons";

/*
 * Interactive theme picker: each chip repaints only the miniature main
 * window below with the real palette values from Theme.qml — the rest of
 * the landing page keeps its own "unisic" skin. "Unisic" is the default.
 * The palette values feed the preview through the local --p-* vars set on
 * the figure, so nothing leaks onto <html> and the surrounding page never
 * changes theme.
 */
const RADIO_COUNT = THEMES.length;

export function ThemeShowcase({ dict }: { dict: Dictionary }) {
  const tx = dict.themes;
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

  // Roving tabindex across the palette radios.
  const chipRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const selectChip = (i: number) => {
    setActive(i);
  };

  const onChipKeyDown = (e: ReactKeyboardEvent<HTMLButtonElement>, i: number) => {
    let next: number;
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        next = (i + 1) % RADIO_COUNT;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        next = (i - 1 + RADIO_COUNT) % RADIO_COUNT;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = RADIO_COUNT - 1;
        break;
      default:
        return;
    }
    e.preventDefault();
    chipRefs.current[next]?.focus();
    selectChip(next);
  };

  return (
    <div className={styles.showcase}>
      <div className={styles.chips}>
        {/* display: contents wrapper keeps the radiogroup semantics on the
            8 real palettes only; the System chip below sits outside it */}
        <div
          className={styles.chipGroup}
          role="radiogroup"
          aria-label={tx.groupLabel}
          data-stagger=""
        >
          {THEMES.map((theme, i) => (
            <button
              key={theme.name}
              type="button"
              ref={(el) => {
                chipRefs.current[i] = el;
              }}
              className={i === active ? styles.chipActive : styles.chip}
              role="radio"
              aria-checked={i === active}
              tabIndex={i === active ? 0 : -1}
              onClick={() => selectChip(i)}
              onKeyDown={(e) => onChipKeyDown(e, i)}
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
        {/* the ninth theme: follows the desktop scheme, so it cannot be
            previewed here and is not part of the radio interaction */}
        <span
          className={`${styles.chip} ${styles.chipSystem}`}
          aria-label={tx.systemLabel}
        >
          <span
            className={`${styles.trio} ${styles.trioAuto}`}
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
          </span>
          {tx.system}
        </span>
      </div>

      <figure
        className={styles.previewFrame}
        role="img"
        aria-label={interpolate(tx.previewLabel, { theme: t.label })}
        style={previewVars}
      >
        <div className={styles.preview} aria-hidden="true">
          <div className={styles.titlebar}>
            <span className={styles.titleText}>Unisic</span>
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

      <p className={styles.note}>{tx.note}</p>
    </div>
  );
}
