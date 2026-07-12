/*
 * English master dictionary — the source of truth for every user-facing
 * string on the site, and the shape (`Dictionary`) every translation must
 * match. Brand names ("Unisic"), hotkey combos ("Meta+Shift+1"), format
 * labels (AppImage, .deb …), code snippets, URLs and version tags are NOT
 * here: they stay verbatim in the components. Tokens in braces ({keys},
 * {corner}, {color}, {theme}, {code}, {link}, {tag}) are filled at render.
 */

export const en = {
  meta: {
    title: "Unisic — Screenshots done right on Linux Wayland",
    description:
      "Open-source screenshot and screen recorder for Linux Wayland. Annotate before the shot, edit after, record GIF and video, upload anywhere. Zero telemetry, GPLv3.",
    ogTitle: "Unisic — Screenshots done right on Linux Wayland",
    ogDescription:
      "Silent capture, annotation before the shot, a 12-tool editor, GIF and video recording, instant upload. Zero telemetry, GPLv3.",
    ogImageAlt: "Unisic screenshot editor on Linux Wayland",
  },

  nav: {
    skip: "Skip to content",
    features: "Features",
    recording: "Recording",
    docs: "Docs",
    github: "Unisic on GitHub",
    download: "Download",
  },

  hero: {
    headline: "Screenshots done right on Linux Wayland.",
    sub: "Silent capture, annotation before the shot, a 12-tool editor, GIF and video recording, instant upload. Zero telemetry. GPLv3.",
    download: "Download",
    github: "View on GitHub",
  },

  usp: {
    title: "Annotate before the shot is even taken",
    lede: "The selection overlay is a canvas. Draw arrows, text, blur and steps on the frozen screen, then press Enter: the annotations are burnt into the capture.",
  },

  overlay: {
    caption:
      "The Unisic selection overlay: a frozen screen with a selected region, live pixel dimensions, an arrow drawn before capture, and a floating toolbar.",
    capture: "Capture",
  },

  features: {
    title: "Everything after the hotkey",
    lede: "Most tools hand you a rectangle of pixels and walk away. Unisic covers the rest of the workflow.",
    editor: {
      title: "A real editor, not a crop box",
      body: "Twelve tools including highlight, pixelate, smart eraser, numbered steps and crop. Undo, redo, zoom, all in image-pixel space.",
    },
    upload: {
      title: "Upload anywhere",
      body: "Custom HTTP destinations, ShareX uploader import, FTP and SFTP, built-in hosts. The link lands in your clipboard.",
      copied: "Copied",
    },
    history: {
      title: "History with thumbnails",
      body: "Every capture, one grid away. Deleting moves the file to the trash, never past it.",
    },
    silent: {
      title: "Silent capture",
      body: "No shutter flash, no window juggling. Native KWin path on Plasma, portals everywhere else.",
    },
    yours: {
      title: "Yours, entirely",
      body: "Zero telemetry, no accounts, nothing phones home. GPL-3.0 licensed and built in the open.",
    },
  },

  recording: {
    title: "The same region, as GIF or video",
    lede: "GIF with a two-pass palette for crisp colors, or MP4 and WebM through the ScreenCast portal, PipeWire and ffmpeg. Record a region, the full screen, or a window.",
    note: "{keys} always stops a recording, no matter what has focus.",
    caption:
      "A screen region being recorded: Unisic draws an accent-colored frame around the region with a REC badge and elapsed timer.",
  },

  themes: {
    title: "Nine themes, including yours",
    lede: "Pick a palette below and watch the app wear it.",
    groupLabel: "Preview a theme in the app window",
    reset: "Reset to Unisic",
    note: "Every chip repaints the window above live. The ninth theme is your system: it follows the desktop light or dark scheme and accent color.",
    system: "System",
    systemLabel:
      "System — follows your desktop light or dark scheme; not previewable here",
    previewLabel: "The Unisic main window in the {theme} theme",
  },

  download: {
    title: "Install Unisic",
    lede: "Needs a Wayland session with xdg-desktop-portal. Recording also wants PipeWire and ffmpeg.",
    repoLede:
      "Pick your distribution — the repository keeps Unisic updated through your package manager. AppImage and Flatpak are direct downloads.",
    distroListLabel: "Choose your distribution or package format",
    versionLabel: "Version",
    copyCmd: "Copy commands",
    copiedCmd: "Copied",
    steps: {
      importKey: "Import the repository signing key:",
      addRepo: "Add the repository:",
      refreshRepo: "Refresh the repositories:",
      enableRepo: "Enable the COPR repository:",
      install: "Install Unisic:",
    },
    notes: {
      ubuntu:
        "Ubuntu 25.10 reaches end of life in July 2026 — prefer 26.04. Both need Qt 6.5+, which older releases don’t ship.",
      debian: "Needs Debian 13 (trixie) or newer for Qt 6.5+.",
      fedora:
        "Builds for Fedora 43, 44 and Rawhide. The COPR build pulls in the optional dependencies, so recording, OCR and background removal work out of the box.",
      opensuse:
        "zypper asks you to accept the repository signing key during the refresh.",
      arch: "A signed pacman repository on the openSUSE Build Service — no AUR needed.",
      appimage:
        "Universal — runs on any distribution. The app updates itself: it downloads the new AppImage and swaps in place, then restarts when idle.",
      flatpak:
        "A sideload bundle — re-download to update (the app notifies you when a new version exists) until Unisic lands on Flathub.",
    },
    downloadBtn: "Download",
    checking: "Checking the latest release",
    latest: "Latest release {tag}",
    fallbackBtn: "Get it from GitHub Releases",
    fallbackNote: "Couldn’t reach GitHub just now, but every build lives there.",
    allReleases: "All releases and older builds",
    earlyAccess:
      "Unisic is in early developer access: it works, but expect rough edges on exotic compositors. Every report in {link} helps.",
    earlyAccessLink: "Issues",
  },

  hotkeys: {
    caption: "Default hotkeys",
    action: "Action",
    shortcut: "Shortcut",
    rows: {
      full: "Capture full screen",
      region: "Capture region",
      window: "Capture active window",
      gif: "Record GIF (region)",
      video: "Record video (region)",
      stop: "Stop recording (fixed)",
    },
    tryHint:
      "This table is live: hold a shortcut on your keyboard and the caps light up.",
    note: "All but the fixed stop key are editable in Settings, applied to the system immediately.",
  },

  reference: {
    title: "Reference",
  },

  compositors: {
    title: "Works with your compositor",
    plasma: {
      name: "KDE Plasma",
      body: "The fully silent path: native KWin ScreenShot2 with KGlobalAccel hotkeys. No portal dialogs at all.",
    },
    gnome: {
      name: "GNOME and other desktops",
      body: "Captures and recording flow through xdg-desktop-portal with PipeWire. Standard, safe, no hacks.",
    },
    wlroots: {
      name: "niri and wlroots compositors",
      body: "Unisic captures through wlr-screencopy via grim, silent and multi-monitor-safe. Bind hotkeys in your compositor config; a running instance picks the command up.",
    },
  },

  mainWindow: {
    ariaLabel:
      "The Unisic main window: a sidebar with Capture, Record, GIF, History, Destinations and Settings pages, and the Capture page with full screen, region and window actions plus after-capture toggles.",
    nav: {
      capture: "Capture",
      record: "Record",
      gif: "GIF",
      history: "History",
      destinations: "Destinations",
      settings: "Settings",
    },
    pageTitle: "Capture",
    pageSub:
      "Screenshots land in the editor, where you can annotate, then save, copy or upload.",
    cards: {
      fullScreen: { title: "Full screen", sub: "All monitors" },
      region: { title: "Region", sub: "Select + annotate live" },
      window: { title: "Window", sub: "Active window" },
    },
    afterCapture: "After capture",
    toggles: {
      editor: "Open the editor",
      clipboard: "Copy image to clipboard",
      disk: "Save to disk automatically",
      upload: "Upload and copy the link",
    },
  },

  editorMockup: {
    ariaLabel:
      "The Unisic editor window: a toolbar with twelve annotation tools, a screenshot annotated with an arrow, a highlight and numbered steps, and copy, save and upload actions.",
    title: "Unisic Editor",
    copy: "Copy",
    save: "Save",
    upload: "Upload",
  },

  footer: {
    license: "Free and open source, GPL-3.0",
    nav: "Footer",
    github: "GitHub",
    releases: "Releases",
    issues: "Issues",
    licenseLink: "License",
  },

  notFound: {
    code: "Error 404",
    title: "Page not found",
    message:
      "The page you were after has moved, been renamed, or never existed. Let us get you back to solid ground.",
    home: "Back to home",
  },

  languageSwitcher: {
    label: "Language",
  },
};

/* Every translation file must satisfy this shape (widened to string values,
   so a translation with different copy still matches). */
export type Dictionary = typeof en;
