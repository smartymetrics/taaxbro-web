import React from 'react';
import { Camera, Upload, WhatsappLogo, CheckCircle, Scales } from 'phosphor-react';
import './OCRSection.css';

const OCRSection = () => {
  return (
    <section className="ocr-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow eyebrow-light">OCR TECHNOLOGY</span>
          <h2 className="section-title">Photograph any receipt. Taaxbro does the rest.</h2>
        </div>

        <div className="ocr-grid">
          {/* Lane A */}
          <div className="ocr-lane lane-a">
            <div className="lane-tag tag-blue">RECORD EXPENSES</div>
            <h3 className="lane-heading">Scan receipts straight into your Books</h3>
            <p className="lane-body">
              Take a photo, upload a file, or send it on WhatsApp. Taaxbro reads vendor name, date, amounts, and taxes — and records it instantly with no typing.
            </p>
            
            <div className="ocr-animation-box">
              <div className="step-item">
                <div className="step-icons">
                  <Camera size={24} />
                  <Upload size={24} />
                  <WhatsappLogo size={24} />
                </div>
                <span>Capture</span>
              </div>
              <div className="step-arrow">→</div>
              <div className="step-item processing">
                <div className="receipt-placeholder">
                  <div className="scan-line"></div>
                </div>
                <span>Taaxbro Reads</span>
              </div>
              <div className="step-arrow">→</div>
              <div className="step-item">
                <CheckCircle size={32} color="var(--color-success)" weight="fill" />
                <span>Saved to Books</span>
              </div>
            </div>
          </div>

          {/* Lane B */}
          <div className="ocr-lane lane-b">
            <div className="lane-tag tag-violet">VAT PROTECTION</div>
            <h3 className="lane-heading">Know if you were overcharged at the till</h3>
            <p className="lane-body">
              Send any receipt — restaurant, supermarket, contractor. Taaxbro checks every VAT line against Nigerian law and tells you exactly whether the charge was correct.
            </p>

            <div className="ocr-animation-box">
              <div className="step-item">
                <div className="wa-thumb">
                  <WhatsappLogo size={16} weight="fill" />
                </div>
                <span>Send Receipt</span>
              </div>
              <div className="step-arrow">→</div>
              <div className="step-item">
                <Scales size={32} className="scales-animate" />
                <span>AI Checks</span>
              </div>
              <div className="step-arrow">→</div>
              <div className="step-item">
                <div className="verdict-box">
                  <div className="verdict-item correct">✅ VAT Correct</div>
                  <div className="verdict-item wrong">⚠️ Overcharged</div>
                </div>
                <span>Verdict</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OCRSection;
