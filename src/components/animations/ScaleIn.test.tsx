import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { ScaleIn } from './ScaleIn';

describe('ScaleIn', () => {
  it('renders children', () => {
    const { getByText } = render(<ScaleIn>Hello</ScaleIn>);
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const { container } = render(
      <ScaleIn>
        <p>Content</p>
      </ScaleIn>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
