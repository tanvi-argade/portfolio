import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-text">© 2025 Tanvi Argade · Built with React</p>
        <div className="footer-links">
          <a href="https://github.com/tanvi-argade" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/tanvi-argade" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:tanviargade1@gmail.com"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
