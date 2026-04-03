import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "dist",
  images: {
    dangerouslyAllowSVG: true,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
