export interface Translations {
  nav: {
    home: string;
    journey: string;
    work: string;
    connect: string;
    techStack: string;
  };
  hero: {
    workStatus: string;
    location: string;
    name: string;
    title: string;
    details: string;
    viewMyWork: string;
  };
  techStack: {
    pause: string;
    play: string;
  };
  journey: {
    title: string;
    description: string;
  };
  selectedWork: {
    title: string;
    description: string;
    status: {
      live: string;
      inProgress: string;
      blueprinted: string;
    };
  };
  connect: {
    headline1: string;
    headline2: string;
    subtext: string;
    github: string;
    linkedin: string;
  };
  accessibility: {
    enableAnimations: string;
    enableTransparency: string;
    keepOff: string;
    enable: string;
    changePreferences: string;
  };
  footer: {
    credit: string;
    crafted: string;
    privacy: string;
  };
  privacyNotice: {
    title: string;
    intro: string;
    noDataTitle: string;
    noDataBody: string;
    localStorageTitle: string;
    localStorageBody: string;
    githubTitle: string;
    githubBody: string;
    contactTitle: string;
    contactBody: string;
    close: string;
  };
  skipToContent: string;
}

export const en: Translations = {
  nav: {
    home: 'Home',
    journey: 'Journey',
    work: 'Work',
    connect: 'Connect',
    techStack: 'Tech Stack',
  },
  hero: {
    workStatus: 'Open to work',
    location: 'Norway 🇳🇴',
    name: 'OLA O.',
    title: 'FRONTEND DEVELOPER',
    details:
      'I turn **TypeScript** and too much coffee into experiences people actually enjoy using. 4+ years shipping interfaces at X and Y — obsessing over the details that make products feel **native, not just functional.**',
    viewMyWork: 'View My Work',
  },
  techStack: {
    pause: 'Pause',
    play: 'Play',
  },
  journey: {
    title: '[Journey section title]',
    description: 'How I became a developer.',
  },
  selectedWork: {
    title: 'Selected Work',
    description: "Side quests I'm actually proud of.",
    status: {
      live: 'Live',
      inProgress: 'In Progress',
      blueprinted: 'Blueprinted',
    },
  },
  connect: {
    headline1: "Let's",
    headline2: 'talk.',
    subtext: "Drop a line — I don't keep read receipts off, I promise.",
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  accessibility: {
    enableAnimations: 'Animations are disabled on your device. Enable them for this site?',
    enableTransparency:
      'Transparency effects are disabled on your device. Enable them for this site?',
    keepOff: 'Keep off',
    enable: 'Enable',
    changePreferences: 'Change accessibility preferences',
  },
  footer: {
    credit: 'Designed & built by Ola · 2026',
    crafted: 'Crafted with React, Tailwind and Claude',
    privacy: 'Privacy notice',
  },
  privacyNotice: {
    title: 'Privacy Notice',
    intro: 'This is a personal portfolio site. Your privacy matters.',
    noDataTitle: 'No personal data collected',
    noDataBody:
      'This site does not use analytics, tracking pixels, or third-party cookies. No personal information is collected or stored on any server.',
    localStorageTitle: 'Local storage',
    localStorageBody:
      "Your language preference (EN/NB) is saved in your browser's localStorage. This data never leaves your device.",
    githubTitle: 'GitHub API',
    githubBody:
      'Public repository data is fetched from the GitHub API to display projects. No authentication is used and no user data is collected in this process.',
    contactTitle: 'Questions?',
    contactBody:
      'If you have questions about this privacy notice, reach out at olatalabaolsen@gmail.com.',
    close: 'Close',
  },
  skipToContent: 'Skip to main content',
};
