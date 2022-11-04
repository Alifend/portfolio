/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["areajugones.sport.es"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
