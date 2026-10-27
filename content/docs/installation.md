---
title: "Installation"
seoTitle: "Install Unisic: Fedora, Arch, Debian, openSUSE, Nix, Windows"
description: "Install from a distribution repository (OBS / COPR), with Nix, grab a direct download or the Windows installer, or build from source."
order: 2
group: "Getting started"
---

## Requirements

Unisic runs on Linux, and as an experimental build on Windows 11 (see [Windows (experimental)](#windows-experimental)). It targets Wayland: KDE Plasma natively, GNOME and wlroots desktops through portals. X11 is a best-effort second target. Recording a single window needs Wayland.

Native packages include every application dependency and helper, including ffmpeg, the PipeWire command-line tools, Tesseract data, grim and one portal backend for the desktop. Portable bundles carry the helpers but use the desktop's running PipeWire and portal services. See [Dependencies](/docs/dependencies) for the complete package contract. Unisic is built with C++20, Qt 6 and QML.

For compositor-specific setup, including compositor-side keybinds on wlroots, see [Compositors](/docs/compositors).

## Install the AppImage (recommended)

The AppImage is one file and needs no root. It updates itself: when a new release appears, Unisic downloads it and checks it against the SHA-256 published for that file. It then replaces itself in place and restarts once you are idle. It bundles the application libraries, QtMultimedia, OCR data and every helper Unisic invokes. Nothing else needs installing or building.

The installer script installs it and adds Unisic, with its icon, to your applications menu:

```sh
curl -fsSL https://unisic.app/install.sh | bash
```

The script opens an arrow-key menu. The first entry installs this AppImage into `~/.local`. The second installs your distribution's package instead. An existing install is updated in place, never duplicated. The same menu also uninstalls, installs an older version and toggles automatic updates.

To read the script before it runs:

```sh
curl -fsSLO https://unisic.app/install.sh
less install.sh && bash install.sh
```

To install by hand, download `Unisic-<version>-x86_64.AppImage` from the [latest release](https://github.com/unisic/unisic/releases/latest). The file name carries the version, so there is no version-less URL for it. Then run:

```sh
chmod +x ~/Downloads/Unisic-*-x86_64.AppImage
~/Downloads/Unisic-*-x86_64.AppImage
```

The AppImage needs `fuse` (`/dev/fuse` and a `fusermount` binary), which every desktop distribution ships. Where it is missing, the installer falls back to the unpacked `.tar.gz` of the same build.

## Install from a distribution repository

Repository installs update automatically through your package manager, like any other package.

### Debian / Ubuntu

A signed repository built on the [openSUSE Build Service](https://software.opensuse.org/download.html?project=home:unisic&package=unisic). It needs a release with Qt 6.5+: Debian 13, Ubuntu 25.10 or 26.04.

> [!WARNING]
> Ubuntu 25.10 reaches EOL in July 2026, so prefer 26.04.

Set your repository name and import the signing key. Run both steps in the same shell so `$REPO` carries over:

```sh
REPO=Debian_13   # or xUbuntu_26.04 / xUbuntu_25.10
curl -fsSL "https://download.opensuse.org/repositories/home:/unisic/${REPO}/Release.key" \
  | gpg --dearmor | sudo tee /etc/apt/keyrings/home_unisic.gpg > /dev/null
```

Add the repository:

```sh
echo "deb [signed-by=/etc/apt/keyrings/home_unisic.gpg] https://download.opensuse.org/repositories/home:/unisic/${REPO}/ ./" \
  | sudo tee /etc/apt/sources.list.d/home_unisic.list
```

Update and install:

```sh
sudo apt update && sudo apt install unisic
```

### Fedora

Install from the [`deandark/Unisic`](https://copr.fedorainfracloud.org/coprs/deandark/Unisic/) COPR repository. Enable it:

```sh
sudo dnf copr enable deandark/Unisic
```

Install Unisic:

```sh
sudo dnf install unisic
```

Builds exist for Fedora 43, 44 and Rawhide. The COPR package has the same complete dependency set as every other channel, so recording, OCR and QR/barcode decoding work without extra packages.

### openSUSE

Add the repository. For Leap 16.0, replace `openSUSE_Tumbleweed` with `16.0`:

```sh
sudo zypper addrepo https://download.opensuse.org/repositories/home:unisic/openSUSE_Tumbleweed/home:unisic.repo
```

Refresh the repositories and accept the signing key when asked:

```sh
sudo zypper refresh
```

Install Unisic:

```sh
sudo zypper install unisic
```

### Arch

The same OBS project publishes a signed pacman repository. No AUR is needed.

Import and locally sign the repository key:

```sh
curl -fsSL 'https://build.opensuse.org/projects/home:unisic/signing_keys/download?kind=gpg' -o /tmp/unisic-obs.key
sudo pacman-key --add /tmp/unisic-obs.key
sudo pacman-key --lsign-key "$(gpg --show-keys --with-colons /tmp/unisic-obs.key | awk -F: '/^fpr/{print $10; exit}')"
```

Add the repository to `/etc/pacman.conf`:

```sh
printf '\n[home_unisic_Arch]\nServer = https://download.opensuse.org/repositories/home:/unisic/Arch/$arch\n' \
  | sudo tee -a /etc/pacman.conf
```

Install Unisic:

```sh
sudo pacman -Syu unisic
```

## Install with Nix

Unisic ships a flake, so it runs on NixOS and on any distribution with Nix. Only Unisic itself compiles. Its Qt/KDE dependencies come from the nixpkgs binary cache.

Run it once without installing:

```sh
nix run github:unisic/unisic -- --region
```

Install it into your profile:

```sh
nix profile add github:unisic/unisic
```

For a declarative setup, add the flake as an input and the package to your NixOS or home-manager configuration:

```nix
{
  inputs.unisic.url = "github:unisic/unisic";
  # then in your modules:
  # environment.systemPackages = [ inputs.unisic.packages.${pkgs.system}.default ];
}
```

On NixOS, enable the portal and PipeWire so capture and recording work:

```nix
xdg.portal.enable = true;
services.pipewire.enable = true;
```

## Direct downloads

The [Releases](https://github.com/unisic/unisic/releases/latest) page carries every format. The **AppImage** updates itself. The **.deb**, Fedora **.rpm** and Arch **.pkg.tar.zst** packages register their repository on first install. After that, updates arrive through `apt upgrade`, `dnf upgrade` or `pacman -Syu`. openSUSE has no release package, because a binary rpm is pinned to the exact Qt it was built against. Use the repository above.

The **Flatpak** bundle, `unisic-<version>-x86_64.flatpak`, installs for your user and takes the KDE runtime from Flathub:

```sh
flatpak remote-add --if-not-exists --user flathub https://dl.flathub.org/repo/flathub.flatpakrepo
flatpak install --user --bundle ./unisic-*-x86_64.flatpak
```

## Windows (experimental)

The Windows port is written entirely by an AI model. The author will not touch the code it takes to port Unisic to a system this poorly thought out. Treat the port as a preview: it is tested by running it on Windows 11, not used daily like the Linux build.

From 0.8.8 on, each [release](https://github.com/unisic/unisic/releases) carries two Windows files. The release page shows the SHA-256 of each:

- `unisic-<version>-windows-x64-experimental-setup.exe`: a setup wizard. It installs Unisic for your user only into `%LOCALAPPDATA%\Programs\Unisic`, with a Start menu entry and an uninstaller.
- `Unisic-<version>-windows-x86_64-experimental.zip`: the same files. Unpack anywhere and run `bin\unisic.exe`.

Neither needs administrator rights. Both update themselves. Unisic downloads the newer release's zip, checks it against its published SHA-256 and unpacks it under `%APPDATA%\Unisic\unisic\updates`. From then on, the installed or unpacked `unisic.exe` starts that copy, so keep an unpacked folder where it is. The uninstaller also removes those staged updates and keeps your settings and capture history.

What works: screenshots (full screen, region, active window), the overlay, the editor, saving, the clipboard, OCR, the tray, global hotkeys and scrolling capture. Recording a GIF or video of the full screen or a region works too, with system sound, a microphone and the sound of single applications. Recording a single window does not work yet. The default hotkeys differ from Linux: see [Keyboard shortcuts](/docs/hotkeys#windows-experimental).

## Build from source

Building needs **Qt 6.5+**, CMake and Ninja.

Set `PORTAL_BACKEND` to the package for your desktop (`-kde`, `-gnome` or `-wlr`) before running the matching block.

### Fedora

```sh
PORTAL_BACKEND=xdg-desktop-portal-kde
sudo dnf install -y cmake ninja-build gcc-c++ \
    qt6-qtbase-devel qt6-qtdeclarative-devel qt6-qtsvg-devel qt6-qtwayland \
    qt6-qtwayland-devel qt6-qtbase-private-devel qt6-qttools-devel \
    plasma-wayland-protocols-devel pipewire-devel tesseract-devel leptonica-devel \
    zxing-cpp-devel layer-shell-qt-devel wayland-devel kf6-kguiaddons-devel \
    libinput-devel systemd-devel libX11-devel libXext-devel libXfixes-devel libxcb-devel \
    ffmpeg-free curl grim pipewire-utils zip wl-clipboard xdg-desktop-portal \
    "$PORTAL_BACKEND" tesseract-langpack-eng tesseract-langpack-pol tesseract-osd
```

### Debian / Ubuntu

Needs a release with Qt 6.5+ (trixie / 24.10+):

```sh
PORTAL_BACKEND=xdg-desktop-portal-kde
sudo apt install cmake ninja-build g++ pkg-config \
    qt6-base-dev qt6-declarative-dev qt6-svg-dev qt6-wayland \
    qt6-wayland-dev qt6-base-private-dev qt6-tools-dev qt6-l10n-tools \
    plasma-wayland-protocols libpipewire-0.3-dev libtesseract-dev libleptonica-dev \
    libzxing-dev liblayershellqtinterface-dev libwayland-dev libkf6guiaddons-dev \
    libinput-dev libudev-dev libx11-dev libxext-dev libxfixes-dev libxcb1-dev \
    ffmpeg curl grim pipewire-bin zip wl-clipboard xdg-desktop-portal \
    "$PORTAL_BACKEND" tesseract-ocr-eng tesseract-ocr-pol tesseract-ocr-osd
```

### Arch

```sh
PORTAL_BACKEND=xdg-desktop-portal-kde
sudo pacman -S --needed base-devel qt6-base qt6-declarative qt6-svg qt6-wayland \
    qt6-tools plasma-wayland-protocols pipewire tesseract leptonica zxing-cpp \
    layer-shell-qt wayland kguiaddons libinput libx11 libxext libxfixes libxcb \
    ffmpeg curl grim pipewire-audio zip wl-clipboard xdg-desktop-portal \
    "$PORTAL_BACKEND" tesseract-data-eng tesseract-data-pol tesseract-data-osd \
    cmake ninja pkgconf
cd packaging/arch && makepkg -si   # or use the common build below
```

### Common build

```sh
cmake -B build -G Ninja -DCMAKE_BUILD_TYPE=Release
cmake --build build
./build/unisic
```

Every package above is required. A missing build library stops CMake at configure time with the distro package name, instead of producing a reduced binary. Runtime helpers are hard dependencies too. libinput needs its own development package **and** libudev's (`systemd-devel` on Fedora, `libudev-dev` on Debian). One without the other fails the build.

## Run

With no arguments, Unisic does a background start with the tray and main window. Command-line options:

```sh
unisic --fullscreen | --region | --window | --gif | --measure
unisic --export-settings <file> | --import-settings <file>
```

A second invocation forwards the command to the running instance. Compositor-side keybinds work this way (see [Compositors](/docs/compositors)).

## First run

On first run in a KDE session, Unisic installs `app.unisic.Unisic.desktop` into `~/.local/share/applications`. The file declares `X-KDE-DBUS-Restricted-Interfaces=org.kde.KWin.ScreenShot2`, which authorizes the silent KWin path.

> [!NOTE]
> AppImage runs skip this and capture through the portal; see [Configuration](/docs/configuration). Without the desktop file, captures still work through the portal.

After installing, see [Configuration](/docs/configuration) for settings, destinations and filename templates.
