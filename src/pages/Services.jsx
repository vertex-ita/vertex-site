import React from "react";
import "../styles/services.css";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    number: "01",
    title: "Siti Web",
    subtitle: "Landing, corporate, eventi e brand digitali",
    bullets: [
      "Design premium e mobile-first",
      "Struttura pensata per convertire",
      "Sezioni chiare: servizi, valore, portfolio, contatti",
      "Integrazioni con WhatsApp, mappe, form e analytics",
    ],
    highlight:
      "Perfetto per aziende, locali, professionisti e attività che vogliono presentarsi meglio online.",
  },
  {
    number: "02",
    title: "Mini Gestionali",
    subtitle: "Software semplici per lavorare meglio",
    bullets: [
      "Login, ruoli admin/staff e aree riservate",
      "Dashboard KPI, filtri, calendari e task",
      "Gestione dati, export CSV/Excel e report",
      "Database Supabase, API Node.js o soluzioni frontend-only",
    ],
    highlight:
      "Ideale per chi perde tempo con Excel, WhatsApp o fogli sparsi.",
  },
  {
    number: "03",
    title: "Grafica & Design",
    subtitle: "Identità visiva, social e comunicazione",
    bullets: [
      "Brand identity, palette, font e stile coordinato",
      "Locandine eventi per stampa e social",
      "Template Instagram e contenuti promozionali",
      "Grafiche ADV, menù, card e materiale digitale",
    ],
    highlight:
      "Utile per rendere il tuo brand più riconoscibile e professionale.",
  },
];

const GRAPHIC_SERVICES = [
  {
    title: "Locandine eventi",
    text: "Grafiche d’impatto per serate, eventi, inaugurazioni e promozioni.",
    tag: "Eventi",
    image: "/images/services/locandine.png",
  },
  {
    title: "Menù e listini",
    text: "Menù moderni, chiari e coerenti con l’immagine del locale o dell’attività.",
    tag: "Ristorazione",
    image: "/images/services/menu.png",
  },
  {
    title: "Grafiche social",
    text: "Post, stories, copertine e contenuti visivi pensati per comunicare meglio online.",
    tag: "Social",
    image: "/images/services/social.png",
  },
  {
    title: "Materiale promozionale",
    text: "Flyer, card, voucher e grafiche coordinate per rafforzare il tuo brand.",
    tag: "Brand",
    image: "/images/services/promo.png",
  },
  {
    title: "Loghi e identità visiva",
    text: "Creazione di loghi, palette colori e materiali coordinati per un’immagine più professionale.",
    tag: "Brand",
    image: "/images/services/logo.png",
  },
  {
    title: "Foto per sito web",
    text: "Immagini di alta qualità per presentare il tuo brand in modo professionale.",
    tag: "Web",
    image: "/images/services/foto-web.png",
  },
];

export default function Services() {
  return (
    <div className="page services-page">
      <div className="page-head enhanced-head">
        <span className="eyebrow">Servizi Vertex</span>

        <h1 className="page-title-gradient services-title">
          <span className="title-line white">Soluzioni digitali</span>
          <span className="title-line white">che rendono il tuo</span>
          <span className="title-line gradient">brand più grande</span>
        </h1>

        <p className="muted">
          Creiamo siti, gestionali e grafiche con un’impostazione moderna, tech e commerciale:
          ogni progetto deve essere bello, chiaro e utile al cliente finale.
        </p>
      </div>

      <div className="services-grid">
        {SERVICES.map((s) => (
          <article className="card service-card" key={s.title}>
            <div className="service-number">{s.number}</div>

            <div className="service-top">
              <div>
                <div className="card-title">{s.title}</div>
                <div className="muted">{s.subtitle}</div>
              </div>

              <div className="service-badge">Vertex</div>
            </div>

            <ul className="service-list">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="service-highlight">{s.highlight}</div>

            <div className="service-actions">
              <Link className="btn primary" to="/contact">
                Richiedi preventivo
              </Link>

              <Link className="btn ghost" to="/works">
                Vedi progetti
              </Link>
            </div>
          </article>
        ))}
      </div>

      <section className="card services-graphic-intro">
        <div className="services-graphic-content">
          <span className="eyebrow">Grafica e comunicazione visiva</span>

          <h2>
            Non solo siti e applicazioni. Creiamo anche grafiche che fanno notare il tuo brand.
          </h2>

          <p className="muted">
            Realizziamo materiali grafici per aziende, locali, eventi e attività commerciali:
            locandine, menù, flyer, grafiche social, listini, loghi e contenuti coordinati
            per dare un’immagine più professionale e riconoscibile.
          </p>
        </div>

        <div className="services-graphic-highlight">
          <span>Design</span>
          <strong>moderno</strong>
        </div>
      </section>

      <section className="graphic-services-grid">
        {GRAPHIC_SERVICES.map((item) => (
          <article className="card graphic-service-card" key={item.title}>
            <div className="graphic-service-media">
              <img src={item.image} alt={item.title} />
              <div className="graphic-service-media-overlay" />
              <span className="graphic-service-badge">{item.tag}</span>
            </div>

            <div className="graphic-service-body">
              <h3>{item.title}</h3>
              <p className="muted">{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      <div className="card service-cta">
        <div>
          <span className="eyebrow">Primo step</span>

          <div className="card-title">
            Vuoi capire costo, tempi e soluzione migliore?
          </div>

          <div className="muted">
            Scrivimi cosa vuoi ottenere: ti aiuto a scegliere la strada più efficace,
            senza complicare il progetto inutilmente.
          </div>
        </div>

        <Link className="btn primary btn-glow" to="/contact">
          Parliamo del progetto
        </Link>
      </div>
    </div>
  );
}