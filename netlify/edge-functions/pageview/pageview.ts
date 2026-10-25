// Records one Umami page view per page load, from the server. Everything it sends comes from the
// request the browser makes anyway (URL, referrer, user agent, language, Netlify's IP-based
// location), so nothing is read from or stored on the visitor's device and no consent is needed
// under ekomloven § 3-15. Section views and link clicks are tracked client-side, after consent.

import {
  UMAMI_SEND_URL,
  UMAMI_WEBSITE_ID,
  buildClientHeaders,
  type ClientContext,
} from '../../shared/umami.ts';

interface Context extends ClientContext {
  deploy: { context: string };
  waitUntil: (promise: Promise<unknown>) => void;
}

const isPageLoad = (request: Request) => {
  const destination = request.headers.get('sec-fetch-dest');
  if (destination) return destination === 'document';
  return request.headers.get('accept')?.includes('text/html') ?? false;
};

const isPrefetch = (request: Request) =>
  [request.headers.get('sec-purpose'), request.headers.get('purpose')].some((value) =>
    value?.includes('prefetch')
  );

const hasOptedOut = (request: Request) =>
  request.headers.get('sec-gpc') === '1' || request.headers.get('dnt') === '1';

export const buildPageview = (request: Request) => {
  const url = new URL(request.url);
  // First entry of e.g. "nb-NO,nb;q=0.9,en;q=0.8"
  const language = request.headers.get('accept-language')?.split(',')[0].split(';')[0].trim();

  return {
    type: 'event',
    payload: {
      website: UMAMI_WEBSITE_ID,
      hostname: url.hostname,
      url: `${url.pathname}${url.search}`,
      referrer: request.headers.get('referer') ?? '',
      language: language?.slice(0, 35) ?? '',
    },
  };
};

// Returns nothing, so Netlify serves the page as usual while the page view is sent in the background
const pageview = (request: Request, context: Context) => {
  if (context.deploy.context !== 'production') return;
  if (!isPageLoad(request) || isPrefetch(request) || hasOptedOut(request)) return;

  // Umami uses the user agent for browser/OS/device and to filter out bots
  const userAgent = request.headers.get('user-agent');
  if (!userAgent) return;

  const headers = buildClientHeaders(context);
  headers.set('content-type', 'application/json');
  headers.set('user-agent', userAgent);

  context.waitUntil(
    fetch(UMAMI_SEND_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(buildPageview(request)),
    }).catch(() => undefined)
  );
};

export default pageview;

export const config = { path: '/', method: 'GET' };
