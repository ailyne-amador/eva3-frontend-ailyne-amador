import { useState } from "react";
import "./Contacto.css";

const SERVICIOS = [
  "Gestión de negocios",
  "Eficiencia y sostenibilidad",
  "Vinculación empresarial",
];

function Contacto() {
  const [campos, setCampos] = useState({
    nombre: "",
    email: "",
    servicio: "",
    mensaje: "",
  });

  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const validar = () => {
    const e = {};
    if (!campos.nombre.trim())
      e.nombre = "El nombre es obligatorio.";
    if (!campos.email.trim())
      e.email = "El email es obligatorio.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campos.email))
      e.email = "Ingresa un email válido.";
    if (!campos.servicio)
      e.servicio = "Selecciona un servicio.";
    if (!campos.mensaje.trim())
      e.mensaje = "El mensaje es obligatorio.";
    else if (campos.mensaje.trim().length < 10)
      e.mensaje = "El mensaje debe tener al menos 10 caracteres.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampos((prev) => ({ ...prev, [name]: value }));
    if (errores[name]) {
      setErrores((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevosErrores = validar();
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }
    setEnviado(true);
  };

  const handleReset = () => {
    setCampos({ nombre: "", email: "", servicio: "", mensaje: "" });
    setErrores({});
    setEnviado(false);
  };

  return (
    <section id="contacto" className="contacto">
      <div className="contacto__inner">
        <div className="contacto__encabezado">
          <span className="contacto__label">Contacto</span>
          <h2 className="contacto__titulo">Hablemos</h2>
          <p className="contacto__subtitulo">
            Cuéntanos sobre tu proyecto y te responderemos a la brevedad.
          </p>
        </div>

        {enviado ? (
          <div className="contacto__exito">
            <div className="contacto__exito-icono">✓</div>
            <p className="contacto__exito-texto">
              ¡Mensaje enviado! Nos pondremos en contacto contigo pronto.
            </p>
            <button className="contacto__btn-reset" onClick={handleReset}>
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form className="contacto__form" onSubmit={handleSubmit} noValidate>
            {/* Nombre */}
            <div className={`contacto__campo ${errores.nombre ? "contacto__campo--error" : ""}`}>
              <label className="contacto__campo-label" htmlFor="nombre">
                Nombre completo
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                className="contacto__input"
                placeholder="Ej: María González"
                value={campos.nombre}
                onChange={handleChange}
              />
              {errores.nombre && (
                <span className="contacto__error">{errores.nombre}</span>
              )}
            </div>

            {/* Email */}
            <div className={`contacto__campo ${errores.email ? "contacto__campo--error" : ""}`}>
              <label className="contacto__campo-label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="contacto__input"
                placeholder="tu@correo.com"
                value={campos.email}
                onChange={handleChange}
              />
              {errores.email && (
                <span className="contacto__error">{errores.email}</span>
              )}
            </div>

            {/* Servicio */}
            <div className={`contacto__campo ${errores.servicio ? "contacto__campo--error" : ""}`}>
              <label className="contacto__campo-label" htmlFor="servicio">
                Servicio
              </label>
              <div className="contacto__select-wrapper">
                <select
                  id="servicio"
                  name="servicio"
                  className="contacto__select"
                  value={campos.servicio}
                  onChange={handleChange}
                >
                  <option value="">Selecciona un servicio</option>
                  {SERVICIOS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <span className="contacto__select-arrow">↓</span>
              </div>
              {errores.servicio && (
                <span className="contacto__error">{errores.servicio}</span>
              )}
            </div>

            {/* Mensaje */}
            <div className={`contacto__campo ${errores.mensaje ? "contacto__campo--error" : ""}`}>
              <label className="contacto__campo-label" htmlFor="mensaje">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                className="contacto__textarea"
                placeholder="Cuéntanos en qué podemos ayudarte..."
                rows={5}
                value={campos.mensaje}
                onChange={handleChange}
              />
              {errores.mensaje && (
                <span className="contacto__error">{errores.mensaje}</span>
              )}
            </div>

            <button type="submit" className="contacto__btn">
              Enviar mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contacto;