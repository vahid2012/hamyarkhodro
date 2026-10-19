'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export type FAQItem = { q: string; a: string };

export default function FAQAccordion({ items, title = 'سوالات متداول' }: { items: FAQItem[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-x">
        <h2 className="mb-8 text-center text-2xl font-extrabold text-brand-navy sm:text-3xl">{title}</h2>
        <div className="mx-auto max-w-3xl space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right text-base font-semibold text-slate-800"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {it.q}
                  <ChevronDown className={cn('h-5 w-5 shrink-0 text-brand-red transition-transform', isOpen && 'rotate-180')} />
                </button>
                <div className={cn('grid transition-all', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
