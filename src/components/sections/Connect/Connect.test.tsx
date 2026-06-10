import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { MotionProvider } from '@/context/MotionContext';
import { Connect } from './Connect';

vi.mock('@/hooks/useLanguage', () => ({
  useLanguage: () => ({
    t: (key: string) => key,
    lang: 'en' as const,
    setLang: vi.fn(),
  }),
}));

const renderWithProviders = (ui: React.ReactElement) =>
  render(<MotionProvider>{ui}</MotionProvider>);

describe('Connect', () => {
  it('renders without crashing', () => {
    const { container } = renderWithProviders(<Connect />);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = renderWithProviders(<Connect />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders a section element', () => {
    renderWithProviders(<Connect />);
    expect(screen.getByRole('region')).toBeInTheDocument();
  });

  it('renders the h2 heading', () => {
    renderWithProviders(<Connect />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders GitHub and LinkedIn links', () => {
    renderWithProviders(<Connect />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
  });

  it('links open in new tab with noopener noreferrer', () => {
    renderWithProviders(<Connect />);
    screen.getAllByRole('link').forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
