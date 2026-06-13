import { useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Button } from '@/components/ui/button';
import { techStackSkills } from '@/content/techStackSkills';
import { Marquee } from './Marquee';
import { TechStackStatic } from './TechStackStatic';

export const TechStackMarquee = () => {
  const { t } = useLanguage();
  const { motionAllowed } = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);

  const toggle = () => setIsPaused((p) => !p);
  const showStatic = !motionAllowed || isPaused;

  return (
    <section
      aria-label={t('techStack.label')}
      className="w-full border-t border-b border-[var(--rule)] py-4"
    >
      <div className="mx-auto max-w-[1920px] px-6 md:px-12 lg:px-20">
        <div className={`flex items-center`}>
          <div className="min-w-0 flex-1">
            {showStatic ? <TechStackStatic /> : <Marquee skills={techStackSkills} />}
          </div>

          {motionAllowed && (
            <div className="shrink-0 pl-4">
              <Button variant="ghost" size="sm" onClick={toggle} aria-pressed={isPaused}>
                {isPaused ? (
                  <Play size={13} aria-hidden="true" className="shrink-0" />
                ) : (
                  <Pause size={13} aria-hidden="true" className="shrink-0" />
                )}
                <span className="hidden sm:inline">
                  {isPaused ? t('techStack.play') : t('techStack.pause')}
                </span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
