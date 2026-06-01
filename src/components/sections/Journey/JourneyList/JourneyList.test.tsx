import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { JourneyList } from './JourneyList';
import type { JourneyItem } from '@/content/journeyItems';

vi.mock('@/hooks/useReducedMotion', () => ({
  useReducedMotion: () => ({ motionAllowed: false }),
}));

const mockItems: JourneyItem[] = [
  {
    id: '1',
    yearRange: '2022–Present',
    title: 'Frontend Developer',
    organization: 'TwistResources',
    details: 'Building interfaces.',
  },
  {
    id: '2',
    yearRange: '2020–2022',
    title: 'Junior Developer',
    organization: 'D.W. Morgan',
    details: 'Developing dashboards.',
  },
];

describe('JourneyList', () => {
  it('renders without crashing', () => {
    const { container } = render(<JourneyList items={mockItems} />);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<JourneyList items={mockItems} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders an ordered list', () => {
    render(<JourneyList items={mockItems} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('renders the correct number of items', () => {
    render(<JourneyList items={mockItems} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(mockItems.length);
  });

  it('renders formatted indexes for each item', () => {
    render(<JourneyList items={mockItems} />);
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
  });

  it('renders all item titles', () => {
    render(<JourneyList items={mockItems} />);
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    expect(screen.getByText('Junior Developer')).toBeInTheDocument();
  });
});
