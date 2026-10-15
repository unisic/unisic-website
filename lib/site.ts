// Canonical origin. Custom apex domain, served at root - no basePath needed.
export const SITE_URL = "https://unisic.app";

// Community invite, linked from the nav, the docs header and the footer.
export const DISCORD_URL = "https://discord.gg/U2Eyw6xQBz";

// The one-line installer, shown in the hero and in the install section. The
// script is served from this site (public/install.sh), a mirror of
// scripts/install.sh in the app repo that must be re-copied when that changes.
export const INSTALL_COMMAND =
  'bash -c "$(curl -fsSL https://unisic.app/install.sh)"';
