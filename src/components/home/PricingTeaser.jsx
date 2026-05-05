import React from 'react';
import { Check } from 'phosphor-react';
import Button from '../common/Button';
import ScrollReveal from '../common/ScrollReveal';
import './PricingTeaser.css';

const PricingCard = ({ name, forLabel, price, features, isPopular }) => (
  <div className={`pricing-card card card-light ${isPopular ? 'popular' : ''}`}>
    {isPopular && <div className="popular-badge">Most Popular</div>}
    <h3 className="plan-name">{name}</h3>
    <p className="plan-for">{forLabel}</p>
    <div className="plan-price">
      <span className="currency">₦</span>
      <span className="amount">{price}</span>
      <span className="period">/mo</span>
    </div>
    
    <ul className="plan-features">
      {features.map((feature, i) => (
        <li key={i}>
          <Check size={18} color="var(--color-blue-primary)" weight="bold" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>

    <Button variant={isPopular ? 'primary' : 'secondary'} className="w-full">
      Get Started
    </Button>
  </div>
);

const PricingTeaser = () => {
  const plans = [
    {
      name: "Freelancer",
      forLabel: "Solo earners & sole traders",
      price: "3,000",
      features: ["Basic VAT computation", "WhatsApp notifications", "5 invoices / month", "Single bank connection"]
    },
    {
      name: "SME Starter",
      forLabel: "Small businesses, 1–10 employees",
      price: "8,500",
      features: ["Full tax computation (VAT, WHT)", "Unlimited invoices & QR codes", "Accounting Portal", "Priority WhatsApp support"],
      isPopular: true
    },
    {
      name: "SME Growth",
      forLabel: "Growing businesses + compliance tools",
      price: "18,000",
      features: ["All SME Starter features", "Tax Escrow Wallet", "Human-supervised filing", "Bulk payment processing"]
    }
  ];

  return (
    <section className="pricing-teaser section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="eyebrow eyebrow-light">PRICING</span>
            <h2 className="section-title">Simple plans for every stage of your business.</h2>
          </div>
        </ScrollReveal>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <PricingCard {...plan} />
            </ScrollReveal>
          ))}
        </div>

        <div className="pricing-footer">
          <a href="/pricing" className="btn-link">See full pricing & feature comparison →</a>
        </div>
      </div>
    </section>
  );
};

export default PricingTeaser;
