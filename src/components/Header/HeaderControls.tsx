import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      variant="outline"
      size="icon"
      onClick={toggleLang}
      aria-label={lang === 'en' ? 'Switch to Norwegian' : 'Switch to English'}
    >
      <span className="text-xs font-semibold">{lang === 'en' ? 'NO' : 'EN'}</span>
    </Button>

    <Button
      variant="outline"
      size="icon"
      onClick={toggleDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>

    <Button
      variant="outline"
      size="icon"
      className="md:hidden"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-expanded={menuOpen}
      aria-controls="mobile-menu"
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
    >
      {menuOpen ? <X /> : <Menu />}
    </Button>
  </div>
);
