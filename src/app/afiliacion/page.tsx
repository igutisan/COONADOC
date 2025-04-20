// src/app/afiliacion/page.tsx
import "../../styles/Afiliacion.css"
import SubirDocumento from '../../components/SubirDocumento'

export default function Afiliacion() {
  return (
    <div className="afiliacion-container">
      {/* Requisitos y proceso de afiliación */}
      <section>
        <h1 className="text-3xl font-bold mb-4">Afiliación</h1>
        <p>
          Aquí puedes explicar los requisitos para afiliarse y el proceso paso a paso.
        </p>
      </section>

      {/* Tipos de crédito */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Tipos de Crédito</h2>
        <ul className="list-disc pl-6">
          <li>Crédito Educativo</li>
          <li>Crédito de Vivienda</li>
          <li>Crédito de Libre Inversión</li>
        </ul>
      </section>

      {/* Información sobre seguros y beneficios */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Seguros y Beneficios</h2>
        <p>
          Detalles sobre los seguros que se ofrecen y los beneficios adicionales por estar afiliado.
        </p>
      </section>

      {/* Listado de convenios */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Convenios</h2>
        <ul className="list-disc pl-6">
          <li>Convenio con Clínica Vida Sana</li>
          <li>Descuento en Universidad Local</li>
        </ul>
      </section>

      {/* Subida de documentos */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Subir Documentos para Afiliación</h2>
        <SubirDocumento />
      </section>
    </div>
  )
}
