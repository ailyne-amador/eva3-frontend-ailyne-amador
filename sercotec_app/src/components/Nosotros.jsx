import "./Nosotros.css";

function Nosotros({ data }) {
  if (!data) return null;

  return (
    <section id="nosotros" className="nosotros">
      <div className="nosotros__header">
        <h1 className="nosotros__titulo">{data.titulo}</h1>
        <p className="nosotros__subtitulo">{data.subtitulo}</p>
      </div>

      <div className="nosotros__grid">
        {data.bloques.map((bloque) => (
          <div key={bloque.id} className="nosotros__bloque">
            <h2 className="nosotros__bloque-titulo">{bloque.titulo}</h2>
            <p className="nosotros__bloque-texto">{bloque.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Nosotros;