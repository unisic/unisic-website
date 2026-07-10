"use client";

import { useMemo, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import styles from "./EditorDemo.module.css";
import { SWATCHES } from "../lib/themes";
import { interpolate, type Dictionary } from "../lib/i18n";
import {
  ArrowIcon,
  BlurIcon,
  CheckmarkIcon,
  CloseIcon,
  EllipseIcon,
  EraserIcon,
  HighlightIcon,
  LineIcon,
  PenIcon,
  PixelateIcon,
  RectangleIcon,
  RedoIcon,
  StepIcon,
  TextIcon,
  UndoIcon,
} from "./icons";

/*
 * A working miniature of the annotation editor, wearing the app's own
 * overlay toolbar (OverlayWindow.qml:302-396): gradient pill, 40px tool
 * chips (ToolChip.qml), 26px color dots (ColorDot.qml), accent Capture
 * button (UButton.qml compact) and a close button. Every control is live:
 * pick a tool, drag on the canvas, undo, redo, clear.
 */

type Tool =
  | "pen"
  | "line"
  | "arrow"
  | "rect"
  | "ellipse"
  | "text"
  | "highlight"
  | "blur"
  | "pixelate"
  | "eraser"
  | "step";

type Anno =
  | { id: number; kind: "pen" | "highlight"; points: number[]; color: string }
  | {
      id: number;
      kind: "line" | "arrow" | "rect" | "ellipse";
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      color: string;
    }
  | { id: number; kind: "text"; x: number; y: number; text: string; color: string }
  | { id: number; kind: "step"; x: number; y: number; n: number; color: string }
  | { id: number; kind: "blur" | "pixelate"; x: number; y: number; w: number; h: number };

/* Tool order mirrors ToolCatalog.qml (crop needs a real image to make sense).
   Labels come from the dictionary, keyed by id. */
const TOOL_ICONS: { id: Tool; icon: typeof PenIcon }[] = [
  { id: "pen", icon: PenIcon },
  { id: "line", icon: LineIcon },
  { id: "arrow", icon: ArrowIcon },
  { id: "rect", icon: RectangleIcon },
  { id: "ellipse", icon: EllipseIcon },
  { id: "text", icon: TextIcon },
  { id: "highlight", icon: HighlightIcon },
  { id: "blur", icon: BlurIcon },
  { id: "pixelate", icon: PixelateIcon },
  { id: "eraser", icon: EraserIcon },
  { id: "step", icon: StepIcon },
];

/* light strokes get a dark step number for contrast (SWATCHES from lib/themes) */
const DARK_INK = new Set(["var(--swatch-2)", "var(--swatch-5)", "var(--swatch-6)"]);

/* Design space: 800 x 450, uniform scale (the canvas keeps a 16/9 ratio) */
const W = 800;
const H = 450;

const SEED: Anno[] = [
  { id: 1, kind: "arrow", x1: 205, y1: 355, x2: 425, y2: 175, color: "var(--swatch-1)" },
  { id: 2, kind: "step", x: 168, y: 372, n: 1, color: "var(--swatch-1)" },
];

function arrowHead(a: { x1: number; y1: number; x2: number; y2: number }) {
  const ang = Math.atan2(a.y2 - a.y1, a.x2 - a.x1);
  const len = 26;
  const spread = 0.46;
  const hx1 = a.x2 - len * Math.cos(ang - spread);
  const hy1 = a.y2 - len * Math.sin(ang - spread);
  const hx2 = a.x2 - len * Math.cos(ang + spread);
  const hy2 = a.y2 - len * Math.sin(ang + spread);
  return `M ${hx1} ${hy1} L ${a.x2} ${a.y2} L ${hx2} ${hy2}`;
}

function penPath(points: number[]) {
  let d = `M ${points[0]} ${points[1]}`;
  for (let i = 2; i < points.length; i += 2) d += ` L ${points[i]} ${points[i + 1]}`;
  return d;
}

export function EditorDemo({ dict }: { dict: Dictionary }) {
  const ed = dict.editorDemo;
  const swatchNames = [
    ed.swatchNames.red,
    ed.swatchNames.yellow,
    ed.swatchNames.green,
    ed.swatchNames.blue,
    ed.swatchNames.lilac,
    ed.swatchNames.white,
    ed.swatchNames.navy,
  ];
  const canvasRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(3);
  const rectRef = useRef<DOMRect | null>(null);
  const committedRef = useRef(false);
  const [tool, setTool] = useState<Tool>("arrow");
  const [color, setColor] = useState(SWATCHES[0]);
  const [annos, setAnnos] = useState<Anno[]>(SEED);
  const [undoStack, setUndoStack] = useState<Anno[][]>([]);
  const [redoStack, setRedoStack] = useState<Anno[][]>([]);
  const [draft, setDraft] = useState<Anno | null>(null);
  const [textDraft, setTextDraft] = useState<{ x: number; y: number } | null>(null);
  const [flashKey, setFlashKey] = useState(0);

  const commit = (next: Anno[]) => {
    setUndoStack((s) => [...s, annos]);
    setRedoStack([]);
    setAnnos(next);
  };

  const undo = () => {
    if (!undoStack.length) return;
    setRedoStack((s) => [...s, annos]);
    setAnnos(undoStack[undoStack.length - 1]);
    setUndoStack((s) => s.slice(0, -1));
  };

  const redo = () => {
    if (!redoStack.length) return;
    setUndoStack((s) => [...s, annos]);
    setAnnos(redoStack[redoStack.length - 1]);
    setRedoStack((s) => s.slice(0, -1));
  };

  const toPoint = (e: ReactPointerEvent) => {
    const r = rectRef.current ?? canvasRef.current!.getBoundingClientRect();
    return {
      x: Math.min(W, Math.max(0, ((e.clientX - r.left) / r.width) * W)),
      y: Math.min(H, Math.max(0, ((e.clientY - r.top) / r.height) * H)),
    };
  };

  const commitText = (value: string) => {
    /* Enter unmounts the focused input, which also fires onBlur — guard so
       the annotation is committed exactly once. Reset on each text open. */
    if (committedRef.current) return;
    committedRef.current = true;
    if (textDraft && value.trim()) {
      commit([
        ...annos,
        { id: nextId.current++, kind: "text", ...textDraft, text: value.trim(), color },
      ]);
    }
    setTextDraft(null);
  };

  const onPointerDown = (e: ReactPointerEvent) => {
    /* When a text box is open, let the native mousedown blur it (that
       commits); otherwise suppress the default focus steal / drag. */
    if (e.button !== 0 || textDraft || tool === "eraser") return;
    e.preventDefault();
    /* measure the canvas once per interaction; every move reuses it */
    rectRef.current = canvasRef.current!.getBoundingClientRect();
    const p = toPoint(e);
    if (tool === "text") {
      committedRef.current = false;
      setTextDraft(p);
      return;
    }
    if (tool === "step") {
      const n = annos.filter((a) => a.kind === "step").length + 1;
      commit([...annos, { id: nextId.current++, kind: "step", ...p, n, color }]);
      return;
    }
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    if (tool === "pen" || tool === "highlight") {
      setDraft({ id: nextId.current, kind: tool, points: [p.x, p.y], color });
    } else if (tool === "blur" || tool === "pixelate") {
      setDraft({ id: nextId.current, kind: tool, x: p.x, y: p.y, w: 0, h: 0 });
    } else {
      setDraft({ id: nextId.current, kind: tool, x1: p.x, y1: p.y, x2: p.x, y2: p.y, color });
    }
  };

  const onPointerMove = (e: ReactPointerEvent) => {
    if (!draft) return;
    const p = toPoint(e);
    if (draft.kind === "pen" || draft.kind === "highlight") {
      setDraft({ ...draft, points: [...draft.points, p.x, p.y] });
    } else if (draft.kind === "blur" || draft.kind === "pixelate") {
      setDraft({ ...draft, w: p.x - draft.x, h: p.y - draft.y });
    } else if (
      draft.kind === "line" ||
      draft.kind === "arrow" ||
      draft.kind === "rect" ||
      draft.kind === "ellipse"
    ) {
      setDraft({ ...draft, x2: p.x, y2: p.y });
    }
  };

  const onPointerUp = () => {
    if (!draft) return;
    let keep = false;
    if (draft.kind === "pen" || draft.kind === "highlight") {
      keep = draft.points.length >= 6;
    } else if (draft.kind === "blur" || draft.kind === "pixelate") {
      keep = Math.abs(draft.w) > 12 && Math.abs(draft.h) > 12;
    } else if (
      draft.kind === "line" ||
      draft.kind === "arrow" ||
      draft.kind === "rect" ||
      draft.kind === "ellipse"
    ) {
      keep = Math.hypot(draft.x2 - draft.x1, draft.y2 - draft.y1) > 8;
    }
    if (keep) {
      nextId.current++;
      commit([...annos, draft]);
    }
    setDraft(null);
    rectRef.current = null;
  };

  const erase = (id: number) => {
    if (tool === "eraser") commit(annos.filter((a) => a.id !== id));
  };

  const capture = () => setFlashKey((k) => k + 1);

  const clear = () => {
    if (annos.length) commit([]);
  };

  const renderShape = (a: Anno, isDraft = false) => {
    const hit = !isDraft && tool === "eraser";
    const shapeProps = {
      className: styles.anno,
      onPointerDown: hit
        ? (e: ReactPointerEvent) => {
            e.stopPropagation();
            erase(a.id);
          }
        : undefined,
    };
    switch (a.kind) {
      case "pen":
      case "highlight":
        return (
          <path
            key={a.id}
            {...shapeProps}
            d={penPath(a.points)}
            fill="none"
            stroke={a.color}
            strokeWidth={a.kind === "highlight" ? 18 : 4.5}
            strokeOpacity={a.kind === "highlight" ? 0.4 : 1}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      case "line":
      case "arrow":
        return (
          <g key={a.id} {...shapeProps} stroke={a.color} strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round" fill="none">
            <line x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2} />
            {a.kind === "arrow" && <path d={arrowHead(a)} />}
          </g>
        );
      case "rect": {
        const x = Math.min(a.x1, a.x2);
        const y = Math.min(a.y1, a.y2);
        return (
          <rect
            key={a.id}
            {...shapeProps}
            x={x}
            y={y}
            width={Math.abs(a.x2 - a.x1)}
            height={Math.abs(a.y2 - a.y1)}
            rx={4}
            fill="none"
            stroke={a.color}
            strokeWidth={4.5}
          />
        );
      }
      case "ellipse":
        return (
          <ellipse
            key={a.id}
            {...shapeProps}
            cx={(a.x1 + a.x2) / 2}
            cy={(a.y1 + a.y2) / 2}
            rx={Math.abs(a.x2 - a.x1) / 2}
            ry={Math.abs(a.y2 - a.y1) / 2}
            fill="none"
            stroke={a.color}
            strokeWidth={4.5}
          />
        );
      case "text":
        return (
          <text key={a.id} {...shapeProps} x={a.x} y={a.y} fontSize={26} fontWeight={700} fill={a.color}>
            {a.text}
          </text>
        );
      case "step":
        return (
          <g key={a.id} {...shapeProps}>
            <circle cx={a.x} cy={a.y} r={16} fill={a.color} />
            <text
              x={a.x}
              y={a.y + 6}
              fontSize={18}
              fontWeight={700}
              textAnchor="middle"
              fill={DARK_INK.has(a.color) ? "var(--text-on-accent)" : "#fff"}
            >
              {a.n}
            </text>
          </g>
        );
      default:
        return null;
    }
  };

  const renderRegion = (a: Anno, isDraft = false) => {
    if (a.kind !== "blur" && a.kind !== "pixelate") return null;
    const x = a.w < 0 ? a.x + a.w : a.x;
    const y = a.h < 0 ? a.y + a.h : a.y;
    return (
      <div
        key={a.id}
        className={`${styles.region} ${a.kind === "pixelate" ? styles.pixelate : styles.blur}`}
        data-erasable={!isDraft && tool === "eraser" ? "" : undefined}
        onPointerDown={
          !isDraft && tool === "eraser"
            ? (e) => {
                e.stopPropagation();
                erase(a.id);
              }
            : undefined
        }
        style={{
          left: `${(x / W) * 100}%`,
          top: `${(y / H) * 100}%`,
          width: `${(Math.abs(a.w) / W) * 100}%`,
          height: `${(Math.abs(a.h) / H) * 100}%`,
        }}
      />
    );
  };

  /* Committed layers are memoized so a live draft move (setDraft fires on
     every pointermove) never reconciles the finished shapes/regions — they
     change only on commit/undo/redo (annos) or a tool switch (eraser
     hit-area). The single in-progress shape still renders per move. */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const committedRegions = useMemo(() => annos.map((a) => renderRegion(a)), [annos, tool]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const committedShapes = useMemo(() => annos.map((a) => renderShape(a)), [annos, tool]);

  return (
    <div className={styles.demo}>
      <div className={styles.toolbar} role="group" aria-label={ed.groupLabel}>
        <div className={styles.group}>
          {TOOL_ICONS.map(({ id, icon: Icon }) => {
            const label = ed.tools[id];
            return (
              <button
                key={id}
                type="button"
                className={styles.chip}
                data-active={tool === id ? "" : undefined}
                aria-label={label}
                aria-pressed={tool === id}
                title={label}
                onClick={() => setTool(id)}
              >
                <Icon className={styles.chipIcon} />
              </button>
            );
          })}
          <button type="button" className={styles.chip} aria-label={ed.undo} title={ed.undo} disabled={!undoStack.length} onClick={undo}>
            <UndoIcon className={styles.chipIcon} />
          </button>
          <button type="button" className={styles.chip} aria-label={ed.redo} title={ed.redo} disabled={!redoStack.length} onClick={redo}>
            <RedoIcon className={styles.chipIcon} />
          </button>
        </div>
        <div className={styles.group}>
          <span className={styles.vdivider} />
          {SWATCHES.map((c, i) => (
            <button
              key={c}
              type="button"
              className={styles.swatch}
              data-active={color === c ? "" : undefined}
              aria-label={interpolate(ed.strokeLabel, { color: swatchNames[i] })}
              aria-pressed={color === c}
              style={{ background: c }}
              onClick={() => setColor(c)}
            />
          ))}
          <span className={styles.vdivider} />
          <button type="button" className={styles.captureBtn} onClick={capture}>
            <CheckmarkIcon className={styles.captureIcon} />
            {ed.capture}
          </button>
          <button type="button" className={styles.chip} aria-label={ed.clear} title={ed.clearTitle} onClick={clear}>
            <CloseIcon className={styles.closeIcon} />
          </button>
        </div>
      </div>

      <div
        ref={canvasRef}
        className={styles.canvas}
        data-tool={tool}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={() => setDraft(null)}
      >
        <div className={styles.wallpaper} aria-hidden="true">
          <div className={styles.ghostCardA}>
            <div className={styles.ghostLines} />
          </div>
          <div className={styles.ghostCardB}>
            <div className={styles.ghostLines} />
          </div>
        </div>

        {committedRegions}
        {draft && renderRegion(draft, true)}

        <svg className={styles.annoLayer} viewBox={`0 0 ${W} ${H}`} data-erase={tool === "eraser" ? "" : undefined}>
          {committedShapes}
          {draft && renderShape(draft, true)}
        </svg>

        {textDraft && (
          <input
            className={styles.textInput}
            style={{
              left: `${(textDraft.x / W) * 100}%`,
              top: `${(textDraft.y / H) * 100}%`,
              color,
            }}
            autoFocus
            aria-label={ed.textLabel}
            placeholder={ed.textPlaceholder}
            maxLength={40}
            onKeyDown={(e) => {
              if (e.key === "Enter") commitText(e.currentTarget.value);
              if (e.key === "Escape") {
                committedRef.current = true;
                setTextDraft(null);
              }
            }}
            onBlur={(e) => commitText(e.currentTarget.value)}
          />
        )}

        {flashKey > 0 && <div key={flashKey} className={styles.flash} aria-hidden="true" />}
        {flashKey > 0 && (
          <span key={`s${flashKey}`} className={styles.savedChip} role="status">
            <CheckmarkIcon className={styles.savedIcon} />
            {ed.captured}
          </span>
        )}
      </div>

      <p className={styles.hint}>{ed.hint}</p>
    </div>
  );
}
