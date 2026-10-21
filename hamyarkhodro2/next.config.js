/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'cdn.pixabay.com' },
    ],
  },
  async rewrites() {
    return {
      afterFiles: [
        { source: '/amdad/:slug*', destination: '/city/:slug*' },
      ],
    };
  },
};

module.exports = nextConfig;
