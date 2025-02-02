/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      child_process: false, // Prevents attempts to import `child_process`
    };
    return config;
  },
};

module.exports = nextConfig;
