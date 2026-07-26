import type { Viewport } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import { SITE_URL } from "../lib/site";
import "../styles/tokens.css";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Mono only appears above the fold as a decorative hero chip, so skip
// preloading it and let Outfit (the LCP font) own the critical path.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  preload: false,
});

// Per-locale <head> metadata (title, description, canonical, hreflang, OG)
// is produced by buildMetadata() in each page/layout's generateMetadata.

export const viewport: Viewport = {
  themeColor: "#100E2C",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Unisic",
  description:
    "Open-source screenshot and screen recorder for Linux. Annotate before the shot, edit after, record GIF and video, upload anywhere. Zero telemetry, GPLv3.",
  url: SITE_URL,
  image: `${SITE_URL}/social-preview.png`,
  screenshot: `${SITE_URL}/social-preview.png`,
  operatingSystem: "Linux",
  applicationCategory: "UtilitiesApplication",
  applicationSubCategory: "Screenshot & screen recording",
  softwareVersion: "0.7.1",
  featureList: [
    "Region, full-screen and window capture",
    "Annotate the selection before the shot is taken",
    "15-tool post-capture editor (arrows, blur, pixelate, numbered steps, crop)",
    "GIF and MP4/WebM screen recording",
    "Upload to custom HTTP, FTP, SFTP and ShareX destinations",
    "Capture history with thumbnails",
    "Native KWin capture on KDE Plasma, xdg-desktop-portal everywhere else",
  ],
  isAccessibleForFree: true,
  license: "https://www.gnu.org/licenses/gpl-3.0.html",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  downloadUrl: "https://github.com/unisic/unisic/releases/latest",
  author: {
    "@type": "Organization",
    name: "Unisic",
    url: "https://github.com/unisic",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable}`}
      // Next 16 no longer auto-suppresses CSS smooth scrolling during route
      // navigation; this attribute opts back into the smart handling (instant
      // scroll reset on nav, smooth for in-page anchors).
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
