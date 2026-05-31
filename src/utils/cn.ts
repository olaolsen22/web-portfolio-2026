import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        'text-display-hero',
        'text-display-hero-lg',
        'text-h2-display',
        'text-h2-display-lg',
        'text-hero-bio-lg',
        'text-nav-mobile-text',
      ],
    },
  },
});

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
