"use client";

import { useEffect, useRef, useState } from "react";

/*
 * Live-ticking recording timer for the REC badge. Counts only while
 * on-screen; stays a static "0:42" under prefers-reduced-motion or
 * without JS.
 */
export function RecTimer() {
  const [seconds, setSeconds] = useState(42);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let interval: number | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        // act on the newest record: threshold crossings can arrive batched
        const entry = entries[entries.length - 1];
        if (entry.isIntersecting && interval === undefined) {
          interval = window.setInterval(
            () => setSeconds((s) => s + 1),
            1000,
          );
        } else if (!entry.isIntersecting && interval !== undefined) {
          window.clearInterval(interval);
          interval = undefined;
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (interval !== undefined) window.clearInterval(interval);
    };
  }, []);

  const m = Math.floor(seconds / 60);
  const s = String(seconds % 60).padStart(2, "0");
  return <span ref={ref}>{`REC ${m}:${s}`}</span>;
}
