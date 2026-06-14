import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Hero } from './Hero';

vi.mock('@/hooks/useLanguage', () => ({
  useLanguage: () => ({
    t: (key: string) => key,
    lang: 'en' as const,
    setLang: vi.fn(),
  }),
}));

vi.mock('@/hooks/useReducedTransparency', () => ({
  useReducedTransparency: () => ({ transparencyAllowed: true }),
}));

describe('Hero', () => {
  it('renders without crashing', () => {
    const { container } = render(<Hero />);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<Hero />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders a section element', () => {
    render(<Hero />);
    expect(screen.getByRole('region')).toBeInTheDocument();
  });

  it('renders the h1 heading', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders both CTA links', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: /hero\.viewMyWork/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /nav\.connect/i })).toBeInTheDocument();
  });
});
