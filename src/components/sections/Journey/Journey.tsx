import { useLanguage } from '@/hooks/useLanguage';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { journeyItems } from '@/content/journeyItems';
import { JourneyList } from './JourneyList/JourneyList';

export const Journey = () => {
  const { t, lang } = useLanguage();

  return (
    <section
      aria-labelledby="journey-heading"
      className="w-full py-16 min-h-svh flex flex-col justify-center"
    >
      <div className="container">
        <SectionHeader
          id="journey-heading"
          title={t('journey.title')}
          description={t('journey.description')}
          className="mb-10"
        />
        <JourneyList items={journeyItems[lang]} />
      </div>
    </section>
  );
};
