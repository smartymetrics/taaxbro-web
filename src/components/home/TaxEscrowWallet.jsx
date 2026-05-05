import React from 'react';
import './TaxEscrowWallet.css';

const WalletPoint = ({ number, title, body }) => (
  <div className="wallet-point">
    <div className="point-badge">{number}</div>
    <div className="point-content">
      <h4 className="point-title">{title}</h4>
      <p className="point-body">{body}</p>
    </div>
  </div>
);

const TaxEscrowWallet = () => {
  return (
    <section className="tax-escrow-wallet section-padding">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow eyebrow-light">ESCROW WALLET</span>
          <h2 className="section-title">Your VAT is already saved. We set it aside the moment you got paid.</h2>
          <p className="section-subtitle">
            No scrambling at filing time. No borrowing from operations. The money is waiting — ring-fenced and ready.
          </p>
        </div>

        <div className="wallet-grid">
          <div className="wallet-explanation">
            <WalletPoint 
              number="1"
              title="Every payment. Automatic."
              body="When revenue enters your business, Taaxbro calculates the VAT portion and moves it into your Escrow Wallet immediately."
            />
            <WalletPoint 
              number="2"
              title="Covers VAT and CIT provisions."
              body="The wallet holds ring-fenced funds for both VAT remittances and Company Income Tax provisions, tracked separately."
            />
            <WalletPoint 
              number="3"
              title="Released at filing time."
              body="When your return is approved and submitted, the exact amount is released to NRS. You never handle it manually."
            />
          </div>

          <div className="wallet-visual">
            <div className="wallet-card card-dark">
              <div className="wallet-header">
                <div className="wallet-title-group">
                  <span className="wallet-label">Tax Escrow Wallet</span>
                  <div className="wallet-icon-shield"></div>
                </div>
              </div>
              
              <div className="wallet-main-balance">
                <span className="balance-amount text-gradient">₦1,240,600</span>
              </div>

              <div className="wallet-sub-balances">
                <div className="sub-balance">
                  <span className="sub-label">VAT Reserve</span>
                  <span className="sub-value">₦840,000</span>
                </div>
                <div className="sub-balance">
                  <span className="sub-label">CIT Provision</span>
                  <span className="sub-value">₦400,600</span>
                </div>
              </div>

              <div className="wallet-progress-section">
                <div className="progress-header">
                  <span>Next Filing: Jan 31</span>
                  <span>(14 days)</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: '65%' }}></div>
                </div>
              </div>

              <div className="wallet-history">
                <div className="history-item">
                  <span>Acme Ltd payment</span>
                  <span className="history-value">+₦67,500</span>
                </div>
                <div className="history-item">
                  <span>Glo Reload payment</span>
                  <span className="history-value">+₦12,400</span>
                </div>
                <div className="history-item">
                  <span>Office Rent expense</span>
                  <span className="history-value">-₦15,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxEscrowWallet;
