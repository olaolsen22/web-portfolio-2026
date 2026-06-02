export type WorkStatus = 'live' | 'in-progress' | 'blueprinted';

export interface SelectedWorkItem {
  id: string;
  title: string;
  status: WorkStatus;
  tags: string[];
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export const selectedWorkItems: Record<'en' | 'nb', SelectedWorkItem[]> = {
  en: [
    {
      id: '1',
      title: 'Nordlys Dashboard',
      status: 'live',
      tags: ['React', 'TypeScript', 'Recharts', 'TanStack Query'],
      description:
        'A real-time analytics dashboard for monitoring distributed IoT sensors across remote Norwegian sites. Focused on low-latency updates and offline-first resilience.',
      imageUrl: 'https://placehold.co/480x320/10b981/ffffff?text=Nordlys',
      imageAlt: 'Screenshot of the Nordlys Dashboard showing sensor data charts',
    },
    {
      id: '2',
      title: 'Kart Editor',
      status: 'in-progress',
      tags: ['TypeScript', 'Leaflet', 'Zustand', 'Tailwind CSS'],
      description:
        'A collaborative map annotation tool for field teams to mark, annotate, and share geographic data without a GIS background. Built for slow 3G conditions.',
      imageUrl: 'https://placehold.co/480x320/059669/ffffff?text=Kart+Editor',
      imageAlt: 'Screenshot of the Kart Editor with an annotated map layer',
    },
    {
      id: '3',
      title: 'Typeset',
      status: 'blueprinted',
      tags: ['React', 'CSS Custom Properties', 'Storybook', 'Vitest'],
      description:
        'A minimal design-token playground that lets designers preview font scale, spacing, and color ramps live in the browser and export to CSS or Figma tokens.',
      imageUrl: 'https://placehold.co/480x320/6366f1/ffffff?text=Typeset',
      imageAlt: 'Screenshot of the Typeset playground showing a type scale',
    },
  ],
  nb: [
    {
      id: '1',
      title: 'Nordlys Dashboard',
      status: 'live',
      tags: ['React', 'TypeScript', 'Recharts', 'TanStack Query'],
      description:
        'Et sanntids analysedashbord for overvåking av distribuerte IoT-sensorer på avsidesliggende norske steder. Fokusert på lav forsinkelse og offline-resiliens.',
      imageUrl: 'https://placehold.co/480x320/10b981/ffffff?text=Nordlys',
      imageAlt: 'Skjermbilde av Nordlys Dashboard som viser sensordata-grafer',
    },
    {
      id: '2',
      title: 'Kart Editor',
      status: 'in-progress',
      tags: ['TypeScript', 'Leaflet', 'Zustand', 'Tailwind CSS'],
      description:
        'Et samarbeidsverktøy for kartannotering der feltteam kan merke, annotere og dele geografiske data uten GIS-bakgrunn. Bygget for trege 3G-forhold.',
      imageUrl: 'https://placehold.co/480x320/059669/ffffff?text=Kart+Editor',
      imageAlt: 'Skjermbilde av Kart Editor med et annotert kartlag',
    },
    {
      id: '3',
      title: 'Typeset',
      status: 'blueprinted',
      tags: ['React', 'CSS Custom Properties', 'Storybook', 'Vitest'],
      description:
        'En minimal design-token-lekeplass som lar designere forhåndsvise skriftstørrelse, avstand og fargeskalaer live i nettleseren og eksportere til CSS eller Figma tokens.',
      imageUrl: 'https://placehold.co/480x320/6366f1/ffffff?text=Typeset',
      imageAlt: 'Skjermbilde av Typeset-lekeplassen som viser en typografiskala',
    },
  ],
};
