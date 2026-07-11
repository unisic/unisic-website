---
title: "Upload destinations"
description: "Custom HTTP, ShareX .sxcu, FTP/SFTP, and built-in hosts."
order: 6
group: "Sharing"
---

Uploading a capture sends it to a remote host and hands you back the resulting link, ready to paste. This page covers the destination types Unisic supports and where their configuration is stored.

Uploading is one of the export options for a finished capture, alongside copying to the clipboard or saving to disk. Once a capture is ready — straight from the overlay or after you refine it in the [editor](/docs/editor) — you can push it to an upload destination.

## Destination types

Unisic supports four kinds of upload destination.

### Custom HTTP destinations

Send the capture to any HTTP endpoint. The request body can be either a multipart form upload or a raw JSON body.

### ShareX `.sxcu` import

Import a ShareX uploader definition (`.sxcu` file) to reuse an existing custom uploader configuration.

### FTP / SFTP via curl

Upload to an FTP or SFTP server. These transfers run through curl.

### Built-in hosts

Ready-to-use destinations are included for catbox, 0x0.st, and Imgur.

## Link auto-copied

After a successful upload, the resulting link is copied to the clipboard automatically, so you can paste it immediately.

## Where destinations are stored

Settings and destinations live under `~/.config/unisic/`.

Because destinations are part of your settings, they travel with a full settings export. You can export and import the complete settings — destinations included — as JSON:

```sh
unisic --export-settings <file> | --import-settings <file>
```

See [Configuration](/docs/configuration) for more on settings storage and JSON export/import.
