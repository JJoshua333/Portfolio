import React from "react";
import "./Skills.css";
import skill from "../../assets/skill-bg.jpg";

function Skills() {
  const skills = [
    "C++ and R Studios",
    "HTML and CSS",
    "JavaScript and React",
    "Python Programming",
    "SQL Databases",
    "Cloud Computing (AWS, AZURE)",
    "Java Programming",
    "Data Science",
    "Machine Learning & AI",
    "Data Visualization (Power BI)"
  ];

  return (
    <section
      id="skills"
      className="skills-section"
      style={{ backgroundImage: `url(${skill})` }}
    >
      <div className="overlay"></div>
      <div className="skills-content">
        <h2 className="skills-title">Technical Skills</h2>

        <div className="skills-list">
          {skills.map((skill, index) => (
            <span key={index} className="skill-item">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
