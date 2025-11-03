import React from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  { name: "C", icon: "devicon-c-plain colored" },
  { name: "C++", icon: "devicon-cplusplus-plain colored" },
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "PHP", icon: "devicon-php-plain colored" },
  { name: "HTML", icon: "devicon-html5-plain colored" },
  { name: "CSS", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
  { name: "React.js", icon: "devicon-react-original colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Express.js", icon: "devicon-express-original" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "Figma", icon: "devicon-figma-plain colored" },
  { name: "VS Code", icon: "devicon-vscode-plain colored" },
  { name: "Windows", icon: "devicon-windows8-original colored" },
  { name: "Linux", icon: "devicon-linux-plain colored" },
  
];

const About = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, offset: 80 });
  }, []);

  return (
    <section className="about" id="about">
      <div className="container about-container">
        
        <h2 className="section-title" data-aos="fade-up">About Me</h2>
        
        <p className="about-text" data-aos="fade-up" data-aos-delay="200">
          I’m a Computer Engineering student passionate about building practical
          solutions that simplify real-world processes. From developing a
          contactless face recognition attendance system to automating
          certificate management in colleges, I enjoy transforming challenges
          into smart, secure, and user-focused technology.
          I thrive in collaborative environments, constantly learning and
          improving to create software that delivers both functionality and
          impact.
        </p>

        <h3 className="skills-title" data-aos="fade-up" data-aos-delay="300">
          Skills & Technologies
        </h3>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={100 + index * 50}
            >
              <i className={skill.icon}></i>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
