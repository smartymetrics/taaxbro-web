import React from 'react';
import ScrollReveal from '../common/ScrollReveal';
import './Integrations.css';

const IntegrationLogo = ({ name }) => (
  <div className="logo-tile">
    <span>{name}</span>
  </div>
);

const Integrations = () => {
  const row1 = ["GTBank", "Access Bank", "Zenith Bank", "UBA", "First Bank", "Moniepoint", "Nomba", "OPay"];
  const row2 = ["Paystack", "Flutterwave", "Kuda", "QuickBooks", "Sage", "Xero", "Zoho Books", "NRS", "Gmail", "Outlook"];

  return (
    <section className="integrations section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="eyebrow eyebrow-light">INTEGRATIONS</span>
            <h2 className="section-title">Taaxbro plugs into the tools your business already uses.</h2>
            <p className="section-subtitle">Connect once — and keep all your financial tools talking to each other.</p>
          </div>
        </ScrollReveal>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee marquee-left">
          <div className="marquee-content">
            {row1.map((name, i) => <IntegrationLogo key={i} name={name} />)}
            {/* Duplicate for seamless loop */}
            {row1.map((name, i) => <IntegrationLogo key={`dup-${i}`} name={name} />)}
          </div>
        </div>

        <div className="marquee marquee-right">
          <div className="marquee-content">
            {row2.map((name, i) => <IntegrationLogo key={i} name={name} />)}
            {/* Duplicate for seamless loop */}
            {row2.map((name, i) => <IntegrationLogo key={`dup-${i}`} name={name} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
