import './globals.css';
import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import StickyCallButton from '@/components/site/StickyCallButton';
import { SITE } from '@/data/site';

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  display: 'swap',
  variable: '--font-vazirmatn',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'یدک کش خودرو استان تهران | امداد خودرو ۲۴ ساعته | 09032486073',
    template: '%s | یدک کش خودرو استان تهران',
  },
  description:
    'یدک کش خودرو استان تهران با شماره 09032486073؛ امداد خودرو، جرثقیل و خودروبر شبانه‌روزی در تمام شهرهای استان تهران با مجوز کانون جهانگردی. تماس فوری',
  keywords: [
    'امداد خودرو تهران',
    'یدک کش تهران',
    'جرثقیل تهران',
    'خودروبر تهران',
    'امداد خودرو شبانه‌روزی',
    'یدک کش فوری',
    'باتری به باتری',
    'پنچرگیری',
    'حمل خودرو صفر',
  ],
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: SITE.url,
    siteName: SITE.name,
    title: 'یدک کش خودرو استان تهران | امداد خودرو ۲۴ ساعته | 09032486073',
    description:
      'یدک کش خودرو استان تهران با شماره 09032486073؛ امداد خودرو، جرثقیل و خودروبر شبانه‌روزی در تمام شهرهای استان تهران با مجوز کانون جهانگردی. تماس فوری',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'امداد خودرو و یدک کش خودرو استان تهران ۲۴ ساعته',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'یدک کش خودرو استان تهران | امداد خودرو ۲۴ ساعته',
    description:
      'امداد خودرو، یدک کش، جرثقیل و خودروبر شبانه‌روزی در استان تهران — 09032486073',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="font-vazirmatn bg-white text-slate-800 antialiased">
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
