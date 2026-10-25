import analyticsProxy, { buildUpstreamHeaders } from './analytics-proxy';

const context = {
  ip: '203.0.113.7',
  geo: { city: 'Tromsø', country: { code: 'NO' }, subdivision: { code: '55' } },
};

const makeRequest = (headers: Record<string, string> = {}) =>
  new Request('https://example.com/_v/api/send', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'user-agent': 'Mozilla/5.0', ...headers },
    body: JSON.stringify({ type: 'event', payload: {} }),
  });

describe('buildUpstreamHeaders', () => {
  it('forwards allowlisted headers', () => {
    const headers = buildUpstreamHeaders(makeRequest({ 'x-umami-cache': 'token' }), context);
    expect(headers.get('content-type')).toBe('application/json');
    expect(headers.get('user-agent')).toBe('Mozilla/5.0');
    expect(headers.get('x-umami-cache')).toBe('token');
  });

  it('drops headers outside the allowlist', () => {
    const headers = buildUpstreamHeaders(
      makeRequest({ 'x-forwarded-for': '198.51.100.1', 'x-nf-client-connection-ip': '1.1.1.1' }),
      context
    );
    expect(headers.has('x-forwarded-for')).toBe(false);
    expect(headers.has('x-nf-client-connection-ip')).toBe(false);
  });

  it('sets the visitor IP and URL-encoded location', () => {
    const headers = buildUpstreamHeaders(makeRequest(), context);
    expect(headers.get('x-umami-client-ip')).toBe('203.0.113.7');
    expect(headers.get('x-umami-client-country')).toBe('NO');
    expect(headers.get('x-umami-client-region')).toBe('55');
    expect(headers.get('x-umami-client-city')).toBe('Troms%C3%B8');
  });

  it('omits location headers Netlify could not resolve', () => {
    const headers = buildUpstreamHeaders(makeRequest(), { ip: context.ip, geo: {} });
    expect(headers.has('x-umami-client-country')).toBe(false);
    expect(headers.has('x-umami-client-region')).toBe(false);
    expect(headers.has('x-umami-client-city')).toBe(false);
  });
});

describe('analyticsProxy', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('posts to Umami and passes the response through uncached', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(
        new Response('{"cache":"token"}', { headers: { 'content-type': 'application/json' } })
      );
    vi.stubGlobal('fetch', fetchMock);

    const response = await analyticsProxy(makeRequest(), context);

    expect(fetchMock).toHaveBeenCalledWith(
      'https://cloud.umami.is/api/send',
      expect.objectContaining({ method: 'POST', body: '{"type":"event","payload":{}}' })
    );
    expect(response.status).toBe(200);
    expect(response.headers.get('cache-control')).toBe('no-store');
    expect(await response.json()).toEqual({ cache: 'token' });
  });

  it('returns 502 when Umami is unreachable', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network')));
    const response = await analyticsProxy(makeRequest(), context);
    expect(response.status).toBe(502);
  });
});
