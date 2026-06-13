import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[8px] font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground font-bold can-hover:hover:opacity-85 can-hover:hover:-translate-y-0.5',
        destructive:
          'bg-[oklch(0.45_0.18_25)] text-destructive-foreground font-bold can-hover:hover:opacity-85 can-hover:hover:-translate-y-0.5',
        outline:
          'border-[1.5px] border-[rgba(0,0,0,0.14)] dark:border-[rgba(255,255,255,0.13)] bg-transparent text-foreground font-bold can-hover:hover:border-brand can-hover:hover:text-brand can-hover:dark:hover:border-brand can-hover:dark:hover:text-brand can-hover:hover:-translate-y-0.5',
        secondary:
          'bg-secondary text-secondary-foreground font-semibold can-hover:hover:bg-secondary/80 can-hover:hover:-translate-y-0.5',
        ghost:
          'bg-transparent text-muted-foreground font-bold border border-[rgba(0,0,0,0.14)] dark:border-[rgba(255,255,255,0.13)] can-hover:hover:text-foreground can-hover:hover:border-foreground can-hover:dark:hover:text-foreground can-hover:dark:hover:border-foreground',
        link: 'text-faint underline underline-offset-3 font-medium can-hover:hover:text-foreground focus-visible:ring-offset-[3px]',
      },
      size: {
        default: 'px-6 py-3.5 min-h-12 text-sm gap-2',
        sm: 'px-3.5 py-2 min-h-11 text-[0.72rem] tracking-[0.05em]',
        xs: 'px-3 py-1.5 min-h-8 text-[0.65rem] tracking-[0.05em] gap-1.5 [&_svg]:size-3',
        lg: 'px-7 py-[15px] min-h-[52px] text-[0.9rem] gap-2.5',
        icon: 'w-11 h-11 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
