import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SupportWidget from '../components/layout/SupportWidget';
import ScrollReveal from '../components/common/ScrollReveal';
import './LegalPage.css';

const LegalPage = ({ title, lastUpdated }) => {
  React.useEffect(() => {
    document.title = `${title || 'Legal'} | Taaxbro`;
  }, [title]);

  return (
    <div className="legal-page">
      <Navbar />
      
      <header className="legal-hero">
        <div className="container">
          <ScrollReveal>
            <h1 className="section-title">{title || "Terms of Service"}</h1>
            <p className="last-updated">Last Updated: {lastUpdated || "October 24, 2025"}</p>
          </ScrollReveal>
        </div>
      </header>

      <section className="legal-content-section section-padding">
        <div className="container">
          <ScrollReveal delay={0.2}>
            <div className="legal-content-card card card-light">
              <h3>1. Acceptance of Terms</h3>
              <p>By accessing or using the Taaxbro platform, you agree to be bound by these Terms of Service and all applicable Nigerian tax laws and regulations.</p>
              
              <h3>2. Description of Service</h3>
              <p>Taaxbro provides automated tax computation, bookkeeping, and filing assistance services for Nigerian SMEs and freelancers. We use AI and direct integrations with the NRS and other relevant tax authorities.</p>
              
              <h3>3. Data Privacy & Security</h3>
              <p>Your financial data is encrypted and stored securely. We do not sell your data to third parties. Our use of your data is governed by our Privacy Policy and the Nigeria Data Protection Act (NDPA) 2023.</p>
              
              <h3>4. Accuracy of Calculations</h3>
              <p>While Taaxbro uses state-of-the-art AI to compute tax liabilities, the final responsibility for filing accurate returns rests with the business owner. We provide a 'Human Approval' layer to ensure you review all data before submission.</p>
              
              <h3>5. Contact Us</h3>
              <p>If you have any questions about these terms, please contact our legal department at legal@taaxbro.com.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <SupportWidget />
    </div>
  );
};

export default LegalPage;
