import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { SectionHeader } from './SectionHeader';

vi.mock('@/hooks/useReducedMotion', () => ({
  useReducedMotion: () => ({ motionAllowed: false }),
}));

describe('SectionHeader', () => {
  it('renders without crashing', () => {
    const { container } = render(<SectionHeader title="Test Title" />);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<SectionHeader title="Test Title" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders the title', () => {
    render(<SectionHeader title="My Journey" />);
    expect(screen.getByText('My Journey')).toBeInTheDocument();
  });

  it('renders the optional label when provided', () => {
    render(<SectionHeader title="My Journey" label="Journey" />);
    expect(screen.getByText('Journey')).toBeInTheDocument();
  });

  it('renders the optional description when provided', () => {
    render(<SectionHeader title="My Journey" description="A timeline." />);
    expect(screen.getByText('A timeline.')).toBeInTheDocument();
  });

  it('omits label and description when not provided', () => {
    render(<SectionHeader title="My Journey" />);
    expect(screen.queryByRole('generic', { name: /label/i })).not.toBeInTheDocument();
  });

  it('applies the id to the heading', () => {
    render(<SectionHeader id="journey-heading" title="My Journey" />);
    expect(screen.getByText('My Journey')).toHaveAttribute('id', 'journey-heading');
  });
});
