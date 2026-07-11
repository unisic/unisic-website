---
title: "Introduction"
description: "What Unisic is, the capture-to-upload workflow, and what you need to run it."
order: 1
group: "Getting started"
---

This page introduces Unisic: what it is, the capture-to-upload workflow it covers, how it captures on different Wayland sessions, and what you need to run it.

## What is Unisic

Unisic is an open-source, zero-telemetry screenshot and screen recorder for Linux Wayland, licensed under the GNU GPL v3. Most snipping tools stop at a rectangle of pixels and walk away. Unisic covers everything that should happen *after* you press the hotkey.

The moment you trigger a capture, Unisic gives you the whole workflow: annotate on the selection overlay before the shot is even taken, edit afterwards, cut objects out of their background, record the same region as a GIF or video, and push the result wherever it belongs — clipboard, disk, or a custom upload destination with the link ready to paste.

It is built for Linux Wayland on legitimate APIs only (`xdg-desktop-portal`, KWin ScreenShot2, PipeWire, KGlobalAccel, `wlr-screencopy`), and is written in C++20 / Qt 6 / QML with a fully custom UI.

## The workflow

Unisic treats a screenshot as the start of a task, not the end of one.

### Annotate before the shot

Draw directly on the frozen capture overlay — pen, arrow, shapes, text, blur, steps — and the annotations are burnt into the final crop. Enter or double-click captures; Esc cancels.

### Edit afterwards

An optional post-capture editor opens automatically, with 12 tools including highlight, pixelate, smart eraser, numbered steps, and crop. You can zoom (`Ctrl+scroll`), undo, and redo, and everything is composited in image-pixel space.

### Object cutout

The *Pick object* tool segments the subject inside your selection and removes the background, exporting a transparent PNG or WebP.

### Record

Capture a region, the full screen, or a window as a GIF or as MP4/WebM video. `Ctrl+Esc` is a fixed emergency stop.

### Upload

Send the result to a custom HTTP destination, an imported `.sxcu` (ShareX) uploader, FTP/SFTP, or one of the built-in hosts (catbox, 0x0.st, Imgur) — and the resulting link is copied to your clipboard automatically.

### History

Every capture is kept in a history view with thumbnails. Deleting one moves the file to the trash, and external deletions are picked up automatically.

## Capture backends

Unisic uses the right Wayland path for your session:

- **KDE Plasma** gets the fully silent native path through KWin ScreenShot2.
- **Other desktops** work through `xdg-desktop-portal`.
- **wlroots compositors** (such as niri) capture through `wlr-screencopy` via `grim`.

## Requirements

You need a Wayland session with `xdg-desktop-portal` and a backend. Recording additionally needs PipeWire and `ffmpeg`.

See [Installation](/docs/installation) for the distro repositories and build instructions, and [Compositors](/docs/compositors) for backend-specific setup.

## Early developer access

Unisic is in early developer access. It works, but you will run into rough edges — capture quirks on exotic compositors, hotkey oddities, UI glitches. Every report helps: please file bugs, ideally with your desktop, compositor, GPU, and logs, in [Issues](https://github.com/unisic/unisic/issues). Feature requests are welcome there too.

## Where to next

- [Installation](/docs/installation) — install from your distro's repository or build from source.
- [Capture](/docs/capture) — full screen, region, and active-window captures.
- [Hotkeys](/docs/hotkeys) — the default shortcuts and how to change them.
