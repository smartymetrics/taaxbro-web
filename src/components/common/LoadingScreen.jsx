import React from 'react';

const LoadingScreen = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      background: '#08122A',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      fontFamily: "'Plus Jakarta Sans', sans-serif"
    }}>
      <div className="pulse-container" style={{ position: 'relative', marginBottom: '32px' }}>
        <img 
          src="/favicon.jpg" 
          alt="Taaxbro Logo" 
          style={{ 
            width: '80px', 
            height: '80px', 
            borderRadius: '16px', 
            boxShadow: '0 0 40px rgba(34, 211, 238, 0.3)' 
          }} 
        />
        <div className="pulse-ring" style={{
          position: 'absolute',
          top: '-10px',
          left: '-10px',
          right: '-10px',
          bottom: '-10px',
          border: '2px solid rgba(34, 211, 238, 0.5)',
          borderRadius: '20px',
          animation: 'pulse 2s infinite'
        }}></div>
      </div>
      
      <h2 style={{ 
        color: '#FFFFFF', 
        fontSize: '20px', 
        fontWeight: '700', 
        marginBottom: '12px',
        letterSpacing: '0.02em'
      }}>
        Taaxbro
      </h2>
      
      <p style={{ 
        color: 'rgba(255, 255, 255, 0.6)', 
        fontSize: '12px', 
        fontWeight: '500',
        letterSpacing: '0.1em',
        textTransform: 'uppercase'
      }}>
        Initializing Intelligent Tax Engine...
      </p>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          70% { transform: scale(1.2); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
