import React from "react";
import "../css/Navigation.css";

const Navigation = () => {
  return (
    <div className="nav-container">
      <div className="nav-main">
        <a href="/" className="nav-logo">
          <p>quang minh</p>
        </a>
        <ul className="nav-link-main">
          <a href="/" className="nav-link">
            <li>home</li>
          </a>
          <a href="/portfolio" className="nav-link">
            <li>portfolio</li>
          </a>
          <a href="/projects" className="nav-link">
            <li>projects</li>
          </a>
          <a href="/contact" className="nav-link">
            <li>contact</li>
          </a>
        </ul>
        <input
          type="checkbox"
          id="dark-light-btn-change"
          className="nav-color-change"
        />
      </div>
    </div>
  );
};

export default Navigation;
