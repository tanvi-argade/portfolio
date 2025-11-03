import React, { useEffect } from "react";
import Particles from "./Particles";
import "./Hero.css";
import profile from "../assets/profile.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 60 });
  }, []);

  return (
    <section className="hero" id="home" aria-label="Hero section">
      <Particles />

      <div className="blob blob-a" aria-hidden></div>
      <div className="blob blob-b" aria-hidden></div>
      <div className="blob blob-c" aria-hidden></div>

      <div className="hero-inner">
        <div className="hero-text" data-aos="fade-up">
          <div
            className="hero-photo-wrapper"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <img src={profile} alt="Tanvi Argade" className="hero-photo" />
          </div>

          <h1
            className="hero-name"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            Tanvi Argade
          </h1>

          <h2
            className="hero-role"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            Software Developer | Web & Backend Engineering
          </h2>

          <p
            className="hero-tagline"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            Building practical Web and Backend solutions with
            clean code and real-world impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
