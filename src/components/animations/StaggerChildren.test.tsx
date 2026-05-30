import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { StaggerChildren } from './StaggerChildren';

describe('StaggerChildren', () => {
  it('renders children', () => {
    const { getByText } = render(
      <StaggerChildren>
        <div>Item 1</div>
        <div>Item 2</div>
      </StaggerChildren>
    );
    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const { container } = render(
      <StaggerChildren>
        <p>A</p>
        <p>B</p>
      </StaggerChildren>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
