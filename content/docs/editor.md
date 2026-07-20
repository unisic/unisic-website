---
title: "The editor"
description: "The post-capture editor: fifteen tools, OCR text picking, stroke colors, zoom and undo."
order: 4
group: "Capturing & editing"
---

This page covers the post-capture editor: how it opens, its 15 tools, OCR text picking, the stroke colors, zoom and undo/redo, and the ways to send your finished image to the clipboard, disk, or an upload destination. For the frozen selection overlay and the annotate-before-the-shot workflow, see [Capture](/docs/capture).

## Opening the editor

The editor opens automatically after a [capture](/docs/capture). This is optional and can be turned off.

It also opens for files that never came from a capture: the **Edit** page in the main window (`Ctrl+4`) opens any image in the editor — and any video or GIF in the trim window — regardless of where the file came from.

`Ctrl+W` closes the editor (and the trim window).

Everything you do in the editor is composited in image-pixel space: annotations are placed against the image's own pixel grid rather than the screen, so zooming the view never moves your edits.

## Tools

The editor provides 15 tools, including:

| Tool | What it does |
| --- | --- |
| Blur | Blur out a region. |
| Highlight | Highlighter stroke. |
| Pixelate | Pixelate a region. |
| Smart eraser | Erase content from the image. |
| Numbered steps | Place sequential numbered markers. |
| Callout | A labeled pointer for annotations that need words. |
| Measure | Measure on-image distances. |
| Edit shapes | Select and rework annotations you already placed. |
| Crop | Trim the image to a region. |

## OCR: pick text out of the image

The editor's **More** menu reads text straight out of the capture:

- **Copy all text** — OCR the whole image and copy everything recognized.
- **Select text** — recognized words appear as selectable regions; select a subset, then copy it, make the highlight permanent, or **redact** it (an opaque black bar is painted over the selected words — never a blur, which can be recovered).

## Stroke colors

The editor offers seven stroke color swatches: Red, Yellow, Green, Blue, Lilac, White, and Navy.

## Zoom, undo, and redo

Zoom in and out with `Ctrl+scroll`. Because edits live in image-pixel space, zooming only changes your view - it does not affect where strokes and shapes land. Undo and redo let you step back and forth through your edits.

## Editor shortcuts

| Action | Shortcut |
| --- | --- |
| Save | `Ctrl+S` |
| Copy to clipboard | `Ctrl+C` |
| Copy and close | `Ctrl+Enter` |
| Upload | `Ctrl+U` |
| Paste an image onto the canvas | `Ctrl+V` |
| Undo / redo | `Ctrl+Z` / `Ctrl+Shift+Z` |
| Zoom in / out / reset | `Ctrl++` / `Ctrl+-` / `Ctrl+0` |
| Close the editor | `Ctrl+W` |

Tools also switch with single keys — `T` text, `P` pen, `L` line, `A` arrow, `R` rectangle, `E` ellipse, `B` blur, `H` highlight, `M` measure, `C` crop. With the Edit shapes tool, `Delete` removes the selected shape and the arrow keys nudge it (`Shift` for ×10).

## Output actions

When the image is ready, send it to any of the following:

- **Copy to clipboard** - puts the composited image on the clipboard, ready to paste.
- **Save to disk** - writes the file using the configured filename template and format (PNG, JPG, or WebP). See [Configuration](/docs/configuration).
- **Upload** - pushes the result to a custom or built-in destination and auto-copies the resulting link. See [Upload destinations](/docs/upload-destinations).
