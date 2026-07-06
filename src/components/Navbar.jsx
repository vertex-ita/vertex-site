import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/vertex-logo.png";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const getLinkClass = ({ isActive }) => (isActive ? "active" : "");

  const getCtaClass = ({ isActive }) => (isActive ? "cta active" : "cta");

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <img className="brand-logo" src={logo} alt="Vertex" />
          <span className="brand-name">VERTEX</span>
        </Link>

        <button
          className={`nav-burger ${open ? "open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/" end onClick={() => setOpen(false)} className={getLinkClass}>
            Home
          </NavLink>

          <NavLink to="/services" onClick={() => setOpen(false)} className={getLinkClass}>
            Servizi
          </NavLink>

          <NavLink to="/works" onClick={() => setOpen(false)} className={getLinkClass}>
            Progetti
          </NavLink>

          <NavLink to="/about" onClick={() => setOpen(false)} className={getLinkClass}>
            Chi siamo
          </NavLink>

          <NavLink to="/contact" onClick={() => setOpen(false)} className={getCtaClass}>
            Contatti
          </NavLink>
        </nav>
      </div>
    </header>
  );
}