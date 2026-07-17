import { type Dictionary } from "./en";

// Machine-translated (zh-Hant) + in-workflow QA pass. Native review recommended.
// Structure validated against en.ts.
export const zhHant: Dictionary = {
  "meta": {
    "title": "Unisic — 在 Linux 上把截圖做對",
    "description": "適用於 Linux 的開源截圖與螢幕錄影工具。截圖前先標註，事後再編輯，錄製 GIF 與影片，隨處上傳。零遙測，GPLv3。",
    "ogTitle": "Unisic — 在 Linux 上把截圖做對",
    "ogDescription": "靜默擷取、截圖前標註、15 種工具的編輯器、GIF 與影片錄製、OCR、即時上傳。零遙測，GPLv3。",
    "ogImageAlt": "Linux 上的 Unisic 截圖編輯器"
  },
  "nav": {
    "docs": "文件",
    "skip": "跳至內容",
    "features": "功能",
    "recording": "錄製",
    "github": "Unisic 的 GitHub",
    "download": "下載"
  },
  "hero": {
    "headline": "在 Linux 上把截圖做對。",
    "sub": "靜默擷取、截圖前標註、15 種工具的編輯器、GIF 與影片錄製、OCR、即時上傳。零遙測。GPLv3。",
    "download": "下載",
    "github": "在 GitHub 上查看"
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
    "lede": "多數工具丟給你一塊矩形像素就走人。Unisic 則涵蓋了工作流程的其餘部分。",
    "editor": {
      "title": "真正的編輯器，而非裁切框",
      "body": "十五種工具，包含螢光標記、像素化、智慧橡皮擦、圖說文字、測量、編號步驟與裁切。復原、重做、縮放，全部在影像像素空間中進行。"
    },
    "ocr": {
      "title": "把像素變成文字",
      "body": "對一塊區域進行 OCR，文字直接進到你的剪貼簿；也可以在編輯器中點選單一字詞來複製、加上螢光標記或遮蔽。QR 碼則會解碼出其中的內容。"
    },
    "upload": {
      "title": "隨處上傳",
      "body": "自訂 HTTP 目的地、匯入 ShareX 上傳器、FTP 與 SFTP、內建主機。連結會直接進到你的剪貼簿。",
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
      "body": "零遙測、無需帳號、不會回傳任何資料。採用 GPL-3.0 授權，並公開開發。"
    }
  },
  "recording": {
    "title": "同一塊區域，錄成 GIF 或影片",
    "lede": "GIF 採用兩階段調色盤帶來鮮明色彩；MP4 與 WebM 則可選擇收錄系統、麥克風或單一應用程式的音訊——皆透過 ScreenCast portal、PipeWire 與 ffmpeg。可錄製一塊區域、整個螢幕或單一視窗，也可以讓即時重播緩衝最後 30 秒，並直接從通知卡片修剪成品。",
    "note": "無論焦點在哪裡，{keys} 都能停止錄製。",
    "caption": "正在錄製的一塊螢幕區域：Unisic 在區域四周畫出強調色邊框，並附上 REC 標記與計時器。"
  },
  "themes": {
    "title": "九種主題，包含你自己的",
    "lede": "在下方挑一種配色，看應用程式換上它。",
    "groupLabel": "在應用程式視窗中預覽主題",
    "reset": "重設為 Unisic",
    "note": "每個色塊都會即時重繪上方的視窗。第九種主題是你的系統：它會跟隨桌面的淺色或深色配置與強調色。",
    "system": "系統",
    "systemLabel": "系統 — 跟隨你桌面的淺色或深色配置；此處無法預覽",
    "previewLabel": "採用 {theme} 主題的 Unisic 主視窗"
  },
  "download": {
    "title": "安裝 Unisic",
    "lede": "需要具備 xdg-desktop-portal 的 Wayland 工作階段。錄製功能另需 PipeWire 與 ffmpeg。",
    "repoLede": "選擇你的發行版——軟體庫會透過套件管理器讓 Unisic 保持最新。AppImage 為直接下載，發佈版本中也附有一次性的 .deb、.rpm 與 Arch 套件，首次安裝時就會設定好軟體庫。",
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
      "ubuntu": "Ubuntu 25.10 將於 2026 年 7 月結束支援——建議選擇 26.04。兩者都需要 Qt 6.5+，較舊的版本並未提供。",
      "debian": "因需要 Qt 6.5+，須使用 Debian 13（trixie）或更新版本。",
      "fedora": "提供 Fedora 43、44 與 Rawhide 的組建。COPR 組建會一併安裝選用相依套件，因此錄製、OCR 與 QR 解碼都能直接使用。",
      "opensuse": "重新整理時 zypper 會要求你接受軟體庫的簽署金鑰。",
      "arch": "openSUSE Build Service 上的已簽署 pacman 軟體庫——不需要 AUR。",
      "appimage": "通用格式——可在任何發行版上執行。透過內嵌的 zsync 自行更新：只下載有變動的區塊並就地替換，閒置時重新啟動。"
    },
    "downloadBtn": "下載",
    "checking": "正在查看最新版本",
    "latest": "最新版本 {tag}",
    "fallbackBtn": "從 GitHub Releases 取得",
    "fallbackNote": "目前無法連上 GitHub，但每個組建版本都在那裡。",
    "allReleases": "所有版本與較舊的組建",
    "stability": "Unisic 0.7 是第一個穩定版本。如果你的合成器仍然有辦法讓它出乎意料，你在 {link} 提出的每則回報都有幫助。",
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
    "ariaLabel": "Unisic 主視窗：側邊欄含擷取、錄製、GIF、編輯、歷史記錄、伺服器與設定等頁面，以及擷取頁面，內含整個螢幕、區域與視窗動作，還有擷取後的切換選項。",
    "nav": {
      "capture": "擷取",
      "record": "錄製",
      "gif": "GIF",
      "edit": "編輯",
      "history": "歷史記錄",
      "servers": "伺服器",
      "settings": "設定"
    },
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
    "afterCapture": "擷取後",
    "toggles": {
      "editor": "開啟編輯器",
      "clipboard": "將影像複製到剪貼簿",
      "disk": "自動儲存到磁碟",
      "upload": "上傳並複製連結"
    }
  },
  "editorMockup": {
    "ariaLabel": "Unisic 編輯器視窗：工具列含十五種標註工具、一張以箭頭、螢光標記與編號步驟標註過的截圖，以及複製、儲存與上傳動作。",
    "title": "Unisic 編輯器",
    "copy": "複製",
    "save": "儲存",
    "upload": "上傳"
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
