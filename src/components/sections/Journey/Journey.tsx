import { useLanguage } from '@/hooks/useLanguage';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { journeyItems } from '@/content/journeyItems';
import { JourneyList } from './JourneyList/JourneyList';

export const Journey = () => {
  const { t } = useLanguage();

  return (
    <section
      aria-labelledby="journey-heading"
      className="w-full border-t border-[var(--rule)] py-16 min-h-dvh flex flex-col justify-center"
    >
      <div className="container">
        <SectionHeader
          id="journey-heading"
          title={t('journey.title')}
          description={t('journey.description')}
          className="mb-10"
        />
        <JourneyList items={journeyItems} />
      </div>
    </section>
  );
};
