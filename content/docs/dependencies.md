---
title: "Dependencies"
seoTitle: "Dependencies bundled with Unisic"
description: "What every Unisic package includes, and how to add more OCR languages."
order: 2
group: "Getting started"
---

Unisic has no optional dependencies and no reduced package variant. Native packages install every linked library, runtime helper and one desktop-specific portal backend as a hard dependency. The AppImage, portable archive and Flatpak carry their own helpers; the desktop session supplies PipeWire and its portal backend. A build missing one compile-time dependency stops at configure time instead of quietly removing the feature.

Every package includes the same feature tools:

| Tool | Used for |
| --- | --- |
| `ffmpeg` + `ffprobe` | Screen recording, GIF export, conversion and trimming |
| PipeWire + `pw-record` / `pw-dump` / `pw-play` | Frames, audio sources, application audio and sound cues |
| `wl-copy` | Keeping image clipboard offers alive on Wayland |
| Tesseract + `eng` / `pol` / `osd` data | OCR and script detection |
| zxing-cpp | QR and barcode payloads inside OCR |
| `curl` | FTP, FTPS, SFTP and SCP upload destinations |
| `zip` | Diagnostics and ZIP export |
| `grim` | Silent, multi-monitor-safe screenshots on niri and wlroots compositors |

The app's **Settings → General → Diagnostics → Run system check** verifies this runtime set. A missing item means the install was modified or broken, not that an optional feature was omitted.

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

The same pattern applies on the other distributions - swap in the package name from the table and the language code you need.

## Verify

After installing, open **Settings → General → Diagnostics → Run system check** in Unisic. Every packaged tool should show a tick. The **Copy diagnostics** button next to it copies a plain-text summary for a bug report.
