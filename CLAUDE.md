# CLAUDE.md — Portfolio 2026

Navigation guide for Claude Code. Read this before scanning the codebase.

---

## Tech Stack

| Package           | Version | Notes                              |
| ----------------- | ------- | ---------------------------------- |
| React             | 18.3.x  |                                    |
| TypeScript        | 5.6.x   |                                    |
| Vite              | 5.4.x   |                                    |
| pnpm              | 11.x    |                                    |
| Tailwind CSS      | 3.4.x   | `darkMode: 'class'`                |
| shadcn/ui         | CLI     | components in `src/components/ui/` |
| styled-components | 6.x     | JS-driven dynamic styles only      |
| motion            | 11.x    | formerly framer-motion, same API   |
| TanStack Query    | 5.x     |                                    |
| Vitest            | 1.6.x   |                                    |
| Storybook         | 8.x     |                                    |

---

## Where to Find Things

| What                                          | Where                                     |
| --------------------------------------------- | ----------------------------------------- |
| Translations (EN/NB)                          | `src/content/translations/`               |
| Translation key type                          | `src/content/index.ts` → `TranslationKey` |
| CSS custom properties / shadcn tokens         | `src/styles/globals.css`                  |
| Breakpoints (single source of truth)          | `src/utils/breakpoints.ts`                |
| Animation config (durations, easing, stagger) | `src/utils/animationConfig.ts`            |
| `cn()` class utility                          | `src/utils/cn.ts`                         |
| shadcn components                             | `src/components/ui/`                      |
| Animation wrappers                            | `src/components/animations/`              |
| Page sections                                 | `src/components/sections/`                |
| Custom hooks                                  | `src/hooks/`                              |
| GitHub API types                              | `src/types/github.ts`                     |
| SC theme (derives from CSS vars)              | `src/styles/theme.ts`                     |

---

## Key Commands

```bash
pnpm dev            # start dev server
pnpm build          # TypeScript check + Vite build
pnpm test           # Vitest watch mode
pnpm test:run       # Vitest single run
pnpm coverage       # coverage report
pnpm lint           # ESLint (0 warnings allowed)
pnpm format         # Prettier over src/
pnpm storybook      # Storybook dev server on :6006
pnpm build-storybook
```

---

## Code Style

- **Arrow functions only** — use `const Foo = () => {}` for all functions and components. Never `function foo() {}`.

---

## Styling Decision Tree

1. **Tailwind utilities** — layout, spacing, color, typography, responsive. Always first.
2. **shadcn/ui components** — check shadcn before writing any accessible interactive component.
3. **styled-components** — ONLY for CSS values that are JS variables changing at runtime. Never for static or responsive styles.

**Check before building:** does shadcn have it? Does Radix UI have it? Use it, don't rebuild.

---

## Animation Rules

- **Only animate `transform` and `opacity`** — GPU-composited, no layout recalc.
- Never animate: `width`, `height`, `top`, `left`, `margin`, `padding`, `background-color`.
- Use `will-change: transform` on elements that animate repeatedly.
- CSS `transition`/`@keyframes` → hover states, color changes.
- `motion` wrappers → mount/unmount, scroll-triggered, staggered, layout animations.
- All wrappers check `useReducedMotion().motionAllowed`. If false → render instantly, no animation.

---

## Testing Rules

- **Every component file must have a `.test.tsx`.**
- Minimum: renders without crashing + axe a11y check.
- Co-locate tests: `ComponentName/ComponentName.tsx` + `ComponentName.test.tsx` + `ComponentName.stories.tsx`.

```ts
import { axe } from 'vitest-axe';
it('has no a11y violations', async () => {
  const { container } = render(<Component />);
  expect(await axe(container)).toHaveNoViolations();
});
```

---

## Commit Format

```
<type>(<scope>): <short description>
```

Types: `feat` | `fix` | `chore` | `docs` | `style` | `refactor` | `perf` | `test` | `build` | `ci`

---

## WCAG (Mandatory — Norwegian law)

- Semantic HTML (`<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`)
- `<html lang>` updates with language toggle
- Contrast: ≥4.5:1 body, ≥3:1 large text
- Visible focus on all interactive elements
- `alt` on all images
- Full keyboard nav
- Skip-to-content link at top
- All font sizes in `rem`
- Radix UI (via shadcn) handles focus trapping, ARIA, keyboard nav

---

## Known Gotchas

- **Tailwind v3**: use `@tailwind base/components/utilities` directives — NOT v4 `@import "tailwindcss"`.
- **shadcn CSS vars**: `--background`, `--foreground`, `--primary`, etc. — check before adding new vars.
- **Geist font**: imported via `@fontsource-variable/geist`, NOT Google Fonts.
- **`dark:` class**: requires `darkMode: 'class'` in `tailwind.config.ts` (already set).
- **pnpm 11**: project config lives in `pnpm.yaml`, not `package.json`'s `pnpm` field.
- **Android reduced motion/transparency**: behavior unconfirmed — test manually on device.
- **Section backgrounds**: always fully opaque — ignore transparency preference.
- **`tailwind.config.ts`**: imports `breakpoints.ts` directly — must build before Tailwind can resolve it.
