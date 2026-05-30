import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import Servicios from "./components/Servicios";
import ServiceCard from "./components/ServiceCard";
import Contacto from "./components/Contacto";
import Testimonios from "./components/Testimonios";
import FAQ from "./components/FAQ";

function App() {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((json) => setDatos(json));
  }, []);

  return (
    <>
      <Navbar />
      <Nosotros data={datos?.nosotros} />
      <Servicios data={datos?.servicios} />
      <Testimonios />
      <FAQ data={datos?.faq} />
      <Contacto />
    </>
  );
}

export default App;
