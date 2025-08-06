import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  transpilePackages: ['tw-animate-css'],
  /* config options here */
};

export default nextConfig;
