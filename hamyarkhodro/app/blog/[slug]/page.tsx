import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/site/Breadcrumb';
import CallCTA from '@/components/site/CallCTA';
import { JsonLdScript, breadcrumbSchema } from '@/lib/schema';
import { BLOG_POSTS, postBySlug } from '@/data/blog';
import { SITE } from '@/data/site';
import { RichText } from '@/components/site/RichText';
import { Clock, ChevronLeft, Phone } from 'lucide-react';

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = postBySlug(params.slug);
  if (!p) return {};
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: `${SITE.url}/blog/${p.slug}` },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDescription,
      url: `${SITE.url}/blog/${p.slug}`,
      images: [{ url: p.image, width: 1200, height: 630, alt: p.alt }],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = postBySlug(params.slug);
  if (!post) notFound();

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.metaDescription,
      image: post.image,
      author: { '@type': 'Organization', name: SITE.name },
      publisher: { '@type': 'Organization', name: SITE.name },
      datePublished: post.date,
      inLanguage: 'fa-IR',
    },
    breadcrumbSchema([
      { name: 'خانه', url: SITE.url },
      { name: 'بلاگ', url: `${SITE.url}/blog` },
      { name: post.title, url: `${SITE.url}/blog/${post.slug}` },
    ]),
  ];

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLdScript data={schema} />
      <Breadcrumb
        items={[
          { name: 'خانه', url: '/' },
          { name: 'بلاگ', url: '/blog' },
          { name: post.title },
        ]}
      />

      <article className="section-pad bg-white">
        <div className="container-x max-w-3xl">
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span>{post.date}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readingTime}
            </span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-brand-navy sm:text-4xl">{post.title}</h1>

          <div className="mt-6 overflow-hidden rounded-2xl">
            <Image
              src={post.image}
              alt={post.alt}
              width={1200}
              height={600}
              className="h-64 w-full object-cover sm:h-80"
            />
          </div>

          <div className="mt-8 space-y-5">
            {post.body.map((p, i) => (
              <RichText key={i} text={p} />
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-brand-red/20 bg-red-50 p-6 text-center">
            <p className="text-sm font-semibold text-brand-red">نیاز به امداد فوری دارید؟</p>
            <a href={`tel:${SITE.phone}`} className="mt-3 inline-flex items-center gap-2 text-2xl font-extrabold text-brand-navy">
              <Phone className="h-6 w-6 text-brand-red" />
              {SITE.phone}
            </a>
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-bold text-brand-navy">مقالات مرتبط</h2>
            <div className="mt-4 space-y-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="flex items-center justify-between rounded-xl border border-slate-200 p-4 text-sm font-medium text-slate-700 transition-colors hover:border-brand-red/40 hover:text-brand-red"
                >
                  {r.title}
                  <ChevronLeft className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CallCTA />
    </>
  );
}
