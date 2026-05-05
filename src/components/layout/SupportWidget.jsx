import React, { useState } from 'react';
import { ChatCircle, X, PaperPlaneTilt, MagnifyingGlass, EnvelopeSimple, Question } from 'phosphor-react';
import { motion, AnimatePresence } from 'framer-motion';
import './SupportWidget.css';

const SupportWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('idle'); // idle, chat, success
  const [message, setMessage] = useState('');

  const toggleWidget = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setTimeout(() => setView('idle'), 300);
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setView('success');
    setMessage('');
  };

  return (
    <div className="support-widget-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="support-card shadow-lg"
          >
            <div className="support-header">
              <div className="header-info">
                <div className="support-logo"></div>
                <div>
                  <div className="support-name">Taaxbro Support</div>
                  <div className="support-status">Online</div>
                </div>
              </div>
              <button className="support-close" onClick={toggleWidget}>
                <X size={20} />
              </button>
            </div>

            <div className="support-body">
              {view === 'idle' && (
                <div className="view-idle">
                  <h3 className="welcome-text">Hello 👋 How can we help?</h3>
                  <div className="support-search">
                    <MagnifyingGlass size={18} />
                    <input type="text" placeholder="Search our help centre..." />
                  </div>
                  <div className="quick-links">
                    <button className="quick-link-btn" onClick={() => setView('chat')}>
                      <ChatCircle size={20} />
                      <span>Chat with us</span>
                    </button>
                    <button className="quick-link-btn">
                      <EnvelopeSimple size={20} />
                      <span>Email support</span>
                    </button>
                    <button className="quick-link-btn">
                      <Question size={20} />
                      <span>View FAQ</span>
                    </button>
                  </div>
                </div>
              )}

              {view === 'chat' && (
                <div className="view-chat">
                  <div className="chat-messages">
                    <div className="msg-bubble received">
                      Hi there! How can I help you today?
                    </div>
                  </div>
                  <form className="chat-footer" onSubmit={handleSend}>
                    <input 
                      type="text" 
                      placeholder="Type a message..." 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type="submit" className="send-btn">
                      <PaperPlaneTilt size={20} weight="fill" />
                    </button>
                  </form>
                </div>
              )}

              {view === 'success' && (
                <div className="view-success">
                  <div className="success-icon">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="check-circle"
                    >
                      ✓
                    </motion.div>
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Your message has been received. Reference: #TXB-001234. Expected reply: within 4 hours.</p>
                  <button className="btn-link" onClick={() => setView('idle')}>Back to options</button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        className={`support-toggle ${isOpen ? 'active' : ''}`}
        onClick={toggleWidget}
      >
        <div className="unread-badge">1</div>
        {isOpen ? <X size={24} color="white" /> : <ChatCircle size={24} color="white" weight="fill" />}
      </button>
    </div>
  );
};

export default SupportWidget;
