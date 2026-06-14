import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { SelectedWorkCard } from './SelectedWorkCard';
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

vi.mock('@/hooks/useReducedTransparency', () => ({
  useReducedTransparency: () => ({ transparencyAllowed: true }),
}));

const mockItem: SelectedWorkItem = {
  id: '1',
  title: 'Nordlys Dashboard',
  status: 'live',
  tags: ['React', 'TypeScript'],
  description: 'A real-time analytics dashboard.',
  imageUrl: 'https://placehold.co/480x320',
  imageAlt: 'Screenshot of Nordlys Dashboard',
};

describe('SelectedWorkCard', () => {
  it('renders without crashing', () => {
    const { container } = render(<SelectedWorkCard index={1} item={mockItem} />);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<SelectedWorkCard index={1} item={mockItem} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders formatted index', () => {
    render(<SelectedWorkCard index={3} item={mockItem} />);
    expect(screen.getByText('03')).toBeInTheDocument();
  });

  it('renders the title', () => {
    render(<SelectedWorkCard index={1} item={mockItem} />);
    expect(screen.getByText('Nordlys Dashboard')).toBeInTheDocument();
  });

  it('renders the status label for live', () => {
    render(<SelectedWorkCard index={1} item={mockItem} />);
    expect(screen.getByText('selectedWork.status.live')).toBeInTheDocument();
  });

  it('renders the status label for in-progress', () => {
    render(<SelectedWorkCard index={1} item={{ ...mockItem, status: 'in-progress' }} />);
    expect(screen.getByText('selectedWork.status.inProgress')).toBeInTheDocument();
  });

  it('renders the status label for blueprinted', () => {
    render(<SelectedWorkCard index={1} item={{ ...mockItem, status: 'blueprinted' }} />);
    expect(screen.getByText('selectedWork.status.blueprinted')).toBeInTheDocument();
  });

  it('renders all technology tags', () => {
    render(<SelectedWorkCard index={1} item={mockItem} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<SelectedWorkCard index={1} item={mockItem} />);
    expect(screen.getByText('A real-time analytics dashboard.')).toBeInTheDocument();
  });

  it('renders the image with correct alt text', () => {
    render(<SelectedWorkCard index={1} item={mockItem} />);
    expect(screen.getByAltText('Screenshot of Nordlys Dashboard')).toBeInTheDocument();
  });

  it('image has lazy loading attribute', () => {
    render(<SelectedWorkCard index={1} item={mockItem} />);
    expect(screen.getByAltText('Screenshot of Nordlys Dashboard')).toHaveAttribute(
      'loading',
      'lazy'
    );
  });

  it('renders GitHub button when githubUrl is provided', () => {
    render(
      <SelectedWorkCard
        index={1}
        item={{ ...mockItem, githubUrl: 'https://github.com/test/repo' }}
      />
    );
    const link = screen.getByRole('link', { name: /selectedWork\.github/i });
    expect(link).toHaveAttribute('href', 'https://github.com/test/repo');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders Demo button when demoUrl is provided', () => {
    render(
      <SelectedWorkCard index={1} item={{ ...mockItem, demoUrl: 'https://demo.example.com' }} />
    );
    const link = screen.getByRole('link', { name: /selectedWork\.demo/i });
    expect(link).toHaveAttribute('href', 'https://demo.example.com');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders both buttons when both URLs are provided', () => {
    render(
      <SelectedWorkCard
        index={1}
        item={{
          ...mockItem,
          githubUrl: 'https://github.com/test/repo',
          demoUrl: 'https://demo.example.com',
        }}
      />
    );
    expect(screen.getByRole('link', { name: /selectedWork\.github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /selectedWork\.demo/i })).toBeInTheDocument();
  });

  it('renders no link buttons when neither URL is provided', () => {
    render(<SelectedWorkCard index={1} item={mockItem} />);
    expect(screen.queryByRole('link', { name: /selectedWork\.github/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /selectedWork\.demo/i })).not.toBeInTheDocument();
  });
});
