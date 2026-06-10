import { cn } from '@/utils/cn';

interface PageSectionProps extends React.HTMLAttributes<HTMLElement> {
  noBorder?: boolean;
}

export const PageSection = ({ className, noBorder = false, ...props }: PageSectionProps) => (
  <section
    className={cn(
      'w-full py-16 min-h-svh flex flex-col justify-center',
      !noBorder && 'border-b border-rule',
      className
    )}
    {...props}
  />
);
