import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
    ],
  },
  env: {
    BASE_URL_API: process.env.BASE_URL_API,
  },
};

export default nextConfig;
