# TAAXBRO — NEXT IMPLEMENTATION STEPS
### AI Developer Guide · Based on Codebase Audit · May 2025
> Read this file fully before touching any code. Follow tasks in the order listed — they have dependencies.

---

## AUDIT SUMMARY

### ✅ What's Already Built (Do NOT re-implement)
- All 18 homepage sections (Hero through FinalCTA) — all exist in `src/components/home/`
- Design token system in `src/index.css` and `src/styles/DesignSystem.css`
- Navbar with scroll behavior + mobile drawer (`src/components/layout/Navbar.jsx`)
- Footer 4-column layout (`src/components/layout/Footer.jsx`)
- SupportWidget with 3 states: idle, chat, success (`src/components/layout/SupportWidget.jsx`)
- Button, Logo, LoadingScreen common components
- `FeaturesPage`, `PricingPage`, `FAQPage`, `AboutPage`, `ContactPage` — all exist
- React Router with lazy loading in `App.jsx`
- Framer Motion entrance animations on Hero section
- Compliance Score SVG ring animation with counter
- Integrations marquee CSS animation
- FinalCTA floating particles

### ❌ What's Missing (Everything in this document)
1. **Theme System (Light / Dark / Warm)** — zero implementation, biggest gap
2. **SupportWidget** not rendered on the Home page
3. **Scroll-triggered reveal animations** — only 2 of 18 sections have them
4. **4 pages are placeholder stubs** — Blog, Accountants, Login, Legal pages
5. **PricingPage plan cards** missing feature lists
6. **AboutPage** missing Press section and only has 2 of 4 value cards
7. **No 404 page**
8. **No per-page document titles**

---

## TASK 1 — THEME SYSTEM (Light / Dark / Warm Modes)
**Priority: CRITICAL — do this first, everything else depends on it**

This is the single most important missing feature. The site currently only has light mode. You must implement a full three-mode system that:
- Auto-detects the user's OS setting (`prefers-color-scheme`) on first visit
- Persists the user's manual choice in `localStorage`
- Applies the theme via a `data-theme` attribute on the `<html>` element
- Provides a toggle accessible from the Navbar

---

### TASK 1a — Create ThemeContext

**Create file:** `src/context/ThemeContext.jsx`

```jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    // 1. Check localStorage for saved preference
    const saved = localStorage.getItem('taaxbro-theme');
    if (saved && ['light', 'dark', 'warm'].includes(saved)) return saved;
    // 2. Auto-detect OS preference — maps to light or dark only (warm is user-choice only)
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    // Apply theme to <html> element
    document.documentElement.setAttribute('data-theme', theme);
    // Persist to localStorage
    localStorage.setItem('taaxbro-theme', theme);
  }, [theme]);

  // Also listen for OS-level changes (only applies when user hasn't manually set a theme)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      const saved = localStorage.getItem('taaxbro-theme');
      // Only auto-switch if user hasn't manually chosen warm
      if (saved !== 'warm') {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const cycleTheme = () => {
    setTheme(prev => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'warm';
      return 'light';
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
```

---

### TASK 1b — Wrap App with ThemeProvider

**Edit file:** `src/main.jsx`

Wrap the `<App />` with `<ThemeProvider>`:

```jsx
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

---

### TASK 1c — Add CSS Variable Overrides for All Three Themes

**Edit file:** `src/index.css`

The existing `:root` block is the **Light Mode** theme. Add the following AFTER the existing `:root` block:

```css
/* ============================================================
   DARK MODE — triggered by [data-theme="dark"] on <html>
   ============================================================ */
[data-theme="dark"] {
  /* Backgrounds */
  --color-white:        #1A1F2E;          /* Page background */
  --color-off-white:    #212840;          /* Section alternate background */
  --color-light-grey:   rgba(255,255,255,0.10);  /* Borders */

  /* Text */
  --color-text-primary: #FFFFFF;
  --color-dark-grey:    rgba(255,255,255,0.80);
  --color-mid-grey:     rgba(255,255,255,0.50);

  /* Surfaces */
  --shadow-sm:  0 1px 3px rgba(0,0,0,0.30), 0 1px 2px rgba(0,0,0,0.20);
  --shadow-md:  0 4px 16px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.25);
  --shadow-lg:  0 12px 40px rgba(0,0,0,0.45), 0 4px 16px rgba(0,0,0,0.30);

  /* Cards on "light" sections become dark glass */
  /* Primary & brand colours stay the same — do NOT override them */
}

