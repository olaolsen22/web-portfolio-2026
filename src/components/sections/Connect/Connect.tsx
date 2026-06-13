import { ArrowUpRight, Mail } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { PageSection } from '@/components/ui/PageSection/PageSection';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';
import { H2Display, Muted } from '@/components/ui/typography';
import { GitHubIcon } from '@/components/icons/BrandIcons';
import { ConnectBackground } from './ConnectBackground';
import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from '@/constants/links';

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export const Connect = () => {
  const { t } = useLanguage();

  return (
    <PageSection
      id="connect"
      aria-labelledby="connect-heading"
      noBorder
      className="bg-background justify-end md:min-h-[50svh] lg:min-h-[70svh] relative overflow-hidden isolate"
    >
      <ConnectBackground />
      <div className="container relative z-[1]">
        <ScrollReveal delay={0.1}>
          <H2Display
            id="connect-heading"
            className="mb-4 lg:mb-3 text-[clamp(5rem,10vw,8rem)] leading-[0.95] tracking-[-0.04em] font-extrabold"
          >
            <span className="block">{t('connect.headline1')}</span>
            <em className="not-italic text-[var(--brand)] block">{t('connect.headline2')}</em>
          </H2Display>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Muted className="text-[clamp(1rem,2.5vw,1.2rem)] leading-relaxed max-w-[480px] mb-5">
            {t('connect.subtext')}
          </Muted>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 items-center">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto will-change-[transform] [&_svg]:size-[18px]"
            >
              <a href={`mailto:${EMAIL_ADDRESS}`}>
                <Mail aria-hidden="true" />
                {t('connect.email')}
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto will-change-[transform] [&_svg]:size-[18px]"
            >
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
                {t('connect.github')}
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto will-change-[transform] [&_svg]:size-[18px]"
            >
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
                {t('connect.linkedin')}
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </PageSection>
  );
};
