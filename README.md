# Taaxbro Marketing Website

Taaxbro is an enterprise-grade financial operating system designed specifically for the Nigerian business landscape. This repository contains the high-performance marketing website, built with a focus on premium aesthetics, interactive storytelling, and 2025 tax reform compliance.

## 🚀 Key Features

### 1. Advanced Brand Identity System
- **Precision Typography**: Utilizing a curated type scale (Inter & Outfit) for maximum readability and professional impact.
- **Dynamic Color Palettes**: A sophisticated design system featuring deep navy, vibrant cyan, and high-contrast alert tones for financial clarity.
- **Glassmorphism & Gradients**: Modern UI surfaces utilizing backdrop blurs and complex radial gradients to create depth.

### 2. Interactive Experience
- **Compliance Score Intelligence**: Real-time SVG-animated gauge illustrating business compliance posture.
- **AI-Driven Mockups**: Integrated chat interfaces and OCR (Optical Character Recognition) scanning animations to visualize technical capabilities.
- **WhatsApp Integration**: High-fidelity phone mockups demonstrating the "Tax-on-the-go" WhatsApp bot functionality.
- **Continuous Marquee**: A performance-optimized CSS integration marquee showcasing ecosystem connectivity.

### 3. Comprehensive Routing
- **Homepage**: 18 strategically architected sections for conversion and education.
- **Feature Deep-Dives**: Modular sections for Payments, Tax, Accounting, and Compliance modules.
- **Strategic Pricing**: Transparent 4-tier plan comparison with detailed feature matrix.
- **Support Ecosystem**: Interactive, state-aware Support Widget present across the entire application.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite 5](https://vitejs.dev/) (optimized for fast HMR)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (for scroll-triggered reveals)
- **Icons**: [Phosphor Icons](https://phosphoricons.com/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Styling**: Vanilla CSS with Advanced Custom Properties (Design System tokens)

## 📦 Project Structure

```text
src/
├── components/
│   ├── common/      # Reusable UI elements (Buttons, Cards, Badges)
│   ├── home/        # Section-specific components for the Homepage
│   └── layout/      # Global Layout (Navbar, Footer, SupportWidget)
├── pages/           # High-level page assemblies (Home, Features, Pricing, etc.)
├── styles/          # Design System tokens and global utilities
└── App.jsx          # Root routing and Suspense logic
```

## ⚡ Performance Optimizations

- **Lazy Loading**: All secondary pages are loaded asynchronously using `React.lazy` and `Suspense`.
- **CSS-First Animations**: Leveraging GPU acceleration for marquee and background effects.
- **SVG Optimization**: Lightweight vector assets for all technical illustrations and gauges.

## 🏁 Getting Started

### Prerequisites
- Node.js (v20.x or later)
- npm

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

---

*Built by Antigravity · © 2025 Taaxbro Technologies Ltd.*
