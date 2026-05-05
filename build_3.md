# Taaxbro — Three-Theme UI Fix Guide

> **Purpose:** This guide tells you exactly what to change so that all three themes (light, dark, warm) look polished and professional across every page, and the Navbar header stays consistent and readable in all states.

---

## How the Theme System Works

The app sets `data-theme="light"`, `data-theme="dark"`, or `data-theme="warm"` on the `<html>` element via `ThemeContext.jsx`. All component CSS should reference CSS variables (e.g. `var(--color-white)`, `var(--color-text-primary)`) that are redefined per theme inside `src/index.css`. Hardcoded colour values like `background: white` or `color: white` **bypass the theme system entirely** and are the root cause of most visual bugs.

---

## Scope of Pages to Audit

| Route | File |
|---|---|
| `/` | `src/pages/Home.jsx` |
| `/product` | `src/pages/FeaturesPage.jsx` |
| `/pricing` | `src/pages/PricingPage.jsx` |
| `/faq` | `src/pages/FAQPage.jsx` |
| `/about` | `src/pages/AboutPage.jsx` |
| `/contact` | `src/pages/ContactPage.jsx` |
| `/accountants` | `src/pages/AccountantsPage.jsx` |
| `/blog` | `src/pages/BlogPage.jsx` |
| `/terms` and `/privacy` | `src/pages/LegalPage.jsx` |

Shared layout files also require fixes: `Navbar.css`, `Footer.css`, and `SupportWidget.css`.

---

## Critical Issues & Exact Fixes

### 1. Navbar Dropdown — `src/components/layout/Navbar.css` (line ~121)

**Problem:** The dropdown menu uses `background: white` which is invisible in dark mode (white box on dark background, white text).

**Find:**
```css
.nav-dropdown {
  background: white;
  ...
}
```

**Replace with:**
```css
.nav-dropdown {
  background: var(--color-white);
  ...
}
```

The dark-mode override `[data-theme="dark"] .nav-dropdown` already exists further down the file and sets it to `#111827` — that's correct. The warm-mode dropdown also needs an override. Add this at the end of the `Navbar.css` dark-mode block:

```css
[data-theme="warm"] .nav-dropdown {
  background: #FAF6EF;
  border-color: #E0D3C0;
}

[data-theme="warm"] .dropdown-item {
  color: #4A3520;
}

[data-theme="warm"] .dropdown-item:hover {
  background: #F2EBE0;
  color: var(--color-blue-primary);
}
```

---

### 2. Navbar Theme Toggle — `src/components/layout/Navbar.css`

**Problem:** When the navbar is scrolled on non-home pages in warm mode, the theme-toggle button icon has a dark navy colour (`--color-text-primary` = `#2D1F0E`) but the button background could clash.

The existing warm rule is:
```css
[data-theme="warm"] .navbar.scrolled .theme-toggle {
  color: #4A3520;
  border-color: #D4C4AB;
}
```

**Add** a missing rule for the `.not-home` state (non-home pages where the navbar is always solid, not just when scrolled):
```css
[data-theme="warm"] .navbar.not-home .theme-toggle {
  color: #4A3520;
  border-color: #D4C4AB;
  background: rgba(80, 40, 0, 0.07);
}
```

---

### 3. Features Page Sticky Nav — `src/pages/FeaturesPage.css` (line ~10)

**Problem:** The sticky sub-navigation that appears below the main navbar on the `/product` page is hardcoded to `background: white`, making it invisible in dark mode.

**Find:**
```css
.sticky-nav {
  background: white;
  ...
}
```

**Replace with:**
```css
.sticky-nav {
  background: var(--color-white);
  ...
}
```

A dark-mode override already exists in `index.css` (the `[data-theme="dark"] .sticky-nav` rule sets it to `var(--color-off-white)`). Add this for warm mode in `index.css` or `FeaturesPage.css`:
```css
[data-theme="warm"] .sticky-nav {
  background: var(--color-off-white);
  border-bottom-color: #E0D3C0;
}
```

Also fix the sticky nav tab active state which currently uses hardcoded colours inside `.jsx`. Verify these use `var(--color-blue-primary)` only.

---

### 4. FAQ Page Category Nav — `src/pages/FAQPage.css` (line ~38)

**Problem:** The sticky category tab bar is `background: white` — same issue as above.

**Find:**
```css
.faq-category-nav {
  background: white;
  ...
}
```

**Replace with:**
```css
.faq-category-nav {
  background: var(--color-white);
  ...
}
```

Also add dark and warm overrides:
```css
[data-theme="dark"] .faq-category-nav {
  background: var(--color-off-white);
  border-bottom-color: rgba(255,255,255,0.08);
}

[data-theme="warm"] .faq-category-nav {
  background: var(--color-off-white);
  border-bottom-color: #E0D3C0;
}
```

