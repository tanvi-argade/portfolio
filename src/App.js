import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Page Imports
import PaperPulse from "./pages/PaperPulse";
import AttendanceSystem from "./pages/AttendanceSystem";

const Home = ({ theme, toggleTheme }) => {
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    
    AOS.init({ 
      duration: 700, 
      once: true, 
      easing: 'ease-out' 
    });
    
    AOS.refresh();
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/paperpulse" element={<PaperPulse theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/attendance" element={<AttendanceSystem theme={theme} toggleTheme={toggleTheme} />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
