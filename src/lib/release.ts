// The release every download link on the site points at. .github/workflows/follow-release.yml bumps both.
export const VERSION = '0.8.9';
export const RELEASED = '2026-11-05';

const DOWNLOAD = `https://github.com/unisic/unisic/releases/download/v${VERSION}`;

/** A direct link to one file of the current release, named the way the release workflow names it. */
const asset = (name: string) => `${DOWNLOAD}/${name.replaceAll('{v}', VERSION)}`;

export const WINDOWS_SETUP = asset('unisic-{v}-windows-x64-experimental-setup.exe');
