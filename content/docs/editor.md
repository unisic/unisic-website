---
title: "The editor"
seoTitle: "Annotate and edit screenshots on Linux"
description: "The post-capture editor: drawing tools, OCR text picking, stroke colors, zoom and undo."
order: 4
group: "Capturing & editing"
---

To annotate on the frozen overlay before the shot, see [Capture](/docs/capture).

## Opening the editor

The editor opens automatically after a [capture](/docs/capture). You can turn this off.

The **Edit** page in the main window (`Ctrl+4`) opens any image in the editor, whatever its source. Videos and GIFs open in the trim window.

`Ctrl+W` closes the editor (and the trim window).

The editor works in image-pixel space: annotations sit on the image's own pixel grid, not the screen. Zooming the view never moves your edits.

## Tools

The tools include:

| Tool | What it does |
| --- | --- |
| Blur | Blur out a region. |
| Highlight | Highlighter stroke. |
| Pixelate | Pixelate a region. |
| Smart eraser | Erase content from the image. |
| Numbered steps | Place sequential numbered markers. |
| Callout | A speech bubble that holds its own text. Click where it should point (or drag a bubble out) and type in place. The bubble grows around the text as you type. Double-click it with Edit shapes to change the text later. The text moves, resizes and rotates with the bubble. |
| Measure | Measure on-image distances. |
| Magnifier | A loupe: an enlarged copy of a source region, drawn into the image. |
| Eyedropper | Click a pixel to use its color as the stroke color. |
| Edit shapes | Select and rework annotations you already placed. |
| Crop | Trim the image to a region. |

## OCR: pick text out of the image

The **More** menu reads text out of the capture:

- **Copy all text**: OCR the whole image and copy all recognized text.
- **Select text**: recognized words become selectable regions. Select some, then copy them, make the highlight permanent, or **redact** them. Redact paints an opaque black bar over the words, never a blur, which can be recovered.

## Stroke colors

Seven stroke color swatches: Red, Yellow, Green, Blue, Lilac, White and Navy.

## Zoom, undo, and redo

Zoom with `Ctrl+scroll`. Zooming changes only the view, not where strokes and shapes land. Undo and redo step back and forth through your edits.

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

Single keys switch tools: `T` text, `P` pen, `L` line, `A` arrow, `R` rectangle, `E` ellipse, `B` blur, `H` highlight, `M` measure, `C` crop. With Edit shapes, `Delete` removes the selected shape and the arrow keys nudge it (`Shift` for ×10).

## Output actions

Send the finished image to:

- **Copy to clipboard**: puts the composited image on the clipboard.
- **Save to disk**: writes the file with the configured filename template and format (PNG, JPG or WebP). See [Configuration](/docs/configuration).
- **Upload**: sends the result to a custom or built-in destination and copies the link automatically. See [Upload destinations](/docs/upload-destinations).
