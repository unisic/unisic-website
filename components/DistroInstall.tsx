"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./DistroInstall.module.css";
import { CopyCommand } from "./CopyCommand";
import { DistroIcon } from "./DistroIcons";
import {
  DIRECT_ASSETS,
  DISTROS,
  type AssetId,
  type DistroId,
} from "../lib/distros";
import {
  fetchLatestRelease,
  formatSize,
  RELEASES_URL,
  type LatestRelease,
} from "../lib/releases";
import type { Dictionary } from "../lib/i18n";

type Selection = DistroId | AssetId | null;

type ReleaseState =
  | { kind: "loading" }
  | { kind: "ready"; release: LatestRelease }
  | { kind: "error" };

const isAsset = (sel: Selection): sel is AssetId =>
  sel === "appimage" || sel === "flatpak";

/*
 * Install picker: nothing is preselected. One row of buttons — the distros
 * plus the AppImage/Flatpak direct downloads. Picking a distro animates in
 * either its install steps, or first a version switch (Ubuntu, openSUSE)
 * whose pick then animates in the steps. Picking a format animates in a
 * download button for the latest release (fetched lazily on first pick).
 * Every switch replays the reveal via key remounts; each distro remembers
 * its own version choice.
 */
export function DistroInstall({ dict }: { dict: Dictionary }) {
  const d = dict.download;
  const [sel, setSel] = useState<Selection>(null);
  const [variantChoice, setVariantChoice] = useState<
    Partial<Record<DistroId, string>>
  >({});
  const [rel, setRel] = useState<ReleaseState>({ kind: "loading" });

  /* Fetch the latest release once, lazily, the first time a direct-download
     format is picked. The ref (not rel.kind) guards the trigger so the
     effect never cancels its own in-flight request. */
  const relRequested = useRef(false);
  const assetWanted = isAsset(sel);
  useEffect(() => {
    if (!assetWanted || relRequested.current) return;
    relRequested.current = true;
    fetchLatestRelease()
      .then((release) => setRel({ kind: "ready", release }))
      .catch(() => setRel({ kind: "error" }));
  }, [assetWanted]);

  const distro =
    sel && !isAsset(sel) ? DISTROS.find((x) => x.id === sel)! : null;
  const variantId = distro ? variantChoice[distro.id] : undefined;
  const showSteps = distro && (!distro.variants || variantId !== undefined);

  const asset =
    isAsset(sel) && rel.kind === "ready"
      ? (rel.release.assets.find((a) => a.format === sel) ?? null)
      : null;

  return (
    <div className={styles.wrap}>
      <p className={styles.lede}>{d.repoLede}</p>

      <div
        className={styles.distros}
        role="group"
        aria-label={d.distroListLabel}
      >
        {[...DISTROS, ...DIRECT_ASSETS].map((x) => (
          <button
            key={x.id}
            type="button"
            className={styles.distroBtn}
            aria-pressed={x.id === sel}
            onClick={() => setSel(x.id)}
          >
            <DistroIcon id={x.id} className={styles.distroIcon} />
            {x.name}
          </button>
        ))}
      </div>

      {distro && (
        <div key={distro.id} className={styles.panel}>
          {distro.variants && (
            <div
              className={styles.variants}
              role="group"
              aria-label={d.versionLabel}
            >
              <span className={styles.variantLabel}>{d.versionLabel}</span>
              {distro.variants.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  className={styles.variantBtn}
                  aria-pressed={v.id === variantId}
                  onClick={() =>
                    setVariantChoice((prev) => ({
                      ...prev,
                      [distro.id]: v.id,
                    }))
                  }
                >
                  {v.label}
                </button>
              ))}
            </div>
          )}

          {showSteps && (
            <>
              <ol className={styles.steps}>
                {distro.steps(variantId).map((step, i) => (
                  /* key remounts the step (and its CopyCommand) on every
                     switch, so the reveal animation replays and the copied
                     checkmark doesn't survive a snippet change */
                  <li key={`${distro.id}:${variantId ?? ""}:${i}`}>
                    <p className={styles.stepLabel}>{d.steps[step.key]}</p>
                    <CopyCommand
                      command={step.command}
                      copyLabel={d.copyCmd}
                      copiedLabel={d.copiedCmd}
                    />
                  </li>
                ))}
              </ol>
              <p
                key={`note:${distro.id}:${variantId ?? ""}`}
                className={styles.note}
              >
                {d.notes[distro.id]}
              </p>
            </>
          )}
        </div>
      )}

      {isAsset(sel) && (
        <div
          key={sel}
          className={`${styles.panel} ${styles.assetPanel}`}
          aria-busy={rel.kind === "loading"}
        >
          {rel.kind === "loading" && (
            <>
              <p className={styles.version}>{d.checking}</p>
              <span className={styles.skeleton} aria-hidden="true" />
            </>
          )}

          {rel.kind === "ready" && asset && (
            <>
              <p className={styles.version}>
                {d.latest.split("{tag}").flatMap((part, i) =>
                  i === 0
                    ? [part]
                    : [
                        <strong key="tag">{rel.release.tag}</strong>,
                        part,
                      ],
                )}
              </p>
              <a href={asset.url} className={`${styles.downloadBtn} shine`}>
                <span className={styles.btnLabel}>{d.downloadBtn}</span>
                <span className={styles.btnHint}>
                  {asset.name} · {formatSize(asset.size)}
                </span>
              </a>
              <p className={styles.allLink}>
                <a href={RELEASES_URL}>{d.allReleases}</a>
              </p>
            </>
          )}

          {(rel.kind === "error" || (rel.kind === "ready" && !asset)) && (
            <>
              <a href={RELEASES_URL} className={`${styles.downloadBtn} shine`}>
                <span className={styles.btnLabel}>{d.fallbackBtn}</span>
                <span className={styles.btnHint}>AppImage, Flatpak</span>
              </a>
              <p className={styles.note}>{d.fallbackNote}</p>
            </>
          )}

          <p key={`note:${sel}`} className={styles.note}>
            {d.notes[sel]}
          </p>
        </div>
      )}
    </div>
  );
}
