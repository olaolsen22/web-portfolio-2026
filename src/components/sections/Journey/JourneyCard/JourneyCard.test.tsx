import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { JourneyCard } from './JourneyCard';
import type { JourneyItem } from '@/content/journeyItems';

const mockItem: JourneyItem = {
  id: '1',
  yearRange: '2022–Present',
  title: 'Frontend Developer',
  organization: 'TwistResources',
  details: 'Building and maintaining client-facing interfaces.',
};

describe('JourneyCard', () => {
  it('renders without crashing', () => {
    const { container } = render(<JourneyCard index={1} item={mockItem} />);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<JourneyCard index={1} item={mockItem} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders the formatted index', () => {
    render(<JourneyCard index={3} item={mockItem} />);
    expect(screen.getByText('03')).toBeInTheDocument();
  });

  it('renders the year range', () => {
    render(<JourneyCard index={1} item={mockItem} />);
    expect(screen.getByText('2022–Present')).toBeInTheDocument();
  });

  it('renders the title', () => {
    render(<JourneyCard index={1} item={mockItem} />);
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
  });

  it('renders the organization', () => {
    render(<JourneyCard index={1} item={mockItem} />);
    expect(screen.getByText('TwistResources')).toBeInTheDocument();
  });

  it('renders the details', () => {
    render(<JourneyCard index={1} item={mockItem} />);
    expect(
      screen.getByText('Building and maintaining client-facing interfaces.')
    ).toBeInTheDocument();
  });

  it('index span has group-hover opacity class', () => {
    render(<JourneyCard index={1} item={mockItem} />);
    const indexSpan = screen.getByText('01');
    expect(indexSpan).toHaveClass('group-hover:opacity-100');
  });
});
