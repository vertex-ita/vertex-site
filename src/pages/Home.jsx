import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projects, graphicWorks } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import mark from "../assets/vertex-mark.png";
import "../styles/home.css";

const CAPABILITIES = [
  { code: "01", title: "Software su misura", text: "Gestionali, dashboard, workflow e strumenti costruiti intorno ai processi reali dell'azienda." },
  { code: "02", title: "IT & Cybersecurity", text: "Infrastruttura, identità, Microsoft 365, hardening e protezione operativa con un approccio pragmatico." },
  { code: "03", title: "Web, 3D & AR", text: "Siti evoluti, cataloghi tecnici, viewer 3D e realtà aumentata per portare prodotti e servizi oltre la pagina." },
  { code: "04", title: "Brand & Graphic Design", text: "Locandine, brochure, rendering e sistemi visuali curati da grafici specializzati." },
];

const FLOW = [
  ["01", "Capire", "Processi, obiettivi, criticità e pubblico: prima di progettare capiamo davvero cosa serve."],
  ["02", "Progettare", "UX, architettura tecnica e direzione visuale vengono pensate insieme, non a compartimenti stagni."],
  ["03", "Costruire", "Sviluppiamo, testiamo e integriamo ciò che serve senza appesantire il progetto con tecnologia inutile."],
  ["04", "Restare", "Supporto, evolutive e miglioramenti: il progetto può crescere insieme all'azienda."],
];

