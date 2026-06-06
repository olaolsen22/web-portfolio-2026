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
    credit: 'Designed & built by',
    crafted: 'Crafted with React, Tailwind and Claude',
    privacy: 'Privacy notice',
  },
  privacyNotice: {
    title: 'Privacy Notice',
    whatSiteCollectsTitle: 'What this site collects',
    whatSiteCollectsBody:
      'This portfolio does not collect, store, or process any personal data. There are no contact forms, user accounts, cookies, or analytics scripts on this site.',
    hostingProviderTitle: 'What your hosting provider may collect',
    hostingProviderBody:
      'This site is hosted on a third-party platform (e.g. GitHub Pages or Netlify). As with any web server, your visit may result in basic server logs being recorded — including your IP address, browser type, referring page, and the time of your visit. This is standard infrastructure behaviour outside of my control.',
    githubPagesTitle: 'GitHub Pages',
    githubPagesBody:
      'If hosted on GitHub Pages: GitHub may collect technical data as described in their Privacy Statement (github.com/site/privacy). GitHub is operated by GitHub, Inc. and subject to US law, but GitHub states they do not use this data for advertising.',
    netlifyTitle: 'Netlify',
    netlifyBody:
      'If hosted on Netlify: Netlify may log request metadata per their Privacy Policy (netlify.com/privacy). Netlify is certified under the EU-US Data Privacy Framework.',
    gdprTitle: 'Your rights (GDPR)',
    gdprBody:
      'As a person in the EU/EEA you have the right to access, correct, or request deletion of any personal data held about you. Since I hold none, the relevant contact is your hosting provider directly. Norwegian residents may also contact Datatilsynet at datatilsynet.no.',
    questionsTitle: 'Questions?',
    questionsBody: 'Reach out via LinkedIn or GitHub if you have any questions about this notice.',
    close: 'Close',
  },
  skipToContent: 'Skip to main content',
};
