import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { SlideIn } from './SlideIn';

describe('SlideIn', () => {
  it('renders children', () => {
    const { getByText } = render(<SlideIn>Hello</SlideIn>);
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const { container } = render(
      <SlideIn>
        <p>Content</p>
      </SlideIn>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
