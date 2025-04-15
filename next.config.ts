import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Enable static asset serving for videos
  experimental: {
    serverComponentsExternalPackages: [],
  },
  // Optional: Optimize large static assets
  output: 'standalone',
};

export default nextConfig;
