import { renderHook } from '@testing-library/react';
import { trackEvent } from '@/utils/analytics';
import { useSectionViewTracking } from './useSectionViewTracking';

const consentState = vi.hoisted(() => ({
  consent: 'granted' as 'granted' | 'denied' | null,
  available: true,
}));

vi.mock('@/utils/analytics', () => ({ trackEvent: vi.fn() }));
vi.mock('./useAnalyticsConsent', () => ({ useAnalyticsConsent: () => consentState }));

const addSections = (...ids: string[]) =>
  ids.forEach((id) => {
    const section = document.createElement('section');
    section.id = id;
    document.body.appendChild(section);
  });

describe('useSectionViewTracking', () => {
  afterEach(() => {
    document.querySelectorAll('section').forEach((section) => section.remove());
    vi.mocked(trackEvent).mockClear();
    consentState.consent = 'granted';
    consentState.available = true;
  });

  it('reports each nav section when it comes into view', () => {
    addSections('journey', 'work', 'connect');
    renderHook(() => useSectionViewTracking());
    expect(trackEvent).toHaveBeenCalledTimes(3);
    expect(trackEvent).toHaveBeenCalledWith('view-journey');
    expect(trackEvent).toHaveBeenCalledWith('view-work');
    expect(trackEvent).toHaveBeenCalledWith('view-connect');
  });

  it('stops observing a section once it has been reported', () => {
    addSections('journey', 'work', 'connect');
    renderHook(() => useSectionViewTracking());
    const { results } = vi.mocked(window.IntersectionObserver).mock;
    const observer = results[results.length - 1].value;
    expect(observer.unobserve).toHaveBeenCalledTimes(3);
  });

  it('skips nav sections that are not on the page', () => {
    addSections('work');
    renderHook(() => useSectionViewTracking());
    expect(trackEvent).toHaveBeenCalledTimes(1);
    expect(trackEvent).toHaveBeenCalledWith('view-work');
  });

  it('does nothing until the visitor consents', () => {
    consentState.consent = null;
    addSections('journey', 'work');
    const { rerender } = renderHook(() => useSectionViewTracking());
    expect(trackEvent).not.toHaveBeenCalled();

    consentState.consent = 'granted';
    rerender();
    expect(trackEvent).toHaveBeenCalledTimes(2);
  });

  it('does nothing when analytics is unavailable', () => {
    consentState.available = false;
    addSections('work');
    renderHook(() => useSectionViewTracking());
    expect(trackEvent).not.toHaveBeenCalled();
  });
});
