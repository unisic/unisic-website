---
title: "Recording"
seoTitle: "Record your screen on Linux as GIF or MP4"
description: "Record a region, screen, or window as a GIF or MP4/WebM video, with audio, instant replay, and trimming."
order: 5
group: "Capturing & editing"
---

Unisic records your screen as an animated GIF or as MP4/WebM video, using the same region, full-screen, or window selection you use for screenshots. Recording is a separate feature from taking screenshots, with its own requirements and hotkeys.

## Formats

Unisic produces two kinds of recording:

- **GIF** - encoded with a two-pass palette: the first pass analyzes the frames to build an optimized color palette, and the second pass encodes against it.
- **MP4 / WebM** - standard video output, with optional **system audio** and **microphone** tracks (both off by default) - or the sound of a **single application**, alone or mixed with the microphone.

An optional countdown delays the start of a recording.

## How recording works

Recordings run through a pipeline: the **ScreenCast portal** provides the stream, **PipeWire** carries it, and **ffmpeg** encodes the frames into the final GIF, MP4, or WebM file. Encoding is software by default, with a VAAPI / NVENC hardware option in the recording settings.

## What you can record

You can record any of three areas:

- a **region** you select,
- the **full screen**, or
- a single **window**.

On Plasma the active window's area is one key away while you select: press `W` in the region selector and Unisic asks KWin where the window you were working in is, then selects exactly that rectangle - ready to nudge, resize or simply confirm, for a recording as much as for a screenshot or a text read. It selects the area rather than the window, so the frame stays where it started: move the window afterwards and it leaves the shot, and anything pulled over that area (a menu, a dialog) is recorded too. This needs KWin, because no other compositor tells an application where another window is; elsewhere the `W` hint does not appear at all.

## Instant replay

Instant replay records into a rolling buffer instead of a file: start it, forget it, and when something worth keeping happens press **Save replay** (or `Meta+Shift+I`) to write out the last stretch - 30 seconds by default, configurable on the Record page.

## Trimming a recording

Finished recordings open in a trim window to cut the start and end off. You can trim from the History page or directly from the notification card a recording pops up.

In the trim window: `Space` plays and pauses, `I` and `O` mark the in and out points at the playhead, `Left`/`Right` scrub one second (`Shift` for 5), `Home`/`End` jump to the ends, and `Ctrl+W` closes the window. Trimming always writes a new file next to the original.

## Stopping a recording

`Ctrl+Esc` is a fixed emergency stop. It always ends the current recording and, unlike the other recording shortcuts, cannot be rebound.

## Requirements

Every Unisic package includes ffmpeg and the PipeWire command-line tools. On Wayland, recording uses the session's running PipeWire and ScreenCast portal services; on X11, it captures frames through XShm and uses the same packaged encoder. A source build without the PipeWire development library fails at configure time rather than disabling recording.

See [Installation](/docs/installation) for the complete source-build package list.

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

For the full list of shortcuts and how to rebind them, see [Hotkeys](/docs/hotkeys). Output formats and file locations are managed with the rest of your settings - see [Configuration](/docs/configuration).
