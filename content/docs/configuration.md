---
title: "Configuration"
description: "File locations, filename tokens, the CLI, themes, and settings export."
order: 8
group: "Reference"
---

This page covers where Unisic stores its settings and data, the filename template tokens and export formats, importing and exporting your full configuration as JSON, the command-line interface, appearance options, and the desktop file installed on first run.

## File locations

Unisic keeps configuration separate from generated data.

| What | Location |
| --- | --- |
| Settings and upload destinations | `~/.config/unisic/` |
| Capture history | `~/.local/share/unisic/` |

Your custom [upload destinations](/docs/upload-destinations) are part of the settings stored under `~/.config/unisic/`.

## Filename templates and formats

Saved captures are named from a filename template built out of tokens that are substituted at save time.

| Token | Expands to |
| --- | --- |
| `%date%` | The capture date |
| `%time%` | The capture time |
| `%datetime%` | Combined date and time |
| `%unix%` | Unix timestamp |
| `%rand%` | A random component |

Images can be exported as PNG, JPG, or WebP. Object cutouts made with the *Pick object* tool export as transparent PNG or WebP.

## Export and import settings

Your entire configuration can be saved to, or restored from, a single JSON file — useful for backups or for moving your setup between machines.

```sh
unisic --export-settings <file>
unisic --import-settings <file>
```

## Command-line interface

Unisic exposes a small set of flags. The capture flags trigger a capture directly; the settings flags read or write your configuration as JSON.

```sh
unisic --fullscreen | --region | --window | --gif
unisic --export-settings <file> | --import-settings <file>
```

Running `unisic` with no arguments starts it in the background with the tray icon and main window. A second invocation does not launch another copy — it forwards the command to the already-running instance. This is how compositor-side keybinds work: your keybind runs `unisic --region` (or another flag), and the running instance carries out the command. See [Compositors](/docs/compositors) for binding these commands in compositors without a global-shortcuts portal.

## Appearance

Unisic ships with 9 themes:

- Unisic
- Dark
- Light
- Catppuccin Mocha
- Catppuccin Latte
- Dracula
- Nord
- Gruvbox
- System

The System option follows the desktop's light/dark scheme and accent color, so Unisic matches the rest of your session automatically. Icons are themable per tool.

## First-run desktop file

On first run, Unisic installs `app.unisic.Unisic.desktop` into `~/.local/share/applications`. This desktop file declares:

```ini
X-KDE-DBUS-Restricted-Interfaces=org.kde.KWin.ScreenShot2
```

That declaration authorizes the silent KWin ScreenShot2 path on KDE Plasma. Without it, captures still work through the xdg-desktop-portal path — you just lose the fully silent native capture on Plasma.
