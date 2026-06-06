import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { Footer } from './Footer';

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

describe('Footer', () => {
  it('renders without crashing', () => {
    const { container } = render(<Footer />);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<Footer />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders a footer element', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders the credit text', () => {
    render(<Footer />);
    expect(screen.getByText('footer.credit')).toBeInTheDocument();
  });

  it('renders the crafted-with text', () => {
    render(<Footer />);
    expect(screen.getByText('footer.crafted')).toBeInTheDocument();
  });

  it('renders the privacy notice button', () => {
    render(<Footer />);
    expect(screen.getByRole('button', { name: 'footer.privacy' })).toBeInTheDocument();
  });

  it('opens the privacy notice dialog when button is clicked', async () => {
    const user = userEvent.setup();
    render(<Footer />);
    await user.click(screen.getByRole('button', { name: 'footer.privacy' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('privacyNotice.title')).toBeInTheDocument();
  });

  it('closes the dialog when the Close button is clicked', async () => {
    const user = userEvent.setup();
    render(<Footer />);
    await user.click(screen.getByRole('button', { name: 'footer.privacy' }));
    await user.click(screen.getByRole('button', { name: 'privacyNotice.close' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes the dialog on Escape key', async () => {
    const user = userEvent.setup();
    render(<Footer />);
    await user.click(screen.getByRole('button', { name: 'footer.privacy' }));
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
