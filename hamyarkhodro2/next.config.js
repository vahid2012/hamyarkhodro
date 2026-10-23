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
      
      // --- ۲. ریدایرکت‌های سرویس‌ها ---
      // هر آدرسی که با /services/ شروع شود و بعدش هر چیزی باشد، به ریشه سایت منتقل می‌شود
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
        
        // --- ۲. ری‌رایت‌های سرویس‌ها (استفاده از Regex) ---
        // فقط آدرس‌های مشخص شده در پرانتز به پوشه سرویس‌ها می‌روند تا با شهرها تداخل نکنند
        {
          source: '/:slug(emdad-khodro|yadak-kesh|jarsaghil|khodro-bar|batri|panchar-giri|haml-khodro-sefr)',
          destination: '/services/:slug',
        },
      ],
    };
  },
};

module.exports = nextConfig;
