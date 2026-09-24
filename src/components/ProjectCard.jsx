import React from "react";
import ProjectVisual from "./ProjectVisual";

export default function ProjectCard({ project, onOpen, compact = false }) {
  return (
    <article className={`project-card ${project.featured ? "featured" : ""} ${compact ? "compact" : ""}`}>
      <button className="project-card-open" type="button" onClick={() => onOpen?.(project)} aria-label={`Apri il caso studio ${project.title}`}>
        <div className="project-card-media">
          {project.image ? (
            <img src={project.image} alt={project.title} loading="lazy" />
          ) : (
            <ProjectVisual type={project.visual} title={project.title} />
          )}
          <div className="project-media-shade" />
          <div className="project-category">{project.category}</div>
          <div className="project-view-hint">Caso studio <span>↗</span></div>
        </div>

        <div className="project-card-body">
          <div className="project-card-title-row">
            <div>
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
            </div>
            <span className="project-arrow">↗</span>
          </div>
          <p className="project-card-description">{project.description}</p>
          <div className="project-tags">
            {project.tags?.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </button>
    </article>
  );
}
