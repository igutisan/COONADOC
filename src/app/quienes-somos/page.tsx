import "../../styles/QuienesSomos.css";

export default function QuienesSomos() {
  return (
    <div className="quienes-somos-container">
      {/* Historia */}
      <section className="seccion historia">
        <h1>
          Nuestr<span className="color-naranja">a</span> Histori<span className="color-naranja">a</span>
        </h1>
        <p>
          Conoce la historia de nuestra Cooperativa, nuestros logros como empresa y metas a futuro en este corto video.
        </p>
        <video controls className="video-historia" autoPlay playsInline>
          <source src="/images/COONADOC-HISTORIA_compressed.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>
      </section>

      {/* Misión y Visión */}
      <section className="seccion mision-vision">
        <div className="bloque">
        <h2>
         Misió<span className="color-naranja">n</span>
        </h2>
          <p>
          Nuestra misión es ofrecer servicios financieros y sociales de manera responsable y sostenible,
          apoyados en un equipo humano idóneo y capacitado. Nos enfocamos en generar valor a través de 
          excedentes cooperativos que fortalezcan el patrimonio institucional, aportando a la calidad de
           vida de nuestros asociados, sus familias y la comunidad en general.
          </p>
        </div>
        <div className="bloque">
        <h2>
         Visió<span className="color-naranja">n</span>
        </h2>
          <p>
            Para el año 2025, COONADOC proyecta fortalecer su base social con más de 900 asociados,
            mediante una gestión social eficiente, promoviendo valores como la confianza, la calidez
            y la eficiencia. Buscamos generar transformación de vida y bienestar para nuestros asociados, 
            sus familias y la comunidad, guiados por los principios del cooperativismo y el buen vivir.
          </p>
        </div>
      </section>

      {/* Documentos Normativos */}
      <section className="seccion documentos">
        <h2>
          Documento<span className="color-naranja">s</span> Normativo<span className="color-naranja">s</span>
        </h2>
        <ul>
          <li>
            <a href="/documentos/reglamento.pdf" download>📄 Reglamento Interno</a>
          </li>
          <li>
            <a href="/documentos/estatutos.pdf" download>📄 Estatutos de la cooperativa</a>
          </li>
        </ul>
      </section>
    </div>
  );
}
