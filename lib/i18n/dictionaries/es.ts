import { type Dictionary } from "./en";

// Machine-translated (es) + in-workflow QA pass. Native review recommended.
// Structure validated against en.ts.
export const es: Dictionary = {
  "meta": {
    "title": "Unisic — Capturas de pantalla bien hechas en Linux Wayland",
    "description": "Capturador de pantalla y grabador de código abierto para Linux Wayland. Anota antes de capturar, edita después, graba GIF y vídeo, sube a cualquier sitio. Cero telemetría, GPLv3.",
    "ogTitle": "Unisic — Capturas de pantalla bien hechas en Linux Wayland",
    "ogDescription": "Captura silenciosa, anotación antes de disparar, un editor con 12 herramientas, grabación de GIF y vídeo, subida instantánea. Cero telemetría, GPLv3.",
    "ogImageAlt": "Editor de capturas Unisic en Linux Wayland"
  },
  "nav": {
    "docs": "Documentación",
    "skip": "Saltar al contenido",
    "features": "Funciones",
    "recording": "Grabación",
    "github": "Unisic en GitHub",
    "download": "Descargar"
  },
  "hero": {
    "headline": "Capturas de pantalla bien hechas en Linux Wayland.",
    "sub": "Captura silenciosa, anotación antes de disparar, un editor con 12 herramientas, grabación de GIF y vídeo, subida instantánea. Cero telemetría. GPLv3.",
    "download": "Descargar",
    "github": "Ver en GitHub"
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
    "lede": "La mayoría de las herramientas te entregan un rectángulo de píxeles y se despiden. Unisic cubre el resto del flujo de trabajo.",
    "editor": {
      "title": "Un editor de verdad, no un recuadro de recorte",
      "body": "Doce herramientas, incluidas resaltado, pixelado, borrador inteligente, pasos numerados y recorte. Deshacer, rehacer, zoom, todo en el espacio de píxeles de la imagen."
    },
    "upload": {
      "title": "Sube a cualquier sitio",
      "body": "Destinos HTTP personalizados, importación del subidor de ShareX, FTP y SFTP, servidores integrados. El enlace acaba en tu portapapeles.",
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
      "body": "Cero telemetría, sin cuentas, nada llama a casa. Con licencia GPL-3.0 y desarrollado en abierto."
    }
  },
  "recording": {
    "title": "La misma región, como GIF o vídeo",
    "lede": "GIF con una paleta de dos pasadas para colores nítidos, o MP4 y WebM a través del portal ScreenCast, PipeWire y ffmpeg. Graba una región, la pantalla completa o una ventana.",
    "note": "{keys} siempre detiene una grabación, sin importar qué tenga el foco.",
    "caption": "Una región de pantalla en grabación: Unisic dibuja un marco con color de acento alrededor de la región, con una insignia REC y un temporizador."
  },
  "themes": {
    "title": "Nueve temas, incluido el tuyo",
    "lede": "Elige una paleta abajo y mira cómo la app se la pone.",
    "groupLabel": "Previsualiza un tema en la ventana de la app",
    "reset": "Restablecer a Unisic",
    "note": "Cada ficha repinta la ventana de arriba en vivo. El noveno tema es tu sistema: sigue el esquema claro u oscuro del escritorio y el color de acento.",
    "system": "Sistema",
    "systemLabel": "Sistema — sigue el esquema claro u oscuro de tu escritorio; no se puede previsualizar aquí",
    "previewLabel": "La ventana principal de Unisic con el tema {theme}"
  },
  "download": {
    "title": "Instala Unisic",
    "lede": "Necesita una sesión Wayland con xdg-desktop-portal. La grabación también requiere PipeWire y ffmpeg.",
    "repoLede": "Elige tu distribución: el repositorio mantiene Unisic actualizado a través del gestor de paquetes. AppImage es una descarga directa.",
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
      "fedora": "Compilaciones para Fedora 43, 44 y Rawhide. El paquete de COPR incluye las dependencias opcionales, así que la grabación, el OCR y la eliminación de fondo funcionan desde el primer momento.",
      "opensuse": "zypper te pedirá aceptar la clave de firma del repositorio durante el refresco.",
      "arch": "Un repositorio pacman firmado en openSUSE Build Service: no hace falta AUR.",
      "appimage": "Universal: funciona en cualquier distribución. La aplicación se actualiza sola: descarga el nuevo AppImage, se sustituye en el sitio y se reinicia cuando está inactiva."
    },
    "downloadBtn": "Descargar",
    "checking": "Comprobando la última versión",
    "latest": "Última versión {tag}",
    "fallbackBtn": "Consíguelo en GitHub Releases",
    "fallbackNote": "No se pudo contactar con GitHub ahora mismo, pero todas las compilaciones están allí.",
    "allReleases": "Todas las versiones y compilaciones anteriores",
    "earlyAccess": "Unisic está en acceso anticipado para desarrolladores: funciona, pero espera asperezas en compositores exóticos. Cada informe en {link} ayuda.",
    "earlyAccessLink": "Incidencias"
  },
  "hotkeys": {
    "caption": "Atajos por defecto",
    "action": "Acción",
    "shortcut": "Atajo",
    "rows": {
      "full": "Capturar pantalla completa",
      "region": "Capturar región",
      "window": "Capturar ventana activa",
      "gif": "Grabar GIF (región)",
      "video": "Grabar vídeo (región)",
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
    "ariaLabel": "La ventana principal de Unisic: una barra lateral con las páginas Capturar, Grabar, GIF, Historial, Destinos y Ajustes, y la página Capturar con las acciones de pantalla completa, región y ventana, además de opciones posteriores a la captura.",
    "nav": {
      "capture": "Capturar",
      "record": "Grabar",
      "gif": "GIF",
      "history": "Historial",
      "destinations": "Destinos",
      "settings": "Ajustes"
    },
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
    "afterCapture": "Después de capturar",
    "toggles": {
      "editor": "Abrir el editor",
      "clipboard": "Copiar imagen al portapapeles",
      "disk": "Guardar en disco automáticamente",
      "upload": "Subir y copiar el enlace"
    }
  },
  "editorMockup": {
    "ariaLabel": "La ventana del editor de Unisic: una barra de herramientas con doce herramientas de anotación, una captura anotada con una flecha, un resaltado y pasos numerados, y acciones de copiar, guardar y subir.",
    "title": "Editor de Unisic",
    "copy": "Copiar",
    "save": "Guardar",
    "upload": "Subir"
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
