import styles from "./EditorPreview.module.css";
import { SWATCHES } from "../lib/themes";
import {
  ArrowIcon,
  BlurIcon,
  CalloutIcon,
  CropIcon,
  EditShapesIcon,
  EllipseIcon,
  EraserIcon,
  HighlightIcon,
  LineIcon,
  MeasureIcon,
  PenIcon,
  PixelateIcon,
  RectangleIcon,
  RedoIcon,
  StepIcon,
  TextIcon,
  UndoIcon,
} from "./icons";

/*
 * Static stand-in for the former interactive editor demo. It shows the app's
 * signature floating annotation toolbar (EditorWindow.qml:179-308) over an
 * abstract capture: the fifteen tool chips (flattened — the real toolbar
 * clusters the shape tools behind one chip), undo/redo, and the fixed
 * 7-color stroke palette (Theme.qml:102). Pure server markup, no client JS.
 * Geometry is shared with EditorMockup so the flagship cell and the hero
 * read as one product. Decorative, hence aria-hidden — the cell's heading
 * and body carry the meaning.
 */

const TOOLS = [
  EditShapesIcon,
  PenIcon,
  LineIcon,
  ArrowIcon,
  MeasureIcon,
  RectangleIcon,
  EllipseIcon,
  CalloutIcon,
  TextIcon,
  HighlightIcon,
  BlurIcon,
  PixelateIcon,
  EraserIcon,
  StepIcon,
  CropIcon,
];

/* highlighter is the active tool, matching the yellow highlight mark it
   draws on the canvas (and the yellow swatch selected below) */
const ACTIVE = 9;

export function EditorPreview() {
  return (
    <figure className={styles.preview} aria-hidden="true">
      <div className={styles.stage}>
        <div className={styles.canvas}>
          <div className={styles.ghostCardA}>
            <div className={styles.ghostLines} />
          </div>
          <div className={styles.ghostChart} />
          <div className={styles.highlightRect} />
        </div>

        <div className={styles.toolbar}>
          {TOOLS.map((Icon, i) => (
            <span key={i} className={i === ACTIVE ? styles.chipActive : styles.chip}>
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
              className={i === 1 ? styles.swatchSelected : styles.swatch}
              style={{ background: c }}
            />
          ))}
        </div>
      </div>
    </figure>
  );
}
