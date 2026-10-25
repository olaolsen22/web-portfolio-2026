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

- **No cookies.**
- **Analytics (Umami) in two tiers** — see below. Only the consented tier touches the device.
- **No forms** — no user input is collected.
- Theme, language and analytics-consent choices are saved in `localStorage` — never transmitted to any server. Storing them is strictly necessary for features the visitor asked for, so it needs no consent.

### Scope: why the rules apply to a personal portfolio

- **GDPR applies.** The household exemption (Art. 2(2)(c)) doesn't cover a public website (CJEU _Lindqvist_ C-101/01, _Jehovah's Witnesses_ C-25/17) or anything with a professional purpose (Recital 18) — a portfolio is both. The site owner is the data controller.
- **Ekomloven § 3-15 applies.** It forbids _anyone_ from storing or reading information on a visitor's device without information and consent. It's technology-neutral (not just cookies), and its only exemptions are pure transmission and what is strictly necessary for a service the visitor asked for. There is no exemption for private, non-commercial or small sites, and no audience-measurement exemption (the EU Digital Omnibus Art. 88a proposal would add one, but isn't adopted or incorporated into the EEA). Supervision is shared: Nkom (scope/exemptions) and Datatilsynet (information/consent quality).

### Analytics (Umami)

- **Provider**: Umami Cloud (Hobby plan), EU data region, retained 6 months. Umami Software, Inc. is US-based and uses US subprocessors; its DPA (accepted on account creation) incorporates the EU SCCs.
- **Tier 1 — visit statistics, no consent**: `netlify/edge-functions/pageview/` sends one page view per page load from the server, using only what the browser sends with the request — URL (incl. query string), `Referer`, `User-Agent` (browser/OS/device), `Accept-Language`, and Netlify's IP-based country/region/city. Nothing runs on or reads from the device, so § 3-15 doesn't apply. Legal basis: legitimate interest (GDPR Art. 6(1)(f)).
- **Tier 2 — detailed statistics, consent only**: after the visitor clicks "Allow" in `AnalyticsConsentPrompt`, `src/utils/analytics.ts` loads Umami's script (`data-auto-track="false"`, since tier 1 already counted the page view). It sends section views (`view-*`, `useSectionViewTracking`) and link clicks (`click-*`); the script also reads screen size and language. Legal basis: consent (GDPR Art. 6(1)(a)).
- **Consent UI**: "Allow" and "No Thanks" use the same button variant so declining is as easy as accepting. The choice is stored in `localStorage` (`analytics-consent`), and can be changed any time in the privacy notice. Nothing in tier 2 runs before consent.
- **Proxy**: tier 2 is served first-party via `/_v/script.js` (rewrite in `netlify.toml`) and `/_v/api/send` (`netlify/edge-functions/analytics-proxy/`). Both edge functions forward only allowlisted headers and pass the visitor's IP and Netlify-derived location via Umami's `x-umami-client-*` headers (`netlify/shared/umami.ts`). Umami uses the IP for its visitor hash and doesn't store it in analytics records (it may appear in Umami's operational logs).
- **Opt-out**: Do Not Track and Global Privacy Control are respected in both tiers — the edge function skips the page view, the consent prompt is never shown and the script never loads. This doubles as the Art. 21 right to object for tier 1.
- **Production only**: tier 1 checks `context.deploy.context === 'production'`; tier 2 needs `VITE_UMAMI_WEBSITE_ID`, set in `netlify.toml` for the production context only. Local dev and deploy previews send nothing.
- **Accuracy**: country is reliable; city is approximate (mobile networks often resolve to Oslo, VPNs/corporate networks to their exit point). There is no kommune field — the city name often, but not always, matches it.

### Hosting (Netlify)

- Netlify automatically collects standard access logs (IP addresses, browser type, timestamps, HTTP codes).
- Log retention: less than 30 days.
- Legal basis: legitimate interest for operating a hosted website.

### Privacy Notice

- Implemented in the footer via `PrivacyNoticeModal` (`src/components/sections/Footer/PrivacyNoticeModal.tsx`).
- Covers: what the site collects, visit statistics and detailed statistics (Umami, with the consent control), Netlify's role, US transfers, GDPR rights, Datatilsynet reference, and the data controller's name and contact info (GDPR Art. 13).
- Don't describe the statistics as "anonymous" — the visitor hash and city-level location make them pseudonymous under GDPR.

### If Adding New Data Collection

If analytics, forms, contact features, or any data collection is added in the future:

1. Update `PrivacyNoticeModal` with details of what is collected and why.
2. Ensure GDPR compliance — lawful basis, data minimization, user rights.
3. Consider whether a cookie banner or consent mechanism is required.
4. Check Datatilsynet guidelines for the specific data type.
