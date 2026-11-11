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

## Layout

**Settings → Editor → Layout** picks how the editor arranges its controls:

- **Panels** (the default): the tools in a rail on the left, the active tool's options in a column on the right. The column also lists every shape on the picture, the frontmost first (click one to select it, `Ctrl` or `Shift`+click to add it or take it out), and holds **Copy text**, **Auto-redact** and **Remove background** for the whole image. The line under the picture shows its size, the number of shapes and the save format, with **Fit** and **1:1** beside the zoom.
- **Floating**: the image gets the whole window, with the same controls in pills over its edges: the file name, a back button and the save state at the top left, the whole-image actions at the bottom left.

An editor that is already open switches at once.

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
| Edit shapes | Select and rework annotations you already placed. Shift+click adds a shape to the selection or takes it out, dragging across empty space selects every shape the band touches, and `Ctrl+A` selects them all. Drag any selected shape to move the whole group; a color, width or font you pick applies to every selected shape. **Duplicate** and **Arrange** sit next to **Delete** in the tool options, and right-clicking a shape with any tool but Crop opens the same three in a menu. A right click anywhere else copies the image. |
| Crop | Trim the image to a region. |
| Cut out | Drag across a band to remove it and join the two sides: wider than tall removes columns, taller than wide removes rows. |
| Sticker | Stamp a mouse pointer or a Twemoji sticker: click to place it (the pointer's tip lands on the click) or drag to size it. The row next to the tool holds the stickers you used last; **All stickers…** opens the whole library: every emoji of Unicode 17.0 that Twemoji draws, over 1,900, in Smileys, People, Nature, Food, Travel, Activities, Objects, Symbols and Flags. Its search field finds a sticker by the start of any word of its name or keywords, in the interface language or in English, and `Enter` takes the first match; the skin tone row under the library applies to every sticker that has one (arrow keys and `Space` pick too). **Picture from a file** places any image from disk. A placed sticker moves, resizes and rotates like a pasted image. |

## OCR: pick text out of the image

The **More** menu reads text out of the capture:

- **Copy all text**: OCR the whole image and copy all recognized text.
- **Select text**: recognized words become selectable regions. Select some, then copy them, make the highlight permanent, or **redact** them. Redact paints an opaque black bar over the words, never a blur, which can be recovered.

Words far apart on one line, such as two table columns, are separate pieces of text, so a selection or a bar never spans the empty space between them. A screenshot is read as scattered labels, buttons and cards rather than one block of text, so a sidebar and the column beside it stay apart, and light text on a dark panel is read as well as dark text on a light one.

## Auto-redact

**Auto-redact**, with the whole-image actions (the right column in Panels, the bottom-left pill in Floating) and in the options of Blur and Pixelate, reads the image and lists what looks sensitive, kind by kind, with how many of each it found:

- IP addresses, IPv4 and IPv6, also when text recognition misread a digit or put a space beside a dot
- e-mail addresses
- long numbers: phone and account numbers of nine digits or more
- passwords and keys: a password inside a link, the value after `password:` or `token=`, Bearer tokens, GitHub, GitLab, AWS, Slack, Google and OpenAI keys, JWTs and other long mixed-case keys
- card numbers that pass the Luhn check and IBANs that pass their checksum
- MAC addresses

Nothing is covered until you switch a kind on. Then every match of it gets the same opaque bar at once, and switching it off takes the bars off again.

Under a kind that is on, each finding has a row with its text and a switch of its own. Turn a finding off and it stays visible in the saved image; the editor keeps a dashed outline around it so you can turn it back on. Each switch is one undo step; the scan itself changes nothing.

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
| Zoom to 100% | `Ctrl+1` |
| Select every shape | `Ctrl+A` |
| Duplicate the selected shapes | `Ctrl+D` |
| Bring forward / to front | `Ctrl+]` / `Ctrl+Shift+]` |
| Send backward / to back | `Ctrl+[` / `Ctrl+Shift+[` |
| Close the editor | `Ctrl+W` |

Single keys switch tools: `T` text, `P` pen, `L` line, `A` arrow, `R` rectangle, `O` ellipse, `B` blur, `H` highlight, `M` measure, `S` spotlight, `C` crop, `K` cut out, `G` sticker. With Edit shapes, `Delete` removes the selected shapes and the arrow keys nudge them (`Shift` for ×10).

Modifiers work as in Figma. On a selected shape's handles, `Shift` on a corner keeps the proportions, `Shift` on a side scales the other side with it about its middle, and `Alt` resizes about the centre (the two combine). `Alt` while drawing makes the press point the shape's centre, `Shift` while moving keeps the shapes on one horizontal or vertical line, and `Shift` on the end of a line or an arrow snaps it to 45° steps (`Alt` moves both ends). `Shift`+click on a selected shape takes it out of the selection; `Shift`+drag on it moves the selection. `Ctrl` on a handle of a sticker or a picture crops it instead of resizing it: the frame moves over the picture, which stays where it is, and dragging back out shows the cut part again, up to the picture's edge.

## Output actions

Send the finished image to:

- **Copy to clipboard**: puts the composited image on the clipboard.
- **Save to disk**: writes the file with the configured filename template and format (PNG, JPG or WebP). See [Configuration](/docs/configuration).
- **Upload**: sends the result to a custom or built-in destination and copies the link automatically. See [Upload destinations](/docs/upload-destinations).
