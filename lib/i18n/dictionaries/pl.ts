import { type Dictionary } from "./en";

// Machine-translated (pl) + in-workflow QA pass. Native review recommended.
// Structure validated against en.ts.
export const pl: Dictionary = {
  "meta": {
    "title": "Unisic — Zrzuty ekranu i nagrywanie ekranu na Linux",
    "description": "Otwartoźródłowy program do zrzutów ekranu i nagrywania ekranu dla Linux. Adnotacje przed zrzutem, edycja po nim, nagrywanie GIF-ów i wideo, przesyłanie wszędzie. Zero telemetrii, GPLv3.",
    "ogTitle": "Unisic — Zrzuty ekranu zrobione jak należy na Linux",
    "ogDescription": "Ciche przechwytywanie, adnotacje przed zrzutem, edytor z 12 narzędziami, nagrywanie GIF-ów i wideo, natychmiastowe przesyłanie. Zero telemetrii, GPLv3.",
    "ogImageAlt": "Edytor zrzutów ekranu Unisic na Linux"
  },
  "nav": {
    "docs": "Dokumentacja",
    "skip": "Przejdź do treści",
    "features": "Funkcje",
    "recording": "Nagrywanie",
    "github": "Unisic na GitHub",
    "download": "Pobierz"
  },
  "hero": {
    "headline": "Zrzuty ekranu zrobione jak należy na Linux.",
    "sub": "Ciche przechwytywanie, adnotacje przed zrzutem, edytor z 12 narzędziami, nagrywanie GIF-ów i wideo, natychmiastowe przesyłanie. Zero telemetrii. GPLv3.",
    "download": "Pobierz",
    "github": "Zobacz na GitHub"
  },
  "usp": {
    "title": "Dodawaj adnotacje, zanim jeszcze zrobisz zrzut",
    "lede": "Nakładka zaznaczenia to płótno. Rysuj strzałki, tekst, rozmycie i kroki na zamrożonym ekranie, a potem naciśnij Enter: adnotacje zostaną wtopione w zrzut."
  },
  "overlay": {
    "caption": "Nakładka zaznaczenia Unisic: zamrożony ekran z zaznaczonym obszarem, wymiary w pikselach na żywo, strzałka narysowana przed przechwyceniem oraz pływający pasek narzędzi.",
    "capture": "Przechwyć"
  },
  "features": {
    "title": "Wszystko po skrócie klawiszowym",
    "lede": "Większość narzędzi podaje ci prostokąt pikseli i odchodzi. Unisic zajmuje się resztą procesu.",
    "editor": {
      "title": "Prawdziwy edytor, a nie ramka do kadrowania",
      "body": "Dwanaście narzędzi, w tym wyróżnienie, pikselizacja, inteligentna gumka, ponumerowane kroki i kadrowanie. Cofanie, ponawianie, powiększanie — wszystko w przestrzeni pikseli obrazu."
    },
    "upload": {
      "title": "Przesyłaj wszędzie",
      "body": "Własne cele HTTP, import uploadera ShareX, FTP i SFTP, wbudowane hosty. Link ląduje w twoim schowku.",
      "copied": "Skopiowano"
    },
    "history": {
      "title": "Historia z miniaturami",
      "body": "Każdy zrzut o jedną siatkę stąd. Usunięcie przenosi plik do kosza, nigdy poza niego."
    },
    "silent": {
      "title": "Ciche przechwytywanie",
      "body": "Bez błysku migawki, bez żonglowania oknami. Natywna ścieżka KWin na Plasmie, portale wszędzie indziej."
    },
    "yours": {
      "title": "W całości twój",
      "body": "Zero telemetrii, brak kont, nic nie wysyła danych na zewnątrz. Na licencji GPL-3.0, tworzony w otwarty sposób."
    }
  },
  "recording": {
    "title": "Ten sam obszar jako GIF lub wideo",
    "lede": "GIF z dwuprzebiegową paletą dla wyrazistych kolorów albo MP4 i WebM przez portal ScreenCast, PipeWire i ffmpeg. Nagrywaj obszar, cały ekran lub okno.",
    "note": "{keys} zawsze zatrzymuje nagrywanie, niezależnie od tego, co ma fokus.",
    "caption": "Nagrywany obszar ekranu: Unisic rysuje wokół obszaru ramkę w kolorze akcentu z plakietką REC i licznikiem czasu."
  },
  "themes": {
    "title": "Dziewięć motywów, w tym twój",
    "lede": "Wybierz poniżej paletę i patrz, jak aplikacja ją zakłada.",
    "groupLabel": "Podejrzyj motyw w oknie aplikacji",
    "reset": "Przywróć Unisic",
    "note": "Każdy kafelek na żywo przemalowuje okno powyżej. Dziewiąty motyw to twój system: podąża za jasnym lub ciemnym schematem pulpitu i kolorem akcentu.",
    "system": "System",
    "systemLabel": "System — podąża za jasnym lub ciemnym schematem pulpitu; niedostępny do podglądu tutaj",
    "previewLabel": "Główne okno Unisic w motywie {theme}"
  },
  "download": {
    "title": "Zainstaluj Unisic",
    "lede": "Wymaga sesji Wayland z xdg-desktop-portal. Nagrywanie potrzebuje też PipeWire i ffmpeg.",
    "repoLede": "Wybierz swoją dystrybucję — repozytorium aktualizuje Unisic przez menedżera pakietów. AppImage to pobranie bezpośrednie.",
    "distroListLabel": "Wybierz dystrybucję lub format pakietu",
    "versionLabel": "Wersja",
    "copyCmd": "Kopiuj komendy",
    "copiedCmd": "Skopiowano",
    "steps": {
      "importKey": "Zaimportuj klucz podpisujący repozytorium:",
      "addRepo": "Dodaj repozytorium:",
      "refreshRepo": "Odśwież repozytoria:",
      "enableRepo": "Włącz repozytorium COPR:",
      "install": "Zainstaluj Unisic:"
    },
    "notes": {
      "ubuntu": "Ubuntu 25.10 traci wsparcie w lipcu 2026 — lepiej wybrać 26.04. Obie wersje wymagają Qt 6.5+, którego starsze wydania nie mają.",
      "debian": "Wymaga Debiana 13 (trixie) lub nowszego ze względu na Qt 6.5+.",
      "fedora": "Kompilacje dla Fedory 43, 44 i Rawhide. Pakiet z COPR dociąga opcjonalne zależności, więc nagrywanie, OCR i usuwanie tła działają od razu.",
      "opensuse": "Podczas odświeżania zypper poprosi o zaakceptowanie klucza podpisującego repozytorium.",
      "arch": "Podpisane repozytorium pacmana na openSUSE Build Service — AUR nie jest potrzebny.",
      "appimage": "Uniwersalny — działa na każdej dystrybucji. Aplikacja aktualizuje się sama: pobiera nowy AppImage, podmienia się w miejscu i restartuje przy bezczynności.",
    },
    "downloadBtn": "Pobierz",
    "checking": "Sprawdzanie najnowszego wydania",
    "latest": "Najnowsze wydanie {tag}",
    "fallbackBtn": "Pobierz z GitHub Releases",
    "fallbackNote": "Nie udało się teraz połączyć z GitHub, ale każda kompilacja jest tam dostępna.",
    "allReleases": "Wszystkie wydania i starsze kompilacje",
    "earlyAccess": "Unisic jest we wczesnym dostępie deweloperskim: działa, ale spodziewaj się niedociągnięć na egzotycznych kompozytorach. Każde zgłoszenie w {link} pomaga.",
    "earlyAccessLink": "Zgłoszeniach"
  },
  "hotkeys": {
    "caption": "Domyślne skróty klawiszowe",
    "action": "Akcja",
    "shortcut": "Skrót",
    "rows": {
      "full": "Przechwyć cały ekran",
      "region": "Przechwyć obszar",
      "window": "Przechwyć aktywne okno",
      "gif": "Nagraj GIF (obszar)",
      "video": "Nagraj wideo (obszar)",
      "stop": "Zatrzymaj nagrywanie (stałe)"
    },
    "tryHint": "Ta tabela jest na żywo: przytrzymaj skrót na klawiaturze, a klawisze się rozświetlą.",
    "note": "Wszystkie klawisze poza stałym klawiszem zatrzymania można edytować w Ustawieniach, a zmiany są od razu stosowane w systemie."
  },
  "reference": {
    "title": "Materiały referencyjne"
  },
  "compositors": {
    "title": "Działa z twoim kompozytorem",
    "plasma": {
      "name": "KDE Plasma",
      "body": "W pełni cicha ścieżka: natywne KWin ScreenShot2 ze skrótami KGlobalAccel. Żadnych okien dialogowych portali."
    },
    "gnome": {
      "name": "GNOME i inne pulpity",
      "body": "Przechwytywanie i nagrywanie przechodzą przez xdg-desktop-portal z PipeWire. Standardowo, bezpiecznie, bez sztuczek."
    },
    "wlroots": {
      "name": "niri i kompozytory wlroots",
      "body": "Unisic przechwytuje przez wlr-screencopy za pomocą grim, cicho i bezpiecznie na wielu monitorach. Przypisz skróty w konfiguracji kompozytora; działająca instancja przechwyci polecenie."
    }
  },
  "mainWindow": {
    "ariaLabel": "Główne okno Unisic: pasek boczny ze stronami Przechwyć, Nagraj, GIF, Historia, Cele i Ustawienia oraz strona Przechwyć z akcjami dla całego ekranu, obszaru i okna oraz przełącznikami działań po przechwyceniu.",
    "nav": {
      "capture": "Przechwyć",
      "record": "Nagraj",
      "gif": "GIF",
      "history": "Historia",
      "destinations": "Cele",
      "settings": "Ustawienia"
    },
    "pageTitle": "Przechwyć",
    "pageSub": "Zrzuty ekranu lądują w edytorze, gdzie możesz dodać adnotacje, a następnie zapisać, skopiować lub przesłać.",
    "cards": {
      "fullScreen": {
        "title": "Cały ekran",
        "sub": "Wszystkie monitory"
      },
      "region": {
        "title": "Obszar",
        "sub": "Zaznacz i adnotuj na żywo"
      },
      "window": {
        "title": "Okno",
        "sub": "Aktywne okno"
      }
    },
    "afterCapture": "Po przechwyceniu",
    "toggles": {
      "editor": "Otwórz edytor",
      "clipboard": "Kopiuj obraz do schowka",
      "disk": "Zapisz na dysku automatycznie",
      "upload": "Prześlij i skopiuj link"
    }
  },
  "editorMockup": {
    "ariaLabel": "Okno edytora Unisic: pasek narzędzi z dwunastoma narzędziami do adnotacji, zrzut ekranu opatrzony strzałką, wyróżnieniem i ponumerowanymi krokami oraz akcje kopiowania, zapisu i przesyłania.",
    "title": "Edytor Unisic",
    "copy": "Kopiuj",
    "save": "Zapisz",
    "upload": "Prześlij"
  },
  "footer": {
    "license": "Wolne i otwartoźródłowe, GPL-3.0",
    "nav": "Stopka",
    "github": "GitHub",
    "releases": "Wydania",
    "issues": "Zgłoszenia",
    "licenseLink": "Licencja"
  },
  "notFound": {
    "code": "Błąd 404",
    "title": "Nie znaleziono strony",
    "message": "Strona, której szukałeś, została przeniesiona, zmieniła nazwę lub nigdy nie istniała. Sprowadźmy cię z powrotem na stały grunt.",
    "home": "Powrót do strony głównej"
  },
  "languageSwitcher": {
    "label": "Język"
  }
};
