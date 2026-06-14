import { ArrowUpRight, Mail } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { PageSection } from '@/components/ui/PageSection/PageSection';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';
import { H2Display, Muted } from '@/components/ui/typography';
import { GitHubIcon, LinkedInIcon } from '@/components/icons/BrandIcons';
import { ConnectBackground } from './ConnectBackground';
import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from '@/constants/links';

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
            <em className="not-italic text-brand block">{t('connect.headline2')}</em>
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
