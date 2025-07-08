/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/simple-movieapp',
  assetPrefix: '/simple-movieapp',
};

export default nextConfig;
