import type { Dictionary } from "./en.ts";

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
    "headline": "Vastleggen, markeren, delen. {mark}",
    "headlineMark": "Eén sneltoets.",
    "sub": "Teken op het scherm voordat de schermafbeelding wordt gemaakt, neem een GIF of video op, en de deellink staat al op je klembord.",
    "installLabel": "Installeer in één regel",
    "copy": "Kopiëren",
    "copied": "Gekopieerd",
    "installNote": "Opent een menu. Elke download wordt gecontroleerd met de gepubliceerde SHA-256.",
    "installRead": "Hoe het installatiescript werkt",
    "otherWays": "Andere manieren om te installeren",
    "github": "Bekijk op GitHub",
    "windowHint": "Nagebouwd uit de eigen QML en thema's van de app. Klik door de zijbalk."
  },
  "how": {
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
    "lede": "De selectie-overlay is ook een canvas. Wat je op het bevroren scherm tekent, gaat direct de opname in, zonder omweg via een editor."
  },
  "overlay": {
    "caption": "De Unisic selectie-overlay: een bevroren scherm met een geselecteerd gebied, live pixelafmetingen, een pijl die vóór het vastleggen is getekend en een zwevende werkbalk.",
    "capture": "Vastleggen"
  },
  "features": {
    "title": "Alles na de sneltoets",
    "editor": {
      "title": "Een volwaardige editor",
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
      "title": "Geen telemetrie, geen account",
      "body": "Het enige verzoek dat Unisic uit zichzelf doet, is controleren op nieuwe versies. GPL-3.0-licentie en openlijk ontwikkeld."
    }
  },
  "recording": {
    "title": "Neem hetzelfde gebied op als GIF of video",
    "lede": "Leg een gebied, een venster of het hele scherm vast. Bewaar een GIF, of een MP4 of WebM met systeemgeluid, microfoon of geluid van één app. Direct terugspelen houdt de laatste 30 seconden klaar.",
    "note": "{keys} stopt altijd een opname, ongeacht wat de focus heeft.",
    "caption": "Een schermgebied dat wordt opgenomen: Unisic tekent een kader in accentkleur rond het gebied met een REC-badge en een verstreken tijd."
  },
  "themes": {
    "title": "Thema's, waaronder dat van jou",
    "lede": "Kies hieronder een palet en zie hoe de app het draagt.",
    "groupLabel": "Thema voor deze pagina",
    "note": "Elke chip kleurt deze hele pagina in dat palet, met de waarden die de app meelevert. De eerste volgt het lichte of donkere schema van je bureaublad.",
    "system": "Systeem"
  },
  "download": {
    "title": "Unisic installeren",
    "lede": "Gemaakt voor Wayland, en het draait ook op X11. Kies hoe je het wilt installeren.",
    "points": {
      "verify": "Elke download wordt gecontroleerd met zijn SHA-256",
      "noRoot": "De AppImage heeft geen root nodig en werkt zichzelf bij",
      "free": "Gratis en open source, GPL-3.0"
    },
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
      "appimage": "Aanbevolen. Universeel: draait op elke distributie, heeft geen root nodig en installeert niets in je systeem. De app werkt zichzelf bij: de nieuwe release wordt gedownload, gecontroleerd tegen de SHA-256 die ervoor is gepubliceerd en ter plekke omgewisseld, en Unisic herstart zodra je inactief bent.",
      "windows": "Experimenteel, voor Windows 11 en volledig door AI geschreven. Het installatieprogramma installeert het alleen voor jouw account, zonder beheerdersrechten. Op de releasepagina staat ook een draagbare zip. Werkt zichzelf bij, net als de AppImage. Eén los venster opnemen kan daar nog niet."
    },
    "downloadBtn": "Downloaden",
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
      "replay": "Instant replay starten/opslaan",
      "stop": "Opname stoppen (vast)"
    },
    "note": "Op de vaste stoptoets na zijn alle sneltoetsen aanpasbaar in Instellingen en worden ze direct op het systeem toegepast."
  },
  "reference": {
    "title": "Desktopondersteuning en sneltoetsen"
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
  "cli": {
    "title": "Bestuur het vanuit een terminal",
    "lede": "Elke opnamemodus is een vlag, dus een sneltoets van je compositor, een script of een cronjob kan hem starten. Met --output - gaat de afbeelding naar stdout."
  },
  "app": {
    "record": {
      "title": "Schermopname",
      "gifTitle": "GIF-opname",
      "sub": "Neem het volledige scherm, een gebied of één venster op naar een videobestand.",
      "gifSub": "Neem een gebied of een heel scherm direct op als geoptimaliseerde .gif.",
      "video": "Video",
      "gif": "GIF",
      "screen": "Scherm",
      "region": "Gebied",
      "window": "Venster",
      "pause": "Pauze",
      "stop": "Stop",
      "startReplay": "Replay starten",
      "videoOptions": "Video-opties",
      "gifOptions": "GIF-opties",
      "format": "Formaat",
      "frameRate": "Framerate",
      "quality": "Kwaliteit",
      "qualitySub": "Hoger is scherper en groter. 50% is de gebalanceerde standaard.",
      "maxDuration": "Maximale duur",
      "cursor": "Muiscursor meenemen",
      "audio": "Audio en replay",
      "systemAudio": "Systeemgeluid opnemen",
      "mic": "Microfoon opnemen",
      "appAudio": "Alleen geluid van één app",
      "replayLength": "Replay-lengte",
      "off": "Uit",
      "refresh": "Vernieuwen",
      "noWindowGif": "Niet beschikbaar: GIF heeft geen bron voor één venster",
      "fast": "Snel / klein",
      "balanced": "Gebalanceerd",
      "best": "Beste",
      "goodToKnow": "Goed om te weten",
      "gifNoAudio": "GIF heeft geen audiospoor. Wil je een clip met geluid, schakel dan naar de modus Video en neem een MP4 of WebM op.",
      "gifSize": "De bestandsgrootte groeit snel met oppervlak, framerate en duur. Een klein gebied op 15-30 FPS ziet er meestal prima uit en blijft makkelijk te delen."
    },
    "edit": {
      "title": "Bewerken",
      "sub": "Open een afbeelding of video die je al hebt - in dezelfde editor en hetzelfde trimvenster als je opnamen.",
      "image": "Afbeelding bewerken",
      "imageSub": "Annoteren, bijsnijden, vervagen",
      "video": "Video inkorten",
      "videoSub": "Knip een begin en een einde af",
      "tip": "Een afbeelding bewerken raakt het origineel nooit aan: de editor slaat op waar je opnamen terechtkomen, onder een nieuwe naam, tenzij je het zelf overschrijft. Inkorten schrijft altijd een nieuw bestand naast de bron."
    },
    "history": {
      "title": "Geschiedenis",
      "items": "{n} items",
      "search": "Zoek op naam of link",
      "clear": "Alles wissen",
      "all": "Alle",
      "images": "Afbeeldingen",
      "gifs": "GIF's",
      "recordings": "Opnamen",
      "clips": "Clips",
      "starred": "Met ster",
      "uploaded": "Geüpload",
      "today": "Vandaag",
      "empty": "Nog niets hier. Schermafbeeldingen en opnamen verschijnen hier met miniaturen."
    },
    "servers": {
      "title": "Servers",
      "sub": "Modulaire uploaders: eigen HTTP-API's plus FTP/SFTP via curl. Na elke upload staat de link op je klembord.",
      "add": "Eigen server toevoegen",
      "import": ".sxcu importeren",
      "active": "Actieve server",
      "use": "Gebruiken",
      "needsClientId": "Client-ID nodig",
      "needsUserKey": "Gebruikerssleutel nodig"
    },
    "modes": {
      "shot": "Schermafbeelding",
      "measure": "Meten",
      "ocr": "Tekst lezen",
      "gif": "GIF opnemen",
      "video": "Video opnemen"
    },
    "hint": {
      "shot": "Sleep om te selecteren · klik voor het hele scherm · Ctrl+slepen om te verplaatsen · annoteer met de werkbalk · Spatie/Enter of dubbelklik om vast te leggen · Esc om te annuleren",
      "measure": "Sleep om te meten · Tab: afstand/grootte · Ctrl+C kopieert de maten · Esc om te sluiten",
      "ocr": "Sleep om te selecteren · Ctrl+slepen om te verplaatsen · Spatie/Enter leest de tekst · Esc om te annuleren",
      "gif": "Sleep om te selecteren · Ctrl+slepen om te verplaatsen · Spatie/Enter start de GIF · Esc om te annuleren",
      "video": "Sleep om te selecteren · Ctrl+slepen om te verplaatsen · Spatie/Enter start de video · Esc om te annuleren"
    },
    "tools": {
      "edit": "Vormen bewerken",
      "pen": "Pen",
      "shapes": "Vormen",
      "text": "Tekst",
      "highlight": "Markeren",
      "blur": "Vervagen",
      "pixelate": "Pixeleren",
      "eraser": "Slimme gum",
      "magnify": "Vergrootglas",
      "eyedropper": "Pipet",
      "step": "Stapmarkering",
      "crop": "Bijsnijden",
      "undo": "Ongedaan maken",
      "redo": "Opnieuw",
      "line": "Lijn",
      "arrow": "Pijl",
      "measure": "Meten",
      "rect": "Rechthoek",
      "ellipse": "Ellips",
      "callout": "Tekstballon"
    },
    "toolbar": "Werkbalk voor opnamen",
    "cancel": "Annuleren"
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
