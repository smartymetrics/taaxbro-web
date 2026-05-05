import React from 'react';
import { Clock, Warning, ArrowsLeftRight, CurrencyNgn } from 'phosphor-react';
import ScrollReveal from '../common/ScrollReveal';
import './ProblemStatement.css';

const ProblemCard = ({ icon: Icon, title, body, accentColor }) => (
  <div className="problem-card card card-light" style={{ borderLeft: `4px solid ${accentColor}` }}>
    <div className="problem-icon" style={{ color: accentColor }}>
      <Icon size={32} weight="bold" />
    </div>
    <h3 className="problem-title">{title}</h3>
    <p className="problem-body">{body}</p>
  </div>
);

const ProblemStatement = () => {
  const problems = [
    {
      icon: Clock,
      title: "Tax Calculations That Eat Your Day",
      body: "Manual VAT, WHT, and CIT calculations pull you away from growing your business — every single month.",
      accentColor: "var(--color-blue-primary)"
    },
    {
      icon: Warning,
      title: "Missed Deadlines. Surprise Penalties.",
      body: "Penalty letters from the tax authority arrive without warning because filing dates are easy to miss without a system.",
      accentColor: "var(--color-warning)"
    },
    {
      icon: ArrowsLeftRight,
      title: "Payments Scattered Everywhere",
      body: "Bank apps, POS receipts, and WhatsApp transfer screenshots with zero central visibility. Reconciliation is a nightmare.",
      accentColor: "var(--color-blue-primary)"
    },
    {
      icon: CurrencyNgn,
      title: "Accountants That Cost Too Much",
      body: "Paying premium fees for routine compliance tasks that an intelligent platform should handle automatically.",
      accentColor: "#EF4444" // red-orange
    }
  ];

  return (
    <section className="problem-statement section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="eyebrow eyebrow-light">THE CHALLENGE</span>
            <h2 className="section-title">Running a business in Nigeria is hard enough without tax chaos.</h2>
          </div>
        </ScrollReveal>
        
        <div className="problem-grid">
          {problems.map((problem, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <ProblemCard {...problem} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
