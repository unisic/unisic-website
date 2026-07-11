---
title: "Capturing"
description: "The three capture modes, annotating before the shot, and object cutout."
order: 3
group: "Capturing & editing"
---

This page covers Unisic's capture workflow: the three capture modes, drawing annotations on the frozen overlay before the shot is taken, cutting a subject out of its background, and the capture options and backends involved.

## Capture modes

Unisic offers three ways to grab pixels. Each is available from a hotkey or from the command line.

### Full screen

Captures everything at once, with all monitors stitched into a single image. Use this when you want the entire desktop in one shot regardless of how many displays you have.

### Region

Opens a frozen, per-monitor overlay so you can drag out exactly the rectangle you want. The selection shows live dimensions as you resize it, and because the overlay is frozen you can line up moving content without it shifting under you. Press `Enter` or double-click inside the selection to capture, or `Esc` to cancel.

### Active window

Captures the currently focused window on its own, without you having to trace its bounds by hand.

## Annotate before the shot

Unisic lets you draw on the frozen overlay *before* the capture is taken, so the marks are part of the shot rather than a separate editing pass. The available tools are pen, arrow, shapes, text, blur, and steps. Anything you draw inside the selection is burnt into the final crop.

As with a plain region capture, `Enter` or a double-click captures the annotated selection and `Esc` cancels. For the full tool set and post-capture editing, the editor opens afterwards — see [the editor](/docs/editor).

## Object cutout

The *Pick object* tool segments the subject inside your selection and removes the background. Instead of a rectangular crop, the export lands as a transparent PNG or WebP, ready to drop onto another background or into a document.

## Capture delay and cursor

Two capture options are configurable:

- **Delay** — set a timer before the shot fires, useful for opening menus or hovering states that would otherwise close.
- **Cursor** — optionally include the mouse cursor in the captured image.

## How the pixels are captured

Unisic grabs the screen through legitimate Wayland APIs only and picks the right path for your compositor automatically:

- **KDE Plasma** — the fully silent native KWin ScreenShot2 path.
- **Other desktops** — the `xdg-desktop-portal` route, through your installed portal backend.
- **wlroots compositors** — capture via wlr-screencopy using `grim` (install `grim`).

On first run, Unisic installs `app.unisic.Unisic.desktop` into `~/.local/share/applications`, declaring `X-KDE-DBUS-Restricted-Interfaces=org.kde.KWin.ScreenShot2` to authorize the silent KWin path. Without it, captures still work through the portal.

See [compositor support](/docs/compositors) for the details of each path and per-compositor notes.

## Hotkeys and the command line

The default capture hotkeys are:

| Action | Shortcut |
| --- | --- |
| Capture full screen | `Meta+Shift+1` |
| Capture region | `Meta+Shift+2` |
| Capture active window | `Meta+Shift+3` |

These are editable in Settings -> Hotkeys — see [hotkeys](/docs/hotkeys).

You can also trigger a capture directly:

```sh
unisic --fullscreen
unisic --region
unisic --window
```

If Unisic is already running, a second invocation forwards the command to the running instance, which is how compositor-side keybinds drive captures.
