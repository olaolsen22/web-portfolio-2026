import { cn } from '@/utils';

interface IndexedCardProps {
  index: number;
  indexSize?: 'lg' | 'sm';
  children: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
}

export const IndexedCard = ({
  index,
  indexSize = 'sm',
  children,
  aside,
  className,
}: IndexedCardProps) => {
  const formattedIndex = String(index).padStart(2, '0');

  const indexNode =
    indexSize === 'lg' ? (
      <span
        aria-hidden="true"
        className="text-[clamp(2rem,5vw,4rem)] font-extrabold leading-none tracking-[-0.04em] text-brand opacity-[0.18] transition-opacity can-hover:group-hover:opacity-100"
      >
        {formattedIndex}
      </span>
    ) : (
      <span aria-hidden="true" className="text-[0.8rem] font-bold opacity-[0.35] text-foreground">
        {formattedIndex}
      </span>
    );

  if (aside) {
    return (
      <article
        className={cn(
          'group flex flex-col gap-4 border-b border-[var(--rule)] py-8',
          'md:grid md:grid-cols-[5%_1fr_25%] md:items-start md:gap-6 lg:gap-10',
          className
        )}
      >
        <div className="order-first md:order-last">{aside}</div>
        <div className="md:order-first md:pt-1">{indexNode}</div>
        <div className="flex min-w-0 flex-col">{children}</div>
      </article>
    );
  }

  return (
    <article
      className={cn('group flex gap-6 border-b border-[var(--rule)] py-8 md:gap-10', className)}
    >
      <div className="w-14 shrink-0 self-start pt-1 md:w-20">{indexNode}</div>
      <div className="flex min-w-0 flex-1 flex-col">{children}</div>
    </article>
  );
};
