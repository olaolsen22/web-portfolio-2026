import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Badge } from './badge';

vi.mock('@/hooks/useReducedTransparency', () => ({
  useReducedTransparency: () => ({ transparencyAllowed: true }),
}));

const variants = ['default', 'secondary', 'destructive', 'outline', 'glass', 'stack'] as const;

describe('Badge', () => {
  it('renders without crashing', () => {
    const { container } = render(<Badge>Label</Badge>);
    expect(container).toBeTruthy();
  });

  it.each(variants)('renders %s variant without crashing', (variant) => {
    const { container } = render(<Badge variant={variant}>Label</Badge>);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<Badge>Label</Badge>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it.each(variants)('%s variant has no a11y violations', async (variant) => {
    const { container } = render(<Badge variant={variant}>Label</Badge>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
