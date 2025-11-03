import "./Navbar.css";
import React from "react";
import AOS from "aos";

const Navbar = ({ theme, toggleTheme }) => {
  // Smooth scroll or open Resume
  const handleScroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        if (window.AOS) AOS.refresh();
      }, 600);
    }
  };

  const openResume = () => {
    // Replace with your actual resume file link
    window.open("/Tanvi_Argade_Resume.pdf", "_blank");
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <button onClick={() => handleScroll("#projects")} className="nav-btn">
            Projects
          </button>
        </li>
        <li>
          <button onClick={() => handleScroll("#about")} className="nav-btn">
            About
          </button>
        </li>
        <li>
          <button onClick={() => handleScroll("#contact")} className="nav-btn">
            Contact
          </button>
        </li>
        <li>
          <button onClick={openResume} className="nav-btn">
            Resume
          </button>
        </li>
      </ul>

      {/* Theme Toggle */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
};

export default Navbar;
