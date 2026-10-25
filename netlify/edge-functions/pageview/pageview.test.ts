import pageview, { buildPageview } from './pageview';

const makeContext = (deployContext = 'production') => ({
  ip: '203.0.113.7',
  geo: { city: 'Tromsø', country: { code: 'NO' }, subdivision: { code: '55' } },
  deploy: { context: deployContext },
  waitUntil: vi.fn(),
});

const makeRequest = (headers: Record<string, string> = {}, url = 'https://example.com/?ref=cv') =>
  new Request(url, {
    headers: {
      'sec-fetch-dest': 'document',
      'user-agent': 'Mozilla/5.0',
      'accept-language': 'nb-NO,nb;q=0.9,en;q=0.8',
      referer: 'https://www.linkedin.com/',
      ...headers,
    },
  });

describe('buildPageview', () => {
  it('builds the page view from the request alone', () => {
    expect(buildPageview(makeRequest())).toEqual({
      type: 'event',
      payload: {
        website: '5dd72d14-22e0-4d69-93ce-4c862e1f95c5',
        hostname: 'example.com',
        url: '/?ref=cv',
        referrer: 'https://www.linkedin.com/',
        language: 'nb-NO',
      },
    });
  });

  it('leaves referrer and language empty when the browser sends none', () => {
    const request = new Request('https://example.com/', { headers: { 'user-agent': 'x' } });
    const { payload } = buildPageview(request);
    expect(payload.referrer).toBe('');
    expect(payload.language).toBe('');
  });
});

describe('pageview', () => {
  const fetchMock = vi.fn().mockResolvedValue(new Response('{}'));

  beforeEach(() => {
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    fetchMock.mockClear();
    vi.unstubAllGlobals();
  });

  it('sends the page view to Umami in the background with the visitor location', () => {
    const context = makeContext();
    const result = pageview(makeRequest(), context);

    expect(result).toBeUndefined();
    expect(context.waitUntil).toHaveBeenCalledTimes(1);

    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe('https://cloud.umami.is/api/send');
    expect(init.headers.get('user-agent')).toBe('Mozilla/5.0');
    expect(init.headers.get('x-umami-client-ip')).toBe('203.0.113.7');
    expect(init.headers.get('x-umami-client-country')).toBe('NO');
    expect(init.headers.get('x-umami-client-city')).toBe('Troms%C3%B8');
    expect(JSON.parse(init.body).payload.url).toBe('/?ref=cv');
  });

  it('only runs on production deploys', () => {
    pageview(makeRequest(), makeContext('deploy-preview'));
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it.each([
    ['Global Privacy Control', { 'sec-gpc': '1' }],
    ['Do Not Track', { dnt: '1' }],
  ])('respects %s', (_, headers) => {
    pageview(makeRequest(headers), makeContext());
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it.each([
    ['prefetches', { 'sec-purpose': 'prefetch' }],
    ['non-page requests', { 'sec-fetch-dest': 'empty' }],
    ['requests without a user agent', { 'user-agent': '' }],
  ])('skips %s', (_, headers) => {
    pageview(makeRequest(headers), makeContext());
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
