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

type State =
  | { kind: "loading" }
  | { kind: "ready"; release: LatestRelease }
  | { kind: "error" };

export function DownloadSection() {
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
    <div className={styles.wrap}>
      {state.kind === "ready" && (
        <p className={styles.version}>
          Latest release <strong>{state.release.tag}</strong>
        </p>
      )}

      {state.kind === "loading" && (
        <>
          <p className={styles.version}>Checking the latest release</p>
          <div className={styles.buttons} aria-hidden="true">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={styles.skeleton} />
            ))}
          </div>
        </>
      )}

      {state.kind === "ready" && (
        <div className={styles.buttons}>
          {state.release.assets.map((asset, i) => (
            <a
              key={asset.format}
              href={asset.url}
              className={i === 0 ? styles.primaryBtn : styles.btn}
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
      )}

      {state.kind === "error" && (
        <div className={styles.fallback}>
          <a href={RELEASES_URL} className={styles.primaryBtn}>
            <span className={styles.btnLabel}>Get it from GitHub Releases</span>
            <span className={styles.btnHint}>AppImage, Flatpak, deb, rpm, Arch</span>
          </a>
          <p className={styles.fallbackNote}>
            Couldn&apos;t reach GitHub just now, but every build lives there.
          </p>
        </div>
      )}

      {state.kind !== "error" && (
        <p className={styles.allLink}>
          <a href={RELEASES_URL}>All releases and older builds</a>
        </p>
      )}
    </div>
  );
}
