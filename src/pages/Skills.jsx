import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    {
      title: "Frontend:",
      items: "HTML, CSS, JavaScript, React, Tailwind CSS",
    },
    {
      title: "Backend:",
      items: "Node.js, Express.js",
    },
    {
      title: "Database:",
      items: "MongoDB",
    },
    {
      title: "Tools:",
      items: "Git, GitHub, VS Code",
    },
    {
      title: "Languages:",
      items: "Java, Python",
    },
     {
      title: "Soft Skills:",
      items: "Leadership, Communication, Teamwork.",
    },
  ];

  return (
    <section className="skills" id="skills">
      <h1>My Skills</h1>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h2>{skill.title}</h2>
            <p>{skill.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;