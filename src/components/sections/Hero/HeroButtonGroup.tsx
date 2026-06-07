import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils';

interface HeroButtonGroupProps {
  viewMyWork: string;
  connect: string;
  className?: string;
}

export const HeroButtonGroup = ({ viewMyWork, connect, className }: HeroButtonGroupProps) => (
  <div className={cn('flex flex-col xs:flex-row gap-3 md:flex-col md:items-end', className)}>
    <Button
      size="lg"
      asChild
      className="flex-1 md:flex-none px-5 py-3 min-h-[44px] xs:px-7 xs:py-[15px] xs:min-h-[52px]"
    >
      <a href="#work">
        {viewMyWork}
        <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
      </a>
    </Button>
    <Button
      variant="outline"
      size="lg"
      asChild
      className="flex-1 md:flex-none px-5 py-3 min-h-[44px] xs:px-7 xs:py-[15px] xs:min-h-[52px]"
    >
      <a href="#connect">{connect}</a>
    </Button>
  </div>
);
