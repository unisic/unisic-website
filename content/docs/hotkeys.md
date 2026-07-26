---
title: "Keyboard shortcuts"
description: "The default global shortcuts and how to change them."
order: 7
group: "Reference"
---

## Default hotkeys

Unisic maps its capture and recording actions to global keyboard shortcuts. This page lists the defaults, explains how to change them, and covers how to bind keys on compositors that lack a global-shortcuts portal.

Unisic ships with the following default keyboard shortcuts:

| Action | Shortcut |
| --- | --- |
| Capture full screen | `Meta+Shift+1` |
| Capture region | `Meta+Shift+2` |
| Capture active window | `Meta+Shift+3` |
| Record GIF (start/stop) | `Meta+Shift+G` |
| Record video (start/stop) | `Meta+Shift+R` |
| OCR region (copy text) | `Meta+Shift+T` |
| Copy last capture | `Meta+Shift+C` |
| Open quick task chooser | `Meta+Shift+Space` |
| Start/save instant replay | `Meta+Shift+I` |
| Stop recording (fixed) | `Ctrl+Esc` |

For what each capture action does, see [Capture](/docs/capture); for the recording shortcuts, see [Recording](/docs/recording).

## In the main window

The main window has its own shortcuts, listed in-app under `Ctrl+/`:

| Action | Shortcut |
| --- | --- |
| Show / hide the shortcut list | `Ctrl+/` |
| Jump to a page | `Ctrl+1` … `Ctrl+7` |
| Open Settings | `Ctrl+,` |
| Hide the window to the tray | `Ctrl+W` |
| Quit Unisic | `Ctrl+Q` |

`Ctrl+W` also closes the editor and the trim window.

## Editing hotkeys

Every shortcut except the fixed stop key is editable. Change them in **Settings -> Hotkeys** — new bindings are applied to the system immediately — or in KDE's Shortcuts KCM. Every action can carry a second, alternative binding.

Screenshot hotkeys can also carry their own task preset — after-capture actions and an upload destination for just that key — so different keys route captures differently.

## The fixed stop key

> [!TIP]
> `Ctrl+Esc` is a fixed emergency stop for recording. It cannot be reassigned, so you always have a reliable way to end a GIF or video capture.

## niri and other wlroots compositors

On niri and other wlroots compositors there is no KGlobalAccel / GlobalShortcuts portal, so Unisic cannot register global shortcuts itself. Bind keys in your compositor config instead: a running Unisic instance picks the command up when a second invocation forwards it to the running process.

Each capture entry point has a CLI flag you can spawn from a binding:

```sh
unisic --fullscreen | --region | --window | --gif | --measure
```

In niri's `config.kdl`:

```kdl
binds {
    Mod+Shift+S { spawn "unisic" "--region"; }
    Print { spawn "unisic" "--fullscreen"; }
}
```

See [Compositors](/docs/compositors) for the full per-compositor setup.
