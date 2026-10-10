/*
 * English master dictionary - the source of truth for every user-facing
 * string on the site, and the shape (`Dictionary`) every translation must
 * match. Brand names ("Unisic"), hotkey combos ("Meta+Shift+1"), format
 * labels (AppImage, .deb ...), code snippets, URLs and version tags are NOT
 * here: they stay verbatim in the components. Tokens in braces ({keys},
 * {corner}, {color}, {theme}, {code}, {link}, {tag}) are filled at render.
 */

export const en = {
  meta: {
    title: "Unisic - Linux Screenshot Tool & Screen Recorder",
    description:
      "Open-source screenshot and screen recorder for Linux. Annotate before the shot, edit after, record GIF and video, upload anywhere. Zero telemetry, GPLv3.",
    ogTitle: "Unisic - Screenshots done right on Linux",
    ogDescription:
      "Capture, annotate, edit, record and share from one hotkey. Silent capture on Wayland, GIF and video recording, OCR, instant upload. Zero telemetry, GPLv3.",
    ogImageAlt: "Unisic screenshot editor on Linux",
  },

  nav: {
    skip: "Skip to content",
    how: "How it works",
    features: "Features",
    docs: "Docs",
    github: "Unisic on GitHub",
    download: "Download",
  },

  hero: {
    eyebrow: "Screenshots and screen recording for Linux",
    headline: "A screenshot tool that finishes the job.",
    sub: "Unisic is free and open source. Draw on the screen before you capture it, edit afterwards, record a GIF or video, and share the link, all from one hotkey.",
    installLabel: "Install in one line",
    copy: "Copy",
    copied: "Copied",
    installNote:
      "Opens a menu. Every download is checked against its published SHA-256.",
    installRead: "How the installer works",
    otherWays: "Other ways to install",
    github: "View on GitHub",
    trust: {
      license: "Free, GPL-3.0 licensed",
      privacy: "No telemetry, no account",
      sessions: "Wayland and X11",
    },
  },

  how: {
    title: "How it works",
    lede: "No setup wizard, no account. Install it, press a hotkey, get to work.",
    steps: {
      hotkey: {
        title: "Press a hotkey",
        body: "{keys} starts a region capture. Full screen and window have their own keys, and you can rebind them in Settings.",
      },
      mark: {
        title: "Mark it up",
        body: "Draw arrows, text, blur and numbered steps right on the frozen screen, then press Enter. The editor has more tools.",
      },
      share: {
        title: "Share it",
        body: "Save it, copy it or upload it. After an upload the link is already in your clipboard.",
      },
    },
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
    lede: "Most screenshot tools stop at the picture. Unisic keeps going.",
    editor: {
      title: "A real editor, not a crop box",
      body: "Arrows, shapes, text, highlight, blur, pixelate, numbered steps, callouts and crop. Undo, redo and zoom as much as you like.",
    },
    ocr: {
      title: "Text out of pixels",
      body: "Copy the text from any region straight to your clipboard. QR codes and barcodes decode to what they contain.",
    },
    upload: {
      title: "Upload anywhere",
      body: "Your own HTTP server, ShareX uploader files, FTP, SFTP or a built-in host. The link is copied for you.",
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
      body: "No telemetry, no analytics, no account. The only request Unisic makes on its own is a check for new releases. GPL-3.0 licensed and built in the open.",
    },
  },

  recording: {
    title: "Record the same region as a GIF or video",
    lede: "Capture a region, a window or the whole screen. Save a GIF with clean colors, or an MP4 or WebM with system, microphone or single-app sound. Instant replay keeps the last 30 seconds ready, and you can trim the clip from the notification.",
    note: "{keys} always stops a recording, no matter what has focus.",
    caption:
      "A screen region being recorded: Unisic draws an accent-colored frame around the region with a REC badge and elapsed timer.",
  },

  themes: {
    title: "Themes, including yours",
    lede: "Pick a palette below and watch the app wear it.",
    groupLabel: "Preview a theme in the app window",
    reset: "Reset to Unisic",
    note: "Every chip repaints the window above live. One theme is your system: it follows the desktop light or dark scheme and accent color.",
    system: "System",
    systemLabel:
      "System: follows your desktop light or dark scheme; not previewable here",
    previewLabel: "The Unisic main window in the {theme} theme",
  },

  download: {
    title: "Install Unisic",
    lede: "Made for Wayland, and it also runs on X11. Choose how you want to install it.",
    points: {
      verify: "Every download is checked against its SHA-256",
      noRoot: "The AppImage needs no root and updates itself",
      free: "Free and open source, GPL-3.0",
    },
    or: "Or pick your system",
    repoLede:
      "AppImage is the recommended way in: one file, no root, and it replaces itself when a new version appears. Pick your distribution instead and the repository keeps Unisic updated through your package manager; the release also carries one-off .deb, .rpm and Arch packages that hook up the repository on first install.",
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
        "Ubuntu 25.10 reaches end of life in July 2026, so prefer 26.04. Both need Qt 6.5+, which older releases don’t ship.",
      debian: "Needs Debian 13 (trixie) or newer for Qt 6.5+.",
      fedora:
        "Builds for Fedora 43, 44 and Rawhide. Every required dependency is installed with the package, so recording, OCR and QR decoding work out of the box.",
      opensuse:
        "zypper asks you to accept the repository signing key during the refresh.",
      arch: "A signed pacman repository on the openSUSE Build Service. No AUR needed.",
      nix: "Runs anywhere Nix does, including NixOS. Try it with nix run, or add the flake as an input for a declarative setup; enable xdg.portal and PipeWire on NixOS.",
      appimage:
        "Recommended. Universal: runs on any distribution, needs no root and installs nothing into your system. It updates itself: the new release is downloaded, checked against the SHA-256 published for it, swapped in place, and Unisic restarts once you are idle.",
    },
    downloadBtn: "Download",
    checking: "Checking the latest release",
    latest: "Latest release {tag}",
    fallbackBtn: "Get it from GitHub Releases",
    fallbackNote: "Couldn't reach GitHub just now, but every build lives there.",
    allReleases: "All releases and older builds",
    stability:
      "Unisic is in beta. If it misbehaves on your desktop, a report in {link} helps.",
    stabilityLink: "Issues",
  },

  hotkeys: {
    caption: "Default hotkeys",
    action: "Action",
    shortcut: "Shortcut",
    rows: {
      full: "Capture full screen",
      region: "Capture region",
      window: "Capture active window",
      gif: "Record GIF (start/stop)",
      video: "Record video (start/stop)",
      ocr: "OCR region (copy text)",
      copyLast: "Copy last capture",
      quickTask: "Open quick task chooser",
      replay: "Start/save instant replay",
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
    title: "Works with your Wayland compositor",
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
      "The Unisic main window: a sidebar with the Capture, Record and Edit pages above a History and Servers library, and the Capture page with full screen, region and window actions plus the capture options grid.",
    nav: {
      capture: "Capture",
      record: "Record",
      edit: "Edit",
      history: "History",
      servers: "Servers",
    },
    library: "Library",
    pageTitle: "Capture",
    pageSub:
      "Screenshots land in the editor, where you can annotate, then save, copy or upload.",
    cards: {
      fullScreen: { title: "Full screen", sub: "All monitors" },
      region: { title: "Region", sub: "Select + annotate live" },
      window: { title: "Window", sub: "Active window" },
    },
    options: {
      title: "Capture options",
      delay: "Capture delay",
      repeat: "Repeat last region",
      repeatAction: "Repeat",
      server: "Upload server",
      cursor: "Include mouse cursor",
      editor: "Open the editor",
      clipboard: "Copy image to clipboard",
      disk: "Save to disk automatically",
      upload: "Upload and copy the link",
    },
  },

  editorMockup: {
    ariaLabel:
      "The Unisic editor window: a tool card with the annotation tools above the open shapes group and its stroke options, a screenshot annotated with an arrow, a highlight and numbered steps, and copy, save and upload actions.",
    title: "Unisic Editor",
    stroke: "Stroke",
    copy: "Copy",
    save: "Save",
    upload: "Upload",
    more: "More",
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
