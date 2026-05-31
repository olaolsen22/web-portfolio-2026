export interface Translations {
  nav: {
    home: string;
    journey: string;
    work: string;
    connect: string;
    techStack: string;
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
