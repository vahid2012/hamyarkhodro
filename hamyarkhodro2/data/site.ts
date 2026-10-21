export const SITE = {
  name: 'یدک کش خودرو استان تهران',
  shortName: 'یدک کش خودرو استان تهران',
  url: 'https://www.hamyar-khodro.ir',
  phone: '09032486073',
  phoneIntl: '+989032486073',
  owner: 'آقای خسروبیگی',
  license: 'کانون جهانگردی و اتومبیل‌رانی',
  hours: '۲۴ ساعته، ۷ روز هفته',
  hoursSchema: 'Mo-Su 00:00-23:59',
  priceRange: '$$',
  addressRegion: 'استان تهران',
  addressCountry: 'IR',
  email: 'info@hamyar-khodro.ir',
  network: {
    tehrantowing: 'https://tehrantowing.ir',
    semnan: 'https://emdadkhodro-semnan.ir',
  },
} as const;

export const NAV_SERVICES = [
  { slug: 'amdad-khodro', title: 'امداد خودرو' },
  { slug: 'yadak-kesh', title: 'یدک کش' },
  { slug: 'jarsaghil', title: 'جرثقیل' },
  { slug: 'khodro-bor', title: 'خودروبر' },
  { slug: 'battery', title: 'باتری به باتری' },
  { slug: 'pancher', title: 'پنچرگیری' },
  { slug: 'haml-khodro-sefr', title: 'حمل خودرو صفر' },
] as const;

export type CityInfo = {
  slug: string;
  name: string;
  province: 'tehran' | 'semnan' | 'fars';
  lat: number;
  lng: number;
};

export const CITIES: CityInfo[] = [
  { slug: 'tehran', name: 'تهران', province: 'tehran', lat: 35.6892, lng: 51.389 },
  { slug: 'eslamshahr', name: 'اسلامشهر', province: 'tehran', lat: 35.553, lng: 51.237 },
  { slug: 'shahriar', name: 'شهریار', province: 'tehran', lat: 35.659, lng: 50.945 },
  { slug: 'varamin', name: 'ورامین', province: 'tehran', lat: 35.318, lng: 51.648 },
  { slug: 'pakdasht', name: 'پاکدشت', province: 'tehran', lat: 35.493, lng: 51.687 },
  { slug: 'robat-karim', name: 'رباط‌کریم', province: 'tehran', lat: 35.485, lng: 50.987 },
  { slug: 'pardis', name: 'پردیس', province: 'tehran', lat: 35.731, lng: 51.803 },
  { slug: 'damavand', name: 'دماوند', province: 'tehran', lat: 35.726, lng: 52.314 },
  { slug: 'firuzkuh', name: 'فیروزکوه', province: 'tehran', lat: 35.762, lng: 52.528 },
  { slug: 'malard', name: 'ملارد', province: 'tehran', lat: 35.693, lng: 50.778 },
  { slug: 'ghods', name: 'قدس', province: 'tehran', lat: 35.717, lng: 51.067 },
  { slug: 'andisheh', name: 'اندیشه', province: 'tehran', lat: 35.679, lng: 51.089 },
  { slug: 'nasim-shahr', name: 'نسیم‌شهر', province: 'tehran', lat: 35.546, lng: 51.134 },
  { slug: 'qarchak', name: 'قرچک', province: 'tehran', lat: 35.434, lng: 51.582 },
  { slug: 'pishva', name: 'پیشوا', province: 'tehran', lat: 35.254, lng: 51.918 },
  { slug: 'shemiranat', name: 'شمیرانات', province: 'tehran', lat: 35.856, lng: 51.433 },
  { slug: 'lavasan', name: 'لواسان', province: 'tehran', lat: 35.826, lng: 51.636 },
  { slug: 'fasham', name: 'فشم', province: 'tehran', lat: 35.893, lng: 51.567 },
  { slug: 'roodhen', name: 'رودهن', province: 'tehran', lat: 35.731, lng: 52.328 },
  { slug: 'boomehen', name: 'بومهن', province: 'tehran', lat: 35.741, lng: 51.864 },
  { slug: 'jajrood', name: 'جاجرود', province: 'tehran', lat: 35.766, lng: 51.708 },
  { slug: 'chahardangeh', name: 'چهاردانگه', province: 'tehran', lat: 35.591, lng: 51.604 },
  { slug: 'safadasht', name: 'صفادشت', province: 'tehran', lat: 35.626, lng: 50.854 },
  { slug: 'vahidieh', name: 'وحیدیه', province: 'tehran', lat: 35.558, lng: 50.965 },
  { slug: 'golestan', name: 'گلستان', province: 'tehran', lat: 35.615, lng: 51.127 },
  { slug: 'kahrizak', name: 'کهریزک', province: 'tehran', lat: 35.478, lng: 51.389 },
  // Semnan
  { slug: 'semnan', name: 'سمنان', province: 'semnan', lat: 35.575, lng: 53.415 },
  { slug: 'shahrood', name: 'شاهرود', province: 'semnan', lat: 36.418, lng: 55.016 },
  { slug: 'damghan', name: 'دامغان', province: 'semnan', lat: 36.167, lng: 54.344 },
  { slug: 'garmsar', name: 'گرمسار', province: 'semnan', lat: 35.218, lng: 52.331 },
  { slug: 'mehdishahr', name: 'مهدی‌شهر', province: 'semnan', lat: 35.708, lng: 53.304 },
  { slug: 'bastam', name: 'بسطام', province: 'semnan', lat: 36.481, lng: 54.971 },
  { slug: 'aradan', name: 'آرادان', province: 'semnan', lat: 35.024, lng: 52.572 },
  // Fars (Shiraz area)
  { slug: 'shiraz', name: 'شیراز', province: 'fars', lat: 29.592, lng: 52.583 },
  { slug: 'sadra', name: 'صدرا', province: 'fars', lat: 29.506, lng: 52.531 },
  { slug: 'marvdasht', name: 'مرودشت', province: 'fars', lat: 29.874, lng: 52.802 },
  { slug: 'kazerun', name: 'کازرون', province: 'fars', lat: 29.619, lng: 51.654 },
  { slug: 'zarqan', name: 'زرقان', province: 'fars', lat: 29.792, lng: 52.716 },
  { slug: 'fasa', name: 'فسا', province: 'fars', lat: 28.938, lng: 53.305 },
  { slug: 'darab', name: 'داراب', province: 'fars', lat: 28.752, lng: 54.545 },
  { slug: 'abadeh', name: 'آباده', province: 'fars', lat: 31.165, lng: 52.649 },
];

export const TEHRAN_CITIES = CITIES.filter((c) => c.province === 'tehran');
export const SEMNAN_CITIES = CITIES.filter((c) => c.province === 'semnan');
export const FARS_CITIES = CITIES.filter((c) => c.province === 'fars');

export function cityBySlug(slug: string): CityInfo | undefined {
  return CITIES.find((c) => c.slug === slug);
}
