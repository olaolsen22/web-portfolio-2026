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
  skipToContent: 'Skip to main content',
};
