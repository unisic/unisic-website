import { SITE_URL } from "../site.ts";

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
    "Post-capture editor with arrows, shapes, text, blur, pixelate, numbered steps and crop",
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

/* Injected into app.html by hooks.server.ts, so it costs no client JS. */
export const JSON_LD = `<script type="application/ld+json">${JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [org, website, app],
}).replace(/</g, "\\u003c")}</script>`;
