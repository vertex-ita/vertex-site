import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/vertex-logo.png";
import "../styles/home.css";

const SERVICES = [
  {
    number: "01",
    title: "Siti Web",
    desc: "Landing page, siti aziendali ed eventi con design moderno, veloce e orientato alla conversione.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
  {
    number: "02",
    title: "Gestionale su misura",
    desc: "Dashboard, task, calendari, commesse, login e strumenti utili per organizzare meglio il lavoro.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    number: "03",
    title: "Brand & Visual",
    desc: "Locandine, contenuti social, identità visiva e materiali digitali coordinati con il tuo brand.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
  },
];

const STATS = [
  {
    value: 100,
    suffix: "%",
    label: "layout responsive",
  },
  {
    value: 4,
    suffix: "+",
    label: "aree curate: UI, UX, testi e performance",
  },
  {
    value: 3,
    suffix: "",
    label: "step semplici: idea, design e pubblicazione",
  },
  {
    value: 1,
    suffix: "+",
    label: "progetti su misura per il tuo brand",
  },
];

const VISUAL_BLOCKS = [
  {
    title: "Immagine più forte",
    text: "Creiamo locandine, grafiche, listini e materiali digitali coordinati con il tuo brand. Fai ora il tuo salto di qualità!",
    image:
      "/images/grafica.png",
  },
  {
    title: "Esperienza più chiara",
    text: "Ogni sezione guida l’utente verso l’azione giusta.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
  },
];

function useCountUp(end, duration = 1400) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted.current) return;

        hasStarted.current = true;
        const startTime = performance.now();

        const animate = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);

          setCount(Math.round(end * easedProgress));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration]);

  return { count, elementRef };
}

function StatCard({ value, suffix, label }) {
  const { count, elementRef } = useCountUp(value);

  return (
    <div className="stat-card" ref={elementRef}>
      <div className="stat-number">
        {count}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-left reveal-up">
          <span className="eyebrow">Digital studio per aziende moderne</span>

          <h1>
            Creiamo esperienze digitali{" "}
            <span className="grad">che attirano clienti</span>.
          </h1>

          <p className="hero-text muted">
            Vertex realizza siti web, mini gestionali e grafiche digitali con un
            look tech, professionale e orientato al risultato. Ogni progetto è
            pensato per comunicare valore, fiducia e portare il cliente a
            compiere un’azione.
          </p>

          <div className="hero-actions">
            <Link className="btn primary" to="/contact">
              Richiedi una consulenza
            </Link>
            <Link className="btn ghost" to="/works">
              Guarda i progetti
            </Link>
          </div>

          <div className="hero-metrics">
            <div className="metric">
              <b>100%</b>
              <span className="muted">responsive</span>
            </div>
            <div className="metric">
              <b>UI</b>
              <span className="muted">premium</span>
            </div>
            <div className="metric">
              <b>UX</b>
              <span className="muted">chiara</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
  <div className="hero-visual card">
    <div className="hero-visual-top">
      <span />
      <span />
      <span />
    </div>

    <div className="hero-visual-content">
      <div className="hero-logo-box">
        <img src={logo} alt="Vertex logo" />
      </div>

      <div className="hero-info-row">
        <div className="hero-info-card">
          <strong>Tech Look</strong>
          <small>Design moderno e memorabile</small>
        </div>

        <div className="hero-info-card">
          <strong>Conversione</strong>
          <small>Testi, CTA e struttura studiati</small>
        </div>
      </div>
    </div>
  </div>
</div>

      </section>

      <section className="section trust-strip reveal-up delay-2">
        <div className="trust-item">✦ Design premium</div>
        <div className="trust-item">✦ Mobile perfetto</div>
        <div className="trust-item">✦ Codice pulito</div>
        <div className="trust-item">✦ Performance alte</div>
      </section>


      <section className="section home-showcase">
  <div className="showcase-top reveal-up">
    <div className="showcase-copy">
      <span className="eyebrow">Più impatto, più chiarezza</span>
      <h2>Un'esperienza digitale che colpisce</h2>
      <p className="muted">
        Un design più curato e una struttura più chiara rendono il sito più
        memorabile, più professionale e più efficace nel portare nuovi clienti.
        Analizziamo statistiche e risultati per capire cosa funziona meglio e cosa migliorare.
      </p>
    </div>

    <div className="showcase-stats">
      {STATS.map((stat) => (
        <StatCard
          key={stat.label}
          value={stat.value}
          suffix={stat.suffix}
          label={stat.label}
        />
      ))}
    </div>
  </div>

  <div className="showcase-visuals reveal-up delay-1">
    <div className="showcase-main-card">
      <img
        src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=80"
        alt="Design digitale moderno"
      />
      <div className="showcase-overlay">
        <span>Vertex Method</span>
        <h3>Strategia, estetica e funzionalità nello stesso progetto.</h3>
        <p>
          Una sezione più dinamica valorizza meglio il brand e rende
          la navigazione più coinvolgente.
        </p>
      </div>
    </div>

    <div className="showcase-side">
      {VISUAL_BLOCKS.map((item) => (
        <div className="showcase-side-card" key={item.title}>
          <img src={item.image} alt={item.title} />
          <div className="showcase-overlay small">
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="section section-head reveal-up">
        <span className="eyebrow">Cosa possiamo creare per te</span>
        <h2>
          Soluzioni digitali belle da vedere, facili da usare e pronte a vendere.
        </h2>
        <p className="muted">
          Ogni progetto viene costruito su misura: niente pagine anonime, niente
          template copiati. L’obiettivo è far sembrare il tuo brand più
          professionale già dal primo click.
        </p>
      </section>

      <section className="section">
        <div className="grid3">
          {SERVICES.map((s) => (
            <div className="card service-preview-card reveal-up" key={s.title}>
              <div className="service-preview-image">
                <img src={s.image} alt={s.title} />
              </div>

              <div className="service-preview-number">{s.number}</div>
              <div className="card-title">{s.title}</div>
              <div className="muted">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section home-cta card reveal-up">
        <div>
          <span className="eyebrow">Hai un’idea?</span>
          <h2>Trasformiamola in qualcosa di bello e professionale.</h2>
          <p className="muted">
            Dimmi cosa vuoi realizzare e ti aiuto a costruire una presenza
            digitale più forte e più credibile.
          </p>
        </div>

        <Link className="btn primary" to="/contact">
          Inizia il progetto
        </Link>
      </section>
    </div>
  );
}