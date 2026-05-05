import React from 'react';
import { Bell, CalendarBlank, PaperPlaneTilt, Camera, Receipt, Headset, Robot, Microphone } from 'phosphor-react';
import ScrollReveal from '../common/ScrollReveal';
import './WhatsAppIntegration.css';

const CapabilityItem = ({ icon: Icon, label }) => (
  <div className="whatsapp-capability card-dark">
    <Icon size={28} color="#10B981" />
    <span className="capability-label">{label}</span>
  </div>
);

const WhatsAppIntegration = () => {
  const capabilities = [
    { icon: Bell, label: "Instant payment alerts" },
    { icon: CalendarBlank, label: "Tax deadline reminders" },
    { icon: PaperPlaneTilt, label: "Send invoices via WhatsApp" },
    { icon: Camera, label: "Receipt scanning & OCR" },
    { icon: Receipt, label: "VAT verification on any purchase" },
    { icon: Headset, label: "Raise support tickets" },
    { icon: Robot, label: "AI tax Q&A in chat" },
    { icon: Microphone, label: "Voice note questions" }
  ];

  return (
    <section className="whatsapp-integration section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="eyebrow whatsapp-eyebrow">WHATSAPP INTEGRATION</span>
            <h2 className="section-title white">Taaxbro lives inside the app you already use every day.</h2>
            <p className="section-subtitle white-70">
              No new habits to build. No new apps to check. Taaxbro sends notifications, answers questions, and processes receipts — all on WhatsApp.
            </p>
          </div>
        </ScrollReveal>

        <div className="whatsapp-grid">
          <ScrollReveal direction="right" delay={0.2}>
            <div className="phone-mockup-wrapper">
              <div className="phone-frame">
                <div className="whatsapp-chat">
                  <div className="whatsapp-header">
                    <div className="wa-back"></div>
                    <div className="wa-avatar"></div>
                    <div className="wa-info">
                      <div className="wa-name">Taaxbro Business</div>
                      <div className="wa-status">Online</div>
                    </div>
                  </div>
                  <div className="whatsapp-body">
                    <div className="wa-msg incoming">
                      <div className="wa-bubble">
                        ✅ Payment Received! Obinna Electronics just paid Invoice #INV-0092 — ₦450,000. Tap to view reconciliation.
                        <span className="wa-time">10:42 AM</span>
                      </div>
                    </div>
                    <div className="wa-msg incoming">
                      <div className="wa-bubble">
                        📅 VAT Return Reminder: Your October VAT filing (₦87,500) is due in 5 days. Open Taaxbro to review and approve.
                        <span className="wa-time">11:15 AM</span>
                      </div>
                    </div>
                    <div className="wa-msg outgoing">
                      <div className="wa-bubble">
                        <div className="receipt-thumb"></div>
                        <span className="wa-time">1:04 PM ✓✓</span>
                      </div>
                    </div>
                    <div className="wa-msg incoming">
                      <div className="wa-bubble">
                        📸 Receipt scanned! Vendor: Dangote Cement, ₦62,000. VAT charged: ₦4,650 ✅ Correct. Expense saved to Books under 'Building Materials'.
                        <span className="wa-time">1:05 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="whatsapp-capabilities-grid">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <CapabilityItem {...cap} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppIntegration;
