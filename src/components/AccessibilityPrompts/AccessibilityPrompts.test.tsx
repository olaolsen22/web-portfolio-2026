import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { MotionProvider } from '../../context/MotionContext';
import { AccessibilityPrompts } from './AccessibilityPrompts';

const renderWithProviders = (ui: React.ReactElement) =>
  render(<MotionProvider>{ui}</MotionProvider>);

describe('AccessibilityPrompts', () => {
  it('renders without crashing', () => {
    const { container } = renderWithProviders(<AccessibilityPrompts />);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = renderWithProviders(<AccessibilityPrompts />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
