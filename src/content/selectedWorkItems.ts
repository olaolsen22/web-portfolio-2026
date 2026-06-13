export type WorkStatus = 'live' | 'in-progress' | 'blueprinted';

export interface SelectedWorkItem {
  id: string;
  title: string;
  status: WorkStatus;
  tags: string[];
  description: string;
  imageUrl: string;
  imageUrlLight?: string;
  imageAlt: string;
  githubUrl?: string;
  demoUrl?: string;
}

export const selectedWorkItems: Record<'en' | 'nb', SelectedWorkItem[]> = {
  en: [
    {
      id: 'project-portfolio',
      title: 'Portfolio Website',
      status: 'live',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn', 'Claude Code'],
      description:
        'Personal portfolio built with React and TypeScript. Claude Code was part of the development workflow, used for planning and acceleration.',
      imageUrl: '/images/projects/project-portfolio-dark.jpg',
      imageUrlLight: '/images/projects/project-portfolio-light.jpg',
      imageAlt: "Screenshot of Ola O.'s personal developer portfolio website",
      githubUrl: 'https://github.com/olaolsen22/web-portfolio-2026',
      demoUrl: 'https://olao-dev.netlify.app/',
    },
    {
      id: 'project-habit-tracker',
      title: 'Habit Tracker',
      status: 'blueprinted',
      tags: ['React Native', 'Wear OS'],
      description:
        'A daily habit tracker with Wear OS support. Built to be lightweight and focused, for people who want a consistent routine without the noise.',
      imageUrl: '',
      imageAlt:
        'Concept illustration for a minimalist habit tracking mobile app with Wear OS support',
    },
    {
      id: 'project-language-tool',
      title: 'Language Tool',
      status: 'blueprinted',
      tags: ['React Native', 'AI', 'OCR'],
      description:
        'AI-assisted language learning tool with OCR-based photo input to reduce token costs. Planned as a mobile-first or installable web app.',
      imageUrl: '',
      imageAlt:
        'Concept illustration for an AI-assisted language learning tool with photo input support',
    },
  ],
  nb: [
    {
      id: 'project-portfolio',
      title: 'Portefølje',
      status: 'live',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn', 'Claude Code'],
      description:
        'Personlig portefølje bygget med React og TypeScript. Claude Code var en del av utviklingsarbeidet, brukt til planlegging og fremdrift.',
      imageUrl: '/images/projects/project-portfolio-dark.jpg',
      imageUrlLight: '/images/projects/project-portfolio-light.jpg',
      imageAlt: 'Skjermbilde av Ola O.s personlige porteføljenettsted',
      githubUrl: 'https://github.com/olaolsen22/web-portfolio-2026',
      demoUrl: 'https://olaolsen22.github.io/web-portfolio-2026',
    },
    {
      id: 'project-habit-tracker',
      title: 'Habit Tracker',
      status: 'blueprinted',
      tags: ['React Native', 'Wear OS'],
      description:
        'En daglig app for å spore vaner med støtte for Wear OS. Bygget for å være enkel og fokusert, for de som vil ha en konsekvent rutine uten støy.',
      imageUrl: '',
      imageAlt: 'Konseptillustrasjon for en enkel vanesporing-app med Wear OS-støtte',
    },
    {
      id: 'project-language-tool',
      title: 'Language Tool',
      status: 'blueprinted',
      tags: ['React Native', 'AI', 'OCR'],
      description:
        'AI-assistert språklæringsverktøy med OCR-basert bildeinput for å redusere tokenkostnader. Planlagt som mobilapp eller installerbar webapplikasjon.',
      imageUrl: '',
      imageAlt: 'Konseptillustrasjon for et AI-assistert språklæringsverktøy med bildeinput',
    },
  ],
};
