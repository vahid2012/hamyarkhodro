import Link from 'next/link';
import { Truck, Phone, MapPin, Clock, ShieldCheck, Mail } from 'lucide-react';
import { NAV_SERVICES, SITE, TEHRAN_CITIES, SEMNAN_CITIES, FARS_CITIES } from '@/data/site';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-brand-navy text-slate-300">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red text-white">
              <Truck className="h-6 w-6" />
            </span>
            <span className="text-lg font-extrabold text-white">یدک کش خودرو استان تهران</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            مرکز رسمی امداد خودرو، یدک کش، جرثقیل و خودروبر شبانه‌روزی در تمام شهرهای استان تهران با
            مجوز کانون جهانگردی و اتومبیل‌رانی.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-sky" />
              مجوز رسمی کانون جهانگردی
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
              <Clock className="h-3.5 w-3.5 text-brand-sky" />
              ۲۴ ساعته ۷ روز هفته
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold text-white">خدمات</h3>
          <ul className="space-y-2 text-sm">
            {NAV_SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-slate-400 transition-colors hover:text-brand-sky">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold text-white">شهرهای پرتقاضا</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {TEHRAN_CITIES.slice(0, 8).map((c) => (
              <li key={c.slug}>
                <Link href={`/amdad/${c.slug}`} className="text-slate-400 transition-colors hover:text-brand-sky">
                  {c.name}
                </Link>
              </li>
            ))}
            {SEMNAN_CITIES.slice(0, 2).map((c) => (
              <li key={c.slug}>
                <Link href={`/amdad/${c.slug}`} className="text-slate-400 transition-colors hover:text-brand-sky">
                  {c.name}
                </Link>
              </li>
            ))}
            {FARS_CITIES.slice(0, 2).map((c) => (
              <li key={c.slug}>
                <Link href={`/amdad/${c.slug}`} className="text-slate-400 transition-colors hover:text-brand-sky">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold text-white">تماس و اطلاعات</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-base font-bold text-brand-red-light">
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-start gap-2 text-slate-400">
              <MapPin className="mt-0.5 h-4 w-4 text-brand-sky" />
              استان تهران — پوشش تمام شهرهای استان
            </li>
            <li className="flex items-start gap-2 text-slate-400">
              <Clock className="mt-0.5 h-4 w-4 text-brand-sky" />
              ساعت کاری: ۲۴ ساعته، ۷ روز هفته
            </li>
            <li className="flex items-start gap-2 text-slate-400">
              <Mail className="mt-0.5 h-4 w-4 text-brand-sky" />
              {SITE.email}
            </li>
          </ul>
          <div className="pt-2 text-xs text-slate-500">
            <span className="font-semibold text-slate-300">سایت‌های مرتبط: </span>
            <a href={SITE.network.tehrantowing} target="_blank" rel="noopener" className="text-slate-400 underline decoration-slate-600 underline-offset-2 hover:text-brand-sky">
              یدک کش تهران
            </a>
            {' · '}
            <a href={SITE.network.semnan} target="_blank" rel="noopener" className="text-slate-400 underline decoration-slate-600 underline-offset-2 hover:text-brand-sky">
              امداد خودرو سمنان
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-x flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} یدک کش خودرو استان تهران — تمامی حقوق محفوظ است.</p>
          <p className="flex items-center gap-2">
            <Link href="/about" className="hover:text-slate-300">درباره ما</Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-slate-300">تماس</Link>
            <span>·</span>
            <Link href="/blog" className="hover:text-slate-300">بلاگ</Link>
            <span>·</span>
            <Link href="/sitemap.xml" className="hover:text-slate-300">نقشه سایت</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
