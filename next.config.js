/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = { vertx: false };
    return config;
  },
};

module.exports = nextConfig;
