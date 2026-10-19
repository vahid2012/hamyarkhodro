import Link from 'next/link';
import { Phone, Home, Wrench } from 'lucide-react';
import { SITE } from '@/data/site';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-20 text-center">
      <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-red-50 text-brand-red">
        <Wrench className="h-10 w-10" />
      </span>
      <h1 className="mt-6 text-5xl font-extrabold text-brand-navy">۴۰۴</h1>
      <h2 className="mt-3 text-xl font-bold text-brand-navy">صفحه مورد نظر پیدا نشد</h2>
      <p className="mt-3 max-w-md text-sm text-slate-600">
        صفحه‌ای که به دنبال آن هستید وجود ندارد یا جابه‌جا شده است. برای دریافت خدمات امداد خودرو با ما
        تماس بگیرید یا به صفحه اصلی برگردید.
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <a
          href={`tel:${SITE.phone}`}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-red px-6 py-3 font-bold text-white shadow-lg shadow-red-500/30 hover:bg-brand-red-dark"
        >
          <Phone className="h-5 w-5" />
          تماس فوری {SITE.phone}
        </a>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
        >
          <Home className="h-5 w-5" />
          بازگشت به خانه
        </Link>
      </div>
    </div>
  );
}
