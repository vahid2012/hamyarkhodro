export type ServiceSlug =
  | 'roadside-assistance'
  | 'towing'
  | 'car-hauler'
  | 'mobile-mechanic'
  | 'battery-service';

export interface ServiceDefinition {
  slug: ServiceSlug;
  faName: string;
  faShort: string;
  faDescription: string;
  icon: string;
  keywords: string[];
}

export const SERVICES: ServiceDefinition[] = [
  {
    slug: 'roadside-assistance',
    faName: 'امداد خودرو',
    faShort: 'امداد خودرو',
    faDescription: 'خدمات امداد خودروی سیار در محل',
    icon: 'siren',
    keywords: ['امداد خودرو', 'امداد خودرو سیار', 'اعزام امداد'],
  },
  {
    slug: 'towing',
    faName: 'یدک‌کش',
    faShort: 'یدک‌کش',
    faDescription: 'اعزام یدک‌کش برای انتقال خودرو',
    icon: 'truck',
    keywords: ['یدک کش', 'یدک‌کش', 'انتقال خودرو'],
  },
  {
    slug: 'car-hauler',
    faName: 'خودروبر',
    faShort: 'خودروبر',
    faDescription: 'اعزام خودروبر برای حمل خودرو',
    icon: 'car',
    keywords: ['خودروبر', 'حمل خودرو', 'ماشین بر'],
  },
  {
    slug: 'mobile-mechanic',
    faName: 'مکانیک سیار',
    faShort: 'مکانیک سیار',
    faDescription: 'اعزام مکانیک سیار به محل',
    icon: 'wrench',
    keywords: ['مکانیک سیار', 'مکانیک در محل', 'تعییر قطعه'],
  },
  {
    slug: 'battery-service',
    faName: 'باتری به باتری',
    faShort: 'باتری به باتری',
    faDescription: 'اعزام باتری به باتری برای روشن شدن خودرو',
    icon: 'battery',
    keywords: ['باتری به باتری', 'شارژ باتری', 'باتری ماشین'],
  },
];

export const SERVICE_MAP: Record<ServiceSlug, ServiceDefinition> = SERVICES.reduce(
  (acc, service) => {
    acc[service.slug] = service;
    return acc;
  },
  {} as Record<ServiceSlug, ServiceDefinition>
);
