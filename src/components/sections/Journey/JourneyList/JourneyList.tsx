import { cn } from '@/utils';
import { animation } from '@/utils/animationConfig';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { JourneyCard } from '../JourneyCard/JourneyCard';
import type { JourneyItem } from '@/content/journeyItems';

interface JourneyListProps {
  items: JourneyItem[];
  className?: string;
}

export const JourneyList = ({ items, className }: JourneyListProps) => (
  <ol className={cn('list-none [&>li:last-child_article]:border-b-0', className)}>
    {items.map((item, i) => (
      <li key={item.id}>
        <ScrollReveal delay={i * animation.stagger}>
          <JourneyCard index={items.length - i} item={item} />
        </ScrollReveal>
      </li>
    ))}
  </ol>
);
