export interface LocationDefinition {
  slug: string;
  faName: string;
  faProvince: string;
  lat: number;
  lng: number;
  priority: number;
}

export const LOCATIONS: LocationDefinition[] = [
  { slug: 'tehran', faName: 'تهران', faProvince: 'تهران', lat: 35.6892, lng: 51.389, priority: 100 },
  { slug: 'mashhad', faName: 'مشهد', faProvince: 'خراسان رضوی', lat: 36.2972, lng: 59.6062, priority: 95 },
  { slug: 'isfahan', faName: 'اصفهان', faProvince: 'اصفهان', lat: 32.6539, lng: 51.666, priority: 92 },
  { slug: 'karaj', faName: 'کرج', faProvince: 'البرز', lat: 35.8402, lng: 50.9391, priority: 90 },
  { slug: 'shiraz', faName: 'شیراز', faProvince: 'فارس', lat: 29.5918, lng: 52.5837, priority: 88 },
  { slug: 'tabriz', faName: 'تبریز', faProvince: 'آذربایجان شرقی', lat: 38.0804, lng: 46.2919, priority: 85 },
  { slug: 'qom', faName: 'قم', faProvince: 'قم', lat: 34.6416, lng: 50.8746, priority: 82 },
  { slug: 'ahvaz', faName: 'اهواز', faProvince: 'خوزستان', lat: 31.3183, lng: 48.6706, priority: 80 },
  { slug: 'kermanshah', faName: 'کرمانشاه', faProvince: 'کرمانشاه', lat: 34.3142, lng: 47.065, priority: 78 },
  { slug: 'orumiyeh', faName: 'ارومیه', faProvince: 'آذربایجان غربی', lat: 37.5527, lng: 45.0644, priority: 76 },
  { slug: 'rasht', faName: 'رشت', faProvince: 'گیلان', lat: 37.2808, lng: 49.5832, priority: 75 },
  { slug: 'kerman', faName: 'کرمان', faProvince: 'کرمان', lat: 30.2839, lng: 57.0834, priority: 74 },
  { slug: 'zahedan', faName: 'زاهدان', faProvince: 'سیستان و بلوچستان', lat: 29.5011, lng: 60.1932, priority: 72 },
  { slug: 'arak', faName: 'اراک', faProvince: 'مرکزی', lat: 34.0917, lng: 49.6892, priority: 70 },
  { slug: 'hamadan', faName: 'همدان', faProvince: 'همدان', lat: 34.7992, lng: 48.5145, priority: 68 },
  { slug: 'yazd', faName: 'یزد', faProvince: 'یزد', lat: 31.8974, lng: 54.3569, priority: 66 },
  { slug: 'ardabil', faName: 'اردبیل', faProvince: 'اردبیل', lat: 38.2498, lng: 48.2966, priority: 64 },
  { slug: 'bandar-abbas', faName: 'بندرعباس', faProvince: 'هرمزگان', lat: 27.1832, lng: 56.2666, priority: 62 },
  { slug: 'zanjan', faName: 'زنجان', faProvince: 'زنجان', lat: 36.6764, lng: 48.4963, priority: 60 },
  { slug: 'qazvin', faName: 'قزوین', faProvince: 'قزوین', lat: 35.8327, lng: 50.9916, priority: 58 },
  { slug: 'gorgan', faName: 'گرگان', faProvince: 'گلستان', lat: 36.8456, lng: 54.4393, priority: 56 },
  { slug: 'sari', faName: 'ساری', faProvince: 'مازندران', lat: 36.5633, lng: 53.0596, priority: 55 },
  { slug: 'khorramabad', faName: 'خرم‌آباد', faProvince: 'لرستان', lat: 33.4878, lng: 48.3558, priority: 52 },
  { slug: 'bushehr', faName: 'بوشهر', faProvince: 'بوشهر', lat: 28.9774, lng: 50.8402, priority: 50 },
  { slug: 'sanandaj', faName: 'سنندج', faProvince: 'کردستان', lat: 35.3134, lng: 46.9922, priority: 48 },
  { slug: 'najafabad', faName: 'نجف‌آباد', faProvince: 'اصفهان', lat: 32.6333, lng: 51.3667, priority: 40 },
  { slug: 'maragheh', faName: 'مراغه', faProvince: 'آذربایجان شرقی', lat: 37.3889, lng: 46.2336, priority: 38 },
  { slug: 'shahin-shahr', faName: 'شاهین‌شهر', faProvince: 'اصفهان', lat: 32.8667, lng: 51.5333, priority: 36 },
  { slug: 'varamin', faName: 'ورامین', faProvince: 'تهران', lat: 35.3196, lng: 51.6475, priority: 35 },
  { slug: 'islamshahr', faName: 'اسلام‌شهر', faProvince: 'تهران', lat: 35.2292, lng: 51.2297, priority: 34 },
  { slug: 'parand', faName: 'پرند', faProvince: 'تهران', lat: 35.4883, lng: 50.9536, priority: 33 },
  { slug: 'hashtrud', faName: 'هشترود', faProvince: 'آذربایجان شرقی', lat: 37.1789, lng: 47.4656, priority: 28 },
];

export const LOCATION_MAP: Record<string, LocationDefinition> = LOCATIONS.reduce(
  (acc, location) => {
    acc[location.slug] = location;
    return acc;
  },
  {} as Record<string, LocationDefinition>
);
