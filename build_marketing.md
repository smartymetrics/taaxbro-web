# TAAXBRO MARKETING WEBSITE — COMPLETE DESIGN GUIDE
### For AI-Assisted React Development · Version 1.0 · May 2025
> **Scope:** taaxbro.com (Marketing Site Only) · React · Mobile-First Responsive

---

## TABLE OF CONTENTS
1. Brand Identity System
2. Design Principles & Tone
3. Typography System
4. Spacing & Layout Grid
5. Component Library Specifications
6. Page-by-Page Design Specifications
   - 6.1 Homepage (18 Sections)
   - 6.2 Features Page
   - 6.3 Pricing Page
   - 6.4 FAQ Page
   - 6.5 About / Company Page
   - 6.6 Blog Pages
   - 6.7 Legal Pages Template
   - 6.8 Contact Page
7. Animation Specifications
8. Image & Illustration Specifications
9. Responsive Breakpoints
10. React Architecture Notes

---

## 1. BRAND IDENTITY SYSTEM

### 1.1 Colour Palette

Extracted from brand visuals and logo. All CSS custom properties must be declared at `:root`.

```
PRIMARY COLOURS
--color-navy-deep:     #08122A   /* Darkest navy — hero backgrounds, footer */
--color-navy-dark:     #0D1B4B   /* Dark navy — section backgrounds, card backgrounds */
--color-navy-mid:      #1A3A7A   /* Mid navy — borders, secondary elements */
--color-blue-primary:  #1A6FE8   /* Electric blue — primary CTAs, active states */
--color-blue-bright:   #3B82F6   /* Bright blue — links, highlights */
--color-cyan:          #22D3EE   /* Cyan — accents, gradient endpoints, "AI" label */
--color-cyan-light:    #67E8F9   /* Light cyan — hover states, subtle accents */

NEUTRAL COLOURS
--color-white:         #FFFFFF
--color-off-white:     #F8FAFF   /* Slightly blue-tinted white for light section backgrounds */
--color-light-grey:    #E8EEFF   /* Subtle borders, dividers on light backgrounds */
--color-mid-grey:      #94A3B8   /* Secondary text, captions */
--color-dark-grey:     #1E293B   /* Body text on light backgrounds */
--color-text-primary:  #0D1B4B   /* Headings on light backgrounds */

SEMANTIC COLOURS
--color-success:       #10B981   /* Green — paid status, compliance score high */
--color-warning:       #F59E0B   /* Amber — partial status, moderate compliance */
--color-danger:        #EF4444   /* Red — overdue, low compliance, error states */
--color-info:          #3B82F6   /* Info banners */

GRADIENT DEFINITIONS
--gradient-brand:      linear-gradient(135deg, #1A6FE8 0%, #22D3EE 100%)
--gradient-hero-bg:    linear-gradient(160deg, #08122A 0%, #0D1B4B 50%, #1A3A7A 100%)
--gradient-card-dark:  linear-gradient(145deg, #0D1B4B 0%, #1A3A7A 100%)
--gradient-blue-glow:  radial-gradient(circle at 50% 50%, rgba(34,211,238,0.15) 0%, transparent 70%)
```

### 1.2 Logo Usage

- **Logo mark:** The butterfly/wing shape — two overlapping organic petal shapes, gradient from `#1A6FE8` (deep blue) to `#22D3EE` (cyan), with a slight dark-blue shadow petal behind. Do NOT recreate this as a geometric shape — it must be an SVG with smooth bezier curves. Use the provided logo image asset.
- **Wordmark:** "Taaxbro" in a bold geometric sans-serif. Dark navy `#0D1B4B` for "Taaxbro" with the "x" rendered in `--color-blue-primary`. Tagline below in all-caps spaced tracking: "AI DRIVEN TAX COMPLIANCE & PAYMENTS" at 55% opacity of the wordmark color.
- **Logo on dark backgrounds:** Wordmark switches to white `#FFFFFF`, tagline to `rgba(255,255,255,0.6)`, logo mark unchanged.
- **Minimum size:** 120px wide on desktop, 100px on mobile.
- **Clear space:** Minimum 16px on all sides.
- **Do NOT:** Stretch, rotate, recolor, or place on busy patterned backgrounds without a mask.

### 1.3 Iconography

Use **Phosphor Icons** (React package: `phosphor-react`). Preferred weight: `regular` for UI icons, `bold` for feature callout icons. Custom icons (AI chip, escrow wallet, WhatsApp) should be SVG illustrations, not icon library items.

---

## 2. DESIGN PRINCIPLES & TONE

- **Warm, not cold.** The brand is professional but human. Avoid cold corporate white-box layouts.
- **African business-aware.** Naira amounts, Nigerian tax authority names (NRS, LIRS), WhatsApp as primary channel — these are not footnotes, they are core to the product story.
- **Confident, not arrogant.** Headlines command attention without shouting. Body copy is conversational.
- **Clarity over cleverness.** If a layout choice adds cognitive load, reconsider it.
- **IMPORTANT:** This website must NOT resemble TaxStreem (taxstreem.com). Do not use: dark-dominant corporate layout, similar hero composition, similar section rhythm. Taaxbro must feel warmer, brighter, more grounded, more human.

---

## 3. TYPOGRAPHY SYSTEM

### Font Pairing
- **Headings:** `Plus Jakarta Sans` (Google Fonts) — geometric, modern, confident. Weights: 700 (Bold), 800 (ExtraBold).
- **Body / UI:** `Inter` (Google Fonts) — humanist, highly legible at small sizes. Weights: 400 (Regular), 500 (Medium), 600 (SemiBold).

### Type Scale (use `clamp()` for fluid scaling)

```css
--text-xs:    0.75rem      /* 12px — legal footnotes, captions */
--text-sm:    0.875rem     /* 14px — labels, metadata */
--text-base:  1rem         /* 16px — body copy */
--text-lg:    1.125rem     /* 18px — lead paragraphs */
--text-xl:    1.25rem      /* 20px — card titles */
--text-2xl:   1.5rem       /* 24px — section subheadings */
--text-3xl:   clamp(1.75rem, 3vw, 2rem)       /* 28–32px */
--text-4xl:   clamp(2rem, 4vw, 2.75rem)       /* 32–44px — section headings */
--text-5xl:   clamp(2.5rem, 5vw, 3.5rem)      /* 40–56px — hero headline */
--text-6xl:   clamp(3rem, 6vw, 4.5rem)        /* 48–72px — hero display headline */
```

### Line Heights
- Headings: `1.15`
- Subheadings: `1.3`
- Body: `1.7`
- UI labels: `1.4`

### Letter Spacing
- Display headings: `-0.02em`
- Section headings: `-0.01em`
- ALL-CAPS labels/tags: `0.08em`
- Body: `0em`

---

## 4. SPACING & LAYOUT GRID

### Base Unit: 4px

```
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px
--space-5:   20px
--space-6:   24px
--space-8:   32px
--space-10:  40px
--space-12:  48px
--space-16:  64px
--space-20:  80px
--space-24:  96px
--space-32:  128px
```

### Container Widths
```
--container-sm:   640px
--container-md:   768px
--container-lg:   1024px
--container-xl:   1280px
--container-2xl:  1440px    /* max content width */
container-padding: 24px (mobile), 40px (tablet), 80px (desktop)
```

### Grid
- Desktop: 12-column grid, 24px gutters
- Tablet: 8-column grid, 20px gutters
- Mobile: 4-column grid, 16px gutters

### Section Vertical Rhythm
- Section padding top/bottom: `96px` desktop, `64px` tablet, `48px` mobile
- Between sections: consistent, no collapsing margins — use padding on sections not margins

### Border Radius
```
--radius-sm:   6px    (badges, tags)
--radius-md:   12px   (cards, inputs)
--radius-lg:   20px   (large cards, modals)
--radius-xl:   32px   (hero visual containers)
--radius-full: 9999px (pills, avatar circles)
```

