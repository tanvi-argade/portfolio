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
              I am a Full-Stack Web Developer with a backend-leaning focus on building scalable, secure, and structured web applications. I enjoy working on system-driven products that involve API design, authentication flows, and database-centric architectures.
            </p>
            <p>
              My development approach emphasizes clean backend design, role-based access control, and reliable data handling rather than just UI implementation. I am particularly interested in building workflow-based systems and applications that solve real operational problems.
            </p>
            <p>
              I aim to contribute to engineering teams where I can work on backend systems, system design, and full-stack application development in production environments.
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
              <span className="stat-number">2+</span>
              <span className="stat-label">Projects on GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
