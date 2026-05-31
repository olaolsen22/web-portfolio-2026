import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils';

interface HeaderControlsProps {
  lang: 'en' | 'nb';
  toggleLang: () => void;
  isDark: boolean;
  toggleDark: () => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export const HeaderControls = ({
  lang,
  toggleLang,
  isDark,
  toggleDark,
  menuOpen,
  setMenuOpen,
}: HeaderControlsProps) => (
  <div className="flex items-center justify-end gap-2">
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLang}
      aria-label={lang === 'en' ? 'Switch to Norwegian' : 'Switch to English'}
    >
      <span className="text-[0.8rem] font-semibold">{lang === 'en' ? 'NO' : 'EN'}</span>
    </Button>

    <Button
      variant="ghost"
      size="icon"
      onClick={toggleDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>

    <Button
      variant="ghost"
      size="icon"
      className="md:hidden"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-expanded={menuOpen}
      aria-controls="mobile-menu"
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
    >
      <span className="relative block h-[10px] w-4" aria-hidden="true">
        <span
          className={cn(
            'absolute left-0 h-[2px] w-full bg-current transition-[top,transform] duration-300',
            menuOpen ? 'top-[4px] rotate-45' : 'top-0'
          )}
        />
        <span
          className={cn(
            'absolute left-0 top-[4px] h-[2px] w-full bg-current transition-opacity duration-200',
            menuOpen ? 'opacity-0' : 'opacity-100'
          )}
        />
        <span
          className={cn(
            'absolute left-0 h-[2px] w-full bg-current transition-[top,transform] duration-300',
            menuOpen ? 'top-[4px] -rotate-45' : 'top-[8px]'
          )}
        />
      </span>
    </Button>
  </div>
);
