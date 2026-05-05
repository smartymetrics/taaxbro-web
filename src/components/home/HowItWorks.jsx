import React from 'react';
import { LinkSimple, MagicWand, ChartLineUp, CheckCircle } from 'phosphor-react';
import ScrollReveal from '../common/ScrollReveal';
import './HowItWorks.css';

const Step = ({ number, icon: Icon, title, body }) => (
  <div className="how-step">
    <div className="step-number-wrapper">
      <div className="step-circle">{number}</div>
      <div className="step-icon-bg">
        <Icon size={24} color="var(--color-blue-primary)" />
      </div>
    </div>
    <h3 className="step-title">{title}</h3>
    <p className="step-body">{body}</p>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: LinkSimple,
      title: "Connect your accounts",
      body: "Link your bank, POS, and accounting tools securely via open banking."
    },
    {
      number: 2,
      icon: MagicWand,
      title: "Taaxbro organises everything",
      body: "Your financial data is imported, read, and categorised automatically."
    },
    {
      number: 3,
      icon: ChartLineUp,
      title: "See your full financial picture",
      body: "Review tax liabilities, compliance score, and payment activity on your dashboard."
    },
    {
      number: 4,
      icon: CheckCircle,
      title: "Approve, file, and grow",
      body: "Approve your returns with one tap, file to NRS, and focus on your business."
    }
  ];

  return (
    <section className="how-it-works section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="eyebrow eyebrow-light">GET STARTED</span>
            <h2 className="section-title">Up and running in one afternoon.</h2>
          </div>
        </ScrollReveal>

        <div className="steps-grid">
          <div className="steps-line desktop-only"></div>
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Step {...step} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
