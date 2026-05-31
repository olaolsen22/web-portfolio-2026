/* eslint-disable jsx-a11y/heading-has-content */
import * as React from 'react';
import { cn } from '@/utils';

const H1 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn('text-display-hero md:text-display-hero-lg text-foreground', className)}
      {...props}
    />
  )
);
H1.displayName = 'H1';

const H2 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn(
        'text-[clamp(1.5rem,5vw,2.2rem)] font-extrabold tracking-[-0.03em] text-foreground',
        className
      )}
      {...props}
    />
  )
);
H2.displayName = 'H2';

const H2Display = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn('text-h2-display xl:text-h2-display-lg text-foreground', className)}
      {...props}
    />
  )
);
H2Display.displayName = 'H2Display';

const H3 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        'text-[clamp(1rem,3.5vw,1.3rem)] font-extrabold tracking-[-0.025em] text-foreground',
        className
      )}
      {...props}
    />
  )
);
H3.displayName = 'H3';

const P = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-[0.85rem] font-normal leading-[1.7] text-muted-foreground', className)}
      {...props}
    />
  )
);
P.displayName = 'P';

const Lead = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        'text-[0.95rem] md:text-hero-bio-lg font-normal leading-[1.75] text-muted-foreground',
        className
      )}
      {...props}
    />
  )
);
Lead.displayName = 'Lead';

const Muted = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        'text-[0.85rem] font-normal italic leading-[1.5] text-muted-foreground',
        className
      )}
      {...props}
    />
  )
);
Muted.displayName = 'Muted';

const Label = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('text-[0.72rem] font-bold tracking-[0.1em] uppercase text-brand', className)}
      {...props}
    />
  )
);
Label.displayName = 'Label';

const NavLogo = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('text-[1.1rem] font-extrabold tracking-[-0.02em] text-foreground', className)}
      {...props}
    />
  )
);
NavLogo.displayName = 'NavLogo';

const NavLink = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'text-[0.82rem] font-semibold tracking-[0.02em] text-muted-foreground',
        className
      )}
      {...props}
    />
  )
);
NavLink.displayName = 'NavLink';

const NavLinkMobile = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span ref={ref} className={cn('text-nav-mobile-text text-foreground', className)} {...props} />
  )
);
NavLinkMobile.displayName = 'NavLinkMobile';

const Tag = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('text-[0.68rem] font-bold tracking-[0.05em] uppercase text-brand', className)}
      {...props}
    />
  )
);
Tag.displayName = 'Tag';

const Pill = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'text-[0.8rem] font-semibold tracking-[0.04em] uppercase text-muted-foreground',
        className
      )}
      {...props}
    />
  )
);
Pill.displayName = 'Pill';

const ToolkitCategory = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'text-[0.72rem] font-extrabold tracking-[0.14em] uppercase text-muted-foreground',
        className
      )}
      {...props}
    />
  )
);
ToolkitCategory.displayName = 'ToolkitCategory';

const ToolkitSkill = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('text-[0.95rem] font-medium text-foreground', className)}
      {...props}
    />
  )
);
ToolkitSkill.displayName = 'ToolkitSkill';

const Small = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-[0.8rem] font-medium text-faint', className)} {...props} />
  )
);
Small.displayName = 'Small';

export {
  H1,
  H2,
  H2Display,
  H3,
  P,
  Lead,
  Muted,
  Label,
  NavLogo,
  NavLink,
  NavLinkMobile,
  Tag,
  Pill,
  ToolkitCategory,
  ToolkitSkill,
  Small,
};
