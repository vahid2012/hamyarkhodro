'use client';

import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { SITE } from '@/data/site';

export default function StickyCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 lg:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        href={`tel:${SITE.phone}`}
        className="flex items-center justify-center gap-3 bg-brand-red px-6 py-4 text-lg font-extrabold text-white shadow-[0_-4px_20px_rgba(230,57,70,0.45)] active:bg-brand-red-dark"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
        </span>
        <Phone className="h-5 w-5" />
        تماس فوری {SITE.phone}
      </a>
    </div>
  );
}
