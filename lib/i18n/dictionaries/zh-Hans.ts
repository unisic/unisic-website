import { type Dictionary } from "./en";

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
    "headline": "把事情一次做完的截图工具。",
    "sub": "Unisic 免费且开源。截图前先在屏幕上标注，截图后再编辑，录制 GIF 或视频，然后分享链接，全部从一个快捷键开始。",
    "installLabel": "一行命令安装",
    "copy": "复制",
    "copied": "已复制",
    "installNote": "会打开一个菜单。每个下载都会对照已发布的 SHA-256 校验。",
    "installRead": "安装脚本如何工作",
    "otherWays": "其他安装方式",
    "github": "在 GitHub 查看",
    "trust": {
      "license": "免费，GPL-3.0 许可",
      "privacy": "零遥测，无需账号",
      "sessions": "支持 Wayland 与 X11"
    }
  },
  "how": {
    "title": "使用方式",
    "lede": "没有安装向导，也不需要账号。安装后按下快捷键，直接开始。",
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
    "lede": "选区蒙层就是一块画布。在冻结的画面上绘制箭头、文字、模糊和步骤标记，然后按 Enter：标注即被烙入截图。"
  },
  "overlay": {
    "caption": "Unisic 选区蒙层：冻结的屏幕上有一块选定区域、实时像素尺寸、一个在截图前绘制的箭头，以及一个浮动工具栏。",
    "capture": "截图"
  },
  "features": {
    "title": "热键之后的一切",
    "lede": "大多数截图工具到图片就结束了。Unisic 继续往下做。",
    "editor": {
      "title": "真正的编辑器，而非裁剪框",
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
      "title": "完全属于你",
      "body": "零遥测，无分析，无需账号。Unisic 自己发出的唯一请求是检查新版本。采用 GPL-3.0 许可，公开开发。"
    }
  },
  "recording": {
    "title": "同一区域，录成 GIF 或视频",
    "lede": "录制区域、窗口或整个屏幕。保存色彩清晰的 GIF，或带系统声音、麦克风或单个应用声音的 MP4 或 WebM。即时回放始终保留最近 30 秒，你还可以直接在通知里裁剪片段。",
    "note": "无论焦点在哪里，{keys}始终能停止录制。",
    "caption": "正在录制一块屏幕区域：Unisic 在该区域周围绘制一个强调色边框，配有 REC 标记和已录时长计时器。"
  },
  "themes": {
    "title": "多种主题，包括你自己的",
    "lede": "在下方选择一种配色，看应用换上它。",
    "groupLabel": "在应用窗口中预览主题",
    "reset": "重置为 Unisic",
    "note": "每个色块都会实时重绘上方的窗口。其中一种主题就是你的系统：它会跟随桌面的浅色或深色方案和强调色。",
    "system": "系统",
    "systemLabel": "系统：跟随你桌面的浅色或深色方案；此处无法预览",
    "previewLabel": "{theme}主题下的 Unisic 主窗口"
  },
  "download": {
    "title": "安装 Unisic",
    "lede": "为 Wayland 而生，也能在 X11 上运行。选择你想要的安装方式。",
    "points": {
      "verify": "每个下载都会对照 SHA-256 校验",
      "noRoot": "AppImage 无需 root，并会自行更新",
      "free": "免费开源，GPL-3.0"
    },
    "or": "或选择你的系统",
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
      "appimage": "推荐。通用格式--可在任何发行版上运行，无需 root，也不会在系统中安装任何东西。它会自行更新：下载新版本，用发布时公布的 SHA-256 校验，原地替换，并在你空闲时重启 Unisic。"
    },
    "downloadBtn": "下载",
    "checking": "正在检查最新版本",
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
      "quickTask": "打开快捷任务选择器",
      "replay": "开始/保存即时回放",
      "stop": "停止录制（固定）"
    },
    "tryHint": "这张表是实时的：在键盘上按住某个快捷键，对应的键帽就会亮起。",
    "note": "除固定的停止键外，其余都可在设置中修改，并立即应用到系统。"
  },
  "reference": {
    "title": "参考"
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
