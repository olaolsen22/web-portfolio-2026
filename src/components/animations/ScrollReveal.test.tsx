import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { ScrollReveal } from './ScrollReveal';

describe('ScrollReveal', () => {
  it('renders children', () => {
    const { getByText } = render(<ScrollReveal>Hello</ScrollReveal>);
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const { container } = render(
      <ScrollReveal>
        <p>Content</p>
      </ScrollReveal>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
