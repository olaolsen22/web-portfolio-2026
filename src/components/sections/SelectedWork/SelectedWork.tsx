import { useLanguage } from '@/hooks/useLanguage';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { selectedWorkItems } from '@/content/selectedWorkItems';
import { SelectedWorkList } from './SelectedWorkList/SelectedWorkList';

export const SelectedWork = () => {
  const { t } = useLanguage();

  return (
    <section
      aria-labelledby="selected-work-heading"
      className="w-full border-t border-[var(--rule)] py-16 min-h-svh flex flex-col justify-center"
    >
      <div className="container">
        <SectionHeader
          id="selected-work-heading"
          title={t('selectedWork.title')}
          description={t('selectedWork.description')}
          className="mb-10"
        />
        <SelectedWorkList items={selectedWorkItems} />
      </div>
    </section>
  );
};
