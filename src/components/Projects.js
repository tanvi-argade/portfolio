// src/components/Projects.jsx
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";

/* === Image imports === */
import CLC1 from "../assets/CLC/1.png";
import CLC2 from "../assets/CLC/2.png";
import CLC3 from "../assets/CLC/3.png";
import CLC4 from "../assets/CLC/4.png";
import CLC5 from "../assets/CLC/5.png";
import CLC6 from "../assets/CLC/6.png";
import CLC7 from "../assets/CLC/7.png";
import CLC8 from "../assets/CLC/8.png";
import CLC9 from "../assets/CLC/9.png";
import CLC10 from "../assets/CLC/10.png";
import CLC11 from "../assets/CLC/11.png";
import CLC12 from "../assets/CLC/12.png";
import CLCG from "../assets/CLC/CLCG.png";

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
import PaperPulse from "../assets/PaperPulse/PaperPulse.png";

import SN1 from "../assets/ShortNotes/1.jpeg";
import SN2 from "../assets/ShortNotes/2.jpeg";
import SN3 from "../assets/ShortNotes/3.jpeg";
import SN4 from "../assets/ShortNotes/4.jpeg";
import SNG from "../assets/ShortNotes/ShortNotes.jpeg";

import AS1 from "../assets/AttendanceSystem/1.png";
import AS2 from "../assets/AttendanceSystem/2.png";
import AS3 from "../assets/AttendanceSystem/3.png";
import AS4 from "../assets/AttendanceSystem/4.png";
import AS5 from "../assets/AttendanceSystem/5.png";
import AS6 from "../assets/AttendanceSystem/6.png";
import AS7 from "../assets/AttendanceSystem/7.png";
import AS8 from "../assets/AttendanceSystem/8.png";
import AS9 from "../assets/AttendanceSystem/9.png";
import AS10 from "../assets/AttendanceSystem/10.png";
import AS11 from "../assets/AttendanceSystem/11.png";
import ASMain from "../assets/AttendanceSystem/AttendanceSystem.png";

/* === Project Data === */
const projects = [
  {
    id: "paperpulse",
    title: "PaperPulse",
    desc: "Research paper workflow automation including secure approval, notifications & dashboard analytics.",
    longDescription:
      "PaperPulse is a research paper management platform that streamlines submission, review, and publication workflows. It includes role-based authentication, automated email notifications, Razorpay integration for payments, and an admin dashboard for analytics.",
    images: [PaperPulse, pp1, pp2, pp3, pp4, pp5, pp6, pp7, pp8, pp9, pp10, pp11, pp12],
    github: "https://github.com/tanvi-argade",
    tech: [
      "devicon-react-original colored",
      "devicon-bootstrap-plain colored",
      "devicon-nodejs-plain colored",
      "devicon-express-original",
      "devicon-postgresql-plain colored",
    ],
  },
  {
    id: "attendance",
    title: "Face Recognition Attendance System",
    desc: "AI-powered contactless attendance with secure logs.",
    longDescription:
      "A robust face recognition-based attendance system built using Python and OpenCV. It captures real-time webcam input, performs model recognition, logs attendance in a secure database, and provides an admin dashboard for viewing reports.",
    images: [ASMain, AS1, AS2, AS3, AS4, AS5, AS6, AS7, AS8, AS9, AS10, AS11],
    github: "https://github.com/tanvi-argade",
    tech: [
      "devicon-python-plain colored",
      "devicon-opencv-plain colored",
      "devicon-mysql-plain colored",
      "devicon-flask-original colored",
      "devicon-html5-plain colored",
      "devicon-css3-plain colored",
      "devicon-bootstrap-plain colored",
    ],
  },
  {
    id: "clcms",
    title: "College Leaving Certificate System",
    desc: "Automated LC issuance with role-based access.",
    longDescription:
      "A full-stack platform to automate leaving certificate issuance. Students submit online, and admins generate secure certificates using customizable templates. Role-based authentication ensures workflow efficiency and data integrity.",
    images: [CLCG, CLC1, CLC2, CLC3, CLC4, CLC5, CLC6, CLC7, CLC8, CLC9, CLC10, CLC11, CLC12],
    github: "https://github.com/tanvi-argade",
    tech: [
      "devicon-java-plain colored",
      "devicon-mysql-plain colored",
      "devicon-oracle-original colored",
    ],
  },
  {
    id: "shortnotes",
    title: "ShortNotes App",
    desc: "Android offline notes app with persistence.",
    longDescription:
      "ShortNotes is an offline Android application with CRUD functionality, SQLite storage, and a clean UI. It provides a lightweight and reliable platform for quick note-taking and organization.",
    images: [SN1, SN2, SN3, SN4, SNG],
    github: "https://github.com/tanvi-argade",
    tech: [
      "devicon-android-plain colored",
      "devicon-java-plain colored",
      "devicon-xml-plain",
      "devicon-androidstudio-plain colored",
    ],
  },
];