/* Card light adapts in dark mode */
[data-theme="dark"] .card-light {
  background: #212840;
  border-color: rgba(255,255,255,0.10);
}

[data-theme="dark"] .card-light:hover {
  border-color: rgba(34,211,238,0.30);
}

/* Input fields */
[data-theme="dark"] .input-field {
  background: #212840;
  border-color: rgba(255,255,255,0.15);
  color: #FFFFFF;
}

[data-theme="dark"] .input-field:focus {
  border-color: var(--color-blue-primary);
}

/* Sections with --color-off-white background */
[data-theme="dark"] .problem-statement,
[data-theme="dark"] .how-it-works,
[data-theme="dark"] .integrations,
[data-theme="dark"] .pricing-teaser,
[data-theme="dark"] .ocr-section,
[data-theme="dark"] .tax-escrow-wallet {
  background: var(--color-off-white);
}

/* Sections with --color-white background */
[data-theme="dark"] .solution-pillars,
[data-theme="dark"] .testimonials,
[data-theme="dark"] .for-accountants,
[data-theme="dark"] .faq-teaser {
  background: var(--color-white);
}

/* Pricing teaser card in dark mode */
[data-theme="dark"] .pricing-card {
  background: #212840;
  border-color: rgba(255,255,255,0.10);
}

[data-theme="dark"] .popular-badge {
  background: var(--gradient-brand);
}

/* Comparison table */
[data-theme="dark"] .comparison-table th,
[data-theme="dark"] .comparison-table td {
  border-color: rgba(255,255,255,0.08);
}

[data-theme="dark"] .comparison-table thead th {
  background: #212840;
}

/* ============================================================
   WARM MODE (Amber / Eye-Care mode) — [data-theme="warm"]
   Used in evenings; reduces blue light. Feels like aged parchment.
   ============================================================ */
[data-theme="warm"] {
  /* Backgrounds — cream and warm amber tones */
  --color-white:        #FAF6EF;          /* Warm cream page background */
  --color-off-white:    #F2EBE0;          /* Warm parchment alternate */
  --color-light-grey:   #E0D3C0;          /* Warm borders */

  /* Text — dark warm brown instead of pure navy */
  --color-text-primary: #2D1F0E;          /* Deep warm brown for headings */
  --color-dark-grey:    #4A3520;          /* Body text warm brown */
  --color-mid-grey:     #8C7A68;          /* Caption text warm tan */

  /* Brand accent stays blue but slightly warmer */
  --color-blue-primary: #2563EB;
  --color-cyan:         #0891B2;

  /* Shadows — warm amber-tinted */
  --shadow-sm:  0 1px 3px rgba(80,40,0,0.10), 0 1px 2px rgba(80,40,0,0.07);
  --shadow-md:  0 4px 16px rgba(80,40,0,0.12), 0 2px 8px rgba(80,40,0,0.08);
  --shadow-lg:  0 12px 40px rgba(80,40,0,0.16), 0 4px 16px rgba(80,40,0,0.10);
}

/* Card light in warm mode */
[data-theme="warm"] .card-light {
  background: #FAF6EF;
  border-color: #E0D3C0;
}

/* Inputs in warm mode */
[data-theme="warm"] .input-field {
  background: #FAF6EF;
  border-color: #D4C4AB;
  color: #2D1F0E;
}

/* Dark sections (hero, navy backgrounds) stay dark in warm mode — 
   only the light content areas get the warm tint */
[data-theme="warm"] .hero,
[data-theme="warm"] .ai-intelligence,
[data-theme="warm"] .compliance-score,
[data-theme="warm"] .final-cta,
[data-theme="warm"] .footer,
[data-theme="warm"] .whatsapp-integration,
[data-theme="warm"] .for-accountants .accountant-panel {
  /* These dark sections stay dark — no override */
  filter: sepia(0.08);  /* Very subtle warm tint to dark sections */
}

/* Light sections get warm background */
[data-theme="warm"] .problem-statement,
[data-theme="warm"] .solution-pillars,
[data-theme="warm"] .ocr-section,
[data-theme="warm"] .tax-escrow-wallet,
[data-theme="warm"] .how-it-works,
[data-theme="warm"] .integrations,
[data-theme="warm"] .testimonials,
[data-theme="warm"] .pricing-teaser,
[data-theme="warm"] .faq-teaser,
[data-theme="warm"] .for-accountants {
  background-color: var(--color-off-white);
}

