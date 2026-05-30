import { useState, useEffect, useRef } from "react";
import "./Testimonios.css";

const TESTIMONIOS = [
  {
    id: 1,
    nombre: "Valentina Morales",
    cargo: "Gerente General, Constructora Morales",
    opinion:
      "Gracias a su acompañamiento en gestión de negocios logramos ordenar todos nuestros procesos internos en menos de tres meses. El equipo es profesional, cercano y realmente entiende las necesidades de una empresa familiar que quiere crecer.",
  },
  {
    id: 2,
    nombre: "Rodrigo Espinoza",
    cargo: "Director, Exportadora del Sur",
    opinion:
      "La consultoría en eficiencia y sostenibilidad transformó nuestra forma de operar. Redujimos costos operativos en un 20% y hoy somos una empresa mucho más consciente del impacto que generamos. Sin duda una inversión que vale la pena.",
  },
  {
    id: 3,
    nombre: "Camila Fuentes",
    cargo: "Socia fundadora, Fuentes & Asociados",
    opinion:
      "El servicio de vinculación empresarial nos abrió puertas que no hubiéramos encontrado solos. En pocas semanas ya teníamos reuniones con actores clave del sector. La red de contactos que manejan es impresionante.",
  },
  {
    id: 4,
    nombre: "Sebastián Araya",
    cargo: "CEO, TecnoAgro SpA",
    opinion:
      "Llevábamos años sin una estrategia clara. Desde que trabajamos con ellos tenemos un plan de negocios sólido, metas reales y un equipo alineado. El cambio fue visible desde el primer trimestre.",
  },
  {
    id: 5,
    nombre: "Isidora Castillo",
    cargo: "Directora Comercial, Moda Circular",
    opinion:
      "Lo que más valoro es que no te dan recetas genéricas. Cada solución fue diseñada para nuestra realidad. Hoy nuestra empresa es más eficiente, más sostenible y mucho mejor posicionada en el mercado.",
  },
];

function Testimonios() {
  const [activo, setActivo] = useState(0);
  const [animando, setAnimando] = useState(false);
  const intervaloRef = useRef(null);

  const irA = (index) => {
    if (animando || index === activo) return;
    setAnimando(true);
    setTimeout(() => {
      setActivo(index);
      setAnimando(false);
    }, 300);
  };

  const anterior = () => irA((activo - 1 + TESTIMONIOS.length) % TESTIMONIOS.length);
  const siguiente = () => irA((activo + 1) % TESTIMONIOS.length);

  const reiniciarIntervalo = () => {
    clearInterval(intervaloRef.current);
    intervaloRef.current = setInterval(siguiente, 5000);
  };

  useEffect(() => {
    intervaloRef.current = setInterval(() => {
      setActivo((prev) => (prev + 1) % TESTIMONIOS.length);
    }, 5000);
    return () => clearInterval(intervaloRef.current);
  }, []);

  const t = TESTIMONIOS[activo];

  return (
    <section className="testimonios">
      <div className="testimonios__inner">

        <div className="testimonios__encabezado">
          <span className="testimonios__label">Clientes</span>
          <h2 className="testimonios__titulo">Lo que dicen de nosotros</h2>
        </div>

        <div className={`testimonios__tarjeta ${animando ? "testimonios__tarjeta--saliendo" : "testimonios__tarjeta--entrando"}`}>
          <span className="testimonios__comilla">"</span>
          <p className="testimonios__opinion">{t.opinion}</p>
          <div className="testimonios__autor">
            <strong className="testimonios__nombre">{t.nombre}</strong>
            <span className="testimonios__cargo">{t.cargo}</span>
          </div>
        </div>

        <div className="testimonios__controles">
          <button
            className="testimonios__flecha"
            onClick={() => { anterior(); reiniciarIntervalo(); }}
            aria-label="Anterior"
          >
            ←
          </button>

          <div className="testimonios__puntos">
            {TESTIMONIOS.map((_, i) => (
              <button
                key={i}
                className={`testimonios__punto ${i === activo ? "testimonios__punto--activo" : ""}`}
                onClick={() => { irA(i); reiniciarIntervalo(); }}
                aria-label={`Ir al testimonio ${i + 1}`}
              />
            ))}
          </div>

          <button
            className="testimonios__flecha"
            onClick={() => { siguiente(); reiniciarIntervalo(); }}
            aria-label="Siguiente"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}

export default Testimonios;