import type { Dictionary } from "./en.ts";

// Machine-translated (es) + in-workflow QA pass. Native review recommended.
// Structure validated against en.ts.
export const es: Dictionary = {
  "meta": {
    "title": "Unisic - Captura de pantalla y grabador para Linux",
    "description": "Capturador de pantalla y grabador de código abierto para Linux. Anota antes de capturar, edita después, graba GIF y vídeo, sube a cualquier sitio. Cero telemetría, GPLv3.",
    "ogTitle": "Unisic - Capturas de pantalla bien hechas en Linux",
    "ogDescription": "Captura, anota, edita, graba y comparte con un solo atajo. Captura silenciosa en Wayland, grabación de GIF y vídeo, OCR, subida instantánea. Cero telemetría, GPLv3.",
    "ogImageAlt": "Editor de capturas Unisic en Linux"
  },
  "nav": {
    "docs": "Documentación",
    "skip": "Saltar al contenido",
    "how": "Cómo funciona",
    "features": "Funciones",
    "github": "Unisic en GitHub",
    "download": "Descargar"
  },
  "hero": {
    "eyebrow": "Capturas de pantalla y grabación de pantalla para Linux",
    "headline": "Captura, anota y comparte. {mark}",
    "headlineMark": "Un solo atajo.",
    "sub": "Dibuja sobre la pantalla antes de hacer la captura, graba un GIF o un vídeo y encuentra el enlace para compartir ya en tu portapapeles.",
    "installLabel": "Instala en una línea",
    "copy": "Copiar",
    "copied": "Copiado",
    "installNote": "Abre un menú. Cada descarga se comprueba con su SHA-256 publicado.",
    "installRead": "Cómo funciona el instalador",
    "otherWays": "Otras formas de instalar",
    "github": "Ver en GitHub",
    "windowHint": "Reconstruida a partir del QML y los temas de la propia app. Recorre la barra lateral."
  },
  "how": {
    "steps": {
      "hotkey": {
        "title": "Pulsa un atajo",
        "body": "{keys} inicia una captura de región. Pantalla completa y ventana tienen sus propias teclas, y puedes cambiarlas en Ajustes."
      },
      "mark": {
        "title": "Márcalo",
        "body": "Dibuja flechas, texto, desenfoque y pasos numerados directamente sobre la pantalla congelada y pulsa Intro. El editor tiene más herramientas."
      },
      "share": {
        "title": "Compártelo",
        "body": "Guárdalo, cópialo o súbelo. Tras subirlo, el enlace ya está en tu portapapeles."
      }
    }
  },
  "usp": {
    "title": "Anota antes incluso de tomar la captura",
    "lede": "La superposición de selección también es un lienzo. Lo que dibujes sobre la pantalla congelada va directo a la captura, sin pasar por un editor."
  },
  "overlay": {
    "caption": "La superposición de selección de Unisic: una pantalla congelada con una región seleccionada, dimensiones en píxeles en tiempo real, una flecha dibujada antes de capturar y una barra de herramientas flotante.",
    "capture": "Capturar"
  },
  "features": {
    "title": "Todo lo que viene después del atajo",
    "editor": {
      "title": "Un editor completo",
      "body": "Flechas, formas, texto, resaltado, desenfoque, pixelado, pasos numerados, llamadas y recorte. Deshacer, rehacer y hacer zoom tanto como quieras."
    },
    "ocr": {
      "title": "Texto a partir de píxeles",
      "body": "Copia el texto de cualquier región directamente al portapapeles. Los códigos QR y de barras se decodifican a su contenido."
    },
    "upload": {
      "title": "Sube a cualquier sitio",
      "body": "Tu propio servidor HTTP, archivos de uploader de ShareX, FTP, SFTP o un host integrado. El enlace se copia por ti.",
      "copied": "Copiado"
    },
    "history": {
      "title": "Historial con miniaturas",
      "body": "Cada captura, a una cuadrícula de distancia. Al eliminarla, el archivo va a la papelera, nunca más allá."
    },
    "silent": {
      "title": "Captura silenciosa",
      "body": "Sin destello de obturador, sin malabares con ventanas. Ruta nativa de KWin en Plasma, portales en todo lo demás."
    },
    "yours": {
      "title": "Sin telemetría, sin cuenta",
      "body": "La única petición que Unisic hace por sí solo es comprobar si hay versiones nuevas. Con licencia GPL-3.0 y desarrollado abiertamente."
    }
  },
  "recording": {
    "title": "Graba la misma región como GIF o vídeo",
    "lede": "Captura una región, una ventana o toda la pantalla. Guarda un GIF, o un MP4 o WebM con sonido del sistema, del micrófono o de una sola aplicación. La repetición instantánea mantiene listos los últimos 30 segundos.",
    "note": "{keys} siempre detiene una grabación, sin importar qué tenga el foco.",
    "caption": "Una región de pantalla en grabación: Unisic dibuja un marco con color de acento alrededor de la región, con una insignia REC y un temporizador."
  },
  "themes": {
    "title": "Temas, incluido el tuyo",
    "lede": "Elige una paleta abajo y mira cómo la app se la pone.",
    "groupLabel": "Tema de esta página",
    "note": "Cada ficha repinta toda la página con esa paleta, con los valores que trae la app. La primera sigue el esquema claro u oscuro de tu escritorio.",
    "system": "Sistema"
  },
  "download": {
    "title": "Instala Unisic",
    "lede": "Hecho para Wayland, y también funciona en X11. Elige cómo quieres instalarlo.",
    "points": {
      "verify": "Cada descarga se comprueba con su SHA-256",
      "noRoot": "El AppImage no necesita root y se actualiza solo",
      "free": "Gratis y de código abierto, GPL-3.0"
    },
    "repoLede": "AppImage es la vía recomendada: un solo archivo, sin root, y se reemplaza a sí mismo cuando aparece una versión nueva. Si lo prefieres, elige tu distribución: el repositorio mantiene Unisic actualizado a través del gestor de paquetes; la versión publicada también incluye paquetes sueltos .deb, .rpm y Arch que configuran el repositorio en la primera instalación.",
    "distroListLabel": "Elige tu distribución o formato de paquete",
    "versionLabel": "Versión",
    "copyCmd": "Copiar comandos",
    "copiedCmd": "Copiado",
    "steps": {
      "importKey": "Importa la clave de firma del repositorio:",
      "addRepo": "Añade el repositorio:",
      "refreshRepo": "Refresca los repositorios:",
      "enableRepo": "Activa el repositorio COPR:",
      "install": "Instala Unisic:"
    },
    "notes": {
      "ubuntu": "Ubuntu 25.10 llega al final de su soporte en julio de 2026: mejor elige 26.04. Ambas necesitan Qt 6.5+, que las versiones más antiguas no incluyen.",
      "debian": "Necesita Debian 13 (trixie) o más reciente por Qt 6.5+.",
      "fedora": "Compilaciones para Fedora 43, 44 y Rawhide. Todas las dependencias necesarias se instalan con el paquete, así que la grabación, el OCR y la decodificación de QR funcionan desde el primer momento.",
      "opensuse": "zypper te pedirá aceptar la clave de firma del repositorio durante el refresco.",
      "arch": "Un repositorio pacman firmado en openSUSE Build Service: no hace falta AUR.",
      "nix": "Funciona en cualquier sistema con Nix, incluido NixOS. Pruébalo con nix run o añade el flake como input para una configuración declarativa; en NixOS activa xdg.portal y PipeWire.",
      "appimage": "Recomendado. Universal: funciona en cualquier distribución, no necesita root y no instala nada en tu sistema. Se actualiza solo: descarga la nueva versión, la comprueba con el SHA-256 publicado para ella, la sustituye en el sitio y reinicia Unisic cuando estás inactivo.",
      "windows": "Experimental, para Windows 11 y escrito íntegramente por IA. El instalador lo instala solo para tu usuario, sin permisos de administrador. En la página de la versión también hay un zip portátil. Se actualiza solo, igual que la AppImage. Todavía no puede grabar una sola ventana."
    },
    "downloadBtn": "Descargar",
    "latest": "Última versión {tag}",
    "fallbackBtn": "Consíguelo en GitHub Releases",
    "fallbackNote": "No se pudo contactar con GitHub ahora mismo, pero todas las compilaciones están allí.",
    "allReleases": "Todas las versiones y compilaciones anteriores",
    "stability": "Unisic está en beta. Si falla en tu escritorio, un informe en {link} ayuda.",
    "stabilityLink": "Incidencias"
  },
  "hotkeys": {
    "caption": "Atajos por defecto",
    "action": "Acción",
    "shortcut": "Atajo",
    "rows": {
      "full": "Capturar pantalla completa",
      "region": "Capturar región",
      "window": "Capturar ventana activa",
      "gif": "Grabar GIF (iniciar/detener)",
      "video": "Grabar vídeo (iniciar/detener)",
      "ocr": "OCR de una región (copiar el texto)",
      "copyLast": "Copiar la última captura",
      "replay": "Iniciar/guardar la repetición instantánea",
      "stop": "Detener grabación (fijo)"
    },
    "note": "Todos los atajos, salvo la tecla fija de detención, se pueden editar en Ajustes y se aplican al sistema de inmediato."
  },
  "reference": {
    "title": "Escritorios compatibles y atajos"
  },
  "compositors": {
    "title": "Funciona con tu compositor",
    "plasma": {
      "name": "KDE Plasma",
      "body": "La ruta totalmente silenciosa: ScreenShot2 nativo de KWin con atajos de KGlobalAccel. Sin diálogos de portal en absoluto."
    },
    "gnome": {
      "name": "GNOME y otros escritorios",
      "body": "Las capturas y la grabación fluyen a través de xdg-desktop-portal con PipeWire. Estándar, seguro, sin trucos."
    },
    "wlroots": {
      "name": "niri y compositores wlroots",
      "body": "Unisic captura mediante wlr-screencopy a través de grim, de forma silenciosa y segura con varios monitores. Asigna los atajos en la configuración de tu compositor; una instancia en ejecución recoge el comando."
    }
  },
  "mainWindow": {
    "ariaLabel": "La ventana principal de Unisic: una barra lateral con las páginas Capturar, Grabar y Editar sobre una biblioteca de Historial y Servidores, y la página Capturar con las acciones de pantalla completa, región y ventana, además de la cuadrícula de opciones de captura.",
    "nav": {
      "capture": "Capturar",
      "record": "Grabar",
      "edit": "Editar",
      "history": "Historial",
      "servers": "Servidores"
    },
    "library": "Biblioteca",
    "pageTitle": "Capturar",
    "pageSub": "Las capturas llegan al editor, donde puedes anotar y luego guardar, copiar o subir.",
    "cards": {
      "fullScreen": {
        "title": "Pantalla completa",
        "sub": "Todos los monitores"
      },
      "region": {
        "title": "Región",
        "sub": "Selecciona y anota en vivo"
      },
      "window": {
        "title": "Ventana",
        "sub": "Ventana activa"
      }
    },
    "options": {
      "title": "Opciones de captura",
      "delay": "Retardo de captura",
      "repeat": "Repetir la última región",
      "repeatAction": "Repetir",
      "server": "Servidor de subida",
      "cursor": "Incluir el cursor del ratón",
      "editor": "Abrir el editor",
      "clipboard": "Copiar imagen al portapapeles",
      "disk": "Guardar en disco automáticamente",
      "upload": "Subir y copiar el enlace"
    }
  },
  "editorMockup": {
    "ariaLabel": "La ventana del editor de Unisic: una tarjeta de herramientas con las herramientas de anotación sobre el grupo de formas abierto y sus opciones de trazo, una captura anotada con una flecha, un resaltado y pasos numerados, y las acciones de copiar, guardar y subir.",
    "title": "Editor de Unisic",
    "stroke": "Trazo",
    "copy": "Copiar",
    "save": "Guardar",
    "upload": "Subir",
    "more": "Más"
  },
  "cli": {
    "title": "Contrólalo desde una terminal",
    "lede": "Cada modo de captura es una opción, así que un atajo del compositor, un script o una tarea cron pueden iniciarlo. Con --output - la imagen va a stdout."
  },
  "app": {
    "record": {
      "title": "Grabación de pantalla",
      "gifTitle": "Grabación de GIF",
      "sub": "Graba la pantalla completa, una región o una sola ventana en un archivo de vídeo.",
      "gifSub": "Graba una región o una pantalla completa directamente a un .gif optimizado.",
      "video": "Vídeo",
      "gif": "GIF",
      "screen": "Pantalla",
      "region": "Región",
      "window": "Ventana",
      "pause": "Pausar",
      "stop": "Detener",
      "startReplay": "Iniciar repetición",
      "videoOptions": "Opciones de vídeo",
      "gifOptions": "Opciones de GIF",
      "format": "Formato",
      "frameRate": "Tasa de fotogramas",
      "quality": "Calidad",
      "qualitySub": "Más alto es más nítido y más pesado. 50% es el valor equilibrado por defecto.",
      "maxDuration": "Duración máxima",
      "cursor": "Incluir el cursor del ratón",
      "audio": "Audio y repetición",
      "systemAudio": "Grabar el audio del sistema",
      "mic": "Grabar el micrófono",
      "appAudio": "Solo audio de la aplicación",
      "replayLength": "Duración de la repetición",
      "off": "Desactivado",
      "refresh": "Actualizar",
      "noWindowGif": "No disponible: el GIF no tiene fuente de una sola ventana",
      "fast": "Rápido / pequeño",
      "balanced": "Equilibrado",
      "best": "Óptimo",
      "goodToKnow": "Conviene saber",
      "gifNoAudio": "El GIF no tiene pista de audio. Para un clip con sonido, cambia al modo Vídeo y graba un MP4 o WebM.",
      "gifSize": "El tamaño del archivo crece rápido con el área, los fotogramas y la duración. Una región pequeña a 15-30 FPS suele verse genial y sigue siendo fácil de compartir."
    },
    "edit": {
      "title": "Editar",
      "sub": "Abre una imagen o un vídeo que ya tengas: el mismo editor y la misma ventana de recorte que usan tus capturas.",
      "image": "Editar una imagen",
      "imageSub": "Anota, recorta, difumina",
      "video": "Recortar un vídeo",
      "videoSub": "Corta un inicio y un final",
      "tip": "Editar una imagen nunca toca el original: el editor guarda donde van tus capturas, con un nombre nuevo, salvo que lo sobrescribas tú. El recorte siempre crea un archivo nuevo junto al de origen."
    },
    "history": {
      "title": "Historial",
      "items": "{n} elementos",
      "search": "Buscar nombre o enlace",
      "clear": "Borrar todo",
      "all": "Todo",
      "images": "Imágenes",
      "gifs": "GIF",
      "recordings": "Grabaciones",
      "clips": "Clips",
      "starred": "Destacadas",
      "uploaded": "Subidas",
      "today": "Hoy",
      "empty": "Aún no hay nada aquí. Las capturas y grabaciones aparecerán aquí con miniaturas."
    },
    "servers": {
      "title": "Servidores",
      "sub": "Subidores modulares: APIs HTTP personalizadas más FTP/SFTP mediante curl. Tras cada subida, el enlace se copia al portapapeles.",
      "add": "Añadir servidor personalizado",
      "import": "Importar .sxcu",
      "active": "Servidor activo",
      "use": "Usar",
      "needsClientId": "Necesita un Client-ID",
      "needsUserKey": "Necesita una clave de usuario"
    },
    "modes": {
      "shot": "Captura de pantalla",
      "measure": "Medir",
      "ocr": "Leer texto",
      "gif": "Grabar GIF",
      "video": "Grabar vídeo"
    },
    "hint": {
      "shot": "Arrastra para seleccionar · clic para toda la pantalla · Ctrl+arrastrar para mover · anota con la barra de herramientas · Espacio/Enter o doble clic para capturar · Esc para cancelar",
      "measure": "Arrastra para medir · Tab: distancia/tamaño · Ctrl+C copia las medidas · Esc cierra",
      "ocr": "Arrastra para seleccionar · Ctrl+arrastrar para mover · Espacio/Enter lee el texto · Esc para cancelar",
      "gif": "Arrastra para seleccionar · Ctrl+arrastrar para mover · Espacio/Enter inicia el GIF · Esc para cancelar",
      "video": "Arrastra para seleccionar · Ctrl+arrastrar para mover · Espacio/Enter inicia el vídeo · Esc para cancelar"
    },
    "tools": {
      "edit": "Editar formas",
      "pen": "Lápiz",
      "shapes": "Formas",
      "text": "Texto",
      "highlight": "Resaltar",
      "blur": "Desenfoque",
      "pixelate": "Pixelado",
      "eraser": "Borrador inteligente",
      "magnify": "Lupa",
      "eyedropper": "Cuentagotas",
      "step": "Marcador de pasos",
      "crop": "Recortar",
      "undo": "Deshacer",
      "redo": "Rehacer",
      "line": "Línea",
      "arrow": "Flecha",
      "measure": "Medir",
      "rect": "Rectángulo",
      "ellipse": "Elipse",
      "callout": "Bocadillo"
    },
    "toolbar": "Barra de herramientas de captura",
    "cancel": "Cancelar"
  },
  "footer": {
    "license": "Libre y de código abierto, GPL-3.0",
    "nav": "Pie de página",
    "github": "GitHub",
    "releases": "Versiones",
    "issues": "Incidencias",
    "licenseLink": "Licencia"
  },
  "notFound": {
    "code": "Error 404",
    "title": "Página no encontrada",
    "message": "La página que buscabas se ha movido, ha cambiado de nombre o nunca existió. Deja que te llevemos de vuelta a terreno firme.",
    "home": "Volver al inicio"
  },
  "languageSwitcher": {
    "label": "Idioma"
  }
};
