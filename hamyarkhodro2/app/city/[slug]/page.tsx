import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/site/Breadcrumb';
import FAQAccordion from '@/components/site/FAQAccordion';
import CallCTA from '@/components/site/CallCTA';
import { JsonLdScript, citySchema, breadcrumbSchema } from '@/lib/schema';
import {
  cityFaqs,
  cityPriceTable,
  cityBodyParagraphs,
  cityWhySection,
  SEMNAN_PAGE_BODY,
  SEMNAN_PAGE_FAQS,
  SHIRAZ_PAGE_BODY,
  SHIRAZ_PAGE_FAQS,
} from '@/data/services';
import { SITE, CITIES, cityBySlug, TEHRAN_CITIES } from '@/data/site';
import { RichTextBlock } from '@/components/site/RichText';
import { Check, Phone, MapPin, Clock, ShieldCheck, Table as TableIcon } from 'lucide-react';

export const dynamicParams = false;

export function generateStaticParams() {
  return CITIES.map((c) => ({ slug: c.slug }));
}

function provinceName(p: 'tehran' | 'semnan' | 'fars') {
  return p === 'tehran' ? 'استان تهران' : p === 'semnan' ? 'استان سمنان' : 'استان فارس';
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const city = cityBySlug(params.slug);
  if (!city) return {};
  const isSpecial = city.slug === 'semnan' || city.slug === 'shiraz';
  const provName = provinceName(city.province);
  const title = isSpecial
    ? `امداد خودرو و یدک کش ${city.name} | ۲۴ ساعته | 09032486073`
    : `امداد خودرو و یدک کش ${city.name} ${provName} | ۲۴ ساعته | 09032486073`;
  const desc = isSpecial
    ? `امداد خودرو، یدک کش، جرثقیل و خودروبر شبانه‌روزی در ${city.name} ${provName} با شماره 09032486073. اعزام زیر ۲۰ دقیقه. تماس فوری.`
    : `امداد خودرو و یدک کش در ${city.name} ${provName} با شماره 09032486073؛ امداد خودرو شبانه‌روزی، جرثقیل، خودروبر و باتری به باتری در ${city.name}.`;
  
  // 🔴 تغییر ۱: اصلاح مسیر در تگ Canonical و OpenGraph
  const urlPath = `/emdad-khodro-${city.slug}`; 

  return {
    title,
    description: desc,
    alternates: { canonical: `${SITE.url}${urlPath}` },
    openGraph: { title, description: desc, url: `${SITE.url}${urlPath}` },
  };
}

