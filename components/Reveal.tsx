"use client";

import { useEffect, useRef } from "react";

/*
 * The page's only scroll machinery: flips data-inview once when the element
 * enters the viewport. All animation lives in CSS, gated behind
 * prefers-reduced-motion (globals.css), so with JS disabled or reduced
 * motion the content simply renders in its final state.
 *
 * data-js is stamped here, from the client bundle itself, not from an
 * inline script: the reveal-hidden styles must only engage when the code
 * that can un-hide the content is provably running (a stale-cache 404 on
 * the bundle after a redeploy would otherwise blank every Reveal section).
 */
if (typeof document !== "undefined") {
  document.documentElement.dataset.js = "true";
}
export function Reveal({
  children,
  as: Tag = "div",
  className,
  id,
}: {
  children: React.ReactNode;
  as?: "div" | "section";
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.inview = "true";
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={className} id={id} data-reveal="">
      {children}
    </Tag>
  );
}
