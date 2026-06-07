import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { cn } from '@/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type ImageStatus = 'loading' | 'loaded' | 'error';

interface LazyImageProps {
  src: string;
  alt: string;
  aspectClassName?: string;
  imgClassName?: string;
  className?: string;
  initialStatus?: ImageStatus;
}

export const LazyImage = ({
  src,
  alt,
  aspectClassName,
  imgClassName,
  className,
  initialStatus,
}: LazyImageProps) => {
  const [status, setStatus] = useState<ImageStatus>(initialStatus ?? 'loading');
  const { motionAllowed } = useReducedMotion();

  return (
    <div className={cn('relative overflow-hidden', aspectClassName, className)}>
      {status === 'loading' && (
        <div
          aria-hidden="true"
          className={cn('absolute inset-0 bg-muted', motionAllowed && 'animate-pulse')}
        />
      )}

      {status === 'error' && (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex items-center justify-center bg-muted"
        >
          <ImageOff className="text-muted-foreground" size={24} aria-hidden="true" />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        aria-hidden={status === 'error' ? true : undefined}
        className={cn(
          'absolute inset-0 h-full w-full object-cover',
          motionAllowed && 'transition-[opacity,filter] duration-[350ms] ease-out',
          status === 'loaded'
            ? 'opacity-100 blur-none'
            : motionAllowed
              ? 'opacity-0 blur-sm'
              : 'opacity-0',
          imgClassName
        )}
        loading="lazy"
        decoding="async"
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
      />
    </div>
  );
};
