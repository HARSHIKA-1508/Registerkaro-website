import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <h2>About RegisterKaro</h2>
      <div className="about-content">
        <p>
          We help entrepreneurs by providing efficient business compliance services
          with the help of technology and a customer-first approach.
        </p>
        <button>Learn More</button>
      </div>
    </section>
  );
};

export default AboutSection;