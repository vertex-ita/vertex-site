import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

const TYPES = ["Software / Gestionale", "IT & Cybersecurity", "Sito / Piattaforma web", "AR / 3D", "Grafica / Brand / Rendering", "Automazioni", "Altro"];

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", type: "", message: "" });
  const [state, setState] = useState({ loading: false, ok: null, error: "" });

  const update = (field) => (event) => setForm((current) => ({ ...current, [field]: event.target.value }));

  async function onSubmit(event) {
    event.preventDefault();
    setState({ loading: true, ok: null, error: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) throw new Error("Configurazione EmailJS mancante nel file .env");

      await emailjs.send(serviceId, templateId, {
        from_name: form.name,
        company: form.company,
        from_email: form.email,
        phone: form.phone,
        project_type: form.type,
        message: form.message,
        to_email: "vertex-info@gmail.com",
        website: "Vertex",
      }, { publicKey });

      setState({ loading: false, ok: true, error: "" });
      setForm({ name: "", company: "", email: "", phone: "", type: "", message: "" });
    } catch (error) {
      setState({ loading: false, ok: false, error: error?.text || error?.message || "Errore durante l'invio del messaggio." });
    }
  }

  return (
    <div className="page contact-page">
      <header className="contact-head">
        <span className="eyebrow">Start a project</span>
        <h1>Raccontaci dove vuoi arrivare.<br/><span className="gradient-text">Al resto pensiamo insieme.</span></h1>
        <p>Che tu abbia già un brief preciso o solo un problema da risolvere, ci basta capire il contesto per iniziare a ragionare sulla strada giusta.</p>
      </header>

      <div className="contact-layout">
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-grid two">
            <label><span>Nome e cognome *</span><input value={form.name} onChange={update("name")} placeholder="Come ti chiami?" required /></label>
            <label><span>Azienda</span><input value={form.company} onChange={update("company")} placeholder="Nome azienda" /></label>
          </div>
          <div className="form-grid two">
            <label><span>Email *</span><input type="email" value={form.email} onChange={update("email")} placeholder="nome@azienda.it" required /></label>
            <label><span>Telefono</span><input value={form.phone} onChange={update("phone")} placeholder="+39 ..." /></label>
          </div>
          <label><span>Di cosa vuoi parlare?</span><select value={form.type} onChange={update("type")}><option value="">Seleziona un'area</option>{TYPES.map((type) => <option value={type} key={type}>{type}</option>)}</select></label>
          <label><span>Raccontaci il progetto *</span><textarea rows="7" value={form.message} onChange={update("message")} placeholder="Cosa vuoi migliorare? Come lavorate oggi? C'è una scadenza o una criticità particolare?" required /></label>
          <div className="form-submit-row">
            <button type="submit" className="btn primary btn-large" disabled={state.loading}>{state.loading ? "Invio in corso..." : "Invia la richiesta →"}</button>
            <small>Ti rispondiamo con un confronto concreto, non con una risposta automatica commerciale.</small>
          </div>
          {state.ok === true && <div className="form-status ok">Richiesta inviata correttamente. Ti ricontatteremo appena possibile.</div>}
          {state.ok === false && <div className="form-status err">Invio non riuscito: {state.error}</div>}
        </form>

        <aside className="contact-sidebar">
          <div className="contact-side-card primary-card">
            <span className="eyebrow">Vertex / Contact</span>
            <h2>Un solo contatto, anche quando il progetto tocca più aree.</h2>
            <p>Se software, IT, web e grafica si incrociano, non devi coordinare quattro fornitori diversi per forza.</p>
          </div>
          <div className="contact-side-card contact-details">
            <div><small>Email</small><a href="mailto:contatti.vertex@gmail.com">contatti.vertex@gmail.com</a></div>
            <div><small>Telefono</small><a href="tel:+393312700798">+39 331 270 0798</a></div>
            <div><small>Ambiti</small><span>Italia · supporto anche da remoto</span></div>
          </div>
          <div className="contact-side-card side-checklist"><span>Prima call</span><div>✓ contesto e obiettivi</div><div>✓ criticità attuali</div><div>✓ priorità e vincoli</div><div>✓ ipotesi di percorso</div></div>
        </aside>
      </div>
    </div>
  );
}
