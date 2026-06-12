export interface Translations {
  nav: {
    home: string;
    journey: string;
    work: string;
    connect: string;
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
    label: string;
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
    github: string;
    demo: string;
  };
  connect: {
    headline1: string;
    headline2: string;
    subtext: string;
    github: string;
    linkedin: string;
    email: string;
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
    netlifyTitle: string;
    netlifyBody: string;
    netlifyBodyLinkPre: string;
    netlifyBodyLinkText: string;
    netlifyBodyLinkPost: string;
    gdprTitle: string;
    gdprBody: string;
    gdprBodyLinkPre: string;
    gdprBodyLinkPost: string;
    questionsTitle: string;
    questionsBodyPre: string;
    questionsEmailLinkText: string;
    questionsBodyOr: string;
    questionsBodyPost: string;
    close: string;
  };
  banner: {
    langNote: string;
    dismiss: string;
  };
  skipToContent: string;
  site: {
    title: string;
  };
}

export const en: Translations = {
  nav: {
    home: 'Home',
    journey: 'Journey',
    work: 'Projects',
    connect: 'Connect',
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
    label: 'Tech Stack',
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
    github: 'GitHub',
    demo: 'Demo',
  },
  connect: {
    headline1: "Let's",
    headline2: 'Talk.',
    subtext: 'Open to new opportunities and collaboration. Feel free to reach out.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
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
      "This site does not use cookies, trackers, or analytics scripts. No personal data is collected or stored by this website directly. Your theme and language preferences are saved in your browser's localStorage and are never transmitted to any server.",
    netlifyTitle: 'Netlify (Hosting Provider)',
    netlifyBody:
      'This site is hosted by Netlify, Inc. As part of delivering and securing the site, Netlify automatically collects standard access logs — including visitor IP addresses, browser type, request timestamps, and HTTP response codes. This processing is based on legitimate interest and is necessary for operating a publicly hosted website. Netlify retains access logs for less than 30 days.',
    netlifyBodyLinkPre: "See Netlify's ",
    netlifyBodyLinkText: 'Privacy Policy',
    netlifyBodyLinkPost: ' for details.',
    gdprTitle: 'Your Rights',
    gdprBody:
      'Under the GDPR — which applies in Norway through the EEA agreement and the Personal Data Act — you have the right to access, rectify, restrict, and request deletion of personal data relating to you. Since this site collects no personal data itself, requests concerning server logs should be directed to Netlify.',
    gdprBodyLinkPre:
      'You also have the right to lodge a complaint with the Norwegian Data Protection Authority: Datatilsynet (',
    gdprBodyLinkPost: ').',
    questionsTitle: 'Questions',
    questionsBodyPre: 'Questions about this privacy notice can be sent via ',
    questionsEmailLinkText: 'email',
    questionsBodyOr: ' or ',
    questionsBodyPost: '.',
    close: 'Close',
  },
  banner: {
    langNote: '',
    dismiss: '',
  },
  skipToContent: 'Skip to main content',
  site: {
    title: 'Ola O. - Frontend Developer',
  },
};
