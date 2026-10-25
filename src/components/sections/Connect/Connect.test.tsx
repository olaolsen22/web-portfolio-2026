import { createEvent, fireEvent, render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { MotionProvider } from '@/context/MotionContext';
import { trackEvent } from '@/utils/analytics';
import { Connect } from './Connect';

vi.mock('@/utils/analytics', () => ({ trackEvent: vi.fn() }));

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

  it('renders email, GitHub and LinkedIn links', () => {
    renderWithProviders(<Connect />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
  });

  it('renders email link with mailto href', () => {
    renderWithProviders(<Connect />);
    const emailLink = screen.getByRole('link', { name: 'connect.email' });
    expect(emailLink).toHaveAttribute('href', 'mailto:olatalabaolsen@gmail.com');
  });

  it('GitHub and LinkedIn links open in new tab with noopener noreferrer', () => {
    renderWithProviders(<Connect />);
    const externalLinks = screen
      .getAllByRole('link')
      .filter((link) => link.getAttribute('href')?.startsWith('http'));
    expect(externalLinks).toHaveLength(2);
    externalLinks.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('tracks clicks on each contact link', () => {
    renderWithProviders(<Connect />);
    // Prevent jsdom's unimplemented mailto: navigation — React's onClick still fires
    const emailLink = screen.getByRole('link', { name: 'connect.email' });
    const emailClick = createEvent.click(emailLink);
    emailClick.preventDefault();
    fireEvent(emailLink, emailClick);
    fireEvent.click(screen.getByRole('link', { name: /connect\.github/ }));
    fireEvent.click(screen.getByRole('link', { name: /connect\.linkedin/ }));
    expect(trackEvent).toHaveBeenCalledWith('click-email');
    expect(trackEvent).toHaveBeenCalledWith('click-github');
    expect(trackEvent).toHaveBeenCalledWith('click-linkedin');
  });
});