/* Sections with explicit white background */
[data-theme="warm"] .solution-pillars {
  background: var(--color-white);
}
```

---

### TASK 1d — Add Theme Toggle to Navbar

**Edit file:** `src/components/layout/Navbar.jsx`

1. Import `useTheme` and Phosphor icons for the toggle:
```jsx
import { Sun, Moon, Sun as SunWarm } from 'phosphor-react';
// Phosphor doesn't have a "warm" icon, use Flame or SunDim
import { Sun, Moon, Flame } from 'phosphor-react';
import { useTheme } from '../../context/ThemeContext';
```

2. Inside the `Navbar` component, add:
```jsx
const { theme, cycleTheme } = useTheme();

const themeIcon = theme === 'light' ? <Moon size={20} /> 
               : theme === 'dark'  ? <Flame size={20} /> 
               : <Sun size={20} />;

const themeLabel = theme === 'light' ? 'Switch to Dark' 
                 : theme === 'dark'  ? 'Switch to Warm' 
                 : 'Switch to Light';
```

3. Add the toggle button in the `nav-actions` div on desktop AND at the bottom of the mobile drawer, BEFORE the "Log In" link:

```jsx
<button
  className="theme-toggle"
  onClick={cycleTheme}
  aria-label={themeLabel}
  title={themeLabel}
>
  {themeIcon}
</button>
```

4. Add CSS for the toggle button in `Navbar.css`:
```css
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-full);
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.20);
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: 8px;
}

/* On scrolled / non-home pages */
.navbar.scrolled .theme-toggle,
.navbar.not-home .theme-toggle {
  background: rgba(13,27,75,0.08);
  border-color: var(--color-light-grey);
  color: var(--color-text-primary);
}

.theme-toggle:hover {
  background: rgba(255,255,255,0.22);
  transform: scale(1.08);
}

/* Warm mode specific color */
[data-theme="warm"] .navbar.scrolled .theme-toggle {
  color: #4A3520;
  border-color: #D4C4AB;
}
```

---

## TASK 2 — ADD SUPPORTWIDGET TO HOME PAGE
**Priority: High — simple fix**

**Edit file:** `src/pages/Home.jsx`

Add the import and render `<SupportWidget />` before the closing `</div>`. It is already on all other pages but missing from the home page.

```jsx
import SupportWidget from '../components/layout/SupportWidget';

// Inside the return, after <Footer />:
<Footer />
<SupportWidget />
```

---

## TASK 3 — SCROLL-TRIGGERED REVEAL ANIMATIONS
**Priority: High — major visual quality gap**

Currently only 2 of 18 home sections have scroll animations. Every section should fade up as it enters the viewport. This must be done without refactoring — add a wrapper pattern.

### TASK 3a — Create a reusable ScrollReveal wrapper

**Create file:** `src/components/common/ScrollReveal.jsx`

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ScrollReveal = ({ children, delay = 0, className = '', direction = 'up' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 28 : direction === 'down' ? -28 : 0,
      x: direction === 'left' ? 28 : direction === 'right' ? -28 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.55,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
```

### TASK 3b — Apply ScrollReveal to each home section

For each of the following files, import `ScrollReveal` and wrap the section heading and cards. The pattern is:

```jsx
import ScrollReveal from '../common/ScrollReveal';

// Wrap section-header:
<ScrollReveal>
  <div className="section-header">...</div>
</ScrollReveal>

// Wrap each card with staggered delay (0, 0.1, 0.2, 0.3):
{items.map((item, i) => (
  <ScrollReveal key={i} delay={i * 0.1}>
    <Card {...item} />
  </ScrollReveal>
))}
```

**Apply to these files (in this order):**
1. `src/components/home/UrgencyBanner.jsx` — wrap entire content, delay `0`
2. `src/components/home/ProblemStatement.jsx` — heading + each card staggered
3. `src/components/home/SolutionPillars.jsx` — heading + tab content on tab switch
4. `src/components/home/AIIntelligence.jsx` — heading + each AI card staggered + chat panel
5. `src/components/home/WhatsAppIntegration.jsx` — heading + phone mockup + capability items
6. `src/components/home/OCRSection.jsx` — heading + each lane
7. `src/components/home/TaxEscrowWallet.jsx` — heading + each point + wallet card
8. `src/components/home/HowItWorks.jsx` — heading + each step staggered
9. `src/components/home/Integrations.jsx` — heading only (marquee already animates)
10. `src/components/home/ForAccountants.jsx` — the entire accountants panel
11. `src/components/home/Testimonials.jsx` — heading + each testimonial card staggered
12. `src/components/home/PricingTeaser.jsx` — heading + each pricing card staggered
13. `src/components/home/FAQTeaser.jsx` — heading + each accordion item staggered

