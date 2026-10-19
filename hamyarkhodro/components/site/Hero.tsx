import Image from 'next/image';
import Link from 'next/link';
import { Phone, Clock, ShieldCheck, ChevronLeft, Star } from 'lucide-react';
import { SITE } from '@/data/site';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80"
          alt="امداد خودرو و یدک کش خودرو استان تهران ۲۴ ساعته"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-brand-navy via-brand-navy/85 to-brand-navy/40" />
      </div>

      <div className="container-x relative py-16 sm:py-20 lg:py-28">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-brand-sky" />
            مجوز رسمی کانون جهانگردی و اتومبیل‌رانی
          </div>

          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl text-balance">
            یدک کش خودرو استان تهران | امداد خودرو ۲۴ ساعته
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            یدک کش خودرو استان تهران با شماره 09032486073 در تمام شهرهای استان تهران به‌صورت شبانه‌روزی
            خدمات یدک کش، جرثقیل، خودروبر و امداد خودرو ارائه می‌دهد. این مرکز دارای مجوز رسمی از کانون
            جهانگردی و اتومبیل‌رانی است و در کمتر از ۲۰ دقیقه در محل حاضر می‌شود.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={`tel:${SITE.phone}`} className="btn-call text-lg">
              <Phone className="h-6 w-6" />
              تماس فوری {SITE.phone}
            </a>
            <Link
              href="/services/yadak-kesh"
              className="inline-flex items-center justify-center gap-1 rounded-xl border border-white/30 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              مشاهده خدمات
              <ChevronLeft className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-brand-red-light" />
              شبانه‌روزی ۲۴/۷
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-brand-red-light" />
              بیمه باربری کامل
            </span>
            <span className="flex items-center gap-2">
              <Star className="h-5 w-5 text-brand-red-light" />
              اعزام در کمتر از ۲۰ دقیقه
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
