import React from "react";
import "../styles/ProjectsSection.css";

import csharpImg from "../assets/c-sharp-project-card-img.png";
import pythonImg from "../assets/python-project-card-img.png";
import jsImg from "../assets/javascript-project-card-img.png";

const projects = [
  {
  id: 1,
  image: jsImg,
  imageAlt: "Shayna's Farm Apothecary e-commerce store",
  accent: "project-green",
  title: "Shayna's Farm Apothecary",
  tag: "Full Stack",
  description:
    "A full-stack e-commerce store for a small farm apothecary brand. Built with a React frontend, Node.js REST API, and MongoDB database. Features product browsing, a persistent cart, and an admin panel for inventory management.",
  href: "https://shaynas-farm-apothecary.vercel.app/",
  tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
},
  {
    id: 2,
    image: pythonImg,
    imageAlt: "Python project illustration",
    accent: "project-green",
    tag: "Python",
    title: "Coming Soon",
    description:
      "A collection of Python projects showcasing various concepts, libraries, and frameworks to demonstrate understanding in Python development.",
    href: "#",
    tech: ["Python", "React", "Bootstrap", "MongoDB"],
  },
  {
    id: 3,
    image: csharpImg,
    imageAlt: "C# project illustration",
    accent: "project-blue",
    tag: "C# / .NET",
    title: "Coming Soon",
    description:
      "A collection of C# and .NET projects showcasing various concepts, libraries, and frameworks to demonstrate understanding in C# development.",
    href: "#",
    tech: ["C#", ".NET", "SQL Server"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>Selected work.</h2>
          <p>A few projects that show my growth as a developer.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.id} className={`project-card ${project.accent}`}>
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="project-card-img"
                />
              </div>
              <div className="project-card-body">
                <span className="project-tag">{project.tag}</span>
                <h3 className="project-title">{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="project-tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.href} className="project-link" target="_blank">
                  View Examples →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