---

## TASK 4 — COMPLETE THE PRICING PAGE PLAN CARDS
**Priority: Medium**

**Edit file:** `src/pages/PricingPage.jsx`

The `PlanCard` component currently shows only: plan name, for-label, price, and button. It is missing the feature list. Add a `features` prop and render it:

```jsx
const PlanCard = ({ name, price, forLabel, isPopular, features }) => (
  <div className={`pricing-detail-card card card-light ${isPopular ? 'popular' : ''}`}>
    {isPopular && <div className="popular-badge">MOST POPULAR</div>}
    <h3 className="plan-name">{name}</h3>
    <p className="plan-for">{forLabel}</p>
    <div className="plan-price">
      <span className="currency">₦</span>
      <span className="amount">{price}</span>
      <span className="period">/mo</span>
    </div>
    
    {/* ADD THIS FEATURE LIST */}
    <ul className="plan-features">
      {features.map((f, i) => (
        <li key={i} className="plan-feature-item">
          <Check size={16} color="var(--color-success)" weight="bold" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    
    <Button variant={isPopular ? 'primary' : 'secondary'} style={{ width: '100%' }}>
      Choose {name}
    </Button>
  </div>
);
```

Update the `plans` array with features:
```jsx
const plans = [
  {
    name: "Freelancer", price: "3,000", forLabel: "For solo earners",
    features: ["1 bank account connection", "5 invoices per month", "VAT computation", "WhatsApp alerts"]
  },
  {
    name: "SME Starter", price: "8,500", forLabel: "For small teams", isPopular: true,
    features: ["Unlimited bank connections", "Unlimited invoices", "NRS direct filing", "WHT tracking", "Priority WhatsApp support"]
  },
  {
    name: "SME Growth", price: "18,000", forLabel: "For scaling businesses",
    features: ["Everything in Starter", "Tax Escrow Wallet", "Compliance score", "Anomaly detection", "Dedicated account manager"]
  },
  {
    name: "Accountant", price: "35,000", forLabel: "Multi-client portal",
    features: ["Everything in SME Growth", "Up to 50 client businesses", "Bulk filing interface", "Client onboarding tools", "Priority support"]
  }
];
```

Add the Billing FAQ section AFTER the comparison table and BEFORE `<Footer />`:

```jsx
<section className="billing-faq-section section-padding">
  <div className="container">
    <h2 className="comparison-title">Billing Questions</h2>
    <div className="billing-faq-grid">
      {[
        { q: "Is there a free trial?", a: "Yes. New users get a 14-day free trial with full access. No credit card required to start." },
        { q: "Can I switch plans later?", a: "Yes. Upgrade or downgrade at any time from your Settings. Changes apply at the next billing cycle." },
        { q: "How do I cancel?", a: "Cancel anytime from Settings > Billing with no penalty. Your data remains accessible for 30 days after cancellation." },
        { q: "Does the Accountant Portal need a separate subscription?", a: "The Accountant plan includes full portal access. Individual business users on SME plans do not have portal access." }
      ].map((item, i) => (
        <BillingFAQItem key={i} {...item} />
      ))}
    </div>
  </div>
</section>
```

Add CSS in `PricingPage.css`:
```css
.plan-features {
  list-style: none;
  padding: 0;
  margin: 20px 0 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.plan-feature-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: var(--text-sm);
  color: var(--color-dark-grey);
  line-height: 1.5;
}

.billing-faq-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 32px;
}

@media (max-width: 768px) {
  .billing-faq-grid { grid-template-columns: 1fr; }
}
```

---

## TASK 5 — COMPLETE THE ABOUT PAGE
**Priority: Medium**

**Edit file:** `src/pages/AboutPage.jsx`

### 5a — Expand Values from 2 to 4 cards
Replace the current `values-grid` content with 4 value cards using Phosphor icons instead of emojis:

