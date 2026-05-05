import React, { useState } from 'react';
import { CaretDown } from 'phosphor-react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQTeaser.css';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <CaretDown size={20} className="faq-icon" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="faq-answer-wrapper"
          >
            <div className="faq-answer">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQTeaser = () => {
  const faqs = [
    {
      question: "Is Taaxbro compliant with Nigeria's 2025 tax reform?",
      answer: "Yes, Taaxbro is fully updated to reflect the 2025 Tax Reform Act, including new NRS (Nigeria Revenue Service) structures and e-invoicing mandates."
    },
    {
      question: "Does Taaxbro file my returns without asking me?",
      answer: "No. Taaxbro prepares your returns and computes liabilities automatically, but you maintain full control. Nothing is filed until you review and approve it with one tap."
    },
    {
      question: "How does the VAT verification feature work?",
      answer: "Simply snap a photo of any receipt and send it to our WhatsApp bot. Our AI reads the line items and tax calculations to ensure you weren't overcharged based on current law."
    },
    {
      question: "Can I use Taaxbro on WhatsApp without the web app?",
      answer: "Absolutely! You can record expenses, receive payment alerts, and even ask tax questions entirely on WhatsApp. The web app provides deeper reporting and management tools."
    }
  ];

  return (
    <section className="faq-teaser section-padding">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow eyebrow-light">COMMON QUESTIONS</span>
          <h2 className="section-title">Quick answers to what businesses ask us most.</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} {...faq} />
          ))}
        </div>

        <div className="faq-footer">
          <a href="/faq" className="btn-link">View all FAQs →</a>
        </div>
      </div>
    </section>
  );
};

export default FAQTeaser;
