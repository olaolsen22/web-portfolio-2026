export interface Translations {
  nav: {
    home: string;
    projects: string;
    about: string;
    contact: string;
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
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
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
