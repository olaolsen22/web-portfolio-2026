import { Badge } from '@/components/ui/badge';

interface WorkStatusCardProps {
  workStatus: string;
  location: string;
}

export const WorkStatusCard = ({ workStatus, location }: WorkStatusCardProps) => (
  <Badge className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold">
    <span className="size-2.5 rounded-full bg-brand animate-pulse" aria-hidden="true" />
    {workStatus} · {location} 🇳🇴
  </Badge>
);
