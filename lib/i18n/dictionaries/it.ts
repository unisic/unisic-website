import { type Dictionary } from "./en";

// Machine-translated (it) + in-workflow QA pass. Native review recommended.
// Structure validated against en.ts.
export const it: Dictionary = {
  "meta": {
    "title": "Unisic — Screenshot e registrazione schermo su Linux",
    "description": "Strumento open-source di screenshot e registrazione schermo per Linux. Annota prima dello scatto, modifica dopo, registra GIF e video, carica ovunque. Zero telemetria, GPLv3.",
    "ogTitle": "Unisic — Screenshot fatti bene su Linux",
    "ogDescription": "Cattura silenziosa, annotazione prima dello scatto, un editor con 15 strumenti, registrazione GIF e video, OCR, caricamento istantaneo. Zero telemetria, GPLv3.",
    "ogImageAlt": "Editor di screenshot Unisic su Linux"
  },
  "nav": {
    "docs": "Documentazione",
    "skip": "Vai al contenuto",
    "features": "Funzionalità",
    "recording": "Registrazione",
    "github": "Unisic su GitHub",
    "download": "Scarica"
  },
  "hero": {
    "headline": "Screenshot fatti bene su Linux.",
    "sub": "Cattura silenziosa, annotazione prima dello scatto, un editor con 15 strumenti, registrazione GIF e video, OCR, caricamento istantaneo. Zero telemetria. GPLv3.",
    "download": "Scarica",
    "github": "Vedi su GitHub"
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
    "lede": "La maggior parte degli strumenti ti consegna un rettangolo di pixel e se ne va. Unisic si occupa del resto del flusso di lavoro.",
    "editor": {
      "title": "Un vero editor, non un riquadro di ritaglio",
      "body": "Quindici strumenti tra cui evidenziatore, pixelatura, gomma intelligente, callout, misura, passaggi numerati e ritaglio. Annulla, ripeti, zoom, tutto nello spazio dei pixel dell'immagine."
    },
    "ocr": {
      "title": "Testo dai pixel",
      "body": "Esegui l'OCR di una regione direttamente negli appunti, oppure seleziona singole parole nell'editor per copiarle, evidenziarle o oscurarle. I codici QR vengono decodificati nel loro contenuto."
    },
    "upload": {
      "title": "Carica ovunque",
      "body": "Destinazioni HTTP personalizzate, importazione dell'uploader di ShareX, FTP e SFTP, host integrati. Il link finisce nei tuoi appunti.",
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
      "body": "Zero telemetria, nessun account, niente che invii dati all'esterno. Licenza GPL-3.0 e sviluppato in modo aperto."
    }
  },
  "recording": {
    "title": "La stessa regione, in GIF o video",
    "lede": "GIF con palette a due passaggi per colori nitidi, oppure MP4 e WebM con audio opzionale di sistema, del microfono o di una singola app — tramite il portale ScreenCast, PipeWire e ffmpeg. Registra una regione, l'intero schermo o una finestra, lascia che il replay istantaneo memorizzi gli ultimi 30 secondi e taglia il risultato direttamente dalla scheda di notifica.",
    "note": "{keys} interrompe sempre una registrazione, indipendentemente da cosa ha il focus.",
    "caption": "Una regione dello schermo in fase di registrazione: Unisic disegna una cornice con il colore d'accento attorno alla regione con un badge REC e un timer del tempo trascorso."
  },
  "themes": {
    "title": "Nove temi, incluso il tuo",
    "lede": "Scegli una palette qui sotto e guarda l'app indossarla.",
    "groupLabel": "Anteprima di un tema nella finestra dell'app",
    "reset": "Ripristina su Unisic",
    "note": "Ogni chip ridipinge la finestra qui sopra in tempo reale. Il nono tema è il tuo sistema: segue lo schema chiaro o scuro del desktop e il colore d'accento.",
    "system": "Sistema",
    "systemLabel": "Sistema — segue lo schema chiaro o scuro del tuo desktop; non visualizzabile in anteprima qui",
    "previewLabel": "La finestra principale di Unisic nel tema {theme}"
  },
  "download": {
    "title": "Installa Unisic",
    "lede": "Richiede una sessione Wayland con xdg-desktop-portal. Per la registrazione servono anche PipeWire e ffmpeg.",
    "repoLede": "Scegli la tua distribuzione — il repository mantiene Unisic aggiornato tramite il gestore di pacchetti. AppImage è un download diretto, e la release include anche pacchetti una tantum .deb, .rpm e Arch che configurano il repository alla prima installazione.",
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
      "ubuntu": "Ubuntu 25.10 raggiunge il fine supporto a luglio 2026 — meglio scegliere la 26.04. Entrambe richiedono Qt 6.5+, assente nelle versioni più vecchie.",
      "debian": "Richiede Debian 13 (trixie) o più recente per Qt 6.5+.",
      "fedora": "Build per Fedora 43, 44 e Rawhide. Il pacchetto COPR installa anche le dipendenze opzionali, quindi registrazione, OCR e decodifica dei codici QR funzionano subito.",
      "opensuse": "Durante il refresh zypper chiederà di accettare la chiave di firma del repository.",
      "arch": "Un repository pacman firmato su openSUSE Build Service — niente AUR.",
      "appimage": "Universale — funziona su qualsiasi distribuzione. L'app si aggiorna da sola tramite zsync integrato: vengono scaricati e sostituiti sul posto solo i blocchi modificati, e si riavvia quando è inattiva."
    },
    "downloadBtn": "Scarica",
    "checking": "Verifica dell'ultima release",
    "latest": "Ultima release {tag}",
    "fallbackBtn": "Scaricalo da GitHub Releases",
    "fallbackNote": "Non è stato possibile raggiungere GitHub in questo momento, ma ogni build si trova lì.",
    "allReleases": "Tutte le release e le build precedenti",
    "stability": "Unisic 0.7 è la prima release stabile. Se il tuo compositor trova ancora il modo di sorprenderlo, ogni segnalazione in {link} è d'aiuto.",
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
    "ariaLabel": "La finestra principale di Unisic: una barra laterale con le pagine Cattura, Registra, GIF, Modifica, Cronologia, Server e Impostazioni, e la pagina Cattura con le azioni schermo intero, regione e finestra più gli interruttori post-cattura.",
    "nav": {
      "capture": "Cattura",
      "record": "Registra",
      "gif": "GIF",
      "edit": "Modifica",
      "history": "Cronologia",
      "servers": "Server",
      "settings": "Impostazioni"
    },
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
    "afterCapture": "Dopo la cattura",
    "toggles": {
      "editor": "Apri l'editor",
      "clipboard": "Copia l'immagine negli appunti",
      "disk": "Salva su disco automaticamente",
      "upload": "Carica e copia il link"
    }
  },
  "editorMockup": {
    "ariaLabel": "La finestra dell'editor di Unisic: una barra degli strumenti con quindici strumenti di annotazione, uno screenshot annotato con una freccia, un'evidenziazione e passaggi numerati, e le azioni copia, salva e carica.",
    "title": "Editor Unisic",
    "copy": "Copia",
    "save": "Salva",
    "upload": "Carica"
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
