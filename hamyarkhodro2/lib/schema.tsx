import { SITE, type CityInfo } from '@/data/site';
import { type CityFAQ } from '@/data/services';

export type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phoneIntl,
    logo: `${SITE.url}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE.phoneIntl,
      contactType: 'customer service',
      areaServed: 'IR',
      availableLanguage: ['fa'],
    },
  };
}

export function websiteSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    inLanguage: 'fa-IR',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE.url}/?s={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function localBusinessSchema(opts?: {
  areaServed?: string;
  description?: string;
  name?: string;
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: opts?.name ?? SITE.name,
    telephone: SITE.phoneIntl,
    url: SITE.url,
    image: `${SITE.url}/logo.png`,
    priceRange: SITE.priceRange,
    address: {
      '@type': 'PostalAddress',
      addressRegion: SITE.addressRegion,
      addressCountry: SITE.addressCountry,
    },
    areaServed: opts?.areaServed ?? SITE.addressRegion,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    description:
      opts?.description ??
      'امداد خودرو، یدک کش، جرثقیل و خودروبر شبانه‌روزی در استان تهران با مجوز کانون جهانگردی و اتومبیل‌رانی.',
  };
}

export function faqSchema(faqs: CityFAQ[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function breadcrumbFor(path: string, lastName: string): JsonLd {
  return breadcrumbSchema([
    { name: 'خانه', url: SITE.url },
    { name: lastName, url: `${SITE.url}${path}` },
  ]);
}

export function JsonLdScript({ data }: { data: JsonLd | JsonLd[] }) {
  const arr = Array.isArray(data) ? data : [data];
  return (
    <>
      {arr.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}

export function homeSchema(): JsonLd[] {
  const homeFaqs: CityFAQ[] = [
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
  return [
    organizationSchema(),
    websiteSchema(),
    localBusinessSchema(),
    faqSchema(homeFaqs),
  ];
}

export function citySchema(city: CityInfo, faqs: CityFAQ[]): JsonLd[] {
  const provinceName =
    city.province === 'tehran'
      ? 'استان تهران'
      : city.province === 'semnan'
        ? 'استان سمنان'
        : 'استان فارس';
  const useBrand = city.province === 'tehran';
  return [
    localBusinessSchema({
      areaServed: `${city.name}، ${provinceName}`,
      name: useBrand ? SITE.name : `امداد خودرو و یدک کش ${city.name}`,
      description: `امداد خودرو، یدک کش، جرثقیل و خودروبر شبانه‌روزی در ${city.name} ${provinceName} با شماره 09032486073.`,
    }),
    faqSchema(faqs),
  ];
}
