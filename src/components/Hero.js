import React from "react";
import "./Hero.css";
import profile from "../assets/profile.jpg";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  const openResume = () => {
    window.open(`${process.env.PUBLIC_URL}/Tanvi_Argade_Resume.pdf`, "_blank");
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content" data-aos="fade-right">
          <p className="hero-label">Full-Stack Developer</p>
          <h1>Tanvi Nitin Argade</h1>
          <p className="hero-tagline">
            Full-Stack Developer focused on backend systems, API design, and real-world workflow applications.
          </p>
          <div className="hero-btns">
            <button 
              className="btn-primary" 
              onClick={() => handleScrollTo("projects")}
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              View Projects
            </button>
            <button 
              className="btn-secondary" 
              onClick={openResume}
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              Download Resume
            </button>
            <a 
              href="https://github.com/tanvi-argade" 
              target="_blank" 
              rel="noreferrer" 
              className="icon-btn"
              data-aos="fade-up" 
              data-aos-delay="300"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
        <div className="hero-image" data-aos="fade-left">
          <div className="profile-img-wrapper">
            <img src={profile} alt="Tanvi Nitin Argade" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
