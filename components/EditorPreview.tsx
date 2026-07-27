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
  EyedropperIcon,
  HighlightIcon,
  LineIcon,
  MagnifyIcon,
  MeasureIcon,
  PenIcon,
  PixelateIcon,
  RectangleIcon,
  RedoIcon,
  ShapesIcon,
  StepIcon,
  TextIcon,
  UndoIcon,
} from "./icons";

/*
 * Static stand-in for the former interactive editor demo. It shows the app's
 * two-row tool card (EditorWindow.qml:347-545) over an abstract capture: the
 * main row exactly as mainRowModel() builds it (the six shape tools collapsed
 * behind one group chip), undo/redo, and below it the sub-bar with the open
 * group's own tools and the fixed 7-color palette (Theme.qml:102). Pure
 * server markup, no client JS. Geometry is shared with EditorMockup so the
 * flagship cell and the hero read as one product. Decorative, hence
 * aria-hidden - the cell's heading and body carry the meaning.
 */

const TOOLS = [
  EditShapesIcon,
  PenIcon,
  ShapesIcon,
  TextIcon,
  HighlightIcon,
  BlurIcon,
  PixelateIcon,
  EraserIcon,
  MagnifyIcon,
  EyedropperIcon,
  StepIcon,
  CropIcon,
];

/* the shapes group is open, which is what the sub-bar below expands */
const ACTIVE = 2;

/* the open group's tools, Arrow live (ToolCatalog shapes order) */
const SHAPES = [
  LineIcon,
  ArrowIcon,
  MeasureIcon,
  RectangleIcon,
  EllipseIcon,
  CalloutIcon,
];
const SHAPE_ACTIVE = 1;

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
          <div className={styles.toolRow}>
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
          </div>

          {/* the open group's tools plus their props strip (ToolPropsBar.qml) */}
          <div className={styles.subRow}>
            {SHAPES.map((Icon, i) => (
              <span
                key={i}
                className={i === SHAPE_ACTIVE ? styles.chipActive : styles.chip}
              >
                <Icon className={styles.chipIcon} />
              </span>
            ))}
            <span className={styles.vdivider} />
            {SWATCHES.map((c, i) => (
              <span
                key={i}
                className={i === 1 ? styles.swatchSelected : styles.swatch}
                style={{ background: c }}
              />
            ))}
            <span className={styles.dotBtn}>
              <EyedropperIcon className={styles.dotGlyph} />
            </span>
          </div>
        </div>
      </div>
    </figure>
  );
}
