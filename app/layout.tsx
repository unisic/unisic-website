import type { Metadata, Viewport } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "../styles/tokens.css";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://unisic.app/";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Unisic - Screenshots done right on Linux Wayland",
  description:
    "Open-source screenshot and screen recorder for Linux Wayland. Annotate before the shot, edit after, record GIF and video, upload anywhere. Zero telemetry, GPLv3.",
  openGraph: {
    title: "Unisic - Screenshots done right on Linux Wayland",
    description:
      "Silent capture, annotation before the shot, a 12-tool editor, GIF and video recording, instant upload. Zero telemetry, GPLv3.",
    type: "website",
    images: ["/social-preview.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#100E2C",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Unisic",
  operatingSystem: "Linux",
  applicationCategory: "UtilitiesApplication",
  license: "https://www.gnu.org/licenses/gpl-3.0.html",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  downloadUrl: "https://github.com/unisic/unisic/releases/latest",
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
