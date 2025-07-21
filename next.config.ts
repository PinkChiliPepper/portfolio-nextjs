import type { NextConfig } from "next";

const OUTPUT = 'export'

const nextConfig: NextConfig = {
  basePath: "/portfolio-nextjs",
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: OUTPUT === 'export' ? true : false },
};

export default nextConfig;
