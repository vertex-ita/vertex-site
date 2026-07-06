import React from "react";
import "../styles/about.css";
import { Link } from "react-router-dom";

const STEPS = [
  {
    n: "01",
    t: "Analisi",
    d: "Capiamo obiettivi, target, stile, funzionalità e cosa deve ottenere il progetto.",
  },
  {
    n: "02",
    t: "Strategia",
    d: "Impostiamo struttura, contenuti, CTA e percorso utente per rendere tutto più efficace.",
  },
  {
    n: "03",
    t: "Design",
    d: "Realizziamo una UI moderna, tech, responsive e coerente con l’identità del brand.",
  },
  {
    n: "04",
    t: "Sviluppo",
    d: "Creiamo frontend, backend se serve, database, automazioni e pubblicazione online.",
  },
];

const POINTS = [
  ["Approccio pratico", "soluzioni concrete, non teoria inutile"],
  ["Design memorabile", "impatto visivo forte e professionale"],
  ["Tecnologia giusta", "React, Supabase, Node.js e strumenti moderni"],
];

export default function About() {
  return (
    <div className="page about-page">
      <div className="page-head enhanced-head">
        <span className="eyebrow">Chi è Vertex</span>
        <h1 className="page-title-gradient about-title">
          <span className="title-line white">Non realizziamo</span>
          <span className="title-line white">solo pagine.</span>
          <span className="title-line mixed">
            <span className="white">Creiamo </span>
            <span className="gradient-inline">percezione, fiducia e valore.</span>
          </span>
        </h1>
        <p className="muted">
          Vertex nasce per aiutare attività, aziende e professionisti ad avere una presenza digitale
          più moderna, ordinata e convincente. L’obiettivo è semplice: far capire subito al cliente
          che sei professionale.
        </p>
      </div>

      <div className="grid2 about-hero-grid">
        <div className="card about-main-card">
          <div className="card-title">Perché scegliere Vertex</div>

          <div className="muted about-p">
            Un sito o un gestionale non deve essere solo “bello”: deve comunicare bene,
            funzionare bene e rendere più semplice la vita a chi lo usa. Per questo ogni progetto
            viene pensato sia lato estetico sia lato pratico.
          </div>

          <div className="about-points">
            {POINTS.map(([title, desc]) => (
              <div className="point" key={title}>
                <b>{title}</b>
                <span className="muted">{desc}</span>
              </div>
            ))}
          </div>

          <div className="about-mini-stats">
            <div>
              <strong>Design</strong>
              <span>Premium UI</span>
            </div>
            <div>
              <strong>Dev</strong>
              <span>Codice pulito</span>
            </div>
            <div>
              <strong>Brand</strong>
              <span>Effetto wow</span>
            </div>
          </div>

          <div style={{ marginTop: 18 }}>
            <Link className="btn primary btn-glow" to="/contact">
              Raccontaci il progetto
            </Link>
          </div>
        </div>

        <div className="card process-card">
          <span className="eyebrow">Metodo</span>
          <div className="card-title">Dal primo messaggio alla pubblicazione</div>

          <div className="steps">
            {STEPS.map((s) => (
              <div className="step" key={s.n}>
                <div className="step-n">{s.n}</div>
                <div>
                  <div className="step-t">{s.t}</div>
                  <div className="muted">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section about-image-section about-consulting-section">
        <div className="about-section-image">
          <img
            src="/images/consulting-meeting.png"
            alt="Consulenti eleganti in riunione con clienti"
          />

          <div className="about-image-badge">
            <strong>Consulenza digitale</strong>
            <span>Strategia, immagine e obiettivi chiari prima dello sviluppo.</span>
          </div>
        </div>

        <div className="about-section-content">
          <span className="eyebrow">Strategia e consulenza</span>
          <h2>Prima capiamo cosa deve comunicare il tuo brand. Poi costruiamo il progetto.</h2>

          <p className="muted">
            Un sito efficace non nasce solo dalla grafica. Serve capire chi sei, cosa offri,
            a chi ti rivolgi e quale azione vuoi far compiere al cliente: contattarti,
            acquistare, prenotare, richiedere informazioni o scoprire i tuoi servizi.
          </p>

          <p className="muted">
            Per questo Vertex parte sempre da una visione chiara: struttura delle pagine,
            testi, sezioni, call to action, tono visivo e percorso utente. L’obiettivo è
            rendere il tuo brand più credibile e più facile da scegliere.
          </p>

          <div className="about-tech-tags">
            <span>Analisi brand</span>
            <span>UX strategy</span>
            <span>Contenuti</span>
            <span>CTA</span>
            <span>Conversione</span>
          </div>

          <Link className="btn primary" to="/contact">
            Richiedi una consulenza
          </Link>
        </div>
      </section>

      <section className="section about-image-section about-developer-section">
        <div className="about-section-content">
          <span className="eyebrow">Tecnologia e sviluppo</span>
          <h2>Dietro un design d’impatto deve esserci una struttura solida.</h2>

          <p className="muted">
            Vertex non lavora solo sulla parte estetica: ogni progetto viene costruito con
            attenzione a performance, codice pulito, sicurezza, database e scalabilità.
          </p>

          <p className="muted">
            Questo permette di realizzare siti moderni, dashboard interne, mini gestionali,
            aree riservate e automazioni realmente utili per semplificare il lavoro quotidiano.
          </p>

          <div className="about-tech-tags">
            <span>React</span>
            <span>Supabase</span>
            <span>Node.js</span>
            <span>Database</span>
            <span>Dashboard</span>
            <span>Automazioni</span>
          </div>

          <Link className="btn primary" to="/services">
            Scopri i servizi
          </Link>
        </div>

        <div className="about-section-image">
          <img
            src="/images/developer-code.png"
            alt="Sviluppatore al computer con codice sullo schermo"
          />

          <div className="about-image-badge">
            <strong>Code driven</strong>
            <span>Siti, gestionali e automazioni costruiti con metodo.</span>
          </div>
        </div>
      </section>

      <section className="section about-image-section about-consulting-section">
  <div className="about-section-image">
    <img
      src="/images/graphic-design.png"
      alt="Grafica professionale per locandine, menu, listini e materiali promozionali"
    />

    <div className="about-image-badge">
      <strong>Grafica e comunicazione</strong>
      <span>Locandine, menu, listini e materiali visivi pensati per valorizzare il tuo brand.</span>
    </div>
  </div>

  <div className="about-section-content">
    <span className="eyebrow">Grafica, immagine e comunicazione</span>

    <h2>
      Non realizziamo solo siti web. Diamo forma anche alla comunicazione visiva del tuo brand.
    </h2>

    <p className="muted">
      Ogni attività ha bisogno di un’immagine chiara, curata e riconoscibile. Per questo
      Vertex realizza anche lavori grafici professionali come locandine, menu, listini,
      grafiche promozionali, contenuti per social e materiali pensati per presentare al
      meglio i tuoi servizi.
    </p>

    <p className="muted">
      Che si tratti di pubblicizzare un evento, rinnovare il menu di un locale, creare un
      listino moderno o comunicare un’offerta in modo più efficace, costruiamo grafiche
      coerenti con il tuo stile e con l’immagine che vuoi trasmettere ai tuoi clienti.
    </p>

    <div className="about-tech-tags">
      <span>Locandine</span>
      <span>Menu</span>
      <span>Listini</span>
      <span>Grafiche social</span>
      <span>Materiale promozionale</span>
    </div>

    <Link className="btn primary" to="/contact">
      Richiedi una grafica
    </Link>
  </div>
</section>

      <div className="card about-bottom">
        <div>
          <span className="eyebrow">Pronto a migliorare la tua immagine?</span>
          <div className="card-title">Partiamo da una struttura più bella, chiara e convincente.</div>
          <div className="muted">
            Anche piccoli dettagli grafici possono cambiare completamente la percezione del tuo brand.
          </div>
        </div>

        <Link className="btn primary" to="/services">
          Vedi servizi
        </Link>
      </div>
    </div>
  );
}