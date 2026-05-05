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
        { q: "Which Nigerian banks are supported?", a: "We support all major commercial banks, including GTBank, Access, Zenith, UBA, and fintechs like Kuda and Moniepoint." },
        { q: "How fast are Taaxbro Pay settlements?", a: "Settlements are processed in near real-time, ensuring your business maintains healthy cash flow without the typical 24-hour wait." }
      ]
    },
    {
      category: "Tax Compliance",
      questions: [
        { q: "Does Taaxbro handle VAT and WHT?", a: "Yes, Taaxbro automatically computes and prepares schedules for VAT, Withholding Tax (WHT), and Corporate Income Tax based on your transaction history." },
        { q: "Is the 2025 Tax Reform Act integrated?", a: "Absolutely. We stay up-to-date with Nigerian tax laws, including the transition to the NRS and the latest e-invoicing requirements." }
      ]
    },
    {
      category: "WhatsApp",
      questions: [
        { q: "How do I log expenses via WhatsApp?", a: "Just send a photo of your receipt or type the amount to our secure WhatsApp bot. It uses AI to categorize the expense and sync it to your books instantly." },
        { q: "Can I generate invoices on WhatsApp?", a: "Yes, you can prompt the bot to create an invoice, and it will send a professional PDF directly to you or your client." }
      ]
    },
    {
      category: "Accounting",
      questions: [
        { q: "Does it connect to my existing bank accounts?", a: "Yes, Taaxbro connects securely to over 20 Nigerian banks to automate your bookkeeping and bank reconciliation." },
        { q: "Can my external accountant access my data?", a: "Yes, you can invite your accountant to your dedicated Accountant Portal, where they can review your books and finalize filings." }
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
