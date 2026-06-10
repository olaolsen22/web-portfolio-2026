import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { MotionProvider } from '@/context/MotionContext';
import { SlideIn } from './SlideIn';

const renderWithProviders = (ui: React.ReactElement) =>
  render(<MotionProvider>{ui}</MotionProvider>);

describe('SlideIn', () => {
  it('renders children', () => {
    const { getByText } = renderWithProviders(<SlideIn>Hello</SlideIn>);
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const { container } = renderWithProviders(
      <SlideIn>
        <p>Content</p>
      </SlideIn>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
