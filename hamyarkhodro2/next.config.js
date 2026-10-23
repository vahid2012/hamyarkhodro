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
      // --- ریدایرکت‌های شهرها ---
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
      
      // --- ریدایرکت‌های سرویس‌ها ---
      // امداد خودرو (A به E)
      {
        source: '/services/amdad-khodro',
        destination: '/emdad-khodro',
        permanent: true,
      },
      // خودروبر (طبق گفته شما بدون خط تیره)
      {
        source: '/services/khodrobar',
        destination: '/khodrobar',
        permanent: true,
      },
      // بقیه سرویس‌ها
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
        // --- ری‌رایت‌های شهرها ---
        {
          source: '/emdad-khodro-:slug',
          destination: '/city/:slug',
        },
        
        // --- ری‌رایت‌های سرویس‌ها (به صورت تفکیک‌شده برای جلوگیری از خطا) ---
        
        // ۱. امداد خودرو
        {
          source: '/emdad-khodro',
          destination: '/services/amdad-khodro',
        },
        
        // ۲. خودروبر (آدرس تمیز /khodrobar به اسلاگ اصلی وصل می‌شود)
        {
          source: '/khodrobar',
          destination: '/services/khodrobar',
        },
        // (اختیاری) اگر کسی آدرس با خط تیره را تایپ کرد، به همان دیتا وصل شود
        {
          source: '/khodro-bar',
          destination: '/services/khodrobar', 
        },

        // ۳. بقیه سرویس‌ها با قاعده کلی (خودروبر از این لیست حذف شد)
        {
          source: '/:slug(yadak-kesh|jarsaghil|battery|pancher|haml-khodro-sefr)',
          destination: '/services/:slug',
        },
      ],
    };
  },
};

module.exports = nextConfig;
