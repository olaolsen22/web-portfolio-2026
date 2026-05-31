import type { ReactNode } from 'react';
import { Lead } from '@/components/ui/typography';
import { cn } from '@/utils';

interface HeadlineTextProps {
  name: string;
  title: string;
  details: string;
  className?: string;
}

const renderBold = (text: string): ReactNode[] =>
  text
    .split(/(\*\*[^*]+\*\*)/)
    .map((part, i) =>
      part.startsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part
    );

export const HeadlineText = ({ name, title, details, className }: HeadlineTextProps) => (
  <div className={cn('flex flex-col gap-4', className)}>
    <h1
      id="hero-heading"
      className="text-[clamp(4.375rem,11.25vw,10.125rem)] font-extrabold tracking-[-0.04em] leading-[0.88] text-foreground"
    >
      {name}
    </h1>
    <p className="text-[0.875rem] md:text-[1.1rem] font-medium text-muted-foreground">{title}</p>
    <Lead>{renderBold(details)}</Lead>
  </div>
);
