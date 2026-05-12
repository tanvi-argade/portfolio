import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-text" data-aos="fade-right">
            <p>
              I am a Full-Stack Developer focused on building backend-driven and data-powered applications with clean architecture and scalable APIs.
            </p>

            <p>
              I have built systems ranging from workflow-based platforms and authentication-heavy applications to AI/ML projects involving computer vision, recommendation systems, and time-series forecasting.
            </p>

            <p>
              My work spans full-stack development using React.js and FastAPI, with a strong emphasis on backend design, machine learning integration, and solving real-world problems through structured system design.
            </p>
          </div>
          <div className="about-stats" data-aos="fade-left">
            <div className="stat-card">
              <span className="stat-number">9.24</span>
              <span className="stat-label">CGPA</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years of Building</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">3+</span>
              <span className="stat-label">Projects on GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
