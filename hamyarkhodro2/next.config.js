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
      
      // --- ریدایرکت‌های سرویس‌ها (همه به صورت تفکیک‌شده) ---
      // ۱. امداد خودرو (از amdad به emdad)
      { source: '/services/amdad-khodro', destination: '/emdad-khodro', permanent: true },
      // ۲. خودروبر (از khodro-bor به khodrobar بدون خط تیره)
      { source: '/services/khodro-bor', destination: '/khodrobar', permanent: true },
      // ۳. بقیه سرویس‌ها
      { source: '/services/yadak-kesh', destination: '/yadak-kesh', permanent: true },
      { source: '/services/jarsaghil', destination: '/jarsaghil', permanent: true },
      { source: '/services/battery', destination: '/battery', permanent: true },
      { source: '/services/pancher', destination: '/pancher', permanent: true },
      { source: '/services/haml-khodro-sefr', destination: '/haml-khodro-sefr', permanent: true },
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
        
        // --- ری‌رایت‌های سرویس‌ها ---
        // آدرس جدید با E را به اسلاگ اصلی دیتابیس (با A) وصل می‌کنیم
        {
          source: '/emdad-khodro',
          destination: '/services/amdad-khodro', 
        },
        // آدرس بدون خط تیره را به اسلاگ دیتابیس (با خط تیره) وصل می‌کنیم
        {
          source: '/khodrobar',
          destination: '/services/khodro-bor', 
        },
        // بقیه سرویس‌ها
        { source: '/yadak-kesh', destination: '/services/yadak-kesh' },
        { source: '/jarsaghil', destination: '/services/jarsaghil' },
        { source: '/battery', destination: '/services/battery' },
        { source: '/pancher', destination: '/services/pancher' },
        { source: '/haml-khodro-sefr', destination: '/services/haml-khodro-sefr' },
      ],
    };
  },
};

module.exports = nextConfig;
