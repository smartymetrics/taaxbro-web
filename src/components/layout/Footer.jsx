import React from 'react';
import { Link } from 'react-router-dom';
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
              <a href="https://facebook.com/taaxbro" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook"><FacebookLogo weight="fill" /></a>
              <a href="https://x.com/taaxbro" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X (Twitter)"><TwitterLogo weight="fill" /></a>
              <a href="https://www.linkedin.com/company/taaxbro" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><LinkedinLogo weight="fill" /></a>
              <a href="https://www.instagram.com/taaxbro" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram"><InstagramLogo weight="fill" /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">PRODUCT</h4>
            <ul className="footer-links">
              <li><Link to="/product#payments">Taaxbro Pay</Link></li>
              <li><Link to="/product#tax">Taaxbro Tax</Link></li>
              <li><Link to="/product#accounting">Taaxbro Books</Link></li>
              <li><Link to="/accountants">Accountant Portal</Link></li>
              <li><Link to="/product#compliance">Compliance</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">RESOURCES</h4>
            <ul className="footer-links">
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/faq">Help Centre</Link></li>
              <li><Link to="/legal">Privacy Policy</Link></li>
              <li><Link to="/legal">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">COMPANY</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/about#team">The Team</Link></li>
              <li><Link to="/login">Client Login</Link></li>
              <li><Link to="/signup">Get Started</Link></li>
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
