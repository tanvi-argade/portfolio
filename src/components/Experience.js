import React from "react";
import "./Experience.css";

const achievements = [
  {
    icon: "📄",
    title: "IJCRT Publication",
    desc: "Published a research paper in the International Journal of Creative Research Thoughts and received publication certificate."
  },
  {
    icon: "🏆",
    title: "Aavishkar Competition",
    desc: "Selected from college level to zonal level — one of the top project submissions at Aavishkar project competition."
  },
  {
    icon: "🥉",
    title: "Project Exhibition",
    desc: "Secured Third Position in Project Exhibition, IT Department, Government Polytechnic Awasari."
  },
  {
    icon: "🎓",
    title: "Lila Poonawalla Scholarship",
    desc: "Recipient of the Lila Poonawalla Scholarship for 3 consecutive years based on academic merit."
  }
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2>Experience & Recognition</h2>
        
        <div className="exp-section">
          <div className="exp-card" data-aos="fade-up">
            <div className="exp-header">
              <div>
                <h3>Omegasoft Technologies</h3>
                <p className="exp-role">Software Developer Intern</p>
              </div>
              <p className="exp-date">June 2023 – July 2023 | Pune, India</p>
            </div>
            <p className="exp-desc">
              Implemented backend functionality using Java, JDBC, and MySQL including login authentication and dashboard data handling. Contributed to bug fixing and participated in team-based development workflows.
            </p>
          </div>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, idx) => (
            <div 
              key={idx} 
              className="achievement-card" 
              data-aos="fade-up" 
              data-aos-delay={idx * 100}
            >
              <div className="ach-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
