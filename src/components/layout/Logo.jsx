import React from 'react';

const Logo = ({ variant = 'dark', className = '' }) => {
  const isLight = variant === 'light';
  
  return (
    <div className={`logo-container ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <img 
        src="/favicon.jpg" 
        alt="Taaxbro Logo" 
        style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} 
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ 
          fontFamily: "'Plus Jakarta Sans', sans-serif", 
          fontSize: '26px', 
          fontWeight: '800', 
          color: isLight ? 'var(--color-fixed-white)' : 'var(--color-text-primary)',
          letterSpacing: '-0.02em',
          lineHeight: '1'
        }}>
          Taa<span style={{ color: 'var(--color-blue-primary)', position: 'relative' }}>x</span>bro
        </span>
        <span style={{ 
          fontSize: '6.5px', 
          fontWeight: '800', 
          letterSpacing: '0.08em', 
          color: isLight ? 'rgba(255,255,255,0.8)' : 'var(--color-mid-grey)',
          marginTop: '4px',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap'
        }}>
          AI DRIVEN TAX COMPLIANCE & PAYMENTS
        </span>
      </div>
    </div>
  );
};

export default Logo;
