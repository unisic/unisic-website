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

The **Edit** page in the main window (`Ctrl+3`) opens any image in the editor, whatever its source. Videos and GIFs open in the trim window.

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
| Spotlight | Darkens everything outside a rectangle or an ellipse, so the eye lands on that spot. Several spotlights share one dim, and other annotations stay on top. |
| Eyedropper | Click a pixel to use its color as the stroke color. |
| Edit shapes | Select and rework annotations you already placed. |
| Crop | Trim the image to a region. |
| Cut out | Drag across a band to remove it and join the two sides: wider than tall removes columns, taller than wide removes rows. |
| Sticker | Stamp a mouse pointer or an emoji: click to place it (the pointer's tip lands on the click) or drag to size it. **Picture from a file** places any image from disk. A placed sticker moves, resizes and rotates like a pasted image. |

## OCR: pick text out of the image

The **More** menu reads text out of the capture:

- **Copy all text**: OCR the whole image and copy all recognized text.
- **Select text**: recognized words become selectable regions. Select some, then copy them, make the highlight permanent, or **redact** them. Redact paints an opaque black bar over the words, never a blur, which can be recovered.

## Remove background

**Remove background** in the **More** menu cuts the subject out and makes everything else transparent. It runs on your computer and nothing is uploaded. Soft edges such as hair keep the subject's own colour. One run takes a few seconds and about 2 GB of memory. The first use needs a one-time download in **Settings → Editor → Background removal** (see [Dependencies](/docs/dependencies#background-removal)). Undo brings the background back.

## Rotate, flip and resize

The **More** menu also turns the whole picture: **Rotate left**, **Rotate right**, **Flip horizontally**, **Flip vertically** and **Resize**. Resize takes a width and a height in pixels and keeps them in proportion unless you switch that off, up to 16384 px a side and 64 megapixels in total.

The annotations you placed turn with the picture and become part of it. Each of these is a single undo step, and undo brings the shapes back as shapes you can edit.

## Print

**Print…** in the **More** menu (`Ctrl+P`), or on a History tile, opens the system print dialog with the picture and everything drawn on it. The picture keeps its on-screen size and shrinks to fit the page when it is larger; a picture wider than tall starts on a landscape page.

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

Single keys switch tools: `T` text, `P` pen, `L` line, `A` arrow, `R` rectangle, `O` ellipse, `B` blur, `H` highlight, `M` measure, `S` spotlight, `C` crop, `K` cut out, `G` sticker. With Edit shapes, `Delete` removes the selected shape and the arrow keys nudge it (`Shift` for ×10).

## Output actions

Send the finished image to:

- **Copy to clipboard**: puts the composited image on the clipboard.
- **Save to disk**: writes the file with the configured filename template and format (PNG, JPG or WebP). See [Configuration](/docs/configuration).
- **Upload**: sends the result to a custom or built-in destination and copies the link automatically. See [Upload destinations](/docs/upload-destinations).
