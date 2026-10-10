import { type Dictionary } from "./en";

// Machine-translated (pl) + in-workflow QA pass. Native review recommended.
// Structure validated against en.ts.
export const pl: Dictionary = {
  "meta": {
    "title": "Unisic - Zrzuty ekranu i nagrywanie ekranu na Linux",
    "description": "Otwartoźródłowy program do zrzutów ekranu i nagrywania ekranu dla Linux. Adnotacje przed zrzutem, edycja po nim, nagrywanie GIF-ów i wideo, przesyłanie wszędzie. Zero telemetrii, GPLv3.",
    "ogTitle": "Unisic - Zrzuty ekranu zrobione jak należy na Linux",
    "ogDescription": "Rób zrzuty, adnotuj, edytuj, nagrywaj i udostępniaj jednym skrótem. Ciche przechwytywanie na Wayland, nagrywanie GIF-ów i wideo, OCR, natychmiastowe przesyłanie. Zero telemetrii, GPLv3.",
    "ogImageAlt": "Edytor zrzutów ekranu Unisic na Linux"
  },
  "nav": {
    "docs": "Dokumentacja",
    "skip": "Przejdź do treści",
    "how": "Jak to działa",
    "features": "Funkcje",
    "github": "Unisic na GitHub",
    "download": "Pobierz"
  },
  "hero": {
    "eyebrow": "Zrzuty ekranu i nagrywanie ekranu na Linux",
    "headline": "Narzędzie do zrzutów, które doprowadza sprawę do końca.",
    "sub": "Unisic jest darmowy i otwartoźródłowy. Rysuj po ekranie, zanim zrobisz zrzut, edytuj go potem, nagraj GIF-a lub wideo i udostępnij link, wszystko jednym skrótem klawiszowym.",
    "installLabel": "Instalacja w jednej linii",
    "copy": "Kopiuj",
    "copied": "Skopiowano",
    "installNote": "Otwiera menu. Każde pobranie jest sprawdzane z opublikowaną sumą SHA-256.",
    "installRead": "Jak działa instalator",
    "otherWays": "Inne sposoby instalacji",
    "github": "Zobacz na GitHub",
    "trust": {
      "license": "Darmowy, licencja GPL-3.0",
      "privacy": "Bez telemetrii i bez konta",
      "sessions": "Wayland i X11"
    }
  },
  "how": {
    "title": "Jak to działa",
    "lede": "Bez kreatora konfiguracji i bez konta. Zainstaluj, naciśnij skrót i pracuj.",
    "steps": {
      "hotkey": {
        "title": "Naciśnij skrót",
        "body": "{keys} uruchamia zrzut obszaru. Pełny ekran i okno mają własne klawisze, które zmienisz w Ustawieniach."
      },
      "mark": {
        "title": "Zaznacz, co trzeba",
        "body": "Rysuj strzałki, tekst, rozmycie i ponumerowane kroki wprost na zamrożonym ekranie, potem naciśnij Enter. Edytor ma więcej narzędzi."
      },
      "share": {
        "title": "Udostępnij",
        "body": "Zapisz, skopiuj albo prześlij. Po przesłaniu link jest już w schowku."
      }
    }
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
    "lede": "Większość narzędzi do zrzutów kończy na obrazku. Unisic idzie dalej.",
    "editor": {
      "title": "Prawdziwy edytor, a nie ramka do kadrowania",
      "body": "Strzałki, kształty, tekst, wyróżnienie, rozmycie, pikselizacja, ponumerowane kroki, dymki i kadrowanie. Cofanie, ponawianie i powiększanie bez ograniczeń."
    },
    "ocr": {
      "title": "Tekst prosto z pikseli",
      "body": "Skopiuj tekst z dowolnego obszaru prosto do schowka. Kody QR i kody kreskowe od razu zamieniają się w swoją zawartość."
    },
    "upload": {
      "title": "Przesyłaj wszędzie",
      "body": "Twój własny serwer HTTP, pliki uploadera ShareX, FTP, SFTP albo wbudowany host. Link kopiuje się za ciebie.",
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
      "body": "Bez telemetrii, bez analityki, bez konta. Jedyne zapytanie, jakie Unisic wysyła sam z siebie, to sprawdzenie nowych wydań. Licencja GPL-3.0, tworzony otwarcie."
    }
  },
  "recording": {
    "title": "Nagraj ten sam obszar jako GIF lub wideo",
    "lede": "Nagrywaj obszar, okno albo cały ekran. Zapisz GIF-a z czystymi kolorami albo MP4 lub WebM z dźwiękiem systemu, mikrofonu lub jednej aplikacji. Natychmiastowa powtórka trzyma ostatnie 30 sekund w gotowości, a klip przytniesz prosto z powiadomienia.",
    "note": "{keys} zawsze zatrzymuje nagrywanie, niezależnie od tego, co ma fokus.",
    "caption": "Nagrywany obszar ekranu: Unisic rysuje wokół obszaru ramkę w kolorze akcentu z plakietką REC i licznikiem czasu."
  },
  "themes": {
    "title": "Motywy, w tym twój",
    "lede": "Wybierz poniżej paletę i patrz, jak aplikacja ją zakłada.",
    "groupLabel": "Podejrzyj motyw w oknie aplikacji",
    "reset": "Przywróć Unisic",
    "note": "Każdy kafelek na żywo przemalowuje okno powyżej. Jeden motyw to twój system: podąża za jasnym lub ciemnym schematem pulpitu i kolorem akcentu.",
    "system": "System",
    "systemLabel": "System: podąża za jasnym lub ciemnym schematem pulpitu; niedostępny do podglądu tutaj",
    "previewLabel": "Główne okno Unisic w motywie {theme}"
  },
  "download": {
    "title": "Zainstaluj Unisic",
    "lede": "Stworzony dla Wayland, działa też na X11. Wybierz sposób instalacji.",
    "points": {
      "verify": "Każde pobranie jest sprawdzane z sumą SHA-256",
      "noRoot": "AppImage nie wymaga roota i aktualizuje się samo",
      "free": "Darmowy i otwartoźródłowy, GPL-3.0"
    },
    "or": "Albo wybierz swój system",
    "repoLede": "AppImage to zalecany sposób: jeden plik, bez roota, a gdy pojawi się nowa wersja, podmienia sam siebie. Możesz zamiast tego wybrać swoją dystrybucję - repozytorium aktualizuje Unisic przez menedżera pakietów; w wydaniu znajdziesz też pojedyncze pakiety .deb i .rpm oraz pakiet dla Archa, które przy pierwszej instalacji podpinają repozytorium.",
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
      "ubuntu": "Ubuntu 25.10 traci wsparcie w lipcu 2026, więc lepiej wybrać 26.04. Obie wersje wymagają Qt 6.5+, którego starsze wydania nie mają.",
      "debian": "Wymaga Debiana 13 (trixie) lub nowszego ze względu na Qt 6.5+.",
      "fedora": "Kompilacje dla Fedory 43, 44 i Rawhide. Wszystkie wymagane zależności instalują się razem z pakietem, więc nagrywanie, OCR i dekodowanie kodów QR działają od razu.",
      "opensuse": "Podczas odświeżania zypper poprosi o zaakceptowanie klucza podpisującego repozytorium.",
      "arch": "Podpisane repozytorium pacmana na openSUSE Build Service. AUR nie jest potrzebny.",
      "nix": "Działa wszędzie tam, gdzie Nix, także na NixOS. Wypróbuj przez nix run albo dodaj flake jako wejście do konfiguracji deklaratywnej; na NixOS włącz xdg.portal i PipeWire.",
      "appimage": "Zalecane. Uniwersalny: działa na każdej dystrybucji, nie wymaga roota i nic nie instaluje w systemie. Aktualizuje się sam: pobiera nowe wydanie, sprawdza je z opublikowaną dla niego sumą SHA-256, podmienia na miejscu i restartuje Unisic, gdy jesteś bezczynny."
    },
    "downloadBtn": "Pobierz",
    "checking": "Sprawdzanie najnowszego wydania",
    "latest": "Najnowsze wydanie {tag}",
    "fallbackBtn": "Pobierz z GitHub Releases",
    "fallbackNote": "Nie udało się teraz połączyć z GitHub, ale każda kompilacja jest tam dostępna.",
    "allReleases": "Wszystkie wydania i starsze kompilacje",
    "stability": "Unisic jest w wersji beta. Jeśli źle działa na twoim pulpicie, pomoże zgłoszenie w {link}.",
    "stabilityLink": "Zgłoszeniach"
  },
  "hotkeys": {
    "caption": "Domyślne skróty klawiszowe",
    "action": "Akcja",
    "shortcut": "Skrót",
    "rows": {
      "full": "Przechwyć cały ekran",
      "region": "Przechwyć obszar",
      "window": "Przechwyć aktywne okno",
      "gif": "Nagraj GIF (start/stop)",
      "video": "Nagraj wideo (start/stop)",
      "ocr": "Wykonaj OCR obszaru (kopiuje tekst)",
      "copyLast": "Skopiuj ostatni zrzut",
      "quickTask": "Otwórz menu szybkich zadań",
      "replay": "Rozpocznij/zapisz natychmiastową powtórkę",
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
    "ariaLabel": "Główne okno Unisic: pasek boczny ze stronami Przechwyć, Nagraj i Edytuj nad biblioteką Historia i Serwery oraz strona Przechwyć z akcjami dla całego ekranu, obszaru i okna oraz siatką opcji przechwytywania.",
    "nav": {
      "capture": "Przechwyć",
      "record": "Nagraj",
      "edit": "Edytuj",
      "history": "Historia",
      "servers": "Serwery"
    },
    "library": "Biblioteka",
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
    "options": {
      "title": "Opcje przechwytywania",
      "delay": "Opóźnienie przechwytywania",
      "repeat": "Powtórz ostatni obszar",
      "repeatAction": "Powtórz",
      "server": "Serwer wysyłki",
      "cursor": "Dołącz kursor myszy",
      "editor": "Otwórz edytor",
      "clipboard": "Kopiuj obraz do schowka",
      "disk": "Zapisz na dysku automatycznie",
      "upload": "Prześlij i skopiuj link"
    }
  },
  "editorMockup": {
    "ariaLabel": "Okno edytora Unisic: karta narzędzi z narzędziami adnotacji nad otwartą grupą kształtów i jej opcjami kreski, zrzut ekranu z adnotacjami w postaci strzałki, zakreślenia i numerowanych kroków oraz akcje kopiowania, zapisu i przesyłania.",
    "title": "Edytor Unisic",
    "stroke": "Grubość",
    "copy": "Kopiuj",
    "save": "Zapisz",
    "upload": "Prześlij",
    "more": "Więcej"
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
