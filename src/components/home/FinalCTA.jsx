import React from 'react';
import { ArrowRight } from 'phosphor-react';
import Button from '../common/Button';
import './FinalCTA.css';

const FinalCTA = () => {
  // Generate 15 random particles
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 5 + 3,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 5
  }));

  return (
    <section className="final-cta">
      <div className="hero-grid-lines"></div>
      
      {particles.map(p => (
        <div 
          key={p.id} 
          className="particle" 
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: `${p.top}%`,
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`
          }}
        />
      ))}

      <div className="container cta-container">
        <h2 className="cta-headline">
          Your business. Fully compliant. <br />
          <span className="text-gradient">Fully in control.</span>
        </h2>
        <p className="cta-subheadline">
          Join thousands of Nigerian businesses that have removed tax stress from their operations with Taaxbro.
        </p>
        
        <div className="cta-buttons">
          <Button variant="primary" size="large" icon={ArrowRight}>
            Get Started Free
          </Button>
          <Button variant="ghost" size="large">
            Book a Demo
          </Button>
        </div>
        
        <p className="cta-footer">
          Free trial · No credit card required · Setup in under an hour
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
