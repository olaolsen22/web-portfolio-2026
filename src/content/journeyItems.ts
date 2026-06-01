export interface JourneyItem {
  id: string;
  yearRange: string;
  title: string;
  organization: string;
  details: string;
}

export const journeyItems: JourneyItem[] = [
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
];
