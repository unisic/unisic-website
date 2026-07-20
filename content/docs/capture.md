---
title: "Capturing"
description: "The three capture modes, annotating before the shot, and OCR text extraction."
order: 3
group: "Capturing & editing"
---

This page covers Unisic's capture workflow: the three capture modes, drawing annotations on the frozen overlay before the shot is taken, copying text out of a region with OCR, and the capture options and backends involved.

## Capture modes

Unisic offers three ways to grab pixels. Each is available from a hotkey or from the command line.

### Full screen

Captures everything at once, with all monitors stitched into a single image. Use this when you want the entire desktop in one shot regardless of how many displays you have.

### Region

Opens a frozen, per-monitor overlay so you can drag out exactly the rectangle you want. The selection shows live dimensions as you resize it, and because the overlay is frozen you can line up moving content without it shifting under you. Press `Enter` or double-click inside the selection to capture, or `Esc` to cancel.

### Active window

Captures the currently focused window on its own, without you having to trace its bounds by hand.

## Annotate before the shot

Unisic lets you draw on the frozen overlay *before* the capture is taken, so the marks are part of the shot rather than a separate editing pass. Nearly the whole editor tool set is available on the overlay — pen, line, arrow, shapes, callout, text, highlight, blur, pixelate, smart eraser, measure, and numbered steps. Anything you draw inside the selection is burnt into the final crop.

As with a plain region capture, `Enter`, `Space`, or a double-click captures the annotated selection and `Esc` cancels. `Ctrl+drag` moves the selected region, `Ctrl+A` selects the whole screen, and `Ctrl+C` confirms and copies the result even when auto-copy is off. For the full tool set and post-capture editing, the editor opens afterwards — see [the editor](/docs/editor).

## Copy text out of a region (OCR)

`Meta+Shift+T` opens the same region selection, but instead of an image you get text: the region is OCR'd and the recognized text lands on your clipboard. Point it at a QR code or barcode and the decoded payload is copied instead.

For picking individual words out of a finished capture — to copy, highlight, or redact them — see [the editor](/docs/editor).

## Capture options

- **Delay** — set a timer before the shot fires, useful for opening menus or hovering states that would otherwise close.
- **Cursor** — optionally include the mouse cursor in the captured image.
- **Do not disturb** — pauses desktop notifications while the capture runs, so they never land in the screenshot (KDE Plasma).

## How the pixels are captured

Unisic grabs the screen through legitimate Wayland APIs only and picks the right path for your compositor automatically:

- **KDE Plasma** - the fully silent native KWin ScreenShot2 path.
- **Other desktops** - the `xdg-desktop-portal` route, through your installed portal backend.
- **wlroots compositors** - capture via wlr-screencopy using `grim` (install `grim`).

On first run in a KDE session, Unisic installs `app.unisic.Unisic.desktop` into `~/.local/share/applications`, declaring `X-KDE-DBUS-Restricted-Interfaces=org.kde.KWin.ScreenShot2` to authorize the silent KWin path (AppImage runs skip this). Without it, captures still work through the portal.

See [compositor support](/docs/compositors) for the details of each path and per-compositor notes.

## Hotkeys and the command line

The default capture hotkeys are:

| Action | Shortcut |
| --- | --- |
| Capture full screen | `Meta+Shift+1` |
| Capture region | `Meta+Shift+2` |
| Capture active window | `Meta+Shift+3` |
| OCR region (copy text) | `Meta+Shift+T` |
| Copy last capture | `Meta+Shift+C` |
| Open quick task chooser | `Meta+Shift+Space` |

The quick task chooser picks a capture or recording mode (full screen, region, window, GIF, video). For the screenshot modes it can also apply a one-off action to that single result — copy only, edit only, save only, or upload only — without touching your global after-capture settings; GIF and video runs use the normal recording flow.

These are editable in Settings -> Hotkeys - see [hotkeys](/docs/hotkeys).

You can also trigger a capture directly:

```sh
unisic --fullscreen
unisic --region
unisic --window
unisic --measure   # on-screen measure overlay
```

The capture flags accept modifiers: `--delay <seconds>` (0–60) waits before the shot, `--output <path>` saves to an explicit file (`-` streams the image to stdout), and `--format png|jpg|webp` picks the format for `--output`.

If Unisic is already running, a second invocation forwards the command to the running instance, which is how compositor-side keybinds drive captures.
