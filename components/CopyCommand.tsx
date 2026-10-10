"use client";

import { useRef, useState } from "react";
import styles from "../app/page.module.css";
import { CheckmarkIcon, CopyIcon } from "./icons";

/*
 * Renders a shell snippet with a copy-to-clipboard button. The button flips
 * to a checkmark for a beat after a successful copy, then reverts. Falls back
 * silently if the Clipboard API is unavailable (insecure context, old engine).
 *
 * variant "hero" is the big one-liner card: a prompt glyph, a command that
 * wraps instead of scrolling, and a button with a visible text label.
 * The status span announces the copy to screen readers; swapping the
 * button's aria-label alone is not reliably spoken on a focused control.
 */
export function CopyCommand({
  command,
  copyLabel,
  copiedLabel,
  variant,
}: {
  command: string;
  copyLabel: string;
  copiedLabel: string;
  variant?: "hero";
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hero = variant === "hero";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
    } catch {
      return; // no clipboard access; leave the snippet for manual selection
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`${styles.coprCmdWrap} ${hero ? styles.coprHero : ""}`}>
      {hero && (
        <span className={styles.coprPrompt} aria-hidden="true">
          $
        </span>
      )}
      <pre className={styles.coprCmd}>{command}</pre>
      <button
        type="button"
        className={styles.coprCopy}
        onClick={copy}
        aria-label={hero ? undefined : copied ? copiedLabel : copyLabel}
        data-copied={copied ? "" : undefined}
      >
        {copied ? (
          <CheckmarkIcon className={styles.coprCopyIcon} />
        ) : (
          <CopyIcon className={styles.coprCopyIcon} />
        )}
        {hero && (
          <span>{copied ? copiedLabel : copyLabel}</span>
        )}
      </button>
      <span className="sr-only" role="status">
        {copied ? copiedLabel : ""}
      </span>
    </div>
  );
}
