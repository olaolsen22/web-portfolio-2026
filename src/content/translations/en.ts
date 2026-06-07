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
    whatSiteCollectsTitle: string;
    whatSiteCollectsBody: string;
    hostingProviderTitle: string;
    hostingProviderBody: string;
    githubPagesTitle: string;
    githubPagesBody: string;
    netlifyTitle: string;
    netlifyBody: string;
    gdprTitle: string;
    gdprBody: string;
    questionsTitle: string;
    questionsBody: string;
    close: string;
  };
  skipToContent: string;
}

export const en: Translations = {
  nav: {
    home: 'Home',
    journey: 'Journey',
    work: 'Projects',
    connect: 'Connect',
    techStack: 'Stack',
  },
  hero: {
    workStatus: 'Open to Work',
    location: 'Norway 🇳🇴',
    name: 'OLA O.',
    title: 'FRONTEND DEVELOPER',
    details:
      '**6 years** building interfaces that **work** and **look right**. Good with details, easy to work with, and moving into fullstack. I use **AI** to **work better**, not to replace the thinking.',
    viewMyWork: 'View My Work',
  },
  techStack: {
    pause: 'Pause',
    play: 'Play',
  },
  journey: {
    title: 'Journey',
    description: 'Where I have been so far',
  },
  selectedWork: {
    title: 'Personal Projects',
    description: 'Ideas I build for myself',
    status: {
      live: 'Live',
      inProgress: 'In Progress',
      blueprinted: 'Blueprinted',
    },
  },
  connect: {
    headline1: "Let's",
    headline2: 'Talk.',
    subtext: 'Open to new opportunities and collaboration. Feel free to reach out.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  accessibility: {
    enableAnimations:
      'Animations are off based on your system settings. Enable them for this site?',
    enableTransparency: 'Transparency effects are off based on your system settings. Enable them?',
    keepOff: 'Keep Off',
    enable: 'Enable',
    changePreferences: 'Change motion and transparency preferences',
  },
  footer: {
    credit: 'Designed and built by',
    crafted: 'Built with React, TypeScript, and Claude Code.',
    privacy: 'Privacy Notice',
  },
  privacyNotice: {
    title: 'Privacy Notice',
    whatSiteCollectsTitle: 'What This Site Collects',
    whatSiteCollectsBody:
      'This site does not use cookies, trackers, or analytics. No personal data is collected or stored through this website.',
    hostingProviderTitle: 'Hosting Provider',
    hostingProviderBody:
      'This site is hosted on a third-party provider. The provider may collect standard server logs, including IP addresses and browser information, as part of their normal operations.',
    githubPagesTitle: 'GitHub Pages',
    githubPagesBody:
      "If hosted on GitHub Pages, GitHub may collect technical information such as IP addresses when you visit this site. See GitHub's Privacy Statement for more details.",
    netlifyTitle: 'Netlify',
    netlifyBody:
      "If hosted on Netlify, Netlify may log server-side data including IP addresses and request headers. See Netlify's Privacy Policy for more information.",
    gdprTitle: 'Your Rights',
    gdprBody:
      'Under GDPR, you have the right to access, correct, and request deletion of any personal data held about you. Since this site does not collect personal data directly, there is nothing to request.',
    questionsTitle: 'Questions',
    questionsBody:
      'If you have any questions about this privacy notice, feel free to reach out via the contact section on this site.',
    close: 'Close',
  },
  skipToContent: 'Skip to main content',
};
