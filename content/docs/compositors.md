---
title: "Compositor support"
description: "How capture and hotkeys behave on Plasma, GNOME, and wlroots."
order: 9
group: "Reference"
---

Unisic captures on legitimate Wayland APIs only, and the exact path depends on your compositor. This page covers per-compositor behavior on KDE Plasma, on GNOME and other portal-based desktops, and on niri and other wlroots compositors.

## KDE Plasma

On KDE Plasma, Unisic takes the fully silent native path. Screenshots go through KWin ScreenShot2 and hotkeys through KGlobalAccel, so nothing interrupts the flow between pressing the hotkey and the capture: there are no portal permission dialogs.

The silent KWin path is authorized by a desktop file. On first run, Unisic installs `app.unisic.Unisic.desktop` into `~/.local/share/applications`; it declares `X-KDE-DBUS-Restricted-Interfaces=org.kde.KWin.ScreenShot2`, which authorizes the silent KWin path. Without it, captures still work through the portal.

Hotkeys are editable in Settings -> Hotkeys (applied to the system immediately) or in KDE's Shortcuts KCM. See [Hotkeys](/docs/hotkeys).

## GNOME and other desktops

On GNOME and other desktops, capture flows through `xdg-desktop-portal`. The portal presents its permission prompts and hands the frames to Unisic.

This path requires a Wayland session with `xdg-desktop-portal` and a backend. Recording additionally needs PipeWire and `ffmpeg`: video and GIF go through the ScreenCast portal, then PipeWire, then ffmpeg. See [Installation](/docs/installation) for the requirements.

## niri and other wlroots compositors

### Screenshots

Install `grim`. niri's screenshot D-Bus API (which the GNOME portal proxies) fails with `internal error` on multi-monitor setups ([niri #117](https://github.com/niri-wm/niri/issues/117)). Unisic detects niri and captures through wlr-screencopy via `grim` — silent and multi-monitor-safe.

### Hotkeys

There is no KGlobalAccel or GlobalShortcuts portal on these compositors, so bind the keys in your compositor config. A running Unisic instance picks the command up: a second invocation forwards the command to the running instance, which is how compositor-side keybinds work. In niri, add binds to `config.kdl`:

```kdl
binds {
    Mod+Shift+S { spawn "unisic" "--region"; }
    Print { spawn "unisic" "--fullscreen"; }
}
```

See [Hotkeys](/docs/hotkeys) for the default shortcut set and [Installation](/docs/installation) for setup.
