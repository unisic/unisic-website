---
title: "Optional dependencies"
description: "Enable recording, the reliable clipboard, and OCR (with language packs) — the extra tools per distribution."
order: 2
group: "Getting started"
---

Unisic works out of the box on the built-in Wayland APIs. A handful of **optional** external tools unlock more: screen recording, the most reliable clipboard copy, and text recognition (OCR). None of them are required to take, annotate, and share screenshots.

If you installed Unisic from a [distribution repository](/docs/installation#install-from-a-repository-recommended), the recording tools are already pulled in as dependencies — you only need this page to add **OCR language packs**, or if you run the AppImage or a source build. The app's own **Settings → General → Diagnostics → Run system check** lists exactly what is present on your machine and what is missing.

## What each tool unlocks

| Tool | Unlocks | Without it |
| --- | --- | --- |
| `ffmpeg` | Screen recording and GIF export | Recording and GIF are unavailable |
| PipeWire | The screen-cast backend recording needs | Recording is unavailable |
| `wl-clipboard` | The most reliable copy-to-clipboard on Wayland | Copy still works, less reliably in some apps |
| Tesseract + a language pack | Text recognition (OCR) — copy text out of a capture | The OCR action recognizes nothing |
| Tesseract `osd` pack | OCR auto-detects the script of each capture | OCR loads every installed pack instead (slower) |
| `grim` | Screenshots on wlroots compositors (niri, sway, Hyprland) | See [Compositors](/docs/compositors) |

## Install by distribution

Each block installs the recording tools and the reliable clipboard. OCR language packs are added separately below, because you only want the languages you actually use.

### Fedora

```sh
sudo dnf install ffmpeg pipewire wl-clipboard tesseract tesseract-langpack-osd
```

On wlroots compositors, also install `grim`. Full `ffmpeg` comes from [RPM Fusion](https://rpmfusion.org/); Fedora's own `ffmpeg-free` also works.

### Debian / Ubuntu

```sh
sudo apt install ffmpeg pipewire wl-clipboard tesseract-ocr tesseract-ocr-osd
```

On wlroots compositors, also install `grim`.

### Arch

```sh
sudo pacman -S --needed ffmpeg pipewire wl-clipboard tesseract tesseract-data-osd
```

On wlroots compositors, also install `grim`.

### openSUSE

```sh
sudo zypper install ffmpeg pipewire wl-clipboard tesseract-ocr tesseract-ocr-traineddata-osd
```

On wlroots compositors, also install `grim`. Full `ffmpeg` comes from the [Packman](https://en.opensuse.org/Additional_package_repositories#Packman) repository.

## OCR language packs

OCR recognizes text only in languages whose Tesseract pack is installed. Install one pack per language you capture; combine several in **Settings → OCR** with `+` (for example `eng+pol`), or leave auto-language on to detect the script for you.

The `osd` pack (installed in the commands above) is what auto-language uses to detect a capture's script. Keep it installed.

| Distribution | English pack | Find the rest |
| --- | --- | --- |
| Fedora | `tesseract-langpack-eng` | `dnf search tesseract-langpack` |
| Debian / Ubuntu | `tesseract-ocr-eng` | `apt-cache search tesseract-ocr-` |
| Arch | `tesseract-data-eng` | `pacman -Ss tesseract-data` |
| openSUSE | `tesseract-ocr-traineddata-english` | `zypper search tesseract-ocr-traineddata` |

For example, to add English and Polish on Fedora:

```sh
sudo dnf install tesseract-langpack-eng tesseract-langpack-pol
```

The same pattern applies on the other distributions — swap in the package name from the table and the language code you need.

## Verify

After installing, open **Settings → General → Diagnostics → Run system check** in Unisic. Every optional tool shows a tick or an install hint, so you can confirm the ones you added are now detected. The **Copy diagnostics** button next to it copies a plain-text summary of your setup for a bug report.
