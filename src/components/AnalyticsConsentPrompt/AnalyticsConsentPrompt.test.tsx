import { act, fireEvent, render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { AnalyticsConsentPrompt } from './AnalyticsConsentPrompt';

const consentState = vi.hoisted(() => ({
  consent: null as 'granted' | 'denied' | null,
  available: true,
  browserOptOut: false,
  setConsent: vi.fn(),
}));

vi.mock('@/hooks/useAnalyticsConsent', () => ({ useAnalyticsConsent: () => consentState }));

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

const renderAndWait = () => {
  const result = render(<AnalyticsConsentPrompt />);
  act(() => {
    vi.advanceTimersByTime(1500);
  });
  return result;
};

const getPrompt = () => screen.queryByRole('region', { name: 'analyticsConsent.label' });

describe('AnalyticsConsentPrompt', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    consentState.consent = null;
    consentState.available = true;
    consentState.setConsent.mockClear();
  });

  it('asks after a short delay when no choice has been made', () => {
    render(<AnalyticsConsentPrompt />);
    expect(getPrompt()).toBeNull();
    act(() => {
      vi.advanceTimersByTime(1500);
    });
    expect(getPrompt()).toBeInTheDocument();
  });

  it.each([
    ['analyticsConsent.allow', 'granted'],
    ['analyticsConsent.decline', 'denied'],
  ])('saves the choice when "%s" is clicked', (name, value) => {
    renderAndWait();
    fireEvent.click(screen.getByRole('button', { name }));
    expect(consentState.setConsent).toHaveBeenCalledWith(value);
  });

  it('does not ask again once a choice has been made', () => {
    consentState.consent = 'denied';
    renderAndWait();
    expect(getPrompt()).toBeNull();
  });

  it('does not ask when analytics is unavailable', () => {
    consentState.available = false;
    renderAndWait();
    expect(getPrompt()).toBeNull();
  });

  it('opens the privacy notice', () => {
    renderAndWait();
    fireEvent.click(screen.getByRole('button', { name: 'analyticsConsent.privacyNotice' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const { container } = renderAndWait();
    vi.useRealTimers();
    expect(await axe(container)).toHaveNoViolations();
  });
});
