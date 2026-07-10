import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: deploys anywhere (no server). TODO: if hosted as a GitHub
  // Pages *project* site (username.github.io/repo), add basePath: "/repo".
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
