import { useLanguage } from '@/hooks/useLanguage';
import { PageSection } from '@/components/ui/PageSection/PageSection';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { journeyItems } from '@/content/journeyItems';
import { JourneyList } from './JourneyList/JourneyList';

export const Journey = () => {
  const { t, lang } = useLanguage();

  return (
    <PageSection id="journey" aria-labelledby="journey-heading">
      <div className="container">
        <SectionHeader
          id="journey-heading"
          title={t('journey.title')}
          description={t('journey.description')}
          className="mb-10"
        />
        <JourneyList items={journeyItems[lang]} />
      </div>
    </PageSection>
  );
};