### Shadows
```
--shadow-sm:   0 1px 3px rgba(13,27,75,0.08), 0 1px 2px rgba(13,27,75,0.05)
--shadow-md:   0 4px 16px rgba(13,27,75,0.10), 0 2px 8px rgba(13,27,75,0.06)
--shadow-lg:   0 12px 40px rgba(13,27,75,0.14), 0 4px 16px rgba(13,27,75,0.08)
--shadow-glow: 0 0 40px rgba(34,211,238,0.20)   (for accent cards)
```

---

## 5. COMPONENT LIBRARY SPECIFICATIONS

### 5.1 Buttons

**Primary Button**
- Background: `--gradient-brand`
- Text: `#FFFFFF`, `font-weight: 600`, `font-size: --text-base`
- Padding: `12px 28px` (default), `14px 36px` (large)
- Border-radius: `--radius-full` (pill shape)
- Border: `none`
- Hover: brightness 110%, slight scale `1.02`, shadow `--shadow-md`
- Active: scale `0.98`
- Transition: `all 0.2s ease`
- Icon support: optional leading or trailing icon with `8px` gap

**Secondary Button**
- Background: `transparent`
- Border: `2px solid --color-blue-primary`
- Text: `--color-blue-primary`
- All other specs same as Primary
- Hover: background `rgba(26,111,232,0.08)`

**Ghost Button (on dark backgrounds)**
- Background: `rgba(255,255,255,0.10)`
- Border: `1px solid rgba(255,255,255,0.25)`
- Text: `#FFFFFF`
- Hover: background `rgba(255,255,255,0.18)`
- Backdrop-filter: `blur(8px)`

**Text Link Button**
- No background, no border
- Text: `--color-blue-primary`
- Underline on hover
- Arrow icon `→` appears on hover with slide-in animation

### 5.2 Input Fields

- Height: `48px` (default), `56px` (large)
- Border: `1.5px solid --color-light-grey`
- Border-radius: `--radius-md`
- Background: `#FFFFFF`
- Font: `Inter`, `--text-base`
- Placeholder color: `--color-mid-grey`
- Focus: border-color `--color-blue-primary`, box-shadow `0 0 0 3px rgba(26,111,232,0.15)`
- Error: border-color `--color-danger`, error message below in `--text-sm`, `--color-danger`
- Padding: `0 16px`

### 5.3 Cards

**Feature Card (Light background)**
- Background: `#FFFFFF`
- Border: `1px solid --color-light-grey`
- Border-radius: `--radius-lg`
- Padding: `28px`
- Shadow: `--shadow-md`
- Hover: transform `translateY(-4px)`, shadow `--shadow-lg`
- Transition: `all 0.3s ease`
- Top accent: `3px` colored top border or icon background in brand color

**Feature Card (Dark background)**
- Background: `rgba(255,255,255,0.06)`
- Border: `1px solid rgba(255,255,255,0.10)`
- Border-radius: `--radius-lg`
- Backdrop-filter: `blur(12px)`
- Padding: `28px`
- Hover: border-color `rgba(34,211,238,0.40)`, background `rgba(255,255,255,0.09)`

**Stat/Metric Card**
- Background: `--gradient-card-dark`
- Large number: `--text-5xl`, `font-weight: 800`, `--gradient-brand` applied as text gradient (`background-clip: text`)
- Label below: `--text-sm`, `rgba(255,255,255,0.6)`
- Border-radius: `--radius-lg`

### 5.4 Navigation Bar

- Position: `fixed`, `top: 0`, `width: 100%`, `z-index: 1000`
- Height: `72px` desktop, `64px` mobile
- Default (at top): `background: transparent`
- Scrolled state: `background: rgba(8,18,42,0.85)`, `backdrop-filter: blur(20px)`, `border-bottom: 1px solid rgba(255,255,255,0.08)`
- Transition: `all 0.3s ease`
- Logo: left-aligned
- Nav links (center, desktop only): `Inter`, `font-weight: 500`, `--text-sm`, color `rgba(255,255,255,0.85)`, hover color `#FFFFFF`, hover underline slide-in from left
- Active link: `#FFFFFF`, `font-weight: 600`
- CTA area (right): "Log In" text link + "Get Started Free" primary button (smaller: `padding: 10px 22px`)
- Mobile: hamburger menu icon (Phosphor `List` icon), slides in from right as a drawer

### 5.5 Section Labels / Eyebrow Tags

These appear above section headings to orient the reader.

- Format: ALL-CAPS, `--text-xs`, `letter-spacing: 0.08em`, `font-weight: 600`
- Style on light backgrounds: pill-shaped tag, background `rgba(26,111,232,0.10)`, text `--color-blue-primary`, border-radius `--radius-full`, padding `4px 14px`
- Style on dark backgrounds: same pill but background `rgba(34,211,238,0.12)`, text `--color-cyan`
- Margin below: `16px` before the heading

### 5.6 Status Badges

Small inline indicators used throughout:

| Badge | Background | Text | Border |
|-------|-----------|------|--------|
| Paid | `rgba(16,185,129,0.12)` | `#059669` | `1px solid rgba(16,185,129,0.25)` |
| Partial | `rgba(245,158,11,0.12)` | `#D97706` | `1px solid rgba(245,158,11,0.25)` |
| Unpaid | `rgba(239,68,68,0.12)` | `#DC2626` | `1px solid rgba(239,68,68,0.25)` |
| Filed | `rgba(26,111,232,0.12)` | `#1A6FE8` | `1px solid rgba(26,111,232,0.25)` |
| Connected | `rgba(16,185,129,0.12)` | `#059669` | — |

Font: `--text-xs`, `font-weight: 600`, padding `3px 10px`, border-radius `--radius-full`

### 5.7 Accordion (FAQ Component)

- Container: `border-radius: --radius-md`, `border: 1px solid --color-light-grey`
- Each item: `border-bottom: 1px solid --color-light-grey`, last item no border
- Question row: `padding: 20px 24px`, `font-weight: 600`, `--text-base`, `--color-text-primary`
- Right icon: Phosphor `CaretDown`, rotates `180deg` on open, `transition: 0.25s ease`
- Answer panel: `padding: 0 24px 20px`, `--text-base`, `color: --color-dark-grey`, animated height (`max-height` transition from `0` to content height)
- Hover on closed: background `--color-off-white`
- Open item: question text `--color-blue-primary`

### 5.8 Footer

- Background: `--color-navy-deep`
- Top border: `1px solid rgba(255,255,255,0.08)`
- 4-column grid on desktop, 2-column on tablet, stacked on mobile
- Column headings: `--text-sm`, `font-weight: 700`, `rgba(255,255,255,0.5)`, `letter-spacing: 0.06em`, ALL-CAPS
- Links: `--text-sm`, `rgba(255,255,255,0.7)`, hover `#FFFFFF`, `transition: color 0.2s`
- Bottom bar: `border-top: 1px solid rgba(255,255,255,0.08)`, `padding: 24px 0`
- Social icons: 36px circle, `background: rgba(255,255,255,0.08)`, `border-radius: --radius-full`, icon `rgba(255,255,255,0.6)`, hover icon `#FFFFFF` and background `--color-blue-primary`

---

## 6. PAGE-BY-PAGE DESIGN SPECIFICATIONS

---

## 6.1 HOMEPAGE

### SECTION 1 — NAVIGATION BAR

**Desktop Layout:**
```
[Logo + Wordmark] ————— [Product] [Pricing] [For Accountants] [Blog] [About] ————— [Log In] [Get Started Free →]
```

**Mobile Layout:** Logo left, hamburger icon right. Drawer slides in from right with full nav links stacked vertically, plus both CTAs at the bottom of the drawer.

