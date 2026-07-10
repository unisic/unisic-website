"use client";

import { useRef, useState } from "react";
import type { CSSProperties, PointerEvent as ReactPointerEvent, KeyboardEvent as ReactKeyboardEvent } from "react";
import styles from "./OverlayMockup.module.css";
import { SWATCHES } from "../lib/themes";
import { interpolate, type Dictionary } from "../lib/i18n";
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
 *
 * The selection is live: drag a corner to resize, or drag inside to move
 * it, exactly like the real overlay. Corner handles are keyboard-operable
 * (Tab to a corner, arrow keys to resize). The one-shot open choreography
 * (CSS, reduced-motion aware) still plays on scroll-in.
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

/* Selection lives in screen-percentage space; the CSS keys everything
   (guides, dimension pill, toolbar) off these four custom properties. */
type Sel = { left: number; top: number; width: number; height: number };
const INITIAL: Sel = { left: 26, top: 16, width: 40, height: 52 };

type Corner = "tl" | "tr" | "bl" | "br";
const CORNERS: Corner[] = ["tl", "tr", "bl", "br"];
const HANDLE_CLASS: Record<Corner, string> = {
  tl: styles.handleTL,
  tr: styles.handleTR,
  bl: styles.handleBL,
  br: styles.handleBR,
};

/* Nominal display resolution behind the mockup: keeps the seed pill at the
   original "868 × 512" (0.40·2170, 0.52·985) while the numbers stay live. */
const BASE_W = 2170;
const BASE_H = 985;

const MIN = 12; /* smallest selection edge, in screen percent */
const GRAB = 26; /* px radius around a corner that starts a resize */
const STEP = 2; /* keyboard resize step, in screen percent */

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/* Move `corner` to (x, y) with the opposite corner pinned; clamps to the
   screen and to the MIN edge so the region can never invert. */
function resizeTo(s: Sel, corner: Corner, x: number, y: number): Sel {
  const right = s.left + s.width;
  const bottom = s.top + s.height;
  let { left, top, width, height } = s;

  if (corner === "tl" || corner === "bl") {
    left = clamp(x, 0, right - MIN);
    width = right - left;
  } else {
    width = clamp(x, MIN + s.left, 100) - s.left;
  }
  if (corner === "tl" || corner === "tr") {
    top = clamp(y, 0, bottom - MIN);
    height = bottom - top;
  } else {
    height = clamp(y, MIN + s.top, 100) - s.top;
  }
  return { left, top, width, height };
}

function cornerPos(s: Sel, c: Corner) {
  return {
    x: c === "tl" || c === "bl" ? s.left : s.left + s.width,
    y: c === "tl" || c === "tr" ? s.top : s.top + s.height,
  };
}

export function OverlayMockup({ dict }: { dict: Dictionary }) {
  const o = dict.overlay;
  const screenRef = useRef<HTMLDivElement>(null);
  const drag = useRef<
    | { mode: "move"; dx: number; dy: number }
    | { mode: "resize"; corner: Corner }
    | null
  >(null);
  const [sel, setSel] = useState<Sel>(INITIAL);
  const [active, setActive] = useState(false);

  const onPointerDown = (e: ReactPointerEvent) => {
    if (e.button !== 0) return;
    const rect = screenRef.current!.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const xPct = clamp((px / rect.width) * 100, 0, 100);
    const yPct = clamp((py / rect.height) * 100, 0, 100);

    let corner: Corner | null = null;
    let best = Infinity;
    for (const c of CORNERS) {
      const p = cornerPos(sel, c);
      const d = Math.hypot((p.x / 100) * rect.width - px, (p.y / 100) * rect.height - py);
      if (d < best) {
        best = d;
        corner = c;
      }
    }

    if (best <= GRAB && corner) {
      drag.current = { mode: "resize", corner };
    } else if (
      xPct >= sel.left &&
      xPct <= sel.left + sel.width &&
      yPct >= sel.top &&
      yPct <= sel.top + sel.height
    ) {
      drag.current = { mode: "move", dx: xPct - sel.left, dy: yPct - sel.top };
    } else {
      return;
    }

    screenRef.current!.setPointerCapture(e.pointerId);
    setActive(true);
    e.preventDefault();
  };

  const onPointerMove = (e: ReactPointerEvent) => {
    const d = drag.current;
    if (!d) return;
    const rect = screenRef.current!.getBoundingClientRect();
    const x = clamp(((e.clientX - rect.left) / rect.width) * 100, 0, 100);
    const y = clamp(((e.clientY - rect.top) / rect.height) * 100, 0, 100);
    if (d.mode === "move") {
      setSel((s) => ({
        ...s,
        left: clamp(x - d.dx, 0, 100 - s.width),
        top: clamp(y - d.dy, 0, 100 - s.height),
      }));
    } else {
      setSel((s) => resizeTo(s, d.corner, x, y));
    }
  };

  const endDrag = () => {
    drag.current = null;
    setActive(false);
  };

  const onHandleKey = (corner: Corner) => (e: ReactKeyboardEvent) => {
    const delta: Record<string, [number, number]> = {
      ArrowLeft: [-STEP, 0],
      ArrowRight: [STEP, 0],
      ArrowUp: [0, -STEP],
      ArrowDown: [0, STEP],
    };
    const d = delta[e.key];
    if (!d) return;
    e.preventDefault();
    setSel((s) => {
      const p = cornerPos(s, corner);
      return resizeTo(s, corner, p.x + d[0], p.y + d[1]);
    });
  };

  const screenVars = {
    "--sel-left": `${sel.left}%`,
    "--sel-top": `${sel.top}%`,
    "--sel-width": `${sel.width}%`,
    "--sel-height": `${sel.height}%`,
  } as CSSProperties;

  const dimW = Math.round((sel.width / 100) * BASE_W);
  const dimH = Math.round((sel.height / 100) * BASE_H);

  return (
    <figure className={styles.frame}>
      <div
        ref={screenRef}
        className={styles.screen}
        style={screenVars}
        data-active={active ? "" : undefined}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
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

        <div className={styles.selection}>
          {CORNERS.map((c) => (
            <button
              key={c}
              type="button"
              className={HANDLE_CLASS[c]}
              aria-label={interpolate(o.resizeHandle, { corner: o.corners[c] })}
              onKeyDown={onHandleKey(c)}
            />
          ))}
          <svg className={styles.arrowAnno} viewBox="0 0 200 110" aria-hidden="true">
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

        <span className={styles.dimPill} aria-hidden="true">{dimW} × {dimH}</span>

        <div className={styles.toolbar} aria-hidden="true">
          {OVERLAY_TOOLS.map(({ icon: Icon, active: on }, i) => (
            <span key={i} className={on ? styles.chipActive : styles.chip}>
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
      <p className={styles.hint} aria-hidden="true">
        {o.hint}
      </p>
    </figure>
  );
}
