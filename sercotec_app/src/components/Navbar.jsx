import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-brand" onClick={(e) => handleScroll(e, "inicio")}>
          <span className="brand-ser">Ser</span>
          <span className="brand-co">co</span>
          <span className="brand-tec">tec</span>
        </a>

        <button
          className={`navbar-hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#nosotros" onClick={(e) => handleScroll(e, "nosotros")}>
              Nosotros
            </a>
          </li>
          <li>
            <a href="#servicios" onClick={(e) => handleScroll(e, "servicios")}>
              Servicios
            </a>
          </li>
          <li>
            <a href="#preguntas" onClick={(e) => handleScroll(e, "preguntas")}>
              Preguntas frecuentes
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
