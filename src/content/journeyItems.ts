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
      id: 'edu-norwegian-lang',
      yearRange: '2025–Present',
      title: 'Norwegian Language Course',
      organization: 'Norway',
      details:
        'Focusing on formal Norwegian language studies to support professional and daily life in Norway.',
    },
    {
      id: 'exp-dwmorgan-fse',
      yearRange: 'May 2022–Jun 2025',
      title: 'Frontend Software Engineer',
      organization: 'D.W. Morgan',
      details:
        'Primary frontend developer on a global shipment platform. Took on architecture, mentoring, and process improvement work.',
    },
    {
      id: 'exp-twist-fse',
      yearRange: 'Mar 2019–May 2022',
      title: 'Frontend Software Engineer',
      organization: 'Twist Resources',
      details:
        'Primary frontend developer for multiple international client applications at a software outsourcing firm.',
    },
    {
      id: 'exp-twist-intern',
      yearRange: 'Nov 2018–Mar 2019',
      title: 'Software Engineering Intern',
      organization: 'Twist Resources',
      details:
        'Training rotation across all disciplines. Identified frontend development as the primary focus.',
    },
    {
      id: 'edu-hau-bscs',
      yearRange: '2015–2019',
      title: 'BS Computer Science',
      organization: 'Holy Angel University',
      details:
        'Core CS in C++, C#, Java, and Python. Algorithms, OOP, software engineering, databases, business, and project planning.',
    },
  ],
  nb: [
    {
      id: 'edu-norwegian-lang',
      yearRange: '2025–nå',
      title: 'Norskkurs',
      organization: 'Norge',
      details: 'Studerer norsk for å fungere godt profesjonelt og sosialt i Norge.',
    },
    {
      id: 'exp-dwmorgan-fse',
      yearRange: 'mai 2022–jun 2025',
      title: 'Frontend-utvikler',
      organization: 'D.W. Morgan',
      details:
        'Primær frontend-utvikler på en global fraktplattform. Bidro til arkitektur, veiledning av juniorer og prosessarbeid.',
    },
    {
      id: 'exp-twist-fse',
      yearRange: 'mar 2019–mai 2022',
      title: 'Frontend-utvikler',
      organization: 'Twist Resources',
      details:
        'Primær frontend-utvikler for internasjonale klientapplikasjoner hos et programvarekonsulentselskap.',
    },
    {
      id: 'exp-twist-intern',
      yearRange: 'nov 2018–mar 2019',
      title: 'Utvikler-praktikant',
      organization: 'Twist Resources',
      details:
        'Praksisperiode på tvers av alle fagdisipliner. Fant sitt fagfelt innen frontend-utvikling.',
    },
    {
      id: 'edu-hau-bscs',
      yearRange: '2015–2019',
      title: 'Bachelor i informatikk',
      organization: 'Holy Angel University',
      details:
        'Kjerne-IT i C++, C#, Java og Python. Algoritmer, OOP, systemutvikling, databaser, forretningsfag og prosjektplanlegging.',
    },
  ],
};
