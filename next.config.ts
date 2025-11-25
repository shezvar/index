// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // DO NOT static-export on Vercel; keep SSR/SSG so Image Optimization works
  // output: 'export',    <-- remove this
  // distDir: 'dist',     <-- optional; Vercel doesn't need it
  trailingSlash: false,   // optional; don’t force extra redirects

  images: {
    // IMPORTANT: let Next optimize images on Vercel
    // unoptimized: true, <-- REMOVE THIS
    formats: ["image/avif", "image/webp"],

    // Trim sizes to what your layout actually needs
    deviceSizes: [360, 640, 768, 1024, 1280],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // If you load from a CMS/CDN, allow it here
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      // { protocol: "https", hostname: "your-cms.example.com" },
    ],

    // Optional: let Vercel cache optimized results longer
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    // Note: dangerouslyAllowSVG is NOT a field under images in Next config.
  },

  // Good hygiene
  compress: true,
  poweredByHeader: false,

  // Add long-term cache headers for /public assets (icons, bg textures, etc.)
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|webp|avif|ico|ttf|otf|woff|woff2)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
