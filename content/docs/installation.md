---
title: "Installation"
description: "Install from a package, the Fedora COPR repo, or build from source."
order: 2
group: "Getting started"
---

This page covers how to install Unisic: the prebuilt packages on GitHub Releases, the Fedora COPR repository, and building from source.

## Requirements

Unisic runs on Linux Wayland. You need a Wayland session with `xdg-desktop-portal` and a backend installed. Recording additionally needs PipeWire and `ffmpeg`. The app is built with C++20 / Qt 6 / QML.

For compositor-specific setup (for example wlroots compositors like niri, which need `grim` for screenshots and compositor-side keybinds), see [Compositors](/docs/compositors).

## Packages

Grab the latest build from [Releases](https://github.com/unisic/unisic/releases/latest). The following formats are provided:

| Format | Notes |
|---|---|
| **AppImage** | Universal; zsync differential updates. |
| **Flatpak bundle** | Sideload bundle. |
| **deb** | Debian, Ubuntu. |
| **rpm** | On Fedora, install via the COPR repo (see below). |
| **Arch package** | Arch Linux. |

The website download page fetches the latest release directly from GitHub.

## Updates

| Package | How it updates |
|---|---|
| **AppImage** | Embedded update info + `.zsync` on every release — run `AppImageUpdate` on the file for a differential update. |
| **Flatpak** | The release bundle is a sideload — re-download to update (native `flatpak update` once Unisic lands on Flathub). |
| **deb / rpm / Arch** | Download the new package from Releases and install it over the old one. |

## Fedora (COPR)

On Fedora, install from the COPR repository:

```sh
sudo dnf copr enable deandark/Unisic
sudo dnf install unisic
```

Builds are provided for Fedora 43, 44, and Rawhide. Updates arrive with the rest of the system through `dnf upgrade`.

The COPR project page is at https://copr.fedorainfracloud.org/coprs/deandark/Unisic/.

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

PipeWire and Tesseract dev packages are optional at build time — without them the app builds with recording/OCR disabled.

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
