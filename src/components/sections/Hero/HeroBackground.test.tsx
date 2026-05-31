import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { HeroBackground } from './HeroBackground';

describe('HeroBackground', () => {
  it('renders without crashing', () => {
    const { container } = render(<HeroBackground />);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<HeroBackground />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
