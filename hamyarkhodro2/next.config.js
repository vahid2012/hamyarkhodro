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
  
  // ۱. ریدایرکت دائمی از آدرس قدیمی به جدید (برای حفظ سئو)
  async redirects() {
    return [
      {
        source: '/amdad/:slug',
        destination: '/amdad-khodro-:slug',
        permanent: true, // کد 308 که معادل 301 است
      },
    ];
  },

  // ۲. اتصال آدرس جدید به پوشه داینامیک city
  async rewrites() {
    return {
      afterFiles: [
        // آدرس جدید (amdad-khodro-tehran) را به (city/tehran) وصل می‌کند
        { source: '/amdad-khodro-:slug*', destination: '/city/:slug*' },
      ],
    };
  },
};

module.exports = nextConfig;
