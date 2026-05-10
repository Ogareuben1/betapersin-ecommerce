import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Fix for images not showing */
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
  /* Keep your existing compiler setting */
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
