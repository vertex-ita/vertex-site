import React, { useEffect } from "react";
import ProjectVisual from "./ProjectVisual";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (event) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.classList.add("modal-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("modal-open");
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="project-modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div className="project-modal" role="dialog" aria-modal="true" aria-label={`Caso studio ${project.title}`} onMouseDown={(e) => e.stopPropagation()}>
        <button className="project-modal-close" type="button" onClick={onClose} aria-label="Chiudi">×</button>

        <div className="project-modal-media">
          {project.image ? <img src={project.image} alt={project.title} /> : <ProjectVisual type={project.visual} title={project.title} />}
        </div>

        <div className="project-modal-content">
          <span className="eyebrow">{project.category} · Case study</span>
          <h2>{project.title}</h2>
          <p className="modal-lead">{project.description}</p>

          <div className="case-grid">
            <div><span>Esigenza</span><p>{project.challenge}</p></div>
            <div><span>Soluzione</span><p>{project.solution}</p></div>
            <div><span>Valore</span><p>{project.impact}</p></div>
          </div>

          <div className="modal-stack">
            {project.stack.map((item) => <span key={item}>{item}</span>)}
          </div>

          <div className="modal-actions">
            {project.link && <a className="btn primary" href={project.link} target="_blank" rel="noreferrer">Apri progetto</a>}
            <a className="btn secondary" href="/contact">Parliamo di un progetto simile</a>
          </div>
        </div>
      </div>
    </div>
  );
}
