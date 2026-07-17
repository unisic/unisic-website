import styles from "./EditorMockup.module.css";
import { SWATCHES } from "../lib/themes";
import {
  ArrowIcon,
  BlurIcon,
  CalloutIcon,
  CloseIcon,
  CopyIcon,
  CropIcon,
  EditShapesIcon,
  EllipseIcon,
  EraserIcon,
  HighlightIcon,
  LineIcon,
  MeasureIcon,
  MinusIcon,
  PenIcon,
  PixelateIcon,
  RectangleIcon,
  RedoIcon,
  SaveIcon,
  SendIcon,
  StepIcon,
  TextIcon,
  UndoIcon,
  WindowIcon,
} from "./icons";
import type { Dictionary } from "../lib/i18n";

/*
 * Faithful mini-recreation of the real post-capture editor
 * (unisic/qml/EditorWindow.qml): title bar, pill toolbar with the 15 tools
 * (flattened — the real toolbar clusters the shape tools behind one chip),
 * canvas with live annotations, bottom action bar. Sized in design units
 * (--u) driven by container queries so it scales as one picture.
 */

const TOOLS = [
  { icon: EditShapesIcon, active: false },
  { icon: PenIcon, active: false },
  { icon: LineIcon, active: false },
  { icon: ArrowIcon, active: true },
  { icon: MeasureIcon, active: false },
  { icon: RectangleIcon, active: false },
  { icon: EllipseIcon, active: false },
  { icon: CalloutIcon, active: false },
  { icon: TextIcon, active: false },
  { icon: HighlightIcon, active: false },
  { icon: BlurIcon, active: false },
  { icon: PixelateIcon, active: false },
  { icon: EraserIcon, active: false },
  { icon: StepIcon, active: false },
  { icon: CropIcon, active: false },
];

export function EditorMockup({ dict }: { dict: Dictionary }) {
  const e = dict.editorMockup;
  return (
    <figure className={styles.frame} role="img" aria-label={e.ariaLabel}>
      <div className={styles.window} aria-hidden="true">
        <div className={styles.titlebar}>
          <span className={styles.title}>{e.title}</span>
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

        <div className={styles.toolbar}>
          {TOOLS.map(({ icon: Icon, active }, i) => (
            <span
              key={i}
              className={active ? styles.chipActive : styles.chip}
            >
              <Icon className={styles.chipIcon} />
            </span>
          ))}
          <span className={styles.vdivider} />
          <span className={styles.chip}>
            <UndoIcon className={styles.chipIcon} />
          </span>
          <span className={styles.chip}>
            <RedoIcon className={styles.chipIcon} />
          </span>
          <span className={styles.vdivider} />
          {SWATCHES.map((c, i) => (
            <span
              key={i}
              className={i === 0 ? styles.swatchSelected : styles.swatch}
              style={{ background: c }}
            />
          ))}
        </div>

        <div className={styles.canvas}>
          <div className={styles.shot}>
            <div className={styles.ghostCardA}>
              <div className={styles.ghostLines} />
            </div>
            <div className={styles.ghostCardB}>
              <div className={styles.ghostLines} />
            </div>
            <div className={styles.ghostChart} />

            {/* annotations: the product's actual output */}
            <div className={styles.highlightRect} />
            <div className={styles.blurRegion} />
            <svg className={styles.arrowAnno} viewBox="0 0 200 120">
              <path
                d="M 22 102 C 60 88 96 66 148 34"
                fill="none"
                stroke="var(--swatch-1)"
                strokeWidth="5"
                strokeLinecap="round"
                pathLength={1}
              />
              <path
                d="M 118 30 L 148 34 L 132 60"
                fill="none"
                stroke="var(--swatch-1)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength={1}
              />
            </svg>
            <span className={styles.stepOne}>1</span>
            <span className={styles.stepTwo}>2</span>
          </div>
        </div>

        <div className={styles.bottombar}>
          <span className={styles.status}>1440 × 900 px · 100%</span>
          <span className={styles.actions}>
            <span className={styles.ghostBtn}>
              <CopyIcon className={styles.btnIcon} />
              {e.copy}
            </span>
            <span className={styles.ghostBtn}>
              <SaveIcon className={styles.btnIcon} />
              {e.save}
            </span>
            <span className={styles.fillBtn}>
              <SendIcon className={styles.btnIcon} />
              {e.upload}
            </span>
          </span>
        </div>
      </div>
    </figure>
  );
}
