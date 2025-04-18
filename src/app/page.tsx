// src/app/page.tsx
import Beneficios from '../components/Beneficios'
import Noticias from '../components/Noticias'
import Contacto from '../components/Contacto'

export default function HomePage() {
  return (
    <div className="p-6 space-y-12">
      {/* Introducción general */}
      <section>
        <h1 className="text-3xl font-bold mb-4">Bienvenido a COONADOC</h1>
        <p>
          Somos una cooperativa de aportes y crédito que cuenta con talento humano idóneo, entrega servicios integrales de
          aporte y crédito de manera socialmente responsable, sostenible que genera una rentabilidad superior 
          para fortalecer patrimonio y brindar bienestar a través de excedentes cooperativos que beneficien a 
          todos sus asociados, sus familias y comunidad en general.
        </p>
      </section>

      {/* Beneficios de la cooperativa */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Beneficios</h2>
        <Beneficios />
      </section>

      {/* Noticias o blog */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Noticias</h2>
        <Noticias />
      </section>

      {/* Contacto (WhatsApp y redes sociales) */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contáctanos</h2>
        <Contacto />
      </section>
    </div>
  )
}
