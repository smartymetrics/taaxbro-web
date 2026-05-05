import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 10); // Will reach 100 in ~1s

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="splash-screen" style={{
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
      <div className="splash-content" style={{ textAlign: 'center' }}>
        <div className="logo-container" style={{
          position: 'relative',
          marginBottom: '40px',
          display: 'inline-block'
        }}>
          <img
            src="/favicon.jpg"
            alt="Taaxbro Logo"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '24px',
              boxShadow: '0 0 60px rgba(34, 211, 238, 0.4)',
              animation: 'scaleIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          />
          <div className="pulse-ring" style={{
            position: 'absolute',
            top: '-15px',
            left: '-15px',
            right: '-15px',
            bottom: '-15px',
            border: '2px solid rgba(34, 211, 238, 0.3)',
            borderRadius: '32px',
            animation: 'pulseInfinite 2s infinite'
          }}></div>
        </div>

        <div className="text-container" style={{ animation: 'fadeInUp 1s ease-out 0.2s both' }}>
          <h2 style={{
            color: '#FFFFFF',
            fontSize: '28px',
            fontWeight: '800',
            marginBottom: '16px',
            letterSpacing: '-0.02em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            Taa<span style={{ color: '#1A6FE8' }}>x</span>bro
          </h2>

          <div className="loading-bar-container" style={{
            width: '240px',
            height: '4px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '2px',
            margin: '0 auto 16px',
            overflow: 'hidden'
          }}>
            <div className="loading-bar-fill" style={{
              width: `${progress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #1A6FE8 0%, #22D3EE 100%)',
              transition: 'width 0.1s ease-out'
            }}></div>
          </div>

          <p style={{
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}>
            {progress < 40 ? 'Initializing Engine...' :
              progress < 80 ? 'Syncing Financial Data...' :
                'System Ready'}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pulseInfinite {
          0% { transform: scale(1); opacity: 0.6; }
          70% { transform: scale(1.15); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }
        @keyframes scaleIn {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeInUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
