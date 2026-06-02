export interface JourneyItem {
  id: string;
  yearRange: string;
  title: string;
  organization: string;
  details: string;
}

export const journeyItems: Record<'en' | 'nb', JourneyItem[]> = {
  en: [
    {
      id: '1',
      yearRange: '2022–Present',
      title: 'Frontend Developer',
      organization: 'TwistResources',
      details:
        'Building and maintaining client-facing interfaces with React and TypeScript, focusing on performance and accessibility.',
    },
    {
      id: '2',
      yearRange: '2020–2022',
      title: 'Frontend Developer',
      organization: 'D.W. Morgan',
      details:
        'Developed supply chain management dashboards and internal tools, improving operational efficiency across teams.',
    },
    {
      id: '3',
      yearRange: '2018–2020',
      title: 'Bachelor of Computer Science',
      organization: 'University of Oslo',
      details:
        'Studied algorithms, data structures, software engineering, and human–computer interaction.',
    },
  ],
  nb: [
    {
      id: '1',
      yearRange: '2022–nå',
      title: 'Frontend-utvikler',
      organization: 'TwistResources',
      details:
        'Bygger og vedlikeholder klientvendte grensesnitt med React og TypeScript, med fokus på ytelse og universell utforming.',
    },
    {
      id: '2',
      yearRange: '2020–2022',
      title: 'Frontend-utvikler',
      organization: 'D.W. Morgan',
      details:
        'Utviklet dashbord for forsyningskjedestyring og interne verktøy som forbedret driftseffektiviteten på tvers av team.',
    },
    {
      id: '3',
      yearRange: '2018–2020',
      title: 'Bachelor i informatikk',
      organization: 'Universitetet i Oslo',
      details:
        'Studerte algoritmer, datastrukturer, programvareutvikling og menneske–maskin-interaksjon.',
    },
  ],
};
