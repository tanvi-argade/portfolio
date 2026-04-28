import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const openResume = () => {
    window.open(`${process.env.PUBLIC_URL}/Tanvi_Argade_Resume.pdf`, "_blank");
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        <div className="logo" onClick={() => handleScrollTo("home")}>
          Tanvi Argade
        </div>

        <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={`hamburger ${isMenuOpen ? "open" : ""}`}></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><button onClick={() => handleScrollTo("home")}>Home</button></li>
          <li><button onClick={() => handleScrollTo("about")}>About</button></li>
          <li><button onClick={() => handleScrollTo("skills")}>Skills</button></li>
          <li><button onClick={() => handleScrollTo("projects")}>Projects</button></li>
          <li><button onClick={() => handleScrollTo("experience")}>Experience</button></li>
          <li><button onClick={() => handleScrollTo("contact")}>Contact</button></li>
          <li className="resume-li">
            <button className="btn-resume" onClick={openResume}>Resume</button>
          </li>
          <li>
            <button className="theme-toggle-btn" onClick={toggleTheme}>
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
