// ===== src/pages/ProjectsPage.jsx =====
import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/project-page.css";
import projects from "../data/projects-data.js";


export default function ProjectsPage() {
return (
<div className="projects-wrapper">
  <header className="projects-header">
  <h1>Projects</h1>
  <p className="projects-sub">Selected work. Click any card to view the source code on GitHub.</p>
  </header>


  <div className="projects-grid" aria-label="Project gallery">
    {projects.map((p) => (
    <ProjectCard key={p.id} {...p} />
    ))}
  </div>
</div>
);
}