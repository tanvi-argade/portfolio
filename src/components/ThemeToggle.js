import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={`theme-toggle ${theme === "dark" ? "dark" : "light"}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle light / dark"
    >
      <span className="icon" aria-hidden>
        {theme === "dark" ? "🌞" : "🌙"}
      </span>
    </button>
  );
};

export default ThemeToggle;
