---
title: "Configuration"
description: "File locations, filename tokens, watermarks, sound cues, the notification card, updates, the CLI, themes, and settings export."
order: 8
group: "Reference"
---

This page covers where Unisic stores its settings and data, the filename template tokens and export formats, watermarks, running a program after capture, sound cues, the notification card, updates, importing and exporting your full configuration as JSON, the command-line interface, appearance options, and the desktop file installed on first run.

## File locations

Unisic keeps configuration separate from generated data.

| What | Location |
| --- | --- |
| Settings and upload destinations | `~/.config/unisic/` |
| Capture history | `~/.local/share/unisic/` |

Your custom [upload destinations](/docs/upload-destinations) — the app's **Servers** page — are part of the settings stored under `~/.config/unisic/`.

## Filename templates and formats

Auto-save is on by default; you can instead be asked where to save each capture. Screenshots and recordings can save to separate directories, and metadata is stripped from saved images by default.

Saved captures are named from a filename template built out of tokens that are substituted at save time. The default template is `Unisic_%date%_%time%`.

| Token | Expands to |
| --- | --- |
| `%date%` | The capture date |
| `%time%` | The capture time |
| `%datetime%` | Combined date and time |
| `%unix%` | Unix timestamp |
| `%rand%` | A random component |

Images can be exported as PNG, JPG, or WebP.

With **date subfolders** enabled, saved screenshots and recordings are organized into per-month subfolders (`yyyy-MM`) under the save directory.

## Watermark

Stamp every screenshot with a text or logo-image watermark — position and opacity are adjustable in Settings.

## Run a program after capture

Hand every capture to a command of your choice, with `$input` standing for the capture file and `$output` for an optional result file — for example `oxipng -o 4 $input --out $output`. Commands are launched directly, without a shell.

## Export and import settings

Your entire configuration can be saved to, or restored from, a single JSON file — useful for backups or for moving your setup between machines.

```sh
unisic --export-settings <file>
unisic --import-settings <file>
```

## Command-line interface

Unisic exposes a small set of flags. The capture flags trigger a capture directly; the settings flags read or write your configuration as JSON.

```sh
unisic --fullscreen | --region | --window | --gif | --measure
unisic --export-settings <file> | --import-settings <file>
```

The `--fullscreen`, `--region`, `--window`, and `--measure` flags take modifiers (`--gif` does not): `--delay <seconds>` (0–60), `--output <path>` (`-` for stdout), and `--format png|jpg|webp`. `--tray-only` starts the app in the tray without raising the main window — meant for autostart entries.

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

Unisic's own interface speaks English, Polish, Spanish, and Italian — it follows the system locale, or pick a language in Settings.

## Sound cues

Capture and recording play optional sound cues: a shutter on capture, a cue when a recording starts, and another when encoding finishes. Each cue can be changed or turned off, and there is a global volume.

## The notification card

The card that pops up after a capture is configurable in **Settings -> Notifications**:

- **Actions** — every button on the card (edit, copy, link, QR, folder, upload, OCR, trim, delete) has a switch. Turning one off only hides it; buttons still appear only when the capture supports them.
- **Trim from the card** — a recording's card offers Trim directly, opening the same trim window History uses.
- **Position and distance** — the card's style, screen corner, and distance from the screen edge are adjustable, with a live preview of the real card while you pick.
- **Style and timing** — five card styles (casual, compact, small, minimal, thumbnail), an auto-hide duration (0 keeps the card open), and an option to mute the card over full-screen apps.

## Updates

The AppImage updates itself in the background from GitHub releases; repo installs update through your package manager. An **update channel** setting picks between stable releases and beta builds. Click the version label in the sidebar to read per-version release notes.

## First-run desktop file

On first run in a KDE session, Unisic installs `app.unisic.Unisic.desktop` into `~/.local/share/applications` (AppImage runs skip this — the AppImage mount path changes every run, so they capture through the portal instead). The desktop file declares:

```ini
X-KDE-DBUS-Restricted-Interfaces=org.kde.KWin.ScreenShot2
```

That declaration authorizes the silent KWin ScreenShot2 path on KDE Plasma. Without it, captures still work through the xdg-desktop-portal path — you just lose the fully silent native capture on Plasma.
