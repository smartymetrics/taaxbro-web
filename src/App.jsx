import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import LoadingScreen from './components/common/LoadingScreen';

const Home = lazy(() => import('./pages/Home'));
const Features = lazy(() => import('./pages/FeaturesPage'));
const Pricing = lazy(() => import('./pages/PricingPage'));
const FAQ = lazy(() => import('./pages/FAQPage'));
const About = lazy(() => import('./pages/AboutPage'));
const Contact = lazy(() => import('./pages/ContactPage'));
const Blog = lazy(() => import('./pages/BlogPage'));
const Accountants = lazy(() => import('./pages/AccountantsPage'));
const Legal = lazy(() => import('./pages/LegalPage'));

// Placeholder components for other pages
const PlaceholderPage = ({ title }) => (
  <div style={{ padding: '120px 20px', textAlign: 'center', minHeight: '100vh' }}>
    <h1>{title}</h1>
    <p>This page is coming soon.</p>
    <a href="/" style={{ color: 'var(--color-blue-primary)' }}>Back to Home</a>
  </div>
);

const Login = () => <PlaceholderPage title="Login" />;

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/accountants" element={<Accountants />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/terms" element={<Legal title="Terms of Service" />} />
          <Route path="/privacy" element={<Legal title="Privacy Policy" />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
