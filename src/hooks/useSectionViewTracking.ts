import { useEffect } from 'react';
import { NAV_LINKS } from '@/constants/nav';
import { trackEvent } from '@/utils/analytics';
import { useAnalyticsConsent } from './useAnalyticsConsent';

// Reports each nav section once per page load, when its top crosses the middle of the viewport.
// Works regardless of section height, unlike an intersection-ratio threshold.
// Only observes after consent — sections scrolled past before that are not reported.
export const useSectionViewTracking = () => {
  const { consent, available } = useAnalyticsConsent();
  const enabled = available && consent === 'granted';

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          trackEvent(`view-${entry.target.id}`);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -50% 0px' }
    );

    NAV_LINKS.forEach(({ href }) => {
      const section = document.getElementById(href.slice(1));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [enabled]);
};
