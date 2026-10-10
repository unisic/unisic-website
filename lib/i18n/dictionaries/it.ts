import { type Dictionary } from "./en";

// Machine-translated (it) + in-workflow QA pass. Native review recommended.
// Structure validated against en.ts.
export const it: Dictionary = {
  "meta": {
    "title": "Unisic - Screenshot e registrazione schermo su Linux",
    "description": "Strumento open-source di screenshot e registrazione schermo per Linux. Annota prima dello scatto, modifica dopo, registra GIF e video, carica ovunque. Zero telemetria, GPLv3.",
    "ogTitle": "Unisic - Screenshot fatti bene su Linux",
    "ogDescription": "Cattura, annota, modifica, registra e condividi con un solo tasto rapido. Cattura silenziosa su Wayland, registrazione GIF e video, OCR, caricamento istantaneo. Zero telemetria, GPLv3.",
    "ogImageAlt": "Editor di screenshot Unisic su Linux"
  },
  "nav": {
    "docs": "Documentazione",
    "skip": "Vai al contenuto",
    "how": "Come funziona",
    "features": "Funzionalità",
    "github": "Unisic su GitHub",
    "download": "Scarica"
  },
  "hero": {
    "eyebrow": "Screenshot e registrazione dello schermo per Linux",
    "headline": "Uno strumento per screenshot che porta a termine il lavoro.",
    "sub": "Unisic è gratuito e open source. Disegna sullo schermo prima di catturarlo, modifica dopo, registra una GIF o un video e condividi il link, tutto con un solo tasto rapido.",
    "installLabel": "Installa in una riga",
    "copy": "Copia",
    "copied": "Copiato",
    "installNote": "Apre un menu. Ogni download viene verificato con il suo SHA-256 pubblicato.",
    "installRead": "Come funziona l'installer",
    "otherWays": "Altri modi per installare",
    "github": "Vedi su GitHub",
    "trust": {
      "license": "Gratuito, con licenza GPL-3.0",
      "privacy": "Nessuna telemetria, nessun account",
      "sessions": "Wayland e X11"
    }
  },
  "how": {
    "title": "Come funziona",
    "lede": "Nessuna procedura guidata e nessun account. Installalo, premi un tasto rapido e lavora da lì.",
    "steps": {
      "hotkey": {
        "title": "Premi un tasto rapido",
        "body": "{keys} avvia una cattura di area. Schermo intero e finestra hanno i loro tasti, che puoi cambiare nelle Impostazioni."
      },
      "mark": {
        "title": "Annotalo",
        "body": "Disegna frecce, testo, sfocatura e passaggi numerati direttamente sullo schermo congelato, poi premi Invio. L'editor ha altri strumenti."
      },
      "share": {
        "title": "Condividilo",
        "body": "Salvalo, copialo o caricalo. Dopo il caricamento il link è già negli appunti."
      }
    }
  },
  "usp": {
    "title": "Annota ancora prima di scattare",
    "lede": "L'overlay di selezione è una tela. Disegna frecce, testo, sfocature e passaggi sullo schermo congelato, poi premi Invio: le annotazioni vengono impresse nella cattura."
  },
  "overlay": {
    "caption": "L'overlay di selezione di Unisic: uno schermo congelato con una regione selezionata, dimensioni in pixel in tempo reale, una freccia disegnata prima della cattura e una barra degli strumenti fluttuante.",
    "capture": "Cattura"
  },
  "features": {
    "title": "Tutto ciò che viene dopo la scorciatoia",
    "lede": "La maggior parte degli strumenti per screenshot si ferma all'immagine. Unisic va avanti.",
    "editor": {
      "title": "Un vero editor, non un riquadro di ritaglio",
      "body": "Frecce, forme, testo, evidenziatore, sfocatura, pixelatura, passaggi numerati, callout e ritaglio. Annulla, ripeti e ingrandisci quanto vuoi."
    },
    "ocr": {
      "title": "Testo dai pixel",
      "body": "Copia il testo di qualsiasi area direttamente negli appunti. I codici QR e i codici a barre vengono decodificati nel loro contenuto."
    },
    "upload": {
      "title": "Carica ovunque",
      "body": "Il tuo server HTTP, file uploader di ShareX, FTP, SFTP o un host integrato. Il link viene copiato per te.",
      "copied": "Copiato"
    },
    "history": {
      "title": "Cronologia con miniature",
      "body": "Ogni cattura, a una griglia di distanza. L'eliminazione sposta il file nel cestino, mai oltre."
    },
    "silent": {
      "title": "Cattura silenziosa",
      "body": "Nessun flash dell'otturatore, nessun destreggiarsi tra finestre. Percorso nativo KWin su Plasma, portali in tutti gli altri casi."
    },
    "yours": {
      "title": "Tuo, interamente",
      "body": "Nessuna telemetria, nessuna analisi, nessun account. L'unica richiesta che Unisic fa da solo è il controllo delle nuove versioni. Con licenza GPL-3.0 e sviluppato in aperto."
    }
  },
  "recording": {
    "title": "Registra la stessa area come GIF o video",
    "lede": "Cattura un'area, una finestra o l'intero schermo. Salva una GIF dai colori nitidi, oppure un MP4 o WebM con audio di sistema, microfono o di una sola app. Il replay istantaneo tiene pronti gli ultimi 30 secondi e puoi tagliare la clip dalla notifica.",
    "note": "{keys} interrompe sempre una registrazione, indipendentemente da cosa ha il focus.",
    "caption": "Una regione dello schermo in fase di registrazione: Unisic disegna una cornice con il colore d'accento attorno alla regione con un badge REC e un timer del tempo trascorso."
  },
  "themes": {
    "title": "Temi, incluso il tuo",
    "lede": "Scegli una palette qui sotto e guarda l'app indossarla.",
    "groupLabel": "Anteprima di un tema nella finestra dell'app",
    "reset": "Ripristina su Unisic",
    "note": "Ogni chip ridipinge la finestra qui sopra in tempo reale. Un tema è il tuo sistema: segue lo schema chiaro o scuro del desktop e il colore d'accento.",
    "system": "Sistema",
    "systemLabel": "Sistema: segue lo schema chiaro o scuro del tuo desktop; non visualizzabile in anteprima qui",
    "previewLabel": "La finestra principale di Unisic nel tema {theme}"
  },
  "download": {
    "title": "Installa Unisic",
    "lede": "Pensato per Wayland, funziona anche su X11. Scegli come vuoi installarlo.",
    "points": {
      "verify": "Ogni download viene verificato con il suo SHA-256",
      "noRoot": "L'AppImage non richiede root e si aggiorna da sola",
      "free": "Gratuito e open source, GPL-3.0"
    },
    "or": "Oppure scegli il tuo sistema",
    "repoLede": "AppImage è la via consigliata: un solo file, senza root, e si sostituisce da solo quando esce una nuova versione. In alternativa scegli la tua distribuzione: il repository mantiene Unisic aggiornato tramite il gestore di pacchetti; la release include anche pacchetti una tantum .deb, .rpm e Arch che configurano il repository alla prima installazione.",
    "distroListLabel": "Scegli la tua distribuzione o il formato di pacchetto",
    "versionLabel": "Versione",
    "copyCmd": "Copia comandi",
    "copiedCmd": "Copiato",
    "steps": {
      "importKey": "Importa la chiave di firma del repository:",
      "addRepo": "Aggiungi il repository:",
      "refreshRepo": "Aggiorna i repository:",
      "enableRepo": "Abilita il repository COPR:",
      "install": "Installa Unisic:"
    },
    "notes": {
      "ubuntu": "Ubuntu 25.10 raggiunge il fine supporto a luglio 2026, quindi meglio scegliere la 26.04. Entrambe richiedono Qt 6.5+, assente nelle versioni più vecchie.",
      "debian": "Richiede Debian 13 (trixie) o più recente per Qt 6.5+.",
      "fedora": "Build per Fedora 43, 44 e Rawhide. Tutte le dipendenze richieste vengono installate con il pacchetto, quindi registrazione, OCR e decodifica dei codici QR funzionano subito.",
      "opensuse": "Durante il refresh zypper chiederà di accettare la chiave di firma del repository.",
      "arch": "Un repository pacman firmato su openSUSE Build Service. Niente AUR.",
      "nix": "Funziona ovunque ci sia Nix, incluso NixOS. Provalo con nix run oppure aggiungi il flake come input per una configurazione dichiarativa; su NixOS abilita xdg.portal e PipeWire.",
      "appimage": "Consigliato. Universale: funziona su qualsiasi distribuzione, non richiede root e non installa nulla nel sistema. Si aggiorna da solo: la nuova release viene scaricata, verificata con lo SHA-256 pubblicato per essa e sostituita sul posto, e Unisic si riavvia quando sei inattivo."
    },
    "downloadBtn": "Scarica",
    "checking": "Verifica dell'ultima release",
    "latest": "Ultima release {tag}",
    "fallbackBtn": "Scaricalo da GitHub Releases",
    "fallbackNote": "Non è stato possibile raggiungere GitHub in questo momento, ma ogni build si trova lì.",
    "allReleases": "Tutte le release e le build precedenti",
    "stability": "Unisic è in beta. Se si comporta male sul tuo desktop, una segnalazione in {link} aiuta.",
    "stabilityLink": "Issue"
  },
  "hotkeys": {
    "caption": "Scorciatoie predefinite",
    "action": "Azione",
    "shortcut": "Scorciatoia",
    "rows": {
      "full": "Cattura schermo intero",
      "region": "Cattura regione",
      "window": "Cattura finestra attiva",
      "gif": "Registra GIF (avvia/interrompi)",
      "video": "Registra video (avvia/interrompi)",
      "ocr": "OCR di una regione (copia il testo)",
      "copyLast": "Copia l'ultima cattura",
      "quickTask": "Apri il selettore di attività rapide",
      "replay": "Avvia/salva il replay istantaneo",
      "stop": "Interrompi registrazione (fissa)"
    },
    "tryHint": "Questa tabella è dal vivo: tieni premuta una scorciatoia sulla tastiera e i tasti si illuminano.",
    "note": "Tutte le scorciatoie, tranne il tasto di stop fisso, sono modificabili nelle Impostazioni e applicate al sistema immediatamente."
  },
  "reference": {
    "title": "Riferimento"
  },
  "compositors": {
    "title": "Funziona con il tuo compositor",
    "plasma": {
      "name": "KDE Plasma",
      "body": "Il percorso totalmente silenzioso: KWin ScreenShot2 nativo con scorciatoie KGlobalAccel. Nessun dialogo dei portali."
    },
    "gnome": {
      "name": "GNOME e altri desktop",
      "body": "Catture e registrazione passano attraverso xdg-desktop-portal con PipeWire. Standard, sicuro, senza trucchi."
    },
    "wlroots": {
      "name": "niri e compositor wlroots",
      "body": "Unisic cattura tramite wlr-screencopy con grim, in modo silenzioso e sicuro su più monitor. Associa le scorciatoie nella configurazione del tuo compositor; un'istanza in esecuzione recepisce il comando."
    }
  },
  "mainWindow": {
    "ariaLabel": "La finestra principale di Unisic: una barra laterale con le pagine Cattura, Registra e Modifica sopra una libreria con Cronologia e Server, e la pagina Cattura con le azioni schermo intero, regione e finestra più la griglia delle opzioni di cattura.",
    "nav": {
      "capture": "Cattura",
      "record": "Registra",
      "edit": "Modifica",
      "history": "Cronologia",
      "servers": "Server"
    },
    "library": "Libreria",
    "pageTitle": "Cattura",
    "pageSub": "Gli screenshot arrivano nell'editor, dove puoi annotare, poi salvare, copiare o caricare.",
    "cards": {
      "fullScreen": {
        "title": "Schermo intero",
        "sub": "Tutti i monitor"
      },
      "region": {
        "title": "Regione",
        "sub": "Seleziona + annota dal vivo"
      },
      "window": {
        "title": "Finestra",
        "sub": "Finestra attiva"
      }
    },
    "options": {
      "title": "Opzioni di cattura",
      "delay": "Ritardo di cattura",
      "repeat": "Ripeti l'ultima regione",
      "repeatAction": "Ripeti",
      "server": "Server di caricamento",
      "cursor": "Includi il cursore del mouse",
      "editor": "Apri l'editor",
      "clipboard": "Copia l'immagine negli appunti",
      "disk": "Salva su disco automaticamente",
      "upload": "Carica e copia il link"
    }
  },
  "editorMockup": {
    "ariaLabel": "La finestra dell'editor di Unisic: una scheda strumenti con gli strumenti di annotazione sopra il gruppo forme aperto e le sue opzioni di tratto, uno screenshot annotato con una freccia, un'evidenziazione e passaggi numerati, e le azioni copia, salva e carica.",
    "title": "Editor Unisic",
    "stroke": "Tratto",
    "copy": "Copia",
    "save": "Salva",
    "upload": "Carica",
    "more": "Altro"
  },
  "footer": {
    "license": "Gratuito e open source, GPL-3.0",
    "nav": "Piè di pagina",
    "github": "GitHub",
    "releases": "Release",
    "issues": "Issue",
    "licenseLink": "Licenza"
  },
  "notFound": {
    "code": "Errore 404",
    "title": "Pagina non trovata",
    "message": "La pagina che cercavi è stata spostata, rinominata o non è mai esistita. Ti riportiamo su un terreno sicuro.",
    "home": "Torna alla home"
  },
  "languageSwitcher": {
    "label": "Lingua"
  }
};
