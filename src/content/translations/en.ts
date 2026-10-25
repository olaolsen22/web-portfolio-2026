export interface Translations {
  common: {
    close: string;
  };
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
    viewImage: string;
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
    promptLabel: string;
  };
  analyticsConsent: {
    label: string;
    message: string;
    allow: string;
    decline: string;
    privacyNotice: string;
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
    analyticsTitle: string;
    analyticsBody: string;
    analyticsBodyLinkPre: string;
    analyticsBodyLinkText: string;
    analyticsBodyLinkPost: string;
    detailedTitle: string;
    detailedBody: string;
    consentStatusOn: string;
    consentStatusOff: string;
    consentAllow: string;
    consentWithdraw: string;
    consentBrowserSignal: string;
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
  common: {
    close: 'Close',
  },
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
    viewImage: 'View full image',
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
    promptLabel: 'Display preferences',
  },
  analyticsConsent: {
    label: 'Analytics consent',
    message:
      'Can I see which sections you read and which links you click? It helps me improve the site. Basic visit statistics are collected either way.',
    allow: 'Allow',
    decline: 'No Thanks',
    privacyNotice: 'Privacy Notice',
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
      "This site does not use cookies. It counts visits using only information your browser sends anyway when it loads the page. If you allow it, it also measures which sections you read and which links you click. Both are described below. Your theme, language and analytics choice are saved in your browser's localStorage and are never sent to any server.",
    analyticsTitle: 'Visit Statistics (Umami)',
    analyticsBody:
      "When you load the page, the server records a visit using information your browser sends with every request: the page address, the referring website, your browser, operating system and device type, your language, and your approximate location (country, region and city), which Netlify looks up from your IP address. Nothing is read from or stored on your device for this. Your IP address is passed on to Umami only to tell separate visitors apart, and is not stored with the statistics. The purpose is to see how many people visit and where they visit from, which is my legitimate interest (GDPR Art. 6(1)(f)). You can object at any time: if your browser sends a Global Privacy Control or Do Not Track signal, the visit is not recorded, and you can also contact me. The statistics are processed on my behalf by Umami Software, Inc., stored in the EU and kept for 6 months. Umami is a US company and uses US-based service providers, so data may be transferred to the US under the EU Standard Contractual Clauses in Umami's data processing agreement.",
    analyticsBodyLinkPre: "See Umami's ",
    analyticsBodyLinkText: 'Privacy Policy',
    analyticsBodyLinkPost: ' for details.',
    detailedTitle: 'Detailed Statistics (Only With Your Consent)',
    detailedBody:
      'If you choose "Allow", Umami\'s script also runs in your browser and records which sections you scroll to and which links you click (email, GitHub, LinkedIn and project links), along with your screen size. This is based on your consent (GDPR Art. 6(1)(a)), and you can withdraw it at any time below. It is processed and stored by Umami in the same way as the visit statistics.',
    consentStatusOn: 'Detailed statistics are on.',
    consentStatusOff: 'Detailed statistics are off.',
    consentAllow: 'Allow',
    consentWithdraw: 'Turn Off',
    consentBrowserSignal: 'Your browser sends a privacy signal, so no statistics are collected.',
    netlifyTitle: 'Netlify (Hosting Provider)',
    netlifyBody:
      "This site is hosted by Netlify, Inc. As part of delivering and securing the site, Netlify automatically collects standard access logs — including visitor IP addresses, browser type, request timestamps, and HTTP response codes. This processing is based on legitimate interest and is necessary for operating a publicly hosted website. Netlify retains access logs for less than 30 days. Netlify is based in the US, and transfers of personal data there are covered by Netlify's data processing agreement.",
    netlifyBodyLinkPre: "See Netlify's ",
    netlifyBodyLinkText: 'Privacy Policy',
    netlifyBodyLinkPost: ' for details.',
    gdprTitle: 'Your Rights',
    gdprBody:
      'Under the GDPR — which applies in Norway through the EEA agreement and the Personal Data Act — you have the right to access, rectify, restrict, and request deletion of personal data relating to you, to object to processing based on legitimate interest, and to withdraw consent at any time. The statistics are not linked to your name or stored with your IP address, so they generally cannot be traced back to you. Requests concerning server logs should be directed to Netlify.',
    gdprBodyLinkPre:
      'You also have the right to lodge a complaint with the Norwegian Data Protection Authority: Datatilsynet (',
    gdprBodyLinkPost: ').',
    questionsTitle: 'Contact',
    questionsBodyPre:
      'This site is run by Ola Talaba Olsen, who is responsible for the processing described in this notice. Questions can be sent via ',
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
