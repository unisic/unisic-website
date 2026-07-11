import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export (no server). Served at the apex domain unisic.app root, so
  // no basePath/assetPrefix is needed.
  output: "export",
  // Emit every route as <route>/index.html instead of <route>.html. Without
  // this, static export writes both docs/installation.html AND a
  // docs/installation/ directory (Next's RSC prefetch .txt payloads); hosts
  // that resolve the clean URL to the directory read it as a file and 500
  // with EISDIR. Trailing-slash output puts the page inside that directory.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
