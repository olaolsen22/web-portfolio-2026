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
      'I turn **TypeScript** and too much coffee into experiences people actually enjoy using. 4+ years shipping interfaces at TwistResources and D.W. Morgan — obsessing over the details that make products feel **native, not just functional.**',
    viewMyWork: 'View My Work',
  },
  techStack: {
    pause: 'Pause',
    play: 'Play',
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
