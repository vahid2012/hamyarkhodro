import Hero from '@/components/site/Hero';
import TrustBar from '@/components/site/TrustBar';
import ServiceCards from '@/components/site/ServiceCards';
import CityGrid from '@/components/site/CityGrid';
import FAQAccordion from '@/components/site/FAQAccordion';
import CallCTA from '@/components/site/CallCTA';
import { JsonLdScript, homeSchema } from '@/lib/schema';
import { ShieldCheck, Clock, Phone, Star, MapPin, Car, Truck, BadgeCheck } from 'lucide-react';
import { SITE } from '@/data/site';

const homeFaqs = [
  {
    q: 'امداد خودرو استان تهران در چند دقیقه به محل می‌رسد؟',
    a: 'در محدوده شهرهای اصلی استان تهران میانگین زمان رسیدن امداد خودرو بین ۱۵ تا ۲۰ دقیقه است. در جاده‌های دورتر و مناطق کوهستانی این زمان ممکن است تا ۳۵ دقیقه افزایش یابد.',
  },
  {
    q: 'آیا امداد خودرو و یدک کش استان تهران شبانه‌روزی فعال است؟',
    a: 'بله، مرکز یدک کش خودرو استان تهران به‌صورت ۲۴ ساعته و ۷ روز هفته فعال است و در تمام ساعات شبانه‌روز نیروی امداد و یدک کش اعزام می‌شود.',
  },
  {
    q: 'شماره امداد خودرو استان تهران چیست؟',
    a: 'شماره امداد خودرو و یدک کش استان تهران 09032486073 است. در هر ساعت از شبانه‌روز می‌توانید با این شماره تماس بگیرید.',
  },
  {
    q: 'خدمات مرکز یدک کش خودرو استان تهران شامل چه مواردی است؟',
    a: 'خدمات شامل امداد خودرو، یدک کش، جرثقیل، خودروبر، باتری به باتری، پنچرگیری و حمل خودرو صفر کیلومتر در تمام شهرهای استان تهران است.',
  },
  {
    q: 'آیا یدک کش خودرو استان تهران دارای مجوز است؟',
    a: 'بله، مرکز دارای مجوز رسمی از کانون جهانگردی و اتومبیل‌رانی است و تمام یدک کش‌ها و امداد خودروها دارای بیمه باربری و بیمه شخص ثالث هستند.',
  },
];

const whyUs = [
  { icon: Clock, title: 'اعزام زیر ۲۰ دقیقه', text: 'نزدیک‌ترین واحد امداد به محل شما اعزام می‌شود' },
  { icon: ShieldCheck, title: 'مجوز رسمی کانون جهانگردی', text: 'تمام خدمات تحت پوشش بیمه باربری و بیمه شخص ثالث' },
  { icon: Phone, title: 'پشتیبانی ۲۴ ساعته', text: 'در تمام ساعات شبانه‌روز و ایام تعطیلی در دسترس' },
  { icon: BadgeCheck, title: 'تعرفه شفاف', text: 'هزینه از پیش‌تعیین‌شده بدون هیچ هزینه پنهان' },
  { icon: Car, title: 'تجهیزات کامل', text: 'باتری کمکی، لاستیک‌دان، دستگاه diagnosing و جعبه ابزار' },
  { icon: Truck, title: 'ناوگان گسترده', text: 'پوشش تمام ۲۶ شهر استان تهران و جاده‌های اطراف' },
];

const steps = [
  { num: '۱', title: 'تماس بگیرید', text: 'با 09032486073 تماس بگیرید و موقعیت خود را اعلام کنید' },
  { num: '۲', title: 'ثبت درخواست', text: 'کارشناس نوع خرابی و آدرس را ثبت و نزدیک‌ترین واحد را اعزام می‌کند' },
  { num: '۳', title: 'اعزام امداد', text: 'نیروی امداد با تجهیزات کامل در کمتر از ۲۰ دقیقه به محل می‌رسد' },
  { num: '۴', title: 'رفع خرابی', text: 'خرابی در محل رفع می‌شود یا خودرو با یدک کش منتقل می‌گردد' },
];

const testimonials = [
  { name: 'محمد رضایی', city: 'تهران', text: 'نصفه‌شب ماشینم تو اتوبان خراب کرد. زیر ۱۵ دقیقه امداد رسید و باتری به باتری زدن. عالی بود.' },
  { name: 'سارا کریمی', city: 'شهریار', text: 'یدک کش پلاتین برای ماشین لوکسم اعزام کردن. خیلی حرفه‌ای و با بیمه بود.' },
  { name: 'علی محمدی', city: 'ورامین', text: 'ماشینم از جاده خارج شده بود. جرثقیل فرستادن و خیلی سریع بازیابی کردن. ممنونم.' },
  { name: 'نگار حسینی', city: 'پردیس', text: 'پنچرگیری سیار در محل، ارزان و سریع. اصلاً انتظار نداشتم این سرعت خدمت.' },
];

export default function Home() {
  return (
    <>
      <JsonLdScript data={homeSchema()} />
      <Hero />
      <TrustBar />

      <ServiceCards />

      <section className="section-pad bg-brand-navy text-white">
        <div className="container-x">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">چرا یدک کش خودرو استان تهران؟</h2>
            <p className="mt-3 text-slate-300">مزایایی که ما را به برترین مرکز امداد خودرو استان تهران تبدیل کرده است</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((it) => (
              <div key={it.title} className="rounded-2xl bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red text-white">
                  <it.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CityGrid />

      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-extrabold text-brand-navy sm:text-3xl">مراحل دریافت خدمات امداد خودرو</h2>
            <p className="mt-3 text-slate-600">در چهار مرحله ساده، امداد خودرو به محل شما اعزام می‌شود</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.num} className="relative rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-2xl font-extrabold text-white">
                  {s.num}
                </span>
                <h3 className="mt-4 text-base font-bold text-brand-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="container-x">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-extrabold text-brand-navy sm:text-3xl">نظرات مشتریان</h2>
            <p className="mt-3 text-slate-600">تجربه رانندگانی که از خدمات ما استفاده کرده‌اند</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex gap-1 text-brand-red">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">«{t.text}»</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-sm font-bold text-brand-red">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-brand-navy">{t.name}</p>
                    <p className="flex items-center gap-1 text-xs text-slate-500">
                      <MapPin className="h-3 w-3" />
                      {t.city}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion items={homeFaqs} title="سوالات متداول امداد خودرو استان تهران" />

      <CallCTA />
    </>
  );
}
