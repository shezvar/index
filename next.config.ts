// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: 'dist',
  reactStrictMode: true,

  // DO NOT static-export on Vercel; keep SSR/SSG so Image Optimization works
  output: 'export',
  trailingSlash: false,   // optional; don’t force extra redirects

  images: {
    // IMPORTANT: let Next optimize images on Vercel
    unoptimized: true,
    formats: ["image/avif", "image/webp"],

    // Trim sizes to what your layout actually needs
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [64, 128, 256, 384, 512, 768],

    // If you load from a CMS/CDN, allow it here
    remotePatterns: [
      // { protocol: "https", hostname: "images.unsplash.com" },
      // { protocol: "https", hostname: "your-cms.example.com" },
    ],

    // Optional: let Vercel cache optimized results longer
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    // Note: dangerouslyAllowSVG is NOT a field under images in Next config.
  },

  // Good hygiene
  compress: true,
  poweredByHeader: false,

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },


};

export default nextConfig;
