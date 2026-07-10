"use client";

import { useRef } from "react";
import type { PointerEvent, ReactNode } from "react";

/*
 * Cursor-tracked spotlight: writes --mx/--my custom properties, no re-render
 * (styling lives in FeatureGrid.module.css). This tiny client island is the
 * only interactive part of the feature cells, so the cell content itself can
 * stay a server component. The cell rect is measured once per hover (on
 * enter) and reused for every move, keeping getBoundingClientRect out of the
 * pointermove hot path.
 */
export function Spotlight({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const rectRef = useRef<DOMRect | null>(null);

  const measure = (e: PointerEvent<HTMLElement>) => {
    rectRef.current = e.currentTarget.getBoundingClientRect();
  };

  const move = (e: PointerEvent<HTMLElement>) => {
    const r = rectRef.current ?? e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <article className={className} onPointerEnter={measure} onPointerMove={move}>
      {children}
    </article>
  );
}
