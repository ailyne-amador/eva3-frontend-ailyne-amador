# Centro de Negocios Santiago — Sitio Web

Sitio web institucional del **Centro de Negocios Santiago**, una institución de SERCOTEC orientada al apoyo de micro, pequeñas y medianas empresas (MIPYMES) mediante acompañamiento especializado en gestión, eficiencia e innovación.

---

## Tecnologías utilizadas

- [React](https://react.dev/) con Vite
- CSS modular por componente (sin frameworks)
- Google Fonts: `Syne` + `DM Sans`
- `data.json` como fuente de datos estática

---

## Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.jsx           # Barra de navegacion
│   ├── Nosotros.jsx         # Presentación institucional del centro
│   ├── Servicios.jsx        # Grilla de tarjetas de servicios
│   ├── ServiceCard.jsx      # Tarjeta individual de servicio
│   ├── Testimonios.jsx      # Carrusel de opiniones de clientes
│   ├── FAQ.jsx              # Acordeón de preguntas frecuentes
│   └── Contacto.jsx         # Formulario de contacto validado
│
├── Nosotros.css
├── Navbar.css
├── ServiceCard.css
├── Servicios.css
├── Testimonios.css
├── FAQ.css
├── Contacto.css
│
├── data.json                # Contenido: nosotros, servicios, faq
├── App.jsx
└── main.jsx

public/
└── images/
    └── servicios/
        ├── gestion.jpg
        ├── eficiencia.jpg
        └── vinculacion.jpg
```

---

## Secciones

### Nosotros
Sección de presentación institucional del centro. Muestra el título principal, subtítulo y una grilla de bloques informativos (¿Quiénes somos?, Acompañamiento preventivo, Acompañamiento correctivo y Nuestro compromiso). Toda la información se alimenta desde `data.nosotros` en `data.json`.

### Servicios
Muestra las tres líneas de servicio del centro en tarjetas compactas dispuestas horizontalmente. Cada tarjeta incluye imagen, título, descripción y un botón *Contáctanos* que hace scroll suave hacia el formulario de contacto.

**Servicios disponibles:**
- Gestión de Negocios
- Eficiencia y Sostenibilidad
- Vinculación Empresarial

### Testimonios
Carrusel automático (intervalo de 5 s) con opiniones de clientes. Navegable mediante flechas o puntos indicadores. El temporizador se reinicia al navegar manualmente.

### Preguntas Frecuentes
Acordeón animado con 7 preguntas sobre servicios, costos, contacto y financiamiento. Incluye al pie accesos directos al correo y Facebook del centro.

### Contacto
Formulario con validación en tiempo real. Campos:
- **Nombre completo** — obligatorio
- **Email** — obligatorio, formato válido
- **Servicio** — selección entre los 3 disponibles
- **Mensaje** — obligatorio, mínimo 10 caracteres

Al enviar correctamente muestra un estado de éxito con opción de reiniciar.

---

## Instalación y uso

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/centro-negocios-santiago.git
cd centro-negocios-santiago

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

---

## Fuentes tipográficas

- **Syne** — títulos, labels y botones
- **DM Sans** — cuerpo de texto y descripciones

Ambas importadas desde Google Fonts.

---

## data.json

El archivo `src/data.json` centraliza el contenido del sitio. Contiene tres claves principales:

```json
{
  "nosotros": { ... },   // Información institucional
  "servicios": [ ... ],  // Arreglo de servicios (id, titulo, descripcion, imagen, alt)
  "faq": [ ... ]         // Arreglo de preguntas frecuentes (id, pregunta, respuesta)
}
```

Para agregar un nuevo servicio o pregunta frecuente, basta con añadir un objeto al arreglo correspondiente sin modificar ningún componente.

---
# Guía de Buenas Prácticas para el Desarrollo con React

## Convenciones de Nomenclatura

Para mantener la consistencia del proyecto se utilizarán las siguientes convenciones:

* Los componentes React deben nombrarse utilizando **PascalCase**.

  * Ejemplo: `Navbar.jsx`, `ServiceCard.jsx`, `ContactForm.jsx`.
* Las variables y funciones deben utilizar **camelCase**.

  * Ejemplo: `userData`, `handleSubmit()`, `serviceList`.
* Los archivos de estilos deben tener nombres descriptivos relacionados con el componente.

  * Ejemplo: `Navbar.css`, `ContactForm.css`.
* Las constantes deben escribirse en mayúsculas separadas por guiones bajos.

  * Ejemplo: `MAX_SERVICES`, `API_URL`.

## Estructura de Archivos

Se recomienda organizar el proyecto de la siguiente manera:

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── ServiceCard.jsx
│   └── ContactForm.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Services.jsx
│   └── Contact.jsx
│
├── assets/
│   ├── images/
│   └── icons/
│
├── App.jsx
├── main.jsx
└── index.css
```

Esta estructura facilita el mantenimiento y la escalabilidad de la aplicación.

## Uso de Variables

* Utilizar nombres descriptivos y significativos.
* Evitar abreviaciones innecesarias.
* Declarar variables con `const` cuando no cambien de valor.
* Utilizar `let` únicamente cuando sea necesario modificar la variable.
* Mantener el estado de los componentes organizado mediante Hooks como `useState`.

Ejemplo:

```javascript
const serviceName = "Desarrollo Web";
const maxServices = 10;
```

## Recomendaciones de Accesibilidad

Para garantizar que la aplicación pueda ser utilizada por la mayor cantidad de personas posible:

* Utilizar etiquetas HTML semánticas (`header`, `main`, `section`, `footer`).
* Agregar texto alternativo (`alt`) a todas las imágenes.
* Asociar correctamente las etiquetas `label` con los campos de formulario.
* Mantener un contraste adecuado entre texto y fondo.
* Permitir la navegación mediante teclado.

Ejemplo:

```html
<label htmlFor="email">Correo Electrónico</label>
<input type="email" id="email" />
```

## Recomendaciones de Usabilidad

* Mantener una interfaz simple e intuitiva.
* Utilizar mensajes claros para informar acciones exitosas o errores.
* Diseñar componentes reutilizables para mantener la consistencia visual.
* Mantener tiempos de carga reducidos optimizando imágenes y recursos.
* Asegurar que la aplicación sea responsive para distintos dispositivos.
