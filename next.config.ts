import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All photography is served from /public, so no remotePatterns are needed.
    // These formats let next/image transcode the WebP sources down further.
    formats: ["image/avif", "image/webp"],
    // Widths the hero and banner art is actually rendered at.
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048],
  },
};

export default nextConfig;
