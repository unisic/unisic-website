"use client";

import { useRef, useState } from "react";
import styles from "../app/page.module.css";
import { CheckmarkIcon, CopyIcon } from "./icons";

/*
 * Renders a shell snippet with a copy-to-clipboard button. The button flips
 * to a checkmark for a beat after a successful copy, then reverts. Falls back
 * silently if the Clipboard API is unavailable (insecure context, old engine).
 */
export function CopyCommand({
  command,
  copyLabel,
  copiedLabel,
}: {
  command: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    <div className={styles.coprCmdWrap}>
      <pre className={styles.coprCmd}>{command}</pre>
      <button
        type="button"
        className={styles.coprCopy}
        onClick={copy}
        aria-label={copied ? copiedLabel : copyLabel}
        data-copied={copied ? "" : undefined}
      >
        {copied ? (
          <CheckmarkIcon className={styles.coprCopyIcon} />
        ) : (
          <CopyIcon className={styles.coprCopyIcon} />
        )}
      </button>
    </div>
  );
}
