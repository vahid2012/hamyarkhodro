import { Phone, Clock } from 'lucide-react';
import { SITE } from '@/data/site';

export default function CallCTA({
  title = 'نیاز به امداد فوری دارید؟',
  subtitle = 'همین حالا تماس بگیرید — شبانه‌روزی در خدمت شما هستیم',
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-brand-red">
      <div className="container-x flex flex-col items-center gap-6 py-14 text-center text-white lg:flex-row lg:justify-between lg:text-right">
        <div>
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">{title}</h2>
          <p className="mt-2 flex items-center justify-center gap-2 text-white/90 lg:justify-start">
            <Clock className="h-5 w-5" />
            {subtitle}
          </p>
        </div>
        <a
          href={`tel:${SITE.phone}`}
          className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-xl font-extrabold text-brand-red shadow-xl transition-transform hover:scale-105 active:scale-100"
        >
          <Phone className="h-6 w-6" />
          {SITE.phone}
        </a>
      </div>
    </section>
  );
}
