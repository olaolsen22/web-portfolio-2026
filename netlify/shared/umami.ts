// Shared by the edge functions that talk to Umami Cloud. Umami Cloud reads the x-umami-client-*
// headers first; without them it would see Netlify's server instead of the visitor and put every
// visit in the same place.

export interface Geo {
  city?: string;
  country?: { code?: string };
  subdivision?: { code?: string };
}

export interface ClientContext {
  ip: string;
  geo: Geo;
}

export const UMAMI_SEND_URL = 'https://cloud.umami.is/api/send';

// Same ID as VITE_UMAMI_WEBSITE_ID in netlify.toml, which edge functions can't read at runtime
export const UMAMI_WEBSITE_ID = '5dd72d14-22e0-4d69-93ce-4c862e1f95c5';

export const buildClientHeaders = ({ ip, geo }: ClientContext) => {
  const headers = new Headers();
  headers.set('x-umami-client-ip', ip);

  // Umami URL-decodes these, which keeps non-ASCII names like "Tromsø" intact
  const location = {
    'x-umami-client-country': geo.country?.code,
    'x-umami-client-region': geo.subdivision?.code,
    'x-umami-client-city': geo.city,
  };
  Object.entries(location).forEach(([name, value]) => {
    if (value) headers.set(name, encodeURIComponent(value));
  });

  return headers;
};
