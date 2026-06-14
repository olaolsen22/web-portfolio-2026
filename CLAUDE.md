# CLAUDE.md — Portfolio 2026

Navigation guide for Claude Code. Read this before scanning the codebase.

---

## Tech Stack

| Package                  | Version | Notes                              |
| ------------------------ | ------- | ---------------------------------- |
| React                    | 18.3.x  |                                    |
| TypeScript               | 5.6.x   |                                    |
| Vite                     | 5.4.x   |                                    |
| pnpm                     | 11.x    |                                    |
| Tailwind CSS             | 3.4.x   | `darkMode: 'class'`                |
| shadcn/ui                | CLI     | components in `src/components/ui/` |
| class-variance-authority | 0.7.x   | component variant management       |
| lucide-react             | 1.17.x  | icon library                       |
| motion                   | 11.x    | formerly framer-motion, same API   |
| TanStack Query           | 5.x     |                                    |
| Vitest                   | 1.6.x   |                                    |
| Storybook                | 8.x     |                                    |

---

## General Rules

- **Component reuse**: Always check existing components and Tailwind tokens before building anything new. If a component doesn't exist, ask the user whether it will be reused — weigh building from scratch vs installing a shadcn/Radix UI component.
- **Theming**: Rely on Tailwind theme tokens (`text-foreground`, `bg-background`, `bg-card`, `text-muted-foreground`, etc.) — these handle light/dark mode automatically. Never hardcode hex/rgb color values. If a color doesn't exist as a token, check `globals.css` for an existing CSS variable first.
- **Responsive**: Mobile-first. Verify across all 3 tiers (mobile, tablet, desktop). See Responsive Design section.
- **Hover effects**: Use `can-hover:hover:` variant for hover states — this prevents sticky hover on touch devices. Never use plain `hover:` for visual state changes.
- **Styling values**: Use Tailwind native/custom values over exact pixels (design says 35px → use `2rem` for spacing consistency).
- **Tests**: Update test files when components are added or removed. Don't rewrite existing tests unless necessary.
- **Packages**: Check installed packages before coding from scratch. Ask user before installing new ones. Weigh build-vs-install effort.
- **Performance**: Weigh performance costs, especially for animations. Prefer GPU-accelerated CSS (`transform`, `opacity`) over layout-triggering properties. On older/lower-end devices, simpler CSS transitions may be better than heavy motion library animations.
- **Storybook**: Stories only for reusable/base components (Button, Badge, typography variants, etc.). Not for every component.
- **Icons**: Prioritize lucide-react first. If an icon doesn't exist (e.g., brand logos), weigh custom SVG vs a specialized icon package. Ask user.
- **shadcn/Radix**: Check if shadcn has the component first, then use Tailwind to customize it. Follow the default shadcn documentation code first, then remove unneeded parts. Structure over hacky code.

---

## Reusable Components — Check Before Building

### Typography (`src/components/ui/typography.tsx`)

Pre-styled components with custom Tailwind font sizes. Use these instead of raw heading/text elements.

| Component                      | Use for                                        |
| ------------------------------ | ---------------------------------------------- |
| H1                             | Hero headline (display-hero size)              |
| H2                             | Section headings                               |
| H2Display                      | Large decorative section headings (h2-display) |
| H3                             | Sub-headings                                   |
| P                              | Body paragraphs                                |
| Lead                           | Hero bio / larger body text                    |
| Muted                          | De-emphasized italic text                      |
| Label                          | Uppercase brand-colored labels                 |
| Small                          | Small muted text                               |
| NavLogo                        | Header logo text                               |
| NavLink / NavLinkMobile        | Navigation links (desktop / mobile)            |
| Pill                           | Uppercase pill-style text                      |
| ToolkitCategory / ToolkitSkill | Tech stack display                             |

### UI Primitives (`src/components/ui/`)

| Component      | Details                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------- |
| Button         | CVA variants: default, destructive, outline, secondary, ghost, link. Sizes: default, sm, lg, icon |
| Badge          | CVA variants: default, secondary, destructive, outline, glass, stack                              |
| Card           | CardHeader, CardTitle, CardDescription, CardContent, CardFooter                                   |
| Dialog         | Radix UI modal with overlay, close button                                                         |
| NavigationMenu | Radix UI nav with trigger/content                                                                 |

If a needed component doesn't exist: ask user if it will be reused. If yes → install shadcn/Radix component. If one-off → build inline with Tailwind.

### Composite Components (`src/components/ui/`)