```jsx
import { Target, Lock, Robot, Globe } from 'phosphor-react';

const values = [
  {
    icon: Target,
    title: "Built for Reliability",
    desc: "We build for the business that cannot afford to get it wrong. Our systems are redundant, precise, and tested against Nigerian tax law."
  },
  {
    icon: Lock,
    title: "Human Approval, Always",
    desc: "AI does the heavy lifting, but you maintain the final word. No return is ever filed without your explicit confirmation."
  },
  {
    icon: Robot,
    title: "Compliance Should Be Boring",
    desc: "We exist to make tax compliance so automatic that you stop thinking about it. Boring compliance is safe compliance."
  },
  {
    icon: Globe,
    title: "African Businesses Deserve World-Class Tools",
    desc: "We refuse to accept that Nigerian SMEs should have inferior financial infrastructure to businesses in the US or Europe."
  }
];
```

### 5b — Add Press & Recognition section
Add this section BEFORE the `final-contact-cta` section:

```jsx
<section className="press-section section-padding">
  <div className="container">
    <h2 className="section-title centered">Press & Recognition</h2>
    <p className="section-subtitle centered">Coverage and recognition coming soon — check back as we grow.</p>
    <div className="press-logos">
      {['TechCabal', 'Nairametrics', 'BusinessDay', 'Techpoint Africa'].map((outlet, i) => (
        <div key={i} className="press-logo-placeholder">
          <span>{outlet}</span>
        </div>
      ))}
    </div>
  </div>
</section>
```

Add CSS in `AboutPage.css`:
```css
.press-logos {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 32px;
}

.press-logo-placeholder {
  padding: 16px 28px;
  background: var(--color-off-white);
  border: 1px solid var(--color-light-grey);
  border-radius: var(--radius-md);
  font-weight: 600;
  color: var(--color-mid-grey);
  font-size: var(--text-sm);
  letter-spacing: 0.04em;
}
```

---

## TASK 6 — BUILD MISSING PAGES
**Priority: Medium**

### TASK 6a — Blog Listing Page

**Create file:** `src/pages/BlogPage.jsx`
**Create file:** `src/pages/BlogPage.css`

This replaces the `<PlaceholderPage title="Taaxbro Blog" />` stub in `App.jsx`.

The page structure:

