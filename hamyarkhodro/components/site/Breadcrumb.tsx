import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export type Crumb = { name: string; url?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="مسیر" className="container-x pt-5">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {it.url && !last ? (
                <Link href={it.url} className="hover:text-brand-red">
                  {it.name}
                </Link>
              ) : (
                <span className={last ? 'font-medium text-slate-700' : ''}>{it.name}</span>
              )}
              {!last && <ChevronLeft className="h-3 w-3 text-slate-300" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
