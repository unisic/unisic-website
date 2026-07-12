import styles from "./OverlayMockup.module.css";
import { SWATCHES } from "../lib/themes";
import type { Dictionary } from "../lib/i18n";
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
 * Faithful static mini-recreation of the selection overlay
 * (unisic/qml/OverlayWindow.qml): a frozen screen dimmed outside the selected
 * region, crosshair guides, a monospace dimension pill, the pre-shot arrow
 * annotation and the floating pill toolbar below the selection. Pure server
 * markup, no client JS. The one-shot open choreography (the region scales
 * open, guides and toolbar settle, then the arrow draws itself) still plays
 * on scroll-in via the Reveal wrapper, and is a no-op under prefers-reduced-
 * motion (OverlayMockup.module.css). Corner handles are decorative here.
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

export function OverlayMockup({ dict }: { dict: Dictionary }) {
  const o = dict.overlay;
  return (
    <figure className={styles.frame}>
      <div className={styles.screen}>
        <div className={styles.wallpaper} aria-hidden="true">
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

        <div className={styles.guideH} aria-hidden="true" />
        <div className={styles.guideV} aria-hidden="true" />

        <div className={styles.selection} aria-hidden="true">
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

        <span className={styles.dimPill} aria-hidden="true">
          868 × 512
        </span>

        <div className={styles.toolbar} aria-hidden="true">
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
            {o.capture}
          </span>
          <span className={styles.chip}>
            <CloseIcon className={styles.closeIcon} />
          </span>
        </div>
      </div>

      <figcaption className={styles.srOnly}>{o.caption}</figcaption>
    </figure>
  );
}
