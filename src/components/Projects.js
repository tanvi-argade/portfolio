import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLock, FaServer } from "react-icons/fa";
import "./Projects.css";

/* === Image imports === */
import PaperPulseMain from "../assets/PaperPulse/PaperPulse.png";
import AttendanceMain from "../assets/AttendanceSystem/AttendanceSystem.png";

const projects = [
  {
    id: "paperpulse",
    title: "PaperPulse",
    tagline: "Role-based workflow system for managing academic paper submission, peer review, and approval lifecycle.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "JWT", "REST APIs"],
    github: "https://github.com/tanvi-argade/Paperpulse",
    mainImage: PaperPulseMain,
    link: "/paperpulse"
  },
  {
    id: "attendance",
    title: "Automated Attendance System",
    tagline: "Real-time face recognition system for automated student attendance tracking and report generation.",
    tech: ["Python", "Flask", "OpenCV", "SQL", "REST APIs"],
    github: "https://github.com/tanvi-argade/Automated_Attendance_System-_using_Face_Recognition",
    mainImage: AttendanceMain,
    link: "/attendance"
  }
];

const techIconMap = {
  "React.js": { type: "svg", icon: "react/react-original.svg" },
  "Node.js": { type: "svg", icon: "nodejs/nodejs-original.svg" },
  "Express.js": { type: "svg", icon: "express/express-original.svg" },
  "PostgreSQL": { type: "svg", icon: "postgresql/postgresql-original.svg" },
  "JWT": { type: "react-icon", icon: <FaLock /> },
  "Python": { type: "svg", icon: "python/python-original.svg" },
  "Flask": { type: "svg", icon: "flask/flask-original.svg" },
  "OpenCV": { type: "svg", icon: "opencv/opencv-original.svg" },
  "SQL": { type: "svg", icon: "mysql/mysql-original.svg" },
  "REST APIs": { type: "react-icon", icon: <FaServer /> },
};

const Projects = () => {
  const iconBaseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <p className="section-subtitle">Systems I've built</p>

        <div className="projects-grid">
          {projects.map((p, idx) => (
            <div 
              className="project-card" 
              key={p.id} 
              data-aos="fade-up" 
              data-aos-delay={idx * 100}
            >
              <div className="card-header">
                <h3>{p.title}</h3>
                <p className="muted">{p.tagline}</p>
              </div>
              
              <div className="card-tech">
                {p.tech.map(t => {
                  const techData = techIconMap[t];
                  return (
                    <div key={t} className="tech-chip">
                      {techData?.type === "svg" ? (
                        <img src={`${iconBaseUrl}${techData.icon}`} alt={t} />
                      ) : (
                        <span className="tech-icon-react">{techData?.icon}</span>
                      )}
                      <span>{t}</span>
                    </div>
                  );
                })}
              </div>

              <div className="card-actions">
                <Link to={p.link} className="btn-view">
                  View Details →
                </Link>
                <a 
                  href={p.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="card-github"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
