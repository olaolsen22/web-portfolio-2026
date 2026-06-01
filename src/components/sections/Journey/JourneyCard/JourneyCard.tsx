import { cn } from '@/utils';
import { H3, Small, P } from '@/components/ui/typography';
import type { JourneyItem } from '@/content/journeyItems';

interface JourneyCardProps {
  index: number;
  item: JourneyItem;
  className?: string;
}

export const JourneyCard = ({ index, item, className }: JourneyCardProps) => {
  const formattedIndex = String(index).padStart(2, '0');

  return (
    <article
      className={cn('group flex gap-6 border-b border-[var(--rule)] py-8 md:gap-10', className)}
    >
      <div className="w-10 shrink-0 pt-1 md:w-14">
        <span
          aria-hidden="true"
          className="font-mono text-[0.9rem] font-bold text-brand opacity-30 transition-opacity group-hover:opacity-100"
        >
          {formattedIndex}
        </span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <Small className="not-italic">{item.yearRange}</Small>
        <H3>{item.title}</H3>
        <P className="font-medium text-muted-foreground">{item.organization}</P>
        <P className="mt-1">{item.details}</P>
      </div>
    </article>
  );
};
