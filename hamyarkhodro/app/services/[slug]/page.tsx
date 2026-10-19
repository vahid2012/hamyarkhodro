import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/site/Breadcrumb';
import FAQAccordion from '@/components/site/FAQAccordion';
import CallCTA from '@/components/site/CallCTA';
import { JsonLdScript, localBusinessSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';
import { SERVICES, serviceBySlug } from '@/data/services';
import { SITE, NAV_SERVICES, TEHRAN_CITIES } from '@/data/site';
import { RichTextBlock } from '@/components/site/RichText';
import { ChevronLeft, Phone, Check } from 'lucide-react';

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = serviceBySlug(params.slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `${SITE.url}/services/${s.slug}` },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url: `${SITE.url}/services/${s.slug}`,
      images: [{ url: s.image, width: 1200, height: 630, alt: s.alt }],
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = serviceBySlug(params.slug);
  if (!s) notFound();

  const path = `/services/${s.slug}`;
  const schema = [
    localBusinessSchema({ description: s.metaDescription }),
    faqSchema(s.faqs),
    breadcrumbSchema([
      { name: 'خانه', url: SITE.url },
      { name: 'خدمات', url: `${SITE.url}/services` },
      { name: s.title, url: `${SITE.url}${path}` },
    ]),
  ];

  return (
    <>
      <JsonLdScript data={schema} />
      <Breadcrumb
        items={[
          { name: 'خانه', url: '/' },
          { name: 'خدمات', url: '/services' },
          { name: s.title },
        ]}
      />

      <section className="relative overflow-hidden bg-brand-navy py-14">
        <div className="container-x">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">{s.metaTitle}</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
            {s.answerParagraph}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${SITE.phone}`} className="btn-call">
              <Phone className="h-5 w-5" />
              تماس فوری {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1 rounded-xl border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              درخواست آنلاین
              <ChevronLeft className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={s.image}
                alt={s.alt}
                width={1200}
                height={600}
                className="h-64 w-full object-cover sm:h-80"
              />
            </div>
            <div className="mt-8 space-y-5">
              <RichTextBlock paragraphs={s.body} />
            </div>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-lg font-bold text-brand-navy">خدمات مرتبط</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {NAV_SERVICES.filter((n) => n.slug !== s.slug).map((n) => (
                  <Link
                    key={n.slug}
                    href={`/services/${n.slug}`}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:border-brand-red/40 hover:text-brand-red"
                  >
                    {n.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-brand-red/20 bg-red-50 p-6 text-center">
              <p className="text-sm font-semibold text-brand-red">تماس فوری</p>
              <a href={`tel:${SITE.phone}`} className="mt-2 block text-2xl font-extrabold text-brand-navy">
                {SITE.phone}
              </a>
              <p className="mt-2 text-xs text-slate-600">۲۴ ساعته ۷ روز هفته</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-sm font-bold text-brand-navy">شهرهای تحت پوشش</h3>
              <ul className="mt-3 grid grid-cols-2 gap-1.5 text-xs text-slate-600">
                {TEHRAN_CITIES.slice(0, 14).map((c) => (
                  <li key={c.slug}>
                    <Link href={`/amdad/${c.slug}`} className="hover:text-brand-red">
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-sm font-bold text-brand-navy">مزایای خدمات</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {['اعزام زیر ۲۰ دقیقه', 'بیمه باربری کامل', 'مجوز کانون جهانگردی', 'تعرفه شفاف', 'پشتیبانی ۲۴/۷'].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-brand-red" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <FAQAccordion items={s.faqs} title={`سوالات متداول ${s.title}`} />
      <CallCTA />
    </>
  );
}
