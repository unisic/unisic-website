---
title: "Capturing"
seoTitle: "How to take a screenshot on Linux"
description: "The three capture modes, annotating before the shot, and OCR text extraction."
order: 3
group: "Capturing & editing"
---

## Capture modes

Each of the three modes runs from a hotkey or from the command line.

### Full screen

Captures all monitors, stitched into one image.

### Region

Opens a frozen overlay on each monitor. Drag out the rectangle to capture. The selection shows live dimensions while you resize it. Because the overlay is frozen, moving content does not shift while you line it up. Press `Enter` or double-click inside the selection to capture, or `Esc` to cancel.

On Plasma, `W` fills the selection with the rectangle of the window you were working in. Unisic asks KWin where that window is. You can then nudge, resize or confirm the selection. `W` selects the area, not the window, so anything drawn over that area is captured too. The same key works in the OCR, GIF and recording selectors. Other compositors do not tell an application where another window is, so the `W` hint appears only on KWin.

### Active window

Captures the focused window alone, with no need to trace its bounds.

## Annotate before the shot

Draw on the frozen overlay *before* the capture. The marks become part of the shot, with no separate editing pass. The overlay has nearly the whole editor tool set: pen, line, arrow, shapes, callout, text, highlight, blur, pixelate, smart eraser, measure and numbered steps. Anything drawn inside the selection is burnt into the final crop.

As with a plain region capture, `Enter`, `Space` or a double-click captures the annotated selection, and `Esc` cancels. `Ctrl+drag` moves the selected region. `Ctrl+A` selects the whole screen. `Ctrl+C` confirms and copies the result, even with auto-copy off. The editor opens afterwards, with the full tool set and post-capture editing: see [the editor](/docs/editor).

## Copy text out of a region (OCR)

`Meta+Shift+T` opens the same region selection, but copies text instead of an image. Unisic runs OCR on the region and puts the recognized text on the clipboard. For a QR code or barcode, it copies the decoded payload instead.

To copy, highlight or redact individual words in a finished capture, see [the editor](/docs/editor).

## Capture options

- **Delay**: a timer before the shot, for menus or hover states that would otherwise close.
- **Cursor**: optionally include the mouse cursor in the image.
- **Do not disturb**: pauses desktop notifications during the capture, so they never land in the screenshot (KDE Plasma).

## How the pixels are captured

Unisic captures the screen through legitimate Wayland APIs only. It picks the path for your compositor automatically:

- **KDE Plasma**: the silent native KWin ScreenShot2 path.
- **Other desktops**: `xdg-desktop-portal`, through your installed portal backend.
- **wlroots compositors**: wlr-screencopy, through the packaged `grim`.

On first run in a KDE session, Unisic installs `app.unisic.Unisic.desktop` into `~/.local/share/applications`. It declares `X-KDE-DBUS-Restricted-Interfaces=org.kde.KWin.ScreenShot2`, which authorizes the silent KWin path. AppImage runs skip this step. Without the file, captures still work through the portal.

See [compositor support](/docs/compositors) for each path and per-compositor notes.

## Hotkeys and the command line

Default capture hotkeys:

| Action | Shortcut |
| --- | --- |
| Capture full screen | `Meta+Shift+1` |
| Capture region | `Meta+Shift+2` |
| Capture active window | `Meta+Shift+3` |
| OCR region (copy text) | `Meta+Shift+T` |
| Copy last capture | `Meta+Shift+C` |

Change them in Settings -> Hotkeys. See [hotkeys](/docs/hotkeys).

Or trigger a capture from the command line:

```sh
unisic --fullscreen
unisic --region
unisic --window
unisic --measure   # on-screen measure overlay
```

The capture flags accept modifiers. `--delay <seconds>` (0-60) waits before the shot. `--output <path>` saves to a given file, and `-` streams the image to stdout. `--format png|jpg|webp` sets the format for `--output`.

If Unisic is already running, a second invocation forwards the command to the running instance. Compositor-side keybinds drive captures this way.
