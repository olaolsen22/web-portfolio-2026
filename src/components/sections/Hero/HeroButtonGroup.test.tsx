import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { HeroButtonGroup } from './HeroButtonGroup';

const defaults = {
  viewMyWork: 'View My Work',
  connect: 'Connect',
};

describe('HeroButtonGroup', () => {
  it('renders without crashing', () => {
    const { container } = render(<HeroButtonGroup {...defaults} />);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<HeroButtonGroup {...defaults} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders the View My Work link pointing to #work', () => {
    render(<HeroButtonGroup {...defaults} />);
    const link = screen.getByRole('link', { name: /View My Work/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#work');
  });

  it('renders the Connect link pointing to #connect', () => {
    render(<HeroButtonGroup {...defaults} />);
    const link = screen.getByRole('link', { name: 'Connect' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#connect');
  });
});
