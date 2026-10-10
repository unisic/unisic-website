import { type Dictionary } from "./en";

// Machine-translated (de) + in-workflow QA pass. Native review recommended.
// Structure validated against en.ts.
export const de: Dictionary = {
  "meta": {
    "title": "Unisic - Screenshot-Tool & Bildschirmrekorder für Linux",
    "description": "Open-Source-Screenshot-Tool und Bildschirmrekorder für Linux. Kommentieren vor der Aufnahme, bearbeiten danach, GIF und Video aufnehmen, überall hochladen. Keine Telemetrie, GPLv3.",
    "ogTitle": "Unisic - Screenshots richtig gemacht unter Linux",
    "ogDescription": "Aufnehmen, kommentieren, bearbeiten, aufzeichnen und teilen mit einem Tastenkürzel. Lautlose Aufnahme unter Wayland, GIF- und Videoaufzeichnung, OCR, sofortiges Hochladen. Keine Telemetrie, GPLv3.",
    "ogImageAlt": "Unisic Screenshot-Editor unter Linux"
  },
  "nav": {
    "docs": "Dokumentation",
    "skip": "Zum Inhalt springen",
    "how": "So funktioniert's",
    "features": "Funktionen",
    "github": "Unisic auf GitHub",
    "download": "Herunterladen"
  },
  "hero": {
    "eyebrow": "Screenshots und Bildschirmaufnahme für Linux",
    "headline": "Ein Screenshot-Tool, das die Arbeit zu Ende bringt.",
    "sub": "Unisic ist kostenlos und quelloffen. Zeichnen Sie auf den Bildschirm, bevor Sie aufnehmen, bearbeiten Sie danach, nehmen Sie ein GIF oder Video auf und teilen Sie den Link, alles mit einem Tastenkürzel.",
    "installLabel": "Installation in einer Zeile",
    "copy": "Kopieren",
    "copied": "Kopiert",
    "installNote": "Öffnet ein Menü. Jeder Download wird mit der veröffentlichten SHA-256-Prüfsumme geprüft.",
    "installRead": "So arbeitet das Installationsskript",
    "otherWays": "Andere Installationswege",
    "github": "Auf GitHub ansehen",
    "trust": {
      "license": "Kostenlos, GPL-3.0-lizenziert",
      "privacy": "Keine Telemetrie, kein Konto",
      "sessions": "Wayland und X11"
    }
  },
  "how": {
    "title": "So funktioniert's",
    "lede": "Es gibt keinen Einrichtungsassistenten und kein Konto. Installieren, Tastenkürzel drücken, loslegen.",
    "steps": {
      "hotkey": {
        "title": "Tastenkürzel drücken",
        "body": "{keys} startet eine Bereichsaufnahme. Vollbild und Fenster haben eigene Tasten, die Sie in den Einstellungen ändern können."
      },
      "mark": {
        "title": "Markieren",
        "body": "Zeichnen Sie Pfeile, Text, Unschärfe und nummerierte Schritte direkt auf den eingefrorenen Bildschirm und drücken Sie dann die Eingabetaste. Der Editor bietet weitere Werkzeuge."
      },
      "share": {
        "title": "Teilen",
        "body": "Speichern, kopieren oder hochladen. Nach dem Hochladen liegt der Link bereits in Ihrer Zwischenablage."
      }
    }
  },
  "usp": {
    "title": "Kommentieren, bevor die Aufnahme überhaupt gemacht wird",
    "lede": "Das Auswahl-Overlay ist eine Leinwand. Zeichnen Sie Pfeile, Text, Unschärfe und Schritte auf den eingefrorenen Bildschirm und drücken Sie dann Enter: Die Anmerkungen werden fest in die Aufnahme eingebrannt."
  },
  "overlay": {
    "caption": "Das Unisic Auswahl-Overlay: ein eingefrorener Bildschirm mit einem ausgewählten Bereich, Live-Pixelmaßen, einem vor der Aufnahme gezeichneten Pfeil und einer schwebenden Werkzeugleiste.",
    "capture": "Aufnehmen"
  },
  "features": {
    "title": "Alles nach dem Tastenkürzel",
    "lede": "Die meisten Screenshot-Tools hören beim Bild auf. Unisic macht weiter.",
    "editor": {
      "title": "Ein echter Editor, keine Zuschneidebox",
      "body": "Pfeile, Formen, Text, Hervorheben, Unschärfe, Verpixeln, nummerierte Schritte, Sprechblasen und Zuschneiden. Rückgängig, Wiederholen und Zoomen, so oft Sie wollen."
    },
    "ocr": {
      "title": "Text aus Pixeln",
      "body": "Kopieren Sie den Text aus jedem Bereich direkt in die Zwischenablage. QR-Codes und Barcodes werden zu ihrem Inhalt dekodiert."
    },
    "upload": {
      "title": "Überall hochladen",
      "body": "Ihr eigener HTTP-Server, ShareX-Uploader-Dateien, FTP, SFTP oder ein integrierter Host. Der Link wird für Sie kopiert.",
      "copied": "Kopiert"
    },
    "history": {
      "title": "Verlauf mit Miniaturansichten",
      "body": "Jede Aufnahme nur ein Raster entfernt. Beim Löschen wandert die Datei in den Papierkorb, niemals darüber hinaus."
    },
    "silent": {
      "title": "Lautlose Aufnahme",
      "body": "Kein Auslöserblitz, kein Jonglieren mit Fenstern. Nativer KWin-Pfad unter Plasma, Portale überall sonst."
    },
    "yours": {
      "title": "Ganz und gar Ihres",
      "body": "Keine Telemetrie, keine Analyse, kein Konto. Die einzige Anfrage, die Unisic von sich aus stellt, ist die Suche nach neuen Versionen. GPL-3.0-lizenziert und offen entwickelt."
    }
  },
  "recording": {
    "title": "Denselben Bereich als GIF oder Video aufnehmen",
    "lede": "Nehmen Sie einen Bereich, ein Fenster oder den ganzen Bildschirm auf. Speichern Sie ein GIF mit sauberen Farben oder ein MP4 oder WebM mit System-, Mikrofon- oder Einzel-App-Ton. Die Sofortwiedergabe hält die letzten 30 Sekunden bereit, und den Clip können Sie direkt in der Benachrichtigung kürzen.",
    "note": "{keys} stoppt immer eine Aufzeichnung, egal was gerade den Fokus hat.",
    "caption": "Ein Bildschirmbereich wird aufgezeichnet: Unisic zeichnet einen akzentfarbenen Rahmen um den Bereich mit einem REC-Symbol und einem laufenden Timer."
  },
  "themes": {
    "title": "Themes, darunter Ihr eigenes",
    "lede": "Wählen Sie unten eine Palette und sehen Sie zu, wie die App sie trägt.",
    "groupLabel": "Ein Theme im App-Fenster in der Vorschau ansehen",
    "reset": "Auf Unisic zurücksetzen",
    "note": "Jeder Chip färbt das Fenster oben live neu. Ein Theme ist Ihr System: Es folgt dem hellen oder dunklen Schema und der Akzentfarbe des Desktops.",
    "system": "System",
    "systemLabel": "System: folgt dem hellen oder dunklen Schema Ihres Desktops; hier nicht in der Vorschau verfügbar",
    "previewLabel": "Das Unisic-Hauptfenster im Theme {theme}"
  },
  "download": {
    "title": "Unisic installieren",
    "lede": "Für Wayland gemacht, läuft aber auch unter X11. Wählen Sie, wie Sie installieren möchten.",
    "points": {
      "verify": "Jeder Download wird gegen seine SHA-256-Prüfsumme geprüft",
      "noRoot": "Das AppImage braucht kein Root und aktualisiert sich selbst",
      "free": "Kostenlos und quelloffen, GPL-3.0"
    },
    "or": "Oder wählen Sie Ihr System",
    "repoLede": "AppImage ist der empfohlene Weg: eine Datei, kein Root, und bei einer neuen Version ersetzt sie sich selbst. Wählen Sie stattdessen Ihre Distribution, dann hält das Repository Unisic über die Paketverwaltung aktuell; das Release enthält zudem einmalige .deb-, .rpm- und Arch-Pakete, die bei der Erstinstallation das Repository einrichten.",
    "distroListLabel": "Distribution oder Paketformat wählen",
    "versionLabel": "Version",
    "copyCmd": "Befehle kopieren",
    "copiedCmd": "Kopiert",
    "steps": {
      "importKey": "Importieren Sie den Signaturschlüssel des Repositorys:",
      "addRepo": "Fügen Sie das Repository hinzu:",
      "refreshRepo": "Aktualisieren Sie die Repositorys:",
      "enableRepo": "Aktivieren Sie das COPR-Repository:",
      "install": "Installieren Sie Unisic:"
    },
    "notes": {
      "ubuntu": "Ubuntu 25.10 erreicht im Juli 2026 das Supportende, bevorzugen Sie daher 26.04. Beide benötigen Qt 6.5+, das ältere Versionen nicht mitbringen.",
      "debian": "Benötigt Debian 13 (trixie) oder neuer für Qt 6.5+.",
      "fedora": "Builds für Fedora 43, 44 und Rawhide. Alle erforderlichen Abhängigkeiten werden mit dem Paket installiert, sodass Aufnahme, OCR und QR-Dekodierung sofort funktionieren.",
      "opensuse": "zypper bittet beim Aktualisieren darum, den Signaturschlüssel des Repositorys zu akzeptieren.",
      "arch": "Ein signiertes pacman-Repository auf dem openSUSE Build Service. Kein AUR nötig.",
      "nix": "Läuft überall, wo Nix läuft, auch auf NixOS. Probieren Sie es mit nix run oder fügen Sie das Flake als Input für eine deklarative Konfiguration hinzu; aktivieren Sie unter NixOS xdg.portal und PipeWire.",
      "appimage": "Empfohlen. Universell: läuft auf jeder Distribution, benötigt kein Root und installiert nichts in Ihr System. Die App aktualisiert sich selbst: Das neue Release wird heruntergeladen, gegen die dafür veröffentlichte SHA-256-Summe geprüft und an Ort und Stelle ausgetauscht, und Unisic startet neu, sobald Sie untätig sind."
    },
    "downloadBtn": "Herunterladen",
    "checking": "Neueste Version wird geprüft",
    "latest": "Neueste Version {tag}",
    "fallbackBtn": "Über GitHub Releases herunterladen",
    "fallbackNote": "GitHub konnte gerade nicht erreicht werden, aber jeder Build ist dort verfügbar.",
    "allReleases": "Alle Versionen und ältere Builds",
    "stability": "Unisic befindet sich in der Beta. Wenn es auf Ihrem Desktop Probleme macht, hilft ein Bericht unter {link}.",
    "stabilityLink": "Issues"
  },
  "hotkeys": {
    "caption": "Standard-Tastenkürzel",
    "action": "Aktion",
    "shortcut": "Tastenkürzel",
    "rows": {
      "full": "Vollbild aufnehmen",
      "region": "Bereich aufnehmen",
      "window": "Aktives Fenster aufnehmen",
      "gif": "GIF aufzeichnen (Start/Stopp)",
      "video": "Video aufzeichnen (Start/Stopp)",
      "ocr": "Bereich per OCR erfassen (Text kopieren)",
      "copyLast": "Letzte Aufnahme kopieren",
      "quickTask": "Schnellaufgaben-Auswahl öffnen",
      "replay": "Sofortwiederholung starten/speichern",
      "stop": "Aufzeichnung stoppen (fest)"
    },
    "tryHint": "Diese Tabelle ist live: Halten Sie ein Tastenkürzel auf Ihrer Tastatur gedrückt, und die Tasten leuchten auf.",
    "note": "Alle außer der festen Stopp-Taste sind in den Einstellungen bearbeitbar und werden sofort auf das System angewendet."
  },
  "reference": {
    "title": "Referenz"
  },
  "compositors": {
    "title": "Funktioniert mit Ihrem Compositor",
    "plasma": {
      "name": "KDE Plasma",
      "body": "Der vollständig lautlose Pfad: natives KWin ScreenShot2 mit KGlobalAccel-Tastenkürzeln. Überhaupt keine Portal-Dialoge."
    },
    "gnome": {
      "name": "GNOME und andere Desktops",
      "body": "Aufnahmen und Aufzeichnungen laufen über xdg-desktop-portal mit PipeWire. Standardkonform, sicher, ohne Hacks."
    },
    "wlroots": {
      "name": "niri und wlroots-Compositoren",
      "body": "Unisic nimmt über wlr-screencopy mittels grim auf, lautlos und für mehrere Monitore geeignet. Binden Sie Tastenkürzel in Ihrer Compositor-Konfiguration; eine laufende Instanz übernimmt den Befehl."
    }
  },
  "mainWindow": {
    "ariaLabel": "Das Unisic-Hauptfenster: eine Seitenleiste mit den Seiten Aufnehmen, Aufzeichnen und Bearbeiten über einer Bibliothek aus Verlauf und Server sowie die Seite Aufnehmen mit Aktionen für Vollbild, Bereich und Fenster plus dem Raster der Aufnahmeoptionen.",
    "nav": {
      "capture": "Aufnehmen",
      "record": "Aufzeichnen",
      "edit": "Bearbeiten",
      "history": "Verlauf",
      "servers": "Server"
    },
    "library": "Bibliothek",
    "pageTitle": "Aufnehmen",
    "pageSub": "Screenshots landen im Editor, wo Sie sie kommentieren und dann speichern, kopieren oder hochladen können.",
    "cards": {
      "fullScreen": {
        "title": "Vollbild",
        "sub": "Alle Monitore"
      },
      "region": {
        "title": "Bereich",
        "sub": "Auswählen + live kommentieren"
      },
      "window": {
        "title": "Fenster",
        "sub": "Aktives Fenster"
      }
    },
    "options": {
      "title": "Aufnahmeoptionen",
      "delay": "Aufnahmeverzögerung",
      "repeat": "Letzten Bereich wiederholen",
      "repeatAction": "Wiederholen",
      "server": "Upload-Server",
      "cursor": "Mauszeiger einbeziehen",
      "editor": "Editor öffnen",
      "clipboard": "Bild in die Zwischenablage kopieren",
      "disk": "Automatisch auf Datenträger speichern",
      "upload": "Hochladen und Link kopieren"
    }
  },
  "editorMockup": {
    "ariaLabel": "Das Unisic-Editorfenster: eine Werkzeugkarte mit den Anmerkungswerkzeugen über der geöffneten Formen-Gruppe und ihren Strichoptionen, ein Screenshot mit Pfeil, Hervorhebung und nummerierten Schritten sowie Aktionen zum Kopieren, Speichern und Hochladen.",
    "title": "Unisic Editor",
    "stroke": "Strich",
    "copy": "Kopieren",
    "save": "Speichern",
    "upload": "Hochladen",
    "more": "Mehr"
  },
  "footer": {
    "license": "Frei und quelloffen, GPL-3.0",
    "nav": "Fußzeile",
    "github": "GitHub",
    "releases": "Releases",
    "issues": "Issues",
    "licenseLink": "Lizenz"
  },
  "notFound": {
    "code": "Fehler 404",
    "title": "Seite nicht gefunden",
    "message": "Die gesuchte Seite wurde verschoben, umbenannt oder hat nie existiert. Wir bringen Sie zurück auf festen Boden.",
    "home": "Zurück zur Startseite"
  },
  "languageSwitcher": {
    "label": "Sprache"
  }
};
