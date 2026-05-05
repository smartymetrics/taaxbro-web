import React from 'react';
import { Check, Minus } from 'phosphor-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SupportWidget from '../components/layout/SupportWidget';
import Button from '../components/common/Button';
import ScrollReveal from '../components/common/ScrollReveal';
import FAQTeaser from '../components/home/FAQTeaser';
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
  React.useEffect(() => {
    document.title = "Pricing | Taaxbro";
  }, []);

  const plans = [
    { name: "Freelancer", price: "3,000", forLabel: "For solo earners" },
    { name: "SME Starter", price: "8,500", forLabel: "For small teams", isPopular: true },
    { name: "SME Growth", price: "18,000", forLabel: "For scaling businesses" },
    { name: "Accountant", price: "35,000", forLabel: "Multi-client portal" }
  ];

  return (
    <div className="pricing-page">
      <Navbar />
      
      <ScrollReveal>
        <header className="pricing-hero">
          <div className="container">
            <span className="eyebrow eyebrow-light">PRICING PLANS</span>
            <h1 className="section-title">Simple, transparent pricing.</h1>
            <p className="section-subtitle">Choose the plan that fits your business — upgrade or downgrade anytime.</p>
          </div>
        </header>
      </ScrollReveal>

      <section className="pricing-plans-section">
        <div className="container">
          <div className="pricing-detail-grid">
            {plans.map((plan, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <PlanCard {...plan} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="comparison-section section-padding">
        <div className="container">
          <ScrollReveal>
            <h2 className="comparison-title">Compare Features</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
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
                  <tr className="category-row"><td colSpan="5">Payments & Invoicing</td></tr>
                  <ComparisonRow feature="Bank Connections" plans={["1 Account", "Unlimited", "Unlimited", "Unlimited"]} />
                  <ComparisonRow feature="Monthly Invoices" plans={["5", "Unlimited", "Unlimited", "Unlimited"]} />
                  <ComparisonRow feature="QR Code Invoices" plans={[false, true, true, true]} />
                  <ComparisonRow feature="WhatsApp Payment Alerts" plans={[true, true, true, true]} />
                  <ComparisonRow feature="Multi-Currency Support" plans={[false, "Naira Only", "Naira & USD", "Global"]} />
                  
                  <tr className="category-row"><td colSpan="5">Tax & Compliance</td></tr>
                  <ComparisonRow feature="VAT Computation" plans={[true, true, true, true]} />
                  <ComparisonRow feature="WHT Tracking" plans={[false, true, true, true]} />
                  <ComparisonRow feature="NRS Direct Filing" plans={[false, true, true, true]} />
                  <ComparisonRow feature="Tax Escrow Wallet" plans={[false, false, true, true]} />
                  <ComparisonRow feature="Audit Log" plans={[false, true, true, true]} />
                  <ComparisonRow feature="Compliance Scorecard" plans={[true, true, true, true]} />
                  
                  <tr className="category-row"><td colSpan="5">Management</td></tr>
                  <ComparisonRow feature="Users" plans={["1", "3", "Unlimited", "Unlimited"]} />
                  <ComparisonRow feature="Accountant Portal" plans={[false, true, true, true]} />
                  <ComparisonRow feature="OCR Receipt Scanning" plans={["5/mo", "Unlimited", "Unlimited", "Unlimited"]} />
                  
                  <tr className="category-row"><td colSpan="5">Support</td></tr>
                  <ComparisonRow feature="Support Level" plans={["Email", "Priority WhatsApp", "Dedicated Manager", "Priority"]} />
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FAQTeaser />

      <section className="cta-section section-padding bg-dark">
        <div className="container centered">
          <ScrollReveal>
            <h2 className="white">Still have questions?</h2>
            <p className="white-70 mb-32">Our team is ready to help you find the right plan for your business.</p>
            <div className="cta-buttons">
              <Button variant="primary" size="large">Get Started Now</Button>
              <Button variant="ghost" size="large">Contact Sales</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <SupportWidget />
    </div>
  );
};

export default PricingPage;
