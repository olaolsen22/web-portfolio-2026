import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { SelectedWorkList } from './SelectedWorkList';
import type { SelectedWorkItem } from '@/content/selectedWorkItems';

vi.mock('@/hooks/useLanguage', () => ({
  useLanguage: () => ({
    t: (key: string) => key,
    lang: 'en' as const,
    setLang: vi.fn(),
  }),
}));

vi.mock('@/hooks/useReducedMotion', () => ({
  useReducedMotion: () => ({ motionAllowed: false }),
}));

const mockItems: SelectedWorkItem[] = [
  {
    id: '1',
    title: 'Nordlys Dashboard',
    status: 'live',
    tags: ['React', 'TypeScript'],
    description: 'A real-time analytics dashboard.',
    imageUrl: 'https://placehold.co/480x320',
    imageAlt: 'Screenshot of Nordlys Dashboard',
  },
  {
    id: '2',
    title: 'Kart Editor',
    status: 'in-progress',
    tags: ['TypeScript', 'Leaflet'],
    description: 'A collaborative map annotation tool.',
    imageUrl: 'https://placehold.co/480x320',
    imageAlt: 'Screenshot of Kart Editor',
  },
];

describe('SelectedWorkList', () => {
  it('renders without crashing', () => {
    const { container } = render(<SelectedWorkList items={mockItems} />);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<SelectedWorkList items={mockItems} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders an ordered list', () => {
    const { container } = render(<SelectedWorkList items={mockItems} />);
    expect(container.querySelector('ol')).toBeInTheDocument();
  });

  it('renders the correct number of list items', () => {
    const { container } = render(<SelectedWorkList items={mockItems} />);
    expect(container.querySelectorAll('ol > li')).toHaveLength(mockItems.length);
  });

  it('renders formatted indexes for each item', () => {
    render(<SelectedWorkList items={mockItems} />);
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
  });

  it('renders all item titles', () => {
    render(<SelectedWorkList items={mockItems} />);
    expect(screen.getByText('Nordlys Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Kart Editor')).toBeInTheDocument();
  });
});
