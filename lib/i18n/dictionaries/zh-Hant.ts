import { type Dictionary } from "./en";

// Machine-translated (zh-Hant) + in-workflow QA pass. Native review recommended.
// Structure validated against en.ts.
export const zhHant: Dictionary = {
  "meta": {
    "title": "Unisic - Linux 螢幕截圖與螢幕錄影工具",
    "description": "適用於 Linux 的開源截圖與螢幕錄影工具。截圖前先標註，事後再編輯，錄製 GIF 與影片，隨處上傳。零遙測，GPLv3。",
    "ogTitle": "Unisic - 在 Linux 上把截圖做對",
    "ogDescription": "一個快速鍵完成擷圖、標註、編輯、錄製與分享。Wayland 下靜默擷取，GIF 與影片錄製，OCR，即時上傳。零遙測，GPLv3。",
    "ogImageAlt": "Linux 上的 Unisic 截圖編輯器"
  },
  "nav": {
    "docs": "文件",
    "skip": "跳至內容",
    "how": "使用方式",
    "features": "功能",
    "github": "Unisic 的 GitHub",
    "download": "下載"
  },
  "hero": {
    "eyebrow": "適用於 Linux 的截圖與螢幕錄影工具",
    "headline": "把事情一次做完的截圖工具。",
    "sub": "Unisic 免費且開源。擷取前先在螢幕上標註，擷取後再編輯，錄製 GIF 或影片，然後分享連結，全部從一個快速鍵開始。",
    "installLabel": "一行指令安裝",
    "copy": "複製",
    "copied": "已複製",
    "installNote": "會開啟一個選單。每個下載都會對照已發布的 SHA-256 驗證。",
    "installRead": "安裝腳本如何運作",
    "otherWays": "其他安裝方式",
    "github": "在 GitHub 上查看",
    "trust": {
      "license": "免費，GPL-3.0 授權",
      "privacy": "零遙測，不需帳號",
      "sessions": "支援 Wayland 與 X11"
    }
  },
  "how": {
    "title": "使用方式",
    "lede": "沒有安裝精靈，也不需要帳號。安裝後按下快速鍵，直接開始。",
    "steps": {
      "hotkey": {
        "title": "按下快速鍵",
        "body": "{keys} 開始區域擷取。全螢幕與視窗各有自己的按鍵，可在設定中修改。"
      },
      "mark": {
        "title": "直接標註",
        "body": "在凍結的螢幕上直接畫箭頭、文字、模糊和編號步驟，然後按 Enter。編輯器裡還有更多工具。"
      },
      "share": {
        "title": "分享出去",
        "body": "儲存、複製或上傳。上傳後，連結已經在你的剪貼簿裡。"
      }
    }
  },
  "usp": {
    "title": "在截圖之前就先標註",
    "lede": "選取覆蓋層就是一塊畫布。在凍結的畫面上畫箭頭、文字、模糊與步驟標記，然後按 Enter：標註便直接烙印進截圖中。"
  },
  "overlay": {
    "caption": "Unisic 的選取覆蓋層：凍結的畫面上有一塊選取的區域、即時的像素尺寸、擷取前畫好的箭頭，以及浮動工具列。",
    "capture": "擷取"
  },
  "features": {
    "title": "熱鍵之後的一切",
    "lede": "大多數截圖工具到圖片就結束了。Unisic 繼續往下做。",
    "editor": {
      "title": "真正的編輯器，而非裁切框",
      "body": "箭頭、形狀、文字、醒目標示、模糊、像素化、編號步驟、標註框與裁切。復原、重做、縮放不限次數。"
    },
    "ocr": {
      "title": "把像素變成文字",
      "body": "把任意區域的文字直接複製到剪貼簿。QR 碼與條碼會解碼為其內容。"
    },
    "upload": {
      "title": "隨處上傳",
      "body": "你自己的 HTTP 伺服器、ShareX 上傳器檔案、FTP、SFTP，或內建主機。連結會自動為你複製。",
      "copied": "已複製"
    },
    "history": {
      "title": "附縮圖的歷史記錄",
      "body": "每張截圖，都在一個網格之遙。刪除只會把檔案移到垃圾桶，絕不會直接抹去。"
    },
    "silent": {
      "title": "靜默擷取",
      "body": "沒有快門閃光，不用切換視窗。在 Plasma 上走原生 KWin 路徑，其他環境則透過 portals。"
    },
    "yours": {
      "title": "完全屬於你",
      "body": "零遙測，無分析，不需帳號。Unisic 自己發出的唯一請求是檢查新版本。採用 GPL-3.0 授權，公開開發。"
    }
  },
  "recording": {
    "title": "同一區域，錄成 GIF 或影片",
    "lede": "錄製區域、視窗或整個螢幕。儲存色彩清晰的 GIF，或帶系統聲音、麥克風或單一應用程式聲音的 MP4 或 WebM。即時回放隨時保留最近 30 秒，你還可以直接在通知裡剪輯片段。",
    "note": "無論焦點在哪裡，{keys} 都能停止錄製。",
    "caption": "正在錄製的一塊螢幕區域：Unisic 在區域四周畫出強調色邊框，並附上 REC 標記與計時器。"
  },
  "themes": {
    "title": "多種主題，包含你自己的",
    "lede": "在下方挑一種配色，看應用程式換上它。",
    "groupLabel": "在應用程式視窗中預覽主題",
    "reset": "重設為 Unisic",
    "note": "每個色塊都會即時重繪上方的視窗。其中一種主題是你的系統：它會跟隨桌面的淺色或深色配置與強調色。",
    "system": "系統",
    "systemLabel": "系統：跟隨你桌面的淺色或深色配置；此處無法預覽",
    "previewLabel": "採用 {theme} 主題的 Unisic 主視窗"
  },
  "download": {
    "title": "安裝 Unisic",
    "lede": "為 Wayland 而生，也能在 X11 上執行。選擇你想要的安裝方式。",
    "points": {
      "verify": "每個下載都會對照 SHA-256 驗證",
      "noRoot": "AppImage 不需要 root，並會自行更新",
      "free": "免費開源，GPL-3.0"
    },
    "or": "或選擇你的系統",
    "repoLede": "建議使用 AppImage：單一檔案，不需 root，有新版本時會自行替換。也可以改為選擇你的發行版--軟體庫會透過套件管理器讓 Unisic 保持最新；發佈版本中也附有一次性的 .deb、.rpm 與 Arch 套件，首次安裝時就會設定好軟體庫。",
    "distroListLabel": "選擇發行版或軟體套件格式",
    "versionLabel": "版本",
    "copyCmd": "複製命令",
    "copiedCmd": "已複製",
    "steps": {
      "importKey": "匯入軟體庫簽署金鑰：",
      "addRepo": "加入軟體庫：",
      "refreshRepo": "重新整理軟體庫：",
      "enableRepo": "啟用 COPR 軟體庫：",
      "install": "安裝 Unisic："
    },
    "notes": {
      "ubuntu": "Ubuntu 25.10 將於 2026 年 7 月結束支援--建議選擇 26.04。兩者都需要 Qt 6.5+，較舊的版本並未提供。",
      "debian": "因需要 Qt 6.5+，須使用 Debian 13（trixie）或更新版本。",
      "fedora": "提供 Fedora 43、44 與 Rawhide 的組建。所有必要相依套件都會隨套件一併安裝，因此錄製、OCR 與 QR 解碼都能直接使用。",
      "opensuse": "重新整理時 zypper 會要求你接受軟體庫的簽署金鑰。",
      "arch": "openSUSE Build Service 上的已簽署 pacman 軟體庫--不需要 AUR。",
      "nix": "只要有 Nix 就能執行，包含 NixOS。可用 nix run 直接試用，或把 flake 作為 input 加入設定進行宣告式安裝；在 NixOS 上請啟用 xdg.portal 與 PipeWire。",
      "appimage": "建議。通用格式--可在任何發行版上執行，不需 root，也不會在系統中安裝任何東西。它會自行更新：下載新版本，以發佈時公布的 SHA-256 校驗，就地替換，並在你閒置時重新啟動 Unisic。"
    },
    "downloadBtn": "下載",
    "checking": "正在查看最新版本",
    "latest": "最新版本 {tag}",
    "fallbackBtn": "從 GitHub Releases 取得",
    "fallbackNote": "目前無法連上 GitHub，但每個組建版本都在那裡。",
    "allReleases": "所有版本與較舊的組建",
    "stability": "Unisic 處於測試階段。如果它在你的桌面上出問題，請在 {link} 提出回報。",
    "stabilityLink": "Issues"
  },
  "hotkeys": {
    "caption": "預設熱鍵",
    "action": "動作",
    "shortcut": "快捷鍵",
    "rows": {
      "full": "擷取整個螢幕",
      "region": "擷取區域",
      "window": "擷取使用中的視窗",
      "gif": "錄製 GIF（開始／停止）",
      "video": "錄製影片（開始／停止）",
      "ocr": "OCR 區域（複製文字）",
      "copyLast": "複製最近一次擷取",
      "quickTask": "開啟快速任務選擇器",
      "replay": "開始／儲存即時重播",
      "stop": "停止錄製（固定）"
    },
    "tryHint": "這張表是即時的：在鍵盤上按住某個快捷鍵，對應的按鍵便會亮起。",
    "note": "除了固定的停止鍵之外，全部都可在「設定」中修改，並立即套用到系統。"
  },
  "reference": {
    "title": "參考"
  },
  "compositors": {
    "title": "與你的合成器搭配運作",
    "plasma": {
      "name": "KDE Plasma",
      "body": "完全靜默的路徑：原生 KWin ScreenShot2 搭配 KGlobalAccel 熱鍵。完全沒有 portal 對話框。"
    },
    "gnome": {
      "name": "GNOME 與其他桌面環境",
      "body": "擷取與錄製都透過 xdg-desktop-portal 搭配 PipeWire 進行。標準、安全，沒有旁門左道。"
    },
    "wlroots": {
      "name": "niri 與 wlroots 合成器",
      "body": "Unisic 透過 grim 使用 wlr-screencopy 進行擷取，靜默且支援多螢幕。在你的合成器設定中綁定熱鍵；執行中的實例便會接收該指令。"
    }
  },
  "mainWindow": {
    "ariaLabel": "Unisic 主視窗：側邊欄上方是擷取、錄製與編輯頁面，下方是歷史記錄與伺服器組成的資料庫；擷取頁面提供整個螢幕、區域與視窗動作，以及擷取選項格線。",
    "nav": {
      "capture": "擷取",
      "record": "錄製",
      "edit": "編輯",
      "history": "歷史記錄",
      "servers": "伺服器"
    },
    "library": "資料庫",
    "pageTitle": "擷取",
    "pageSub": "截圖會進到編輯器，你可以在其中標註，然後儲存、複製或上傳。",
    "cards": {
      "fullScreen": {
        "title": "整個螢幕",
        "sub": "所有螢幕"
      },
      "region": {
        "title": "區域",
        "sub": "即時選取＋標註"
      },
      "window": {
        "title": "視窗",
        "sub": "使用中的視窗"
      }
    },
    "options": {
      "title": "擷取選項",
      "delay": "擷取延遲",
      "repeat": "重複上次區域",
      "repeatAction": "重複",
      "server": "上傳伺服器",
      "cursor": "包含滑鼠游標",
      "editor": "開啟編輯器",
      "clipboard": "將影像複製到剪貼簿",
      "disk": "自動儲存到磁碟",
      "upload": "上傳並複製連結"
    }
  },
  "editorMockup": {
    "ariaLabel": "Unisic 編輯器視窗：工具卡片上方是標註工具，下方是展開的形狀群組及其筆畫選項；截圖上有箭頭、螢光標示與編號步驟標註，還有複製、儲存與上傳動作。",
    "title": "Unisic 編輯器",
    "stroke": "筆畫",
    "copy": "複製",
    "save": "儲存",
    "upload": "上傳",
    "more": "更多"
  },
  "footer": {
    "license": "自由且開放原始碼，GPL-3.0",
    "nav": "頁尾",
    "github": "GitHub",
    "releases": "版本發佈",
    "issues": "問題回報",
    "licenseLink": "授權條款"
  },
  "notFound": {
    "code": "錯誤 404",
    "title": "找不到頁面",
    "message": "你要找的頁面已經搬移、更名，或從未存在。讓我們帶你回到安穩的地方。",
    "home": "返回首頁"
  },
  "languageSwitcher": {
    "label": "語言"
  }
};
