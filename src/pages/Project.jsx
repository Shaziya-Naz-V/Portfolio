import React from "react";
import "./Project.css";

const projects = [
  {
    title: "Product Expiry Alert System",
    desc: "Full-stack MERN application to track product expiry and send real-time alerts with REST APIs.",
    tech: "React, Node.js, Express, MongoDB",
    live: "https://product-expiry-alert-system-e6u3.vercel.app",
    github: "https://github.com/Shaziya-Naz-V/Product-Expiry-Alert-System",
  },
  {
    title: "Business Decision Impact Analysis",
    desc: "Developed an ensemble ML model using XGBoost, CatBoost, and ExtraTrees achieving 90-95% accuracy for business prediction",
    tech: "Python, Machine Learning, Pandas, Scikit-learn, React",
    live: "https://your-live-link.com",
    github: "https://github.com/your-repo",
  },
  {
    title: "Currency Converter",
    desc: "Created a real-time currency converter using API integration with responsive UI for accurate exchange rates.",
    tech: "Javascript, Api, HTML, CSS",
    live: "https://currency-converter-alpha-one-69.vercel.app/",
    github: "https://github.com/Shaziya-Naz-V/CurrencyConverter",
  },
   {
    title: "Student Result Management Dashboard",
    desc: "Dashboard to manage student results with CRUD operations and performance visualization ",
    tech: "React, Node.js, Express, MongoDB",
    live: "https://student-result-management-system-theta.vercel.app/",
    github: "https://github.com/Shaziya-Naz-V/Student-Result-Management-System",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p className="desc">{project.desc}</p>
            <p className="tech">{project.tech}</p>

            <div className="buttons">
              <a href={project.live} target="_blank" rel="noreferrer">
                Live
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;