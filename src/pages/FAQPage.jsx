import React, { useState } from 'react';
import { MagnifyingGlass, CaretDown } from 'phosphor-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SupportWidget from '../components/layout/SupportWidget';
import Button from '../components/common/Button';
import './FAQPage.css';

const FAQAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq-page-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-page-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <CaretDown size={20} className="faq-icon" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="faq-page-answer"
          >
            <div className="answer-content">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQPage = () => {
  const categories = ["Getting Started", "Payments", "Tax Compliance", "WhatsApp", "Accounting"];
  const [activeCategory, setActiveCategory] = useState("Getting Started");

  const faqData = [
    {
      category: "Getting Started",
      questions: [
        { q: "How long does it take to set up Taaxbro?", a: "You can be up and running in under 15 minutes. Connecting your bank and POS accounts is the first step." },
        { q: "Is my financial data secure?", a: "Yes. We use bank-grade 256-bit encryption and are fully NDPR compliant. We never store your bank login credentials." }
      ]
    },
    {
      category: "Payments",
      questions: [
        { q: "Which Nigerian banks are supported?", a: "We support all major commercial banks, including GTBank, Access, Zenith, UBA, and fintechs like Kuda and Moniepoint." }
      ]
    }
  ];

  return (
    <div className="faq-page">
      <Navbar />
      
      <header className="faq-hero">
        <div className="container">
          <h1 className="hero-title">How can we help?</h1>
          <div className="faq-search-wrapper">
            <MagnifyingGlass size={24} color="var(--color-mid-grey)" />
            <input type="text" placeholder="Search any question..." className="faq-search-input" />
          </div>
        </div>
      </header>

      <div className="faq-category-nav">
        <div className="container">
          <div className="category-tabs">
            {categories.map((cat) => (
              <button 
                key={cat} 
                className={`cat-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="faq-content-section section-padding">
        <div className="container">
          <div className="faq-list-container">
            {faqData.map((cat) => (
              cat.category === activeCategory && (
                <div key={cat.category} className="faq-category-group">
                  <h2 className="cat-title">{cat.category}</h2>
                  <div className="faq-accordions">
                    {cat.questions.map((q, i) => <FAQAccordion key={i} question={q.q} answer={q.a} />)}
                  </div>
                </div>
              )
            ))}
          </div>

          <div className="faq-bottom-cta card card-light">
            <h3>Couldn't find your answer?</h3>
            <p>Our support team is available 24/7 to help you with any technical or tax-related questions.</p>
            <div className="cta-flex">
              <Button variant="primary">Chat with Support</Button>
              <Button variant="secondary">Email Us</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <SupportWidget />
    </div>
  );
};

export default FAQPage;
