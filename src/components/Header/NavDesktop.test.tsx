import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { NavDesktop } from './NavDesktop';

const t = (key: string) => key;

describe('NavDesktop', () => {
  it('renders without crashing', () => {
    const { container } = render(<NavDesktop t={t as never} />);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<NavDesktop t={t as never} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders a link for each nav item', () => {
    render(<NavDesktop t={(key) => key} />);
    expect(screen.getByRole('link', { name: 'nav.journey' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'nav.work' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'nav.connect' })).toBeInTheDocument();
  });
});
