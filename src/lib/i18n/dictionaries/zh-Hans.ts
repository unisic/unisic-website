import type { Dictionary } from "./en.ts";

// Machine-translated (zh-Hans) + in-workflow QA pass. Native review recommended.
// Structure validated against en.ts.
export const zhHans: Dictionary = {
  "meta": {
    "title": "Unisic - Linux 截图与录屏工具",
    "description": "面向 Linux 的开源截图与录屏工具。截图前先标注，截图后可再编辑，录制 GIF 和视频，上传到任何地方。零遥测，GPLv3。",
    "ogTitle": "Unisic - 在 Linux 上把截图做对",
    "ogDescription": "一个快捷键完成截图、标注、编辑、录制与分享。Wayland 下静默截图，GIF 与视频录制，OCR，即时上传。零遥测，GPLv3。",
    "ogImageAlt": "运行在 Linux 上的 Unisic 截图编辑器"
  },
  "nav": {
    "docs": "文档",
    "skip": "跳到正文",
    "how": "使用方式",
    "features": "功能",
    "github": "GitHub 上的 Unisic",
    "download": "下载"
  },
  "hero": {
    "eyebrow": "适用于 Linux 的截图与录屏工具",
    "headline": "截图、标注、分享，{mark}",
    "headlineMark": "一个快捷键搞定。",
    "sub": "截图之前就能在屏幕上标注，还能录制 GIF 或视频，分享链接已经在你的剪贴板里。",
    "installLabel": "一行命令安装",
    "copy": "复制",
    "copied": "已复制",
    "installNote": "会打开一个菜单。每个下载都会对照已发布的 SHA-256 校验。",
    "installRead": "安装脚本如何工作",
    "otherWays": "其他安装方式",
    "github": "在 GitHub 查看",
    "windowHint": "根据应用自己的 QML 和主题重建。点击侧边栏逐页查看。"
  },
  "how": {
    "steps": {
      "hotkey": {
        "title": "按下快捷键",
        "body": "{keys} 开始区域截图。全屏与窗口各有自己的按键，可在设置中修改。"
      },
      "mark": {
        "title": "直接标注",
        "body": "在冻结的屏幕上直接画箭头、文字、模糊和编号步骤，然后按 Enter。编辑器里还有更多工具。"
      },
      "share": {
        "title": "分享出去",
        "body": "保存、复制或上传。上传后，链接已经在你的剪贴板里。"
      }
    }
  },
  "usp": {
    "title": "在按下截图前就完成标注",
    "lede": "选区蒙层同时也是画布。你在冻结画面上画的内容会直接进入截图，无需绕道编辑器。"
  },
  "overlay": {
    "caption": "Unisic 选区蒙层：冻结的屏幕上有一块选定区域、实时像素尺寸、一个在截图前绘制的箭头，以及一个浮动工具栏。",
    "capture": "截图"
  },
  "features": {
    "title": "热键之后的一切",
    "editor": {
      "title": "完整的编辑器",
      "body": "箭头、形状、文字、高亮、模糊、像素化、编号步骤、标注框和裁剪。撤销、重做、缩放不限次数。"
    },
    "ocr": {
      "title": "从像素中提取文字",
      "body": "把任意区域的文字直接复制到剪贴板。二维码和条形码会解码为其内容。"
    },
    "upload": {
      "title": "上传到任何地方",
      "body": "你自己的 HTTP 服务器、ShareX 上传器文件、FTP、SFTP，或内置托管。链接会自动为你复制。",
      "copied": "已复制"
    },
    "history": {
      "title": "带缩略图的历史记录",
      "body": "每一张截图，都在一个网格之内。删除会把文件移入回收站，绝不越过它。"
    },
    "silent": {
      "title": "静默截图",
      "body": "没有快门闪光，无需切换窗口。在 Plasma 上走原生 KWin 路径，其他环境则使用门户。"
    },
    "yours": {
      "title": "零遥测，无需账号",
      "body": "Unisic 自己发出的唯一请求是检查新版本。采用 GPL-3.0 许可，公开开发。"
    }
  },
  "recording": {
    "title": "同一区域，录成 GIF 或视频",
    "lede": "录制区域、窗口或整个屏幕。保存为 GIF，或带系统声音、麦克风或单个应用声音的 MP4 或 WebM。即时回放始终保留最近 30 秒。",
    "note": "无论焦点在哪里，{keys}始终能停止录制。",
    "caption": "正在录制一块屏幕区域：Unisic 在该区域周围绘制一个强调色边框，配有 REC 标记和已录时长计时器。"
  },
  "themes": {
    "title": "多种主题，包括你自己的",
    "lede": "在下方选择一种配色，看应用换上它。",
    "groupLabel": "本页面的主题",
    "note": "每个色块都会用该配色重绘整个页面，取值来自应用本身。第一个跟随桌面的浅色或深色方案。",
    "system": "系统"
  },
  "download": {
    "title": "安装 Unisic",
    "lede": "为 Wayland 而生，也能在 X11 上运行。选择你想要的安装方式。",
    "points": {
      "verify": "每个下载都会对照 SHA-256 校验",
      "noRoot": "AppImage 无需 root，并会自行更新",
      "free": "免费开源，GPL-3.0"
    },
    "repoLede": "推荐使用 AppImage：单个文件，无需 root，有新版本时会自行替换。也可以改为选择你的发行版--软件仓库会通过包管理器让 Unisic 保持最新；发布版本中还附带一次性的 .deb、.rpm 和 Arch 软件包，首次安装时会自动配置好软件仓库。",
    "distroListLabel": "选择发行版或软件包格式",
    "versionLabel": "版本",
    "copyCmd": "复制命令",
    "copiedCmd": "已复制",
    "steps": {
      "importKey": "导入软件仓库签名密钥：",
      "addRepo": "添加软件仓库：",
      "refreshRepo": "刷新软件仓库：",
      "enableRepo": "启用 COPR 仓库：",
      "install": "安装 Unisic："
    },
    "notes": {
      "ubuntu": "Ubuntu 25.10 将于 2026 年 7 月结束支持--建议选择 26.04。两者都需要 Qt 6.5+，更早的版本不提供。",
      "debian": "因需要 Qt 6.5+，要求 Debian 13（trixie）或更新版本。",
      "fedora": "提供面向 Fedora 43、44 和 Rawhide 的构建。所有必需依赖都会随软件包一并安装，因此录制、OCR 和 QR 解码开箱即用。",
      "opensuse": "刷新时 zypper 会请求你接受该软件仓库的签名密钥。",
      "arch": "openSUSE Build Service 上的已签名 pacman 仓库--无需 AUR。",
      "nix": "只要有 Nix 就能运行，包括 NixOS。可用 nix run 直接试用，或把 flake 作为 input 加入配置进行声明式安装；在 NixOS 上请启用 xdg.portal 与 PipeWire。",
      "appimage": "推荐。通用格式--可在任何发行版上运行，无需 root，也不会在系统中安装任何东西。它会自行更新：下载新版本，用发布时公布的 SHA-256 校验，原地替换，并在你空闲时重启 Unisic。",
      "windows": "实验性版本，适用于 Windows 11，完全由 AI 编写。安装程序只为当前用户安装，无需管理员权限。发布页面上也提供便携版 zip。它会像 AppImage 一样自行更新。目前还不能录制单个窗口。"
    },
    "downloadBtn": "下载",
    "latest": "最新版本 {tag}",
    "fallbackBtn": "从 GitHub Releases 获取",
    "fallbackNote": "刚才没能连上 GitHub，但每个构建版本都在那里。",
    "allReleases": "全部版本与更早的构建",
    "stability": "Unisic 处于测试阶段。如果它在你的桌面上出问题，请在 {link} 提交反馈。",
    "stabilityLink": "问题反馈"
  },
  "hotkeys": {
    "caption": "默认热键",
    "action": "操作",
    "shortcut": "快捷键",
    "rows": {
      "full": "截取整个屏幕",
      "region": "截取区域",
      "window": "截取当前窗口",
      "gif": "录制 GIF（开始/停止）",
      "video": "录制视频（开始/停止）",
      "ocr": "OCR 区域（复制文字）",
      "copyLast": "复制上一次截图",
      "replay": "开始/保存即时回放",
      "stop": "停止录制（固定）"
    },
    "note": "除固定的停止键外，其余都可在设置中修改，并立即应用到系统。"
  },
  "reference": {
    "title": "桌面支持与快捷键"
  },
  "compositors": {
    "title": "与你的合成器协同工作",
    "plasma": {
      "name": "KDE Plasma",
      "body": "完全静默的路径：原生 KWin ScreenShot2 搭配 KGlobalAccel 热键。完全没有门户对话框。"
    },
    "gnome": {
      "name": "GNOME 及其他桌面",
      "body": "截图与录制都经由 xdg-desktop-portal 和 PipeWire。标准、安全、不耍花招。"
    },
    "wlroots": {
      "name": "niri 与 wlroots 合成器",
      "body": "Unisic 通过 grim 经 wlr-screencopy 截图，静默且对多显示器安全。在你的合成器配置中绑定热键；正在运行的实例会接收该命令。"
    }
  },
  "mainWindow": {
    "ariaLabel": "Unisic 主窗口：侧边栏上方是截图、录制和编辑页面，下方是历史记录与服务器组成的资料库；截图页面提供整屏、区域和窗口操作，以及截图选项网格。",
    "nav": {
      "capture": "截图",
      "record": "录制",
      "edit": "编辑",
      "history": "历史记录",
      "servers": "服务器"
    },
    "library": "资料库",
    "pageTitle": "截图",
    "pageSub": "截图会落入编辑器，你可以在其中标注，然后保存、复制或上传。",
    "cards": {
      "fullScreen": {
        "title": "整个屏幕",
        "sub": "所有显示器"
      },
      "region": {
        "title": "区域",
        "sub": "实时选择 + 标注"
      },
      "window": {
        "title": "窗口",
        "sub": "当前窗口"
      }
    },
    "options": {
      "title": "截图选项",
      "delay": "截图延迟",
      "repeat": "重复上次区域",
      "repeatAction": "重复",
      "server": "上传服务器",
      "cursor": "包含鼠标指针",
      "editor": "打开编辑器",
      "clipboard": "复制图像到剪贴板",
      "disk": "自动保存到磁盘",
      "upload": "上传并复制链接"
    }
  },
  "editorMockup": {
    "ariaLabel": "Unisic 编辑器窗口：工具卡片上方是标注工具，下方是展开的形状组及其描边选项；截图上有箭头、高亮和编号步骤标注，还有复制、保存和上传操作。",
    "title": "Unisic 编辑器",
    "stroke": "描边",
    "copy": "复制",
    "save": "保存",
    "upload": "上传",
    "more": "更多"
  },
  "cli": {
    "title": "在终端中控制",
    "lede": "每种截图模式都是一个参数，因此合成器快捷键、脚本或 cron 任务都能启动它。使用 --output - 时图像输出到 stdout。"
  },
  "app": {
    "record": {
      "title": "屏幕录制",
      "gifTitle": "GIF 录制",
      "sub": "将全屏、某个区域或单个窗口录制为视频文件。",
      "gifSub": "将某个区域或整个屏幕直接录制为优化过的 .gif。",
      "video": "视频",
      "gif": "GIF",
      "screen": "屏幕",
      "region": "区域",
      "window": "窗口",
      "pause": "暂停",
      "stop": "停止",
      "startReplay": "开始即时回放",
      "videoOptions": "视频选项",
      "gifOptions": "GIF 选项",
      "format": "格式",
      "frameRate": "帧率",
      "quality": "质量",
      "qualitySub": "越高越清晰，文件也越大。50% 是均衡的默认值。",
      "maxDuration": "最长时长",
      "cursor": "包含鼠标指针",
      "audio": "音频与回放",
      "systemAudio": "录制系统声音",
      "mic": "录制麦克风",
      "appAudio": "仅应用声音",
      "replayLength": "回放长度",
      "off": "关闭",
      "refresh": "刷新",
      "noWindowGif": "不可用：GIF 没有单窗口来源",
      "fast": "快速 / 小",
      "balanced": "均衡",
      "best": "最佳",
      "goodToKnow": "须知",
      "gifNoAudio": "GIF 没有音轨。如需带声音的片段，请切换到视频模式，录制 MP4 或 WebM。",
      "gifSize": "文件大小会随区域、帧率和时长迅速增长。以 15-30 FPS 录制小区域通常效果很好，也便于分享。"
    },
    "edit": {
      "title": "编辑",
      "sub": "打开你已有的图片或视频，使用与截图相同的编辑器和剪辑窗口。",
      "image": "编辑图片",
      "imageSub": "标注、裁剪、模糊",
      "video": "剪辑视频",
      "videoSub": "剪掉开头和结尾",
      "tip": "编辑图片绝不会改动原图：除非你自己覆盖，编辑器会以新名称保存到截图的保存位置。裁剪视频总是在源文件旁写入一个新文件。"
    },
    "history": {
      "title": "历史记录",
      "items": "{n} 项",
      "search": "搜索名称或链接",
      "clear": "全部清除",
      "all": "全部",
      "images": "图片",
      "gifs": "GIF",
      "recordings": "录像",
      "clips": "片段",
      "starred": "已加星标",
      "uploaded": "已上传",
      "today": "今天",
      "empty": "这里还没有内容。截图和录屏会带缩略图显示在这里。"
    },
    "servers": {
      "title": "服务器",
      "sub": "模块化上传器：自定义 HTTP API，以及通过 curl 的 FTP/SFTP。每次上传后链接都会复制到剪贴板。",
      "add": "添加自定义服务器",
      "import": "导入 .sxcu",
      "active": "当前服务器",
      "use": "使用",
      "needsClientId": "需要 Client-ID",
      "needsUserKey": "需要用户密钥"
    },
    "modes": {
      "shot": "截图",
      "measure": "测量",
      "ocr": "识别文字",
      "gif": "录制 GIF",
      "video": "录制视频"
    },
    "hint": {
      "shot": "拖动以选择 · 单击截取整个屏幕 · Ctrl+拖动以移动 · 用工具栏标注 · 空格/回车或双击以截图 · Esc 取消",
      "measure": "拖动以测量 · Tab：距离/尺寸 · Ctrl+C 复制尺寸 · Esc 关闭",
      "ocr": "拖动以选择 · Ctrl+拖动以移动 · 空格/回车识别文字 · Esc 取消",
      "gif": "拖动以选择 · Ctrl+拖动以移动 · 空格/回车开始录制 GIF · Esc 取消",
      "video": "拖动以选择 · Ctrl+拖动以移动 · 空格/回车开始录制视频 · Esc 取消"
    },
    "tools": {
      "edit": "编辑形状",
      "pen": "画笔",
      "shapes": "形状",
      "text": "文字",
      "highlight": "高亮",
      "blur": "模糊",
      "pixelate": "马赛克",
      "eraser": "智能橡皮擦",
      "magnify": "放大镜",
      "eyedropper": "取色器",
      "step": "步骤标记",
      "crop": "裁剪",
      "undo": "撤销",
      "redo": "重做",
      "line": "直线",
      "arrow": "箭头",
      "measure": "测量",
      "rect": "矩形",
      "ellipse": "椭圆",
      "callout": "标注"
    },
    "toolbar": "截图工具栏",
    "cancel": "取消"
  },
  "footer": {
    "license": "自由开源，GPL-3.0",
    "nav": "页脚",
    "github": "GitHub",
    "releases": "版本发布",
    "issues": "问题反馈",
    "licenseLink": "许可证"
  },
  "notFound": {
    "code": "错误 404",
    "title": "页面未找到",
    "message": "你要找的页面已经移动、改名，或从未存在。让我们带你回到稳妥的地方。",
    "home": "返回首页"
  },
  "languageSwitcher": {
    "label": "语言"
  }
};
