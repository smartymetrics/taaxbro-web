import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SupportWidget from '../components/layout/SupportWidget';
import ScrollReveal from '../components/common/ScrollReveal';
import Button from '../components/common/Button';
import { CheckCircle, ChartLineUp, Users, ShieldCheck } from 'phosphor-react';
import './AccountantsPage.css';

const AccountantsPage = () => {
  React.useEffect(() => {
    document.title = "For Accountants | Taaxbro";
  }, []);

  return (
    <div className="accountants-page">
      <Navbar />
      
      <header className="accountant-hero">
        <div className="container">
          <ScrollReveal>
            <span className="eyebrow eyebrow-light">TAAXBRO FOR PROFESSIONALS</span>
            <h1 className="section-title">Scale your practice with the Accountant Portal.</h1>
            <p className="section-subtitle">Stop chasing receipts. Start advising clients. Taaxbro automates the grunt work so you can focus on high-value tax strategy.</p>
            <div className="hero-buttons">
              <Button variant="primary" size="large">Join the Partner Program</Button>
              <Button variant="ghost" size="large">Book a Demo</Button>
            </div>
          </ScrollReveal>
        </div>
      </header>

      <section className="portal-features section-padding">
        <div className="container">
          <div className="features-grid">
            <ScrollReveal delay={0.1}>
              <div className="feature-item card card-light">
                <ChartLineUp size={48} color="var(--color-blue-primary)" />
                <h3>Centralized Compliance</h3>
                <p>Monitor the real-time tax health and compliance score of every client from a single dashboard.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="feature-item card card-light">
                <Users size={48} color="var(--color-blue-primary)" />
                <h3>Bulk Filing</h3>
                <p>Prepare and submit VAT, CIT, and WHT returns for your entire client base in just a few clicks.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="feature-item card card-light">
                <ShieldCheck size={48} color="var(--color-blue-primary)" />
                <h3>White-Label Reporting</h3>
                <p>Generate professional, branded financial reports to share with your clients automatically.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="partnership-section section-padding bg-dark">
        <div className="container">
          <div className="partnership-grid">
            <ScrollReveal direction="right">
              <div className="partnership-content">
                <h2 className="white">The Taaxbro Partner Program</h2>
                <p className="white-70">Join a network of elite Nigerian tax professionals and accountants who are digitizing their practices.</p>
                <ul className="check-list">
                  <li><CheckCircle size={20} color="var(--color-cyan)" weight="fill" /> <span>Revenue sharing on client subscriptions</span></li>
                  <li><CheckCircle size={20} color="var(--color-cyan)" weight="fill" /> <span>Dedicated partner support manager</span></li>
                  <li><CheckCircle size={20} color="var(--color-cyan)" weight="fill" /> <span>Co-marketing opportunities and client referrals</span></li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <div className="partnership-form card card-light">
                <h3>Apply for Partnership</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <label>Firm Name</label>
                    <input type="text" placeholder="e.g. Adebayo & Co" required />
                  </div>
                  <div className="form-group">
                    <label>Work Email</label>
                    <input type="email" placeholder="email@firm.com" required />
                  </div>
                  <Button variant="primary" style={{ width: '100%' }}>Submit Application</Button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
      <SupportWidget />
    </div>
  );
};

export default AccountantsPage;
