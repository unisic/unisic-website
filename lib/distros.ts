/*
 * Repository install snippets per distribution, kept in sync with the
 * Install section of the app README (github.com/unisic/unisic). Each distro
 * installs in labelled steps; step labels and the note under the snippet
 * come from the dictionary (download.steps.<key>, download.notes.<id>).
 * Distro and version names are proper nouns and stay untranslated here.
 */

export type DistroId = "ubuntu" | "debian" | "fedora" | "opensuse" | "arch";

/* Direct-download formats that sit in the same picker row as the distros;
   their ids double as lib/releases.ts asset formats. */
export type AssetId = "appimage" | "flatpak";

export const DIRECT_ASSETS: { id: AssetId; name: string }[] = [
  { id: "appimage", name: "AppImage" },
  { id: "flatpak", name: "Flatpak" },
];

export type StepKey =
  | "importKey"
  | "addRepo"
  | "refreshRepo"
  | "enableRepo"
  | "install";

export type InstallStep = { key: StepKey; command: string };

export type DistroVariant = { id: string; label: string };

export type Distro = {
  id: DistroId;
  name: string;
  /* First entry is the default (recommended) version. */
  variants?: DistroVariant[];
  steps: (variantId?: string) => InstallStep[];
};

const OBS_DL = "https://download.opensuse.org/repositories";

/* Key + sources list + install for one OBS apt repo (Debian_13, xUbuntu_*). */
function aptSteps(repo: string): InstallStep[] {
  return [
    {
      key: "importKey",
      command:
        `curl -fsSL "${OBS_DL}/home:/unisic/${repo}/Release.key" \\\n` +
        "  | gpg --dearmor | sudo tee /etc/apt/keyrings/home_unisic.gpg > /dev/null",
    },
    {
      key: "addRepo",
      command:
        `echo "deb [signed-by=/etc/apt/keyrings/home_unisic.gpg] ${OBS_DL}/home:/unisic/${repo}/ ./" \\\n` +
        "  | sudo tee /etc/apt/sources.list.d/home_unisic.list",
    },
    { key: "install", command: "sudo apt update && sudo apt install unisic" },
  ];
}

/* addrepo + refresh + install for one OBS zypper repo (Tumbleweed, 16.0). */
function zypperSteps(path: string): InstallStep[] {
  return [
    {
      key: "addRepo",
      command: `sudo zypper addrepo ${OBS_DL}/home:unisic/${path}/home:unisic.repo`,
    },
    { key: "refreshRepo", command: "sudo zypper refresh" },
    { key: "install", command: "sudo zypper install unisic" },
  ];
}

export const DISTROS: Distro[] = [
  {
    id: "ubuntu",
    name: "Ubuntu",
    variants: [
      { id: "xUbuntu_26.04", label: "26.04" },
      { id: "xUbuntu_25.10", label: "25.10" },
    ],
    steps: (variant) => aptSteps(variant ?? "xUbuntu_26.04"),
  },
  {
    id: "debian",
    name: "Debian",
    steps: () => aptSteps("Debian_13"),
  },
  {
    id: "fedora",
    name: "Fedora",
    steps: () => [
      { key: "enableRepo", command: "sudo dnf copr enable deandark/Unisic" },
      { key: "install", command: "sudo dnf install unisic" },
    ],
  },
  {
    id: "opensuse",
    name: "openSUSE",
    variants: [
      { id: "openSUSE_Tumbleweed", label: "Tumbleweed" },
      { id: "16.0", label: "Leap 16.0" },
    ],
    steps: (variant) => zypperSteps(variant ?? "openSUSE_Tumbleweed"),
  },
  {
    id: "arch",
    name: "Arch",
    steps: () => [
      {
        key: "importKey",
        command: [
          "curl -fsSL 'https://build.opensuse.org/projects/home:unisic/signing_keys/download?kind=gpg' -o /tmp/unisic-obs.key",
          "sudo pacman-key --add /tmp/unisic-obs.key",
          'sudo pacman-key --lsign-key "$(gpg --show-keys --with-colons /tmp/unisic-obs.key | awk -F: \'/^fpr/{print $10; exit}\')"',
        ].join("\n"),
      },
      {
        key: "addRepo",
        command:
          `printf '\\n[home_unisic_Arch]\\nServer = ${OBS_DL}/home:/unisic/Arch/$arch\\n' \\\n` +
          "  | sudo tee -a /etc/pacman.conf",
      },
      { key: "install", command: "sudo pacman -Syu unisic" },
    ],
  },
];
