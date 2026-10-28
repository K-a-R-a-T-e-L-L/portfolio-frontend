import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./src/shared/lib/i18n/request.ts");

const nextConfig: NextConfig = {
  distDir: process.env.NEXT_BUILD_DIR ?? ".next",
  output: "standalone",
};

export default withNextIntl(nextConfig);
