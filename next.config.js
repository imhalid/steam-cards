/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.akamai.steamstatic.com", "steamcdn-a.akamaihd.net"],
  },
};

module.exports = nextConfig;
