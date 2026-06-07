import { cn } from '@/utils';
import { FadeIn } from '@/components/animations/FadeIn';
import { H2, Label, Muted } from '@/components/ui/typography';

interface SectionHeaderProps {
  id?: string;
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeader = ({ id, label, title, description, className }: SectionHeaderProps) => (
  <FadeIn
    className={cn(
      'flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-8',
      className
    )}
  >
    <div className="flex flex-col gap-3">
      {label && <Label>{label}</Label>}
      <H2 id={id}>{title}</H2>
    </div>
    {description && <Muted className="md:text-right max-w-[300px] ">{description}</Muted>}
  </FadeIn>
);
