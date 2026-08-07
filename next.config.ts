import type { NextConfig } from "next";
import { basePath } from "./src/lib/site";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
};

export default nextConfig;
