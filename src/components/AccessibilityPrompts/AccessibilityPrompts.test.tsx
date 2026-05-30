import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { AccessibilityPrompts } from './AccessibilityPrompts';

describe('AccessibilityPrompts', () => {
  it('renders without crashing', () => {
    const { container } = render(<AccessibilityPrompts />);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<AccessibilityPrompts />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
