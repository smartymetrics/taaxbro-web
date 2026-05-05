import React from 'react';
import { FacebookLogo, TwitterLogo, LinkedinLogo, InstagramLogo } from 'phosphor-react';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <Logo variant="light" className="mb-24" />
            <p className="brand-desc">
              The intelligent financial operating system for Nigerian businesses. Payments, compliance, and bookkeeping in one place.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><FacebookLogo weight="fill" /></a>
              <a href="#" className="social-icon"><TwitterLogo weight="fill" /></a>
              <a href="#" className="social-icon"><LinkedinLogo weight="fill" /></a>
              <a href="#" className="social-icon"><InstagramLogo weight="fill" /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">PRODUCT</h4>
            <ul className="footer-links">
              <li><a href="#">Taaxbro Pay</a></li>
              <li><a href="#">Taaxbro Tax</a></li>
              <li><a href="#">Taaxbro Books</a></li>
              <li><a href="#">Accountant Portal</a></li>
              <li><a href="#">Integrations</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">RESOURCES</h4>
            <ul className="footer-links">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Tax Calendar 2025</a></li>
              <li><a href="#">VAT Verification</a></li>
              <li><a href="#">Help Centre</a></li>
              <li><a href="#">API Docs</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">COMPANY</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Taaxbro Technologies Ltd. All rights reserved.</p>
          <p>Built for the future of Nigerian commerce.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
