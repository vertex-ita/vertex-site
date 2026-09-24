import React from "react";
import { Link } from "react-router-dom";
import mark from "../assets/vertex-mark.png";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand"><div className="footer-logo"><span><img src={mark} alt="" /></span><strong>VERTEX</strong></div><p>Technology, security and design for companies that want one reliable digital partner.</p></div>
        <div className="footer-col"><span>Esplora</span><Link to="/services">Servizi</Link><Link to="/works">Progetti</Link><Link to="/about">Vertex</Link><Link to="/contact">Contatti</Link></div>
        <div className="footer-col"><span>Competenze</span><p>Custom software</p><p>IT & Cybersecurity</p><p>Web / AR / 3D</p><p>Graphic design</p></div>
        <div className="footer-col"><span>Contatti</span><a href="mailto:contatti.vertex@gmail.com">contatti.vertex@gmail.com</a><a href="tel:+393312700798">+39 331 270 0798</a><p>P.IVA 14275140961</p></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Vertex. All rights reserved.</span><span>Built to evolve.</span></div>
    </footer>
  );
}
