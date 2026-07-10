"use client";

import { useEffect, useState } from "react";
import styles from "./DownloadSection.module.css";
import {
  fetchLatestRelease,
  formatSize,
  FORMAT_META,
  RELEASES_URL,
  type LatestRelease,
} from "../lib/releases";
import type { Dictionary } from "../lib/i18n";

type State =
  | { kind: "loading" }
  | { kind: "ready"; release: LatestRelease }
  | { kind: "error" };

export function DownloadSection({ dict }: { dict: Dictionary }) {
  const d = dict.download;
  const [state, setState] = useState<State>({ kind: "loading" });

  useEffect(() => {
    let cancelled = false;
    fetchLatestRelease()
      .then((release) => {
        if (!cancelled) setState({ kind: "ready", release });
      })
      .catch(() => {
        if (!cancelled) setState({ kind: "error" });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      className={styles.wrap}
      aria-live="polite"
      aria-busy={state.kind === "loading"}
    >
      {state.kind === "loading" && (
        <>
          <p className={styles.version}>{d.checking}</p>
          <div className={styles.buttons} aria-hidden="true">
            {/* one skeleton per asset format, so the ready state doesn't shift */}
            {Array.from({ length: Object.keys(FORMAT_META).length }, (_, i) => (
              <span key={i} className={styles.skeleton} />
            ))}
          </div>
        </>
      )}

      {state.kind === "ready" && (
        <>
          <p className={styles.version}>
            {d.latest.split("{tag}").flatMap((part, i) =>
              i === 0
                ? [part]
                : [<strong key="tag">{state.release.tag}</strong>, part],
            )}
          </p>
          <div className={styles.buttons}>
            {state.release.assets.map((asset, i) => (
              <a
                key={asset.format}
                href={asset.url}
                className={i === 0 ? `${styles.primaryBtn} shine` : styles.btn}
              >
                <span className={styles.btnLabel}>
                  {FORMAT_META[asset.format].label}
                </span>
                <span className={styles.btnHint}>
                  {FORMAT_META[asset.format].hint} · {formatSize(asset.size)}
                </span>
              </a>
            ))}
          </div>
        </>
      )}

      {state.kind === "error" && (
        <div className={styles.fallback}>
          <a href={RELEASES_URL} className={styles.primaryBtn}>
            <span className={styles.btnLabel}>{d.fallbackBtn}</span>
            <span className={styles.btnHint}>AppImage, Flatpak, deb, Arch</span>
          </a>
          <p className={styles.fallbackNote}>{d.fallbackNote}</p>
        </div>
      )}

      {state.kind !== "error" && (
        <p className={styles.allLink}>
          <a href={RELEASES_URL}>{d.allReleases}</a>
        </p>
      )}
    </div>
  );
}