**Drawer:** Full-height, `background: --color-navy-deep`, `backdrop-filter: blur(20px)`. Close icon (Phosphor `X`) top-right. Links `--text-xl`, `font-weight: 600`, `color: #FFFFFF`, `padding: 18px 0`, separated by `border-bottom: 1px solid rgba(255,255,255,0.08)`.

**Behavior:** On scroll past 80px, apply frosted glass effect. Smooth transition. The "Get Started Free" button in the nav uses the smaller variant.

---

### SECTION 2 — HERO

**Background:** Full `--gradient-hero-bg`. The gradient sweeps from `#08122A` (bottom-left) to `#1A3A7A` (top-right). Overlay a large radial glow blob: `radial-gradient(ellipse at 70% 30%, rgba(34,211,238,0.12) 0%, transparent 65%)`. Also add subtle diagonal grid lines (very faint, `rgba(255,255,255,0.03)` stripes at `45deg`).

**Layout:** Two-column on desktop (content left 55%, visual right 45%). Single column on mobile with visual below content.

**Content (Left Column):**
- Eyebrow tag: "AI-POWERED FINANCIAL PLATFORM"
- Primary headline (2–3 lines): `--text-6xl`, `font-weight: 800`, `color: #FFFFFF`, `line-height: 1.1`
  - Suggested copy direction: **"Your Business. Your Money. Your Compliance — All Under Control."**
  - The phrase "Your Compliance" should be on its own line in `--gradient-brand` text gradient
- Subheadline: `--text-lg`, `color: rgba(255,255,255,0.75)`, `max-width: 480px`, `margin-top: 20px`
  - Copy: "Taaxbro unifies payments, automated tax compliance, and accounting for Nigerian SMEs in one intelligent platform."
- CTA row: `margin-top: 36px`, flex row, `gap: 16px`
  - Button 1 (Primary): "Get Started Free →"
  - Button 2 (Ghost): "See How It Works ▶"
- Social proof strip: `margin-top: 48px`, flex row, `gap: 32px`, separated by `|` dividers
  - Each stat: `font-weight: 800`, `--text-3xl`, `color: #FFFFFF`; label below in `--text-sm`, `rgba(255,255,255,0.6)`
  - Stats: "10,000+ Businesses" · "₦2B+ Tax Filed" · "95% Compliance Rate"

**Visual (Right Column):**

> 🖼️ **DESIGN IMAGE NEEDED:** A layered product preview composition. Three floating UI cards arranged diagonally:
> - Card 1 (top): A "Payment Received" notification card (green accent, amount in Naira)
> - Card 2 (middle): A "Tax Filing Ready" status card (blue accent, filing period shown)
> - Card 3 (bottom): An invoice card with QR code visible (navy card)
> All three cards should have a glassmorphism treatment (frosted glass look) and cast soft shadows. They are arranged to suggest depth/3D space. The background behind them has a soft glow in cyan.
> **Tell the AI:** Use placeholder card UI components with realistic Naira amounts and Nigerian business names. The design team will replace this with a polished illustration.

**Mobile:** Stack content then visual. Visual cards scale to 85% size. Headline drops to `--text-4xl`.

**Section height:** `min-height: 100vh` on desktop, `min-height: auto` with `padding: 140px 0 80px` on mobile.

---

### SECTION 3 — URGENCY BANNER (2025 Tax Reform)

**Background:** Solid `--color-blue-primary` or try a warm amber `#D97706` — this must contrast strongly with the dark hero above. Recommendation: use a vibrant deep gold-to-orange `linear-gradient(90deg, #C2410C 0%, #D97706 100%)` to signal urgency without using red.

**Layout:** Full-width, `padding: 20px 0` on desktop, `padding: 24px 0` on mobile. Content centered. Single row on desktop (icon + headline + CTA in one line), stacked on mobile.

**Content:**
- Icon: Phosphor `WarningCircle`, `28px`, `#FFFFFF`
- Text: "**Nigeria's 2025 Tax Reform is Live.** New rules, new authority (NRS), mandatory e-invoicing from 2027. Get compliant now."
  - "Nigeria's 2025 Tax Reform is Live." in `font-weight: 700`
  - Rest in `font-weight: 400`
  - Full text: `--text-base`, `color: #FFFFFF`
- CTA link: "Learn how Taaxbro keeps you covered →" in `font-weight: 600`, `color: rgba(255,255,255,0.90)`, underline on hover

---

### SECTION 4 — PROBLEM STATEMENT

**Section label:** "THE CHALLENGE"
**Section heading:** "Running a business in Nigeria is hard enough without tax chaos."
**Section background:** `--color-off-white`

**Layout:** 2×2 grid on desktop and tablet, 1-column stacked on mobile. Cards below the heading.

**Pain Point Cards (4 total):**

Each card: white background, `--shadow-sm`, `border-radius: --radius-lg`, `padding: 28px`, `border-left: 4px solid --color-blue-primary`.

1. **Icon:** Phosphor `ClockCountdown` (blue)
   **Title:** "Tax Calculations That Eat Your Day"
   **Body:** "Manual VAT, WHT, and CIT calculations pull you away from growing your business — every single month."

2. **Icon:** Phosphor `Warning` (amber)
   **Title:** "Missed Deadlines. Surprise Penalties."
   **Body:** "Penalty letters from the tax authority arrive without warning because filing dates are easy to miss without a system."

3. **Icon:** Phosphor `ArrowsLeftRight` (blue)
   **Title:** "Payments Scattered Everywhere"
   **Body:** "Bank apps, POS receipts, and WhatsApp transfer screenshots with zero central visibility. Reconciliation is a nightmare."

4. **Icon:** Phosphor `CurrencyNgn` (red-orange)
   **Title:** "Accountants That Cost Too Much"
   **Body:** "Paying premium fees for routine compliance tasks that an intelligent platform should handle automatically."

**Tone:** Empathetic, not condescending. These are real pains.

---

### SECTION 5 — THE SOLUTION: THREE PILLARS

**Section label:** "THE PLATFORM"
**Section heading:** "Three pillars. One platform. Total financial control."
**Background:** White

**Layout:** Tab-style switcher on desktop/tablet. On mobile, vertical accordion or stacked sections (no tabs — tabs are hard to use on mobile).

**Tab Navigation:** Three tabs, full-width, centered. Each tab: Pillar icon + name. Active tab has `--color-blue-primary` underline `3px` with animated slide.

| Tab | Icon (Phosphor) | Name | Accent Color |
|-----|----------------|------|-------------|
| Tab 1 | `CreditCard` | Taaxbro Pay | `--color-blue-primary` |
| Tab 2 | `FileText` | Taaxbro Tax | `--color-cyan` |
| Tab 3 | `BookOpen` | Taaxbro Books | `#8B5CF6` (violet) |

**Each Tab Content (Two-column: text left, visual right):**

**Tab 1 — Taaxbro Pay:**
- Short pitch: "Accept payments, reconcile income, and never miss a transfer again."
- Feature list (4 items, each with checkmark icon in blue):
  - "Accept payments from bank transfers, POS, and fintech wallets"
  - "Generate shareable payment links for any customer"
  - "Auto-reconcile: when payment arrives, invoice marks itself paid"
  - "Instant WhatsApp alert the moment a customer pays"
- > 🖼️ **DESIGN IMAGE:** A minimal UI mockup of the Transactions list screen — dark card, green "Paid" badge, Naira amounts, Nigerian business names. **Tell the AI:** Use a placeholder card with a transactions table style. Design team replaces.

**Tab 2 — Taaxbro Tax:**
- Short pitch: "VAT, WHT, CIT, PIT, and more — computed automatically, filed with your approval."
- Feature list:
  - "Real-time tax liability computation as transactions happen"
  - "Human-supervised filing: we prepare, you approve, we file"
  - "Connects directly to NRS, LIRS, RIRS, and FCT-IRS"
  - "Deadline calendar so you are never caught off guard"
