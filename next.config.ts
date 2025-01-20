import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/magia-e-tarot.com",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
