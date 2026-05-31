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
    location: 'Norway',
    name: '[Your Name]',
    title: '[Professional Title]',
    details: '[Details about you with **bold** highlights go here.]',
    viewMyWork: 'View My Work',
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
