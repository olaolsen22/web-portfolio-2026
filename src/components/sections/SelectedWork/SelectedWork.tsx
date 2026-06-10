import { useLanguage } from '@/hooks/useLanguage';
import { PageSection } from '@/components/ui/PageSection/PageSection';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { selectedWorkItems } from '@/content/selectedWorkItems';
import { SelectedWorkList } from './SelectedWorkList/SelectedWorkList';

export const SelectedWork = () => {
  const { t, lang } = useLanguage();

  return (
    <PageSection id="work" aria-labelledby="selected-work-heading">
      <div className="container">
        <SectionHeader
          id="selected-work-heading"
          title={t('selectedWork.title')}
          description={t('selectedWork.description')}
          className="mb-10"
        />
        <SelectedWorkList items={selectedWorkItems[lang]} />
      </div>
    </PageSection>
  );
};
