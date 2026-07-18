---
title: "Installation"
description: "Install from a distribution repository (OBS / COPR), grab a direct download, or build from source."
order: 2
group: "Getting started"
---

This page covers how to install Unisic: the distribution repositories (recommended), direct downloads from GitHub Releases, and building from source.

## Requirements

Unisic runs on Linux. You need a Wayland session with `xdg-desktop-portal` and a backend installed. Recording additionally needs PipeWire and `ffmpeg`, and text recognition (OCR) needs Tesseract with a language pack — all optional. See [Optional dependencies](/docs/dependencies) for the per-distribution packages. The app is built with C++20 / Qt 6 / QML.

For compositor-specific setup (for example wlroots compositors like niri, which need `grim` for screenshots and compositor-side keybinds), see [Compositors](/docs/compositors).

## Install from a repository (recommended)

Install from a repository and updates arrive automatically through your package manager, like any other package. The [website download section](/#download) has the same snippets with a distro picker and copy buttons.

### Debian / Ubuntu

An auto-updating signed repository built on the [openSUSE Build Service](https://software.opensuse.org/download.html?project=home:unisic&package=unisic). Needs a release with Qt 6.5+: Debian 13, Ubuntu 25.10 / 26.04 (25.10 reaches EOL in July 2026 — prefer 26.04).

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

Builds are provided for Fedora 43, 44, and Rawhide. The COPR build pulls in the optional deps (PipeWire, Tesseract) so recording and OCR work out of the box. To add OCR language packs, see [Optional dependencies](/docs/dependencies).

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

## Direct downloads

The [Releases](https://github.com/unisic/unisic/releases/latest) page has a standalone **AppImage** that updates itself in-app. Every packaged format (deb, rpm, Arch, openSUSE) ships through the repositories above.

## Build from source

Building needs **Qt 6.5+**, CMake, and Ninja.

### Fedora

```sh
sudo dnf install -y cmake ninja-build gcc-c++ \
    qt6-qtbase-devel qt6-qtdeclarative-devel qt6-qtsvg-devel qt6-qtwayland \
    pipewire-devel ffmpeg wl-clipboard xdg-desktop-portal
```

### Debian / Ubuntu

Needs a release with Qt 6.5+ (trixie / 24.10+):

```sh
sudo apt install cmake ninja-build g++ pkg-config \
    qt6-base-dev qt6-declarative-dev libqt6svg6-dev qt6-wayland \
    libpipewire-0.3-dev ffmpeg wl-clipboard xdg-desktop-portal
```

### Arch

```sh
sudo pacman -S --needed base-devel qt6-base qt6-declarative qt6-svg qt6-wayland \
    pipewire ffmpeg wl-clipboard xdg-desktop-portal cmake ninja pkgconf
cd packaging/arch && makepkg -si   # or use the common build below
```

### Common build

```sh
cmake -B build -G Ninja -DCMAKE_BUILD_TYPE=Release
cmake --build build
./build/unisic
```

PipeWire and Tesseract dev packages are optional at build time — without them the app builds with recording / OCR disabled. `zxing-cpp` additionally enables reading QR and bar codes inside the OCR path. For the runtime tools and OCR language packs, see [Optional dependencies](/docs/dependencies).

## Run

Starting Unisic with no arguments does a background start with the tray and main window. You can also drive it from the command line:

```sh
unisic --fullscreen | --region | --window | --gif
unisic --export-settings <file> | --import-settings <file>
```

A second invocation forwards the command to the running instance — that is how compositor-side keybinds work (see [Compositors](/docs/compositors)).

## First run

On first run, Unisic installs `app.unisic.Unisic.desktop` into `~/.local/share/applications` (it declares `X-KDE-DBUS-Restricted-Interfaces=org.kde.KWin.ScreenShot2`), which authorizes the silent KWin path. Without it, captures still work through the portal.

After installing, see [Configuration](/docs/configuration) for settings, destinations, and filename templates.
