import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { NavMobile } from './NavMobile';

const t = (key: string) => key;

const defaults = {
  menuOpen: true,
  motionAllowed: false,
  transparencyAllowed: false,
  lang: 'en' as const,
  t: t as never,
  onClose: vi.fn(),
};

describe('NavMobile', () => {
  it('renders nothing when menuOpen is false', () => {
    const { container } = render(<NavMobile {...defaults} menuOpen={false} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders the dialog when menuOpen is true', () => {
    render(<NavMobile {...defaults} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('has no a11y violations when open', async () => {
    const { container } = render(<NavMobile {...defaults} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders a link for each nav item', () => {
    render(<NavMobile {...defaults} />);
    expect(screen.getByRole('link', { name: 'nav.journey' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'nav.work' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'nav.connect' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'nav.techStack' })).toBeInTheDocument();
  });

  it('calls onClose when a nav link is clicked', async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();
    render(<NavMobile {...defaults} onClose={onClose} />);
    await user.click(screen.getByRole('link', { name: 'nav.journey' }));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it('uses Norwegian aria-label when lang is nb', () => {
    render(<NavMobile {...defaults} lang="nb" />);
    expect(screen.getByRole('dialog', { name: 'Navigasjonsmeny' })).toBeInTheDocument();
  });
});
