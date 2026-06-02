import { IndexedCard } from '@/components/ui/IndexedCard/IndexedCard';
import { H3, Label, P } from '@/components/ui/typography';
import type { JourneyItem } from '@/content/journeyItems';

interface JourneyCardProps {
  index: number;
  item: JourneyItem;
  className?: string;
}

export const JourneyCard = ({ index, item, className }: JourneyCardProps) => (
  <IndexedCard index={index} indexSize="lg" className={className}>
    <Label className="mb-[6px]">{item.yearRange}</Label>
    <H3 className="text-[clamp(1.1rem,2vw,1.3rem)] mb-[3px]">{item.title}</H3>
    <P className="font-semibold mb-[10px]">{item.organization}</P>
    <P className="leading-[1.72] max-w-[540px]">{item.details}</P>
  </IndexedCard>
);
