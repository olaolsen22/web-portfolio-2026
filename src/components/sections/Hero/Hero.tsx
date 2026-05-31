import { useLanguage } from '@/hooks/useLanguage';
import { WorkStatusCard } from './WorkStatusCard';
import { HeadlineText } from './HeadlineText';
import { HeroButtonGroup } from './HeroButtonGroup';
import { HeroBackground } from './HeroBackground';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[calc(100dvh-4rem)] flex-col px-6 py-10 md:px-12 lg:px-20 justify-end"
    >
      <HeroBackground />

      <WorkStatusCard workStatus={t('hero.workStatus')} location={t('hero.location')} />

      <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-end">
        <HeadlineText
          name={t('hero.name')}
          title={t('hero.title')}
          details={t('hero.details')}
          className="md:w-3/5"
        />
        <HeroButtonGroup
          viewMyWork={t('hero.viewMyWork')}
          connect={t('nav.connect')}
          className="md:w-2/5 md:flex md:justify-end"
        />
      </div>
    </section>
  );
};
