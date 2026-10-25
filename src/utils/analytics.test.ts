const WEBSITE_ID = '5dd72d14-22e0-4d69-93ce-4c862e1f95c5';

// Fresh module per test so the consent state and pre-load event queue don't leak between tests
const importAnalytics = async () => {
  vi.resetModules();
  return import('./analytics');
};

const getScripts = () =>
  document.head.querySelectorAll<HTMLScriptElement>('script[data-website-id]');
const getScript = () => getScripts()[0] ?? null;

const setNavigatorProp = (name: string, value: unknown) =>
  Object.defineProperty(navigator, name, { value, configurable: true });

describe('analytics', () => {
  beforeEach(() => {
    vi.stubEnv('VITE_UMAMI_WEBSITE_ID', WEBSITE_ID);
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    getScripts().forEach((script) => script.remove());
    delete window.umami;
    Reflect.deleteProperty(navigator, 'doNotTrack');
    Reflect.deleteProperty(navigator, 'globalPrivacyControl');
    localStorage.clear();
  });

  describe('consent', () => {
    it('starts with no choice', async () => {
      const { getConsent } = await importAnalytics();
      expect(getConsent()).toBeNull();
    });

    it('restores a stored choice', async () => {
      localStorage.setItem('analytics-consent', 'granted');
      const { getConsent } = await importAnalytics();
      expect(getConsent()).toBe('granted');
    });

    it('saves the choice and notifies subscribers', async () => {
      const { setConsent, getConsent, subscribeToConsent } = await importAnalytics();
      const listener = vi.fn();
      subscribeToConsent(listener);
      setConsent('denied');
      expect(getConsent()).toBe('denied');
      expect(localStorage.getItem('analytics-consent')).toBe('denied');
      expect(listener).toHaveBeenCalledTimes(1);
    });

    it('is unavailable without a website ID', async () => {
      vi.stubEnv('VITE_UMAMI_WEBSITE_ID', '');
      const { isAnalyticsAvailable } = await importAnalytics();
      expect(isAnalyticsAvailable()).toBe(false);
    });

    it.each([
      ['Do Not Track', 'doNotTrack', '1'],
      ['Global Privacy Control', 'globalPrivacyControl', true],
    ])('is unavailable when the browser sends %s', async (_, prop, value) => {
      setNavigatorProp(prop, value);
      const { isAnalyticsAvailable } = await importAnalytics();
      expect(isAnalyticsAvailable()).toBe(false);
    });
  });

  describe('loadAnalytics', () => {
    it('waits for consent', async () => {
      const { loadAnalytics } = await importAnalytics();
      loadAnalytics();
      expect(getScript()).toBeNull();
    });

    it('adds the tracker once consent is given, without automatic page views', async () => {
      const { setConsent } = await importAnalytics();
      setConsent('granted');
      const script = getScript();
      expect(script).toHaveAttribute('src', '/_v/script.js');
      expect(script).toHaveAttribute('data-website-id', WEBSITE_ID);
      expect(script).toHaveAttribute('data-host-url', `${window.location.origin}/_v`);
      expect(script).toHaveAttribute('data-auto-track', 'false');
    });

    it('loads on startup when consent was given on an earlier visit', async () => {
      localStorage.setItem('analytics-consent', 'granted');
      const { loadAnalytics } = await importAnalytics();
      loadAnalytics();
      expect(getScript()).not.toBeNull();
    });

    it('adds the tracker only once', async () => {
      const { setConsent, loadAnalytics } = await importAnalytics();
      setConsent('granted');
      setConsent('granted');
      loadAnalytics();
      expect(getScripts()).toHaveLength(1);
    });

    it('does nothing without a website ID', async () => {
      vi.stubEnv('VITE_UMAMI_WEBSITE_ID', '');
      const { setConsent } = await importAnalytics();
      setConsent('granted');
      expect(getScript()).toBeNull();
    });

    it('respects browser opt-out signals even after consent', async () => {
      setNavigatorProp('globalPrivacyControl', true);
      const { setConsent } = await importAnalytics();
      setConsent('granted');
      expect(getScript()).toBeNull();
    });
  });

  describe('trackEvent', () => {
    it('drops events without consent', async () => {
      const { trackEvent } = await importAnalytics();
      const track = vi.fn();
      window.umami = { track };
      trackEvent('view-work');
      expect(track).not.toHaveBeenCalled();
    });

    it('sends events straight to the tracker once it has loaded', async () => {
      const { setConsent, trackEvent } = await importAnalytics();
      setConsent('granted');
      const track = vi.fn();
      window.umami = { track };
      trackEvent('click-project-github', { project: 'Nordlys' });
      expect(track).toHaveBeenCalledWith('click-project-github', { project: 'Nordlys' });
    });

    it('queues events until the tracker script loads', async () => {
      const { setConsent, trackEvent } = await importAnalytics();
      setConsent('granted');
      trackEvent('view-work');

      const track = vi.fn();
      window.umami = { track };
      getScript()!.dispatchEvent(new Event('load'));

      expect(track).toHaveBeenCalledWith('view-work', undefined);
    });

    it('stops sending once consent is withdrawn', async () => {
      const { setConsent, trackEvent } = await importAnalytics();
      setConsent('granted');
      const track = vi.fn();
      window.umami = { track };
      setConsent('denied');
      trackEvent('view-work');
      expect(track).not.toHaveBeenCalled();
    });
  });
});
