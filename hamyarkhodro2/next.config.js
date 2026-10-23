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
      // --- ۱. ریدایرکت‌های شهرها ---
      {
        source: '/amdad/:slug',
        destination: '/emdad-khodro-:slug',
        permanent: true,
      },
      {
        source: '/amdad-khodro-:slug',
        destination: '/emdad-khodro-:slug',
        permanent: true,
      },
      
      // --- ۲. ریدایرکت‌های سرویس‌ها از /services/ به ریشه ---
      // آدرس اشتباه با A را به آدرس درست با E هدایت می‌کنیم
      {
        source: '/services/amdad-khodro',
        destination: '/emdad-khodro',
        permanent: true,
      },
      // بقیه سرویس‌ها را با یک قاعده کلی به ریشه منتقل می‌کنیم
      {
        source: '/services/:slug',
        destination: '/:slug',
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return {
      beforeFiles: [
        // --- ۱. ری‌رایت‌های شهرها ---
        {
          source: '/emdad-khodro-:slug',
          destination: '/city/:slug',
        },
        
        // --- ۲. ری‌رایت‌های سرویس‌ها ---
        // آدرس تمیز با E را می‌گیریم و به دیتای با A وصل می‌کنیم
        {
          source: '/emdad-khodro',
          destination: '/services/amdad-khodro',
        },
        // بقیه سرویس‌ها دقیقاً با همان اسلاگ‌های موجود در فایل services.ts
        {
          source: '/:slug(yadak-kesh|jarsaghil|khodro-bor|battery|pancher|haml-khodro-sefr)',
          destination: '/services/:slug',
        },
      ],
    };
  },
};

module.exports = nextConfig;
