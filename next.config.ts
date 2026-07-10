import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export (no server). Served at the apex domain unisic.app root, so
  // no basePath/assetPrefix is needed.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
