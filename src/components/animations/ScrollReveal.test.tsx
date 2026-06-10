import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { MotionProvider } from '@/context/MotionContext';
import { ScrollReveal } from './ScrollReveal';

const renderWithProviders = (ui: React.ReactElement) =>
  render(<MotionProvider>{ui}</MotionProvider>);

describe('ScrollReveal', () => {
  it('renders children', () => {
    const { getByText } = renderWithProviders(<ScrollReveal>Hello</ScrollReveal>);
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const { container } = renderWithProviders(
      <ScrollReveal>
        <p>Content</p>
      </ScrollReveal>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