```jsx
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SupportWidget from '../components/layout/SupportWidget';
import './BlogPage.css';

const categories = ['All', 'Tax Tips', 'Platform Updates', 'SME Finance', '2025 Reform', 'Compliance'];

const blogPosts = [
  {
    id: 1,
    category: 'Tax Tips',
    title: 'How Nigerian Businesses Can Prepare for the 2025 Tax Reform',
    excerpt: 'The Nigeria Tax Act 2025 introduces sweeping changes. Here is what every SME owner needs to know before July 2027.',
    author: 'Chidimma A.',
    date: 'May 2, 2025',
    readTime: '6 min read',
    featured: true
  },
  {
    id: 2,
    category: '2025 Reform',
    title: 'Understanding the NRS: What Replaced FIRS and Why It Matters',
    excerpt: 'The Nigeria Revenue Service has replaced FIRS. We break down the structural changes and what they mean for your filings.',
    author: 'Obinna K.',
    date: 'April 28, 2025',
    readTime: '8 min read',
    featured: false
  },
  {
    id: 3,
    category: 'SME Finance',
    title: 'VAT Verification: How to Know If You Were Overcharged at the Till',
    excerpt: 'Most Nigerian consumers don\'t realise they can verify whether the VAT charged on a receipt is correct. Here\'s how.',
    author: 'Tunde O.',
    date: 'April 20, 2025',
    readTime: '4 min read',
    featured: false
  },
  {
    id: 4,
    category: 'Compliance',
    title: 'What Is a Compliance Score and Why Your Business Needs One',
    excerpt: 'A real-time 0–100 compliance rating gives you visibility into your tax posture before the tax authority does.',
    author: 'Chidimma A.',
    date: 'April 15, 2025',
    readTime: '5 min read',
    featured: false
  },
  {
    id: 5,
    category: 'Platform Updates',
    title: 'Taaxbro Now Supports Moniepoint and Nomba POS Integration',
    excerpt: 'We\'ve added native integrations for two of Nigeria\'s most widely used POS systems.',
    author: 'Tunde O.',
    date: 'April 10, 2025',
    readTime: '3 min read',
    featured: false
  }
];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPost = blogPosts.find(p => p.featured);
  const filtered = blogPosts.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch && !p.featured;
  });

  return (
    <div className="blog-page">
      <Navbar />

      <header className="blog-hero">
        <div className="container">
          <h1 className="blog-hero-title">The Taaxbro Blog</h1>
          <p className="blog-hero-sub">Tax tips, platform updates, and insights for Nigerian businesses.</p>
          <div className="blog-search">
            <input
              type="text"
              placeholder="Search articles..."
              className="input-field blog-search-input"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      <section className="blog-body section-padding">
        <div className="container">

          {/* Category Filter */}
          <div className="blog-category-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {featuredPost && activeCategory === 'All' && !searchQuery && (
            <div className="featured-post card card-light">
              <div className="featured-thumbnail">
                <img src={`https://placehold.co/800x400/0D1B4B/FFFFFF?text=Featured+Post`} alt="Featured" />
              </div>
              <div className="featured-content">
                <span className="post-category">{featuredPost.category}</span>
                <h2 className="featured-title">{featuredPost.title}</h2>
                <p className="featured-excerpt">{featuredPost.excerpt}</p>
                <div className="post-meta">
                  <div className="post-author-avatar">{featuredPost.author[0]}</div>
                  <span className="post-author">{featuredPost.author}</span>
                  <span className="post-date">{featuredPost.date}</span>
                  <span className="post-read-time">{featuredPost.readTime}</span>
                </div>
                <a href="#" className="btn btn-primary" style={{marginTop: '16px', display: 'inline-flex'}}>Read More →</a>
              </div>
            </div>
          )}

          {/* Post Grid */}
          <div className="blog-grid">
            {filtered.map(post => (
              <div key={post.id} className="post-card card card-light">
                <img
                  src={`https://placehold.co/400x220/1A3A7A/FFFFFF?text=${encodeURIComponent(post.category)}`}
                  alt={post.title}
                  className="post-thumbnail"
                />
                <div className="post-body">
                  <span className="post-category">{post.category}</span>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-meta">
                    <div className="post-author-avatar">{post.author[0]}</div>
                    <span className="post-author">{post.author}</span>
                    <span className="post-date">{post.date}</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="blog-empty">
              <p>No articles found for "{searchQuery}".</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <SupportWidget />
    </div>
  );
};

export default BlogPage;
```

Add the necessary CSS in `BlogPage.css` for:
- `.blog-hero` — dark navy background, center-aligned, padding `140px 0 80px`
- `.blog-search-input` — max-width `480px`, centered, margin-top `24px`
- `.blog-category-tabs` — flex row, gap `8px`, flex-wrap, margin-bottom `40px`
- `.category-tab` — pill button, `background: var(--color-off-white)`, `border: 1px solid var(--color-light-grey)`, active state: `background: var(--gradient-brand)`, `color: white`, `border-color: transparent`
- `.featured-post` — grid with 2 columns on desktop, 1 on mobile, gap `32px`, margin-bottom `48px`
- `.featured-thumbnail img` — `width: 100%`, `border-radius: var(--radius-md)`, `object-fit: cover`, `height: 260px`
- `.featured-title` — `--text-3xl`, `font-weight: 700`
- `.blog-grid` — 3-column grid on desktop, 2-column on tablet, 1-column on mobile
- `.post-card` — no padding override — thumbnail is flush, body has `padding: 20px`
- `.post-thumbnail` — `width: 100%`, `height: 180px`, `object-fit: cover`, `border-radius: var(--radius-lg) var(--radius-lg) 0 0`
- `.post-category` — pill tag, same as section eyebrow but smaller
- `.post-title` — `--text-xl`, `font-weight: 700`, margin `8px 0`
- `.post-excerpt` — `--text-sm`, `--color-mid-grey`, line-clamp 2
- `.post-meta` — flex row, align-center, gap `8px`, `--text-xs`, `--color-mid-grey`, margin-top `12px`
- `.post-author-avatar` — 24px circle, `--gradient-brand` background, white text, `--text-xs`, font-weight 700

---

### TASK 6b — Accountants Landing Page

**Create file:** `src/pages/AccountantsPage.jsx`
**Create file:** `src/pages/AccountantsPage.css`

Replace the placeholder. The page speaks directly to tax professionals.

Structure:
1. **Hero** — dark navy background. Headline: "One dashboard. Every client. Total control." Subheadline about the Accountant Portal. CTA: "Request Portal Access".
2. **Capabilities section** — 3 large capability cards: "Client Overview at a Glance", "Bulk Filing Across All Clients", "Onboard a New Client in Minutes"
3. **Portal Preview** — A styled mockup showing the accountant dashboard table (client names, compliance scores, deadlines). Use a placeholder colored div: `https://placehold.co/900x480/0D1B4B/FFFFFF?text=Accountant+Portal+Preview`
4. **Testimonial** — Single wide testimonial card using the Mrs. Balogun quote from Home.jsx Testimonials
5. **Pricing teaser** — Single Accountant plan card with CTA
6. **CTA footer** — "Ready to manage all your clients in one place?" + "Request Access" button

---

### TASK 6c — Legal Pages Template

**Create file:** `src/pages/LegalPage.jsx`
**Create file:** `src/pages/LegalPage.css`

A reusable template for both Terms of Service and Privacy Policy.

```jsx
const LegalPage = ({ title, lastUpdated, summary, sections }) => (
  <div className="legal-page">
    <Navbar />
    <div className="legal-layout container">
      
      {/* LEFT SIDEBAR — sticky table of contents */}
      <aside className="legal-sidebar">
        <h4 className="toc-heading">Contents</h4>
        <ul className="toc-list">
          {sections.map((s, i) => (
            <li key={i}>
              <a href={`#section-${i}`} className="toc-link">{s.heading}</a>
            </li>
          ))}
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <main className="legal-content">
        <div className="legal-header">
          <h1>{title}</h1>
          <p className="legal-updated">Last updated: {lastUpdated}</p>
          <div className="legal-summary card card-light">
            <p>{summary}</p>
          </div>
        </div>

        {sections.map((s, i) => (
          <section key={i} id={`section-${i}`} className="legal-section">
            <h2>{s.heading}</h2>
            <p>{s.content}</p>
          </section>
        ))}

        <div className="legal-contact">
          <p>Questions about this document? Contact <a href="mailto:legal@taaxbro.com">legal@taaxbro.com</a></p>
          <div className="legal-links">
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
      </main>
    </div>
    <Footer />
  </div>
);
```

Create two page files that use this template:
- `src/pages/TermsPage.jsx` — passes `title="Terms of Service"`, placeholder sections
- `src/pages/PrivacyPage.jsx` — passes `title="Privacy Policy"`, placeholder sections

CSS for `.legal-layout`:
- Desktop: CSS grid, `grid-template-columns: 240px 1fr`, `gap: 64px`, `padding: 120px 80px 80px`
- Sidebar: `position: sticky`, `top: 100px`, `align-self: start`
- Content: `max-width: 680px`
- Mobile: single column, no sidebar (sidebar moves to a collapsed top dropdown)

Add CSS for active TOC link (use `IntersectionObserver` to highlight the section currently in view):
```css
.toc-link.active {
  color: var(--color-blue-primary);
  border-left: 2px solid var(--color-blue-primary);
  padding-left: 12px;
  font-weight: 600;
}
```

---

### TASK 6d — Add Routes for New Pages in App.jsx

**Edit file:** `src/App.jsx`

Replace placeholder components and add new routes:

```jsx
const Blog = lazy(() => import('./pages/BlogPage'));
const Accountants = lazy(() => import('./pages/AccountantsPage'));
const Terms = lazy(() => import('./pages/TermsPage'));
const Privacy = lazy(() => import('./pages/PrivacyPage'));
// Login page — simple placeholder is fine for now, keep as-is

