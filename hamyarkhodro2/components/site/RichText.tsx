import Link from 'next/link';

export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <p className="text-base leading-relaxed text-slate-700">
      {parts.map((part, i) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (match) {
          const isExternal = match[2].startsWith('http');
          return (
            <a
              key={i}
              href={match[2]}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener' : undefined}
              className={isExternal ? 'ext-link' : 'font-semibold text-brand-red hover:underline'}
            >
              {match[1]}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </p>
  );
}

export function RichTextBlock({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-5">
      {paragraphs.map((p, i) => (
        <RichText key={i} text={p} />
      ))}
    </div>
  );
}
