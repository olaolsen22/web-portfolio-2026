import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { NAV_LINKS } from '@/constants/nav';
import { NavLink } from '@/components/ui/typography';
import type { TranslationKey } from '@/content';

interface NavDesktopProps {
  t: (key: TranslationKey) => string;
}

export const NavDesktop = ({ t }: NavDesktopProps) => (
  <nav className="hidden md:flex" aria-label="Primary navigation">
    <NavigationMenu>
      <NavigationMenuList>
        {NAV_LINKS.map(({ key, href }) => (
          <NavigationMenuItem key={href}>
            <NavigationMenuLink
              href={href}
              className="group/navlink px-3 py-2 transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <NavLink className="transition-colors can-hover:group-hover/navlink:text-foreground">
                {t(key)}
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  </nav>
);
