type EventData = Record<string, string | number | boolean>;

export type AnalyticsConsent = 'granted' | 'denied';

declare global {
  interface Window {
    umami?: { track: (name: string, data?: EventData) => Promise<void> };
  }
  interface Navigator {
    globalPrivacyControl?: boolean;
  }
}

// Served from the site's own domain (see netlify.toml) so blockers don't drop it
const PROXY_PATH = '/_v';
const CONSENT_KEY = 'analytics-consent';

// Holds events fired before the tracker script has loaded; null when analytics isn't loading
let queue: Array<[string, EventData | undefined]> | null = null;
let scriptAdded = false;

const readStoredConsent = (): AnalyticsConsent | null => {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    return stored === 'granted' || stored === 'denied' ? stored : null;
  } catch {
    return null;
  }
};

// Kept in memory too, so the choice holds for the visit even if storage is blocked
let consent = readStoredConsent();
const listeners = new Set<() => void>();

export const hasOptedOut = () =>
  navigator.doNotTrack === '1' || navigator.globalPrivacyControl === true;

// False locally, in deploy previews, and when the browser sends an opt-out signal
export const isAnalyticsAvailable = () =>
  Boolean(import.meta.env.VITE_UMAMI_WEBSITE_ID) && !hasOptedOut();

export const getConsent = () => consent;

export const subscribeToConsent = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

// Only loads once the visitor has consented. Page views are recorded server-side
// (netlify/edge-functions/pageview), so this tracker only sends section views and link clicks.
export const loadAnalytics = () => {
  if (scriptAdded || consent !== 'granted' || !isAnalyticsAvailable()) return;

  scriptAdded = true;
  queue = [];

  const script = document.createElement('script');
  script.src = `${PROXY_PATH}/script.js`;
  script.defer = true;
  script.dataset.websiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID;
  script.dataset.hostUrl = `${window.location.origin}${PROXY_PATH}`;
  script.dataset.autoTrack = 'false';

  script.addEventListener('load', () => {
    const pending = queue ?? [];
    queue = null;
    pending.forEach(([name, data]) => trackEvent(name, data));
  });
  script.addEventListener('error', () => {
    queue = null;
  });

  document.head.appendChild(script);
};

export const setConsent = (value: AnalyticsConsent) => {
  consent = value;
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Storage blocked — the choice still applies for this visit
  }
  loadAnalytics();
  listeners.forEach((listener) => listener());
};

export const trackEvent = (name: string, data?: EventData) => {
  if (consent !== 'granted') return;
  if (window.umami) {
    window.umami.track(name, data);
    return;
  }
  queue?.push([name, data]);
};
