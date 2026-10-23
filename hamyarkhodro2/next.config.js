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
      // ریدایرکت‌های شهرها
      { source: '/amdad/:slug', destination: '/emdad-khodro-:slug', permanent: true },
      { source: '/amdad-khodro-:slug', destination: '/emdad-khodro-:slug', permanent: true },
      
      // ریدایرکت سرویس‌ها از مسیر /services به ریشه
      { source: '/services/:slug', destination: '/:slug', permanent: true },
    ];
  },

  async rewrites() {
    return {
      beforeFiles: [
        // ری‌رایت‌های شهرها
        { source: '/emdad-khodro-:slug', destination: '/city/:slug' },
        
        // --- ری‌رایت‌های سرویس‌ها ---
        // سرویس‌هایی که قبلاً کار می‌کردند (همان اسلاگ‌ها)
        { source: '/yadak-kesh', destination: '/services/yadak-kesh' },
        { source: '/jarsaghil', destination: '/services/jarsaghil' },
        { source: '/haml-khodro-sefr', destination: '/services/haml-khodro-sefr' },

        // سرویس‌هایی که خطا می‌دادند (مسیر جدید را به مسیر قدیمیِ دیتابیس وصل می‌کنیم)
        // ۱. امداد خودرو (آدرس جدید با E، آدرس قدیمی با A)
        { source: '/emdad-khodro', destination: '/services/amdad-khodro' },
        
        // ۲. خودروبر (احتمالاً بدون خط تیره در دیتابیس است)
        { source: '/khodro-bar', destination: '/services/khodrobar' },
        
        // ۳. باتری به باتری (احتمالاً اسلاگ متفاوتی دارد)
        { source: '/batri-be-batri', destination: '/services/batri-be-batri' },
        
        // ۴. پنجرگیری
        { source: '/panchar-giri', destination: '/services/panchar-giri' },
      ],
    };
  },
};

module.exports = nextConfig;
