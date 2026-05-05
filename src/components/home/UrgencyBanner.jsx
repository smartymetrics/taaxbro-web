import React from 'react';
import { WarningCircle, ArrowRight } from 'phosphor-react';
import ScrollReveal from '../common/ScrollReveal';
import './UrgencyBanner.css';

const UrgencyBanner = () => {
  return (
    <section className="urgency-banner">
      <ScrollReveal className="container banner-container" delay={0.1}>
        <WarningCircle size={28} color="white" weight="bold" />
        <p className="banner-text">
          <span className="banner-bold">Nigeria's 2025 Tax Reform is Live.</span> New rules, new authority (NRS), mandatory e-invoicing from 2027. Get compliant now.
        </p>
        <a href="#compliance" className="banner-cta">
          Learn More <ArrowRight size={16} />
        </a>
      </ScrollReveal>
    </section>
  );
};

export default UrgencyBanner;
