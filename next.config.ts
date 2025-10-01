import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Enable CSS modules optimization
  experimental: {
    cssChunking: "strict",
  },
  // Optimize CSS loading
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
