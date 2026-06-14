import { cn } from '@/utils';
import { LazyImage } from '@/components/ui/LazyImage/LazyImage';
import { ImageViewer } from '@/components/ui/ImageViewer/ImageViewer';
import { useLanguage } from '@/hooks/useLanguage';

interface SelectedWorkCardImageProps {
  imageUrl: string;
  imageUrlLight?: string;
  imageAlt: string;
  motionAllowed: boolean;
}

const hoverScale =
  'will-change-transform transition-transform duration-[350ms] ease-out can-hover:group-hover:scale-105';

export const SelectedWorkCardImage = ({
  imageUrl,
  imageUrlLight,
  imageAlt,
  motionAllowed,
}: SelectedWorkCardImageProps) => {
  const { t } = useLanguage();

  return (
    <ImageViewer src={imageUrl} srcLight={imageUrlLight} alt={imageAlt}>
      <button
        type="button"
        aria-label={t('selectedWork.viewImage')}
        className={cn(
          'w-full cursor-pointer rounded-md ring-1 ring-transparent can-hover:group-hover:ring-brand/60',
          motionAllowed && 'transition-all duration-200'
        )}
      >
        <div className="overflow-hidden rounded-md">
          {imageUrlLight ? (
            <div className="relative aspect-[4/3] md:aspect-[3/2]">
              <div
                className={cn(
                  'absolute inset-0 opacity-100 dark:opacity-0',
                  motionAllowed && 'transition-opacity duration-300'
                )}
              >
                <LazyImage
                  src={imageUrlLight}
                  alt={imageAlt}
                  aspectClassName="aspect-[4/3] md:aspect-[3/2]"
                  imgClassName={cn(motionAllowed && hoverScale)}
                />
              </div>
              <div
                className={cn(
                  'absolute inset-0 opacity-0 dark:opacity-100',
                  motionAllowed && 'transition-opacity duration-300'
                )}
              >
                <LazyImage
                  src={imageUrl}
                  alt={imageAlt}
                  aspectClassName="aspect-[4/3] md:aspect-[3/2]"
                  imgClassName={cn(motionAllowed && hoverScale)}
                />
              </div>
            </div>
          ) : (
            <LazyImage
              src={imageUrl}
              alt={imageAlt}
              aspectClassName="aspect-[4/3] md:aspect-[3/2]"
              imgClassName={cn(motionAllowed && hoverScale)}
            />
          )}
        </div>
      </button>
    </ImageViewer>
  );
};
