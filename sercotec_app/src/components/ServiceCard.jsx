import "./ServiceCard.css";

function ServiceCard({ titulo, descripcion, imagen, alt }) {
  const handleContacto = (e) => {
    e.preventDefault();
    const destino = document.getElementById("contacto");
    if (destino) {
      destino.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <article className="service-card">
      <div className="service-card__imagen-wrapper">
        <img
          src={imagen}
          alt={alt}
          className="service-card__imagen"
        />
      </div>

      <div className="service-card__body">
        <h3 className="service-card__titulo">{titulo}</h3>
        <p className="service-card__descripcion">{descripcion}</p>
        <a href="#contacto" className="service-card__btn" onClick={handleContacto}>
          Contáctanos
        </a>
      </div>
    </article>
  );
}

export default ServiceCard;