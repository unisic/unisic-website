import type { SVGProps } from "react";

/*
 * Unisic's own tool glyphs, path data copied verbatim from
 * unisic/resources/icons/sym/*.svg (24x24, stroke 2, round caps).
 * The app tints them at runtime (IconImageProvider.cpp); on the web the
 * equivalent is stroke/fill = currentColor.
 */

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 24, children, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

function Stroke({
  children,
  strokeWidth = 2,
}: {
  children: React.ReactNode;
  strokeWidth?: number;
}) {
  return (
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </g>
  );
}

export function PenIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <path d="M4 20 L14.5 9.5 L18 13 L7.5 23.5" transform="translate(0,-3)" />
        <path d="M14.5 6.5 L17.5 3.5 A2 2 0 0 1 20.5 6.5 L17.5 9.5" />
      </Stroke>
    </Svg>
  );
}

export function LineIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <path d="M5 19 L19 5" />
      </Stroke>
    </Svg>
  );
}

export function ArrowIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <path d="M5 19 L19 5" />
        <path d="M11 5 H19 V13" />
      </Stroke>
    </Svg>
  );
}

export function RectangleIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <rect x="4" y="6" width="16" height="12" rx="1.5" />
      </Stroke>
    </Svg>
  );
}

export function EllipseIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <ellipse cx="12" cy="12" rx="8" ry="6.5" />
      </Stroke>
    </Svg>
  );
}

export function TextIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <path d="M6 6 H18" />
        <path d="M12 6 V19" />
      </Stroke>
    </Svg>
  );
}

export function HighlightIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <path d="M6 18 L10 18 L19 9 L15 5 L6 14 Z" />
        <path d="M4.5 21 H12.5" />
      </Stroke>
    </Svg>
  );
}

export function BlurIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <g fill="currentColor">
        <circle cx="12" cy="12" r="2.2" />
        <circle cx="7" cy="12" r="1.3" opacity="0.7" />
        <circle cx="17" cy="12" r="1.3" opacity="0.7" />
        <circle cx="12" cy="7" r="1.3" opacity="0.7" />
        <circle cx="12" cy="17" r="1.3" opacity="0.7" />
        <circle cx="8.5" cy="8.5" r="1" opacity="0.5" />
        <circle cx="15.5" cy="8.5" r="1" opacity="0.5" />
        <circle cx="8.5" cy="15.5" r="1" opacity="0.5" />
        <circle cx="15.5" cy="15.5" r="1" opacity="0.5" />
      </g>
    </Svg>
  );
}

export function PixelateIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <g fill="currentColor">
        <rect x="4" y="4" width="5" height="5" />
        <rect x="15" y="4" width="5" height="5" />
        <rect x="9.5" y="9.5" width="5" height="5" />
        <rect x="4" y="15" width="5" height="5" />
        <rect x="15" y="15" width="5" height="5" />
      </g>
    </Svg>
  );
}

export function EraserIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <path d="M4 15.5 L11.5 8 A2 2 0 0 1 14.3 8 L19 12.7 A2 2 0 0 1 19 15.5 L14 20.5" />
        <path d="M7.5 20.5 H20" />
        <path d="M9.5 13.5 L14 18" />
      </Stroke>
    </Svg>
  );
}

export function StepIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="12" cy="12" r="9" fill="currentColor" />
      <text
        x="12"
        y="16.5"
        fontSize="12"
        fontWeight="bold"
        textAnchor="middle"
        fill="var(--surface, #1E1B4A)"
        fontFamily="sans-serif"
      >
        1
      </text>
    </Svg>
  );
}

export function CropIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <path d="M7 3 V17 H21" />
        <path d="M3 7 H17 V21" />
      </Stroke>
    </Svg>
  );
}

export function UndoIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <path d="M9 6 L4 11 L9 16" />
        <path d="M4 11 H14 A4.5 4.5 0 0 1 14 20 H11" />
      </Stroke>
    </Svg>
  );
}

export function RedoIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <path d="M15 6 L20 11 L15 16" />
        <path d="M20 11 H10 A4.5 4.5 0 0 0 10 20 H13" />
      </Stroke>
    </Svg>
  );
}

export function CopyIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <rect x="8" y="8" width="12" height="12" rx="2" />
        <path d="M4 16 V5 A1 1 0 0 1 5 4 H15" />
      </Stroke>
    </Svg>
  );
}

export function SaveIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <path d="M5 4 H16 L20 8 V19 A1 1 0 0 1 19 20 H5 A1 1 0 0 1 4 19 V5 A1 1 0 0 1 5 4 Z" />
        <rect x="8" y="4" width="6" height="5" />
        <rect x="7" y="13" width="10" height="7" />
      </Stroke>
    </Svg>
  );
}

export function SendIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <path d="M12 20 V6" />
        <path d="M6 12 L12 6 L18 12" />
        <path d="M4 4 H20" />
      </Stroke>
    </Svg>
  );
}

export function UploadCloudIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(12 12) scale(0.8) translate(-12 -12)"
      >
        <path d="M20.39 18.39 A5 5 0 0 0 18 9 h-1.26 A8 8 0 1 0 3 16.3" />
        <path d="M16 16 l-4 -4 -4 4" />
        <path d="M12 12 v9" />
      </g>
    </Svg>
  );
}

export function CloseIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <path d="M6 6 L18 18" />
        <path d="M18 6 L6 18" />
      </Stroke>
    </Svg>
  );
}

