import React from "react";
import "./Particles.css";

/**
 * Lightweight CSS-driven particle layer.
 * Renders many <span> elements that animate via CSS.
 */
const Particles = () => {
  // quick array for 24 particles
  const dots = Array.from({ length: 24 });
  return (
    <div className="particles" aria-hidden>
      {dots.map((_, i) => (
        <span key={i} className={`p p-${i + 1}`} />
      ))}
    </div>
  );
};

export default Particles;
