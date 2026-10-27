---
title: "Configuration"
seoTitle: "Configure Unisic: paths, filenames, watermarks"
description: "File locations, filename tokens, watermarks, sound cues, the notification card, updates, the CLI, themes, and settings export."
order: 8
group: "Reference"
---

## File locations

| What | Location |
| --- | --- |
| Settings and upload destinations | `~/.config/unisic/` |
| Capture history | `~/.local/share/unisic/` |

Custom [upload destinations](/docs/upload-destinations) (the **Servers** page) are stored with the settings in `~/.config/unisic/`.

## Filename templates and formats

Auto-save is on by default. Unisic can instead ask where to save each capture. Screenshots and recordings can save to separate directories. Metadata is stripped from saved images by default.

Saved captures are named from a filename template. Its tokens are substituted at save time. The default template is `Unisic_%date%_%time%`.

| Token | Expands to |
| --- | --- |
| `%date%` | Capture date |
| `%time%` | Capture time |
| `%datetime%` | Date and time |
| `%unix%` | Unix timestamp |
| `%rand%` | Random component |

Images can be exported as PNG, JPG or WebP.

With **date subfolders** enabled, screenshots and recordings are saved into per-month subfolders (`yyyy-MM`) of the save directory.

## Watermark

Stamp every screenshot with a text or logo-image watermark. Position and opacity are adjustable in Settings.

## Run a program after capture

Unisic can pass every capture to a command you choose. In the command, `$input` is the capture file and `$output` an optional result file. Example: `oxipng -o 4 $input --out $output`. Commands run directly, without a shell.

## Export and import settings

Save your entire configuration to a single JSON file, or restore it from one. Use this for backups or to move your setup between machines.

```sh
unisic --export-settings <file>
unisic --import-settings <file>
```

## Command-line interface

The capture flags trigger a capture directly. The settings flags read or write your configuration as JSON.

```sh
unisic --fullscreen | --region | --window | --gif | --measure
unisic --export-settings <file> | --import-settings <file>
```

The `--fullscreen`, `--region`, `--window` and `--measure` flags take modifiers; `--gif` does not. The modifiers are `--delay <seconds>` (0-60), `--output <path>` (`-` for stdout) and `--format png|jpg|webp`. `--tray-only` starts the app in the tray without raising the main window, for autostart entries.

Running `unisic` with no arguments starts it in the background with the tray icon and main window. A second invocation does not start another copy. It forwards the command to the running instance. Compositor keybinds rely on this: the keybind runs `unisic --region` (or another flag) and the running instance carries it out. See [Compositors](/docs/compositors) for binding these commands in compositors without a global-shortcuts portal.

## Appearance

Unisic ships with these themes:

- Unisic
- Dark
- Light
- Catppuccin Mocha
- Catppuccin Latte
- Dracula
- Nord
- Gruvbox
- System

System follows the desktop's light/dark scheme and accent color. Icons are themable per tool.

The interface is available in English, Polish, Spanish, Italian, French, Russian and German. It follows the system locale, or you can pick a language in Settings.

## Sound cues

Capture and recording play optional sound cues: a shutter on capture, a cue when a recording starts, and one when encoding finishes. Each cue can be changed or turned off. There is also a global volume.

## The notification card

Configure the card shown after a capture in **Settings -> Notifications**:

- **Actions**: each button on the card (edit, copy, link, QR, folder, upload, OCR, trim, delete) has a switch. Turning one off only hides it. Buttons still appear only when the capture supports them.
- **Trim from the card**: a recording's card offers Trim, which opens the same trim window as History.
- **Position and distance**: set the card's style, screen corner and distance from the screen edge, with a live preview of the real card.
- **Style and timing**: five card styles (casual, compact, small, minimal, thumbnail), an auto-hide duration (0 keeps the card open), and an option to mute the card over full-screen apps.

## Updates

The AppImage updates itself in the background from GitHub releases. Repo installs update through your package manager. The **update channel** setting picks stable releases or beta builds. Click the version label in the sidebar to read per-version release notes.

## First-run desktop file

On first run in a KDE session, Unisic installs `app.unisic.Unisic.desktop` into `~/.local/share/applications`. AppImage runs skip this because the AppImage mount path changes every run; they capture through the portal instead. The desktop file declares:

```ini
X-KDE-DBUS-Restricted-Interfaces=org.kde.KWin.ScreenShot2
```

This declaration authorizes the silent KWin ScreenShot2 path on KDE Plasma. Without it, captures still work through the xdg-desktop-portal path, without the fully silent native capture.
