import { SERVICES, ServiceSlug } from './services';
import { LOCATIONS } from './locations';

export interface RouteDefinition {
  path: string;
  serviceSlug: ServiceSlug;
  locationSlug: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

export const STATIC_ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'daily' as const },
  { path: '/about', priority: '0.7', changefreq: 'monthly' as const },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' as const },
  { path: '/services', priority: '0.9', changefreq: 'weekly' as const },
  { path: '/coverage', priority: '0.8', changefreq: 'weekly' as const },
  { path: '/faq', priority: '0.6', changefreq: 'monthly' as const },
  { path: '/prices', priority: '0.8', changefreq: 'weekly' as const },
  { path: '/blog', priority: '0.7', changefreq: 'daily' as const },
];

export const SERVICE_LANDING_ROUTES = SERVICES.map((service) => ({
  path: `/${service.slug}`,
  serviceSlug: service.slug,
  locationSlug: '',
  priority: 0.9,
  changefreq: 'weekly' as const,
}));

export const LOCATION_LANDING_ROUTES = LOCATIONS.map((location) => ({
  path: `/location/${location.slug}`,
  serviceSlug: '' as ServiceSlug,
  locationSlug: location.slug,
  priority: 0.85,
  changefreq: 'weekly' as const,
}));

export const SERVICE_LOCATION_ROUTES: RouteDefinition[] = SERVICES.flatMap(
  (service) =>
    LOCATIONS.map((location) => ({
      path: `/${service.slug}/${location.slug}`,
      serviceSlug: service.slug,
      locationSlug: location.slug,
      priority: 0.75 + location.priority / 1000,
      changefreq: 'weekly' as const,
    }))
);

export const ALL_DYNAMIC_ROUTES: RouteDefinition[] = [
  ...SERVICE_LANDING_ROUTES,
  ...SERVICE_LOCATION_ROUTES,
];

export interface NextRouteConfig {
  pattern: string;
  page: string;
  dataRoute: boolean;
}

export const NEXT_ROUTE_CONFIG: NextRouteConfig[] = [
  ...SERVICES.map((service) => ({
    pattern: `^/${service.slug}$`,
    page: `/services/[service]`,
    dataRoute: true,
  })),
  ...SERVICES.map((service) => ({
    pattern: `^/${service.slug}/(?<location>[\\w-]+)$`,
    page: `/services/[service]/[location]`,
    dataRoute: true,
  })),
  {
    pattern: '^/location/(?<location>[\\w-]+)$',
    page: '/locations/[location]',
    dataRoute: true,
  },
  { pattern: '^/$', page: '/', dataRoute: false },
  { pattern: '^/about$', page: '/about', dataRoute: false },
  { pattern: '^/contact$', page: '/contact', dataRoute: false },
  { pattern: '^/services$', page: '/services', dataRoute: false },
  { pattern: '^/coverage$', page: '/coverage', dataRoute: false },
  { pattern: '^/faq$', page: '/faq', dataRoute: false },
  { pattern: '^/prices$', page: '/prices', dataRoute: false },
  { pattern: '^/blog$', page: '/blog', dataRoute: false },
  { pattern: '^/blog/(?<slug>[\\w-]+)$', page: '/blog/[slug]', dataRoute: true },
];
