import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  experimental: {
    disableDraftMode: true,
  },
};

export default nextConfig;
