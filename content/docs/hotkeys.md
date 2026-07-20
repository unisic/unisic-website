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
| Record GIF (region) | `Meta+Shift+G` |
| Record video (region) | `Meta+Shift+R` |
| Stop recording (fixed) | `Ctrl+Esc` |

For what each capture action does, see [Capture](/docs/capture); for the recording shortcuts, see [Recording](/docs/recording).

## Editing hotkeys

Every shortcut except the fixed stop key is editable. Change them in **Settings -> Hotkeys** - new bindings are applied to the system immediately - or in KDE's Shortcuts KCM.

## The fixed stop key

`Ctrl+Esc` is a fixed emergency stop for recording. It cannot be reassigned, so you always have a reliable way to end a GIF or video capture.

## niri and other wlroots compositors

On niri and other wlroots compositors there is no KGlobalAccel / GlobalShortcuts portal, so Unisic cannot register global shortcuts itself. Bind keys in your compositor config instead: a running Unisic instance picks the command up when a second invocation forwards it to the running process.

Each capture entry point has a CLI flag you can spawn from a binding:

```sh
unisic --fullscreen | --region | --window | --gif
```

In niri's `config.kdl`:

```kdl
binds {
    Mod+Shift+S { spawn "unisic" "--region"; }
    Print { spawn "unisic" "--fullscreen"; }
}
```

See [Compositors](/docs/compositors) for the full per-compositor setup.
