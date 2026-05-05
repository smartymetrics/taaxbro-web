import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SupportWidget from '../components/layout/SupportWidget';
import Button from '../components/common/Button';
import ScrollReveal from '../components/common/ScrollReveal';
import './AboutPage.css';

const TeamMember = ({ name, role, bio }) => (
  <div className="team-card card card-light">
    <div className="team-avatar">
      {name.split(' ').map(n => n[0]).join('')}
    </div>
    <h4 className="team-name">{name}</h4>
    <p className="team-role">{role}</p>
    <p className="team-bio">{bio}</p>
  </div>
);

const AboutPage = () => {
  React.useEffect(() => {
    document.title = "About Us | Taaxbro";
  }, []);

  const team = [
    { name: "Obinna K.", role: "CEO & Founder", bio: "Former fintech executive with a passion for simplifying SME finance in Africa." },
    { name: "Chidimma A.", role: "Head of Tax Compliance", bio: "Chartered accountant with 10+ years experience in Nigerian tax law." },
    { name: "Tunde O.", role: "CTO", bio: "AI research engineer specializing in OCR and automated financial systems." }
  ];

  return (
    <div className="about-page">
      <Navbar />
      
      <section className="mission-section">
        <div className="container">
          <ScrollReveal>
            <h1 className="mission-statement white">
              Taaxbro exists to give every African business owner the financial infrastructure that was previously only available to large corporations — <span className="text-gradient">intelligent, automated, and built for the continent.</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="problem-solve-section section-padding">
        <div className="container">
          <div className="problem-solve-grid">
            <ScrollReveal direction="right">
              <div className="narrative-text">
                <h2 className="section-title">The problem we exist to solve.</h2>
                <p>For too long, Nigerian business owners have been crushed under the weight of manual compliance and opaque financial systems. We believe that technology should handle the complexity so you can focus on the growth.</p>
              </div>
            </ScrollReveal>
            <div className="narrative-stats">
              <ScrollReveal delay={0.2}>
                <div className="narrative-stat-card card-stat">
                  <span className="stat-val">₦2.1T</span>
                  <span className="stat-lab">Lost annually to tax penalties</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="narrative-stat-card card-stat">
                  <span className="stat-val">8M+</span>
                  <span className="stat-lab">SMEs need compliance tools</span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section section-padding">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title centered">The Team</h2>
          </ScrollReveal>
          <div className="team-grid">
            {team.map((m, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <TeamMember {...m} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="values-section section-padding">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title centered">Our Values</h2>
          </ScrollReveal>
          <div className="values-grid">
            <ScrollReveal delay={0.1}>
              <div className="value-card card card-light">
                <div className="value-icon">🎯</div>
                <h4 className="value-title">Built for Reliability</h4>
                <p className="value-desc">We build for the business that cannot afford to get it wrong. Our systems are redundant and precise.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="value-card card card-light">
                <div className="value-icon">🤝</div>
                <h4 className="value-title">Human Approval, Always</h4>
                <p className="value-desc">AI does the heavy lifting, but you maintain the final word. Transparent systems build trust.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="final-contact-cta section-padding">
        <div className="container">
          <ScrollReveal>
            <div className="contact-panel card-dark">
              <h2>Want to know more? Let's talk.</h2>
              <Button variant="primary">Get In Touch →</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <SupportWidget />
    </div>
  );
};

export default AboutPage;
