"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./RecordingDemo.module.css";
import { CheckmarkIcon } from "./icons";
import type { Dictionary } from "../lib/i18n";

/*
 * Interactive recreation of the recording region frame
 * (unisic/qml/RecordBorder.qml): a 3px accent frame with a "REC m:ss"
 * badge, pulsing dot and live timer. Clicking the badge stops the demo
 * recording, and so does the app's real fixed hotkey Ctrl+Esc, tying the
 * page to the copy beside it. The timer ticks only while on-screen and
 * stays put under prefers-reduced-motion.
 */
export function RecordingDemo({ dict }: { dict: Dictionary }) {
  const r = dict.recording;
  const [recording, setRecording] = useState(true);
  const [seconds, setSeconds] = useState(42);
  const frameRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!recording) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = frameRef.current;
    if (!el) return;

    let interval: number | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        // act on the newest record: threshold crossings can arrive batched
        const entry = entries[entries.length - 1];
        if (entry.isIntersecting && interval === undefined) {
          interval = window.setInterval(() => setSeconds((s) => s + 1), 1000);
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
  }, [recording]);

  // the fixed stop hotkey works on this page too
  useEffect(() => {
    if (!recording) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && e.ctrlKey) setRecording(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [recording]);

  const toggle = () => {
    if (recording) {
      setRecording(false);
    } else {
      setSeconds(0);
      setRecording(true);
    }
  };

  const m = Math.floor(seconds / 60);
  const s = String(seconds % 60).padStart(2, "0");

  return (
    <figure
      ref={frameRef}
      className={styles.frame}
      data-state={recording ? "recording" : "saved"}
    >
      <div className={styles.screen}>
        <div className={styles.wallpaper} aria-hidden="true">
          <div className={styles.ghostCardA}>
            <div className={styles.ghostLines} />
          </div>
          <div className={styles.ghostCardB}>
            <div className={styles.ghostLines} />
          </div>
        </div>

        <div className={styles.region}>
          <button
            type="button"
            className={styles.badge}
            onClick={toggle}
            aria-label={recording ? r.stopLabel : r.restartLabel}
          >
            {recording ? (
              <>
                <span className={styles.dot} aria-hidden="true" />
                {`REC ${m}:${s}`}
                <span className={styles.badgeSep} aria-hidden="true">
                  ·
                </span>
                <span className={styles.badgeAction}>{r.stop}</span>
              </>
            ) : (
              <>
                <CheckmarkIcon className={styles.savedIcon} />
                {`${r.saved} ${m}:${s}`}
                <span className={styles.badgeSep} aria-hidden="true">
                  ·
                </span>
                <span className={styles.badgeAction}>{r.restart}</span>
              </>
            )}
          </button>
        </div>
      </div>
      <figcaption className={styles.srOnly}>{r.caption}</figcaption>
    </figure>
  );
}
