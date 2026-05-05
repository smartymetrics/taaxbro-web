import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SupportWidget from '../components/layout/SupportWidget';
import ScrollReveal from '../components/common/ScrollReveal';
import './BlogPage.css';

const BlogCard = ({ category, title, excerpt, date, readTime }) => (
  <div className="blog-card card card-light">
    <div className="blog-card-image"></div>
    <div className="blog-card-content">
      <span className="blog-category">{category}</span>
      <h3 className="blog-title">{title}</h3>
      <p className="blog-excerpt">{excerpt}</p>
      <div className="blog-meta">
        <span>{date}</span>
        <span className="dot">•</span>
        <span>{readTime}</span>
      </div>
    </div>
  </div>
);

const BlogPage = () => {
  React.useEffect(() => {
    document.title = "Blog | Taaxbro";
  }, []);

  const posts = [
    {
      category: "Tax Reform",
      title: "Everything you need to know about Nigeria's 2025 Tax Reform Act",
      excerpt: "The NRS is replacing the FIRS. Here's how it affects your VAT filing and corporate income tax provisions.",
      date: "Oct 24, 2025",
      readTime: "8 min read"
    },
    {
      category: "Business Growth",
      title: "How to automate your bookkeeping without hiring an accountant",
      excerpt: "Discover the tools and workflows that allow small businesses to maintain perfect records with 2 hours of work a week.",
      date: "Oct 20, 2025",
      readTime: "5 min read"
    },
    {
      category: "Compliance",
      title: "Common VAT mistakes Nigerian SMEs make (and how to avoid them)",
      excerpt: "From incorrect rates to missing input tax claims, we break down the errors that lead to expensive penalties.",
      date: "Oct 15, 2025",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="blog-page">
      <Navbar />
      
      <header className="blog-hero">
        <div className="container">
          <ScrollReveal>
            <span className="eyebrow eyebrow-light">THE TAAXBRO BLOG</span>
            <h1 className="section-title">Insights for the modern Nigerian business.</h1>
            <p className="section-subtitle">Stay updated on tax laws, financial automation, and growth strategies.</p>
          </ScrollReveal>
        </div>
      </header>

      <section className="blog-grid-section section-padding">
        <div className="container">
          <div className="blog-grid">
            {posts.map((post, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <BlogCard {...post} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter-section section-padding bg-dark">
        <div className="container centered">
          <ScrollReveal>
            <h2 className="white">Get tax updates in your inbox.</h2>
            <p className="white-70 mb-32">We send one email a week with the most important compliance news.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <SupportWidget />
    </div>
  );
};

export default BlogPage;
