---
title: "Compositor support"
seoTitle: "Wayland screenshot support: KDE, GNOME, wlroots"
description: "How capture and hotkeys behave on Plasma, GNOME, and wlroots."
order: 9
group: "Reference"
---

Unisic captures through legitimate Wayland APIs only. The path depends on your compositor.

## KDE Plasma

Unisic takes the silent native path: screenshots go through KWin ScreenShot2, hotkeys through KGlobalAccel. No portal permission dialog appears between the hotkey and the capture.

A desktop file authorizes the silent KWin path. On first run in a KDE session, Unisic installs `app.unisic.Unisic.desktop` into `~/.local/share/applications`. The file declares `X-KDE-DBUS-Restricted-Interfaces=org.kde.KWin.ScreenShot2`. AppImage runs skip this step. Without the file, captures still work through the portal.

Edit hotkeys in Settings -> Hotkeys (applied to the system immediately) or in KDE's Shortcuts KCM. See [Hotkeys](/docs/hotkeys).

## GNOME and other desktops

Capture goes through `xdg-desktop-portal`. The portal shows its permission prompts and hands the frames to Unisic.

Native packages hard-require `xdg-desktop-portal`, one desktop-specific backend, PipeWire and ffmpeg. Portable bundles carry ffmpeg and use the session's running portal and PipeWire services. Video and GIF go through the ScreenCast portal, then PipeWire, then ffmpeg.

Everything core works on GNOME. Mutter exposes less to applications than other compositors, so a few features degrade. This is a Mutter limit, not a choice. There is no layer-shell, so the record-region frame falls back to a helper window. The tray needs the AppIndicator extension. Hotkeys route through the portal. No API reports window state to apps.

## niri and other wlroots compositors

On wlroots compositors (Sway, Hyprland, river, Wayfire, labwc, niri and others), Unisic is nearly complete. Layer-shell surfaces work as on Plasma.

### Screenshots

Unisic packages include `grim`. niri's screenshot D-Bus API, which the GNOME portal proxies, fails with `internal error` on multi-monitor setups ([niri #117](https://github.com/niri-wm/niri/issues/117)). Unisic detects niri and captures through wlr-screencopy via `grim`, which is silent and multi-monitor-safe.

### Hotkeys

These compositors have no KGlobalAccel or GlobalShortcuts portal, so bind the keys in your compositor config. A second invocation forwards the command to the running Unisic instance, which is how compositor keybinds work. In niri, add binds to `config.kdl`:

```kdl
binds {
    Mod+Shift+S { spawn "unisic" "--region"; }
    Print { spawn "unisic" "--fullscreen"; }
}
```

See [Hotkeys](/docs/hotkeys) for the default shortcut set and [Installation](/docs/installation) for setup.
