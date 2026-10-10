import { type Dictionary } from "./en";

// Machine-translated (nl) + in-workflow QA pass. Native review recommended.
// Structure validated against en.ts.
export const nl: Dictionary = {
  "meta": {
    "title": "Unisic - Screenshot- en schermrecorder voor Linux",
    "description": "Open-source screenshot- en schermrecorder voor Linux. Annoteer vóór de opname, bewerk erna, neem GIF en video op, upload overal. Geen telemetrie, GPLv3.",
    "ogTitle": "Unisic - Screenshots zoals het hoort op Linux",
    "ogDescription": "Leg vast, annoteer, bewerk, neem op en deel met één sneltoets. Geruisloos vastleggen op Wayland, GIF- en video-opname, OCR, direct uploaden. Geen telemetrie, GPLv3.",
    "ogImageAlt": "Unisic screenshot-editor op Linux"
  },
  "nav": {
    "docs": "Documentatie",
    "skip": "Ga naar inhoud",
    "how": "Hoe het werkt",
    "features": "Functies",
    "github": "Unisic op GitHub",
    "download": "Downloaden"
  },
  "hero": {
    "eyebrow": "Schermafbeeldingen en schermopname voor Linux",
    "headline": "Een screenshottool dat de klus afmaakt.",
    "sub": "Unisic is gratis en open source. Teken op het scherm voordat je het vastlegt, bewerk daarna, neem een GIF of video op en deel de link, alles met één sneltoets.",
    "installLabel": "Installeer in één regel",
    "copy": "Kopiëren",
    "copied": "Gekopieerd",
    "installNote": "Opent een menu. Elke download wordt gecontroleerd met de gepubliceerde SHA-256.",
    "installRead": "Hoe het installatiescript werkt",
    "otherWays": "Andere manieren om te installeren",
    "github": "Bekijk op GitHub",
    "trust": {
      "license": "Gratis, GPL-3.0-licentie",
      "privacy": "Geen telemetrie, geen account",
      "sessions": "Wayland en X11"
    }
  },
  "how": {
    "title": "Hoe het werkt",
    "lede": "Geen installatiewizard en geen account. Installeer het, druk op een sneltoets en ga aan de slag.",
    "steps": {
      "hotkey": {
        "title": "Druk op een sneltoets",
        "body": "{keys} start een gebiedsopname. Volledig scherm en venster hebben eigen toetsen, die je in Instellingen kunt wijzigen."
      },
      "mark": {
        "title": "Markeer het",
        "body": "Teken pijlen, tekst, vervaging en genummerde stappen direct op het bevroren scherm en druk op Enter. De editor heeft meer gereedschappen."
      },
      "share": {
        "title": "Deel het",
        "body": "Sla het op, kopieer het of upload het. Na een upload staat de link al op je klembord."
      }
    }
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
    "lede": "De meeste screenshottools stoppen bij het plaatje. Unisic gaat verder.",
    "editor": {
      "title": "Een echte editor, geen bijsnijkader",
      "body": "Pijlen, vormen, tekst, markeren, vervagen, pixeleren, genummerde stappen, tekstballonnen en bijsnijden. Ongedaan maken, opnieuw en zoomen zo vaak je wilt."
    },
    "ocr": {
      "title": "Tekst uit pixels",
      "body": "Kopieer de tekst uit elk gebied rechtstreeks naar je klembord. QR-codes en streepjescodes worden gedecodeerd naar hun inhoud."
    },
    "upload": {
      "title": "Overal uploaden",
      "body": "Je eigen HTTP-server, ShareX-uploaderbestanden, FTP, SFTP of een ingebouwde host. De link wordt voor je gekopieerd.",
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
      "body": "Geen telemetrie, geen analyse, geen account. Het enige verzoek dat Unisic uit zichzelf doet, is controleren op nieuwe versies. GPL-3.0-licentie en openlijk ontwikkeld."
    }
  },
  "recording": {
    "title": "Neem hetzelfde gebied op als GIF of video",
    "lede": "Leg een gebied, een venster of het hele scherm vast. Bewaar een GIF met zuivere kleuren, of een MP4 of WebM met systeemgeluid, microfoon of geluid van één app. Direct terugspelen houdt de laatste 30 seconden klaar, en je kunt de clip bijsnijden vanuit de melding.",
    "note": "{keys} stopt altijd een opname, ongeacht wat de focus heeft.",
    "caption": "Een schermgebied dat wordt opgenomen: Unisic tekent een kader in accentkleur rond het gebied met een REC-badge en een verstreken tijd."
  },
  "themes": {
    "title": "Thema's, waaronder dat van jou",
    "lede": "Kies hieronder een palet en zie hoe de app het draagt.",
    "groupLabel": "Bekijk een thema in het app-venster",
    "reset": "Terug naar Unisic",
    "note": "Elke chip kleurt het venster hierboven live opnieuw in. Eén thema is je systeem: het volgt het lichte of donkere schema en de accentkleur van je bureaublad.",
    "system": "Systeem",
    "systemLabel": "Systeem: volgt het lichte of donkere schema van je bureaublad; hier niet als voorbeeld te bekijken",
    "previewLabel": "Het Unisic-hoofdvenster in het thema {theme}"
  },
  "download": {
    "title": "Unisic installeren",
    "lede": "Gemaakt voor Wayland, en het draait ook op X11. Kies hoe je het wilt installeren.",
    "points": {
      "verify": "Elke download wordt gecontroleerd met zijn SHA-256",
      "noRoot": "De AppImage heeft geen root nodig en werkt zichzelf bij",
      "free": "Gratis en open source, GPL-3.0"
    },
    "or": "Of kies je systeem",
    "repoLede": "AppImage is de aanbevolen weg: één bestand, geen root, en het vervangt zichzelf zodra er een nieuwe versie is. Kies anders je distributie: de repository houdt Unisic up-to-date via je pakketbeheerder; de release bevat ook losse .deb-, .rpm- en Arch-pakketten die bij de eerste installatie de repository instellen.",
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
      "ubuntu": "Ubuntu 25.10 bereikt in juli 2026 het einde van de ondersteuning, kies dus bij voorkeur 26.04. Beide vereisen Qt 6.5+, dat oudere uitgaven niet meeleveren.",
      "debian": "Vereist Debian 13 (trixie) of nieuwer vanwege Qt 6.5+.",
      "fedora": "Builds voor Fedora 43, 44 en Rawhide. Alle vereiste afhankelijkheden worden met het pakket geïnstalleerd, dus opnemen, OCR en QR-decodering werken meteen.",
      "opensuse": "zypper vraagt je tijdens het verversen om de ondertekeningssleutel van de repository te accepteren.",
      "arch": "Een ondertekende pacman-repository op de openSUSE Build Service. Geen AUR nodig.",
      "nix": "Draait overal waar Nix draait, ook op NixOS. Probeer het met nix run of voeg de flake toe als input voor een declaratieve configuratie; schakel op NixOS xdg.portal en PipeWire in.",
      "appimage": "Aanbevolen. Universeel: draait op elke distributie, heeft geen root nodig en installeert niets in je systeem. De app werkt zichzelf bij: de nieuwe release wordt gedownload, gecontroleerd tegen de SHA-256 die ervoor is gepubliceerd en ter plekke omgewisseld, en Unisic herstart zodra je inactief bent."
    },
    "downloadBtn": "Downloaden",
    "checking": "De nieuwste release controleren",
    "latest": "Nieuwste release {tag}",
    "fallbackBtn": "Download via GitHub Releases",
    "fallbackNote": "GitHub was zojuist niet bereikbaar, maar elke build staat daar.",
    "allReleases": "Alle releases en oudere builds",
    "stability": "Unisic is in bèta. Als het zich op jouw bureaublad misdraagt, helpt een melding in {link}.",
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
    "ariaLabel": "Het Unisic-hoofdvenster: een zijbalk met de pagina's Vastleggen, Opnemen en Bewerken boven een bibliotheek met Geschiedenis en Servers, en de pagina Vastleggen met acties voor volledig scherm, gebied en venster plus het raster met opnameopties.",
    "nav": {
      "capture": "Vastleggen",
      "record": "Opnemen",
      "edit": "Bewerken",
      "history": "Geschiedenis",
      "servers": "Servers"
    },
    "library": "Bibliotheek",
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
    "options": {
      "title": "Opname-opties",
      "delay": "Opnamevertraging",
      "repeat": "Laatste gebied herhalen",
      "repeatAction": "Herhalen",
      "server": "Uploadserver",
      "cursor": "Muisaanwijzer meenemen",
      "editor": "Open de editor",
      "clipboard": "Afbeelding naar klembord kopiëren",
      "disk": "Automatisch naar schijf opslaan",
      "upload": "Uploaden en de link kopiëren"
    }
  },
  "editorMockup": {
    "ariaLabel": "Het Unisic-editorvenster: een gereedschapskaart met de annotatiegereedschappen boven de geopende vormengroep en de lijnopties, een screenshot met een pijl, een markering en genummerde stappen, en de acties kopiëren, opslaan en uploaden.",
    "title": "Unisic Editor",
    "stroke": "Lijn",
    "copy": "Kopiëren",
    "save": "Opslaan",
    "upload": "Uploaden",
    "more": "Meer"
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
