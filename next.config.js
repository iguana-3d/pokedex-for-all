/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  pageExtensions: ['page.tsx']
};

module.exports = nextConfig;
