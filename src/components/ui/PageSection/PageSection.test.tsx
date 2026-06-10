import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { PageSection } from './PageSection';

describe('PageSection', () => {
  it('renders without crashing', () => {
    const { container } = render(<PageSection>Content</PageSection>);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<PageSection>Content</PageSection>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders children', () => {
    const { getByText } = render(<PageSection>Hello</PageSection>);
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('forwards id and aria attributes', () => {
    const { container } = render(
      <PageSection id="my-section" aria-labelledby="my-heading">
        Content
      </PageSection>
    );
    const section = container.querySelector('section');
    expect(section).toHaveAttribute('id', 'my-section');
    expect(section).toHaveAttribute('aria-labelledby', 'my-heading');
  });

  it('includes border classes by default', () => {
    const { container } = render(<PageSection>Content</PageSection>);
    const section = container.querySelector('section');
    expect(section?.className).toContain('border-b');
    expect(section?.className).toContain('border-rule');
  });

  it('omits border classes when noBorder is true', () => {
    const { container } = render(<PageSection noBorder>Content</PageSection>);
    const section = container.querySelector('section');
    expect(section?.className).not.toContain('border-b');
  });
});
