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
    "caption": "Das Unisic Auswahl-Overlay: ein eingefrorener Bildschirm mit einem ausgewählten Bereich, Live-Pixelmaßen, einem vor der Aufnahme gezeichneten Pfeil und einer schwebenden Werkzeugleiste. Ziehen Sie an einer Ecke, um die Größe des Bereichs zu ändern, oder ziehen Sie im Inneren, um ihn zu verschieben.",
    "hint": "Live-Demo: Ziehen Sie an einer Ecke, um die Größe zu ändern, oder ziehen Sie im Inneren, um den Bereich zu verschieben.",
    "resizeHandle": "Größe der Auswahl an der Ecke {corner} ändern",
    "corners": {
      "tl": "oben links",
      "tr": "oben rechts",
      "bl": "unten links",
      "br": "unten rechts"
    },
    "capture": "Aufnehmen"
  },
  "features": {
    "title": "Alles nach dem Tastenkürzel",
    "lede": "Die meisten Tools liefern Ihnen ein Rechteck aus Pixeln und lassen Sie dann allein. Unisic deckt den Rest des Arbeitsablaufs ab.",
    "editor": {
      "title": "Ein echter Editor, keine Zuschneidebox",
      "body": "Zwölf Werkzeuge, darunter Hervorheben, Verpixeln, intelligenter Radierer, nummerierte Schritte und Zuschneiden. Rückgängig, Wiederholen, Zoom – alles im Bildpixel-Raum. Diese Karte führt sie gerade jetzt aus."
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
  "editorDemo": {
    "groupLabel": "Anmerkungswerkzeuge (Live-Demo)",
    "tools": {
      "pen": "Stift",
      "line": "Linie",
      "arrow": "Pfeil",
      "rect": "Rechteck",
      "ellipse": "Ellipse",
      "text": "Text",
      "highlight": "Hervorheben",
      "blur": "Unschärfe",
      "pixelate": "Verpixeln",
      "eraser": "Intelligenter Radierer (Zeichnung anklicken)",
      "step": "Schrittmarkierung"
    },
    "undo": "Rückgängig",
    "redo": "Wiederholen",
    "capture": "Aufnehmen",
    "clear": "Alle Anmerkungen löschen",
    "clearTitle": "Löschen",
    "strokeLabel": "Strich in {color}",
    "textLabel": "Anmerkungstext",
    "textPlaceholder": "Tippen, dann Enter",
    "captured": "Aufgenommen",
    "hint": "Live-Demo: Wählen Sie ein Werkzeug und ziehen Sie auf der Leinwand.",
    "swatchNames": {
      "red": "Rot",
      "yellow": "Gelb",
      "green": "Grün",
      "blue": "Blau",
      "lilac": "Flieder",
      "white": "Weiß",
      "navy": "Marineblau"
    }
  },
  "recording": {
    "title": "Derselbe Bereich, als GIF oder Video",
    "lede": "GIF mit einer Zwei-Pass-Palette für klare Farben oder MP4 und WebM über das ScreenCast-Portal, PipeWire und ffmpeg. Nehmen Sie einen Bereich, den gesamten Bildschirm oder ein Fenster auf.",
    "note": "{keys} stoppt immer eine Aufzeichnung, egal was gerade den Fokus hat. Probieren Sie es gleich an der Demo aus.",
    "stopLabel": "Die Demo-Aufzeichnung stoppen (Strg+Esc funktioniert auch)",
    "restartLabel": "Die Demo-Aufzeichnung neu starten",
    "stop": "Stopp",
    "restart": "Neu starten",
    "saved": "Gespeichert",
    "caption": "Ein Bildschirmbereich wird aufgezeichnet: Unisic zeichnet einen akzentfarbenen Rahmen um den Bereich mit einem REC-Symbol und einem laufenden Timer. Die Demo-Aufzeichnung kann gestoppt und neu gestartet werden."
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
    "checking": "Neueste Version wird geprüft",
    "latest": "Neueste Version {tag}",
    "fallbackBtn": "Über GitHub Releases herunterladen",
    "fallbackNote": "GitHub konnte gerade nicht erreicht werden, aber jeder Build ist dort verfügbar.",
    "allReleases": "Alle Versionen und ältere Builds",
    "coprTitle": "Nutzen Sie Fedora? Verwenden Sie das COPR-Repo",
    "coprBody": "Builds für Fedora 43, 44 und Rawhide. Updates kommen zusammen mit dem Rest des Systems über {code}. Details auf der {link}.",
    "coprLink": "COPR-Projektseite",
    "coprCopy": "Befehl kopieren",
    "coprCopied": "Kopiert",
    "appimageTitle": "AppImage",
    "appimageBody": "Enthält zsync-Update-Informationen: Führen Sie AppImageUpdate für die Datei aus, um ein differenzielles Update zu erhalten.",
    "flatpakTitle": "Flatpak",
    "flatpakBody": "Das Bundle ist ein Sideload. Laden Sie es zum Aktualisieren erneut herunter, bis Unisic auf Flathub verfügbar ist.",
    "debTitle": "deb, Arch",
    "debBody": "Installieren Sie das neue Paket über das alte. Bauen Sie lieber aus dem Quellcode? Die README hilft Ihnen weiter.",
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
