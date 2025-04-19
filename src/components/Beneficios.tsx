import "../styles/Beneficios.css";

export default function Beneficios() {
  return (
    <div className="beneficios">
      <div className="beneficio-card financiero">
        <h3>Financiero</h3>
        <p>Aportes sociales y créditos con bajas tasas de interes.</p>
      </div>
      <div className="beneficio-card recreacion">
        <h3>Recreación</h3>
        <p>Descuentos y promociones en eventos culturales.</p>
      </div>
      <div className="beneficio-card bienestar">
        <h3>Bienestar</h3>
        <p>Odontología, asistencia médica para mascotas y asesoría legal.</p>
      </div>
      <div className="beneficio-card educacion">
        <h3>Educación</h3>
        <p>Descuentos en cursos cortos, incluyendo idiomas y 10% de descuento en inscripción.</p>
      </div>
    </div>
  );
}

  