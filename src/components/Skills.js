import React from "react";
import "./Skills.css";

const skillCategories = [
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "express/express-original.svg" },
      { name: "Python", icon: "python/python-original.svg" },
      { name: "Flask", icon: "flask/flask-original.svg" },
      { name: "Java", icon: "java/java-original.svg" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: "react/react-original.svg" },
      { name: "JavaScript", icon: "javascript/javascript-original.svg" },
      { name: "HTML5", icon: "html5/html5-original.svg" },
      { name: "CSS3", icon: "css3/css3-original.svg" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "postgresql/postgresql-original.svg" },
      { name: "MySQL", icon: "mysql/mysql-original.svg" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "git/git-original.svg" },
      { name: "GitHub", icon: "github/github-original.svg", className: "github-icon" },
      { name: "VS Code", icon: "vscode/vscode-original.svg" },
      { name: "Linux", icon: "linux/linux-original.svg" },
      { name: "AWS", icon: "amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    ],
  },
];

const Skills = () => {
  const iconBaseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Tech Stack</h2>
        <p className="section-subtitle">Technologies I work with</p>
        
        <div className="skills-container">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="skill-category" 
              data-aos="fade-up" 
              data-aos-delay={idx * 100}
            >
              <h3>{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <img 
                      src={`${iconBaseUrl}${skill.icon}`} 
                      alt={skill.name} 
                      className={skill.className || ""}
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
