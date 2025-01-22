import React from 'react';
import './ServicesSection.css';

const services = [
  { title: "Company Formation", description: "Build web-based solutions that enhance customer experience." },
  { title: "Company Secretarial Services", description: "Make data-driven decisions and reach goals." },
  { title: "Virtual Office Address", description: "Foster customer relationships." },
  { title: "Annual Compliance", description: "Turn your ideas into reality." },
  { title: "Payroll Services", description: "Expand your business across the globe." },
  { title: "Bookkeeping Services", description: "Enhance financial insights and technology." },
];

const ServicesSection = () => {
  return (
    <section className="services" id="services">
      <h2>Explore Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#">Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
