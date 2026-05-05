import React from 'react';

const Logo = ({ variant = 'dark', className = '' }) => {
  const isLight = variant === 'light';
  
  return (
    <div className={`logo-container ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1A6FE8" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        {/* Shadow petal */}
        <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5L20 20L20 35Z" fill="#0D1B4B" fillOpacity="0.2" />
        {/* Main butterfly wings/petals */}
        <path d="M20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5V20L20 35Z" fill="url(#logo-gradient)" />
        <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5V20L20 35Z" fill="url(#logo-gradient)" fillOpacity="0.8" />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ 
          fontFamily: "'Plus Jakarta Sans', sans-serif", 
          fontSize: '24px', 
          fontWeight: '800', 
          color: isLight ? '#FFFFFF' : '#0D1B4B',
          lineHeight: '1'
        }}>
          Taax<span style={{ color: '#1A6FE8' }}>b</span>ro
        </span>
        <span style={{ 
          fontSize: '8px', 
          fontWeight: '700', 
          letterSpacing: '0.1em', 
          color: isLight ? 'rgba(255,255,255,0.6)' : 'rgba(13,27,75,0.55)',
          marginTop: '2px'
        }}>
          AI DRIVEN TAX COMPLIANCE & PAYMENTS
        </span>
      </div>
    </div>
  );
};

export default Logo;
