---
title: "Recording"
description: "Record a region, screen, or window as a GIF or MP4/WebM video, with audio, instant replay, and trimming."
order: 5
group: "Capturing & editing"
---

Unisic records your screen as an animated GIF or as MP4/WebM video, using the same region, full-screen, or window selection you use for screenshots. Recording is a separate feature from taking screenshots, with its own requirements and hotkeys.

## Formats

Unisic produces two kinds of recording:

- **GIF** — encoded with a two-pass palette: the first pass analyzes the frames to build an optimized color palette, and the second pass encodes against it.
- **MP4 / WebM** — standard video output, with optional **system audio** and **microphone** tracks (both off by default) — or the sound of a **single application**, alone or mixed with the microphone.

An optional countdown delays the start of a recording.

## How recording works

Recordings run through a pipeline: the **ScreenCast portal** provides the stream, **PipeWire** carries it, and **ffmpeg** encodes the frames into the final GIF, MP4, or WebM file. Encoding is software by default, with a VAAPI / NVENC hardware option in the recording settings.

## What you can record

You can record any of three areas:

- a **region** you select,
- the **full screen**, or
- a single **window**.

## Instant replay

Instant replay records into a rolling buffer instead of a file: start it, forget it, and when something worth keeping happens press **Save replay** (or `Meta+Shift+I`) to write out the last stretch — 30 seconds by default, configurable on the Record page.

## Trimming a recording

Finished recordings open in a trim window to cut the start and end off. You can trim from the History page or directly from the notification card a recording pops up.

In the trim window: `Space` plays and pauses, `I` and `O` mark the in and out points at the playhead, `Left`/`Right` scrub one second (`Shift` for 5), `Home`/`End` jump to the ends, and `Ctrl+W` closes the window. Trimming always writes a new file next to the original.

## Stopping a recording

`Ctrl+Esc` is a fixed emergency stop. It always ends the current recording and, unlike the other recording shortcuts, cannot be rebound.

## Requirements

Recording needs more than a normal screenshot. The baseline Unisic requirement is a Wayland session with `xdg-desktop-portal` and a backend; recording additionally needs:

- **PipeWire**
- **ffmpeg**

If Unisic is built from source without the PipeWire development packages, it builds with recording disabled. See [Installation](/docs/installation) for packages that ship with recording enabled.

## Hotkeys

| Action | Shortcut |
| --- | --- |
| Record GIF (start/stop) | `Meta+Shift+G` |
| Record video (start/stop) | `Meta+Shift+R` |
| Start/save instant replay | `Meta+Shift+I` |
| Stop recording (fixed) | `Ctrl+Esc` |

`Ctrl+Esc` is fixed and cannot be changed; the others are editable. You can also start a GIF recording from the command line:

```sh
unisic --gif
```

For the full list of shortcuts and how to rebind them, see [Hotkeys](/docs/hotkeys). Output formats and file locations are managed with the rest of your settings — see [Configuration](/docs/configuration).
