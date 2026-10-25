// Proxies Umami's collect endpoint through the site's own domain so ad/DNS blockers don't drop
// events. Only used by the client-side tracker, which loads after the visitor consents.

import { UMAMI_SEND_URL, buildClientHeaders, type ClientContext } from '../../shared/umami.ts';

// Allowlist, so Netlify's own x-forwarded-for / x-nf-* headers are never passed on
const FORWARDED_HEADERS = [
  'content-type',
  'user-agent',
  'x-umami-cache',
  'x-umami-website-id',
  'x-umami-hostname',
];

export const buildUpstreamHeaders = (request: Request, context: ClientContext) => {
  const headers = buildClientHeaders(context);

  FORWARDED_HEADERS.forEach((name) => {
    const value = request.headers.get(name);
    if (value) headers.set(name, value);
  });

  return headers;
};

const analyticsProxy = async (request: Request, context: ClientContext) => {
  try {
    const upstream = await fetch(UMAMI_SEND_URL, {
      method: 'POST',
      headers: buildUpstreamHeaders(request, context),
      body: await request.text(),
    });

    return new Response(upstream.body, {
      status: upstream.status,
      headers: {
        'content-type': upstream.headers.get('content-type') ?? 'application/json',
        // Response carries Umami's session cache token
        'cache-control': 'no-store',
      },
    });
  } catch {
    return new Response(null, { status: 502 });
  }
};

export default analyticsProxy;

export const config = { path: '/_v/api/send', method: 'POST' };
