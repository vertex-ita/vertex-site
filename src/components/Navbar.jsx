import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import mark from "../assets/vertex-mark.png";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled || open ? "scrolled" : ""} ${open ? "menu-open" : ""}`}>
      <div className="nav-inner">
        <Link className="brand" to="/" onClick={close} aria-label="Vertex home">
          <span className="brand-mark"><img src={mark} alt="" /></span>
          <span className="brand-copy"><strong>VERTEX</strong><small>digital partner</small></span>
        </Link>

        <button
          className={`nav-burger ${open ? "open" : ""}`}
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          aria-controls="vertex-mobile-navigation"
          type="button"
        >
          <span />
          <span />
        </button>

        <nav id="vertex-mobile-navigation" className={`nav-links ${open ? "open" : ""}`} aria-label="Navigazione principale">
          <NavLink to="/" end onClick={close}>Home</NavLink>
          <NavLink to="/services" onClick={close}>Servizi</NavLink>
          <NavLink to="/works" onClick={close}>Progetti</NavLink>
          <NavLink to="/about" onClick={close}>Vertex</NavLink>
          <NavLink to="/contact" onClick={close} className="nav-cta">Parliamone <span>↗</span></NavLink>
        </nav>
      </div>

      <button className={`nav-scrim ${open ? "open" : ""}`} aria-label="Chiudi menu" tabIndex={open ? 0 : -1} onClick={close} type="button" />
    </header>
  );
}