export function CheckmarkIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <path d="M5 12 L10 17 L19 7" />
      </Stroke>
    </Svg>
  );
}

export function MinusIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <path d="M5 12 H19" />
      </Stroke>
    </Svg>
  );
}

export function GifIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <rect x="3" y="6" width="18" height="12" rx="2" />
      </Stroke>
      <text
        x="12"
        y="15.5"
        fontSize="7"
        fontWeight="bold"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="sans-serif"
      >
        GIF
      </text>
    </Svg>
  );
}

export function RecordIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="12" cy="12" r="7" fill="currentColor" />
    </Svg>
  );
}

export function MonitorIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <rect x="3" y="5" width="18" height="12" rx="1.5" />
        <path d="M9 21 H15" />
        <path d="M12 17 V21" />
      </Stroke>
    </Svg>
  );
}

export function RegionIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <path d="M4 8 V5 A1 1 0 0 1 5 4 H8" />
        <path d="M16 4 H19 A1 1 0 0 1 20 5 V8" />
        <path d="M20 16 V19 A1 1 0 0 1 19 20 H16" />
        <path d="M8 20 H5 A1 1 0 0 1 4 19 V16" />
      </Stroke>
    </Svg>
  );
}

export function WindowIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <rect x="4" y="5" width="16" height="14" rx="1.5" />
        <path d="M4 9 H20" />
      </Stroke>
      <circle cx="6.5" cy="7" r="0.6" fill="currentColor" />
    </Svg>
  );
}

export function SelectIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <path d="M5 3 L5 17 L9 13 L12 20 L14 19 L11 12 L17 12 Z" />
      </Stroke>
    </Svg>
  );
}

export function LockIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10 V7 A4 4 0 0 1 16 7 V10" />
      </Stroke>
    </Svg>
  );
}

export function ImageIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <rect x="4" y="5" width="16" height="14" rx="1.5" />
        <circle cx="9" cy="10" r="1.6" />
        <path d="M4 17 L9 12 L13 15 L16 12 L20 16" />
      </Stroke>
    </Svg>
  );
}

export function FolderCloudIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(12 12) scale(0.8) translate(-12 -12)"
      >
        <path d="M18 10 h-1.26 A8 8 0 1 0 9 20 h9 a5 5 0 0 0 0-10 z" />
      </g>
    </Svg>
  );
}

export function CameraIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <path d="M4 8 H8 L9.5 5 H14.5 L16 8 H20 A1 1 0 0 1 21 9 V18 A1 1 0 0 1 20 19 H4 A1 1 0 0 1 3 18 V9 A1 1 0 0 1 4 8 Z" />
        <circle cx="12" cy="13" r="3.5" />
      </Stroke>
    </Svg>
  );
}

export function HistoryIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <path d="M5 12 A7 7 0 1 1 6.8 16.6" />
        <path d="M5 12 L3.5 10.2 M5 12 L6.9 10.4" />
        <path d="M12 8.6 V12 L14.7 13.8" />
      </Stroke>
    </Svg>
  );
}

export function ConfigureIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <Stroke>
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2.2" />
        <path d="M12 6 V3.4 M12 18 V20.6 M6 12 H3.4 M18 12 H20.6 M7.76 7.76 L5.92 5.92 M16.24 16.24 L18.08 18.08 M16.24 7.76 L18.08 5.92 M7.76 16.24 L5.92 18.08" />
      </Stroke>
    </Svg>
  );
}

/* GitHub mark, official path from Simple Icons (CC0). */
export function GitHubIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path
        fill="currentColor"
        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      />
    </Svg>
  );
}

/* App logo, from unisic/resources/icons/unisic.svg with prefixed gradient ids. */
export function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="ulogo-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#433D8B" />
          <stop offset="1" stopColor="#2E236C" />
        </linearGradient>
        <linearGradient id="ulogo-ring" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E2CFEE" />
          <stop offset="1" stopColor="#C8ACD6" />
        </linearGradient>
        <radialGradient id="ulogo-lens" cx="0.5" cy="0.4" r="0.75">
          <stop offset="0" stopColor="#2E236C" />
          <stop offset="1" stopColor="#17153B" />
        </radialGradient>
      </defs>
      <rect x="8" y="8" width="112" height="112" rx="30" fill="url(#ulogo-bg)" />
      <rect
        x="8"
        y="8"
        width="112"
        height="112"
        rx="30"
        fill="none"
        stroke="#C8ACD6"
        strokeOpacity="0.28"
        strokeWidth="2"
      />
      <path
        d="M 38 8 h 52 a 30 30 0 0 1 30 30 v 8 H 8 v -8 a 30 30 0 0 1 30 -30 z"
        fill="#FFFFFF"
        opacity="0.06"
      />
      <circle cx="64" cy="64" r="30" fill="url(#ulogo-ring)" />
      <circle cx="64" cy="64" r="21" fill="url(#ulogo-lens)" />
      <circle cx="55" cy="55" r="6.5" fill="#FFFFFF" opacity="0.75" />
      <g stroke="#C8ACD6" strokeWidth="6" strokeLinecap="round" fill="none">
        <path d="M 24 38 v -8 a 6 6 0 0 1 6 -6 h 8" />
        <path d="M 104 38 v -8 a 6 6 0 0 0 -6 -6 h -8" />
        <path d="M 24 90 v 8 a 6 6 0 0 0 6 6 h 8" />
        <path d="M 104 90 v 8 a 6 6 0 0 1 -6 6 h -8" />
      </g>
    </svg>
  );
}
