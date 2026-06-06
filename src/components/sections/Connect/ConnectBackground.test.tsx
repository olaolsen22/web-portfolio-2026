import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { ConnectBackground } from './ConnectBackground';

describe('ConnectBackground', () => {
  it('renders without crashing', () => {
    const { container } = render(<ConnectBackground />);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<ConnectBackground />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
