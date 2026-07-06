import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [state, setState] = useState({
    loading: false,
    ok: null,
    error: "",
  });

  async function onSubmit(e) {
    e.preventDefault();

    setState({
      loading: true,
      ok: null,
      error: "",
    });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Configurazione EmailJS mancante nel file .env");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: "vertex-info@gmail.com",
          website: "Vertex",
        },
        {
          publicKey,
        }
      );

      setState({
        loading: false,
        ok: true,
        error: "",
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setState({
        loading: false,
        ok: false,
        error:
          err?.text ||
          err?.message ||
          "Errore durante l'invio del messaggio.",
      });
    }
  }

  return (
    <div className="page contact-page">
      <div className="page-head enhanced-head">
        <span className="eyebrow">Contatti</span>

        <h1 className="page-title-gradient">
          Hai un progetto? Facciamolo sembrare{" "}
          <span>professionale da subito</span>
        </h1>

        <p className="muted">
          Scrivici cosa vuoi realizzare: sito, gestionale, grafica o automazione.
          Più sei chiaro nell’idea, più sarà semplice costruire una proposta efficace.
        </p>
      </div>

      <div className="contact-grid">
        <form className="card form contact-form-card" onSubmit={onSubmit}>
          <div className="form-head">
            <div className="card-title">Richiedi informazioni</div>

            <p className="muted">
              Raccontaci obiettivi, tipo di attività e cosa vorresti ottenere.
            </p>
          </div>

          <label>
            Nome
            <input
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              placeholder="Il tuo nome"
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              placeholder="nome@email.it"
              required
            />
          </label>

          <label>
            Messaggio
            <textarea
              rows="6"
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              placeholder="Esempio: vorrei un sito per la mia azienda, con pagina servizi, portfolio e contatti..."
              required
            />
          </label>

          <button
            type="submit"
            className="btn primary btn-glow"
            disabled={state.loading}
          >
            {state.loading ? "Invio in corso..." : "Invia richiesta"}
          </button>

          {state.ok === true && (
            <div className="ok">
              Messaggio inviato correttamente ✅
            </div>
          )}

          {state.ok === false && (
            <div className="err">
              Errore: {state.error}
            </div>
          )}
        </form>

        <aside className="card side contact-side-card">
          <span className="eyebrow">Come posso aiutarti</span>

          <div className="card-title">Soluzioni rapide e concrete</div>

          <div className="contact-feature-list">
            <div>
              <strong>Sito web</strong>
              <span>Per presentarti meglio e attirare nuovi clienti.</span>
            </div>

            <div>
              <strong>Gestionale</strong>
              <span>Per organizzare lavoro, clienti, commesse e dati.</span>
            </div>

            <div>
              <strong>Grafica</strong>
              <span>Per rendere il brand più curato e riconoscibile.</span>
            </div>
          </div>

          <div className="sep" />

          <div className="contact-box">
            <div className="muted">Email</div>
            <b>contatti.vertex@gmail.com</b>
          </div>

          <div className="contact-box">
            <div className="muted">Telefono</div>
            <b>+39 3312700798</b>
          </div>
        </aside>
      </div>
    </div>
  );
}