export default function CityPage({ params }: { params: { slug: string } }) {
  const city = cityBySlug(params.slug);
  if (!city) notFound();

  const provName = provinceName(city.province);
  const isSemnan = city.slug === 'semnan';
  const isShiraz = city.slug === 'shiraz';
  const isSpecial = isSemnan || isShiraz;
  const showBrand = city.province === 'tehran';

  const faqs = isSemnan
    ? SEMNAN_PAGE_FAQS
    : isShiraz
      ? SHIRAZ_PAGE_FAQS
      : cityFaqs(city.name);

  const body = isSemnan
    ? SEMNAN_PAGE_BODY
    : isShiraz
      ? SHIRAZ_PAGE_BODY
      : cityBodyParagraphs(city.name, provName);

  const prices = cityPriceTable(city.name);
  const whyList = cityWhySection(city.name);
  
  // 🔴 تغییر ۲: اصلاح مسیر برای اسکیمای Breadcrumb
  const urlPath = `/emdad-khodro-${city.slug}`; 

  const h1 = isSpecial
    ? `امداد خودرو و یدک کش ${city.name} | ۲۴ ساعته | 09032486073`
    : `امداد خودرو و یدک کش ${city.name} ${provName} | ۲۴ ساعته`;

  const answerParagraph = isSpecial
    ? `امداد خودرو و یدک کش در ${city.name} ${provName} با شماره 09032486073 به‌صورت شبانه‌روزی خدمات امداد خودرو، یدک کش، جرثقیل و خودروبر ارائه می‌دهد. نیروهای امداد در کمتر از ۲۰ دقیقه به محل اعزام می‌شوند و در بیش از ۸۰ درصد موارد خرابی در همان محل رفع می‌شود.`
    : `یدک کش خودرو استان تهران با شماره 09032486073 در ${city.name} ${provName} به‌صورت شبانه‌روزی خدمات امداد خودرو، یدک کش، جرثقیل، خودروبر، باتری به باتری و پنچرگیری ارائه می‌دهد. این مرکز دارای مجوز رسمی از کانون جهانگردی و اتومبیل‌رانی است و در کمتر از ۲۰ دقیقه در ${city.name} حاضر می‌شود.`;

  const schema = [
    ...citySchema(city, faqs),
    breadcrumbSchema([
      { name: 'خانه', url: SITE.url },
      { name: city.name, url: `${SITE.url}${urlPath}` },
    ]),
  ];

  return (
    <>
      <JsonLdScript data={schema} />
      <Breadcrumb
        items={[
          { name: 'خانه', url: '/' },
          ...(city.province === 'tehran' ? [{ name: 'شهرهای استان تهران', url: '/' }] : []),
          { name: city.name },
        ]}
      />

      <section className="relative overflow-hidden bg-brand-navy py-14">
        <div className="container-x">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">{h1}</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
            {answerParagraph}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${SITE.phone}`} className="btn-call">
              <Phone className="h-5 w-5" />
              تماس فوری {SITE.phone}
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
            <span className="flex items-center gap-1"><Clock className="h-4 w-4 text-brand-red-light" /> شبانه‌روزی ۲۴/۷</span>
            <span className="flex items-center gap-1"><MapPin className="h-4 w-4 text-brand-red-light" /> {city.name}، {provName}</span>
            {showBrand && (
              <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-brand-red-light" /> مجوز کانون جهانگردی</span>
            )}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-5">
            <RichTextBlock paragraphs={body} />

            {isSemnan && (
              <p className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-700">
                برای اطلاعات بیشتر می‌توانید به{' '}
                <a href="https://emdadkhodro-semnan.ir" target="_blank" rel="noopener" className="ext-link">
                  امداد خودرو سمنان
                </a>{' '}
                و{' '}
                <a href="https://emdadkhodro-semnan.ir" target="_blank" rel="noopener" className="ext-link">
                  یدک کش سمنان
                </a>{' '}
                مراجعه کنید.
              </p>
            )}
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-brand-red/20 bg-red-50 p-6 text-center">
              <p className="text-sm font-semibold text-brand-red">تماس فوری در {city.name}</p>
              <a href={`tel:${SITE.phone}`} className="mt-2 block text-2xl font-extrabold text-brand-navy">
                {SITE.phone}
              </a>
              <p className="mt-2 text-xs text-slate-600">۲۴ ساعته ۷ روز هفته</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="flex items-center gap-2 text-sm font-bold text-brand-navy">
                <TableIcon className="h-4 w-4 text-brand-red" />
                قیمت تقریبی خدمات در {city.name}
              </h3>
              <table className="mt-4 w-full text-xs">
                <tbody>
                  {prices.map((row) => (
                    <tr key={row.service} className="border-b border-slate-100">
                      <td className="py-2 pl-2 text-right text-slate-700">{row.service}</td>
                      <td className="py-2 text-left font-semibold text-brand-navy whitespace-nowrap">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-3 text-[11px] text-slate-500">
                * قیمت‌ها تقریبی و حداقل هستند. قبل از اعزام هزینه دقیق اعلام می‌شود.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="container-x">
          <h2 className="mb-8 text-center text-2xl font-extrabold text-brand-navy">
            چرا {showBrand ? 'یدک کش خودرو استان تهران' : 'امداد خودرو و یدک کش'} در {city.name}؟
          </h2>
          <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
            {whyList.map((w) => (
              <div key={w} className="flex items-start gap-2 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                {w}
              </div>
            ))}
          </div>
        </div>
      </section>

      {showBrand && (
        <section className="bg-white py-10">
          <div className="container-x">
            <h2 className="mb-5 text-center text-xl font-bold text-brand-navy">سایر شهرهای استان تهران</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {TEHRAN_CITIES.filter((c) => c.slug !== city.slug).map((c) => (
                <Link
                  key={c.slug}
                  href={`/emdad-khodro-${c.slug}`} // 🔴 تغییر ۳: اصلاح لینک‌های داخلی به سایر شهرها
                  className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-brand-red/40 hover:text-brand-red"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQAccordion items={faqs} title={`سوالات متداول امداد خودرو در ${city.name}`} />
      <CallCTA title={`امداد خودرو فوری در ${city.name}`} />
    </>
  );
}
