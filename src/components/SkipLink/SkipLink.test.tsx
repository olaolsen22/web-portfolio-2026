import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { SkipLink } from './SkipLink';

describe('SkipLink', () => {
  it('renders without crashing', () => {
    const { container } = render(<SkipLink />);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<SkipLink />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
