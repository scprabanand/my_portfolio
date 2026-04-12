/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/my_portfolio',
  trailingSlash: true,
};

export default nextConfig;
