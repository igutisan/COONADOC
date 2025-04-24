import "../../styles/Formatos.css"; // Estilos CSS personalizados

const Formatos = () => {
  // Datos de los PDFs
  const pdfs = [
    {
      title: "ACTUALIZACIÓN DE DATOS",
      pdfUrl: "/formatos/actualizacion_datos.pdf", // URL del PDF
    },
    {
      title: "INGRESOS NUEVOS SOCIOS",
      pdfUrl: "/formatos/nuevos_socios.pdf",
    },
    {
      title: "ASOCIACION MENORES DE EDAD",
      pdfUrl: "/formatos/asociacion_menores_edad.pdf",
    },
    {
      title: "AUXILIO SOLIDARIDAD",
      pdfUrl: "/formatos/auxilio_solidaridad.pdf",
    },
    {
      title: "PRESENTACION FAMILIAR",
      pdfUrl: "/formatos/presentacion_familiar.pdf",
    },
    {
      title: "RETIROS",
      pdfUrl: "/formatos/retiros.pdf",
    },
    {
      title: "NOVEDADES",
      pdfUrl: "/formatos/novedades.pdf",
    },
    {
      title: "AUXILIO EDUCATIVO",
      pdfUrl: "/formatos/auxilio_educativo.pdf",
    },
    {
      title: "SOLICITUD ASOCIACION",
      pdfUrl: "/formatos/solicitud_asociacion.pdf",
    },
    {
      title: "SOLICITUD CREDITO",
      pdfUrl: "/formatos/solicitud_credito.pdf",
    },
    {
      title: "SOLICITUD GIRO",
      pdfUrl: "/formatos/solicitud_giro.pdf",
    },
  ];

  return (
    <div className="pdf-container seccion">
      <h1 className="page-title">Formato<span className="color-naranja">s</span> y Documento<span className="color-naranja">s</span></h1>
      <div className="grid-container">
        {pdfs.map((pdf, index) => (
          <div key={index} className="pdf-item">
            <h2 className="pdf-title">{pdf.title}</h2>
            <a href={pdf.pdfUrl} target="_blank" rel="noopener noreferrer">
              <div className="pdf-icon">
                <img src="/images/icono.png" alt="PDF Icon" />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Formatos;