import { cn } from '@/utils';
import { IndexedCard } from '@/components/ui/IndexedCard/IndexedCard';
import { H3, P } from '@/components/ui/typography';
import { Badge } from '@/components/ui/badge';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import type { SelectedWorkItem, WorkStatus } from '@/content/selectedWorkItems';

interface SelectedWorkCardProps {
  index: number;
  item: SelectedWorkItem;
  className?: string;
}

const statusStyles: Record<WorkStatus, string> = {
  live: 'text-emerald-600 dark:text-emerald-400',
  'in-progress': 'text-amber-600 dark:text-amber-400',
  blueprinted: 'text-[hsl(var(--muted-foreground))]',
};

const statusLabels: Record<WorkStatus, string> = {
  live: 'Live',
  'in-progress': 'In Progress',
  blueprinted: 'Blueprinted',
};

export const SelectedWorkCard = ({ index, item, className }: SelectedWorkCardProps) => {
  const { motionAllowed } = useReducedMotion();

  return (
    <IndexedCard
      index={index}
      indexSize="sm"
      className={className}
      aside={
        <div className="rounded-md ring-1 ring-transparent transition-all duration-200 group-hover:ring-brand/60">
          <div className="overflow-hidden rounded-md">
            <img
              src={item.imageUrl}
              alt={item.imageAlt}
              className={cn(
                'w-full aspect-[4/3] md:aspect-[3/2] object-cover',
                motionAllowed &&
                  'will-change-transform transition-transform duration-[350ms] ease-out group-hover:scale-105'
              )}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      }
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 flex-wrap">
          <H3 className="text-[clamp(1rem,2.5vw,1.25rem)] transition-colors duration-200 group-hover:text-brand">
            {item.title}
          </H3>
          <span
            className={cn(
              'text-[0.65rem] font-semibold uppercase tracking-[0.08em]',
              statusStyles[item.status]
            )}
          >
            {statusLabels[item.status]}
          </span>
        </div>
        <ul className="flex flex-wrap gap-[6px] list-none" aria-label="Technologies">
          {item.tags.map((tag) => (
            <li key={tag}>
              <Badge variant="stack">{tag}</Badge>
            </li>
          ))}
        </ul>
        <P className="leading-[1.72] max-w-[520px]">{item.description}</P>
      </div>
    </IndexedCard>
  );
};
