import { render, screen, fireEvent } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { LazyImage } from './LazyImage';

vi.mock('@/hooks/useReducedMotion', () => ({
  useReducedMotion: () => ({ motionAllowed: false }),
}));

describe('LazyImage', () => {
  it('renders without crashing', () => {
    const { container } = render(<LazyImage src="image.jpg" alt="Test image" />);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations in loading state', async () => {
    const { container } = render(<LazyImage src="image.jpg" alt="Test image" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no a11y violations in error state', async () => {
    const { container } = render(<LazyImage src="bad.jpg" alt="Test image" />);
    const img = container.querySelector('img')!;
    fireEvent.error(img);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders an img element with correct alt text', () => {
    render(<LazyImage src="image.jpg" alt="Test image" />);
    expect(screen.getByRole('img', { hidden: true, name: 'Test image' })).toBeInTheDocument();
  });

  it('img has loading="lazy" attribute', () => {
    render(<LazyImage src="image.jpg" alt="Test image" />);
    const img = document.querySelector('img')!;
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  it('img has decoding="async" attribute', () => {
    render(<LazyImage src="image.jpg" alt="Test image" />);
    const img = document.querySelector('img')!;
    expect(img).toHaveAttribute('decoding', 'async');
  });

  it('shows skeleton and hides image in loading state', () => {
    const { container } = render(<LazyImage src="image.jpg" alt="Test image" />);
    const img = container.querySelector('img')!;
    expect(img.className).toContain('opacity-0');
  });

  it('transitions to loaded state on onLoad', () => {
    const { container } = render(<LazyImage src="image.jpg" alt="Test image" />);
    const img = container.querySelector('img')!;
    fireEvent.load(img);
    expect(img.className).toContain('opacity-100');
    expect(img.className).toContain('blur-none');
  });

  it('shows error fallback and hides skeleton on onError', () => {
    const { container } = render(<LazyImage src="bad.jpg" alt="Test image" />);
    const img = container.querySelector('img')!;
    fireEvent.error(img);
    expect(screen.getByRole('img', { name: 'Test image' })).toBeInTheDocument();
    expect(img).toHaveAttribute('aria-hidden', 'true');
  });

  it('initialStatus prop pins the state for testing', () => {
    const { container } = render(
      <LazyImage src="image.jpg" alt="Test image" initialStatus="loaded" />
    );
    const img = container.querySelector('img')!;
    expect(img.className).toContain('opacity-100');
  });
});
