import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, X, ArrowRight } from 'phosphor-react';
import Logo from './Logo';
import Button from '../common/Button';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isHomePage = location.pathname === '/';
  const logoVariant = isScrolled ? 'dark' : (isHomePage ? 'light' : 'dark');
  const navLinkClass = `nav-link ${(!isScrolled && isHomePage) ? 'light' : 'dark'}`;

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${!isHomePage ? 'not-home' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <Logo variant={logoVariant} />
        </Link>

        <div className="nav-links desktop-only">
          <Link to="/product" className={navLinkClass}>Product</Link>
          <Link to="/pricing" className={navLinkClass}>Pricing</Link>
          <Link to="/accountants" className={navLinkClass}>For Accountants</Link>
          <Link to="/blog" className={navLinkClass}>Blog</Link>
          <Link to="/about" className={navLinkClass}>About</Link>
        </div>

        <div className="nav-actions desktop-only">
          <Link to="/login" className={navLinkClass}>Log In</Link>
          <Button variant="primary" size="small" icon={ArrowRight}>
            Get Started Free
          </Button>
        </div>

        <button className="mobile-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={32} color="white" /> : <List size={32} color={isScrolled ? 'var(--color-navy-deep)' : 'white'} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <Logo variant="light" />
          <button className="close-btn" onClick={toggleMenu}>
            <X size={32} color="white" />
          </button>
        </div>
        <div className="drawer-links">
          <Link to="/product" className="drawer-link" onClick={toggleMenu}>Product</Link>
          <Link to="/pricing" className="drawer-link" onClick={toggleMenu}>Pricing</Link>
          <Link to="/accountants" className="drawer-link" onClick={toggleMenu}>For Accountants</Link>
          <Link to="/blog" className="drawer-link" onClick={toggleMenu}>Blog</Link>
          <Link to="/about" className="drawer-link" onClick={toggleMenu}>About</Link>
          
          <div className="drawer-actions">
            <Link to="/login" className="drawer-link" onClick={toggleMenu}>Log In</Link>
            <Button variant="primary" icon={ArrowRight} style={{ width: '100%' }}>
              Get Started Free
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
