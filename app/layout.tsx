import type { Metadata, Viewport } from "next";
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

/* Sitewide defaults. Every page's own generateMetadata overrides title,
   description and canonical; these two only ever fall through.
   max-image-preview:large opts the social card into large thumbnails in
   Search and Discover, max-snippet:-1 lifts the snippet length cap. Index
   and follow are deliberately NOT restated here - spelling them out would
   emit "index, follow" onto the 404 page too. */
export const metadata: Metadata = {
  robots: { "max-image-preview": "large", "max-snippet": -1 },
};

export const viewport: Viewport = {
  themeColor: "#100E2C",
  colorScheme: "dark",
};

/* One @graph so the app, the publisher and the site are a single reconciled
   set of entities rather than three anonymous nodes. The Organization is the
   thing Google attaches the brand to, so it gets a stable @id that the app
   node points back at - an inline author with url: github.com would instead
   tell Google the entity behind this site lives on someone else's domain.
   No screenshot property: social-preview.png is a marketing card, not app
   UI, and that is the one image property Google renders literally. No
   softwareVersion either - a static export has no build-time source for it,
   so it can only ever be stale. */
const org = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#org`,
  name: "Unisic",
  url: SITE_URL,
  logo: `${SITE_URL}/apple-icon.png`,
  sameAs: [
    "https://github.com/unisic",
    "https://copr.fedorainfracloud.org/coprs/deandark/Unisic/",
  ],
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Unisic",
  publisher: { "@id": `${SITE_URL}/#org` },
};

const app = {
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#app`,
  name: "Unisic",
  description:
    "Open-source screenshot and screen recorder for Linux. Annotate before the shot, edit after, record GIF and video, upload anywhere. Zero telemetry, GPLv3.",
  url: SITE_URL,
  image: `${SITE_URL}/social-preview.png`,
  operatingSystem: "Linux",
  applicationCategory: "UtilitiesApplication",
  applicationSubCategory: "Screenshot & screen recording",
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
  author: { "@id": `${SITE_URL}/#org` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [org, website, app],
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
