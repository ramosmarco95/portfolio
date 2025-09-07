import React from "react";
import "../styles/project-card.css";

export default function ProjectCard({
    title,
    description,
    mediaType = "image", // 'image' | 'video'
    mediaSrc,
    mediaAlt = "Project preview",
    githubUrl,
    tech = [],
    }) {
    return (
    <a
    className="project-card"
    href={githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${title} – view source on GitHub`}
    >
    <div className="project-media">
    {mediaType === "video" ? (
    <video
    className="project-video"
    src={mediaSrc}
    muted
    loop
    playsInline
    autoPlay
    preload="metadata" 
    aria-label={mediaAlt}
    />
    ) : (
    <img className="project-image" src={mediaSrc} alt={mediaAlt} loading="lazy" />
    )}
    </div>


    <div className="project-body">
    <h3 className="project-title">{title}</h3>
    {description && <p className="project-desc">{description}</p>}
    {tech?.length > 0 && (
    <ul className="project-tech" aria-label="Technologies used">
    {tech.map((t) => (
    <li key={t}>{t}</li>
    ))}
    </ul>
    )}
    </div>
    </a>
    );
}