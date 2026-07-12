import { type Dictionary } from "./en";

// Machine-translated (nl) + in-workflow QA pass. Native review recommended.
// Structure validated against en.ts.
export const nl: Dictionary = {
  "meta": {
    "title": "Unisic — Screenshots zoals het hoort op Linux Wayland",
    "description": "Open-source screenshot- en schermrecorder voor Linux Wayland. Annoteer vóór de opname, bewerk erna, neem GIF en video op, upload overal. Geen telemetrie, GPLv3.",
    "ogTitle": "Unisic — Screenshots zoals het hoort op Linux Wayland",
    "ogDescription": "Geruisloos vastleggen, annotatie vóór de opname, een editor met 12 gereedschappen, GIF- en video-opname, direct uploaden. Geen telemetrie, GPLv3.",
    "ogImageAlt": "Unisic screenshot-editor op Linux Wayland"
  },
  "nav": {
    "docs": "Documentatie",
    "skip": "Ga naar inhoud",
    "features": "Functies",
    "recording": "Opnemen",
    "github": "Unisic op GitHub",
    "download": "Downloaden"
  },
  "hero": {
    "headline": "Screenshots zoals het hoort op Linux Wayland.",
    "sub": "Geruisloos vastleggen, annotatie vóór de opname, een editor met 12 gereedschappen, GIF- en video-opname, direct uploaden. Geen telemetrie. GPLv3.",
    "download": "Downloaden",
    "github": "Bekijk op GitHub"
  },
  "usp": {
    "title": "Annoteer nog voor de opname is gemaakt",
    "lede": "De selectie-overlay is een canvas. Teken pijlen, tekst, vervaging en stappen op het bevroren scherm en druk op Enter: de annotaties worden in de opname ingebrand."
  },
  "overlay": {
    "caption": "De Unisic selectie-overlay: een bevroren scherm met een geselecteerd gebied, live pixelafmetingen, een pijl die vóór het vastleggen is getekend en een zwevende werkbalk.",
    "capture": "Vastleggen"
  },
  "features": {
    "title": "Alles na de sneltoets",
    "lede": "De meeste tools geven je een rechthoek met pixels en laten je vervolgens in de steek. Unisic dekt de rest van de workflow.",
    "editor": {
      "title": "Een echte editor, geen bijsnijkader",
      "body": "Twaalf gereedschappen, waaronder markeren, pixeleren, slimme gum, genummerde stappen en bijsnijden. Ongedaan maken, opnieuw, zoomen, allemaal in beeldpixels."
    },
    "upload": {
      "title": "Overal uploaden",
      "body": "Aangepaste HTTP-bestemmingen, import van ShareX-uploaders, FTP en SFTP, ingebouwde hosts. De link belandt op je klembord.",
      "copied": "Gekopieerd"
    },
    "history": {
      "title": "Geschiedenis met miniaturen",
      "body": "Elke opname, slechts één raster verderop. Verwijderen verplaatst het bestand naar de prullenbak, nooit daaraan voorbij."
    },
    "silent": {
      "title": "Geruisloos vastleggen",
      "body": "Geen sluiterflits, geen gejongleer met vensters. Native KWin-pad op Plasma, elders portals."
    },
    "yours": {
      "title": "Helemaal van jou",
      "body": "Geen telemetrie, geen accounts, niets stuurt gegevens naar huis. Gelicentieerd onder GPL-3.0 en openlijk ontwikkeld."
    }
  },
  "recording": {
    "title": "Hetzelfde gebied, als GIF of video",
    "lede": "GIF met een tweefasig palet voor scherpe kleuren, of MP4 en WebM via de ScreenCast-portal, PipeWire en ffmpeg. Neem een gebied, het volledige scherm of een venster op.",
    "note": "{keys} stopt altijd een opname, ongeacht wat de focus heeft.",
    "caption": "Een schermgebied dat wordt opgenomen: Unisic tekent een kader in accentkleur rond het gebied met een REC-badge en een verstreken tijd."
  },
  "themes": {
    "title": "Negen thema's, waaronder dat van jou",
    "lede": "Kies hieronder een palet en zie hoe de app het draagt.",
    "groupLabel": "Bekijk een thema in het app-venster",
    "reset": "Terug naar Unisic",
    "note": "Elke chip kleurt het venster hierboven live opnieuw in. Het negende thema is je systeem: het volgt het lichte of donkere schema en de accentkleur van je bureaublad.",
    "system": "Systeem",
    "systemLabel": "Systeem — volgt het lichte of donkere schema van je bureaublad; hier niet als voorbeeld te bekijken",
    "previewLabel": "Het Unisic-hoofdvenster in het thema {theme}"
  },
  "download": {
    "title": "Unisic installeren",
    "lede": "Vereist een Wayland-sessie met xdg-desktop-portal. Voor opnemen zijn ook PipeWire en ffmpeg nodig.",
    "repoLede": "Kies je distributie — de repository houdt Unisic up-to-date via je pakketbeheerder. AppImage en Flatpak zijn directe downloads.",
    "distroListLabel": "Kies je distributie of pakketformaat",
    "versionLabel": "Versie",
    "copyCmd": "Commando's kopiëren",
    "copiedCmd": "Gekopieerd",
    "steps": {
      "importKey": "Importeer de ondertekeningssleutel van de repository:",
      "addRepo": "Voeg de repository toe:",
      "refreshRepo": "Ververs de repository's:",
      "enableRepo": "Schakel de COPR-repository in:",
      "install": "Installeer Unisic:"
    },
    "notes": {
      "ubuntu": "Ubuntu 25.10 bereikt in juli 2026 het einde van de ondersteuning — kies bij voorkeur 26.04. Beide vereisen Qt 6.5+, dat oudere uitgaven niet meeleveren.",
      "debian": "Vereist Debian 13 (trixie) of nieuwer vanwege Qt 6.5+.",
      "fedora": "Builds voor Fedora 43, 44 en Rawhide. De COPR-build installeert de optionele afhankelijkheden mee, dus opnemen, OCR en achtergrondverwijdering werken meteen.",
      "opensuse": "zypper vraagt je tijdens het verversen om de ondertekeningssleutel van de repository te accepteren.",
      "arch": "Een ondertekende pacman-repository op de openSUSE Build Service — geen AUR nodig.",
      "appimage": "Universeel — draait op elke distributie. De app werkt zichzelf bij: hij downloadt de nieuwe AppImage, wisselt zichzelf ter plekke om en herstart bij inactiviteit.",
      "flatpak": "Een sideload-bundel — download opnieuw om bij te werken (de app meldt wanneer er een nieuwe versie is) totdat Unisic op Flathub verschijnt."
    },
    "downloadBtn": "Downloaden",
    "checking": "De nieuwste release controleren",
    "latest": "Nieuwste release {tag}",
    "fallbackBtn": "Download via GitHub Releases",
    "fallbackNote": "GitHub was zojuist niet bereikbaar, maar elke build staat daar.",
    "allReleases": "Alle releases en oudere builds",
    "earlyAccess": "Unisic bevindt zich in vroege ontwikkelaarstoegang: het werkt, maar verwacht ruwe randjes op exotische compositors. Elke melding in {link} helpt.",
    "earlyAccessLink": "Issues"
  },
  "hotkeys": {
    "caption": "Standaardsneltoetsen",
    "action": "Actie",
    "shortcut": "Sneltoets",
    "rows": {
      "full": "Volledig scherm vastleggen",
      "region": "Gebied vastleggen",
      "window": "Actief venster vastleggen",
      "gif": "GIF opnemen (gebied)",
      "video": "Video opnemen (gebied)",
      "stop": "Opname stoppen (vast)"
    },
    "tryHint": "Deze tabel is live: houd een sneltoets op je toetsenbord ingedrukt en de toetsen lichten op.",
    "note": "Op de vaste stoptoets na zijn alle sneltoetsen aanpasbaar in Instellingen en worden ze direct op het systeem toegepast."
  },
  "reference": {
    "title": "Referentie"
  },
  "compositors": {
    "title": "Werkt met jouw compositor",
    "plasma": {
      "name": "KDE Plasma",
      "body": "Het volledig geruisloze pad: native KWin ScreenShot2 met KGlobalAccel-sneltoetsen. Helemaal geen portal-dialoogvensters."
    },
    "gnome": {
      "name": "GNOME en andere bureaubladen",
      "body": "Vastleggen en opnemen verlopen via xdg-desktop-portal met PipeWire. Standaard, veilig, geen hacks."
    },
    "wlroots": {
      "name": "niri- en wlroots-compositors",
      "body": "Unisic legt vast via wlr-screencopy met grim, geruisloos en veilig voor meerdere monitoren. Koppel sneltoetsen in je compositorconfiguratie; een actieve instantie pikt de opdracht op."
    }
  },
  "mainWindow": {
    "ariaLabel": "Het Unisic-hoofdvenster: een zijbalk met de pagina's Vastleggen, Opnemen, GIF, Geschiedenis, Bestemmingen en Instellingen, en de pagina Vastleggen met acties voor volledig scherm, gebied en venster plus schakelaars voor na het vastleggen.",
    "nav": {
      "capture": "Vastleggen",
      "record": "Opnemen",
      "gif": "GIF",
      "history": "Geschiedenis",
      "destinations": "Bestemmingen",
      "settings": "Instellingen"
    },
    "pageTitle": "Vastleggen",
    "pageSub": "Screenshots belanden in de editor, waar je kunt annoteren en vervolgens opslaan, kopiëren of uploaden.",
    "cards": {
      "fullScreen": {
        "title": "Volledig scherm",
        "sub": "Alle monitoren"
      },
      "region": {
        "title": "Gebied",
        "sub": "Selecteer + live annoteren"
      },
      "window": {
        "title": "Venster",
        "sub": "Actief venster"
      }
    },
    "afterCapture": "Na het vastleggen",
    "toggles": {
      "editor": "Open de editor",
      "clipboard": "Afbeelding naar klembord kopiëren",
      "disk": "Automatisch naar schijf opslaan",
      "upload": "Uploaden en de link kopiëren"
    }
  },
  "editorMockup": {
    "ariaLabel": "Het Unisic-editorvenster: een werkbalk met twaalf annotatiegereedschappen, een screenshot geannoteerd met een pijl, een markering en genummerde stappen, en acties voor kopiëren, opslaan en uploaden.",
    "title": "Unisic Editor",
    "copy": "Kopiëren",
    "save": "Opslaan",
    "upload": "Uploaden"
  },
  "footer": {
    "license": "Gratis en open source, GPL-3.0",
    "nav": "Voettekst",
    "github": "GitHub",
    "releases": "Releases",
    "issues": "Issues",
    "licenseLink": "Licentie"
  },
  "notFound": {
    "code": "Fout 404",
    "title": "Pagina niet gevonden",
    "message": "De pagina die je zocht is verplaatst, hernoemd of heeft nooit bestaan. Laten we je terugbrengen naar vaste grond.",
    "home": "Terug naar home"
  },
  "languageSwitcher": {
    "label": "Taal"
  }
};
