---
title: "Recording"
seoTitle: "Record your screen on Linux as GIF or MP4"
description: "Record a region, screen, or window as a GIF or MP4/WebM video, with audio, instant replay, and trimming."
order: 5
group: "Capturing & editing"
---

Recording uses the same region, full-screen and window selection as screenshots, but has its own requirements and hotkeys.

## Formats

- **GIF**: encoded with a two-pass palette. The first pass builds an optimized color palette from the frames, the second encodes against it.
- **MP4 / WebM**: video with optional **system audio** and **microphone** tracks, both off by default. It can instead record a **single application**, alone or mixed with the microphone.

An optional countdown delays the start.

## How recording works

The **ScreenCast portal** provides the stream, **PipeWire** carries it, and **ffmpeg** encodes the frames to GIF, MP4 or WebM. Encoding is software by default. The recording settings offer VAAPI / NVENC hardware encoding.

## What you can record

- a **region** you select
- the **full screen**
- a single **window**

On Plasma, press `W` in the region selector to select the active window. Unisic asks KWin where that window is and selects exactly its rectangle. Nudge, resize or confirm it, for a recording, a screenshot or a text read.

It selects the area, not the window, so the frame stays where it started. Move the window afterwards and it leaves the shot. Anything pulled over that area (a menu, a dialog) is recorded too. This needs KWin, because no other compositor tells an application where another window is. Elsewhere the `W` hint does not appear.

## Instant replay

Instant replay records into a rolling buffer instead of a file. Press **Save replay** (or `Meta+Shift+I`) to write out the last 30 seconds. Change the length on the Record page.

## Trimming a recording

The trim window cuts the start and end off a finished recording. It does not open on its own: open it from the History page, the notification card a recording pops up, or the Edit page.

Trim window keys:

- `Space`: play and pause
- `I` / `O`: mark the in and out points at the playhead
- `Left` / `Right`: scrub one second (`Shift` for 5)
- `Home` / `End`: jump to the start or end
- `Ctrl+W`: close the window

Trimming always writes a new file next to the original.

## Stopping a recording

`Ctrl+Esc` is a fixed emergency stop: it always ends the current recording. Unlike the other recording shortcuts, it cannot be rebound.

## Requirements

Every Unisic package includes ffmpeg and the PipeWire command-line tools. On Wayland, recording uses the session's running PipeWire and ScreenCast portal services. On X11, it captures frames through XShm and uses the same packaged encoder. A source build without the PipeWire development library fails at configure time instead of disabling recording.

See [Installation](/docs/installation) for the full source-build package list.

## Hotkeys

| Action | Shortcut |
| --- | --- |
| Record GIF (start/stop) | `Meta+Shift+G` |
| Record video (start/stop) | `Meta+Shift+R` |
| Start/save instant replay | `Meta+Shift+I` |
| Stop recording (fixed) | `Ctrl+Esc` |

Start a GIF recording from the command line:

```sh
unisic --gif
```

See [Hotkeys](/docs/hotkeys) for all shortcuts and how to rebind them, and [Configuration](/docs/configuration) for output formats and file locations.