- > 🖼️ **DESIGN IMAGE:** A minimal UI mockup of a Tax Overview card — showing VAT amount due, next deadline, compliance score ring. Dark card, cyan accents. **Tell the AI:** Placeholder UI card with dummy numbers. Design team replaces.

**Tab 3 — Taaxbro Books:**
- Short pitch: "Professional invoicing, real-time bookkeeping, and instant P&L — without an accountant."
- Feature list:
  - "Generate standard or QR-code invoices in under a minute"
  - "Scan any receipt with your phone camera — AI records the expense"
  - "Auto-generated Profit & Loss and Balance Sheet reports"
  - "Track income, expenses, and outstanding invoices in real time"
- > 🖼️ **DESIGN IMAGE:** A minimal invoice UI mockup — showing a professional invoice with QR code, client name, itemised list, Naira total. Clean white card. **Tell the AI:** Use placeholder HTML invoice card. Design team replaces.

---

### SECTION 6 — AI-POWERED INTELLIGENCE

**Background:** `--color-navy-dark` (dark blue section, provides contrast after white)

**Section label:** "INTELLIGENT AUTOMATION" (in cyan pill)
**Section heading:** "The AI that works inside your business, around the clock." (white text)

**Layout:** Two columns. Left: heading + 4 capability cards. Right: chat UI mockup.

**Left Column — 4 AI Capability Cards (dark glassmorphism cards):**

Each card: icon (32px, cyan) + bold title + 2-sentence description (white/70%)

1. **Icon:** Phosphor `Brain` — **"Automatic Transaction Categorisation"**
   "Every transaction from your connected bank accounts is read and categorised — income, expense, VAT-applicable, or exempt — without you lifting a finger."

2. **Icon:** Phosphor `Calculator` — **"Real-Time Tax Computation"**
   "VAT, WHT, CIT, PIT, Development Levy, and Stamp Duty are calculated the moment each transaction lands, not just at filing time."

3. **Icon:** Phosphor `ChatsCircle` — **"Plain-Language Tax Q&A"**
   "Ask 'Do I charge VAT on this service?' and get a clear, law-referenced answer — 24/7, inside the app and on WhatsApp."

4. **Icon:** Phosphor `ShieldWarning` — **"Anomaly Detection & Risk Flags"**
   "Underreporting patterns, missing filings, and suspicious discrepancies are surfaced early — with corrective action recommendations — before they become penalties."

**Right Column — AI Chat UI Mockup:**

> 🖼️ **DESIGN IMAGE:** A realistic-looking chat interface panel (not a generic phone mockup — a browser-embedded chat panel). Dark background (`--color-navy-deep`), rounded card container. Shows a realistic Q&A exchange:
> - User bubble: "Am I supposed to charge VAT on my consulting services?"
> - Taaxbro AI bubble (blue): "Yes — consulting services are VAT-applicable under the Nigeria Tax Act 2025. Since your annual turnover exceeds ₦25M, you are required to charge and remit 7.5% VAT on every invoice."
> - User bubble: "What about my international clients?"
> - Taaxbro AI bubble: "Services exported to clients outside Nigeria are zero-rated for VAT, meaning you charge 0% — but you must still file and declare them. I can prepare your next VAT return with this distinction already applied."
> Small Taaxbro logo avatar on AI messages. Show timestamp. A text input field at the bottom with "Ask a tax question..." placeholder.
> **Tell the AI:** Build this as a styled React component with hardcoded realistic messages. Design team polishes the visual style.

---

### SECTION 7 — WHATSAPP INTEGRATION HIGHLIGHT

**Background:** Rich dark section with a teal-green tint. Use `linear-gradient(160deg, #0A2A1E 0%, #0D3A2A 100%)`. NOT pure WhatsApp green — a darker, more brand-consistent version that creates visual association without copying.

**Section label:** "WHATSAPP INTEGRATION" (mint green pill)
**Section heading:** "Taaxbro lives inside the app you already use every day." (white)
**Subheading:** `--text-lg`, `rgba(255,255,255,0.70)` — "No new habits to build. No new apps to check. Taaxbro sends notifications, answers questions, and processes receipts — all on WhatsApp."

**Layout:** Two columns. Left: phone mockup with WhatsApp chat. Right: 8-capability icon list.

**Left Column — Phone Mockup:**

> 🖼️ **DESIGN IMAGE:** A phone frame (flat minimal style, dark border) showing a WhatsApp conversation screen. The contact at top is "Taaxbro Business" with the Taaxbro logo as profile picture. Show 4 realistic messages:
> 1. **Taaxbro (incoming):** "✅ Payment Received! Obinna Electronics just paid Invoice #INV-0092 — ₦450,000. Tap to view reconciliation."
> 2. **Taaxbro (incoming):** "📅 VAT Return Reminder: Your October VAT filing (₦87,500) is due in 5 days. Open Taaxbro to review and approve."
> 3. **User (outgoing, with image thumbnail):** [Receipt photo thumbnail]
> 4. **Taaxbro (incoming):** "📸 Receipt scanned! Vendor: Dangote Cement, ₦62,000. VAT charged: ₦4,650 ✅ Correct. Expense saved to Books under 'Building Materials'."
> Use authentic WhatsApp UI styling: dark mode, blue double-check ticks, timestamps, message bubbles. **Tell the AI:** Build as a static HTML/CSS component. Design team provides polished asset.

**Right Column — 8 Capabilities List:**

Displayed as two rows of 4 icons on desktop, 2×4 grid on tablet, stacked list on mobile.

Each item: Phosphor icon (28px, mint green) + short label.

1. `Bell` — Instant payment alerts
2. `CalendarBlank` — Tax deadline reminders
3. `PaperPlaneTilt` — Send invoices via WhatsApp
4. `Camera` — Receipt scanning & OCR
5. `Receipt` — VAT verification on any purchase
6. `Headset` — Raise support tickets
7. `Robot` — AI tax Q&A in chat
8. `Microphone` — Voice note questions (Phase 3)

Each capability: `padding: 16px`, dark glassmorphism card (green-tinted border), icon + label.

---

### SECTION 8 — OCR: SCAN. RECORD. VERIFY.

**Background:** White

**Section label:** "OCR TECHNOLOGY"
**Section heading:** "Photograph any receipt. Taaxbro does the rest."

**Layout:** Two equal lanes side by side on desktop, stacked on mobile. Each lane is a card with a light colored top bar (Use Case A = blue, Use Case B = violet).

**Lane A — "For Business Owners: Record"**
- Tag: "RECORD EXPENSES"
- Heading: "Scan receipts straight into your Books"
- Body: "Take a photo, upload a file, or send it on WhatsApp. Taaxbro reads vendor name, date, amounts, and taxes — and records it instantly with no typing."

- > 🎬 **ANIMATION:** Three-step mini diagram (horizontal steps connected by arrows).
  > Step 1: "Capture" — show 3 icons stacked: Camera icon, Upload icon, WhatsApp icon
  > Step 2: "Taaxbro Reads" — a scanning/processing animation (a glowing scan-line passes over a receipt document)
  > Step 3: "Saved to Books" — a green checkmark appears with "Expense Recorded" label
  > **Tell the AI:** Implement Steps 1 and 3 as static icons with labels. Step 2 should have a CSS animation (a horizontal glowing line sweeping top to bottom over a receipt placeholder). Design team to create polished version.

**Lane B — "For Anyone: Verify VAT"**
- Tag: "VAT PROTECTION"
- Heading: "Know if you were overcharged at the till"
- Body: "Send any receipt — restaurant, supermarket, contractor. Taaxbro checks every VAT line against Nigerian law and tells you exactly whether the charge was correct."

