# WCAG.md — Norwegian Accessibility & Privacy Requirements

This document covers accessibility and privacy standards for this portfolio. While a personal portfolio may not fall under the strict legal scope of Norway's ICT accessibility regulations, this project voluntarily targets WCAG 2.1 AA as a demonstration of professional competence and best practice.

---

## Norwegian Accessibility Context

**UU-tilsynet** (Tilsynet for universell utforming av IKT) is the Norwegian authority enforcing universal design of ICT under **§ 18 of the Likestillings- og diskrimineringsloven** (Equality and Anti-Discrimination Act).

### Who the law applies to

The regulations apply to **businesses, organisations, and public sector bodies** whose websites, apps, or self-service machines serve as a primary channel for users. Personal portfolio sites are generally **not within scope**, as the law targets ICT solutions that underpin the general functions of a business.

### Legal standards by sector

- **Private sector**: WCAG 2.0 AA (35 success criteria), with exceptions for 1.2.3 (Audio Description or Media Alternative), 1.2.4 (Captions — Live), and 1.2.5 (Audio Description — Prerecorded).
- **Public sector** (since February 2023): WCAG 2.1 AA, aligned with the EU Web Accessibility Directive. Stricter requirements including accessibility statements.

Norway does **not** require full EN 301 549 compliance the way the EU does — only chapters 9 (Web), 10 (Non-web documents), and parts of chapter 11 apply.

### European Accessibility Act (EAA)

The EAA (Directive (EU) 2019/882) applies to Norway through the EEA agreement. Enforcement began **28 June 2025**. It extends accessibility obligations further into the private sector, covering e-commerce, banking, transport, telecoms, and other digital services. The technical standard is EN 301 549, which incorporates WCAG 2.1 Level AA.

### Why this project targets WCAG 2.1 AA

Even though a personal portfolio falls outside the legal scope, targeting WCAG 2.1 AA:

- Demonstrates understanding of Norwegian accessibility law and standards to potential employers.
- Aligns with the direction of both Norwegian and EU regulation.
- Ensures the site is usable by everyone, which is the right thing to do regardless of legal obligation.

---

## WCAG 2.1 AA — Implementation Requirements

All new and changed code must meet these requirements:

- **Semantic HTML**: use `<main>`, `<nav>`, `<header>`, `<footer>`, `<section>` — not generic `<div>`s for structural elements.
- **Language attribute**: `<html lang>` must update when the language toggle switches between EN/NB.
- **Contrast**: ≥4.5:1 for body text, ≥3:1 for large text (≥18pt or ≥14pt bold).
- **Focus indicators**: visible focus ring on all interactive elements. Never remove `outline` without providing an alternative.
- **Alt text**: required on all `<img>` elements. Decorative images use `alt=""`.
- **Keyboard navigation**: all interactive elements must be reachable and operable via keyboard only. Tab order must be logical.
- **Skip-to-content**: already implemented via `SkipLink` component (`src/components/SkipLink/`).
- **Font sizes**: always in `rem` — never `px` for text. Users must be able to scale text.
- **ARIA**: Radix UI (via shadcn) handles focus trapping, ARIA attributes, and keyboard nav for Dialog, NavigationMenu, and other interactive primitives. Don't override these unless necessary.
- **Reduced motion**: all animations must respect `useReducedMotion()`. If motion is reduced, render content instantly without animation.

---

## When to Apply

- **Required** for all new code and modified components.
- Can also be asked to **audit existing components** for compliance.
- When in doubt, err on the side of accessibility.

---

## Privacy & Data Regulation

Norwegian law applies GDPR through the EEA agreement and the **Personopplysningsloven** (Personal Data Act). The supervisory authority is **Datatilsynet** (Norwegian Data Protection Authority).

### Current Site Privacy Status

- **No personal data collected** — no cookies, trackers, or analytics scripts.
- **No forms** — no user input is collected.
- Theme and language preferences are saved in `localStorage` — never transmitted to any server.

### Hosting (Netlify)

- Netlify automatically collects standard access logs (IP addresses, browser type, timestamps, HTTP codes).
- Log retention: less than 30 days.
- Legal basis: legitimate interest for operating a hosted website.

### Privacy Notice

- Implemented in the footer via `PrivacyNoticeModal` (`src/components/sections/Footer/PrivacyNoticeModal.tsx`).
- Covers: what the site collects, Netlify's role, GDPR rights, Datatilsynet reference, contact info.

### If Adding New Data Collection

If analytics, forms, contact features, or any data collection is added in the future:

1. Update `PrivacyNoticeModal` with details of what is collected and why.
2. Ensure GDPR compliance — lawful basis, data minimization, user rights.
3. Consider whether a cookie banner or consent mechanism is required.
4. Check Datatilsynet guidelines for the specific data type.
