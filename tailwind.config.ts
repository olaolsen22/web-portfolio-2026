import { breakpoints } from './src/utils/breakpoints';
import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      xs: `${breakpoints.xs}px`,
      sm: `${breakpoints.sm}px`,
      md: `${breakpoints.md}px`,
      lg: `${breakpoints.lg}px`,
      xl: `${breakpoints.xl}px`,
      '2xl': `${breakpoints['2xl']}px`,
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        brand: {
          DEFAULT: '#10b981',
          dark: '#059669',
        },
        faint: 'hsl(var(--faint))',
      },
      fontSize: {
        'display-hero':    ['clamp(3.5rem, 14vw, 13rem)',  { lineHeight: '0.88', letterSpacing: '-0.04em', fontWeight: '800' }],
        'display-hero-lg': ['clamp(5.5rem, 14vw, 13rem)',  { lineHeight: '0.88', letterSpacing: '-0.04em', fontWeight: '800' }],
        'h2-display':      ['clamp(2.5rem, 10vw, 8rem)',   { lineHeight: '0.95', letterSpacing: '-0.04em', fontWeight: '800' }],
        'h2-display-lg':   ['clamp(5rem, 9vw, 8rem)',      { lineHeight: '0.95', letterSpacing: '-0.04em', fontWeight: '800' }],
        'hero-bio-lg':     ['clamp(1rem, 1.6vw, 1.15rem)', { lineHeight: '1.75' }],
        'nav-mobile-text': ['clamp(1.8rem, 8vw, 2.8rem)',  { lineHeight: '1',    letterSpacing: '-0.03em', fontWeight: '800' }],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [typography, containerQueries],
} satisfies Config;
