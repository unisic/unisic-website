---
title: "Introduction"
seoTitle: "What is Unisic? A Linux screenshot tool"
description: "What Unisic is, the capture-to-upload workflow, what you need to run it, privacy, and licensing."
order: 1
group: "Getting started"
---

## What is Unisic

Unisic is an open-source screenshot tool and screen recorder for Linux. It has zero telemetry and is licensed under the GNU GPL v3.

After you trigger a capture, you can annotate on the selection overlay before the shot is taken, edit afterwards, and copy text from any region with OCR. You can record the same region as a GIF or video. The result goes to the clipboard, to disk, or to a custom upload destination, with the link ready to paste.

Unisic uses only legitimate Linux APIs (`xdg-desktop-portal`, KWin ScreenShot2, PipeWire, KGlobalAccel, `wlr-screencopy`). It is written in C++20, Qt 6 and QML, with a fully custom UI. Each release from 0.8.8 on also ships an experimental Windows 11 build, written entirely by AI. See [Installation](/docs/installation#windows-experimental).

## The workflow

### Annotate before the shot

Draw on the frozen capture overlay with nearly the whole editor tool set: pen, arrow, shapes, callout, text, highlight, blur, measure, steps and more. Annotations are burnt into the final crop. Enter, Space or a double-click captures; Esc cancels.

### Edit afterwards

An optional editor opens automatically after capture. Its tools include highlight, pixelate, smart eraser, magnifier, callout, measure, numbered steps and crop. It supports zoom (`Ctrl+scroll`), undo and redo, and composites everything in image-pixel space.

### Extract text and codes

OCR any region to copy its text (`Meta+Shift+T`). In the editor, pick individual words to copy, highlight or redact them. On a QR code or barcode, the payload is copied instead.

### Record

Record a region, the full screen or a window as a GIF or as MP4/WebM video. System and microphone audio are optional. Instant replay buffers the last moments, so you can save what already happened. `Ctrl+Esc` is a fixed emergency stop.

### Edit your own files

The Edit page opens images and recordings that did not come from a capture. Images open in the same editor, videos in the trim window.

### Upload

Send the result to a custom HTTP destination, an imported `.sxcu` (ShareX) uploader, FTP/SFTP, or a built-in host (catbox.moe, or expiring hosts such as uguu.se). The link is copied to your clipboard automatically.

### History

The history view keeps every capture with a thumbnail. Star favorites, pin a capture as a floating always-on-top preview, or drag a thumbnail into another app. Deleting a capture moves the file to the trash. External deletions are picked up automatically.

## Capture backends

Unisic picks the Wayland capture path for your session:

- **KDE Plasma**: the fully silent native path through KWin ScreenShot2.
- **Other desktops**: `xdg-desktop-portal`.
- **wlroots compositors** (such as niri): `wlr-screencopy` via `grim`.

## Requirements

Native packages install a portal backend, PipeWire and ffmpeg. Portable bundles carry ffmpeg and use the session's running portal and PipeWire services. A missing application dependency stops a source build instead of disabling features.

See [Installation](/docs/installation) for distro repositories and build instructions, and [Compositors](/docs/compositors) for backend-specific setup.

## Privacy

Unisic collects nothing: no telemetry, no crash reporting, no analytics, no account. On its own, it only contacts `api.github.com` and `github.com` to check for a newer release. It fetches only the latest version tag and sends nothing about you. Uploads happen only when you trigger them, to destinations you configured.

## License

Unisic is free software under the **GNU GPL v3**. You may use, study, modify and redistribute it, including commercially. Any distributed derivative must also be released under GPL v3 with full source.

## Development

Unisic is developed with agentic AI assistance. Those agents follow the contributor guide in [`AGENTS.md`](https://github.com/unisic/unisic/blob/main/AGENTS.md). The maintainer reads and reviews every generated change line by line before it lands; nothing merges unread. If something slipped through, please [file an issue](https://github.com/unisic/unisic/issues).

Unisic is built by [@DeBondor](https://github.com/DeBondor) and [@D3anDark](https://github.com/D3anDark), and inspired by [ShareX](https://getsharex.com/) and [Spectacle](https://apps.kde.org/spectacle/).

## Reporting issues

Unisic is stable as of 0.7. If something misbehaves on your setup, report it in [Issues](https://github.com/unisic/unisic/issues) with your desktop, compositor, GPU and logs. Feature requests are welcome there too.

## Where to next

- [Installation](/docs/installation): install from your distro's repository or build from source.
- [Capture](/docs/capture): full screen, region and active-window captures.
- [Hotkeys](/docs/hotkeys): the default shortcuts and how to change them.
