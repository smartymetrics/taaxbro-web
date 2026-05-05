import React, { useState } from 'react';
import { EnvelopeSimple, Phone, MapPin, CheckCircle } from 'phosphor-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SupportWidget from '../components/layout/SupportWidget';
import Button from '../components/common/Button';
import './ContactPage.css';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <Navbar />
      
      <main className="contact-section section-padding">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h1 className="contact-title">Let's talk.</h1>
              <p className="contact-subtitle">Have a question about the platform or Nigeria's 2025 tax reform? Our team is here to help.</p>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon"><EnvelopeSimple size={24} /></div>
                  <div className="info-text">
                    <span className="info-label">Email us</span>
                    <span className="info-val">support@taaxbro.com</span>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon"><Phone size={24} /></div>
                  <div className="info-text">
                    <span className="info-label">Call us</span>
                    <span className="info-val">+234 (0) 800 TAAXBRO</span>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon"><MapPin size={24} /></div>
                  <div className="info-text">
                    <span className="info-label">Visit us</span>
                    <span className="info-val">Victoria Island, Lagos, Nigeria</span>
                  </div>
                </div>
              </div>

              <div className="office-hours">
                <h4>Office Hours</h4>
                <p>Monday – Friday: 9am – 6pm WAT</p>
                <p>Saturday: 10am – 2pm WAT</p>
              </div>
            </div>

            <div className="contact-form-container">
              {!submitted ? (
                <form className="contact-form card card-light" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" className="input-field" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label>Business Email</label>
                    <input type="email" className="input-field" placeholder="john@company.com" required />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <select className="input-field">
                      <option>Sales Inquiry</option>
                      <option>Technical Support</option>
                      <option>Billing Question</option>
                      <option>Partnerships</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea className="input-field" style={{ height: '120px', paddingTop: '12px' }} placeholder="How can we help?" required></textarea>
                  </div>
                  <Button variant="primary" style={{ width: '100%' }}>Send Message</Button>
                </form>
              ) : (
                <div className="success-card card card-light">
                  <div className="success-icon-large">
                    <CheckCircle size={64} color="var(--color-success)" weight="fill" />
                  </div>
                  <h2>Message Received!</h2>
                  <p>We've received your message. One of our specialists will reply to you within 24 hours.</p>
                  <p className="ticket-ref">Reference: #TXB-998122</p>
                  <Button variant="secondary" onClick={() => setSubmitted(false)}>Send another message</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <SupportWidget />
    </div>
  );
};

export default ContactPage;
