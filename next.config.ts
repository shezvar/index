import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static exports for CloudFlare Workers
  distDir: 'dist', // Output to dist directory
  trailingSlash: true, // Required for static hosting
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8888",
        pathname: "/wordpress-backend/**",
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;

// const isGithubActions = process.env.GITHUB_ACTIONS || false;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   assetPrefix: isGithubActions ? '/shezvar.github.io/index' : '', // Update with your repo name
//   basePath: isGithubActions ? '/shezvar.github.io/index' : '', // Update with your repo name
//   trailingSlash: true, // Add this line
//   distDir: 'docs', // Output directory for GitHub Pages
//   // ... other configurations
// };

// module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   basePath: "/index",
//   output: "export",  // <=== enables static exports
//   reactStrictMode: true,
// };

// module.exports = nextConfig;
