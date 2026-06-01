import type { ReactNode } from 'react';
import { Lead, H1, Label } from '@/components/ui/typography';
import { cn } from '@/utils';

interface HeadlineTextProps {
  name: string;
  title: string;
  details: string;
  className?: string;
}

const renderBold = (text: string): ReactNode[] =>
  text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
    part.startsWith('**') ? (
      <strong className="text-foreground" key={i}>
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );

export const HeadlineText = ({ name, title, details, className }: HeadlineTextProps) => (
  <div className={cn('flex flex-col gap-4', className)}>
    <H1 id="hero-heading">{name}</H1>
    <Label className="text-[0.875rem] md:text-[1.1rem] font-bold text-brand">{title}</Label>
    <Lead>{renderBold(details)}</Lead>
  </div>
);