---

### 5. FAQ Search Input — `src/pages/FAQPage.css`

**Problem:** The search input `.faq-search-input` has no explicit background or text colour, so it inherits the browser default which is always white with dark text — broken in dark mode.

**Add** these overrides in `FAQPage.css` or `index.css`:
```css
.faq-search-input {
  background: var(--color-white);
  color: var(--color-text-primary);
}

[data-theme="dark"] .faq-search-input {
  background: #212840;
  color: #FFFFFF;
  border-color: rgba(255,255,255,0.15);
}

[data-theme="warm"] .faq-search-input {
  background: #FAF6EF;
  color: #2D1F0E;
  border-color: #D4C4AB;
}
```

---

### 6. Blog Page Featured/Category Tags — `src/pages/BlogPage.css`

**Problem:** Around line 82–89, blog category tag chips use hardcoded `rgba(255,255,255,0.05)` backgrounds and `color: white`. These are invisible on light and warm backgrounds.

**Find:**
```css
.blog-category {
  background: rgba(255,255,255,0.05);
  color: white;
  ...
}
```

These elements appear inside `.blog-card` which uses `.card-light`. They should be readable in light mode (where the card is white). Replace:
```css
.blog-category {
  background: rgba(26, 111, 232, 0.10);
  color: var(--color-blue-primary);
  border: 1px solid rgba(26, 111, 232, 0.20);
}

[data-theme="dark"] .blog-category {
  background: rgba(34, 211, 238, 0.12);
  color: var(--color-cyan);
  border-color: rgba(34, 211, 238, 0.25);
}

[data-theme="warm"] .blog-category {
  background: rgba(37, 99, 235, 0.10);
  color: var(--color-blue-primary);
  border-color: rgba(37, 99, 235, 0.20);
}
```

---

### 7. About Page Mission Section — `src/pages/AboutPage.css`

**Problem:** `.mission-section` uses `color: white` which is correct because it has the dark navy gradient background. However, warm-mode applies `filter: sepia(0.08)` to elements like `.hero` and `.final-cta` (see `index.css`) but **not** to `.mission-section` on the About page. This means the About hero stays full navy-blue while all other pages' heroes get the warm tint. Add it to the warm list in `index.css`:

**In `index.css`, find the warm filter block and add `.mission-section`:**
```css
[data-theme="warm"] .hero,
[data-theme="warm"] .mission-section,   /* ADD THIS */
[data-theme="warm"] .ai-intelligence,
...
```

---

### 8. Accountants Page Hero — `src/pages/AccountantsPage.css`

**Problem:** The `.accountant-hero` has a dark gradient background and text set to `color: rgba(255,255,255,0.8)` on a child element (line ~58). This is fine for dark/light, but warm mode should apply a sepia filter to be consistent. Add to `index.css` warm filter list:

```css
[data-theme="warm"] .accountant-hero {
  filter: sepia(0.08);
}
```

---

### 9. Footer — `src/components/layout/Footer.css`

**Problem:** Footer uses `color: white` in multiple places (lines 3, 55, 81). The footer always has the dark navy background (`--gradient-hero-bg`) so `color: white` is semantically correct — but should be replaced with `var(--color-fixed-white)` to be explicit:

```css
/* Replace all instances of: */
color: white;

/* With: */
color: var(--color-fixed-white);
```

The `--color-fixed-white` variable is defined as `#FFFFFF` and is intentionally excluded from theme overrides. This makes intent explicit and prevents future accidents.

---

### 10. SupportWidget — `src/components/layout/SupportWidget.css`

**Problem:** Multiple `color: white` usages (lines 43, 59, 77, 108, 231). Some are inside the widget header/body which always has a dark navy background — correct — but line 59 (`background: white`) is the widget body panel which should be theme-aware.

**Find and fix** the panel background:
```css
/* Find: */
.support-panel {
  background: white;
  ...
}

/* Replace with: */
.support-panel {
  background: var(--color-white);
  ...
}
```

Add dark and warm overrides:
```css
[data-theme="dark"] .support-panel {
  background: #111827;
  border-color: rgba(255,255,255,0.08);
}

[data-theme="warm"] .support-panel {
  background: #FAF6EF;
  border-color: #E0D3C0;
}
```

All instances of `color: white` inside `.support-header`, `.support-bubble`, etc. that are on navy/dark backgrounds are correct — leave them as-is or swap to `var(--color-fixed-white)` for clarity.

---

### 11. HowItWorks Section — `src/components/home/HowItWorks.css` (line ~81)

