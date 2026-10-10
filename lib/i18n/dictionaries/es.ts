import { type Dictionary } from "./en";

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
    "headline": "Una herramienta de capturas que termina el trabajo.",
    "sub": "Unisic es gratuito y de código abierto. Dibuja sobre la pantalla antes de capturarla, edita después, graba un GIF o un vídeo y comparte el enlace, todo con un solo atajo.",
    "installLabel": "Instala en una línea",
    "copy": "Copiar",
    "copied": "Copiado",
    "installNote": "Abre un menú. Cada descarga se comprueba con su SHA-256 publicado.",
    "installRead": "Cómo funciona el instalador",
    "otherWays": "Otras formas de instalar",
    "github": "Ver en GitHub",
    "trust": {
      "license": "Gratis, con licencia GPL-3.0",
      "privacy": "Sin telemetría, sin cuenta",
      "sessions": "Wayland y X11"
    }
  },
  "how": {
    "title": "Cómo funciona",
    "lede": "No hay asistente de configuración ni cuenta. Instálalo, pulsa un atajo y trabaja desde ahí.",
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
    "lede": "La superposición de selección es un lienzo. Dibuja flechas, texto, desenfoque y pasos sobre la pantalla congelada y pulsa Intro: las anotaciones quedan grabadas en la captura."
  },
  "overlay": {
    "caption": "La superposición de selección de Unisic: una pantalla congelada con una región seleccionada, dimensiones en píxeles en tiempo real, una flecha dibujada antes de capturar y una barra de herramientas flotante.",
    "capture": "Capturar"
  },
  "features": {
    "title": "Todo lo que viene después del atajo",
    "lede": "La mayoría de las herramientas de capturas se quedan en la imagen. Unisic sigue adelante.",
    "editor": {
      "title": "Un editor de verdad, no un recuadro de recorte",
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
      "title": "Tuyo, por completo",
      "body": "Sin telemetría, sin analíticas, sin cuenta. La única petición que Unisic hace por sí solo es comprobar si hay versiones nuevas. Con licencia GPL-3.0 y desarrollado abiertamente."
    }
  },
  "recording": {
    "title": "Graba la misma región como GIF o vídeo",
    "lede": "Captura una región, una ventana o toda la pantalla. Guarda un GIF con colores limpios, o un MP4 o WebM con sonido del sistema, del micrófono o de una sola aplicación. La repetición instantánea mantiene listos los últimos 30 segundos, y puedes recortar el clip desde la notificación.",
    "note": "{keys} siempre detiene una grabación, sin importar qué tenga el foco.",
    "caption": "Una región de pantalla en grabación: Unisic dibuja un marco con color de acento alrededor de la región, con una insignia REC y un temporizador."
  },
  "themes": {
    "title": "Temas, incluido el tuyo",
    "lede": "Elige una paleta abajo y mira cómo la app se la pone.",
    "groupLabel": "Previsualiza un tema en la ventana de la app",
    "reset": "Restablecer a Unisic",
    "note": "Cada ficha repinta la ventana de arriba en vivo. Un tema es tu sistema: sigue el esquema claro u oscuro del escritorio y el color de acento.",
    "system": "Sistema",
    "systemLabel": "Sistema: sigue el esquema claro u oscuro de tu escritorio; no se puede previsualizar aquí",
    "previewLabel": "La ventana principal de Unisic con el tema {theme}"
  },
  "download": {
    "title": "Instala Unisic",
    "lede": "Hecho para Wayland, y también funciona en X11. Elige cómo quieres instalarlo.",
    "points": {
      "verify": "Cada descarga se comprueba con su SHA-256",
      "noRoot": "El AppImage no necesita root y se actualiza solo",
      "free": "Gratis y de código abierto, GPL-3.0"
    },
    "or": "O elige tu sistema",
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
      "appimage": "Recomendado. Universal: funciona en cualquier distribución, no necesita root y no instala nada en tu sistema. Se actualiza solo: descarga la nueva versión, la comprueba con el SHA-256 publicado para ella, la sustituye en el sitio y reinicia Unisic cuando estás inactivo."
    },
    "downloadBtn": "Descargar",
    "checking": "Comprobando la última versión",
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
      "quickTask": "Abrir el selector de tareas rápidas",
      "replay": "Iniciar/guardar la repetición instantánea",
      "stop": "Detener grabación (fijo)"
    },
    "tryHint": "Esta tabla está en vivo: mantén pulsado un atajo en tu teclado y las teclas se iluminan.",
    "note": "Todos los atajos, salvo la tecla fija de detención, se pueden editar en Ajustes y se aplican al sistema de inmediato."
  },
  "reference": {
    "title": "Referencia"
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
