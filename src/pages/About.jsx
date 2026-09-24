import React from "react";
import { Link } from "react-router-dom";
import "../styles/about.css";

const VALUES = [
  ["01", "Capire prima di proporre", "Non partiamo da un pacchetto preconfezionato. Analizziamo processi, vincoli e obiettivi prima di decidere cosa costruire."],
  ["02", "Responsabilità tecnica", "La soluzione deve essere solida anche quando nessuno la guarda: accessi, dati, backup, performance e manutenzione contano."],
  ["03", "Qualità percepita", "Un'azienda viene giudicata anche da ciò che mostra. Interfacce e materiali visuali devono trasmettere ordine, competenza e cura."],
  ["04", "Evoluzione continua", "I progetti migliori cambiano con l'azienda. Per questo preferiamo basi pulite, modulari e facili da estendere."],
];

const PROCESS = [
  ["01", "Discovery", "Obiettivi, problemi, utenti, strumenti già presenti e priorità."],
  ["02", "Blueprint", "Architettura, flussi, UX, sicurezza e direzione visuale."],
  ["03", "Build", "Sviluppo, integrazioni, design, test e rilascio progressivo."],
  ["04", "Improve", "Supporto, analisi dell'uso reale e nuove evolutive quando servono."],
];

export default function About() {
  return (
    <div className="page about-page">
      <header className="about-head">
        <span className="eyebrow">About Vertex</span>
        <h1>Vogliamo essere il reparto digitale che <span className="gradient-text">un'azienda vorrebbe avere al proprio fianco.</span></h1>
        <p>
          Tecnico quando serve essere tecnici. Creativo quando serve comunicare. Pragmatico sempre. Vertex unisce sviluppo, IT, cybersecurity e design per dare alle aziende un interlocutore capace di vedere il quadro completo.
        </p>
      </header>

      <section className="about-manifesto">
        <div className="manifesto-visual" aria-hidden="true">
          <div className="manifesto-v">V</div>
          <span className="manifesto-line one" /><span className="manifesto-line two" /><span className="manifesto-line three" />
          <div className="manifesto-tag tag-a">TECH</div><div className="manifesto-tag tag-b">SECURE</div><div className="manifesto-tag tag-c">CREATE</div>
        </div>
        <div className="manifesto-copy">
          <span className="eyebrow">La visione</span>
          <h2>Non vogliamo consegnare “un sito”. Vogliamo lasciare <span className="gradient-text">un'azienda più forte di prima.</span></h2>
          <p>Questo può significare automatizzare un controllo ripetitivo, mettere ordine negli accessi, creare un gestionale che elimina fogli sparsi, mostrare un macchinario in AR o finalmente dare al brand una presenza grafica coerente.</p>
          <p>Il mezzo cambia. Il criterio no: la soluzione deve avere un impatto reale, essere comprensibile e reggere nel tempo.</p>
        </div>
      </section>

      <section className="section values-section">
        <div className="section-heading"><span className="eyebrow">Principi di lavoro</span><h2>Quello che consideriamo <span className="gradient-text">non negoziabile.</span></h2></div>
        <div className="values-grid">
          {VALUES.map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section two-worlds-section">
        <div className="world-card tech-world">
          <span className="eyebrow">Technology</span>
          <h2>Software, IT e sicurezza.</h2>
          <p>Applicazioni custom, workflow, Microsoft 365, infrastruttura, accessi, dati e automazioni. La parte invisibile deve essere costruita bene quanto quella visibile.</p>
          <div className="world-tags"><span>Custom app</span><span>IT operations</span><span>Cybersecurity</span><span>Cloud</span><span>Automation</span></div>
        </div>
        <div className="world-card creative-world">
          <span className="eyebrow">Creative</span>
          <h2>Brand, grafica e visual.</h2>
          <p>Locandine, brochure, rendering, social e identità visive seguite da grafici specializzati per dare al risultato una qualità che non sembri generica o automatica.</p>
          <div className="world-tags"><span>Art direction</span><span>Print</span><span>Social</span><span>Rendering</span><span>Brand system</span></div>
        </div>
      </section>

      <section className="section process-section">
        <div className="process-copy"><span className="eyebrow">Il processo</span><h2>Poche fasi, <span className="gradient-text">molta chiarezza.</span></h2><p>Ogni progetto cambia, ma il metodo resta leggibile dall'inizio alla fine.</p></div>
        <div className="process-timeline">
          {PROCESS.map(([n, title, text]) => <div className="process-item" key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}
        </div>
      </section>

      <section className="section about-cta">
        <span className="eyebrow">Costruiamo una collaborazione, non solo una consegna</span>
        <h2>Se cerchi un riferimento digitale che possa seguire più pezzi della tua azienda, <span className="gradient-text">iniziamo da una conversazione.</span></h2>
        <div className="hero-actions"><Link className="btn primary btn-large" to="/contact">Conosciamoci <span>↗</span></Link><Link className="btn secondary btn-large" to="/works">Guarda i progetti</Link></div>
      </section>
    </div>
  );
}