// Add routes:
<Route path="/blog" element={<Blog />} />
<Route path="/accountants" element={<Accountants />} />
<Route path="/terms" element={<Terms />} />
<Route path="/privacy" element={<Privacy />} />
```

---

## TASK 7 — ADD 404 NOT FOUND PAGE
**Priority: Low**

**Create file:** `src/pages/NotFoundPage.jsx`

Simple centered page:
```jsx
const NotFoundPage = () => (
  <div className="not-found">
    <Navbar />
    <div className="not-found-body">
      <span className="not-found-code">404</span>
      <h1>Page not found.</h1>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <Button variant="primary" onClick={() => window.location.href = '/'}>Go Home</Button>
    </div>
    <Footer />
  </div>
);
```

CSS: centered layout, `min-height: 100vh`, code is `--text-6xl` in gradient text.

Add `<Route path="*" element={<NotFoundPage />} />` as the last route in `App.jsx`.

---

## TASK 8 — PER-PAGE DOCUMENT TITLES
**Priority: Low**

React does not update `<title>` automatically on route changes. Use a small `useEffect` in each page component:

```jsx
useEffect(() => {
  document.title = 'Taaxbro — AI-Powered Tax Compliance & Payments for Nigerian Businesses';
}, []);
```

Page-specific titles:
| Page | Title |
|------|-------|
| Home | `Taaxbro — AI-Powered Tax Compliance & Payments` |
| Features | `Features — Taaxbro` |
| Pricing | `Pricing — Taaxbro` |
| FAQ | `FAQs — Taaxbro` |
| About | `About Us — Taaxbro` |
| Contact | `Contact — Taaxbro` |
| Blog | `Blog — Taaxbro` |
| Accountants | `For Accountants — Taaxbro` |
| Terms | `Terms of Service — Taaxbro` |
| Privacy | `Privacy Policy — Taaxbro` |
| 404 | `Page Not Found — Taaxbro` |

Add the `useEffect` to EACH respective page component file.

---

## DARK/WARM MODE — COMPONENTS THAT NEED SPECIAL ATTENTION

After completing Task 1, test these specific components in dark and warm mode and fix any visual issues:

| Component | Known Risk |
|-----------|-----------|
| `Navbar.jsx` | Frosted glass on scroll may conflict with dark mode body |
| `SolutionPillars.jsx` — Tab navigation | Active tab underline and tab button backgrounds need dark-mode overrides |
| `FAQTeaser.jsx` / `FAQPage.jsx` — Accordion | White card accordion items need dark card treatment |
| `PricingTeaser.jsx` / `PricingPage.jsx` — Plan cards | White cards + borders need dark mode overrides |
| `ContactPage.jsx` — Form fields | `input-field` white background needs dark mode override |
| `BlogPage.jsx` — Post cards | New component must support all three themes from the start |
| `AIIntelligence.jsx` — Chat panel | Already dark, should be fine. Check in warm mode. |
| `Testimonials.jsx` — Quote cards | White cards need dark mode treatment |
| All `.card-light` instances | Already handled by `[data-theme="dark"] .card-light` override in Task 1c |

**Testing checklist for each mode:**
- [ ] No white text on white background
- [ ] No dark text on dark background
- [ ] CTAs still visible and high-contrast
- [ ] Input fields readable
- [ ] Hero and dark sections stay dark in warm mode (only light content sections change)
- [ ] Navbar frosted glass works on all three backgrounds
- [ ] Theme toggle icon visually matches the CURRENT mode (shows what mode you'll switch TO, not current)

---

## IMPLEMENTATION ORDER SUMMARY

Do these in strict order — each task may depend on the previous:

| Order | Task | Effort | Impact |
|-------|------|--------|--------|
| 1 | Theme System (ThemeContext + CSS + Navbar toggle) | Medium | Critical |
| 2 | Add SupportWidget to Home | Trivial | High |
| 3 | ScrollReveal wrapper + apply to all sections | Medium | High |
| 4 | PricingPage plan card features + billing FAQ | Small | Medium |
| 5 | AboutPage — 4 value cards + Press section | Small | Medium |
| 6a | BlogPage | Medium | Medium |
| 6b | AccountantsPage | Medium | Medium |
| 6c | LegalPage template + Terms + Privacy | Small | Low |
| 6d | Update App.jsx routes | Trivial | Required for 6a–6c |
| 7 | 404 Page | Trivial | Low |
| 8 | Per-page document titles | Trivial | Low |

---

## NOTES FOR THE AI DEVELOPER

- **Do not change** `src/index.css` `:root` block — only ADD the dark and warm overrides after it.
- **Do not refactor** existing home section components — only add `ScrollReveal` wrappers inside them.
- **Do not change** the design token variable names — all components rely on them.
- **CSS class names** used in the theme overrides (Task 1c) must exactly match the className values already on each section's root element (e.g., `.problem-statement`, `.solution-pillars`). Verify in each component's CSS file before applying the override.
- **Warm mode** only changes light-background sections. Dark hero sections, the navy footer, the dark AI/Compliance sections — they stay dark in warm mode (with only a subtle `filter: sepia(0.08)` warm tint).
- **Auto-detect** uses `prefers-color-scheme` for light/dark only. Warm is always a user choice — it is never auto-applied.
- **localStorage key** is `'taaxbro-theme'` — consistent across all components.

---

*End of Next Steps Guide · Taaxbro Marketing Website · May 2025*