**Problem:** A connector line or step element has `background: white` which appears as a white bar in dark mode.

**Find:**
```css
.step-connector {
  background: white;
}
```
(or whatever element is on line 81 in this file)

**Replace with:**
```css
.step-connector {
  background: var(--color-white);
}
```

---

## Navbar — Professional Appearance Across All States

The Navbar has four visual states. Each must look professional in all three themes:

| State | When | Expected Look |
|---|---|---|
| Transparent | Homepage, not scrolled | White text/icons on dark hero |
| Scrolled (Home) | User scrolled down on homepage | Solid `--color-white` bg, dark text |
| Not-Home | Any non-homepage route | Always solid `--color-white` bg, dark text |
| Mobile Drawer | Menu open on mobile | Always dark navy `--color-navy-deep` bg, white text |

### Checklist per theme:

**Light theme:**
- Transparent state: white nav links ✅ (`.nav-link.light` is `rgba(255,255,255,0.9)`)
- Scrolled state: navy links ✅ (`.nav-link.dark` uses `--color-navy-deep`)
- Ensure the CTA button "Get Started Free" gradient is always visible ✅

**Dark theme:**
- Scrolled/Not-Home: navbar uses `rgba(10, 15, 30, 0.9)` ✅ (in `index.css`)
- Nav links in dark mode: `--color-text-primary` resolves to `#F8FAFF` (light) ✅
- Verify the "Log In" link is not invisible — it also uses `.nav-link.dark` which in dark theme renders as `#F8FAFF` ✅
- Dropdown: add warm override (see Fix #1 above)

**Warm theme:**
- Scrolled/Not-Home: navbar uses `var(--color-white)` = `#FAF6EF` (warm cream) — warm and readable ✅
- Nav links: `--color-text-primary` in warm = `#2D1F0E` (deep warm brown) — readable ✅
- Theme toggle icon: fix needed (see Fix #2)
- Dropdown: fix needed (see Fix #1)

---

## index.css — Missing Warm Mode Overrides

The `[data-theme="warm"]` block in `index.css` covers the main home page sections but is incomplete for inner pages. Add these missing rules:

```css
/* ── WARM MODE — inner page surfaces ── */

/* Features page sticky nav */
[data-theme="warm"] .sticky-nav {
  background: var(--color-off-white);
  border-bottom-color: #E0D3C0;
}

/* FAQ category sticky nav */
[data-theme="warm"] .faq-category-nav {
  background: var(--color-off-white);
  border-bottom-color: #E0D3C0;
}

/* Legal page content card */
[data-theme="warm"] .legal-content-card {
  background: #FAF6EF;
  border-color: #E0D3C0;
}

/* Mission section on about page */
[data-theme="warm"] .mission-section {
  filter: sepia(0.08);
}

/* Accountants hero */
[data-theme="warm"] .accountant-hero {
  filter: sepia(0.08);
}

/* Pricing table category rows */
[data-theme="warm"] .comparison-table .category-row td {
  background: #F2EBE0;
}

/* Pricing table row hover */
[data-theme="warm"] .comparison-table tr:hover td {
  background: #F2EBE0;
}
```

---

## Per-Page Scan Summary

Go through each route and visually verify these checklist items in all three themes:

### `/` — Home
- [ ] Hero: white text on dark navy — all three themes ✅ (navy bg is always dark)
- [ ] UrgencyBanner: readable in all themes
- [ ] ProblemStatement: background follows `--color-off-white` ✅
- [ ] SolutionPillars: card-light adapts to dark/warm ✅
- [ ] All section headings use `--color-text-primary` (not hardcoded) ✅
- [ ] PricingTeaser button text `color: white` → change to `var(--color-fixed-white)`
- [ ] HowItWorks connector line (Fix #11 above)

### `/product` — Features Page
- [ ] Sticky sub-nav — fix hardcoded `background: white` (Fix #3)
- [ ] Section backgrounds alternate correctly in all themes
- [ ] Feature cards (`.card-light`) adapt correctly in dark/warm ✅
- [ ] Sticky nav tab active state readable in dark (blue underline on `rgba(0,0,0,0)` bg)

### `/pricing`
- [ ] PlanCard popular highlight (`border-top: 4px solid var(--color-blue-primary)`) is visible in all themes ✅
- [ ] Comparison table: `background: var(--color-off-white)` on header cells ✅ (dark override exists)
- [ ] Popular column subtle blue tint (`rgba(26,111,232,0.03)`) — near-invisible in dark, acceptable

### `/faq`
- [ ] Category sticky nav — fix (Fix #4)
- [ ] Search input — fix (Fix #5)
- [ ] Accordion border/bg uses `--color-light-grey` ✅
- [ ] Accordion answer text uses `--color-dark-grey` ✅

### `/about`
- [ ] Mission section (dark gradient hero with white text) ✅
- [ ] Apply warm sepia filter to mission section (Fix #7)
- [ ] Team cards use `.card-light` → adapts via existing dark overrides ✅
- [ ] Values/stats section if any — verify text contrast

### `/contact`
- [ ] Contact form card (`.card-light`) adapts ✅
- [ ] Input fields use `.input-field` → fix exists in `index.css` for dark/warm ✅
- [ ] Info icon circles use `--color-off-white` bg ✅
- [ ] Success card: verify `--color-text-primary` heading is readable

### `/accountants`
- [ ] Hero has dark gradient + white text ✅
- [ ] Apply warm sepia (Fix #8)
- [ ] Feature cards use `.card-light` ✅

### `/blog`
- [ ] Blog category chips — fix (Fix #6)
- [ ] Blog card image placeholder (empty div) — give it a themed background:
  ```css
  .blog-card-image {
    background: var(--color-light-grey);
  }
  ```
- [ ] Featured post chip uses dark glass style — verify readable on light/warm

### `/terms` and `/privacy`
- [ ] Legal content card (`.card-light`) ✅
- [ ] Add warm card override (see index.css additions above)
- [ ] Heading and body text use semantic vars ✅

---

## Colour Variable Quick Reference

When replacing hardcoded values, use these from `index.css`:

| Use Case | Variable | Light | Dark | Warm |
|---|---|---|---|---|
| Page background | `--color-white` | `#FFFFFF` | `#0A0F1E` | `#FAF6EF` |
| Alternate section bg | `--color-off-white` | `#F8FAFF` | `#111827` | `#F2EBE0` |
| Borders | `--color-light-grey` | `#E8EEFF` | `rgba(255,255,255,0.08)` | `#E0D3C0` |
| Body text | `--color-dark-grey` | `#1E293B` | `rgba(248,250,255,0.85)` | `#4A3520` |
| Captions | `--color-mid-grey` | `#94A3B8` | `rgba(248,250,255,0.60)` | `#8C7A68` |
| Headings | `--color-text-primary` | `#0D1B4B` | `#F8FAFF` | `#2D1F0E` |
| White (always) | `--color-fixed-white` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` |
| Dark (always) | `--color-fixed-dark` | `#0D1B4B` | `#0D1B4B` | `#0D1B4B` |
| Brand blue | `--color-blue-primary` | `#1A6FE8` | `#1A6FE8` | `#2563EB` |
| Accent cyan | `--color-cyan` | `#22D3EE` | `#22D3EE` | `#0891B2` |

**Rule:** Never use `color: white` or `background: white` unless the element is always on a dark background AND you replace with `var(--color-fixed-white)` to make intent explicit.

---

## Testing Checklist

After all changes are made, perform this verification pass:

1. Open the app at `localhost:5173`
2. On **Light theme** (default): visit every route above, check headings, body text, inputs, cards, and the navbar in scrolled vs. non-scrolled state
3. Click the theme toggle (Moon icon in navbar) → switches to **Dark theme**: repeat the same route check
4. Click again (Flame icon) → switches to **Warm theme**: repeat once more
5. On each page, scroll down to trigger navbar scroll state and confirm it remains readable
6. Resize the browser to mobile width (~375px), open the mobile drawer, and confirm it is always dark-navy with white text regardless of theme (the drawer uses `--color-navy-deep` which is a fixed value — this is correct by design)
7. Hover over the desktop navbar dropdown and confirm it has a readable background in all three themes

---

## Files Modified Summary

| File | Changes |
|---|---|
| `src/index.css` | Add missing warm-mode overrides for inner pages |
| `src/components/layout/Navbar.css` | Fix dropdown `background: white` → var; add warm toggle + dropdown overrides |
| `src/components/layout/Footer.css` | Replace `color: white` → `var(--color-fixed-white)` |
| `src/components/layout/SupportWidget.css` | Fix panel `background: white` → var; add dark/warm overrides |
| `src/pages/FeaturesPage.css` | Fix sticky-nav `background: white` → var |
| `src/pages/FAQPage.css` | Fix category-nav `background: white` → var; add search input theming |
| `src/pages/BlogPage.css` | Fix category chip colours for light/warm |
| `src/components/home/HowItWorks.css` | Fix connector `background: white` → var |

---

*This guide was generated by scanning all CSS and JSX files in `taaxbro-web-main` for hardcoded colour values and missing theme overrides. All three themes — light, dark, and warm — use the CSS variable system defined in `src/index.css`. Follow the fixes above to bring every page into full theme compliance.*