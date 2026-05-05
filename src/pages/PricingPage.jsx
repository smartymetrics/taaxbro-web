import React from 'react';
import { Check, Minus } from 'phosphor-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SupportWidget from '../components/layout/SupportWidget';
import Button from '../components/common/Button';
import './PricingPage.css';

const PlanCard = ({ name, price, forLabel, isPopular }) => (
  <div className={`pricing-detail-card card card-light ${isPopular ? 'popular' : ''}`}>
    {isPopular && <div className="popular-badge">MOST POPULAR</div>}
    <h3 className="plan-name">{name}</h3>
    <p className="plan-for">{forLabel}</p>
    <div className="plan-price">
      <span className="currency">₦</span>
      <span className="amount">{price}</span>
      <span className="period">/mo</span>
    </div>
    <Button variant={isPopular ? 'primary' : 'secondary'} style={{ width: '100%' }}>
      Choose {name}
    </Button>
  </div>
);

const ComparisonRow = ({ feature, plans }) => (
  <tr>
    <td className="feature-name">{feature}</td>
    {plans.map((p, i) => (
      <td key={i} className="feature-val">
        {typeof p === 'boolean' ? (
          p ? <Check size={20} color="var(--color-success)" weight="bold" /> : <Minus size={20} color="var(--color-light-grey)" />
        ) : p}
      </td>
    ))}
  </tr>
);

const PricingPage = () => {
  const plans = [
    { name: "Freelancer", price: "3,000", forLabel: "For solo earners" },
    { name: "SME Starter", price: "8,500", forLabel: "For small teams", isPopular: true },
    { name: "SME Growth", price: "18,000", forLabel: "For scaling businesses" },
    { name: "Accountant", price: "35,000", forLabel: "Multi-client portal" }
  ];

  return (
    <div className="pricing-page">
      <Navbar />
      
      <header className="pricing-hero">
        <div className="container">
          <h1 className="section-title">Simple, transparent pricing.</h1>
          <p className="section-subtitle">Choose the plan that fits your business — upgrade or downgrade anytime.</p>
        </div>
      </header>

      <section className="pricing-plans-section">
        <div className="container">
          <div className="pricing-detail-grid">
            {plans.map((plan, i) => <PlanCard key={i} {...plan} />)}
          </div>
        </div>
      </section>

      <section className="comparison-section section-padding">
        <div className="container">
          <h2 className="comparison-title">Compare Features</h2>
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Freelancer</th>
                  <th className="popular-col">SME Starter</th>
                  <th>SME Growth</th>
                  <th>Accountant</th>
                </tr>
              </thead>
              <tbody>
                <tr className="category-row"><td colSpan="5">Payments</td></tr>
                <ComparisonRow feature="Bank Connections" plans={["1 Account", "Unlimited", "Unlimited", "Unlimited"]} />
                <ComparisonRow feature="Monthly Invoices" plans={["5", "Unlimited", "Unlimited", "Unlimited"]} />
                <ComparisonRow feature="QR Code Invoices" plans={[false, true, true, true]} />
                <ComparisonRow feature="WhatsApp Alerts" plans={[true, true, true, true]} />
                
                <tr className="category-row"><td colSpan="5">Tax Compliance</td></tr>
                <ComparisonRow feature="VAT Computation" plans={[true, true, true, true]} />
                <ComparisonRow feature="WHT Tracking" plans={[false, true, true, true]} />
                <ComparisonRow feature="NRS Direct Filing" plans={[false, true, true, true]} />
                <ComparisonRow feature="Tax Escrow Wallet" plans={[false, false, true, true]} />
                
                <tr className="category-row"><td colSpan="5">Support</td></tr>
                <ComparisonRow feature="Support Level" plans={["Email", "Priority WhatsApp", "Dedicated Manager", "Priority"]} />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
      <SupportWidget />
    </div>
  );
};

export default PricingPage;
