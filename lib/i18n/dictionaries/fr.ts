import { type Dictionary } from "./en";

// Machine-translated (fr) + in-workflow QA pass. Native review recommended.
// Structure validated against en.ts.
export const fr: Dictionary = {
  "meta": {
    "title": "Unisic — Capture d'écran et enregistreur pour Linux",
    "description": "Capture d'écran et enregistreur d'écran open source pour Linux. Annotez avant la prise, retouchez après, enregistrez en GIF et en vidéo, envoyez partout. Zéro télémétrie, GPLv3.",
    "ogTitle": "Unisic — Les captures d'écran bien faites sur Linux",
    "ogDescription": "Capture silencieuse, annotation avant la prise, un éditeur à 15 outils, enregistrement GIF et vidéo, OCR, envoi instantané. Zéro télémétrie, GPLv3.",
    "ogImageAlt": "L'éditeur de captures d'écran Unisic sur Linux"
  },
  "nav": {
    "docs": "Documentation",
    "skip": "Aller au contenu",
    "features": "Fonctionnalités",
    "recording": "Enregistrement",
    "github": "Unisic sur GitHub",
    "download": "Télécharger"
  },
  "hero": {
    "headline": "Les captures d'écran bien faites sur Linux.",
    "sub": "Capture silencieuse, annotation avant la prise, un éditeur à 15 outils, enregistrement GIF et vidéo, OCR, envoi instantané. Zéro télémétrie. GPLv3.",
    "download": "Télécharger",
    "github": "Voir sur GitHub"
  },
  "usp": {
    "title": "Annotez avant même d'avoir pris la capture",
    "lede": "La surface de sélection est une toile. Dessinez des flèches, du texte, du flou et des étapes sur l'écran figé, puis appuyez sur Entrée : les annotations sont incrustées dans la capture."
  },
  "overlay": {
    "caption": "La surface de sélection d'Unisic : un écran figé avec une région sélectionnée, les dimensions en pixels en temps réel, une flèche dessinée avant la capture et une barre d'outils flottante.",
    "capture": "Capturer"
  },
  "features": {
    "title": "Tout ce qui vient après le raccourci",
    "lede": "La plupart des outils vous livrent un rectangle de pixels et s'en vont. Unisic prend en charge le reste du flux de travail.",
    "editor": {
      "title": "Un vrai éditeur, pas une boîte de recadrage",
      "body": "Quinze outils, dont surligneur, pixellisation, gomme intelligente, légende, mesure, étapes numérotées et recadrage. Annuler, rétablir, zoomer, le tout à l'échelle du pixel de l'image."
    },
    "ocr": {
      "title": "Des pixels au texte",
      "body": "Extrayez par OCR le texte d'une région directement dans votre presse-papiers, ou sélectionnez des mots isolés dans l'éditeur pour les copier, les surligner ou les caviarder. Les codes QR sont décodés en leur contenu."
    },
    "upload": {
      "title": "Envoyez partout",
      "body": "Destinations HTTP personnalisées, import d'uploaders ShareX, FTP et SFTP, hébergeurs intégrés. Le lien atterrit dans votre presse-papiers.",
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
      "title": "Entièrement à vous",
      "body": "Zéro télémétrie, aucun compte, rien ne communique à l'extérieur. Sous licence GPL-3.0 et développé au grand jour."
    }
  },
  "recording": {
    "title": "La même région, en GIF ou en vidéo",
    "lede": "GIF avec une palette en deux passes pour des couleurs nettes, ou MP4 et WebM avec, en option, l'audio du système, du microphone ou d'une seule application — via le portail ScreenCast, PipeWire et ffmpeg. Enregistrez une région, l'écran entier ou une fenêtre, laissez la relecture instantanée garder en mémoire les 30 dernières secondes et découpez le résultat directement depuis la carte de notification.",
    "note": "{keys} arrête toujours un enregistrement, quel que soit l'élément actif.",
    "caption": "Une région de l'écran en cours d'enregistrement : Unisic dessine un cadre de la couleur d'accentuation autour de la région, avec un badge REC et un minuteur du temps écoulé."
  },
  "themes": {
    "title": "Neuf thèmes, dont le vôtre",
    "lede": "Choisissez une palette ci-dessous et regardez l'application l'adopter.",
    "groupLabel": "Prévisualiser un thème dans la fenêtre de l'application",
    "reset": "Réinitialiser sur Unisic",
    "note": "Chaque pastille repeint la fenêtre ci-dessus en temps réel. Le neuvième thème est votre système : il suit le schéma clair ou sombre du bureau et la couleur d'accentuation.",
    "system": "Système",
    "systemLabel": "Système — suit le schéma clair ou sombre de votre bureau ; non prévisualisable ici",
    "previewLabel": "La fenêtre principale d'Unisic dans le thème {theme}"
  },
  "download": {
    "title": "Installer Unisic",
    "lede": "Nécessite une session Wayland avec xdg-desktop-portal. L'enregistrement requiert également PipeWire et ffmpeg.",
    "repoLede": "Choisissez votre distribution — le dépôt maintient Unisic à jour via votre gestionnaire de paquets. AppImage est un téléchargement direct, et la release contient aussi des paquets .deb, .rpm et Arch ponctuels qui configurent le dépôt dès la première installation.",
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
      "ubuntu": "Ubuntu 25.10 atteint sa fin de vie en juillet 2026 — préférez 26.04. Les deux nécessitent Qt 6.5+, absent des versions plus anciennes.",
      "debian": "Nécessite Debian 13 (trixie) ou plus récent pour Qt 6.5+.",
      "fedora": "Builds pour Fedora 43, 44 et Rawhide. Le paquet COPR installe les dépendances optionnelles : l'enregistrement, l'OCR et le décodage des codes QR fonctionnent d'emblée.",
      "opensuse": "zypper vous demandera d'accepter la clé de signature du dépôt lors du rafraîchissement.",
      "arch": "Un dépôt pacman signé sur l'openSUSE Build Service — pas besoin d'AUR.",
      "nix": "Fonctionne partout où Nix fonctionne, y compris NixOS. Essayez-le avec nix run ou ajoutez le flake comme entrée pour une configuration déclarative ; sur NixOS, activez xdg.portal et PipeWire.",
      "appimage": "Universel — fonctionne sur toutes les distributions. L'application se met à jour toute seule via zsync embarqué : seuls les blocs modifiés sont téléchargés et remplacés sur place, puis elle redémarre quand elle est inactive."
    },
    "downloadBtn": "Télécharger",
    "checking": "Recherche de la dernière version",
    "latest": "Dernière version {tag}",
    "fallbackBtn": "Obtenez-la depuis les Releases GitHub",
    "fallbackNote": "Impossible de joindre GitHub pour le moment, mais tous les builds s'y trouvent.",
    "allReleases": "Toutes les versions et les anciens builds",
    "stability": "Unisic 0.7 est la première version stable. Si votre compositeur trouve encore le moyen de la surprendre, chaque signalement dans {link} nous aide.",
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
      "quickTask": "Ouvrir le sélecteur de tâche rapide",
      "replay": "Démarrer/sauvegarder la relecture instantanée",
      "stop": "Arrêter l'enregistrement (fixe)"
    },
    "tryHint": "Ce tableau est interactif : maintenez un raccourci sur votre clavier et les touches s'allument.",
    "note": "Toutes les touches, sauf la touche d'arrêt fixe, sont modifiables dans les Paramètres et appliquées immédiatement au système."
  },
  "reference": {
    "title": "Référence"
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
    "ariaLabel": "La fenêtre principale d'Unisic : une barre latérale avec les pages Capture, Enregistrement, GIF, Édition, Historique, Serveurs et Paramètres, et la page Capture avec les actions écran entier, région et fenêtre ainsi que les options après capture.",
    "nav": {
      "capture": "Capture",
      "record": "Enregistrement",
      "gif": "GIF",
      "edit": "Édition",
      "history": "Historique",
      "servers": "Serveurs",
      "settings": "Paramètres"
    },
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
    "afterCapture": "Après la capture",
    "toggles": {
      "editor": "Ouvrir l'éditeur",
      "clipboard": "Copier l'image dans le presse-papiers",
      "disk": "Enregistrer automatiquement sur le disque",
      "upload": "Envoyer et copier le lien"
    }
  },
  "editorMockup": {
    "ariaLabel": "La fenêtre de l'éditeur Unisic : une barre d'outils avec quinze outils d'annotation, une capture d'écran annotée d'une flèche, d'un surlignage et d'étapes numérotées, ainsi que les actions copier, enregistrer et envoyer.",
    "title": "Éditeur Unisic",
    "copy": "Copier",
    "save": "Enregistrer",
    "upload": "Envoyer"
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
