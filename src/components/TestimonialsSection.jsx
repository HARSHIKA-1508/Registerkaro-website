import React from "react";
import "./TestimonialsSection.css";

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2>What People Say About Us</h2>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <p>
            "Great service and support! They really helped us scale our
            business."
          </p>
          <div className="testimonial-author">
            <img src="author1.jpg" alt="Author 1" />
            <span>John Doe</span>
          </div>
          </div>
          <div className="testimonial-card">
          <p>
            "One of the best services I had experienced in my life ."
          </p>
          <div className="testimonial-author">
            <img src="author2.jpg" alt="Author 2" />
            <span>Adam Clark</span>
          </div>
          </div>
          <div className="testimonial-card">
          <p>
          "Loved the service! Very Helpful. Indeed a life changer "
          </p>
          <div className="testimonial-author">
            <img src="author3.jpg" alt="Author 3" />
            <span>Martina Sen</span>
          </div>
          </div>
          </div>
    </section>
  );
};

export default TestimonialsSection;
