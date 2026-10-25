import type { TranslationKey } from '@/content';
import { EMAIL_ADDRESS, LINKEDIN_URL } from '@/constants/links';

const UMAMI_PRIVACY_URL = 'https://umami.is/privacy';
const NETLIFY_PRIVACY_URL = 'https://www.netlify.com/privacy/';
const DATATILSYNET_URL = 'https://www.datatilsynet.no/';

export interface PrivacyLink {
  href: string;
  text: string | TranslationKey;
  isTranslationKey?: boolean;
  external?: boolean;
}

export interface PrivacySection {
  titleKey: TranslationKey;
  bodyParts: Array<{ key: TranslationKey } | { link: PrivacyLink }>;
  // Renders the allow / turn off control for detailed statistics under the body
  consentControl?: boolean;
}

export const privacyNoticeSections: PrivacySection[] = [
  {
    titleKey: 'privacyNotice.whatSiteCollectsTitle',
    bodyParts: [{ key: 'privacyNotice.whatSiteCollectsBody' }],
  },
  {
    titleKey: 'privacyNotice.analyticsTitle',
    bodyParts: [
      { key: 'privacyNotice.analyticsBody' },
      { key: 'privacyNotice.analyticsBodyLinkPre' },
      {
        link: {
          href: UMAMI_PRIVACY_URL,
          text: 'privacyNotice.analyticsBodyLinkText',
          isTranslationKey: true,
          external: true,
        },
      },
      { key: 'privacyNotice.analyticsBodyLinkPost' },
    ],
  },
  {
    titleKey: 'privacyNotice.detailedTitle',
    bodyParts: [{ key: 'privacyNotice.detailedBody' }],
    consentControl: true,
  },
  {
    titleKey: 'privacyNotice.netlifyTitle',
    bodyParts: [
      { key: 'privacyNotice.netlifyBody' },
      { key: 'privacyNotice.netlifyBodyLinkPre' },
      {
        link: {
          href: NETLIFY_PRIVACY_URL,
          text: 'privacyNotice.netlifyBodyLinkText',
          isTranslationKey: true,
          external: true,
        },
      },
      { key: 'privacyNotice.netlifyBodyLinkPost' },
    ],
  },
  {
    titleKey: 'privacyNotice.gdprTitle',
    bodyParts: [
      { key: 'privacyNotice.gdprBody' },
      { key: 'privacyNotice.gdprBodyLinkPre' },
      {
        link: {
          href: DATATILSYNET_URL,
          text: 'datatilsynet.no',
          external: true,
        },
      },
      { key: 'privacyNotice.gdprBodyLinkPost' },
    ],
  },
  {
    titleKey: 'privacyNotice.questionsTitle',
    bodyParts: [
      { key: 'privacyNotice.questionsBodyPre' },
      {
        link: {
          href: `mailto:${EMAIL_ADDRESS}`,
          text: 'privacyNotice.questionsEmailLinkText',
          isTranslationKey: true,
        },
      },
      { key: 'privacyNotice.questionsBodyOr' },
      {
        link: {
          href: LINKEDIN_URL,
          text: 'LinkedIn',
          external: true,
        },
      },
      { key: 'privacyNotice.questionsBodyPost' },
    ],
  },
];
