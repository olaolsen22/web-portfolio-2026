import { useLanguage } from '@/hooks/useLanguage';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { selectedWorkItems } from '@/content/selectedWorkItems';
import { SelectedWorkList } from './SelectedWorkList/SelectedWorkList';

export const SelectedWork = () => {
  const { t, lang } = useLanguage();

  return (
    <section
      id="work"
      aria-labelledby="selected-work-heading"
      className="w-full py-16 min-h-svh flex flex-col justify-center"
    >
      <div className="container">
        <SectionHeader
          id="selected-work-heading"
          title={t('selectedWork.title')}
          description={t('selectedWork.description')}
          className="mb-10"
        />
        <SelectedWorkList items={selectedWorkItems[lang]} />
      </div>
    </section>
  );
};
