import { ShieldCheck, Clock, BadgeCheck, PhoneCall } from 'lucide-react';

const items = [
  { icon: Clock, title: '۲۴ ساعته ۷ روز هفته', text: 'شبانه‌روزی در دسترس' },
  { icon: ShieldCheck, title: 'مجوز کانون جهانگردی', text: 'خدمات رسمی و بیمه‌دار' },
  { icon: BadgeCheck, title: 'اعزام زیر ۲۰ دقیقه', text: 'نزدیک‌ترین واحد به شما' },
  { icon: PhoneCall, title: 'تماس فوری 09032486073', text: 'پشتیبانی بدون وقفه' },
];

export default function TrustBar() {
  return (
    <section className="border-b border-slate-100 bg-white">
      <div className="container-x grid grid-cols-2 gap-4 py-6 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-brand-red">
              <it.icon className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-brand-navy">{it.title}</p>
              <p className="text-xs text-slate-500">{it.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
