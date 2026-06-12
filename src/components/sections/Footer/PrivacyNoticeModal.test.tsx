import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { PrivacyNoticeModal } from './PrivacyNoticeModal';

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

describe('PrivacyNoticeModal', () => {
  it('renders without crashing when closed', () => {
    const { container } = render(<PrivacyNoticeModal open={false} onOpenChange={vi.fn()} />);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations when open', async () => {
    const { container } = render(<PrivacyNoticeModal open={true} onOpenChange={vi.fn()} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders the dialog when open', () => {
    render(<PrivacyNoticeModal open={true} onOpenChange={vi.fn()} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('does not render the dialog when closed', () => {
    render(<PrivacyNoticeModal open={false} onOpenChange={vi.fn()} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders the title when open', () => {
    render(<PrivacyNoticeModal open={true} onOpenChange={vi.fn()} />);
    expect(screen.getByText('privacyNotice.title')).toBeInTheDocument();
  });

  it('renders all 4 section headings when open', () => {
    render(<PrivacyNoticeModal open={true} onOpenChange={vi.fn()} />);
    expect(screen.getByText('privacyNotice.whatSiteCollectsTitle')).toBeInTheDocument();
    expect(screen.getByText('privacyNotice.netlifyTitle')).toBeInTheDocument();
    expect(screen.getByText('privacyNotice.gdprTitle')).toBeInTheDocument();
    expect(screen.getByText('privacyNotice.questionsTitle')).toBeInTheDocument();
  });

  it('calls onOpenChange(false) when the footer close button is clicked', async () => {
    const onOpenChange = vi.fn();
    const user = userEvent.setup();
    render(<PrivacyNoticeModal open={true} onOpenChange={onOpenChange} />);
    const closeButtons = screen.getAllByRole('button', { name: 'privacyNotice.close' });
    await user.click(closeButtons[closeButtons.length - 1]);
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it('calls onOpenChange(false) when Escape is pressed', async () => {
    const onOpenChange = vi.fn();
    const user = userEvent.setup();
    render(<PrivacyNoticeModal open={true} onOpenChange={onOpenChange} />);
    await user.keyboard('{Escape}');
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it('renders Netlify privacy policy link with correct attributes', () => {
    render(<PrivacyNoticeModal open={true} onOpenChange={vi.fn()} />);
    const link = screen.getByRole('link', { name: 'privacyNotice.netlifyBodyLinkText' });
    expect(link).toHaveAttribute('href', 'https://www.netlify.com/privacy/');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders Datatilsynet link with correct attributes', () => {
    render(<PrivacyNoticeModal open={true} onOpenChange={vi.fn()} />);
    const link = screen.getByRole('link', { name: 'datatilsynet.no' });
    expect(link).toHaveAttribute('href', 'https://www.datatilsynet.no/');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders email and LinkedIn links in the questions section', () => {
    render(<PrivacyNoticeModal open={true} onOpenChange={vi.fn()} />);
    const emailLink = screen.getByRole('link', { name: 'privacyNotice.questionsEmailLinkText' });
    const linkedInLink = screen.getByRole('link', { name: 'LinkedIn' });
    expect(emailLink).toHaveAttribute('href', 'mailto:olatalabaolsen@gmail.com');
    expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/ola-olsen-442b07a3/');
    expect(linkedInLink).toHaveAttribute('target', '_blank');
  });
});
