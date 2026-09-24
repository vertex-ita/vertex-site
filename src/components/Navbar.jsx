import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import mark from "../assets/vertex-mark.png";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <Link className="brand" to="/" onClick={close} aria-label="Vertex home">
          <span className="brand-mark"><img src={mark} alt="" /></span>
          <span className="brand-copy"><strong>VERTEX</strong><small>digital partner</small></span>
        </Link>

        <button className={`nav-burger ${open ? "open" : ""}`} onClick={() => setOpen((value) => !value)} aria-label="Apri menu" aria-expanded={open} type="button"><span /><span /></button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/" end onClick={close}>Home</NavLink>
          <NavLink to="/services" onClick={close}>Servizi</NavLink>
          <NavLink to="/works" onClick={close}>Progetti</NavLink>
          <NavLink to="/about" onClick={close}>Vertex</NavLink>
          <NavLink to="/contact" onClick={close} className="nav-cta">Parliamone <span>↗</span></NavLink>
        </nav>
      </div>
    </header>
  );
}
