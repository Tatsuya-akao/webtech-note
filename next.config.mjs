import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

export default withContentlayer(nextConfig);
