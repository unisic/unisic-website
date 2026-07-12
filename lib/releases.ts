/*
 * Latest-release lookup against the public GitHub API, cached in
 * sessionStorage to stay far under the unauthenticated 60 req/hr limit.
 * Assets are matched by suffix, never by full filename, so version bumps
 * and naming drift keep working. If arm64 builds appear later, this keeps
 * the first match per format (currently all assets are x86_64/amd64);
 * revisit to group by arch then.
 */

const API_URL = "https://api.github.com/repos/unisic/unisic/releases/latest";
const CACHE_KEY = "unisic:latest-release";
const CACHE_TTL_MS = 10 * 60 * 1000;

export const RELEASES_URL = "https://github.com/unisic/unisic/releases/latest";

export type AssetFormat = "appimage";

export type ReleaseAsset = {
  format: AssetFormat;
  name: string;
  url: string;
  size: number;
};

export type LatestRelease = {
  tag: string;
  htmlUrl: string;
  assets: ReleaseAsset[];
};

const FORMAT_ORDER: AssetFormat[] = ["appimage"];

function matchFormat(name: string): AssetFormat | null {
  const n = name.toLowerCase();
  if (n.endsWith(".appimage")) return "appimage";
  // .deb/.rpm/.pkg.tar.zst install via the distro repos (see lib/distros.ts),
  // .zsync, debug builds and checksums are never direct downloads
  return null;
}

export function formatSize(bytes: number): string {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(0)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${bytes} B`;
}

type GitHubAsset = {
  name: string;
  browser_download_url: string;
  size: number;
};

type GitHubRelease = {
  tag_name: string;
  html_url: string;
  assets: GitHubAsset[];
};

function parseRelease(data: GitHubRelease): LatestRelease {
  const byFormat = new Map<AssetFormat, ReleaseAsset>();
  for (const asset of data.assets ?? []) {
    const format = matchFormat(asset.name);
    if (format && !byFormat.has(format)) {
      byFormat.set(format, {
        format,
        name: asset.name,
        url: asset.browser_download_url,
        size: asset.size,
      });
    }
  }
  return {
    tag: data.tag_name,
    htmlUrl: data.html_url,
    assets: FORMAT_ORDER.flatMap((f) => byFormat.get(f) ?? []),
  };
}

function readCache(): LatestRelease | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { fetchedAt, data } = JSON.parse(raw) as {
      fetchedAt: number;
      data: LatestRelease;
    };
    if (Date.now() - fetchedAt > CACHE_TTL_MS) return null;
    return data;
  } catch {
    return null; // private mode, quota, corrupt entry
  }
}

function writeCache(data: LatestRelease) {
  try {
    sessionStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ fetchedAt: Date.now(), data }),
    );
  } catch {
    // best effort only
  }
}

export async function fetchLatestRelease(): Promise<LatestRelease> {
  const cached = readCache();
  if (cached) return cached;

  const res = await fetch(API_URL, {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
  const release = parseRelease((await res.json()) as GitHubRelease);
  if (!release.tag || release.assets.length === 0) {
    throw new Error("Release payload had no matching assets");
  }
  writeCache(release);
  return release;
}
