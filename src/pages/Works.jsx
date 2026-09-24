import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { projects, projectCategories, graphicWorks } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import "../styles/works.css";

export default function Works() {
  const [filter, setFilter] = useState("Tutti");
  const [activeProject, setActiveProject] = useState(null);

  const filtered = useMemo(
    () => filter === "Tutti" ? projects : projects.filter((project) => project.category === filter),
    [filter]
  );

  return (
    <div className="page works-page">
      <header className="portfolio-head">
        <span className="eyebrow">Vertex / Selected work</span>
        <h1>Non vendiamo promesse.<br/><span className="gradient-text">Mostriamo quello che costruiamo.</span></h1>
        <p>
          Software interni, strumenti per operations, siti corporate, realtà aumentata e sistemi digitali pensati su esigenze concrete. I progetti riservati vengono raccontati senza esporre dati o accessi dei clienti.
        </p>
      </header>

      <div className="portfolio-filter" role="tablist" aria-label="Filtra progetti">
        {projectCategories.map((category) => (
          <button key={category} type="button" className={filter === category ? "active" : ""} onClick={() => setFilter(category)}>{category}</button>
        ))}
      </div>

      <section className="portfolio-grid">
        {filtered.map((project) => <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />)}
      </section>

      <section className="section design-portfolio" id="design">
        <div className="design-portfolio-head">
          <div>
            <span className="eyebrow">Graphic & visual design</span>
            <h2>La parte creativa non è un'aggiunta. <span className="gradient-text">È parte del progetto.</span></h2>
          </div>
          <div className="design-statement">
            <strong>Grafici specializzati, risultato controllato.</strong>
            <p>Locandine, brochure, rendering e materiali visuali vengono progettati e rifiniti con supervisione umana, non affidati a una generazione automatica finale.</p>
          </div>
        </div>

        <div className="design-work-grid">
          {graphicWorks.map((item, index) => (
            <article className={`design-work-card design-${index + 1}`} key={item.title}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="design-work-overlay"><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section portfolio-cta">
        <div><span className="eyebrow">Il prossimo case study può essere il tuo</span><h2>Hai un flusso macchinoso, un progetto fermo o un'immagine da alzare di livello?</h2></div>
        <Link className="btn primary btn-large" to="/contact">Parliamone <span>↗</span></Link>
      </section>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
}
