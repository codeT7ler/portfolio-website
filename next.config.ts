import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
