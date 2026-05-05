import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '../common/Button';
import './ComplianceScore.css';

const ComplianceScore = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);
  const targetScore = 82;

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = targetScore;
      const duration = 1200;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentCount = Math.floor(progress * end);
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView]);

  const factors = [
    "Filings submitted on time",
    "No missing returns",
    "VAT records complete",
    "Bank account connected",
    "No open anomaly flags"
  ];

  const circumference = 2 * Math.PI * 90; // radius is 90 for 200px diameter with stroke
  const strokeDashoffset = circumference - (count / 100) * circumference;

  return (
    <section className="compliance-score section-padding" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow eyebrow-dark">COMPLIANCE INTELLIGENCE</span>
          <h2 className="section-title white">Know exactly where you stand with the tax authority — right now.</h2>
        </div>

        <div className="compliance-grid">
          <div className="score-visual-wrapper">
            <div className="gauge-container">
              <svg width="200" height="200" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="12"
                />
                <motion.circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="url(#gauge-gradient)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: circumference,
                    strokeDashoffset: isInView ? strokeDashoffset : circumference,
                    transition: { duration: 1.2, ease: "easeOut" }
                  }}
                  transform="rotate(-90 100 100)"
                />
                <defs>
                  <linearGradient id="gauge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1A6FE8" />
                    <stop offset="100%" stopColor="#22D3EE" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="score-text">
                <span className="score-number">{count}</span>
                <span className="score-badge">Good Standing</span>
              </div>
            </div>
          </div>

          <div className="score-explanation">
            <h3 className="explanation-heading white">Your compliance, measured and managed.</h3>
            <p className="explanation-body">
              Taaxbro calculates a real-time 0–100 score that reflects your complete tax compliance posture. The score considers five factors and updates automatically as your data changes.
            </p>
            
            <div className="factor-chips">
              {factors.map((factor, i) => (
                <div key={i} className="factor-chip card-dark">
                  <div className="chip-dot"></div>
                  <span>{factor}</span>
                </div>
              ))}
            </div>

            <Button variant="ghost" className="mt-32">
              See your score in the dashboard →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceScore;
