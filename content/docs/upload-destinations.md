---
title: "Upload destinations"
seoTitle: "Upload screenshots: HTTP, ShareX, FTP and SFTP"
description: "Send a capture straight to a custom HTTP endpoint, an imported ShareX .sxcu uploader, FTP or SFTP, or a built-in host, with the link copied to your clipboard."
order: 6
group: "Sharing"
---

Uploading sends a capture to a remote host. It is an export option, alongside copying to the clipboard and saving to disk. Upload straight from the overlay or after editing in the [editor](/docs/editor). Manage destinations on the **Servers** page in the app.

## Destination types

### Custom HTTP destinations

Send the capture to any HTTP endpoint, as a multipart form upload or a raw JSON body.

### ShareX `.sxcu` import

Import a ShareX uploader definition (`.sxcu` file) to reuse an existing custom uploader.

### FTP / SFTP via curl

Upload to an FTP or SFTP server. Transfers run through curl.

### Built-in hosts

Ready to use: catbox.moe (the default), buzzheavier.com, and the expiring hosts uguu.se (48 h), litterbox (72 h) and tmpfiles.org (1 h).

Two more need your own credential before they upload. Imgur takes a Client-ID from an application you register. vgy.me takes the user key from your vgy.me account; paste it into the destination's settings.

GitHub Pages is the third kind of built-in: a repository of your own that publishes a site, reached through your own domain if you have one. Pick "GitHub Pages" as the server's Type and fill in the repository (owner/name), the branch Pages publishes from, an optional folder, a personal access token that can write the repository's contents (a fine-grained token with Contents: Read and write on that repository), and the public address when the repository sits behind a custom domain (empty means the github.io address). Each upload is a commit, and the link is that address plus the file name, for example `https://cdn.example.com/2026-11-01_12-30-00.png`. Pages publishes a new commit within a minute or so, so a link copied right after the upload can show a 404 at first.

## Link auto-copied

After a successful upload, Unisic copies the link to the clipboard.

## Where destinations are stored

Settings and destinations live under `~/.config/unisic/`. Destinations are part of your settings, so a full settings export includes them. Export and import the complete settings as JSON:

```sh
unisic --export-settings <file> | --import-settings <file>
```

See [Configuration](/docs/configuration) for settings storage and JSON export/import.
