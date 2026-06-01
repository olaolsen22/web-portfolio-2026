import { useLanguage } from '@/hooks/useLanguage';
import { WorkStatusCard } from './WorkStatusCard';
import { HeadlineText } from './HeadlineText';
import { HeroButtonGroup } from './HeroButtonGroup';
import { HeroBackground } from './HeroBackground';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="hero-heading" className="relative isolate flex flex-1 flex-col">
      <HeroBackground />

      <div className="flex flex-1 flex-col justify-end px-6 py-10 md:px-12 lg:px-20 mx-auto w-full max-w-[1920px]">
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
      </div>
    </section>
  );
};
