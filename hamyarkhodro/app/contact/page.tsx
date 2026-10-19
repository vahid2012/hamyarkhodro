import type { Metadata } from 'next';
import Breadcrumb from '@/components/site/Breadcrumb';
import CallCTA from '@/components/site/CallCTA';
import ContactForm from '@/components/site/ContactForm';
import { JsonLdScript, localBusinessSchema, breadcrumbSchema } from '@/lib/schema';
import { SITE } from '@/data/site';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'تماس با ما — یدک کش خودرو استان تهران | 09032486073',
  description:
    'برای تماس با مرکز یدک کش خودرو استان تهران با شماره 09032486073 تماس بگیرید. آدرس: استان تهران. ساعت کار: ۲۴ ساعته ۷ روز هفته.',
  alternates: { canonical: `${SITE.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <JsonLdScript
        data={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: 'خانه', url: SITE.url },
            { name: 'تماس با ما', url: `${SITE.url}/contact` },
          ]),
        ]}
      />
      <Breadcrumb items={[{ name: 'خانه', url: '/' }, { name: 'تماس با ما' }]} />

      <section className="bg-brand-navy py-14 text-white">
        <div className="container-x">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">تماس با یدک کش خودرو استان تهران</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
            برای درخواست امداد خودرو، یدک کش، جرثقیل و خودروبر در استان تهران، با شماره 09032486073 تماس
            بگیرید. مرکز ما به‌صورت ۲۴ ساعته و ۷ روز هفته در دسترس شماست.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold text-brand-navy">اطلاعات تماس</h2>
            <div className="mt-6 space-y-5">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-4 rounded-2xl border border-brand-red/20 bg-red-50 p-6 transition-colors hover:bg-red-100"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red text-white">
                  <Phone className="h-7 w-7" />
                </span>
                <div>
                  <p className="text-sm text-slate-600">شماره تماس مستقیم</p>
                  <p className="text-2xl font-extrabold text-brand-navy">{SITE.phone}</p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-brand-navy">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-bold text-brand-navy">آدرس</p>
                  <p className="mt-1 text-sm text-slate-600">استان تهران — پوشش تمام ۲۶ شهر استان تهران و جاده‌های اطراف</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-brand-navy">
                  <Clock className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-bold text-brand-navy">ساعت کار</p>
                  <p className="mt-1 text-sm text-slate-600">۲۴ ساعته، ۷ روز هفته — شبانه‌روزی و بدون تعطیلی</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-brand-navy">
                  <Mail className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-bold text-brand-navy">ایمیل</p>
                  <p className="mt-1 text-sm text-slate-600">{SITE.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-brand-navy">فرم درخواست</h2>
            <p className="mt-2 text-sm text-slate-600">
              فرم زیر را پر کنید تا در اسرع وقت با شما تماس بگیریم. برای درخواست فوری حتماً تماس بگیرید.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <CallCTA />
    </>
  );
}