- > 🎬 **ANIMATION:** Three-step mini diagram.
  > Step 1: "Send Receipt" — WhatsApp icon with image thumbnail
  > Step 2: "AI Checks" — scales/balance icon animates (tips left and right)
  > Step 3: "Verdict" — two states shown: "✅ VAT Correct" and "⚠️ Overcharged — ₦1,200 excess"
  > **Tell the AI:** Implement as static icons with labels. Design team creates motion version.

---

### SECTION 9 — TAX ESCROW WALLET

**Background:** Alternating — use `--color-off-white`

**Section label:** "ESCROW WALLET"
**Section heading:** "Your VAT is already saved. We set it aside the moment you got paid."
**Subheading:** "No scrambling at filing time. No borrowing from operations. The money is waiting — ring-fenced and ready."

**Layout:** Two columns. Left: copy + 3-point explanation. Right: wallet UI mockup.

**Left Column — 3 Points:**

Each point: number badge (circle, `--color-blue-primary`, white number) + bold title + one-sentence body.

1. **"Every payment. Automatic."** — "When revenue enters your business, Taaxbro calculates the VAT portion and moves it into your Escrow Wallet immediately."
2. **"Covers VAT and CIT provisions."** — "The wallet holds ring-fenced funds for both VAT remittances and Company Income Tax provisions, tracked separately."
3. **"Released at filing time."** — "When your return is approved and submitted, the exact amount is released to NRS. You never handle it manually."

**Right Column — Wallet UI Mockup:**

> 🖼️ **DESIGN IMAGE:** A clean dashboard card mockup. Dark navy card, with:
> - Header: "Tax Escrow Wallet" + shield/lock icon
> - Large balance: "₦1,240,600" in gradient text
> - Two sub-rows: "VAT Reserve: ₦840,000" and "CIT Provision: ₦400,600"
> - Progress bar: "Next Filing: Jan 31 (14 days)" with a filled progress bar
> - A mini-list of 3 recent contributions: "Acme Ltd payment → +₦67,500" etc.
> **Tell the AI:** Build as a styled React card component with hardcoded dummy data.

---

### SECTION 10 — COMPLIANCE SCORE

**Background:** Dark — `--color-navy-dark`

**Section label:** "COMPLIANCE INTELLIGENCE" (cyan)
**Section heading:** "Know exactly where you stand with the tax authority — right now." (white)

**Layout:** Two columns. Left: score visual. Right: explanation.

**Left — Score Visual:**

> 🎬 **ANIMATION:** A large circular gauge/ring (SVG-based). The ring is 200px diameter, `12px` stroke width. Background ring: `rgba(255,255,255,0.10)`. Filled arc: `--gradient-brand`. Score number (`82`) in the center, `--text-5xl`, `font-weight: 800`, white. Below the number: "Good Standing" in green badge. The arc should animate from 0 to the score value on scroll-into-view (1.2s ease-out). **Tell the AI:** Implement as an SVG circle with `stroke-dasharray` animation triggered by Intersection Observer.

**Right — Explanation:**

- Heading: "Your compliance, measured and managed." (`--text-3xl`, white)
- Body paragraph (`rgba(255,255,255,0.75)`): "Taaxbro calculates a real-time 0–100 score that reflects your complete tax compliance posture. The score considers five factors and updates automatically as your data changes."
- Five factor chips (each: pill shape, dark glassmorphism, cyan dot indicator):
  1. Filings submitted on time
  2. No missing returns
  3. VAT records complete
  4. Bank account connected
  5. No open anomaly flags
- CTA: "See your score in the dashboard →" (ghost button)

---

### SECTION 11 — HOW IT WORKS

**Background:** White

**Section label:** "GET STARTED"
**Section heading:** "Up and running in one afternoon."

**Layout:** Horizontal numbered steps on desktop (connected by a dashed line), vertical stacked on mobile.

**4 Steps:**

Connecting dashed line between step circles on desktop (use CSS `::before` pseudo-element, `border-top: 2px dashed --color-light-grey`).

| # | Icon (Phosphor) | Title | Body |
|---|----------------|-------|------|
| 1 | `LinkSimple` | "Connect your accounts" | "Link your bank, POS, and accounting tools securely via open banking." |
| 2 | `MagicWand` | "Taaxbro organises everything" | "Your financial data is imported, read, and categorised automatically." |
| 3 | `ChartLineUp` | "See your full financial picture" | "Review tax liabilities, compliance score, and payment activity on your dashboard." |
| 4 | `CheckCircle` | "Approve, file, and grow" | "Approve your returns with one tap, file to NRS, and focus on your business." |

Step circles: `56px` circle, `--gradient-brand` background, white step number `--text-xl`, `font-weight: 800`.

---

### SECTION 12 — INTEGRATIONS

**Background:** `--color-off-white`

**Section label:** "INTEGRATIONS"
**Section heading:** "Taaxbro plugs into the tools your business already uses."
**Subheading:** "Connect once — and keep all your financial tools talking to each other."

**Layout:** A scrolling marquee row of integration logos (two rows, continuous scroll animation in opposite directions).

> 🎬 **ANIMATION:** Two horizontal marquee rows. Row 1 scrolls left, Row 2 scrolls right. Continuous, smooth, no gaps (duplicate logos for seamless loop). Speed: ~30s per cycle. On hover over the row, animation pauses.
> **Tell the AI:** Implement with CSS `@keyframes` scroll animation and `animation-play-state: paused` on hover. Use placeholder grey boxes with text labels as logo placeholders.

**Logos to include (use placeholder boxes with text):**

Row 1: GTBank · Access Bank · Zenith Bank · UBA · First Bank · Moniepoint · Nomba · OPay
Row 2: Paystack · Flutterwave · Kuda · QuickBooks · Sage · Xero · Zoho Books · NRS · Gmail · Outlook

Each logo tile: white card, `60px × 40px`, `border-radius: --radius-md`, `--shadow-sm`, `padding: 12px 20px`, grayscale by default, full color on hover.

---

### SECTION 13 — FOR ACCOUNTANTS

**Background:** Gradient panel — `linear-gradient(135deg, #1A3A7A 0%, #0D1B4B 100%)`. Full-width callout box with rounded corners (`--radius-xl`) that doesn't go edge-to-edge — has `margin: 0 80px` on desktop.

**Layout:** Two columns. Left: content. Right: illustration placeholder.

**Content:**
- Eyebrow (cyan pill): "FOR ACCOUNTANTS"
- Heading (white): "One dashboard. All your clients."
- Body (`rgba(255,255,255,0.75)`): "Taaxbro's Accountant Portal gives tax professionals a command centre for managing every client's compliance, filings, and financial health — all in one view."
- 3 Capability points (each with Phosphor `CheckCircle` icon in cyan):
  - "See every client's compliance score at a glance"
  - "Bulk-file returns across multiple businesses simultaneously"
  - "Onboard a new client in under 5 minutes"
- CTA: "Explore the Accountant Portal →" (ghost button, white border)

**Right Column:**
> 🖼️ **DESIGN IMAGE:** A compact mockup of the Accountant Portal overview — a mini data table showing 4–5 client rows with their names, compliance score (colored number), and next deadline. Dark navy card. **Tell the AI:** Use a styled HTML table component with dummy data.

---

### SECTION 14 — TESTIMONIALS & SOCIAL PROOF

**Background:** White

**Section label:** "TRUSTED BY BUSINESSES"
**Section heading:** "What Nigerian business owners are saying."

**Layout:** 3-column testimonial cards on desktop, 2-column on tablet, 1-column on mobile. Cards in a horizontal scroll container on mobile.

**Testimonial Card:**
- Background: `#FFFFFF`, `border: 1px solid --color-light-grey`, `border-radius: --radius-lg`, `padding: 28px`, `--shadow-md`
- Quote marks: Large `"` in `--color-blue-primary` at 20% opacity, decorative, top-left
- Quote text: `--text-base`, `--color-dark-grey`, `font-style: italic`, `line-height: 1.7`
- Divider: thin `1px solid --color-light-grey`
- Author row: Avatar circle (placeholder initials) + name (`font-weight: 600`) + business type (smaller, grey)
- Star rating: 5 gold stars `★★★★★`

