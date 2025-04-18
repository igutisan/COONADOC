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
          Nuestra cooperativa está comprometida con el bienestar de nuestros afiliados y el desarrollo de nuestra comunidad.
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
