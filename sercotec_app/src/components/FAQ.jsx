import { useState } from "react";
import "./FAQ.css";

function FAQ({ data }) {
  const [abierto, setAbierto] = useState(null);

  if (!data || data.length === 0) return null;

  const toggle = (id) => setAbierto((prev) => (prev === id ? null : id));

  return (
    <section id="preguntas" className="faq">
      <div className="faq__inner">
        <div className="faq__encabezado">
          <span className="faq__label">FAQ</span>
          <h2 className="faq__titulo">Preguntas frecuentes</h2>
          <p className="faq__subtitulo">
            Todo lo que necesitas saber antes de dar el primer paso.
          </p>
        </div>

        <ul className="faq__lista">
          {data.map((item) => {
            const estaAbierto = abierto === item.id;
            return (
              <li key={item.id} className={`faq__item ${estaAbierto ? "faq__item--abierto" : ""}`}>
                <button
                  className="faq__pregunta"
                  onClick={() => toggle(item.id)}
                  aria-expanded={estaAbierto}
                >
                  <span>{item.pregunta}</span>
                  <span className="faq__icono">{estaAbierto ? "−" : "+"}</span>
                </button>
                <div className="faq__respuesta-wrapper" style={{ maxHeight: estaAbierto ? "400px" : "0" }}>
                  <p className="faq__respuesta">{item.respuesta}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="faq__contacto-pie">
          <p>¿No encontraste lo que buscabas?</p>
          <div className="faq__contacto-links">
            <a href="mailto:centro.santiago@centrossercotec.cl" className="faq__link">
              centro.santiago@centrossercotec.cl
            </a>
            <span className="faq__separador">·</span>
            
            <a href="https://www.facebook.com/centrodnsantiago"
              target="_blank"
              rel="noopener noreferrer"
              className="faq__link"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;