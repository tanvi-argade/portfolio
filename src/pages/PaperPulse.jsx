import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLock, FaServer, FaUsers, FaProjectDiagram, FaClipboardList, FaEnvelope } from "react-icons/fa";
import Navbar from "../components/Navbar";
import "./ProjectPage.css";

/* === Image imports === */
import pp1 from "../assets/PaperPulse/1.png";
import pp2 from "../assets/PaperPulse/2.png";
import pp3 from "../assets/PaperPulse/3.png";
import pp4 from "../assets/PaperPulse/4.png";
import pp5 from "../assets/PaperPulse/5.png";
import pp6 from "../assets/PaperPulse/6.png";
import pp7 from "../assets/PaperPulse/7.png";
import pp8 from "../assets/PaperPulse/8.png";
import pp9 from "../assets/PaperPulse/9.png";
import pp10 from "../assets/PaperPulse/10.png";
import pp11 from "../assets/PaperPulse/11.png";
import pp12 from "../assets/PaperPulse/12.png";
import PaperPulseMain from "../assets/PaperPulse/PaperPulse.png";

const screenshots = [PaperPulseMain, pp1, pp2, pp3, pp4, pp5, pp6, pp7, pp8, pp9, pp10, pp11, pp12];

const PaperPulse = ({ theme, toggleTheme }) => {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const techStack = [
    { name: "React.js", icon: "react/react-original.svg", type: "svg" },
    { name: "Node.js", icon: "nodejs/nodejs-original.svg", type: "svg" },
    { name: "Express.js", icon: "express/express-original.svg", type: "svg" },
    { name: "PostgreSQL", icon: "postgresql/postgresql-original.svg", type: "svg" },
    { name: "JWT", icon: <FaLock />, type: "react-icon" },
    { name: "REST APIs", icon: <FaServer />, type: "react-icon" },
  ];

  const iconBaseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

  return (
    <div className="project-page">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="page-container">
        <Link to="/" className="back-link">← Back to Projects</Link>
        
        <header className="page-header">
          <h1>PaperPulse — Academic Paper Workflow System</h1>
          <p className="page-tagline">Role-based workflow system for managing academic paper submission, peer review, and approval lifecycle.</p>
          <div className="page-buttons">
            <a href="https://github.com/tanvi-argade/Paperpulse" target="_blank" rel="noreferrer" className="btn-primary">
              <FaGithub /> GitHub Repository
            </a>
          </div>
        </header>

        <div className="page-tech-grid">
          {techStack.map(t => (
            <div key={t.name} className="tech-chip">
              {t.type === "svg" ? (
                <img src={`${iconBaseUrl}${t.icon}`} alt={t.name} />
              ) : (
                <span className="tech-icon-react">{t.icon}</span>
              )}
              <span>{t.name}</span>
            </div>
          ))}
        </div>

        <section className="project-section">
          <h2>Problem</h2>
          <p>
            Academic paper submission systems are often fragmented, lacking structured workflows, role-based control, and transparent tracking of review stages. This results in inefficient communication between authors, reviewers, and administrators.
          </p>
        </section>

        <section className="project-section">
          <h2>Solution & Architecture</h2>
          <p>
            Built a full-stack workflow-based system using React.js, Node.js, Express.js, and PostgreSQL that models the academic review process as a state-driven lifecycle system. Designed a normalized relational database with strict role-based access control and implemented JWT-based authentication for secure session management. Introduced audit logging to track all critical actions across the system.
          </p>
        </section>

        <section className="project-section">
          <h2>Paper Lifecycle</h2>
          <div className="flow-diagram">
            <div className="flow-step">Submission</div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">Review Assignment</div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">Peer Review</div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">Revision Request</div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">Final Decision</div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">Publication</div>
          </div>
        </section>

        <section className="project-section">
          <h2>Core Features</h2>
          <ul className="feature-list">
            <li className="feature-item">
              <FaUsers className="feature-icon" />
              <p>Role-based access control (Author / Reviewer / Admin)</p>
            </li>
            <li className="feature-item">
              <FaProjectDiagram className="feature-icon" />
              <p>Structured paper lifecycle workflow</p>
            </li>
            <li className="feature-item">
              <FaLock className="feature-icon" />
              <p>Secure JWT authentication</p>
            </li>
            <li className="feature-item">
              <FaClipboardList className="feature-icon" />
              <p>Audit logs for all state transitions</p>
            </li>
            <li className="feature-item">
              <FaEnvelope className="feature-icon" />
              <p>Automated email notifications</p>
            </li>
            <li className="feature-item">
              <FaServer className="feature-icon" />
              <p>RESTful API with layered backend design</p>
            </li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Screenshots</h2>
          <div className="screenshot-grid">
            {screenshots.map((img, i) => (
              <div key={i} className="screenshot-item" onClick={() => setLightbox(img)}>
                <img src={img} alt={`Screenshot ${i + 1}`} />
              </div>
            ))}
          </div>
        </section>
      </div>

      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>×</button>
          <img src={lightbox} alt="Fullscreen" className="lightbox-img" />
        </div>
      )}
    </div>
  );
};

export default PaperPulse;
