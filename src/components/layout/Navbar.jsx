import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, X, ArrowRight, Sun, Moon, Flame } from 'phosphor-react';
import Logo from './Logo';
import Button from '../common/Button';
import { useTheme } from '../../context/ThemeContext';
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

  const { theme, cycleTheme } = useTheme();

  const themeIcon = theme === 'light' ? <Moon size={20} /> 
                 : theme === 'dark'  ? <Flame size={20} /> 
                 : <Sun size={20} />;

  const themeLabel = theme === 'light' ? 'Switch to Dark' 
                   : theme === 'dark'  ? 'Switch to Warm' 
                   : 'Switch to Light';

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
          <div className="nav-item-with-dropdown">
            <Link to="/product" className={navLinkClass}>Product</Link>
            <div className="nav-dropdown">
              <Link to="/product#payments" className="dropdown-item">Payments</Link>
              <Link to="/product#tax" className="dropdown-item">Tax Compliance</Link>
              <Link to="/product#accounting" className="dropdown-item">Accounting</Link>
              <Link to="/product#compliance" className="dropdown-item">Compliance</Link>
              <Link to="/product#ocr" className="dropdown-item">OCR Technology</Link>
              <Link to="/product#whatsapp" className="dropdown-item">WhatsApp Integration</Link>
            </div>
          </div>
          <Link to="/pricing" className={navLinkClass}>Pricing</Link>
          <Link to="/accountants" className={navLinkClass}>For Accountants</Link>
          <Link to="/blog" className={navLinkClass}>Blog</Link>
          <Link to="/about" className={navLinkClass}>About</Link>
        </div>

        <div className="nav-actions desktop-only">
          <button
            className="theme-toggle"
            onClick={cycleTheme}
            aria-label={themeLabel}
            title={themeLabel}
          >
            {themeIcon}
          </button>
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
          <div className="drawer-group">
            <div className="drawer-group-title">Products</div>
            <Link to="/product#payments" className="drawer-link-sub" onClick={toggleMenu}>Payments</Link>
            <Link to="/product#tax" className="drawer-link-sub" onClick={toggleMenu}>Tax Compliance</Link>
            <Link to="/product#accounting" className="drawer-link-sub" onClick={toggleMenu}>Accounting</Link>
            <Link to="/product#compliance" className="drawer-link-sub" onClick={toggleMenu}>Compliance</Link>
            <Link to="/product#ocr" className="drawer-link-sub" onClick={toggleMenu}>OCR Technology</Link>
            <Link to="/product#whatsapp" className="drawer-link-sub" onClick={toggleMenu}>WhatsApp Integration</Link>
          </div>
          <Link to="/pricing" className="drawer-link" onClick={toggleMenu}>Pricing</Link>
          <Link to="/accountants" className="drawer-link" onClick={toggleMenu}>For Accountants</Link>
          <Link to="/blog" className="drawer-link" onClick={toggleMenu}>Blog</Link>
          <Link to="/about" className="drawer-link" onClick={toggleMenu}>About</Link>
          
          <div className="drawer-actions">
            <button
              className="theme-toggle"
              style={{ marginBottom: '20px', width: 'auto', padding: '0 20px' }}
              onClick={cycleTheme}
              aria-label={themeLabel}
            >
              {themeIcon} <span style={{marginLeft: '12px', fontSize: '14px'}}>{themeLabel}</span>
            </button>
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
