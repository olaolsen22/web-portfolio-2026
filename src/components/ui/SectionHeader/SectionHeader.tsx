import { cn } from '@/utils';
import { FadeIn } from '@/components/animations/FadeIn';
import { H2, Lead, Label } from '@/components/ui/typography';

interface SectionHeaderProps {
  id?: string;
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeader = ({ id, label, title, description, className }: SectionHeaderProps) => (
  <FadeIn className={cn('flex flex-col gap-3', className)}>
    {label && <Label>{label}</Label>}
    <H2 id={id}>{title}</H2>
    {description && <Lead>{description}</Lead>}
  </FadeIn>
);
