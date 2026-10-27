---
title: "Keyboard shortcuts"
seoTitle: "Screenshot keyboard shortcuts on Linux"
description: "The default global shortcuts for capture, recording and instant replay, how to rebind them, and what to do when your desktop already owns the key."
order: 7
group: "Reference"
---

## Default hotkeys

| Action | Shortcut |
| --- | --- |
| Capture full screen | `Meta+Shift+1` |
| Capture region | `Meta+Shift+2` |
| Capture active window | `Meta+Shift+3` |
| Record GIF (start/stop) | `Meta+Shift+G` |
| Record video (start/stop) | `Meta+Shift+R` |
| OCR region (copy text) | `Meta+Shift+T` |
| Copy last capture | `Meta+Shift+C` |
| Start/save instant replay | `Meta+Shift+I` |
| Stop recording (fixed) | `Ctrl+Esc` |

See [Capture](/docs/capture) for what each capture action does and [Recording](/docs/recording) for the recording shortcuts.

### Windows (experimental)

Windows reserves `Win+Shift` with digits and most letters, so the [experimental Windows build](/docs/installation#windows-experimental) puts its defaults on Print Screen:

| Action | Shortcut |
| --- | --- |
| Capture full screen | `Ctrl+Shift+Print` |
| Capture region | `Print` or `Ctrl+Print` |
| Capture active window | `Alt+Print` |
| Record GIF (start/stop) | `Win+Shift+G` |
| Record video (start/stop) | `Shift+Print` |
| OCR region (copy text) | `Win+Shift+O` |
| Stop recording (fixed) | `Ctrl+Alt+Esc` (`Ctrl+Esc` is the Start menu) |

A bare `Print` opens the Snipping Tool until you turn off Settings > Accessibility > Keyboard > "Use the Print screen key to open screen capture". `Ctrl+Print` works either way.

## In the main window

The main window has its own shortcuts:

| Action | Shortcut |
| --- | --- |
| Show / hide the shortcut list | `Ctrl+/` |
| Jump to a page | `Ctrl+1` ... `Ctrl+7` |
| Open Settings | `Ctrl+,` |
| Hide the window to the tray | `Ctrl+W` |
| Quit Unisic | `Ctrl+Q` |

`Ctrl+W` also closes the editor and the trim window.

## Editing hotkeys

Every shortcut except the fixed stop key is editable. Change them in **Settings -> Hotkeys**, which applies new bindings to the system immediately, or in KDE's Shortcuts KCM. Each action can have a second, alternative binding.

A screenshot hotkey can have its own task preset (after-capture actions and an upload destination), so different keys route captures differently.

## The fixed stop key

> [!TIP]
> `Ctrl+Esc` is the emergency stop for GIF and video recording. It cannot be reassigned, so it is always available.

## niri and other wlroots compositors

niri and other wlroots compositors have no KGlobalAccel / GlobalShortcuts portal, so Unisic cannot register global shortcuts itself. Bind keys in your compositor config instead. A second invocation forwards the command to the running Unisic instance.

Each capture entry point has a CLI flag to spawn from a binding:

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
