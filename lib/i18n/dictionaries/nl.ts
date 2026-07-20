import { type Dictionary } from "./en";

// Machine-translated (nl) + in-workflow QA pass. Native review recommended.
// Structure validated against en.ts.
export const nl: Dictionary = {
  "meta": {
    "title": "Unisic — Screenshot- en schermrecorder voor Linux",
    "description": "Open-source screenshot- en schermrecorder voor Linux. Annoteer vóór de opname, bewerk erna, neem GIF en video op, upload overal. Geen telemetrie, GPLv3.",
    "ogTitle": "Unisic — Screenshots zoals het hoort op Linux",
    "ogDescription": "Geruisloos vastleggen, annotatie vóór de opname, een editor met 15 gereedschappen, GIF- en video-opname, OCR, direct uploaden. Geen telemetrie, GPLv3.",
    "ogImageAlt": "Unisic screenshot-editor op Linux"
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
    "headline": "Screenshots zoals het hoort op Linux.",
    "sub": "Geruisloos vastleggen, annotatie vóór de opname, een editor met 15 gereedschappen, GIF- en video-opname, OCR, direct uploaden. Geen telemetrie. GPLv3.",
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
      "body": "Vijftien gereedschappen, waaronder markeren, pixeleren, slimme gum, tekstballon, meten, genummerde stappen en bijsnijden. Ongedaan maken, opnieuw, zoomen, allemaal in beeldpixels."
    },
    "ocr": {
      "title": "Tekst uit pixels",
      "body": "OCR een gebied rechtstreeks naar je klembord, of kies losse woorden in de editor om ze te kopiëren, te markeren of onleesbaar te maken. QR-codes worden gedecodeerd naar hun inhoud."
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
    "lede": "GIF met een tweefasig palet voor scherpe kleuren, of MP4 en WebM met optioneel geluid van het systeem, de microfoon of één enkele app — via de ScreenCast-portal, PipeWire en ffmpeg. Neem een gebied, het volledige scherm of een venster op, laat instant replay de laatste 30 seconden bufferen en knip het resultaat direct bij vanuit de meldingskaart.",
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
    "repoLede": "Kies je distributie — de repository houdt Unisic up-to-date via je pakketbeheerder. AppImage is een directe download, en de release bevat ook losse .deb-, .rpm- en Arch-pakketten die bij de eerste installatie de repository instellen.",
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
      "fedora": "Builds voor Fedora 43, 44 en Rawhide. De COPR-build installeert de optionele afhankelijkheden mee, dus opnemen, OCR en QR-decodering werken meteen.",
      "opensuse": "zypper vraagt je tijdens het verversen om de ondertekeningssleutel van de repository te accepteren.",
      "arch": "Een ondertekende pacman-repository op de openSUSE Build Service — geen AUR nodig.",
      "appimage": "Universeel — draait op elke distributie. De app werkt zichzelf bij via ingebouwde zsync: alleen de gewijzigde blokken worden gedownload en ter plekke omgewisseld, en hij herstart bij inactiviteit."
    },
    "downloadBtn": "Downloaden",
    "checking": "De nieuwste release controleren",
    "latest": "Nieuwste release {tag}",
    "fallbackBtn": "Download via GitHub Releases",
    "fallbackNote": "GitHub was zojuist niet bereikbaar, maar elke build staat daar.",
    "allReleases": "Alle releases en oudere builds",
    "stability": "Unisic 0.7 is de eerste stabiele release. Als je compositor toch nog een manier vindt om hem te verrassen, helpt elke melding in {link}.",
    "stabilityLink": "Issues"
  },
  "hotkeys": {
    "caption": "Standaardsneltoetsen",
    "action": "Actie",
    "shortcut": "Sneltoets",
    "rows": {
      "full": "Volledig scherm vastleggen",
      "region": "Gebied vastleggen",
      "window": "Actief venster vastleggen",
      "gif": "GIF opnemen (starten/stoppen)",
      "video": "Video opnemen (starten/stoppen)",
      "ocr": "OCR op gebied (tekst kopiëren)",
      "copyLast": "Laatste opname kopiëren",
      "quickTask": "Kiezer voor snelle taken openen",
      "replay": "Instant replay starten/opslaan",
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
    "ariaLabel": "Het Unisic-hoofdvenster: een zijbalk met de pagina's Vastleggen, Opnemen, GIF, Bewerken, Geschiedenis, Servers en Instellingen, en de pagina Vastleggen met acties voor volledig scherm, gebied en venster plus schakelaars voor na het vastleggen.",
    "nav": {
      "capture": "Vastleggen",
      "record": "Opnemen",
      "gif": "GIF",
      "edit": "Bewerken",
      "history": "Geschiedenis",
      "servers": "Servers",
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
    "ariaLabel": "Het Unisic-editorvenster: een werkbalk met vijftien annotatiegereedschappen, een screenshot geannoteerd met een pijl, een markering en genummerde stappen, en acties voor kopiëren, opslaan en uploaden.",
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
