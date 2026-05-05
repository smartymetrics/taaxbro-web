import React from 'react';
import { Brain, Calculator, ChatsCircle, ShieldWarning } from 'phosphor-react';
import ScrollReveal from '../common/ScrollReveal';
import './AIIntelligence.css';

const AICapabilityCard = ({ icon: Icon, title, description }) => (
  <div className="ai-card card card-dark">
    <div className="ai-card-icon">
      <Icon size={32} color="var(--color-cyan)" />
    </div>
    <h4 className="ai-card-title">{title}</h4>
    <p className="ai-card-desc">{description}</p>
  </div>
);

const AIIntelligence = () => {
  const capabilities = [
    {
      icon: Brain,
      title: "Automatic Transaction Categorisation",
      description: "Every transaction from your connected bank accounts is read and categorised — income, expense, VAT-applicable, or exempt — without you lifting a finger."
    },
    {
      icon: Calculator,
      title: "Real-Time Tax Computation",
      description: "VAT, WHT, CIT, PIT, Development Levy, and Stamp Duty are calculated the moment each transaction lands, not just at filing time."
    },
    {
      icon: ChatsCircle,
      title: "Plain-Language Tax Q&A",
      description: "Ask 'Do I charge VAT on this service?' and get a clear, law-referenced answer — 24/7, inside the app and on WhatsApp."
    },
    {
      icon: ShieldWarning,
      title: "Anomaly Detection & Risk Flags",
      description: "Underreporting patterns, missing filings, and suspicious discrepancies are surfaced early — with corrective action recommendations — before they become penalties."
    }
  ];

  return (
    <section className="ai-intelligence section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="eyebrow eyebrow-dark">INTELLIGENT AUTOMATION</span>
            <h2 className="section-title white">The AI that works inside your business, around the clock.</h2>
          </div>
        </ScrollReveal>

        <div className="ai-grid">
          <div className="ai-capabilities">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <AICapabilityCard {...cap} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="left" delay={0.3}>
            <div className="ai-chat-mockup">
              <div className="chat-panel card-dark">
                <div className="chat-header">
                  <div className="chat-avatar"></div>
                  <div className="chat-info">
                    <div className="chat-name">Taaxbro AI</div>
                    <div className="chat-status">Online</div>
                  </div>
                </div>
                <div className="chat-body">
                  <div className="message user">
                    <div className="message-bubble">
                      Am I supposed to charge VAT on my consulting services?
                    </div>
                  </div>
                  <div className="message ai">
                    <div className="message-bubble">
                      Yes — consulting services are VAT-applicable under the Nigeria Tax Act 2025. Since your annual turnover exceeds ₦25M, you are required to charge and remit 7.5% VAT on every invoice.
                    </div>
                  </div>
                  <div className="message user">
                    <div className="message-bubble">
                      What about my international clients?
                    </div>
                  </div>
                  <div className="message ai">
                    <div className="message-bubble">
                      Services exported to clients outside Nigeria are zero-rated for VAT, meaning you charge 0% — but you must still file and declare them. I can prepare your next VAT return with this distinction already applied.
                    </div>
                  </div>
                </div>
                <div className="chat-input">
                  <span>Ask a tax question...</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AIIntelligence;
