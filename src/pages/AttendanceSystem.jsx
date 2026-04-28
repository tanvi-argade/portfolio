import React, { useState, useEffect } from "react";
import { FaServer } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaGithub, FaLock, FaCamera, FaUsers, FaClipboardList, FaFileAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import "./ProjectPage.css";

/* === Image imports === */
import as1 from "../assets/AttendanceSystem/1.png";
import as2 from "../assets/AttendanceSystem/2.png";
import as3 from "../assets/AttendanceSystem/3.png";
import as4 from "../assets/AttendanceSystem/4.png";
import as5 from "../assets/AttendanceSystem/5.png";
import as6 from "../assets/AttendanceSystem/6.png";
import as7 from "../assets/AttendanceSystem/7.png";
import as8 from "../assets/AttendanceSystem/8.png";
import as9 from "../assets/AttendanceSystem/9.png";
import as10 from "../assets/AttendanceSystem/10.png";
import as11 from "../assets/AttendanceSystem/11.png";
import AttendanceMain from "../assets/AttendanceSystem/AttendanceSystem.png";

const screenshots = [AttendanceMain, as1, as2, as3, as4, as5, as6, as7, as8, as9, as10, as11];

const AttendanceSystem = ({ theme, toggleTheme }) => {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const techStack = [
    { name: "Python", icon: "python/python-original.svg", type: "svg" },
    { name: "Flask", icon: "flask/flask-original.svg", type: "svg" },
    { name: "OpenCV", icon: "opencv/opencv-original.svg", type: "svg" },
    { name: "SQL", icon: "mysql/mysql-original.svg", type: "svg" },
    { name: "REST APIs", icon: <FaServer />, type: "react-icon" },
  ];

  const iconBaseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

  return (
    <div className="project-page">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="page-container">
        <Link to="/" className="back-link">← Back to Projects</Link>

        <header className="page-header">
          <h1>Automated Attendance System using Face Recognition</h1>
          <p className="page-tagline">Real-time face recognition system for automated student attendance tracking and report generation.</p>
          <div className="page-buttons">
            <a href="https://github.com/tanvi-argade/Automated_Attendance_System-_using_Face_Recognition" target="_blank" rel="noreferrer" className="btn-primary">
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
            Traditional attendance marking is time-consuming, error-prone, and easy to manipulate. This system automates the process using real-time face detection, eliminating manual registers entirely.
          </p>
        </section>

        <section className="project-section">
          <h2>Solution & Architecture</h2>
          <p>
            Built using Python, OpenCV, and Flask with a RESTful backend and SQL database. The system detects faces in real-time, matches them against registered students, and logs attendance automatically with full report generation capability.
          </p>
        </section>

        <section className="project-section">
          <h2>System Flow</h2>
          <div className="flow-diagram">
            <div className="flow-step">Camera Input</div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">Face Detection</div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">Face Matching</div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">Attendance Logging</div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">Report Generation</div>
          </div>
        </section>

        <section className="project-section">
          <h2>Core Features</h2>
          <ul className="feature-list">
            <li className="feature-item">
              <FaCamera className="feature-icon" />
              <p>Real-time face detection pipeline</p>
            </li>
            <li className="feature-item">
              <FaUsers className="feature-icon" />
              <p>Role-based access (Admin / Student)</p>
            </li>
            <li className="feature-item">
              <FaClipboardList className="feature-icon" />
              <p>Automated attendance logging</p>
            </li>
            <li className="feature-item">
              <FaFileAlt className="feature-icon" />
              <p>Report generation</p>
            </li>
            <li className="feature-item">
              <FaLock className="feature-icon" />
              <p>Secure user authentication</p>
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

export default AttendanceSystem;
