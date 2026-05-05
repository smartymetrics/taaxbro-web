import React, { useState } from 'react';
import { CreditCard, FileText, BookOpen, Check } from 'phosphor-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../common/ScrollReveal';
import './SolutionPillars.css';

const pillars = [
  {
    id: 'pay',
    icon: CreditCard,
    name: "Taaxbro Pay",
    accent: "var(--color-blue-primary)",
    pitch: "Accept payments, reconcile income, and never miss a transfer again.",
    features: [
      "Accept payments from bank transfers, POS, and fintech wallets",
      "Generate shareable payment links for any customer",
      "Auto-reconcile: when payment arrives, invoice marks itself paid",
      "Instant WhatsApp alert the moment a customer pays"
    ],
    visualType: 'transactions'
  },
  {
    id: 'tax',
    icon: FileText,
    name: "Taaxbro Tax",
    accent: "var(--color-cyan)",
    pitch: "VAT, WHT, CIT, PIT, and more — computed automatically, filed with your approval.",
    features: [
      "Real-time tax liability computation as transactions happen",
      "Human-supervised filing: we prepare, you approve, we file",
      "Connects directly to NRS, LIRS, RIRS, and FCT-IRS",
      "Deadline calendar so you are never caught off guard"
    ],
    visualType: 'tax-overview'
  },
  {
    id: 'books',
    icon: BookOpen,
    name: "Taaxbro Books",
    accent: "#8B5CF6", // violet
    pitch: "Professional invoicing, real-time bookkeeping, and instant P&L — without an accountant.",
    features: [
      "Generate standard or QR-code invoices in under a minute",
      "Scan any receipt with your phone camera — AI records the expense",
      "Auto-generated Profit & Loss and Balance Sheet reports",
      "Track income, expenses, and outstanding invoices in real time"
    ],
    visualType: 'invoice'
  }
];

const SolutionPillars = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="solution-pillars section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="eyebrow eyebrow-light">THE PLATFORM</span>
            <h2 className="section-title">Three pillars. One platform. Total financial control.</h2>
          </div>
        </ScrollReveal>

        <div className="tabs-container desktop-only">
          {pillars.map((pillar, index) => (
            <button 
              key={pillar.id}
              className={`tab-btn ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
              style={{ '--accent-color': pillar.accent }}
            >
              <pillar.icon size={24} />
              <span>{pillar.name}</span>
              {activeTab === index && (
                <motion.div layoutId="activeTab" className="active-indicator" />
              )}
            </button>
          ))}
        </div>

        <div className="tab-content-wrapper desktop-only">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="tab-content"
            >
              <div className="tab-text">
                <h3 className="tab-pitch">{pillars[activeTab].pitch}</h3>
                <ul className="feature-list">
                  {pillars[activeTab].features.map((feature, i) => (
                    <li key={i} className="feature-item">
                      <div className="check-icon" style={{ background: `${pillars[activeTab].accent}20`, color: pillars[activeTab].accent }}>
                        <Check size={16} weight="bold" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="tab-visual">
                {pillars[activeTab].visualType === 'transactions' && (
                  <div className="mockup-card transactions-mockup">
                    <div className="mockup-header">Transactions</div>
                    {[1, 2, 3].map(i => (
                      <div key={i} className="mockup-row">
                        <div className="mockup-avatar"></div>
                        <div className="mockup-info">
                          <div className="mockup-name">Customer {i}</div>
                          <div className="mockup-date">Oct {20+i}, 2025</div>
                        </div>
                        <div className="mockup-amount">₦{(50000 * i).toLocaleString()}</div>
                        <div className="badge badge-paid">Paid</div>
                      </div>
                    ))}
                  </div>
                )}
                {pillars[activeTab].visualType === 'tax-overview' && (
                  <div className="mockup-card tax-mockup">
                    <div className="mockup-header">Tax Overview</div>
                    <div className="tax-stat">
                      <div className="tax-stat-label">VAT Due (Oct)</div>
                      <div className="tax-stat-value" style={{ color: 'var(--color-cyan)' }}>₦840,000</div>
                    </div>
                    <div className="tax-progress">
                      <div className="tax-progress-bar">
                        <div className="tax-progress-fill" style={{ width: '82%', background: 'var(--color-cyan)' }}></div>
                      </div>
                      <div className="tax-progress-label">Compliance Score: 82</div>
                    </div>
                    <div className="tax-deadline">Next Deadline: Nov 21</div>
                  </div>
                )}
                {pillars[activeTab].visualType === 'invoice' && (
                  <div className="mockup-card invoice-mockup">
                    <div className="invoice-preview-header">
                      <div className="invoice-logo"></div>
                      <div className="invoice-meta">
                        <div>Invoice #INV-001</div>
                        <div>Due: Nov 15, 2025</div>
                      </div>
                    </div>
                    <div className="invoice-divider"></div>
                    <div className="invoice-items">
                      <div className="invoice-item-row"><span>Services</span><span>₦100,000</span></div>
                      <div className="invoice-item-row"><span>VAT (7.5%)</span><span>₦7,500</span></div>
                    </div>
                    <div className="invoice-divider"></div>
                    <div className="invoice-total">
                      <span>Total</span>
                      <span>₦107,500</span>
                    </div>
                    <div className="invoice-qr"></div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile View - Stacked */}
        <div className="mobile-pillars mobile-only">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.id} delay={index * 0.1}>
              <div className="mobile-pillar-card">
                <div className="mobile-pillar-header" style={{ color: pillar.accent }}>
                  <pillar.icon size={32} />
                  <h3>{pillar.name}</h3>
                </div>
                <p className="tab-pitch">{pillar.pitch}</p>
                <ul className="feature-list">
                  {pillar.features.map((feature, i) => (
                    <li key={i} className="feature-item">
                      <div className="check-icon" style={{ background: `${pillar.accent}20`, color: pillar.accent }}>
                        <Check size={16} weight="bold" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionPillars;