**Sample Testimonials (dummy content for AI to use):**

> Card 1: "Since connecting Taaxbro to my GTBank account, I haven't missed a VAT deadline in eight months. The WhatsApp reminders are the best part — they catch me before I even think about it." — **Chidinma O.**, Retail Business Owner, Lagos

> Card 2: "As a freelancer with both Naira and dollar income, I was always confused about my PIT. Taaxbro calculated exactly what I owe and filed everything without me needing an accountant." — **Tunde A.**, Digital Consultant, Abuja

> Card 3: "The Accountant Portal has saved my firm probably 30 hours a month. I manage 40 clients from a single screen. The bulk filing feature alone was worth switching." — **Mrs. Balogun**, Tax Professional, Lagos

**Metrics Strip:** Below the testimonial cards. Dark navy background (`--color-navy-dark`), 3 large stat cards side by side.

| Stat | Number | Label |
|------|--------|-------|
| Businesses | "12,000+" | "Businesses Served" |
| Tax Filed | "₦8B+" | "Tax Filed Successfully" |
| Time Saved | "18hrs" | "Avg. Hours Saved Monthly" |

Numbers: `--text-5xl`, `font-weight: 800`, gradient text. Labels: `--text-sm`, `rgba(255,255,255,0.6)`.

---

### SECTION 15 — PRICING TEASER

**Background:** `--color-off-white`

**Section label:** "PRICING"
**Section heading:** "Simple plans for every stage of your business."

**Layout:** 3 plan cards side by side on desktop, stacked on mobile. Middle card is elevated (Most Popular).

**Plan Cards:**

| Plan | For | Price | Elevation |
|------|-----|-------|-----------|
| Freelancer | Solo earners & sole traders | ₦3,000/mo | Normal |
| SME Starter | Small businesses, 1–10 employees | ₦8,500/mo | **ELEVATED** — `--gradient-brand` top border, `--shadow-lg`, "Most Popular" badge |
| SME Growth | Growing businesses + compliance tools | ₦18,000/mo | Normal |

Each card:
- Plan name: `--text-xl`, `font-weight: 700`, `--color-text-primary`
- For label: `--text-sm`, `--color-mid-grey`
- Price: `--text-4xl`, `font-weight: 800`, `--color-blue-primary`; "/month" in `--text-sm` grey
- 4 key features with Phosphor `Check` icons
- CTA button (Primary for elevated card, Secondary for others)
- Most Popular badge: pill on top of card, `--gradient-brand`, white text, positioned `translateY(-50%)` from card top

Below cards: "See full pricing & feature comparison →" text link, centered.

---

### SECTION 16 — FAQ TEASER

**Background:** White

**Section label:** "COMMON QUESTIONS"
**Section heading:** "Quick answers to what businesses ask us most."

Display 4 FAQ accordions (closed by default, open on click). Use Accordion component spec from Section 5.7.

