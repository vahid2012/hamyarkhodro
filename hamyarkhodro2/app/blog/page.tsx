import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/site/Breadcrumb';
import CallCTA from '@/components/site/CallCTA';
import { JsonLdScript, breadcrumbSchema } from '@/lib/schema';
import { BLOG_POSTS } from '@/data/blog';
import { SITE } from '@/data/site';
import { Clock, ChevronLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'بلاگ یدک کش خودرو استان تهران | راهنمای امداد خودرو',
  description:
    'مقالات و راهنمای جامع امداد خودرو، یدک کش، جرثقیل و خودروبر در تهران و استان تهران. هزینه یدک کش، تفاوت خدمات و نکات ایمنی.',
  alternates: { canonical: `${SITE.url}/blog` },
};

export default function BlogPage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbSchema([
          { name: 'خانه', url: SITE.url },
          { name: 'بلاگ', url: `${SITE.url}/blog` },
        ])}
      />
      <Breadcrumb items={[{ name: 'خانه', url: '/' }, { name: 'بلاگ' }]} />

      <section className="bg-brand-navy py-14 text-white">
        <div className="container-x">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">بلاگ یدک کش خودرو استان تهران</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200">
            مقالات و راهنمای جامع درباره امداد خودرو، یدک کش، جرثقیل و خودروبر در تهران و استان تهران.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-x grid gap-6 sm:grid-cols-2">
          {BLOG_POSTS.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span>{p.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {p.readingTime}
                  </span>
                </div>
                <h2 className="mt-3 text-lg font-bold text-brand-navy group-hover:text-brand-red">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-red">
                  ادامه مطلب
                  <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CallCTA />
    </>
  );
}
