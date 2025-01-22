import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Your Trusted Partner for Compliance Business Needs</h1>
        <p>
          An online business compliance platform that helps entrepreneurs with
          registrations, tax filings, and legal matters.
        </p>
        <div className="hero-cta">
          <button>Talk to an Expert</button>
          <a href="#how-it-works">See how it works</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;