**Questions (use the brief's FAQ content):**
1. "Is Taaxbro compliant with Nigeria's 2025 tax reform?"
2. "Does Taaxbro file my returns without asking me?"
3. "How does the VAT verification feature work?"
4. "Can I use Taaxbro on WhatsApp without the web app?"

Below accordions: "View all FAQs →" text link button, centered.

---

### SECTION 17 — FINAL CTA (CLOSING SECTION)

**Background:** `--gradient-hero-bg` (full dark navy gradient, same as hero — creates bookend effect). Add the diagonal grid lines overlay again.

**Layout:** Centered, full-width, generous padding (`padding: 120px 0`).

**Content:**
- Headline (white, `--text-5xl`, `font-weight: 800`): "Your business. Fully compliant. Fully in control."
  - "Fully in control." on its own line in `--gradient-brand` text gradient
- Subheadline (`rgba(255,255,255,0.70)`, `--text-lg`): "Join thousands of Nigerian businesses that have removed tax stress from their operations with Taaxbro."
- Two CTAs: "Get Started Free →" (Primary button, large) + "Book a Demo" (Ghost button)
- Below CTAs: "Free trial · No credit card required · Setup in under an hour"  in `--text-sm`, `rgba(255,255,255,0.50)`

> 🎬 **ANIMATION:** Background has gently floating particle dots (small, `rgba(34,211,238,0.15)`, 3–8px, drifting upward slowly). Subtle radial glow pulse behind the headline. **Tell the AI:** Implement particles using CSS `@keyframes` with `animation-delay` staggered across 12–15 absolutely-positioned pseudo-random dots. Design team provides polished motion spec.

---

### SECTION 18 — FOOTER

**Background:** `--color-navy-deep`

**Layout:** 4 columns on desktop, 2×2 grid on tablet, stacked on mobile.

```
[Col 1: Brand]          [Col 2: Product]        [Col 3: Company]         [Col 4: Legal & Support]
Taaxbro logo            Features                 About                    Privacy Policy
"Empowering African     Pricing                  Blog                     Terms of Service
businesses with         For Accountants          Careers                  Help Centre
AI-driven tax           Integrations             Press                    Security
compliance."            Changelog                Contact                  Cookie Policy
[Social icons row]
```

**Bottom Bar:** `border-top: 1px solid rgba(255,255,255,0.08)`, `padding: 24px 0`
- Left: "© 2025 Taaxbro Technologies Ltd. All rights reserved."
- Right: "Built for African Businesses 🌍" tagline
- Social icons: LinkedIn, Twitter/X, Instagram — 36px circles (see component spec)

---

## 6.2 FEATURES PAGE (`/features`)

**Hero (Short):**
- Background: `--gradient-hero-bg`, `padding: 140px 0 80px`
- Eyebrow: "FEATURES"
- Heading: "Everything your business needs to stay financially in control." (white, `--text-5xl`)
- Subheading: "Deep-dive into every capability Taaxbro brings to your business." (white/70%, `--text-lg`)

**Tab Navigation (sticky below hero):**

Sticky anchor nav bar. White background, `box-shadow: --shadow-sm`, tabs for: Payments · Tax · Accounting · Compliance · OCR · WhatsApp. Clicking scrolls to section.

**Each Feature Section:**

Alternating layout — even sections: text left, visual right. Odd sections: visual left, text right. On mobile: always visual top, text bottom.

Section heading: `--text-3xl`, `font-weight: 700`, `--color-text-primary`
Feature cards grid: 3-column grid of feature cards (see component spec 5.3 — light cards).

Each card: Icon + Title + 2-sentence description. 6–8 cards per module section.

> For visual blocks on this page: 🖼️ **DESIGN IMAGES** — one product screenshot mockup per module (Pay, Tax, Books, Compliance, OCR, WhatsApp). Same style as homepage tab visuals. **Tell the AI:** Use placeholder card components per module.

---

## 6.3 PRICING PAGE (`/pricing`)

**Hero (Short):** White background, centered. Heading: "Simple, transparent pricing." Subheading: "Choose the plan that fits your business — upgrade or downgrade anytime."

**Plan Cards Grid:** 4-column on desktop, 2-column on tablet, 1-column on mobile.

Plans:
1. **Freelancer** — ₦3,000/mo — For solo earners
2. **SME Starter** — ₦8,500/mo — For small teams (MOST POPULAR, elevated)
3. **SME Growth** — ₦18,000/mo — For scaling businesses
4. **Accountant** — ₦35,000/mo — Multi-client portal access

**Feature Comparison Table:**

Below plan cards. Full-width table with:
- Column headers: each plan name
- Row groups by category (Payments, Tax, Accounting, Compliance, Support)
- Each cell: ✓ icon (green) or — dash (grey) or feature name (text)
- Sticky header row on scroll

Styling: `--color-off-white` background rows alternate with white. Column for "Most Popular" plan has a `--color-blue-primary` at 5% opacity background.

**Billing FAQ Section:**

3–4 accordions: free trial, plan switching, cancellation, accountant portal pricing.

---

## 6.4 FAQ PAGE (`/faq`)

**Hero (Short):** White. Search bar prominently centered. `input` with Phosphor `MagnifyingGlass` icon left, `placeholder="Search any question..."`. Heading above search: "How can we help?"

**Category Navigation:** Horizontal pill tabs. Categories: Getting Started · Payments · Tax Compliance · OCR & Scanning · WhatsApp · Accounting · Integrations · Billing · Security · 2025 Reform.

Clicking a tab scrolls to the relevant category section.

**FAQ Content:**

Each category: bold category heading (`--text-2xl`), then accordion list. Use Accordion component from 5.7. All items closed by default.

**Bottom CTA:** "Couldn't find your answer?" card — centered, `--color-off-white` background, `border-radius: --radius-lg`, with two CTAs: "Chat with Support" and "Email Us".

---

## 6.5 ABOUT / COMPANY PAGE (`/about`)

**Section: Mission (Full-width hero-style):**
- Background: `--gradient-hero-bg`
- Large centered mission statement (white, `--text-4xl`, `font-weight: 700`, `max-width: 760px`, centered)
- "Taaxbro exists to give every African business owner the financial infrastructure that was previously only available to large corporations — intelligent, automated, and built for the continent."

**Section: Problem We Exist to Solve:**
- White background
- Two-column: narrative text left, key stats right (styled stat cards)
- Stats: "₦2.1T lost annually to tax penalties" · "8M+ SMEs need compliance tools" · "2025 reform creates urgent compliance gap"

**Section: The Team:**
- `--color-off-white` background
- Grid of team member cards: 3-column desktop, 2-column tablet, 1-column mobile
- Each card: Avatar circle (placeholder, 80px, gradient background with initials), Name (`--text-xl`, `font-weight: 700`), Role (`--text-sm`, `--color-blue-primary`), 2-line bio
- > 🖼️ **DESIGN IMAGE:** Placeholder avatar circles with initials and gradient backgrounds. Design team replaces with actual photos.

**Section: Values:**
- White background
- 4 value cards in 2×2 grid (desktop), 1-column (mobile)
- Each: large icon, bold value title, 2-sentence description
- Values examples (AI fills based on brief tone): "We build for the business that cannot afford to get it wrong" · "Human approval, always" · "Compliance should be boring — we make it automatic" · "African businesses deserve world-class infrastructure"

**Section: Press & Recognition:**
- `--color-off-white` background
- Logo strip (placeholder boxes) + quote snippets
- > 🖼️ **DESIGN IMAGE:** Placeholder grey logo boxes labeled "Press Mention 1", "Award 1" etc. Design team replaces when coverage arrives.

**Section: Contact CTA:**
- `--color-navy-dark` background
- Centered: "Want to know more? Let's talk." + "Get In Touch →" primary button

---

## 6.6 BLOG PAGES

### Blog Listing Page (`/blog`)

**Hero:** `--color-off-white`, padding `80px 0 40px`. Heading: "The Taaxbro Blog" + subheading. Search bar. Category filter pills (Tax Tips · Platform Updates · SME Finance · 2025 Reform · Compliance).

**Featured Post:** Full-width card at top — left: large thumbnail (16:9 ratio, placeholder), right: category tag + title (`--text-3xl`, `font-weight: 700`) + excerpt + author + date + "Read More →".

**Post Grid:** 3-column below featured. Each card: thumbnail (16:9, placeholder) + category tag + title + excerpt (2 lines) + author avatar + date + read-time badge.

**Category Tag Style:** Pill, `--radius-full`, `background: rgba(26,111,232,0.10)`, text `--color-blue-primary`, `--text-xs`, `font-weight: 600`.

**Pagination:** Numbered pagination or "Load More" button at bottom.

### Single Blog Post Page (`/blog/[slug]`)

**Layout:** Main content area (`max-width: 720px`, centered) + sticky sidebar on desktop (`280px`).

**Header:**
- Category tag
- Title (`--text-4xl`, `font-weight: 800`, `--color-text-primary`)
- Author row: avatar + name + date + "8 min read" badge
- Hero image (16:9, full content width)

**Body:** `font-family: Inter`, `--text-base`, `line-height: 1.85`, `--color-dark-grey`. Headings use typographic hierarchy. Code blocks: dark background, monospace.

**Sidebar (sticky):**
- Table of Contents (anchor links to headings in article)
- "Share this article" social buttons
- "Related Posts" (3 cards, compact)

**End of Article:**
- Newsletter signup prompt: inline card, `--color-off-white`, email input + button. Do NOT use a modal takeover.
- Author bio card
- 3 related post cards

---

## 6.7 LEGAL PAGES TEMPLATE (`/privacy`, `/terms`)

**Layout:** Two-column, `max-width: 1100px`, centered.

**Left Sidebar (240px, sticky):**
- "Contents" heading
- List of anchor links matching document sections
- Section currently in view: `color: --color-blue-primary`, `border-left: 2px solid --color-blue-primary`, `padding-left: 12px`
- On mobile: sticky top bar dropdown that reveals TOC

**Right Content Area:**
- `max-width: 680px`
- Page header: title (`--text-4xl`) + last updated date (`--text-sm`, grey) + plain-language summary (1 sentence in `--color-off-white` card)
- Heading hierarchy: `h2` for major sections (`--text-2xl`), `h3` for sub-sections (`--text-xl`)
- Body: `--text-base`, `line-height: 1.85`, `max-width: 65ch`
- Note: Only the structural template needed — client's legal team provides actual text content.

**Bottom:** "Questions about this document? Contact legal@taaxbro.com" + links to other legal documents.

---

## 6.8 CONTACT PAGE (`/contact`)

**Layout:** Two-column. Left: contact info. Right: form.

**Left:**
- Heading: "Let's talk."
- Email: support@taaxbro.com
- Phone (optional placeholder)
- Office address (placeholder)
- Social links
- Office hours

**Right — Contact Form:**
- Fields: Name, Business Email, Phone (optional), Subject (dropdown: Sales, Support, Billing, Partnerships, Press), Message textarea
- Submit button: Primary, full-width
- After submit: Success state card replaces form — green icon + "We've received your message. We'll reply within 24 hours." + ticket reference

**Support Widget (Bottom-Right, Fixed, All Pages):**

The widget appears on EVERY page as a fixed bottom-right element.

**States:**

1. **Closed/Bubble:** 56px circle, `--gradient-brand` background, Phosphor `ChatCircle` icon (white, 24px). Unread badge: red circle `20px`, white number. `box-shadow: --shadow-glow`.

2. **Open/Idle:** `320px × 420px` rounded card (`--radius-xl`), `--shadow-lg`, white background. Header: Taaxbro logo small + "Hello 👋 How can we help?" + close button `×`. Body: Search bar "Search our help centre..." + 3 quick-link buttons: "Chat with us", "Email support", "View FAQ".

3. **Compose:** Chat-style interface. Message bubbles (sent: blue, received: grey). Input field at bottom with send button.

4. **Submitted/Success:** Green checkmark animation + "Your message has been sent! Reference: #TXB-001234. Expected reply: within 4 hours."

5. **Error:** Red icon + "Submission failed. Please try again or email us directly." + Retry button.

Widget must work on both light and dark page backgrounds — use `--shadow-lg` to lift it visually from any background.

---

## 7. ANIMATION SPECIFICATIONS

All animations marked with 🎬 above. Summary for the design team:

| Section | Animation Type | AI Implementation | Design Team Upgrade |
|---------|---------------|-------------------|---------------------|
| Hero background | Particle drift + glow pulse | CSS keyframes, staggered dots | Motion design: subtle particle system |
| Compliance Score ring | SVG arc draw on scroll | `stroke-dasharray` + Intersection Observer | Same, polished timing curves |
| Integration logos | Continuous marquee scroll | CSS `@keyframes` translate | Same |
| OCR scan-line | Sweeping glow line | CSS `@keyframes` top-to-bottom | Lottie animation of actual OCR scan |
| Final CTA background | Floating particles | CSS keyframes | Motion design: depth parallax |
| Tab switching (Pillars) | Content fade/slide in | CSS `opacity` + `translateY` transition | Same |
| FAQ accordion | Height expand/collapse | `max-height` CSS transition | Same |
| Scroll-triggered reveals | Sections fade up on enter | Intersection Observer + CSS | Same |

**General Scroll Animation Rule:** All major sections fade up on scroll into view. Use `opacity: 0` + `transform: translateY(24px)` as initial state, `opacity: 1` + `transform: translateY(0)` on enter. Duration: `0.5s`, easing: `cubic-bezier(0.16, 1, 0.3, 1)`. Stagger child elements by `80ms` each.

**Performance Rule:** No heavy JS animation libraries. Use CSS where possible. If JS is needed (particles, score counter), use lightweight custom implementations only.

---

## 8. IMAGE & ILLUSTRATION SPECIFICATIONS

All visuals marked with 🖼️ above. Summary:

| Location | Type | AI Placeholder | Design Team Creates |
|----------|------|---------------|---------------------|
| Hero visual | Design Image | Styled React card components with dummy data | Polished 3D layered dashboard composition illustration |
| Pillar tabs (3 visuals) | Design Image | Styled HTML/CSS card mockups | Product UI illustrations per pillar |
| AI chat panel | Design Image | Static React chat component | Polished chat UI design with brand avatar |
| WhatsApp phone mockup | Design Image | Static HTML WhatsApp-style layout | Realistic phone frame with custom WhatsApp UI |
| OCR scan animation | Animation | CSS scan-line animation | Lottie/After Effects animated receipt scan |
| Escrow wallet card | Design Image | Styled React dashboard card | Polished UI illustration |
| Accountant portal teaser | Design Image | Styled HTML data table | Portal UI mockup |
| Team photos | Design Image | Gradient circles with initials | Actual team portraits |
| Press logos | Design Image | Grey placeholder boxes | Brand logos |
| Blog thumbnails | Design Image | Colored placeholder divs | Custom illustrated thumbnails |

**Placeholder Image Strategy for AI:**
- Use `https://placehold.co/` for any static placeholder images: e.g., `https://placehold.co/600x400/0D1B4B/FFFFFF?text=Dashboard+Preview`
- Custom color placeholders: dark blue (`0D1B4B`), medium blue (`1A3A7A`), or off-white (`F8FAFF`)
- Team avatars: gradient circle `div` with initials, no external URL needed

---

## 9. RESPONSIVE BREAKPOINTS

```css
/* Breakpoints */
--bp-mobile:   375px    /* Small phone */
--bp-sm:       480px    /* Large phone */
--bp-md:       768px    /* Tablet portrait */
--bp-lg:       1024px   /* Tablet landscape / small desktop */
--bp-xl:       1280px   /* Desktop */
--bp-2xl:      1440px   /* Large desktop */

/* Usage (mobile-first) */
/* Default styles = mobile (375px+) */
/* @media (min-width: 768px)  = tablet */
/* @media (min-width: 1024px) = desktop */
/* @media (min-width: 1280px) = large desktop */
```

**Per-Section Mobile Rules:**

| Section | Mobile Change |
|---------|-------------|
| Nav | Hamburger drawer |
| Hero | Stack layout, visual below content, headline `--text-4xl` |
| Problem Cards | 1-column stack |
| Pillars | No tabs — vertical accordion sections |
| AI Section | Stack — visual below content |
| WhatsApp | Phone mockup scales to 80% |
| OCR Lanes | Stacked vertically |
| How It Works | Vertical timeline with line left of steps |
| Integrations | Single-row marquee |
| Testimonials | Horizontal scroll (swipe) |
| Pricing Teaser | Stacked cards |
| Footer | Stacked columns, 2×2 then 1 |

---

## 10. REACT ARCHITECTURE NOTES

### Recommended Libraries

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-router-dom": "^6.x",
    "phosphor-react": "^1.4.x",
    "framer-motion": "^11.x",      // For scroll animations and transitions
    "react-intersection-observer": "^9.x",  // For scroll triggers
    "@headlessui/react": "^2.x"    // For accessible accordions and tabs
  }
}
```

### Folder Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── SupportWidget.jsx
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Badge.jsx
│   │   ├── Accordion.jsx
│   │   ├── SectionLabel.jsx
│   │   └── ComplianceScoreRing.jsx
│   ├── sections/           // One component per homepage section
│   │   ├── HeroSection.jsx
│   │   ├── UrgencyBanner.jsx
│   │   ├── ProblemSection.jsx
│   │   ├── PillarsSection.jsx
│   │   ├── AISection.jsx
│   │   ├── WhatsAppSection.jsx
│   │   ├── OCRSection.jsx
│   │   ├── EscrowSection.jsx
│   │   ├── ComplianceScoreSection.jsx
│   │   ├── HowItWorksSection.jsx
│   │   ├── IntegrationsSection.jsx
│   │   ├── AccountantsSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── PricingTeaserSection.jsx
│   │   ├── FAQTeaserSection.jsx
│   │   └── FinalCTASection.jsx
│   └── mockups/            // All placeholder UI mockups
│       ├── PayMockup.jsx
│       ├── TaxMockup.jsx
│       ├── BooksMockup.jsx
│       ├── WalletMockup.jsx
│       ├── ChatMockup.jsx
│       └── WhatsAppMockup.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── FeaturesPage.jsx
│   ├── PricingPage.jsx
│   ├── FAQPage.jsx
│   ├── AboutPage.jsx
│   ├── BlogListPage.jsx
│   ├── BlogPostPage.jsx
│   ├── LegalPage.jsx
│   └── ContactPage.jsx
├── styles/
│   └── globals.css         // CSS custom properties (all tokens defined here)
├── hooks/
│   ├── useScrollAnimation.js
│   └── useNavScroll.js
└── App.jsx
```

