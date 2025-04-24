import "../../styles/Afiliacion.css";
import Link from 'next/link';

export default function Afiliacion() {
  const formularios = [
    {
      texto: "INSCRIPCIÓN NUEVOS SOCIOS",
      archivo: "/pdfs/inscripcion_nuevos_socios.pdf",
      externo: true,
    },
    {
      texto: "NUEVOS SOCIOS MENORES DE EDAD",
      archivo: "/pdfs/nuevos_socios_menores.pdf",
      externo: true,
    },
    {
      texto: "ACTUALIZACIÓN DATOS",
      archivo: "/pdfs/actualizacion_datos.pdf",
      externo: true,
    },
    {
      texto: "INSCRIPCIÓN EN LÍNEA",
      archivo: "/inscripcion-en-linea",
      externo: false,
    },
    {
      texto: "ACTUALIZACIÓN EN LÍNEA",
      archivo: "/inscripcion-en-linea",
      externo: false,
    }
  ];

  return (
    <div className="afiliacion-container seccion">
      <h1>Afiliació<span className="color-naranja">n</span></h1>

      <p className="text-center mb-4">
        Radica tu solicitud enviando el formulario diligenciado al correo:{" "}
        <a
          href="mailto:afiliaciones@coonadoc.co"
          className="correo-enlace"
        >
          afiliaciones@coonadoc.co
        </a>
      </p>

      <section className="seccion">
      <h2>Tipo<span className="color-naranja">s</span> de Crédit<span className="color-naranja">o</span></h2>

        <ul className="lista">
          <li>Crédito Educativo</li>
          <li>Crédito de Vivienda</li>
          <li>Crédito de Libre Inversión</li>
        </ul>
      </section>

      <section id="beneficios" className="seccion">
        <h2>Seguro<span className="color-naranja">s</span> y Beneficio<span className="color-naranja">s</span></h2>
        <p className="parrafo">
          Detalles sobre los seguros que se ofrecen y los beneficios adicionales por estar afiliado.
        </p>
      </section>

      <section className="seccion">
        <h2>Convenio<span className="color-naranja">s</span></h2>
        <ul className="lista">
          <li>Convenio con Clínica Vida Sana</li>
          <li>Descuento en Universidad Local</li>
        </ul>
      </section>

      <div className="botones-container">
        {formularios.map((formulario, index) =>
          formulario.externo ? (
            <a
              key={index}
              href={formulario.archivo}
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-boton"
            >
              {formulario.texto}
            </a>
          ) : (
            <Link href={formulario.archivo} key={index}>
              <span className="pdf-boton">{formulario.texto}</span>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
