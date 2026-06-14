import { render, screen, fireEvent } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { TechStackMarquee } from './TechStackMarquee';
import { techStackSkills } from '@/content/techStackSkills';

vi.mock('@/hooks/useLanguage', () => ({
  useLanguage: () => ({
    t: (key: string) => key,
    lang: 'en' as const,
    setLang: vi.fn(),
  }),
}));

vi.mock('@/hooks/useReducedMotion', () => ({
  useReducedMotion: () => ({ motionAllowed: true }),
}));

vi.mock('@/hooks/useReducedTransparency', () => ({
  useReducedTransparency: () => ({ transparencyAllowed: true }),
}));

describe('TechStackMarquee', () => {
  it('renders without crashing', () => {
    const { container } = render(<TechStackMarquee />);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<TechStackMarquee />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders a section element', () => {
    render(<TechStackMarquee />);
    expect(screen.getByRole('region')).toBeInTheDocument();
  });

  it('renders all skills in the accessible list', () => {
    render(<TechStackMarquee />);
    for (const skill of techStackSkills) {
      expect(screen.getAllByText(skill).length).toBeGreaterThan(0);
    }
  });

  it('toggles aria-pressed on the pause button', () => {
    render(<TechStackMarquee />);
    const btn = screen.getByRole('button');
    expect(btn).toHaveAttribute('aria-pressed', 'false');
    fireEvent.click(btn);
    expect(btn).toHaveAttribute('aria-pressed', 'true');
  });
});
