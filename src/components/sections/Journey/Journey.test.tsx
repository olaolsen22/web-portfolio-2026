import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Journey } from './Journey';

vi.mock('@/hooks/useLanguage', () => ({
  useLanguage: () => ({
    t: (key: string) => key,
    lang: 'en' as const,
    setLang: vi.fn(),
  }),
}));

vi.mock('@/hooks/useReducedMotion', () => ({
  useReducedMotion: () => ({ motionAllowed: false }),
}));

describe('Journey', () => {
  it('renders without crashing', () => {
    const { container } = render(<Journey />);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<Journey />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders a section element', () => {
    render(<Journey />);
    expect(screen.getByRole('region')).toBeInTheDocument();
  });

  it('section is labelled by the heading', () => {
    render(<Journey />);
    const section = screen.getByRole('region');
    expect(section).toHaveAttribute('aria-labelledby', 'journey-heading');
  });

  it('renders the heading with the correct id', () => {
    render(<Journey />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveAttribute('id', 'journey-heading');
  });

  it('renders journey items list', () => {
    render(<Journey />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
