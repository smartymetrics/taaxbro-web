import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, FileText, BookOpen, ShieldCheck, Camera, WhatsappLogo } from 'phosphor-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SupportWidget from '../components/layout/SupportWidget';
import './FeaturesPage.css';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="feature-detail-card card card-light">
    <div className="feature-detail-icon">
      <Icon size={24} weight="bold" />
    </div>
    <h4 className="feature-detail-title">{title}</h4>
    <p className="feature-detail-desc">{desc}</p>
  </div>
);

const FeatureSection = ({ id, label, title, subtitle, icon, cards, reverse }) => (
  <section id={id} className="feature-section section-padding">
    <div className="container">
      <div className={`feature-section-grid ${reverse ? 'reverse' : ''}`}>
        <div className="feature-section-content">
          <span className="eyebrow eyebrow-light">{label}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
          
          <div className="feature-cards-grid">
            {cards.map((card, i) => (
              <FeatureCard key={i} {...card} />
            ))}
          </div>
        </div>
        
        <div className="feature-section-visual">
          <div className="visual-placeholder card-dark">
            <div className="visual-icon">
              {React.createElement(icon, { size: 64, color: 'var(--color-cyan)' })}
            </div>
            <div className="visual-label">{label} Module Preview</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeaturesPage = () => {
  const [activeTab, setActiveTab] = useState('payments');

  const tabs = [
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'tax', label: 'Tax', icon: FileText },
    { id: 'accounting', label: 'Accounting', icon: BookOpen },
    { id: 'compliance', label: 'Compliance', icon: ShieldCheck },
    { id: 'ocr', label: 'OCR', icon: Camera },
    { id: 'whatsapp', label: 'WhatsApp', icon: WhatsappLogo },
  ];

  const featuresData = {
    payments: {
      label: "PAYMENTS",
      title: "Taaxbro Pay: Smarter reconciliation for every Naira.",
      subtitle: "Stop chasing bank alerts. Taaxbro unifies all your incoming payments into a single, automated workflow.",
      icon: CreditCard,
      cards: [
        { icon: CreditCard, title: "Virtual Bank Accounts", desc: "Generate dedicated bank accounts for every customer to automate tracking." },
        { icon: CreditCard, title: "Payment Links", desc: "Send professional links that accept transfers, cards, and USSD." },
        { icon: CreditCard, title: "POS Integration", desc: "Connect your physical POS terminals directly to your Taaxbro dashboard." },
        { icon: CreditCard, title: "Auto-Reconciliation", desc: "Every payment is matched to its invoice the second it arrives." },
        { icon: CreditCard, title: "Instant Settlements", desc: "Access your funds immediately with no T+1 waiting periods." },
        { icon: CreditCard, title: "WhatsApp Alerts", desc: "Get notified on WhatsApp the moment a customer makes a payment." }
      ]
    },
    tax: {
      label: "TAX COMPLIANCE",
      title: "Tax filing that actually makes sense.",
      subtitle: "No more messy spreadsheets. Taaxbro computes, prepares, and files your taxes with professional precision.",
      icon: FileText,
      cards: [
        { icon: FileText, title: "Automated VAT", desc: "Real-time computation of VAT on every sale and purchase." },
        { icon: FileText, title: "WHT Management", desc: "Track Withholding Tax credit notes and liabilities automatically." },
        { icon: FileText, title: "CIT Provisioning", desc: "We set aside your Company Income Tax throughout the year." },
        { icon: FileText, title: "Direct NRS Filing", desc: "Submit returns directly to the tax authority with one tap." },
        { icon: FileText, title: "Tax Clearance", desc: "Generate data for your TCC applications without the stress." },
        { icon: FileText, title: "Audit-Ready Logs", desc: "Every filing is backed by a complete transaction audit trail." }
      ]
    }
    // ... more modules can be added following same pattern
  };

  const scrollTo = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 140; // sticky header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="features-page">
      <Navbar />
      
      <header className="features-hero">
        <div className="container">
          <span className="eyebrow eyebrow-dark">FEATURES</span>
          <h1 className="hero-title white">Everything your business needs to stay financially in control.</h1>
          <p className="hero-subtitle white-70">Deep-dive into every capability Taaxbro brings to your business.</p>
        </div>
      </header>

      <nav className="sticky-nav">
        <div className="container">
          <div className="nav-tabs">
            {tabs.map((tab) => (
              <button 
                key={tab.id}
                className={`nav-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => scrollTo(tab.id)}
              >
                <tab.icon size={20} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main>
        <FeatureSection 
          id="payments" 
          {...featuresData.payments} 
        />
        <FeatureSection 
          id="tax" 
          {...featuresData.tax} 
          reverse={true}
        />
        {/* Placeholder for other sections */}
        <section className="section-padding" style={{ textAlign: 'center' }}>
          <p className="white-70">More feature modules coming soon...</p>
        </section>
      </main>

      <Footer />
      <SupportWidget />
    </div>
  );
};

export default FeaturesPage;
