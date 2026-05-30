import ServiceCard from "./ServiceCard";
import "./Servicios.css"; 

function Servicios({ data }) {
  if (!data) return null;
  return (
    <section id="servicios" className="servicios">
      <h2 className="servicios__titulo">Nuestros servicios</h2>
      <div className="servicios__grid">
        {data.map((servicio) => (
          <ServiceCard
            key={servicio.id}
            titulo={servicio.titulo}
            descripcion={servicio.descripcion}
            imagen={servicio.imagen}
            alt={servicio.alt}
          />
        ))}
      </div>
    </section>
  );
}

export default Servicios;