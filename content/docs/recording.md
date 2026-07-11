---
title: "Recording"
description: "Record a region, screen, or window as a GIF or MP4/WebM video."
order: 5
group: "Capturing & editing"
---

Unisic records your screen as an animated GIF or as MP4/WebM video, using the same region, full-screen, or window selection you use for screenshots. Recording is a separate feature from taking screenshots, with its own requirements and hotkeys.

## Formats

Unisic produces two kinds of recording:

- **GIF** — encoded with a two-pass palette: the first pass analyzes the frames to build an optimized color palette, and the second pass encodes against it.
- **MP4 / WebM** — standard video output.

## How recording works

Recordings run through a pipeline: the **ScreenCast portal** provides the stream, **PipeWire** carries it, and **ffmpeg** encodes the frames into the final GIF, MP4, or WebM file.

## What you can record

You can record any of three areas:

- a **region** you select,
- the **full screen**, or
- a single **window**.

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
| Record GIF (region) | `Meta+Shift+G` |
| Record video (region) | `Meta+Shift+R` |
| Stop recording (fixed) | `Ctrl+Esc` |

`Ctrl+Esc` is fixed and cannot be changed; the other two are editable. You can also start a GIF recording from the command line:

```sh
unisic --gif
```

For the full list of shortcuts and how to rebind them, see [Hotkeys](/docs/hotkeys). Output formats and file locations are managed with the rest of your settings — see [Configuration](/docs/configuration).
