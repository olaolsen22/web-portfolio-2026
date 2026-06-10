import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { MotionProvider } from '@/context/MotionContext';
import { StaggerChildren } from './StaggerChildren';

const renderWithProviders = (ui: React.ReactElement) =>
  render(<MotionProvider>{ui}</MotionProvider>);

describe('StaggerChildren', () => {
  it('renders children', () => {
    const { getByText } = renderWithProviders(
      <StaggerChildren>
        <div>Item 1</div>
        <div>Item 2</div>
      </StaggerChildren>
    );
    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const { container } = renderWithProviders(
      <StaggerChildren>
        <p>A</p>
        <p>B</p>
      </StaggerChildren>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
