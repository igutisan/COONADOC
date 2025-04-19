// src/app/page.tsx
import "../styles/Home.css";
import Beneficios from '../components/Beneficios'
import Noticias from '../components/Noticias'
import Contacto from '../components/Contacto'

export default function HomePage() {
  return (
    <div className="home-container">
        {/* Introducción general */}
        <section className="Descripcion">
        <h1>
          COONADO<span className="color-naranja">C</span>
        </h1>
          <p>
            Somos una cooperativa de aportes y crédito que cuenta con talento humano idóneo, entrega servicios integrales de
            aporte y crédito de manera socialmente responsable, sostenible que genera una rentabilidad superior 
            para fortalecer patrimonio y brindar bienestar a través de excedentes cooperativos que beneficien a 
            todos sus asociados, sus familias y comunidad en general.
          </p>
        </section>

        {/* Beneficios de la cooperativa */}
        <section className="Beneficios">
          <h2>Beneficios</h2>
          <Beneficios />
        </section>

        {/* Noticias o blog */}
        <section  className="Noticias">
          <h2>Noticias</h2>
          <Noticias />
        </section>

        {/* Contacto (WhatsApp y redes sociales) */}
        <section className="Redes">
          <h2>Contáctanos en nuestras redes</h2>
          <Contacto />
        </section>
    </div>
  )
}
