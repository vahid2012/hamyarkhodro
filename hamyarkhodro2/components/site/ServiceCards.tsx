import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import {
  Wrench,
  Truck,
  Construction,
  Car,
  BatteryCharging,
  CircleDot,
  PackageCheck,
  type LucideIcon,
} from 'lucide-react';
import { SERVICES } from '@/data/services';

const ICONS: Record<string, LucideIcon> = {
  Wrench,
  Truck,
  Construction,
  Car,
  BatteryCharging,
  CircleDot,
  PackageCheck,
};

// تابعی برای تولید آدرس جدید سرویس‌ها
const getServiceUrl = (slug: string) => {
  if (slug === 'amdad-khodro') return '/emdad-khodro';
  if (slug === 'khodro-bor') return '/khodrobar';
  return `/${slug}`;
};

export default function ServiceCards() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-extrabold text-brand-navy sm:text-3xl">خدمات امداد خودرو استان تهران</h2>
          <p className="mt-3 text-slate-600">مجموعه کامل خدمات امدادی و حمل خودرو در تمام شهرهای استان تهران</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon] ?? Wrench;
            return (
              <Link
                key={s.slug}
                href={getServiceUrl(s.slug)} // <--- اینجا اصلاح شد
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-xl"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-brand-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-red">
                  مشاهده و درخواست
                  <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-slate-600">
          برای اطلاعات بیشتر درباره یدک کش در تهران به{' '}
          <a href="https://tehrantowing.ir" target="_blank" rel="noopener" className="ext-link">
            یدک کش تهران
          </a>{' '}
          مراجعه کنید.
        </p>
      </div>
    </section>
  );
}
