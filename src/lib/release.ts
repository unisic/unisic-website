// The release every download link on the site points at. Bump both on release day.
export const VERSION = '0.8.8';
export const RELEASED = '2026-10-19';

const DOWNLOAD = `https://github.com/unisic/unisic/releases/download/v${VERSION}`;

/** A direct link to one file of the current release, named the way the release workflow names it. */
export const asset = (name: string) => `${DOWNLOAD}/${name.replaceAll('{v}', VERSION)}`;

export const WINDOWS_SETUP = asset('unisic-{v}-windows-x64-experimental-setup.exe');
