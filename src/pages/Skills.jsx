import React from "react";
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: "HTML", level: 70 },
    { name: "CSS", level: 50 },
    { name: "JavaScript", level: 40 },
    { name: "React", level: 45 },
    { name: "Node.js", level: 40 },
    { name: "MongoDB", level: 60 },
    { name: "Git & GitHub", level: 80 },
    { name: "Java (Basic)", level: 50 },
    { name: "Python (Basic)", level: 50 },
  ];

  return (
    <div className="skills">
      <h1>My Skills</h1>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-title">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
