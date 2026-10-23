import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { TEHRAN_CITIES } from '@/data/site';

export default function CityGrid() {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-x">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-xs font-semibold text-brand-red">
            <MapPin className="h-4 w-4" />
            پوشش ۲۶ شهر استان تهران
          </span>
          <h2 className="mt-4 text-2xl font-extrabold text-brand-navy sm:text-3xl">
            امداد خودرو و یدک کش در شهرهای استان تهران
          </h2>
          <p className="mt-3 text-slate-600">
            روی شهر خود کلیک کنید تا صفحه اختصاصی امداد خودرو و یدک کش آن شهر را ببینید
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {TEHRAN_CITIES.map((c) => (
            <Link
              key={c.slug}
              href={`/emdad-khodro-${c.slug}`} // <--- اصلاح شد
              className="group rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-brand-red/40 hover:bg-red-50 hover:text-brand-red"
            >
              {c.name}
            </Link>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-center">
          <h3 className="text-lg font-bold text-brand-navy">سایر خدمات ما</h3>
          <p className="mt-2 text-sm text-slate-600">
            علاوه بر استان تهران، خدمات امداد خودرو در استان‌های دیگر نیز فعال است:{' '}
            <Link href="/emdad-khodro-semnan" className="font-semibold text-brand-red hover:underline">
              امداد خودرو سمنان
            </Link>{' '}
            و{' '}
            <a href="https://emdadkhodro-semnan.ir" target="_blank" rel="noopener" className="ext-link">
              امداد خودرو شبانه‌روزی سمنان
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
