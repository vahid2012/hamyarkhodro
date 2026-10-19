import type { Metadata } from 'next';
import Breadcrumb from '@/components/site/Breadcrumb';
import CallCTA from '@/components/site/CallCTA';
import { JsonLdScript, localBusinessSchema, breadcrumbSchema } from '@/lib/schema';
import { SITE } from '@/data/site';
import { ShieldCheck, Clock, Phone, MapPin, Award, Users, Truck, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'درباره ما — یدک کش خودرو استان تهران | 09032486073',
  description:
    'درباره مرکز یدک کش خودرو استان تهران؛ امداد خودرو، یدک کش، جرثقیل و خودروبر شبانه‌روزی با مجوز رسمی کانون جهانگردی و اتومبیل‌رانی. تماس: 09032486073.',
  alternates: { canonical: `${SITE.url}/about` },
};

const stats = [
  { icon: Users, value: '+۵۰٬۰۰۰', label: 'مشتری راضی' },
  { icon: Truck, value: '+۳۰', label: 'ناوگان فعال' },
  { icon: Clock, value: '۲۴/۷', label: 'ساعت کار' },
  { icon: Star, value: '۲۶', label: 'شهر تحت پوشش' },
];

const features = [
  {
    icon: ShieldCheck,
    title: 'مجوز رسمی کانون جهانگردی و اتومبیل‌رانی',
    text: 'مرکز یدک کش خودرو استان تهران دارای مجوز رسمی از کانون جهانگردی و اتومبیل‌رانی است. این مجوز تضمین می‌کند که تمام خدمات با استانداردهای تعیین‌شده ارائه می‌شوند و در صورت بروز هرگونه مشکل، مسئولیت آن پذیرفته می‌شود.',
  },
  {
    icon: Award,
    title: 'بیمه باربری و بیمه شخص ثالث',
    text: 'تمام یدک کش‌ها، خودروبرها و جرثقیل‌های ما دارای بیمه باربری و بیمه شخص ثالث هستند. در طول حمل، خودرو شما تحت پوشش کامل بیمه قرار دارد و خیال شما از بابت خسارت آسوده است.',
  },
  {
    icon: Clock,
    title: 'پشتیبانی شبانه‌روزی',
    text: 'مرکز ما به‌صورت ۲۴ ساعته و ۷ روز هفته فعال است. در تمام ساعات شبانه‌روز، ایام تعطیلی و مناسبت‌ها، نیروی امداد و یدک کش آماده اعزام به محل شما هستند.',
  },
  {
    icon: Phone,
    title: 'پشتیبانی تلفنی حرفه‌ای',
    text: 'کارشناسان مرکز پشتیبانی ما با دریافت موقعیت دقیق و نوع خرابی، نزدیک‌ترین واحد امداد را در کوتاه‌ترین زمان به محل شما اعزام می‌کنند. هزینه شفاف قبل از اعزام اعلام می‌شود.',
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLdScript
        data={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: 'خانه', url: SITE.url },
            { name: 'درباره ما', url: `${SITE.url}/about` },
          ]),
        ]}
      />
      <Breadcrumb items={[{ name: 'خانه', url: '/' }, { name: 'درباره ما' }]} />

      <section className="bg-brand-navy py-14 text-white">
        <div className="container-x">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">درباره یدک کش خودرو استان تهران</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
            مرکز یدک کش خودرو استان تهران با شماره 09032486073 یکی از معتبرترین مراکز امداد خودرو، یدک کش،
            جرثقیل و خودروبر در استان تهران است. این مرکز با مجوز رسمی از کانون جهانگردی و اتومبیل‌رانی،
            به‌صورت شبانه‌روزی در تمام ۲۶ شهر استان تهران و جاده‌های اطراف فعال است.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-10">
        <div className="container-x grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-brand-red">
                <s.icon className="h-6 w-6" />
              </span>
              <p className="mt-3 text-2xl font-extrabold text-brand-navy">{s.value}</p>
              <p className="text-xs text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <h2 className="text-2xl font-extrabold text-brand-navy">ما کی هستیم؟</h2>
            <p className="text-base leading-relaxed text-slate-700">
              یدک کش خودرو استان تهران با هدف ارائه خدمات امداد خودروی سریع، ایمن و قابل اعتماد در سراسر
              استان تهران تأسیس شده است. ما با ناوگانی متشکل از یدک کش پلاتین، چرخ‌قفل، خودروبر و جرثقیل‌های
              سبک و سنگین، آماده خدمت‌رسانی به رانندگان در هر ساعت از شبانه‌روز هستیم.
            </p>
            <p className="text-base leading-relaxed text-slate-700">
              تمام نیروهای ما آموزش‌دیده و دارای مجوز رسمی هستند. ناوگان ما دارای بیمه باربری و بیمه شخص
              ثالث است و در طول حمل، خودرو شما تحت پوشش کامل بیمه قرار دارد. مرکز ما با مجوز کانون
              جهانگردی و اتومبیل‌رانی فعالیت می‌کند که این مجوز تضمین کیفیت خدمات ماست.
            </p>
            <p className="text-base leading-relaxed text-slate-700">
              پوشش خدمات ما شامل تمام شهرهای استان تهران از جمله تهران، اسلامشهر، شهریار، ورامین، پاکدشت،
              رباط‌کریم، پردیس، دماوند، فیروزکوه، ملارد، قدس، اندیشه، نسیم‌شهر، قرچک، پیشوا، شمیرانات،
              لواسان، فشم، رودهن، بومهن، جاجرود، چهاردانگه، صفادشت، وحیدیه، گلستان و کهریزک است.
            </p>
            <p className="text-base leading-relaxed text-slate-700">
              برای اطلاعات بیشتر درباره جرثقیل و خودروبر تهران و سایر خدمات، می‌توانید با شماره 09032486073
              تماس بگیرید. همچنین مرتبط با{' '}
              <a href="https://tehrantowing.ir" target="_blank" rel="noopener" className="ext-link">
                جرثقیل و خودروبر تهران
              </a>{' '}
              اطلاعات بیشتری در سایت مرتبط موجود است.
            </p>
          </div>
          <div className="space-y-5">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red text-white">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-brand-navy">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="container-x rounded-2xl bg-white p-8 text-center shadow-sm">
          <h2 className="text-xl font-bold text-brand-navy">مجوز و اعتبار</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
            مرکز یدک کش خودرو استان تهران دارای مجوز رسمی از کانون جهانگردی و اتومبیل‌رانی است. این مجوز
            نشان‌دهنده اعتبار و رسمی بودن تمام خدمات ماست و تضمین می‌کند که در صورت بروز هرگونه مشکل،
            مسئولیت آن پذیرفته می‌شود. تمام نیروها و ناوگان ما تحت پوشش بیمه باربری و بیمه شخص ثالث هستند.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 font-semibold text-brand-red">
              <ShieldCheck className="h-4 w-4" />
              مجوز کانون جهانگردی و اتومبیل‌رانی
            </span>
            <span className="flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 font-semibold text-brand-red">
              <MapPin className="h-4 w-4" />
              پوشش ۲۶ شهر استان تهران
            </span>
            <span className="flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 font-semibold text-brand-red">
              <Clock className="h-4 w-4" />
              شبانه‌روزی ۲۴/۷
            </span>
          </div>
        </div>
      </section>

      <CallCTA />
    </>
  );
}
