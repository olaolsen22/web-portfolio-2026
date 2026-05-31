import { Badge } from '@/components/ui/badge';
import { cn } from '@/utils';

interface WorkStatusCardProps {
  workStatus: string;
  location: string;
  className?: string;
}

export const WorkStatusCard = ({ workStatus, location, className }: WorkStatusCardProps) => (
  <Badge variant="glass" className={cn('max-w-72 gap-3 px-6 py-3 text-base font-bold', className)}>
    <span className="relative flex size-2.5 shrink-0" aria-hidden="true">
      <span className="absolute inline-flex size-full rounded-full bg-brand opacity-75 animate-ping" />
      <span className="relative inline-flex size-2.5 rounded-full bg-brand" />
    </span>
    <span className="flex justify-between gap-1 w-full text-foreground">
      <span>{workStatus}</span>
      <span className="text-muted-foreground" aria-hidden="true">
        ·
      </span>
      <span>{location}</span>
    </span>
  </Badge>
);
