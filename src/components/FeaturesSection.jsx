import React from 'react';
import './FeaturesSection.css';

const features = [
  { title: "Confidential & Safe", description: "Your data is secure with us." },
  { title: "No Hidden Fees", description: "Transparent pricing." },
  { title: "Expert Assistance", description: "Prompt support from experts." },
  { title: "Guaranteed Satisfaction", description: "We ensure quality services." },
];

const FeaturesSection = () => {
  return (
    <section className="features">
      <h2>Why Choose RegisterKaro</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;