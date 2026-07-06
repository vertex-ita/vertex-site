import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="muted">© {new Date().getFullYear()} Vertex — Web • Gestionali • Design</div>
        <div className="muted">P.IVA 14275140961 • info@vertex.it • +39 345 705 7226</div>
      </div>
    </footer>
  );
}
