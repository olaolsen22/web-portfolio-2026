import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { MotionProvider } from '@/context/MotionContext';
import { FadeIn } from './FadeIn';

const renderWithProviders = (ui: React.ReactElement) =>
  render(<MotionProvider>{ui}</MotionProvider>);

describe('FadeIn', () => {
  it('renders children', () => {
    const { getByText } = renderWithProviders(<FadeIn>Hello</FadeIn>);
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const { container } = renderWithProviders(
      <FadeIn>
        <p>Content</p>
      </FadeIn>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
