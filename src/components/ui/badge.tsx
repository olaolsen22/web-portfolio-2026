import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils';
import { useReducedTransparency } from '@/hooks/useReducedTransparency';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground can-hover:hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground can-hover:hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground can-hover:hover:bg-destructive/80',
        outline: 'text-foreground',
        glass:
          'border-border-mid bg-surface text-foreground backdrop-blur-sm shadow-md dark:shadow-none',
        stack:
          'rounded-[4px] px-[10px] py-1 text-[0.68rem] font-bold tracking-[0.05em] text-brand bg-[var(--brand-glow)] border-[var(--brand-glow)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, ...props }: BadgeProps) => {
  const { transparencyAllowed } = useReducedTransparency();

  return (
    <div
      className={cn(
        badgeVariants({ variant }),
        variant === 'glass' && !transparencyAllowed && 'backdrop-blur-0 bg-[var(--surface-solid)]',
        className
      )}
      {...props}
    />
  );
};

export { Badge, badgeVariants };
