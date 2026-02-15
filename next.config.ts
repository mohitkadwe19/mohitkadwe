import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["motion", "lucide-react"],
  },
};

export default nextConfig;
