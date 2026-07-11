---
title: "The editor"
description: "The post-capture editor: twelve tools, stroke colors, zoom and undo."
order: 4
group: "Capturing & editing"
---

This page covers the post-capture editor: how it opens, its 12 tools, the stroke colors, zoom and undo/redo, and the ways to send your finished image to the clipboard, disk, or an upload destination. For the frozen selection overlay and the annotate-before-the-shot workflow, see [Capture](/docs/capture).

## Opening the editor

The editor opens automatically after a [capture](/docs/capture). This is optional and can be turned off.

Everything you do in the editor is composited in image-pixel space: annotations are placed against the image's own pixel grid rather than the screen, so zooming the view never moves your edits.

## Tools

The editor provides 12 tools, including:

| Tool | What it does |
| --- | --- |
| Blur | Blur out a region. |
| Highlight | Highlighter stroke. |
| Pixelate | Pixelate a region. |
| Smart eraser | Erase content from the image. |
| Numbered steps | Place sequential numbered markers. |
| Crop | Trim the image to a region. |

Need a transparent cut-out instead of a full frame? The *Pick object* tool segments the subject inside your selection and removes the background, exporting as a transparent PNG or WebP. See [Capture](/docs/capture) for object cutout.

## Stroke colors

The editor offers seven stroke color swatches: Red, Yellow, Green, Blue, Lilac, White, and Navy.

## Zoom, undo, and redo

Zoom in and out with `Ctrl+scroll`. Because edits live in image-pixel space, zooming only changes your view — it does not affect where strokes and shapes land. Undo and redo let you step back and forth through your edits.

## Output actions

When the image is ready, send it to any of the following:

- **Copy to clipboard** — puts the composited image on the clipboard, ready to paste.
- **Save to disk** — writes the file using the configured filename template and format (PNG, JPG, or WebP). See [Configuration](/docs/configuration).
- **Upload** — pushes the result to a custom or built-in destination and auto-copies the resulting link. See [Upload destinations](/docs/upload-destinations).
