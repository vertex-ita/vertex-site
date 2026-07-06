import React from "react";
import "../styles/works.css";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

export default function Works() {
  return (
    <div className="page works-page">
      <div className="page-head enhanced-head">
        <span className="eyebrow">Portfolio</span>

        <h1 className="page-title-gradient works-title">
          <span className="title-line white">Progetti pensati</span>
          <span className="title-line white">per essere</span>
          <span className="title-line gradient">belli, chiari e funzionali</span>
        </h1>

        <p className="muted">
          Ogni progetto ha un obiettivo: migliorare l’immagine, semplificare un processo
          o rendere più efficace la comunicazione digitale.
        </p>
      </div>

      <div className="grid3 works-grid">
        {projects.map((p) => (
          <article className={`card work-card ${p.status}`} key={p.id}>
            <div className="work-media">
              <img src={p.image} alt={p.title} />
              <div className="work-overlay" />

              {p.status === "private" && (
                <div className="lock-pill">Demo riservata</div>
              )}

              <div className="overlay-text">
                {p.tags?.[0] || "Progetto digitale"}
              </div>
            </div>

            <div className="work-body">
              <div className="work-top">
                <div>
                  <div className="card-title">{p.title}</div>
                  <div className="muted">{p.subtitle}</div>
                </div>

                <div className="pill">{p.tags?.[0] || "Progetto"}</div>
              </div>

              <div className="work-desc muted">{p.description}</div>

              <div className="work-stack">
                {p.stack.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>

              <div className="work-actions">
                {p.link ? (
                  <a
                    className="btn primary"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Apri progetto
                  </a>
                ) : (
                  <Link className="btn primary" to="/contact">
                    Richiedi demo
                  </Link>
                )}

                {p.status === "private" && (
                  <span className="muted small">Accesso protetto</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="card works-cta">
        <div>
          <span className="eyebrow">Il prossimo può essere il tuo</span>

          <div className="card-title">
            Vuoi un progetto con questo livello di immagine?
          </div>

          <div className="muted">
            Partiamo da una struttura forte, un design curato e un’esperienza chiara
            per il cliente.
          </div>
        </div>

        <Link className="btn primary btn-glow" to="/contact">
          Richiedi una proposta
        </Link>
      </div>
    </div>
  );
}