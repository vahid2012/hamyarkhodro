import { SERVICE_MAP, ServiceSlug } from './services';
import { LOCATION_MAP } from './locations';

export const BASE_URL = 'https://hamyar-khodro.ir';

export function buildCanonicalUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_URL}${normalized.replace(/\/+/g, '/')}`;
}

export function buildServiceLocationUrl(
  serviceSlug: ServiceSlug,
  locationSlug: string
): string {
  return `/${serviceSlug}/${locationSlug}`;
}

export function buildAbsoluteServiceLocationUrl(
  serviceSlug: ServiceSlug,
  locationSlug: string
): string {
  return buildCanonicalUrl(buildServiceLocationUrl(serviceSlug, locationSlug));
}

export interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent: boolean;
}

export function buildBreadcrumbs(
  serviceSlug?: ServiceSlug,
  locationSlug?: string
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { label: 'خانه', href: '/', isCurrent: false },
    { label: 'خدمات', href: '/services', isCurrent: false },
  ];

  if (serviceSlug) {
    const service = SERVICE_MAP[serviceSlug];
    if (!service) return items;
    if (locationSlug) {
      items.push({
        label: service.faName,
        href: `/${service.slug}`,
        isCurrent: false,
      });
    } else {
      items.push({
        label: service.faName,
        href: `/${service.slug}`,
        isCurrent: true,
      });
      return items;
    }
  }

  if (locationSlug) {
    const location = LOCATION_MAP[locationSlug];
    if (!location) return items;
    const service = serviceSlug ? SERVICE_MAP[serviceSlug] : null;
    items.push({
      label: service
        ? `${service.faName} ${location.faName}`
        : location.faName,
      href: service
        ? `/${service.slug}/${location.slug}`
        : `/location/${location.slug}`,
      isCurrent: true,
    });
  }

  return items;
}

export function buildMetaTitle(
  serviceSlug?: ServiceSlug,
  locationSlug?: string
): string {
  if (!serviceSlug && !locationSlug) {
    return 'همیار خودرو | امداد خودرو، یدک‌کش و خودروبر ۲۴ ساعته';
  }

  if (serviceSlug && !locationSlug) {
    const service = SERVICE_MAP[serviceSlug];
    return service
      ? `${service.faName} ۲۴ ساعته | همیار خودرو`
      : 'همیار خودرو';
  }

  if (!serviceSlug && locationSlug) {
    const location = LOCATION_MAP[locationSlug];
    return location
      ? `خدمات خودرویی در ${location.faName} | همیار خودرو`
      : 'همیار خودرو';
  }

  const service = serviceSlug ? SERVICE_MAP[serviceSlug] : null;
  const location = locationSlug ? LOCATION_MAP[locationSlug] : null;
  if (service && location) {
    return `${service.faName} در ${location.faName} ۲۴ ساعته | همیار خودرو`;
  }
  return 'همیار خودرو';
}

export function buildMetaDescription(
  serviceSlug?: ServiceSlug,
  locationSlug?: string
): string {
  if (!serviceSlug && !locationSlug) {
    return 'اعزام امداد خودرو، یدک‌کش، خودروبر، مکانیک سیار و باتری به باتری در سراسر کشور به صورت ۲۴ ساعته و فوری.';
  }

  if (serviceSlug && !locationSlug) {
    const service = SERVICE_MAP[serviceSlug];
    return service
      ? `${service.faDescription} به صورت ۲۴ ساعته و فوری در سراسر کشور. تماس و اعزام سریع.`
      : 'خدمات همیار خودرو ۲۴ ساعته.';
  }

  if (!serviceSlug && locationSlug) {
    const location = LOCATION_MAP[locationSlug];
    return location
      ? `اعزام امداد خودرو، یدک‌کش، خودروبر، مکانیک سیار و باتری به باتری در ${location.faName} به صورت ۲۴ ساعته و فوری.`
      : 'خدمات همیار خودرو ۲۴ ساعته.';
  }

  const service = serviceSlug ? SERVICE_MAP[serviceSlug] : null;
  const location = locationSlug ? LOCATION_MAP[locationSlug] : null;
  if (service && location) {
    return `${service.faName} در ${location.faName} به صورت ۲۴ ساعته و فوری. ${service.faDescription}. تماس و اعزام سریع.`;
  }
  return 'خدمات همیار خودرو ۲۴ ساعته.';
}

export interface JsonLdBreadcrumb {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item: string;
  }>;
}

export function buildBreadcrumbJsonLd(
  serviceSlug?: ServiceSlug,
  locationSlug?: string
): JsonLdBreadcrumb {
  const items = buildBreadcrumbs(serviceSlug, locationSlug);
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: buildCanonicalUrl(item.href),
    })),
  };
}

export interface JsonLdService {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  areaServed: string;
  provider: { '@type': string; name: string; url: string };
  url: string;
}

export function buildServiceJsonLd(
  serviceSlug: ServiceSlug,
  locationSlug: string
): JsonLdService | null {
  const service = SERVICE_MAP[serviceSlug];
  const location = LOCATION_MAP[locationSlug];
  if (!service || !location) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.faName} در ${location.faName}`,
    description: service.faDescription,
    areaServed: location.faName,
    provider: {
      '@type': 'Organization',
      name: 'همیار خودرو',
      url: BASE_URL,
    },
    url: buildAbsoluteServiceLocationUrl(serviceSlug, locationSlug),
  };
}

export function generateSitemapUrls(): Array<{
  url: string;
  priority: string;
  changefreq: string;
}> {
  const { STATIC_ROUTES, SERVICE_LOCATION_ROUTES, SERVICE_LANDING_ROUTES } =
    require('./routes');
  const urls: Array<{ url: string; priority: string; changefreq: string }> = [];

  STATIC_ROUTES.forEach((route: { path: string; priority: string; changefreq: string }) => {
    urls.push({
      url: buildCanonicalUrl(route.path),
      priority: route.priority,
      changefreq: route.changefreq,
    });
  });

  SERVICE_LANDING_ROUTES.forEach(
    (route: { path: string; priority: number; changefreq: string }) => {
      urls.push({
        url: buildCanonicalUrl(route.path),
        priority: route.priority.toFixed(1),
        changefreq: route.changefreq,
      });
    }
  );

  SERVICE_LOCATION_ROUTES.forEach(
    (route: { path: string; priority: number; changefreq: string }) => {
      urls.push({
        url: buildCanonicalUrl(route.path),
        priority: route.priority.toFixed(2),
        changefreq: route.changefreq,
      });
    }
  );

  return urls;
}
