import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { WorkStatusCard } from './WorkStatusCard';

describe('WorkStatusCard', () => {
  it('renders without crashing', () => {
    const { container } = render(<WorkStatusCard workStatus="Open to work" location="Norway" />);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<WorkStatusCard workStatus="Open to work" location="Norway" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('displays the work status and location', () => {
    render(<WorkStatusCard workStatus="Open to work" location="Norway" />);
    expect(screen.getByText(/Open to work/)).toBeInTheDocument();
    expect(screen.getByText(/Norway/)).toBeInTheDocument();
  });

  it('renders the flag emoji', () => {
    render(<WorkStatusCard workStatus="Open to work" location="Norway" />);
    expect(screen.getByText(/🇳🇴/)).toBeInTheDocument();
  });
});
