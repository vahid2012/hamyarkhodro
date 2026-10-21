'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Truck,
  Wrench,
  Construction,
  Car,
  BatteryCharging,
  CircleDot,
  PackageCheck,
  MapPin,
  Newspaper,
  Info,
  PhoneCall,
} from 'lucide-react';
import { NAV_SERVICES, SITE, TEHRAN_CITIES, SEMNAN_CITIES, FARS_CITIES } from '@/data/site';
import { cn } from '@/lib/utils';

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'amdad-khodro': Wrench,
  'yadak-kesh': Truck,
  jarsaghil: Construction,
  'khodro-bor': Car,
  battery: BatteryCharging,
  pancher: CircleDot,
  'haml-khodro-sefr': PackageCheck,
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [semnanOpen, setSemnanOpen] = useState(false);
  const [farsOpen, setFarsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="bg-brand-navy text-white">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <span className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-brand-sky" />
            خدمات در تمام شهرهای استان تهران
          </span>
          <span className="hidden items-center gap-2 sm:flex">
            <PhoneCall className="h-3.5 w-3.5 text-brand-red" />
            شبانه‌روزی ۲۴ ساعته — ۷ روز هفته
          </span>
        </div>
      </div>

      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red text-white shadow-lg shadow-red-500/30">
            <Truck className="h-6 w-6" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-extrabold text-brand-navy sm:text-lg">
              یدک کش خودرو استان تهران
            </span>
            <span className="text-[11px] text-slate-500">امداد خودرو ۲۴ ساعته</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <Link href="/" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-brand-navy">
            خانه
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-brand-navy">
              خدمات
              <ChevronDown className="h-4 w-4" />
            </button>
            {servicesOpen && (
              <div className="absolute right-0 top-full w-64 pt-2">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                  {NAV_SERVICES.map((s) => {
                    const Icon = SERVICE_ICONS[s.slug] ?? Wrench;
                    return (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-brand-navy"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-brand-red">
                          <Icon className="h-4 w-4" />
                        </span>
                        {s.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setCitiesOpen(true)}
            onMouseLeave={() => setCitiesOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-brand-navy">
              شهرهای استان تهران
              <ChevronDown className="h-4 w-4" />
            </button>
            {citiesOpen && (
              <div className="absolute right-0 top-full w-[560px] pt-2">
                <div className="grid grid-cols-3 gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
                  {TEHRAN_CITIES.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/amdad/${c.slug}`}
                      className="rounded-lg px-2 py-1.5 text-xs text-slate-700 transition-colors hover:bg-red-50 hover:text-brand-red"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setSemnanOpen(true)}
            onMouseLeave={() => setSemnanOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-brand-navy">
              امداد خودرو سمنان
              <ChevronDown className="h-4 w-4" />
            </button>
            {semnanOpen && (
              <div className="absolute right-0 top-full w-64 pt-2">
                <div className="grid grid-cols-2 gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
                  {SEMNAN_CITIES.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/amdad/${c.slug}`}
                      className="rounded-lg px-2 py-1.5 text-xs text-slate-700 transition-colors hover:bg-red-50 hover:text-brand-red"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setFarsOpen(true)}
            onMouseLeave={() => setFarsOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-brand-navy">
              امداد خودرو شیراز
              <ChevronDown className="h-4 w-4" />
            </button>
            {farsOpen && (
              <div className="absolute right-0 top-full w-64 pt-2">
                <div className="grid grid-cols-2 gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
                  {FARS_CITIES.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/amdad/${c.slug}`}
                      className="rounded-lg px-2 py-1.5 text-xs text-slate-700 transition-colors hover:bg-red-50 hover:text-brand-red"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/blog" className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-brand-navy">
            <Newspaper className="h-4 w-4" />
            بلاگ
          </Link>
          <Link href="/about" className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-brand-navy">
            <Info className="h-4 w-4" />
            درباره ما
          </Link>
          <Link href="/contact" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-brand-navy">
            تماس با ما
          </Link>
        </nav>

        <a
          href={`tel:${SITE.phone}`}
          className="hidden items-center gap-2 rounded-xl bg-brand-red px-4 py-2.5 text-base font-bold text-white shadow-lg shadow-red-500/30 transition-all hover:bg-brand-red-dark active:scale-[0.98] md:flex"
        >
          <Phone className="h-5 w-5" />
          {SITE.phone}
        </a>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="منو"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-x max-h-[80vh] space-y-1 overflow-y-auto py-4">
            <MobileLink href="/" onClick={() => setOpen(false)}>خانه</MobileLink>
            <MobileSection title="خدمات">
              {NAV_SERVICES.map((s) => (
                <MobileLink key={s.slug} href={`/services/${s.slug}`} onClick={() => setOpen(false)}>
                  {s.title}
                </MobileLink>
              ))}
            </MobileSection>
            <MobileSection title="شهرهای استان تهران">
              {TEHRAN_CITIES.map((c) => (
                <MobileLink key={c.slug} href={`/amdad/${c.slug}`} onClick={() => setOpen(false)}>
                  {c.name}
                </MobileLink>
              ))}
            </MobileSection>
            <MobileSection title="امداد خودرو سمنان">
              {SEMNAN_CITIES.map((c) => (
                <MobileLink key={c.slug} href={`/amdad/${c.slug}`} onClick={() => setOpen(false)}>
                  {c.name}
                </MobileLink>
              ))}
            </MobileSection>
            <MobileSection title="امداد خودرو شیراز">
              {FARS_CITIES.map((c) => (
                <MobileLink key={c.slug} href={`/amdad/${c.slug}`} onClick={() => setOpen(false)}>
                  {c.name}
                </MobileLink>
              ))}
            </MobileSection>
            <MobileLink href="/blog" onClick={() => setOpen(false)}>بلاگ</MobileLink>
            <MobileLink href="/about" onClick={() => setOpen(false)}>درباره ما</MobileLink>
            <MobileLink href="/contact" onClick={() => setOpen(false)}>تماس با ما</MobileLink>
            <a
              href={`tel:${SITE.phone}`}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-brand-red px-4 py-3 text-base font-bold text-white shadow-lg"
            >
              <Phone className="h-5 w-5" />
              تماس فوری {SITE.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
      {children}
    </Link>
  );
}

function MobileSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg border border-slate-100">
      <button
        className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-800"
        onClick={() => setOpen((v) => !v)}
      >
        {title}
        <ChevronDown className={cn('h-4 w-4 transition-transform', open && 'rotate-180')} />
      </button>
      {open && <div className="grid grid-cols-2 gap-0.5 px-2 pb-2">{children}</div>}
    </div>
  );
}
