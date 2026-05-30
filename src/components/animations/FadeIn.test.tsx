import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { FadeIn } from './FadeIn';

describe('FadeIn', () => {
  it('renders children', () => {
    const { getByText } = render(<FadeIn>Hello</FadeIn>);
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const { container } = render(
      <FadeIn>
        <p>Content</p>
      </FadeIn>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
