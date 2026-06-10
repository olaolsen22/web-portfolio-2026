import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { NorwegianBanner } from './NorwegianBanner';
import type { TranslationKey } from '@/content';

const t = (key: TranslationKey): string => {
  const map: Partial<Record<TranslationKey, string>> = {
    'banner.langNote':
      'OBS: Norsk innhold er under utvikling. Teksten er KI-oversatt mens jeg lærer meg norsk. Takk for tålmodigheten!',
    'banner.dismiss': 'Lukk banner',
  };
  return map[key] ?? key;
};

const defaultProps = {
  onClose: vi.fn(),
  t,
  motionAllowed: false,
  transparencyAllowed: false,
};

describe('NorwegianBanner', () => {
  it('renders without crashing', () => {
    const { container } = render(<NorwegianBanner {...defaultProps} />);
    expect(container).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<NorwegianBanner {...defaultProps} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('displays the banner message text', () => {
    render(<NorwegianBanner {...defaultProps} />);
    expect(
      screen.getByText(
        'OBS: Norsk innhold er under utvikling. Teksten er KI-oversatt mens jeg lærer meg norsk. Takk for tålmodigheten!'
      )
    ).toBeInTheDocument();
  });

  it('renders a close button with the correct accessible label', () => {
    render(<NorwegianBanner {...defaultProps} />);
    expect(screen.getByRole('button', { name: 'Lukk banner' })).toBeInTheDocument();
  });

  it('calls onClose when the close button is clicked', async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();
    render(<NorwegianBanner {...defaultProps} onClose={onClose} />);

    await user.click(screen.getByRole('button', { name: 'Lukk banner' }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('has a region landmark with an accessible name', () => {
    render(<NorwegianBanner {...defaultProps} />);
    expect(screen.getByRole('region', { name: 'Norsk språknotat' })).toBeInTheDocument();
  });
});
