import React, { Suspense, lazy, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import UrgencyBanner from '../components/home/UrgencyBanner';
import ProblemStatement from '../components/home/ProblemStatement';
import SolutionPillars from '../components/home/SolutionPillars';
import AIIntelligence from '../components/home/AIIntelligence';
import WhatsAppIntegration from '../components/home/WhatsAppIntegration';
import OCRSection from '../components/home/OCRSection';
import TaxEscrowWallet from '../components/home/TaxEscrowWallet';
import ComplianceScore from '../components/home/ComplianceScore';
import HowItWorks from '../components/home/HowItWorks';
import Integrations from '../components/home/Integrations';
import ForAccountants from '../components/home/ForAccountants';
import Testimonials from '../components/home/Testimonials';
import PricingTeaser from '../components/home/PricingTeaser';
import FAQTeaser from '../components/home/FAQTeaser';
import FinalCTA from '../components/home/FinalCTA';
import Footer from '../components/layout/Footer';
import SupportWidget from '../components/layout/SupportWidget';

const Home = () => {
  useEffect(() => {
    document.title = "Taaxbro | Nigeria's Intelligent Tax & Compliance Platform";
  }, []);

  return (
    <div className="page-home">
      <Navbar />
      <main>
        <Hero />
        <UrgencyBanner />
        <ProblemStatement />
        <SolutionPillars />
        <AIIntelligence />
        <WhatsAppIntegration />
        <OCRSection />
        <TaxEscrowWallet />
        <ComplianceScore />
        <HowItWorks />
        <Integrations />
        <ForAccountants />
        <Testimonials />
        <PricingTeaser />
        <FAQTeaser />
        <FinalCTA />
      </main>
      <Footer />
      <SupportWidget />
    </div>
  );
};

export default Home;
