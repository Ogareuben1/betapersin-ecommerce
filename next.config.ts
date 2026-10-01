import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Top-level config for Next.js 16+ */
  reactCompiler: true,

  /* Image fixes for Hostinger environment */
  images: {
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.zyrosite.com',
      },
      {
        protocol: 'https',
        hostname: 'public-files.gumroad.com',
      },
    ],
  },

  /* Any other standard experimental options can go here */
  experimental: {
    // leave empty if you don't have others
  },
};

export default nextConfig;
