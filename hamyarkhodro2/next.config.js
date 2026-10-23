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

  async redirects() {
    return [
      // هدایت لینک‌های قدیمی (/amdad/tehran) به لینک جدید
      {
        source: '/amdad/:slug',
        destination: '/emdad-khodro-:slug',
        permanent: true,
      },
      // هدایت لینک‌های اشتباه ساخته‌شده (/amdad-khodro-tehran) به لینک صحیح
      {
        source: '/amdad-khodro-:slug',
        destination: '/emdad-khodro-:slug',
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return {
      // استفاده از beforeFiles برای اطمینان از بررسی قبل از مسیرهای داینامیک
      beforeFiles: [
        {
          source: '/emdad-khodro-:slug',
          destination: '/city/:slug',
        },
      ],
    };
  },
};

module.exports = nextConfig;
