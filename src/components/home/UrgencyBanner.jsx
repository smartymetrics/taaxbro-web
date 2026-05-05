import React from 'react';
import { WarningCircle } from 'phosphor-react';
import './UrgencyBanner.css';

const UrgencyBanner = () => {
  return (
    <div className="urgency-banner">
      <div className="container banner-container">
        <WarningCircle size={28} color="white" weight="bold" />
        <p className="banner-text">
          <span className="banner-bold">Nigeria's 2025 Tax Reform is Live.</span> New rules, new authority (NRS), mandatory e-invoicing from 2027. Get compliant now.
        </p>
        <a href="#learn-more" className="banner-link">
          Learn how Taaxbro keeps you covered →
        </a>
      </div>
    </div>
  );
};

export default UrgencyBanner;
