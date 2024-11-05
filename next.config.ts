import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
