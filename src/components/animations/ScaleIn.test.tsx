import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { MotionProvider } from '@/context/MotionContext';
import { ScaleIn } from './ScaleIn';

const renderWithProviders = (ui: React.ReactElement) =>
  render(<MotionProvider>{ui}</MotionProvider>);

describe('ScaleIn', () => {
  it('renders children', () => {
    const { getByText } = renderWithProviders(<ScaleIn>Hello</ScaleIn>);
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const { container } = renderWithProviders(
      <ScaleIn>
        <p>Content</p>
      </ScaleIn>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
