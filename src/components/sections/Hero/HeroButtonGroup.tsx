import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils';

interface HeroButtonGroupProps {
  viewMyWork: string;
  connect: string;
  className?: string;
}

export const HeroButtonGroup = ({ viewMyWork, connect, className }: HeroButtonGroupProps) => (
  <div className={cn('flex flex-row gap-3 md:flex-col md:items-end', className)}>
    <Button size="lg" asChild className="flex-1 md:flex-none">
      <a href="#work">
        {viewMyWork}
        <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
      </a>
    </Button>
    <Button variant="outline" size="lg" asChild className="flex-1 md:flex-none">
      <a href="#connect">{connect}</a>
    </Button>
  </div>
);
