export default function QuienesSomos() {
    return (
      <div className="p-6 space-y-12">
        {/* Historia */}
        <section>
          <h1 className="text-3xl font-bold mb-4">Nuestra Historia</h1>
          <p>
            Aquí puedes contar la historia de la cooperativa desde su fundación, crecimiento, logros, etc.
          </p>
        </section>
  
        {/* Misión y visión */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Misión y Visión</h2>
          <p><strong>Misión:</strong> [Texto de la misión]</p>
          <p><strong>Visión:</strong> [Texto de la visión]</p>
        </section>
  
        {/* Documentos normativos */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Documentos Normativos</h2>
          <ul className="list-disc pl-6">
            <li>
              <a href="/documentos/reglamento.pdf" download className="text-blue-600 underline">
                Reglamento Interno
              </a>
            </li>
            <li>
              <a href="/documentos/estatutos.pdf" download className="text-blue-600 underline">
                Estatutos de la cooperativa
              </a>
            </li>
          </ul>
        </section>
      </div>
    )
  }
  