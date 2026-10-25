import type { Dictionary } from "./en.ts";

// Machine-translated (fr) + in-workflow QA pass. Native review recommended.
// Structure validated against en.ts.
export const fr: Dictionary = {
  "meta": {
    "title": "Unisic - Capture d'écran et enregistreur pour Linux",
    "description": "Capture d'écran et enregistreur d'écran open source pour Linux. Annotez avant la prise, retouchez après, enregistrez en GIF et en vidéo, envoyez partout. Zéro télémétrie, GPLv3.",
    "ogTitle": "Unisic - Les captures d'écran bien faites sur Linux",
    "ogDescription": "Capturez, annotez, modifiez, enregistrez et partagez avec un seul raccourci. Capture silencieuse sous Wayland, enregistrement GIF et vidéo, OCR, envoi instantané. Zéro télémétrie, GPLv3.",
    "ogImageAlt": "L'éditeur de captures d'écran Unisic sur Linux"
  },
  "nav": {
    "docs": "Documentation",
    "skip": "Aller au contenu",
    "how": "Comment ça marche",
    "features": "Fonctionnalités",
    "github": "Unisic sur GitHub",
    "download": "Télécharger"
  },
  "hero": {
    "eyebrow": "Captures d'écran et enregistrement d'écran pour Linux",
    "headline": "Capturez, annotez, partagez. {mark}",
    "headlineMark": "Un seul raccourci.",
    "sub": "Dessinez sur l'écran avant même la capture, enregistrez un GIF ou une vidéo, et retrouvez le lien de partage déjà dans votre presse-papiers.",
    "installLabel": "Installez en une ligne",
    "copy": "Copier",
    "copied": "Copié",
    "installNote": "Ouvre un menu. Chaque téléchargement est vérifié avec son SHA-256 publié.",
    "installRead": "Comment fonctionne l'installateur",
    "otherWays": "Autres façons d'installer",
    "github": "Voir sur GitHub",
    "windowHint": "Reconstruite à partir du QML et des thèmes de l'app. Parcourez la barre latérale."
  },
  "how": {
    "steps": {
      "hotkey": {
        "title": "Appuyez sur un raccourci",
        "body": "{keys} lance une capture de zone. Plein écran et fenêtre ont leurs propres touches, que vous pouvez modifier dans les Paramètres."
      },
      "mark": {
        "title": "Annotez",
        "body": "Dessinez des flèches, du texte, du flou et des étapes numérotées directement sur l'écran figé, puis appuyez sur Entrée. L'éditeur offre d'autres outils."
      },
      "share": {
        "title": "Partagez",
        "body": "Enregistrez, copiez ou envoyez. Après un envoi, le lien est déjà dans votre presse-papiers."
      }
    }
  },
  "usp": {
    "title": "Annotez avant même d'avoir pris la capture",
    "lede": "La surface de sélection sert aussi de toile. Ce que vous dessinez sur l'écran figé va directement dans la capture, sans détour par un éditeur."
  },
  "overlay": {
    "caption": "La surface de sélection d'Unisic : un écran figé avec une région sélectionnée, les dimensions en pixels en temps réel, une flèche dessinée avant la capture et une barre d'outils flottante.",
    "capture": "Capturer"
  },
  "features": {
    "title": "Tout ce qui vient après le raccourci",
    "editor": {
      "title": "Un éditeur complet",
      "body": "Flèches, formes, texte, surlignage, flou, pixellisation, étapes numérotées, légendes et recadrage. Annuler, rétablir et zoomer autant que vous voulez."
    },
    "ocr": {
      "title": "Des pixels au texte",
      "body": "Copiez le texte de n'importe quelle zone directement dans le presse-papiers. Les codes QR et les codes-barres sont décodés en leur contenu."
    },
    "upload": {
      "title": "Envoyez partout",
      "body": "Votre propre serveur HTTP, des fichiers d'uploader ShareX, FTP, SFTP ou un hébergeur intégré. Le lien est copié pour vous.",
      "copied": "Copié"
    },
    "history": {
      "title": "Historique avec vignettes",
      "body": "Chaque capture, à une grille de distance. Supprimer déplace le fichier vers la corbeille, jamais au-delà."
    },
    "silent": {
      "title": "Capture silencieuse",
      "body": "Pas de flash d'obturateur, pas de jonglage entre fenêtres. Chemin KWin natif sur Plasma, portails partout ailleurs."
    },
    "yours": {
      "title": "Sans télémétrie, sans compte",
      "body": "La seule requête qu'Unisic envoie de lui-même est la recherche de nouvelles versions. Sous licence GPL-3.0 et développé au grand jour."
    }
  },
  "recording": {
    "title": "Enregistrez la même zone en GIF ou en vidéo",
    "lede": "Capturez une zone, une fenêtre ou tout l'écran. Enregistrez un GIF, ou un MP4 ou WebM avec le son du système, du micro ou d'une seule application. Le replay instantané garde les 30 dernières secondes prêtes.",
    "note": "{keys} arrête toujours un enregistrement, quel que soit l'élément actif.",
    "caption": "Une région de l'écran en cours d'enregistrement : Unisic dessine un cadre de la couleur d'accentuation autour de la région, avec un badge REC et un minuteur du temps écoulé."
  },
  "themes": {
    "title": "Des thèmes, dont le vôtre",
    "lede": "Choisissez une palette ci-dessous et regardez l'application l'adopter.",
    "groupLabel": "Thème de cette page",
    "note": "Chaque pastille repeint toute la page avec cette palette, aux valeurs livrées avec l'app. La première suit le thème clair ou sombre de votre bureau.",
    "system": "Système"
  },
  "download": {
    "title": "Installer Unisic",
    "lede": "Conçu pour Wayland, il fonctionne aussi sous X11. Choisissez comment l'installer.",
    "points": {
      "verify": "Chaque téléchargement est vérifié avec son SHA-256",
      "noRoot": "L'AppImage n'exige pas root et se met à jour toute seule",
      "free": "Gratuit et open source, GPL-3.0"
    },
    "repoLede": "AppImage est la voie recommandée : un seul fichier, sans root, et il se remplace lui-même dès qu'une nouvelle version paraît. Choisissez plutôt votre distribution et le dépôt maintiendra Unisic à jour via votre gestionnaire de paquets ; la release contient aussi des paquets .deb, .rpm et Arch ponctuels qui configurent le dépôt dès la première installation.",
    "distroListLabel": "Choisissez votre distribution ou votre format de paquet",
    "versionLabel": "Version",
    "copyCmd": "Copier les commandes",
    "copiedCmd": "Copié",
    "steps": {
      "importKey": "Importez la clé de signature du dépôt :",
      "addRepo": "Ajoutez le dépôt :",
      "refreshRepo": "Rafraîchissez les dépôts :",
      "enableRepo": "Activez le dépôt COPR :",
      "install": "Installez Unisic :"
    },
    "notes": {
      "ubuntu": "Ubuntu 25.10 atteint sa fin de vie en juillet 2026, préférez donc 26.04. Les deux nécessitent Qt 6.5+, absent des versions plus anciennes.",
      "debian": "Nécessite Debian 13 (trixie) ou plus récent pour Qt 6.5+.",
      "fedora": "Builds pour Fedora 43, 44 et Rawhide. Toutes les dépendances requises sont installées avec le paquet : l'enregistrement, l'OCR et le décodage des codes QR fonctionnent d'emblée.",
      "opensuse": "zypper vous demandera d'accepter la clé de signature du dépôt lors du rafraîchissement.",
      "arch": "Un dépôt pacman signé sur l'openSUSE Build Service. Pas besoin d'AUR.",
      "nix": "Fonctionne partout où Nix fonctionne, y compris NixOS. Essayez-le avec nix run ou ajoutez le flake comme entrée pour une configuration déclarative ; sur NixOS, activez xdg.portal et PipeWire.",
      "appimage": "Recommandé. Universel : fonctionne sur toutes les distributions, ne nécessite pas de root et n'installe rien dans votre système. L'application se met à jour toute seule : la nouvelle version est téléchargée, vérifiée avec l'empreinte SHA-256 publiée pour elle et remplacée sur place, puis Unisic redémarre dès que vous êtes inactif.",
      "windows": "Expérimental, pour Windows 11, et entièrement écrit par une IA. Le programme d'installation l'installe pour votre seul compte, sans droits d'administrateur. Un zip portable est aussi disponible sur la page de la version. Il se met à jour tout seul, comme l'AppImage. L'enregistrement d'une seule fenêtre n'y est pas encore possible."
    },
    "downloadBtn": "Télécharger",
    "latest": "Dernière version {tag}",
    "fallbackBtn": "Obtenez-la depuis les Releases GitHub",
    "fallbackNote": "Impossible de joindre GitHub pour le moment, mais tous les builds s'y trouvent.",
    "allReleases": "Toutes les versions et les anciens builds",
    "stability": "Unisic est en bêta. S'il se comporte mal sur votre bureau, un signalement dans {link} aide.",
    "stabilityLink": "Issues"
  },
  "hotkeys": {
    "caption": "Raccourcis par défaut",
    "action": "Action",
    "shortcut": "Raccourci",
    "rows": {
      "full": "Capturer l'écran entier",
      "region": "Capturer une région",
      "window": "Capturer la fenêtre active",
      "gif": "Enregistrer un GIF (démarrer/arrêter)",
      "video": "Enregistrer une vidéo (démarrer/arrêter)",
      "ocr": "OCR d'une région (copier le texte)",
      "copyLast": "Copier la dernière capture",
      "replay": "Démarrer/sauvegarder la relecture instantanée",
      "stop": "Arrêter l'enregistrement (fixe)"
    },
    "note": "Toutes les touches, sauf la touche d'arrêt fixe, sont modifiables dans les Paramètres et appliquées immédiatement au système."
  },
  "reference": {
    "title": "Bureaux pris en charge et raccourcis"
  },
  "compositors": {
    "title": "Compatible avec votre compositeur",
    "plasma": {
      "name": "KDE Plasma",
      "body": "Le chemin entièrement silencieux : KWin ScreenShot2 natif avec les raccourcis KGlobalAccel. Aucune boîte de dialogue de portail."
    },
    "gnome": {
      "name": "GNOME et autres bureaux",
      "body": "Les captures et l'enregistrement passent par xdg-desktop-portal avec PipeWire. Standard, sûr, sans bidouille."
    },
    "wlroots": {
      "name": "niri et les compositeurs wlroots",
      "body": "Unisic capture via wlr-screencopy avec grim, silencieusement et sans problème en multi-écran. Associez les raccourcis dans la configuration de votre compositeur ; une instance en cours d'exécution récupère la commande."
    }
  },
  "mainWindow": {
    "ariaLabel": "La fenêtre principale d'Unisic : une barre latérale avec les pages Capture, Enregistrement et Édition au-dessus d'une bibliothèque Historique et Serveurs, et la page Capture avec les actions écran entier, région et fenêtre ainsi que la grille des options de capture.",
    "nav": {
      "capture": "Capture",
      "record": "Enregistrement",
      "edit": "Édition",
      "history": "Historique",
      "servers": "Serveurs"
    },
    "library": "Bibliothèque",
    "pageTitle": "Capture",
    "pageSub": "Les captures d'écran arrivent dans l'éditeur, où vous pouvez les annoter, puis les enregistrer, les copier ou les envoyer.",
    "cards": {
      "fullScreen": {
        "title": "Écran entier",
        "sub": "Tous les écrans"
      },
      "region": {
        "title": "Région",
        "sub": "Sélectionner + annoter en direct"
      },
      "window": {
        "title": "Fenêtre",
        "sub": "Fenêtre active"
      }
    },
    "options": {
      "title": "Options de capture",
      "delay": "Délai de capture",
      "repeat": "Répéter la dernière région",
      "repeatAction": "Répéter",
      "server": "Serveur de téléversement",
      "cursor": "Inclure le curseur de la souris",
      "editor": "Ouvrir l'éditeur",
      "clipboard": "Copier l'image dans le presse-papiers",
      "disk": "Enregistrer automatiquement sur le disque",
      "upload": "Envoyer et copier le lien"
    }
  },
  "editorMockup": {
    "ariaLabel": "La fenêtre de l'éditeur Unisic : une carte d'outils avec les outils d'annotation au-dessus du groupe de formes ouvert et de ses options de trait, une capture annotée d'une flèche, d'un surlignage et d'étapes numérotées, et les actions copier, enregistrer et envoyer.",
    "title": "Éditeur Unisic",
    "stroke": "Trait",
    "copy": "Copier",
    "save": "Enregistrer",
    "upload": "Envoyer",
    "more": "Plus"
  },
  "cli": {
    "title": "Pilotez-le depuis un terminal",
    "lede": "Chaque mode de capture est une option : un raccourci du compositeur, un script ou une tâche cron peut le lancer. Avec --output - l'image part sur stdout."
  },
  "app": {
    "record": {
      "title": "Enregistrement d’écran",
      "gifTitle": "Enregistrement GIF",
      "sub": "Enregistrez l’écran entier, une région ou une seule fenêtre dans un fichier vidéo.",
      "gifSub": "Enregistrez une région ou un écran entier directement en .gif optimisé.",
      "video": "Vidéo",
      "gif": "GIF",
      "screen": "Écran",
      "region": "Région",
      "window": "Fenêtre",
      "pause": "Pause",
      "stop": "Arrêter",
      "startReplay": "Démarrer le replay",
      "videoOptions": "Options vidéo",
      "gifOptions": "Options GIF",
      "format": "Format",
      "frameRate": "Fréquence d’images",
      "quality": "Qualité",
      "qualitySub": "Plus haut donne une image plus nette et un fichier plus lourd. 50 % est la valeur équilibrée par défaut.",
      "maxDuration": "Durée maximale",
      "cursor": "Inclure le curseur de la souris",
      "audio": "Audio & replay",
      "systemAudio": "Enregistrer l’audio du système",
      "mic": "Enregistrer le microphone",
      "appAudio": "Audio d’une application uniquement",
      "replayLength": "Durée du replay",
      "off": "Désactivé",
      "refresh": "Actualiser",
      "noWindowGif": "Indisponible : le GIF n’a pas de source fenêtre unique",
      "fast": "Rapide / léger",
      "balanced": "Équilibré",
      "best": "Optimale",
      "goodToKnow": "Bon à savoir",
      "gifNoAudio": "Le GIF n’a pas de piste audio. Pour un clip sonore, passez en mode Vidéo et enregistrez un MP4 ou WebM.",
      "gifSize": "La taille du fichier augmente vite avec la zone, la fréquence d’images et la durée. Une petite région à 15-30 FPS rend généralement très bien et reste facile à partager."
    },
    "edit": {
      "title": "Modifier",
      "sub": "Ouvrez une image ou une vidéo que vous avez déjà - le même éditeur et la même fenêtre de découpe que pour vos captures.",
      "image": "Modifier une image",
      "imageSub": "Annoter, recadrer, flouter",
      "video": "Découper une vidéo",
      "videoSub": "Couper un début et une fin",
      "tip": "Modifier une image ne touche jamais l’original : l’éditeur enregistre là où vont vos captures, sous un nouveau nom, sauf si vous l’écrasez vous-même. La découpe écrit toujours un nouveau fichier à côté de la source."
    },
    "history": {
      "title": "Historique",
      "items": "{n} éléments",
      "search": "Rechercher un nom ou un lien",
      "clear": "Tout effacer",
      "all": "Tout",
      "images": "Images",
      "gifs": "GIF",
      "recordings": "Enregistrements",
      "clips": "Clips",
      "starred": "Favoris",
      "uploaded": "Téléversés",
      "today": "Aujourd’hui",
      "empty": "Rien ici pour l’instant. Les captures et enregistrements apparaîtront ici avec des miniatures."
    },
    "servers": {
      "title": "Serveurs",
      "sub": "Uploaders modulaires : API HTTP personnalisées plus FTP/SFTP via curl. Après chaque téléversement, le lien est copié dans votre presse-papiers.",
      "add": "Ajouter un serveur personnalisé",
      "import": "Importer un .sxcu",
      "active": "Serveur actif",
      "use": "Utiliser",
      "needsClientId": "Nécessite un Client-ID",
      "needsUserKey": "Nécessite une clé utilisateur"
    },
    "modes": {
      "shot": "Capture d'écran",
      "measure": "Mesurer",
      "ocr": "Lire le texte",
      "gif": "Enregistrer un GIF",
      "video": "Enregistrer une vidéo"
    },
    "hint": {
      "shot": "Glissez pour sélectionner · cliquez pour l’écran entier · Ctrl+glisser pour déplacer · annotez avec la barre d’outils · Espace/Entrée ou double-clic pour capturer · Échap pour annuler",
      "measure": "Glissez pour mesurer · Tab : distance/taille · Ctrl+C copie les tailles · Échap pour fermer",
      "ocr": "Glissez pour sélectionner · Ctrl+glisser pour déplacer · Espace/Entrée lit le texte · Échap pour annuler",
      "gif": "Glissez pour sélectionner · Ctrl+glisser pour déplacer · Espace/Entrée démarre le GIF · Échap pour annuler",
      "video": "Glissez pour sélectionner · Ctrl+glisser pour déplacer · Espace/Entrée démarre la vidéo · Échap pour annuler"
    },
    "tools": {
      "edit": "Modifier les formes",
      "pen": "Crayon",
      "shapes": "Formes",
      "text": "Texte",
      "highlight": "Surligner",
      "blur": "Flou",
      "pixelate": "Pixelliser",
      "eraser": "Gomme intelligente",
      "magnify": "Loupe",
      "eyedropper": "Pipette",
      "step": "Marqueur d’étape",
      "crop": "Recadrer",
      "undo": "Annuler",
      "redo": "Rétablir",
      "line": "Ligne",
      "arrow": "Flèche",
      "measure": "Mesurer",
      "rect": "Rectangle",
      "ellipse": "Ellipse",
      "callout": "Bulle"
    },
    "toolbar": "Barre d’outils de capture",
    "cancel": "Annuler"
  },
  "footer": {
    "license": "Libre et open source, GPL-3.0",
    "nav": "Pied de page",
    "github": "GitHub",
    "releases": "Releases",
    "issues": "Issues",
    "licenseLink": "Licence"
  },
  "notFound": {
    "code": "Erreur 404",
    "title": "Page introuvable",
    "message": "La page que vous cherchiez a été déplacée, renommée, ou n'a jamais existé. Laissez-nous vous ramener en terrain sûr.",
    "home": "Retour à l'accueil"
  },
  "languageSwitcher": {
    "label": "Langue"
  }
};
