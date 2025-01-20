import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/magia-e-tarot",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