### CSS Custom Properties

Declare ALL color, spacing, typography, and shadow tokens in `globals.css` at `:root`. This makes global theming easy. Never hardcode hex values directly in component styles.

### Animation Pattern (Scroll Reveal)

Use `react-intersection-observer` for scroll triggers. Wrap any section that needs a fade-up entrance in a `<motion.div>` from `framer-motion` with `initial={{ opacity: 0, y: 24 }}` and `animate={{ opacity: 1, y: 0 }}` triggered by `inView`. Set `transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }`.

### Tab Component (Pillars Section)

Use `@headlessui/react` `Tab` component for the Pillars section and Features page tab navigation — it provides accessible keyboard navigation and ARIA roles out of the box.

### Accordion Component

Use `@headlessui/react` `Disclosure` for all FAQ accordions — accessible, animated height, keyboard navigable.

### Routing

Use `react-router-dom` v6 with `<BrowserRouter>`. Smooth scroll to anchor (`#`) for How It Works step links and Features page tab navigation.

### Performance

- Lazy-load all page components with `React.lazy` and `Suspense`
- Lazy-load images with `loading="lazy"` attribute and `react-intersection-observer`
- Marquee animation must use CSS only (no JS scroll loop) for performance
- Compliance score SVG animation triggers only when in viewport

---

*End of Taaxbro Marketing Website Design Guide · v1.0 · May 2025*
*Prepared for AI-assisted React development · Design team to replace all placeholder visuals and animations with polished assets*