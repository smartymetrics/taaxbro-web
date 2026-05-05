import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'phosphor-react';
import Button from '../common/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-grid-lines"></div>
      <div className="hero-glow"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow eyebrow-dark"
          >
            AI-POWERED FINANCIAL PLATFORM
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero-title"
          >
            Your Business. Your Money. <br />
            <span className="text-gradient">Your Compliance</span> — All Under Control.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-subtitle"
          >
            Taaxbro unifies payments, automated tax compliance, and accounting for Nigerian SMEs in one intelligent platform.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hero-cta"
          >
            <Button variant="primary" size="large" icon={ArrowRight}>
              Get Started Free
            </Button>
            <Button variant="ghost" size="large" icon={Play}>
              See How It Works
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hero-stats"
          >
            <div className="stat-item">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Businesses</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">₦2B+</span>
              <span className="stat-label">Tax Filed</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Compliance Rate</span>
            </div>
          </motion.div>
        </div>
        
        <div className="hero-visual">
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="visual-card card-payment"
          >
            <div className="card-accent accent-green"></div>
            <div className="card-body">
              <span className="card-label">Payment Received</span>
              <span className="card-amount">₦450,000.00</span>
              <span className="card-source">from Obinna Electronics</span>
            </div>
          </motion.div>

          <motion.div 
            animate={{ 
              y: [0, 20, 0],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.5
            }}
            className="visual-card card-tax"
          >
            <div className="card-accent accent-blue"></div>
            <div className="card-body">
              <span className="card-label">Tax Filing Ready</span>
              <span className="card-amount">VAT Oct 2025</span>
              <span className="card-status status-ready">Ready to File</span>
            </div>
          </motion.div>

          <motion.div 
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
            className="visual-card card-invoice"
          >
            <div className="card-accent accent-navy"></div>
            <div className="card-body">
              <div className="invoice-header">
                <span className="card-label">Invoice #INV-2025</span>
                <div className="qr-placeholder"></div>
              </div>
              <span className="card-amount">₦120,000.00</span>
              <span className="card-source">Acme Services Ltd</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
