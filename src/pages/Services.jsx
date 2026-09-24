import React from "react";
import { Link } from "react-router-dom";
import "../styles/services.css";

const SERVICES = [
  {
    n: "01", title: "Software & Gestionali", label: "CUSTOM DEVELOPMENT",
    intro: "Trasformiamo fogli, chat e procedure manuali in strumenti costruiti sul modo in cui lavora davvero la tua azienda.",
    items: ["Gestionali e web app su misura", "Dashboard, KPI e report", "Ruoli, permessi e aree riservate", "Commesse, ordini, timesheet e workflow", "PDF, export, notifiche e integrazioni", "Database e architetture evolvibili"],
    ideal: "Per aziende che hanno superato Excel o software generici e vogliono controllo senza adattare il lavoro allo strumento.",
    tone: "cyan",
  },
  {
    n: "02", title: "IT & Cybersecurity", label: "SECURE OPERATIONS",
    intro: "Un supporto tecnico che guarda insieme operatività, identità, continuità e rischio, senza complicare ciò che può essere semplice.",
    items: ["Microsoft 365 e ambienti cloud", "Identity, MFA e gestione accessi", "Hardening endpoint e configurazioni", "Backup e continuità operativa", "Analisi criticità e remediation", "Security by design sui nuovi progetti"],
    ideal: "Per realtà che vogliono un referente IT affidabile e una sicurezza proporzionata ai rischi reali.",
    tone: "blue",
  },
  {
    n: "03", title: "Web & Digital Experience", label: "WEB PLATFORMS",
    intro: "Siti corporate, cataloghi e piattaforme che spiegano bene cosa fai, funzionano bene e possono crescere con nuovi servizi.",
    items: ["Siti corporate e landing", "Cataloghi prodotti e schede tecniche", "SEO tecnico e performance", "Analytics e tracciamento", "Form, CRM e integrazioni", "UI responsive e accessibile"],
    ideal: "Per aziende che non vogliono un sito-vetrina fermo, ma una base digitale utile a commerciale e clienti.",
    tone: "violet",
  },
  {
    n: "04", title: "3D & Realtà Aumentata", label: "IMMERSIVE TECH",
    intro: "Portiamo prodotti e macchinari fuori dallo schermo con esperienze 3D interattive e visualizzazione AR da smartphone.",
    items: ["Viewer GLB / 3D", "AR con fotocamera", "Posizionamento a scala reale", "Interazione e rotazione prodotto", "Integrazione nelle schede web", "Ottimizzazione modelli per mobile"],
    ideal: "Per industria, interior, prodotto e commerciale tecnico quando dimensioni e ingombri contano quanto la scheda tecnica.",
    tone: "pink",
  },
  {
    n: "05", title: "Automazioni & Data", label: "SMART WORKFLOW",
    intro: "Riduciamo operazioni ripetitive collegando dati, notifiche, documenti e sistemi in flussi più affidabili.",
    items: ["Automazioni operative", "Sincronizzazione dati", "Generazione documenti", "Controlli e validazioni", "Import ed export strutturati", "Integrazioni API"],
    ideal: "Per team che perdono tempo in passaggi copiati a mano e controlli che una macchina può eseguire meglio.",
    tone: "green",
  },
  {
    n: "06", title: "Grafica, Brand & Rendering", label: "HUMAN-LED DESIGN",
    intro: "Una produzione visuale professionale per aziende, eventi e brand che non vogliono sembrare intercambiabili.",
    items: ["Locandine e campagne evento", "Brochure, cataloghi e presentazioni", "Menu, listini e materiale stampa", "Brand identity e sistemi visuali", "Rendering e mockup", "Social kit e advertising"],
    ideal: "Composizione e finitura sono curate da grafici specializzati: i materiali finali non vengono delegati a una generazione automatica.",
    tone: "magenta",
  },
];

export default function Services() {
  return (
    <div className="page services-page">
      <header className="services-head">
        <span className="eyebrow">Capabilities / Vertex</span>
        <h1>Dalla rete alla brand identity.<br/><span className="gradient-text">Un partner, competenze diverse.</span></h1>
        <p>Quando un'azienda cresce, IT, software, web e comunicazione iniziano a toccarsi continuamente. Vertex nasce proprio per evitare che ogni pezzo viva isolato dagli altri.</p>
      </header>

      <div className="service-index">
        {SERVICES.map((service) => <a href={`#service-${service.n}`} key={service.n}><span>{service.n}</span>{service.title}</a>)}
      </div>

      <section className="services-list">
        {SERVICES.map((service) => (
          <article className={`service-row ${service.tone}`} id={`service-${service.n}`} key={service.n}>
            <div className="service-row-index"><span>{service.n}</span><small>{service.label}</small></div>
            <div className="service-row-main"><h2>{service.title}</h2><p className="service-intro">{service.intro}</p><div className="service-ideal"><span>Quando serve</span><p>{service.ideal}</p></div></div>
            <div className="service-row-list">{service.items.map((item) => <div key={item}><i>+</i>{item}</div>)}</div>
          </article>
        ))}
      </section>

      <section className="section services-principles">
        <div className="section-heading"><span className="eyebrow">Come lavoriamo</span><h2>Tre principi che valgono <span className="gradient-text">in ogni progetto.</span></h2></div>
        <div className="principles-grid">
          <div><span>01</span><h3>Su misura, ma mantenibile.</h3><p>Niente complessità fine a se stessa. Costruiamo ciò che serve e lasciamo una base leggibile per evolvere.</p></div>
          <div><span>02</span><h3>Sicurezza by design.</h3><p>Accessi, dati, ruoli e continuità non vengono aggiunti alla fine: fanno parte delle decisioni iniziali.</p></div>
          <div><span>03</span><h3>Forma e funzione insieme.</h3><p>Una soluzione che funziona ma è frustrante da usare è incompleta. UX e qualità visuale sono parte del risultato.</p></div>
        </div>
      </section>

      <section className="section services-cta">
        <div><span className="eyebrow">Non sai ancora quale servizio ti serve?</span><h2>Raccontaci dove perdi tempo, dove hai rischio o dove vuoi crescere.</h2><p>Partiamo dal problema e scegliamo insieme la strada tecnica giusta.</p></div>
        <Link className="btn primary btn-large" to="/contact">Fissa un primo confronto <span>↗</span></Link>
      </section>
    </div>
  );
}