| Component     | Details                                                                     |
| ------------- | --------------------------------------------------------------------------- |
| SectionHeader | Label + title + description with FadeIn animation                           |
| PageSection   | Full-width section wrapper (min-height viewport, optional border)           |
| IndexedCard   | Numbered card with two-digit index and aside slot                           |
| LazyImage     | Lazy-loading image with blur-in, loading/error states, reduced-motion aware |

### Animation Wrappers (`src/components/animations/`)

| Wrapper         | Effect                                                     |
| --------------- | ---------------------------------------------------------- |
| FadeIn          | Opacity + Y-axis entrance                                  |
| SlideIn         | Directional slide (left/right/up/down)                     |
| ScaleIn         | Scale 0.95→1 + opacity                                     |
| ScrollReveal    | Scroll-triggered, fires once                               |
| StaggerChildren | Container with staggered children (exports `itemVariants`) |
| DrawerReveal    | Drawer-style reveal with AnimatePresence                   |

All animation wrappers respect `useReducedMotion()`. If reduced → render instantly.

### Icons

- **lucide-react** — standard icons (X, Mail, Moon, Sun, ArrowDown, ExternalLink, Pause, Play, etc.)
- **`src/components/icons/BrandIcons.tsx`** — custom SVGs (GitHubIcon)

---

## Custom Tailwind Tokens

### Font Sizes (responsive clamp)

Already wired into Typography components — prefer using Typography components over these classes directly.

`text-display-hero` · `text-display-hero-lg` · `text-display-hero-sub` · `text-display-hero-sub-lg` · `text-h2-display` · `text-h2-display-lg` · `text-hero-bio-lg` · `text-nav-mobile-text`

### Custom Colors

Light/dark aware via CSS vars — handled automatically by Tailwind theme.

