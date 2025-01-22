import React from "react";
import "./StatisticsSection.css";

const StatisticsSection = () => {
  return (
    <section className="statistics-section">
      <h2>Our Achievements</h2>
      <div className="statistics-container">
        <div className="stat-card">
          <h3>10K+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat-card">
          <h3>500+</h3>
          <p>Projects Completed</p>
        </div>
        {/* Add more stat cards */}
      </div>
    </section>
  );
};

export default StatisticsSection;