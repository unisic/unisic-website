---
title: "Installation"
seoTitle: "Install Unisic on Ubuntu, Fedora, Arch or Debian"
description: "Install from a distribution repository (OBS / COPR), with Nix, grab a direct download, or build from source."
order: 2
group: "Getting started"
---

This page covers how to install Unisic: the AppImage (recommended), the distribution repositories, Nix, direct downloads from GitHub Releases, and building from source.

## Requirements

Unisic runs on Linux. Native packages include every application dependency and helper, including ffmpeg, the PipeWire command-line tools, Tesseract data, grim and one portal backend chosen for the desktop. Portable bundles carry the helpers but still use the desktop's running PipeWire and portal services. See [Dependencies](/docs/dependencies) for the complete package contract. The app is built with C++20 / Qt 6 / QML.

For compositor-specific setup, including compositor-side keybinds on wlroots, see [Compositors](/docs/compositors).

## Install the AppImage (recommended)

One file, no root, and it keeps itself up to date: when a new release appears Unisic downloads it, checks it against the SHA-256 the release published for that file, replaces itself in place and restarts once you are idle. It bundles the application libraries, QtMultimedia, OCR data and every helper Unisic invokes. Nothing to add to your system, nothing to build.

The installer script does it for you, and also adds Unisic to your applications menu with its icon:

```sh
bash -c "$(curl -fsSL https://github.com/unisic/unisic/releases/latest/download/install.sh)"
```

An arrow-key menu opens and its first entry is this AppImage install, into `~/.local`; the second installs your distribution's package instead. Whatever you already have installed is updated where it is, never duplicated, and the same menu uninstalls, installs an older version and toggles automatic updates.

By hand instead, take `Unisic-<version>-x86_64.AppImage` from the [latest release](https://github.com/unisic/unisic/releases/latest) (the asset name carries the version, so there is no version-less URL for it), then:

```sh
chmod +x ~/Downloads/Unisic-*-x86_64.AppImage
~/Downloads/Unisic-*-x86_64.AppImage
```

The AppImage needs `fuse` (`/dev/fuse` plus a `fusermount` binary), which every desktop distribution ships; where it is genuinely missing, the installer falls back to the unpacked `.tar.gz` of the same build.

## Install from a distribution repository

Install from a repository and updates arrive automatically through your package manager, like any other package - the right choice if you would rather one program managed everything on the machine. The [website download section](/#download) has the same snippets with a distro picker and copy buttons.

### Debian / Ubuntu

An auto-updating signed repository built on the [openSUSE Build Service](https://software.opensuse.org/download.html?project=home:unisic&package=unisic). Needs a release with Qt 6.5+: Debian 13, Ubuntu 25.10 / 26.04.

> [!WARNING]
> Ubuntu 25.10 reaches EOL in July 2026, so prefer 26.04.

First, pick your repo name and import the repository signing key (run both steps in the same shell so `$REPO` carries over):

```sh
REPO=Debian_13   # or xUbuntu_26.04 / xUbuntu_25.10
curl -fsSL "https://download.opensuse.org/repositories/home:/unisic/${REPO}/Release.key" \
  | gpg --dearmor | sudo tee /etc/apt/keyrings/home_unisic.gpg > /dev/null
```

Then add the repository:

```sh
echo "deb [signed-by=/etc/apt/keyrings/home_unisic.gpg] https://download.opensuse.org/repositories/home:/unisic/${REPO}/ ./" \
  | sudo tee /etc/apt/sources.list.d/home_unisic.list
```

Finally, update and install:

```sh
sudo apt update && sudo apt install unisic
```

### Fedora

On Fedora, install from the [`deandark/Unisic`](https://copr.fedorainfracloud.org/coprs/deandark/Unisic/) COPR repository.

First, enable the COPR repository:

```sh
sudo dnf copr enable deandark/Unisic
```

Then install Unisic:

```sh
sudo dnf install unisic
```

Builds are provided for Fedora 43, 44, and Rawhide. The COPR package has the same complete dependency set as every other channel, so recording, OCR and QR/barcode decoding work out of the box.

### openSUSE

First, add the repository (for Leap 16.0 replace `openSUSE_Tumbleweed` with `16.0`):

```sh
sudo zypper addrepo https://download.opensuse.org/repositories/home:unisic/openSUSE_Tumbleweed/home:unisic.repo
```

Then refresh the repositories and accept the signing key when asked:

```sh
sudo zypper refresh
```

Finally, install Unisic:

```sh
sudo zypper install unisic
```

### Arch

The same OBS project publishes a signed pacman repository (no AUR needed).

First, import and locally sign the repository key:

```sh
curl -fsSL 'https://build.opensuse.org/projects/home:unisic/signing_keys/download?kind=gpg' -o /tmp/unisic-obs.key
sudo pacman-key --add /tmp/unisic-obs.key
sudo pacman-key --lsign-key "$(gpg --show-keys --with-colons /tmp/unisic-obs.key | awk -F: '/^fpr/{print $10; exit}')"
```

Then add the repository to `/etc/pacman.conf`:

```sh
printf '\n[home_unisic_Arch]\nServer = https://download.opensuse.org/repositories/home:/unisic/Arch/$arch\n' \
  | sudo tee -a /etc/pacman.conf
```

Finally, install Unisic:

```sh
sudo pacman -Syu unisic
```

## Install with Nix

Unisic ships a flake, so it runs on any distribution that has Nix, and on NixOS. Only Unisic itself compiles; its Qt/KDE dependencies come from the nixpkgs binary cache.

Run it once without installing:

```sh
nix run github:unisic/unisic -- --region
```

Install it into your profile:

```sh
nix profile add github:unisic/unisic
```

For a declarative setup, add the flake as an input and pull the package into your NixOS or home-manager configuration:

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

The [Releases](https://github.com/unisic/unisic/releases/latest) page carries every format: the self-updating **AppImage**, plus one-off **.deb**, Fedora **.rpm**, and Arch **.pkg.tar.zst** packages that register their repository on first install - from then on updates arrive through `apt upgrade` / `dnf upgrade` / `pacman -Syu` like any other package. openSUSE has no release package (a binary rpm is pinned to the exact Qt it was built against); use the repository above.

## Build from source

Building needs **Qt 6.5+**, CMake, and Ninja.

Set `PORTAL_BACKEND` to the package for your desktop (`-kde`, `-gnome`, or `-wlr`) before running the matching block.

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

Every package above is required. Missing build libraries stop CMake at configure time with the distro package name instead of producing a reduced binary. Runtime helpers are hard dependencies too. libinput needs its own development package **and** libudev's (`systemd-devel` on Fedora, `libudev-dev` on Debian); one without the other fails the build.

## Run

Starting Unisic with no arguments does a background start with the tray and main window. You can also drive it from the command line:

```sh
unisic --fullscreen | --region | --window | --gif | --measure
unisic --export-settings <file> | --import-settings <file>
```

A second invocation forwards the command to the running instance - that is how compositor-side keybinds work (see [Compositors](/docs/compositors)).

## First run

On first run in a KDE session, Unisic installs `app.unisic.Unisic.desktop` into `~/.local/share/applications` (it declares `X-KDE-DBUS-Restricted-Interfaces=org.kde.KWin.ScreenShot2`), which authorizes the silent KWin path.

> [!NOTE]
> AppImage runs skip this and capture through the portal instead; see [Configuration](/docs/configuration). Without the desktop file, captures still work through the portal.

After installing, see [Configuration](/docs/configuration) for settings, destinations, and filename templates.
