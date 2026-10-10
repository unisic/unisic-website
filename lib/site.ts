// Canonical origin. Custom apex domain, served at root - no basePath needed.
export const SITE_URL = "https://unisic.app";

// Community invite, linked from the nav, the docs header and the footer.
export const DISCORD_URL = "https://discord.gg/U2Eyw6xQBz";

// The one-line installer, shown in the hero and in the install section. The
// script is a release asset, so "latest" always resolves to the newest stable.
export const INSTALL_COMMAND =
  'bash -c "$(curl -fsSL https://github.com/unisic/unisic/releases/latest/download/install.sh)"';
