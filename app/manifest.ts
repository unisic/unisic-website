import type { MetadataRoute } from "next";

// Prerender at build time for `output: "export"`.
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Unisic",
    short_name: "Unisic",
    description:
      "Open-source screenshot and screen recorder for Linux. Annotate before the shot, edit after, record GIF and video, upload anywhere. Zero telemetry, GPLv3.",
    theme_color: "#100E2C",
    background_color: "#100E2C",
    display: "browser",
    start_url: "/",
    icons: [
      {
        src: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
      {
        src: "/apple-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  };
}