/* === SVG GitHub Icon === */
const GitIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 
      7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49
      -2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82
      -1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 
      1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51
      -1.07-1.78-.2-3.64-.89-3.64-3.95 
      0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08
      -2.12 0 0 .67-.21 2.2.82.64-.18 
      1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 
      2.2-.82 2.2-.82.44 1.1.16 1.92.08 
      2.12.51.56.82 1.27.82 2.15 
      0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 
      1.48 0 1.07-.01 1.93-.01 2.2 
      0 .21.15.46.55.38A8.013 8.013 0 0 0 16 
      8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* Initialize AOS */
  React.useEffect(() => {
    AOS.refresh();
  }, []);


  /* Disable background scroll when modal is active */
  useEffect(() => {
    if (selected) {
      document.body.classList.add("modal-active");
      document.body.style.overflow = "hidden";
      setActiveIndex(0);
    } else {
      document.body.classList.remove("modal-active");
      document.body.style.overflow = "";
    }
    return () => {
      document.body.classList.remove("modal-active");
      document.body.style.overflow = "";
    };
  }, [selected]);

  /* Keyboard navigation inside modal */
  useEffect(() => {
    const handle = (e) => {
      if (!selected) return;
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowLeft") setActiveIndex((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight")
        setActiveIndex((i) => Math.min(selected.images.length - 1, i + 1));
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [selected]);

  /* Modal Component */
  const modal = selected
    ? createPortal(
      <div className="pp-modal-overlay" onClick={() => setSelected(null)}>
        <div className="pp-modal-panel" onClick={(e) => e.stopPropagation()}>
          <header className="pp-modal-header">
            <h3>{selected.title}</h3>
            <div className="pp-actions">
              {selected.github && (
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noreferrer"
                  className="pp-github"
                >
                  <GitIcon size={16} />
                  GitHub
                </a>
              )}
              <button className="pp-close" onClick={() => setSelected(null)}>
                ×
              </button>
            </div>
          </header>

          <div className="pp-body">
            <div className="pp-left">
              <div className="pp-large-wrap">
                <img src={selected.images[activeIndex]} alt="" />
              </div>
              <div className="pp-thumbs">
                {selected.images.map((img, i) => (
                  <button
                    key={i}
                    className={`pp-thumb ${i === activeIndex ? "active" : ""}`}
                    onClick={() => setActiveIndex(i)}
                  >
                    <img src={img} alt="" />
                  </button>
                ))}
              </div>
            </div>

            <aside className="pp-right">
              <p className="pp-desc">{selected.longDescription}</p>
              <p><strong>Summary</strong></p>
              <p className="muted">{selected.desc}</p>

              <p style={{ marginTop: 12 }}><strong>Technologies</strong></p>
              <div className="pp-tech">
                {selected.tech.map((t, i) => (
                  <div key={i} className="pp-tech-row">
                    <i className={t}></i>
                    <span>{t.replace(/devicon-|plain|original|colored|-/g, " ").trim()}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>,
      document.body
    )
    : null;

  /* Render Section */
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title" data-aos="zoom-in">Projects</h2>

        <div className="project-grid">
          {projects.map((p, index) => (
            <article
              key={p.id}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => setSelected(p)}
              role="button"
              tabIndex={0}
            >
              <div className="card-cover">
                <img src={p.images[0]} alt={p.title} />
              </div>
              <div className="project-info">
                <h3>{p.title}</h3>
                <p className="muted">{p.desc}</p>
                <div className="tech-icons small">
                  {p.tech.map((t, i) => (
                    <i key={i} className={t}></i>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {modal}
    </section>
  );
};

export default Projects;
