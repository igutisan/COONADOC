import "../../styles/Afiliacion.css";
import SubirDocumento from '../../components/SubirDocumento';
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
      archivo: "/inscripcion-en-linea", //Ambos botones redirigien al mismo formulario.
      externo: false,
    },
  ];

  return (
    <div className="afiliacion-container">
      <h1 className="text-3xl font-bold mb-6 text-center">Afiliación</h1>
      <p className="text-center mb-4">
        Radica tu solicitud enviando el formulario diligenciado al correo:{" "}
        <a
          href="mailto:afiliaciones@coonadoc.co"
          className="text-blue-600 underline"
        >
          afiliaciones@coonadoc.co
        </a>
      </p>

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

      <section>
        <h2 className="text-2xl font-semibold mb-4">Tipos de Crédito</h2>
        <ul className="list-disc pl-6">
          <li>Crédito Educativo</li>
          <li>Crédito de Vivienda</li>
          <li>Crédito de Libre Inversión</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Seguros y Beneficios</h2>
        <p>
          Detalles sobre los seguros que se ofrecen y los beneficios adicionales por estar afiliado.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Convenios</h2>
        <ul className="list-disc pl-6">
          <li>Convenio con Clínica Vida Sana</li>
          <li>Descuento en Universidad Local</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Subir Documentos para Afiliación</h2>
        <SubirDocumento />
      </section>
    </div>
  );
}
