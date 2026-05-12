import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaSeedling, FaBug, FaTint, FaChartLine, FaServer } from "react-icons/fa";
import Navbar from "../components/Navbar";
import "./ProjectPage.css";

/* === Image imports === */
import logo from "../assets/KrushiAI/logo.png";
import architecture from "../assets/KrushiAI/architecture.png";
import k1 from "../assets/KrushiAI/k1.png";
import k2 from "../assets/KrushiAI/k2.png";
import k3 from "../assets/KrushiAI/k3.png";
import k4 from "../assets/KrushiAI/k4.png";
import k5 from "../assets/KrushiAI/k5.png";

const screenshots = [k1, k2, k3, k4, k5];

const KrushiAI = ({ theme, toggleTheme }) => {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const techStack = [
    { name: "React.js", icon: "react/react-original.svg", type: "svg" },
    { name: "FastAPI", icon: "fastapi/fastapi-original.svg", type: "svg" },
    { name: "Python", icon: "python/python-original.svg", type: "svg" },
    { name: "scikit-learn", icon: "scikitlearn/scikitlearn-original.svg", type: "svg" },
    { name: "REST APIs", icon: <FaServer />, type: "react-icon" },
  ];

  const iconBaseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

  return (
    <div className="project-page">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="page-container">
        <Link to="/" className="back-link">← Back to Projects</Link>

        <header className="page-header centered">
          <div className="project-logo-container">
            <img src={logo} alt="KrushiAI Logo" className="project-page-logo" />
          </div>
          <h1>KrushiAI</h1>
          <p className="page-tagline">AI-Powered Decision Intelligence for Modern Farming</p>
          <div className="page-buttons">
            <a href="https://github.com/tanvi-argade/krushiAi" target="_blank" rel="noreferrer" className="btn-primary">
              <FaGithub /> GitHub Repository
            </a>
          </div>
        </header>

        <div className="page-tech-grid centered">
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
          <h2>Overview</h2>
          <p>
            KrushiAI is an end-to-end decision intelligence platform that optimizes agricultural productivity through computer vision, predictive modeling, and real-time weather analytics.
          </p>
        </section>

        <section className="project-section">
          <h2>Architecture</h2>
          <div className="architecture-container">
            <img src={architecture} alt="KrushiAI Architecture" className="architecture-img" />
          </div>
        </section>

        <section className="project-section">
          <h2>Core Modules</h2>
          <ul className="feature-list">
            <li className="feature-item">
              <FaSeedling className="feature-icon" />
              <div>
                <strong>Crop Advisor</strong>
                <p>ML-driven recommendations based on N-P-K soil metrics and climate parameters.</p>
              </div>
            </li>
            <li className="feature-item">
              <FaBug className="feature-icon" />
              <div>
                <strong>Pest Detection</strong>
                <p>Real-time disease diagnosis via leaf image analysis using MobileNetV2.</p>
              </div>
            </li>
            <li className="feature-item">
              <FaTint className="feature-icon" />
              <div>
                <strong>Irrigation Advisor</strong>
                <p>Precision scheduling integrated with geo-location weather intelligence.</p>
              </div>
            </li>
            <li className="feature-item">
              <FaChartLine className="feature-icon" />
              <div>
                <strong>Market Predictor</strong>
                <p>Time-series forecasting for 30-day mandi price trends.</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Gallery</h2>
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

export default KrushiAI;
