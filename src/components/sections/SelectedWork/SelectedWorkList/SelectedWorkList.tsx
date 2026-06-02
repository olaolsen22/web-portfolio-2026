import { cn } from '@/utils';
import { animation } from '@/utils/animationConfig';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { SelectedWorkCard } from '../SelectedWorkCard/SelectedWorkCard';
import type { SelectedWorkItem } from '@/content/selectedWorkItems';

interface SelectedWorkListProps {
  items: SelectedWorkItem[];
  className?: string;
}

export const SelectedWorkList = ({ items, className }: SelectedWorkListProps) => (
  <ol className={cn('list-none', className)}>
    {items.map((item, i) => (
      <li key={item.id}>
        <ScrollReveal delay={i * animation.stagger}>
          <SelectedWorkCard index={i + 1} item={item} />
        </ScrollReveal>
      </li>
    ))}
  </ol>
);
