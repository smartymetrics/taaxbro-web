import React from 'react';

const Logo = ({ variant = 'dark', className = '' }) => {
  const isLight = variant === 'light';
  
  return (
    <div className={`logo-container ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <img 
        src="/favicon.jpg" 
        alt="Taaxbro Logo" 
        style={{ width: '40px', height: '40px', borderRadius: '8px', objectFit: 'cover' }} 
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ 
          fontFamily: "'Plus Jakarta Sans', sans-serif", 
          fontSize: '24px', 
          fontWeight: '800', 
          color: isLight ? 'var(--color-fixed-white)' : 'var(--color-text-primary)',
          lineHeight: '1'
        }}>
          Taax<span style={{ color: 'var(--color-cyan)' }}>b</span>ro
        </span>
        <span style={{ 
          fontSize: '7px', 
          fontWeight: '700', 
          letterSpacing: '0.15em', 
          color: isLight ? 'rgba(255,255,255,0.8)' : 'var(--color-mid-grey)',
          marginTop: '2px',
          textTransform: 'uppercase'
        }}>
          AI-Driven Compliance
        </span>
      </div>
    </div>
  );
};

export default Logo;
