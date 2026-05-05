import React from 'react';
import './Testimonials.css';

const TestimonialCard = ({ quote, author, business, rating = 5 }) => (
  <div className="testimonial-card card card-light">
    <div className="quote-icon">"</div>
    <p className="quote-text">{quote}</p>
    <div className="card-divider"></div>
    <div className="author-row">
      <div className="author-avatar">{author[0]}</div>
      <div className="author-info">
        <div className="author-name">{author}</div>
        <div className="author-business">{business}</div>
      </div>
      <div className="star-rating">
        {"★".repeat(rating)}
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Since connecting Taaxbro to my GTBank account, I haven't missed a VAT deadline in eight months. The WhatsApp reminders are the best part — they catch me before I even think about it.",
      author: "Chidinma O.",
      business: "Retail Business Owner, Lagos"
    },
    {
      quote: "As a freelancer with both Naira and dollar income, I was always confused about my PIT. Taaxbro calculated exactly what I owe and filed everything without me needing an accountant.",
      author: "Tunde A.",
      business: "Digital Consultant, Abuja"
    },
    {
      quote: "The Accountant Portal has saved my firm probably 30 hours a month. I manage 40 clients from a single screen. The bulk filing feature alone was worth switching.",
      author: "Mrs. Balogun",
      business: "Tax Professional, Lagos"
    }
  ];

  return (
    <section className="testimonials section-padding">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow eyebrow-light">TRUSTED BY BUSINESSES</span>
          <h2 className="section-title">What Nigerian business owners are saying.</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>

        <div className="metrics-strip card-stat">
          <div className="metric-item">
            <span className="metric-number text-gradient">12,000+</span>
            <span className="metric-label">Businesses Served</span>
          </div>
          <div className="metric-item">
            <span className="metric-number text-gradient">₦8B+</span>
            <span className="metric-label">Tax Filed Successfully</span>
          </div>
          <div className="metric-item">
            <span className="metric-number text-gradient">18hrs</span>
            <span className="metric-label">Avg. Hours Saved Monthly</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
