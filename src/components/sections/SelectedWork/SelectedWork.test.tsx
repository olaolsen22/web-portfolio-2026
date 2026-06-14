import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { SelectedWork } from './SelectedWork';

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

describe('SelectedWork', () => {
  it('renders without crashing', () => {
    const { container } = render(<SelectedWork />);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<SelectedWork />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders a section element', () => {
    render(<SelectedWork />);
    expect(screen.getByRole('region')).toBeInTheDocument();
  });

  it('section is labelled by the heading', () => {
    render(<SelectedWork />);
    expect(screen.getByRole('region')).toHaveAttribute('aria-labelledby', 'selected-work-heading');
  });

  it('renders the heading with the correct id', () => {
    render(<SelectedWork />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveAttribute(
      'id',
      'selected-work-heading'
    );
  });

  it('renders the works list', () => {
    const { container } = render(<SelectedWork />);
    expect(container.querySelector('ol')).toBeInTheDocument();
  });
});
