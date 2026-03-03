import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
  domains: ["qih.driveo.pk", "wp.driveo.pk"],
},
  experimental: {
    serverActions: {
      bodySizeLimit: '20mb',
    }
  }
};

export default nextConfig;
