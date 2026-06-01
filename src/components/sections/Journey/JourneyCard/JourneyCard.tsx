import { cn } from '@/utils';
import { H3, Label, P } from '@/components/ui/typography';
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
      <div className="w-14 shrink-0 self-start pt-1 md:w-20">
        <span
          aria-hidden="true"
          className="text-[clamp(2rem,5vw,4rem)] font-extrabold leading-none tracking-[-0.04em] text-brand opacity-[0.18] transition-opacity group-hover:opacity-100"
        >
          {formattedIndex}
        </span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <Label className="mb-[6px]">{item.yearRange}</Label>
        <H3 className="text-[clamp(1.1rem,2vw,1.3rem)] mb-[3px]">{item.title}</H3>
        <P className="font-semibold mb-[10px]">{item.organization}</P>
        <P className="leading-[1.72] max-w-[540px]">{item.details}</P>
      </div>
    </article>
  );
};