export default function Home() {
  const [activeProject, setActiveProject] = useState(null);
  const featured = projects.filter((project) => project.featured).slice(0, 5);

  return (
    <div className="page home-page">
      <section className="home-hero">
        <div className="hero-copy reveal-up">
          <div className="hero-kicker"><span className="live-dot" /> DIGITAL PARTNER · IT / SOFTWARE / DESIGN</div>
          <h1>
            Tecnologia, sicurezza e design.
            <span> Un unico punto di riferimento.</span>
          </h1>
          <p className="hero-lead">
            Vertex affianca aziende che vogliono lavorare meglio, proteggere ciò che conta e presentarsi al mercato con un'immagine all'altezza. Progettiamo software, infrastrutture digitali, esperienze web e comunicazione visuale con una visione unica.
          </p>
          <div className="hero-actions">
            <Link className="btn primary btn-large" to="/contact">Parlaci della tua azienda <span>↗</span></Link>
            <Link className="btn secondary btn-large" to="/works">Esplora i progetti</Link>
          </div>
          <div className="hero-proof">
            <div><strong>Software</strong><span>costruito sui processi</span></div>
            <div><strong>Security</strong><span>pensata fin dall'inizio</span></div>
            <div><strong>Design</strong><span>curato da professionisti</span></div>
          </div>
        </div>

        <div className="hero-console-wrap reveal-up delay-1" aria-hidden="true">
          <div className="hero-console">
            <div className="console-topbar">
              <div className="console-dots"><i /><i /><i /></div>
              <span>VERTEX / DIGITAL OPERATIONS</span>
              <div className="console-online"><i /> systems ready</div>
            </div>

            <div className="console-main">
              <div className="console-brand">
                <div className="vertex-glyph"><img src={mark} alt="" /></div>
                <div>
                  <small>PARTNER LAYER</small>
                  <strong>Build. Secure. Design.</strong>
                </div>
              </div>

              <div className="console-modules">
                <div className="console-module wide">
                  <div className="module-head"><span>OPERATIONS</span><b>LIVE</b></div>
                  <div className="module-bars"><i /><i /><i /><i /><i /></div>
                  <div className="module-caption">Custom apps · workflow · data</div>
                </div>
                <div className="console-module security">
                  <div className="security-ring"><span>✓</span></div>
                  <strong>Security</strong><small>identity / access / resilience</small>
                </div>
                <div className="console-module ar">
                  <div className="cube"><span /><span /><span /></div>
                  <strong>AR / 3D</strong><small>real scale experiences</small>
                </div>
              </div>

              <div className="console-ticker">
                <span>GESTIONALI</span><i />
                <span>MICROSOFT 365</span><i />
                <span>WEB APP</span><i />
                <span>GRAPHIC DESIGN</span>
              </div>
            </div>
          </div>
          <div className="console-glow one" /><div className="console-glow two" />
        </div>
      </section>

      <section className="capability-rail reveal-up delay-2" aria-label="Competenze Vertex">
        <span>IT CONSULTING</span><i />
        <span>CYBERSECURITY</span><i />
        <span>CUSTOM SOFTWARE</span><i />
        <span>WEB & E-COMMERCE</span><i />
        <span>AR / 3D</span><i />
        <span>BRAND DESIGN</span>
      </section>

      <section className="section home-intro">
        <div className="section-heading split">
          <div>
            <span className="eyebrow">Non una semplice web agency</span>
            <h2>Entriamo nei problemi veri dell'azienda. <span className="gradient-text">Poi costruiamo la soluzione.</span></h2>
          </div>
          <p>
            Il valore di Vertex è mettere allo stesso tavolo parte tecnica e parte creativa. Una dashboard deve funzionare. Un'infrastruttura deve essere affidabile. Un sito deve comunicare. E tutto deve parlare la stessa lingua.
          </p>
        </div>

        <div className="capability-grid">
          {CAPABILITIES.map((item) => (
            <article className="capability-card" key={item.code}>
              <div className="capability-code">{item.code}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link to="/services" className="text-link">Scopri di più <span>↗</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section featured-work-section">
        <div className="section-heading">
          <span className="eyebrow">Progetti reali, non demo da template</span>
          <h2>Strumenti che lavorano <span className="gradient-text">dentro aziende vere.</span></h2>
          <p>Dal controllo commesse alla realtà aumentata, dai gestionali completi ai sistemi di tesseramento: il portfolio racconta cosa sappiamo costruire meglio di qualsiasi slogan.</p>
        </div>

        <div className="featured-project-grid">
          {featured.map((project, index) => (
            <div className={`featured-project-slot slot-${index + 1}`} key={project.id}>
              <ProjectCard project={project} onOpen={setActiveProject} compact={index > 1} />
            </div>
          ))}
        </div>

        <div className="center-action">
          <Link className="btn secondary" to="/works">Guarda tutto il portfolio <span>↗</span></Link>
        </div>
      </section>

      <section className="section security-section">
        <div className="security-panel">
          <div className="security-copy">
            <span className="eyebrow">IT & Cybersecurity</span>
            <h2>La tecnologia deve accelerare l'azienda. <span className="gradient-text">Non diventare un rischio.</span></h2>
            <p>
              Vertex supporta ambienti IT, identità e accessi, Microsoft 365, backup, hardening, continuità operativa e sicurezza dei progetti digitali. Niente terrorismo informatico: priorità chiare, interventi concreti e documentazione comprensibile.
            </p>
            <div className="security-points">
              <span>Identity & access</span><span>M365 & cloud</span><span>Hardening</span><span>Backup & resilience</span><span>Security by design</span><span>IT operations</span>
            </div>
            <Link to="/services" className="btn primary">Scopri l'area IT & Security</Link>
          </div>
          <div className="security-visual" aria-hidden="true">
            <div className="shield-core">V</div>
            <div className="shield-orbit orbit-a"><i /></div>
            <div className="shield-orbit orbit-b"><i /></div>
            <div className="security-readout top"><small>IDENTITY</small><strong>Protected</strong></div>
            <div className="security-readout bottom"><small>OPERATIONS</small><strong>Monitored</strong></div>
          </div>
        </div>
      </section>

      <section className="section graphic-section-home">
        <div className="graphic-intro-home">
          <div>
            <span className="eyebrow">Creative studio</span>
            <h2>Quando serve comunicare, <span className="gradient-text">il codice da solo non basta.</span></h2>
          </div>
          <div className="human-design-badge"><span>✦</span><div><strong>Human-led design</strong><small>Finitura seguita da grafici specializzati</small></div></div>
        </div>
        <p className="graphic-lead-home">
          Locandine, brochure, rendering, menu, identità visive e campagne: curiamo composizione, gerarchie e resa finale con un processo grafico professionale. I materiali finali non vengono affidati a una generazione automatica: composizione e finitura restano sotto controllo professionale.
        </p>

        <div className="graphic-mosaic">
          {graphicWorks.slice(0, 4).map((item, index) => (
            <article className={`graphic-tile tile-${index + 1}`} key={item.title}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="graphic-tile-overlay"><strong>{item.title}</strong><span>{item.text}</span></div>
            </article>
          ))}
        </div>
        <Link to="/works#design" className="text-link graphic-link">Esplora il reparto grafico <span>↗</span></Link>
      </section>

      <section className="section method-section">
        <div className="section-heading split">
          <div><span className="eyebrow">Metodo Vertex</span><h2>Un partner che parla <span className="gradient-text">business e tecnologia.</span></h2></div>
          <p>Partiamo dal risultato che vuoi ottenere, non dalla tecnologia che vogliamo venderti.</p>
        </div>
        <div className="flow-grid">
          {FLOW.map(([n, title, text]) => (
            <div className="flow-step" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></div>
          ))}
        </div>
      </section>

      <section className="section final-cta">
        <div className="final-cta-orb" />
        <span className="eyebrow">Hai un processo da migliorare o un progetto da far crescere?</span>
        <h2>Portaci il problema. <span className="gradient-text">Costruiamo il prossimo passo.</span></h2>
        <p>Software, IT, cybersecurity, web, AR o design: partiamo dalla tua situazione e definiamo una soluzione concreta.</p>
        <div className="hero-actions"><Link className="btn primary btn-large" to="/contact">Richiedi un confronto <span>↗</span></Link><Link className="btn secondary btn-large" to="/works">Vedi cosa abbiamo già fatto</Link></div>
      </section>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
}
