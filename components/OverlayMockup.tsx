import styles from "./OverlayMockup.module.css";
import {
  ArrowIcon,
  BlurIcon,
  CheckmarkIcon,
  CloseIcon,
  EllipseIcon,
  HighlightIcon,
  PenIcon,
  RectangleIcon,
  SelectIcon,
  StepIcon,
  TextIcon,
} from "./icons";

/*
 * Faithful mini-recreation of the selection overlay
 * (unisic/qml/OverlayWindow.qml): frozen screen dimmed outside the
 * selection, crosshair guides, monospace dimension pill, an in-progress
 * annotation, and the floating pill toolbar below the selection.
 * The open animation (CSS, one-shot, reduced-motion aware) mirrors the
 * real flow: drag a region, the toolbar appears.
 */

const OVERLAY_TOOLS = [
  { icon: SelectIcon, active: false },
  { icon: PenIcon, active: false },
  { icon: ArrowIcon, active: true },
  { icon: RectangleIcon, active: false },
  { icon: EllipseIcon, active: false },
  { icon: TextIcon, active: false },
  { icon: HighlightIcon, active: false },
  { icon: BlurIcon, active: false },
  { icon: StepIcon, active: false },
];

const SWATCHES = [
  "var(--swatch-1)",
  "var(--swatch-2)",
  "var(--swatch-3)",
  "var(--swatch-4)",
  "var(--swatch-5)",
  "var(--swatch-6)",
  "var(--swatch-7)",
];

export function OverlayMockup() {
  return (
    <figure
      className={styles.frame}
      role="img"
      aria-label="The Unisic selection overlay: a frozen screen with a selected region, live pixel dimensions, an arrow drawn before capture, and a floating toolbar with annotation tools and a capture button."
    >
      <div className={styles.screen} aria-hidden="true">
        <div className={styles.wallpaper}>
          <div className={styles.ghostCardA}>
            <div className={styles.ghostLines} />
          </div>
          <div className={styles.ghostCardB}>
            <div className={styles.ghostLines} />
          </div>
          <div className={styles.ghostCardC}>
            <div className={styles.ghostLines} />
          </div>
        </div>

        <div className={styles.guideH} />
        <div className={styles.guideV} />

        <div className={styles.selection}>
          <span className={styles.handleTL} />
          <span className={styles.handleTR} />
          <span className={styles.handleBL} />
          <span className={styles.handleBR} />
          <svg className={styles.arrowAnno} viewBox="0 0 200 110">
            <path
              d="M 20 92 C 70 82 110 60 152 28"
              fill="none"
              stroke="var(--swatch-1)"
              strokeWidth="5"
              strokeLinecap="round"
              pathLength={1}
            />
            <path
              d="M 122 26 L 152 28 L 138 54"
              fill="none"
              stroke="var(--swatch-1)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={1}
            />
          </svg>
        </div>

        <span className={styles.dimPill}>868 × 512</span>

        <div className={styles.toolbar}>
          {OVERLAY_TOOLS.map(({ icon: Icon, active }, i) => (
            <span key={i} className={active ? styles.chipActive : styles.chip}>
              <Icon className={styles.chipIcon} />
            </span>
          ))}
          <span className={styles.vdivider} />
          {SWATCHES.map((c, i) => (
            <span
              key={i}
              className={i === 0 ? styles.swatchSelected : styles.swatch}
              style={{ background: c }}
            />
          ))}
          <span className={styles.vdivider} />
          <span className={styles.captureBtn}>
            <CheckmarkIcon className={styles.captureIcon} />
            Capture
          </span>
          <span className={styles.chip}>
            <CloseIcon className={styles.closeIcon} />
          </span>
        </div>
      </div>
    </figure>
  );
}
