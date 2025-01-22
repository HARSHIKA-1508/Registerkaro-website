import React from "react";
import "./Header.css";
import LogoIcon from "/src/assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Logo Section */}
        <div className="logo">
          <img src={LogoIcon} alt= "RegisterKaro" className="logo-image" />
          <label>RegisterKaro</label>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <button className="cta-button">Get Started</button>
      </div>
    </header>
  );
};

export default Header;