| Token        | Purpose                       |
| ------------ | ----------------------------- |
| `brand`      | Accent/CTA (#10b981)          |
| `brand-dark` | Darker accent (#059669)       |
| `border-mid` | Medium-weight borders         |
| `rule`       | Subtle divider lines          |
| `surface`    | Glass/translucent backgrounds |
| `faint`      | De-emphasized text            |

### CSS Variables (globals.css)

Switch automatically between light/dark: `--brand`, `--brand-glow`, `--surface`, `--surface-solid`, `--faint`, `--bg2`, `--border-mid`, `--rule`, `--nav-bg`, `--menu-bg`

### Fonts

- **Primary**: Plus Jakarta Sans Variable (`font-sans`) — imported via `@fontsource-variable/plus-jakarta-sans`
- **Monospace**: Geist Mono Variable (`font-mono`) — imported via `@fontsource-variable/geist-mono`
- NOT Google Fonts.

---

## Hooks & Context

| Hook                       | Returns                                          |
| -------------------------- | ------------------------------------------------ |
| `useLanguage()`            | lang, setLang, t() for translations              |
| `useDarkMode()`            | isDark, toggle()                                 |
| `useReducedMotion()`       | motionAllowed, hasOSReduction, setUserPref       |
| `useReducedTransparency()` | transparencyAllowed, hasOSReduction, setUserPref |
| `useGitHubRepos()`         | React Query hook for GitHub repos                |
| `useSiteTitle()`           | Sets document.title from translations reactively |

**Providers** (in App.tsx): `LanguageProvider` → `MotionProvider` → app content

---

## Where to Find Things

| What                                          | Where                                                              |
| --------------------------------------------- | ------------------------------------------------------------------ |
| Translations (EN/NB)                          | `src/content/translations/`                                        |
| Translation key type                          | `src/content/index.ts` → `TranslationKey`                          |
| All text, content, and data                   | `src/content/` (journeyItems, selectedWorkItems, techStackSkills)  |
| External URLs (GitHub, LinkedIn, email)       | `src/constants/links.ts`                                           |
| Nav link definitions                          | `src/constants/nav.ts`                                             |
| CSS custom properties / shadcn tokens         | `src/styles/globals.css`                                           |
| Breakpoints (single source of truth)          | `src/utils/breakpoints.ts`                                         |
| Animation config (durations, easing, stagger) | `src/utils/animationConfig.ts`                                     |
| `cn()` class utility                          | `src/utils/cn.ts`                                                  |
| shadcn components                             | `src/components/ui/`                                               |
| Animation wrappers                            | `src/components/animations/`                                       |
| Page sections                                 | `src/components/sections/`                                         |
| Custom hooks                                  | `src/hooks/`                                                       |
| Context providers                             | `src/context/LanguageContext.tsx`, `src/context/MotionContext.tsx` |
| Icon components                               | `src/components/icons/BrandIcons.tsx`                              |
| GitHub API types                              | `src/types/github.ts`                                              |

---

## Bug Fix Workflow

1. **Analyze target file only.** Check existing Tailwind variables/tokens first.
2. **If multi-component**: check siblings and parent components before going deeper in the codebase.
3. **Apply fixes.**
4. **Verify** — run through the General Rules checklist above (responsiveness, theming, tests, hover, accessibility, etc.).

---

## Styling Decision Tree

1. **shadcn/Radix UI** — does the component exist? Use it.
2. **Tailwind utilities** to customize — layout, spacing, color, typography, responsive.

---

## Code Style

- **Arrow functions only** — use `const Foo = () => {}` for all functions and components. Never `function foo() {}`.

---

## Animation Rules

- **Only animate `transform` and `opacity`** — GPU-composited, no layout recalc.
- Never animate: `width`, `height`, `top`, `left`, `margin`, `padding`, `background-color`.
- Use `will-change: transform` on elements that animate repeatedly.
- CSS `transition`/`@keyframes` → hover states, color changes.
- `motion` wrappers → mount/unmount, scroll-triggered, staggered, layout animations.
- All wrappers check `useReducedMotion().motionAllowed`. If false → render instantly, no animation.
- On older/lower-end devices, prefer simple CSS transitions over motion library animations when possible.

---

## Responsive Design

**3-tier layout model:**

| Tier    | Breakpoint        | Devices                                       |
| ------- | ----------------- | --------------------------------------------- |
| Mobile  | default (< 768px) | All phones (small and large treated the same) |
| Tablet  | `md:` (768px+)    | Tablet portrait, foldables unfolded           |
| Desktop | `lg:` (1024px+)   | Tablet landscape, laptops, desktops           |

- **Mobile-first**: base styles are mobile. Add `md:` for tablet, `lg:` for desktop.
- Layout decisions (columns, grid changes) happen at these 3 tiers only.
- Fine-tuning breakpoints (`xs`, `sm`, `xl`, `2xl`) exist for small adjustments (padding, font tweaks) — NOT for structural layout changes.
- Layouts must be fluid between breakpoints — use `clamp()`, flex, grid.
- Container max: 1152px (configured in tailwind.config.ts).
- **Hover**: Use `can-hover:hover:` — applies hover only on devices with mouse/trackpad.
- Always verify at mobile, tablet portrait, and desktop widths.

---

## Commit Format

```
<type>(<scope>): <short description>
```

- Types: `feat` | `fix` | `chore` | `docs` | `style` | `refactor` | `perf` | `test` | `build` | `ci`
- **Simple one-line commits. No co-authored-by.**
- Commits should follow development story order (dependencies first, then dependents).
- Understand WHY the code changed — don't describe literal changes.
- Ask user if the purpose of changes is vague.

---

## Testing

- Surface-level: ensure main functionality works.
- Update test files when components are added or removed.
- Don't rewrite existing tests unless necessary.
- Co-locate tests: `ComponentName/ComponentName.tsx` + `ComponentName.test.tsx`.
- **Always run the full test suite (`pnpm test --run`) after all changes are finished** — never skip this step.

---

## Known Gotchas

- **Tailwind v3**: use `@tailwind base/components/utilities` directives — NOT v4 `@import "tailwindcss"`.
- **shadcn CSS vars**: `--background`, `--foreground`, `--primary`, etc. — check `globals.css` before adding new vars.
- **Fonts**: Plus Jakarta Sans Variable (primary) and Geist Mono Variable (monospace) — imported via `@fontsource-variable`, NOT Google Fonts.
- **`dark:` class**: requires `darkMode: 'class'` in `tailwind.config.ts` (already set).
- **pnpm 11**: project config lives in `pnpm.yaml`, not `package.json`'s `pnpm` field.
- **Android reduced motion/transparency**: `MotionContext` sets `data-motion-reduced` / `data-transparency-reduced` on `<html>` — CSS and JS both read these for consistent behaviour across platforms.
- **Section backgrounds**: always fully opaque — ignore transparency preference.
- **`tailwind.config.ts`**: imports `breakpoints.ts` directly — must build before Tailwind can resolve it.
- **`can-hover:` variant**: custom Tailwind variant for `@media (hover: hover)` — use `can-hover:hover:` instead of plain `hover:` for visual state changes.

---

## Accessibility & Privacy

See [WCAG.md](WCAG.md) for Norwegian accessibility (UU-tilsynet) and privacy/GDPR requirements.
