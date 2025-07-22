import type { NextConfig } from "next";

const OUTPUT = 'export'

const nextConfig: NextConfig = {
  basePath: process.env.BASE_PATH,
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: OUTPUT === 'export' ? true : false },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
