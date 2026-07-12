import { type Dictionary } from "./en";

// Machine-translated (de) + in-workflow QA pass. Native review recommended.
// Structure validated against en.ts.
export const de: Dictionary = {
  "meta": {
    "title": "Unisic — Screenshots richtig gemacht unter Linux Wayland",
    "description": "Open-Source-Screenshot-Tool und Bildschirmrekorder für Linux Wayland. Kommentieren vor der Aufnahme, bearbeiten danach, GIF und Video aufnehmen, überall hochladen. Keine Telemetrie, GPLv3.",
    "ogTitle": "Unisic — Screenshots richtig gemacht unter Linux Wayland",
    "ogDescription": "Lautlose Aufnahme, Kommentieren vor der Aufnahme, ein Editor mit 12 Werkzeugen, GIF- und Videoaufnahme, sofortiges Hochladen. Keine Telemetrie, GPLv3.",
    "ogImageAlt": "Unisic Screenshot-Editor unter Linux Wayland"
  },
  "nav": {
    "docs": "Dokumentation",
    "skip": "Zum Inhalt springen",
    "features": "Funktionen",
    "recording": "Aufzeichnung",
    "github": "Unisic auf GitHub",
    "download": "Herunterladen"
  },
  "hero": {
    "headline": "Screenshots richtig gemacht unter Linux Wayland.",
    "sub": "Lautlose Aufnahme, Kommentieren vor der Aufnahme, ein Editor mit 12 Werkzeugen, GIF- und Videoaufnahme, sofortiges Hochladen. Keine Telemetrie. GPLv3.",
    "download": "Herunterladen",
    "github": "Auf GitHub ansehen"
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
    "lede": "Die meisten Tools liefern Ihnen ein Rechteck aus Pixeln und lassen Sie dann allein. Unisic deckt den Rest des Arbeitsablaufs ab.",
    "editor": {
      "title": "Ein echter Editor, keine Zuschneidebox",
      "body": "Zwölf Werkzeuge, darunter Hervorheben, Verpixeln, intelligenter Radierer, nummerierte Schritte und Zuschneiden. Rückgängig, Wiederholen, Zoom – alles im Bildpixel-Raum."
    },
    "upload": {
      "title": "Überall hochladen",
      "body": "Eigene HTTP-Ziele, Import von ShareX-Uploadern, FTP und SFTP, integrierte Hoster. Der Link landet in Ihrer Zwischenablage.",
      "copied": "Kopiert"
    },
    "history": {
      "title": "Verlauf mit Miniaturansichten",
      "body": "Jede Aufnahme nur ein Raster entfernt. Beim Löschen wandert die Datei in den Papierkorb – niemals darüber hinaus."
    },
    "silent": {
      "title": "Lautlose Aufnahme",
      "body": "Kein Auslöserblitz, kein Jonglieren mit Fenstern. Nativer KWin-Pfad unter Plasma, Portale überall sonst."
    },
    "yours": {
      "title": "Ganz und gar Ihres",
      "body": "Keine Telemetrie, keine Konten, nichts funkt nach Hause. Unter GPL-3.0 lizenziert und offen entwickelt."
    }
  },
  "recording": {
    "title": "Derselbe Bereich, als GIF oder Video",
    "lede": "GIF mit einer Zwei-Pass-Palette für klare Farben oder MP4 und WebM über das ScreenCast-Portal, PipeWire und ffmpeg. Nehmen Sie einen Bereich, den gesamten Bildschirm oder ein Fenster auf.",
    "note": "{keys} stoppt immer eine Aufzeichnung, egal was gerade den Fokus hat.",
    "caption": "Ein Bildschirmbereich wird aufgezeichnet: Unisic zeichnet einen akzentfarbenen Rahmen um den Bereich mit einem REC-Symbol und einem laufenden Timer."
  },
  "themes": {
    "title": "Neun Themes, darunter Ihr eigenes",
    "lede": "Wählen Sie unten eine Palette und sehen Sie zu, wie die App sie trägt.",
    "groupLabel": "Ein Theme im App-Fenster in der Vorschau ansehen",
    "reset": "Auf Unisic zurücksetzen",
    "note": "Jeder Chip färbt das Fenster oben live neu. Das neunte Theme ist Ihr System: Es folgt dem hellen oder dunklen Schema und der Akzentfarbe des Desktops.",
    "system": "System",
    "systemLabel": "System — folgt dem hellen oder dunklen Schema Ihres Desktops; hier nicht in der Vorschau verfügbar",
    "previewLabel": "Das Unisic-Hauptfenster im Theme {theme}"
  },
  "download": {
    "title": "Unisic installieren",
    "lede": "Benötigt eine Wayland-Sitzung mit xdg-desktop-portal. Für Aufzeichnungen sind zudem PipeWire und ffmpeg erforderlich.",
    "repoLede": "Wählen Sie Ihre Distribution — das Repository hält Unisic über die Paketverwaltung aktuell. AppImage und Flatpak sind Direktdownloads.",
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
      "ubuntu": "Ubuntu 25.10 erreicht im Juli 2026 das Supportende — bevorzugen Sie 26.04. Beide benötigen Qt 6.5+, das ältere Versionen nicht mitbringen.",
      "debian": "Benötigt Debian 13 (trixie) oder neuer für Qt 6.5+.",
      "fedora": "Builds für Fedora 43, 44 und Rawhide. Der COPR-Build installiert die optionalen Abhängigkeiten mit, sodass Aufnahme, OCR und Hintergrundentfernung sofort funktionieren.",
      "opensuse": "zypper bittet beim Aktualisieren darum, den Signaturschlüssel des Repositorys zu akzeptieren.",
      "arch": "Ein signiertes pacman-Repository auf dem openSUSE Build Service — kein AUR nötig.",
      "appimage": "Universell — läuft auf jeder Distribution. Die App aktualisiert sich selbst: Sie lädt das neue AppImage herunter, tauscht sich an Ort und Stelle aus und startet bei Leerlauf neu.",
      "flatpak": "Ein Sideload-Bundle — zum Aktualisieren erneut herunterladen (die App meldet neue Versionen), bis Unisic auf Flathub verfügbar ist."
    },
    "downloadBtn": "Herunterladen",
    "checking": "Neueste Version wird geprüft",
    "latest": "Neueste Version {tag}",
    "fallbackBtn": "Über GitHub Releases herunterladen",
    "fallbackNote": "GitHub konnte gerade nicht erreicht werden, aber jeder Build ist dort verfügbar.",
    "allReleases": "Alle Versionen und ältere Builds",
    "earlyAccess": "Unisic befindet sich im frühen Entwicklerzugang: Es funktioniert, aber rechnen Sie mit Ecken und Kanten bei exotischen Compositoren. Jede Meldung in {link} hilft.",
    "earlyAccessLink": "Issues"
  },
  "hotkeys": {
    "caption": "Standard-Tastenkürzel",
    "action": "Aktion",
    "shortcut": "Tastenkürzel",
    "rows": {
      "full": "Vollbild aufnehmen",
      "region": "Bereich aufnehmen",
      "window": "Aktives Fenster aufnehmen",
      "gif": "GIF aufzeichnen (Bereich)",
      "video": "Video aufzeichnen (Bereich)",
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
      "body": "Unisic nimmt über wlr-screencopy mittels grim auf – lautlos und für mehrere Monitore geeignet. Binden Sie Tastenkürzel in Ihrer Compositor-Konfiguration; eine laufende Instanz übernimmt den Befehl."
    }
  },
  "mainWindow": {
    "ariaLabel": "Das Unisic-Hauptfenster: eine Seitenleiste mit den Seiten Aufnehmen, Aufzeichnen, GIF, Verlauf, Ziele und Einstellungen sowie die Seite Aufnehmen mit Aktionen für Vollbild, Bereich und Fenster plus Umschaltern für die Aktionen nach der Aufnahme.",
    "nav": {
      "capture": "Aufnehmen",
      "record": "Aufzeichnen",
      "gif": "GIF",
      "history": "Verlauf",
      "destinations": "Ziele",
      "settings": "Einstellungen"
    },
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
    "afterCapture": "Nach der Aufnahme",
    "toggles": {
      "editor": "Editor öffnen",
      "clipboard": "Bild in die Zwischenablage kopieren",
      "disk": "Automatisch auf Datenträger speichern",
      "upload": "Hochladen und Link kopieren"
    }
  },
  "editorMockup": {
    "ariaLabel": "Das Unisic-Editorfenster: eine Werkzeugleiste mit zwölf Anmerkungswerkzeugen, ein mit einem Pfeil, einer Hervorhebung und nummerierten Schritten kommentierter Screenshot sowie Aktionen zum Kopieren, Speichern und Hochladen.",
    "title": "Unisic Editor",
    "copy": "Kopieren",
    "save": "Speichern",
    "upload": "Hochladen"
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
