import '../../styles/Afiliacion.css';

export default function InscripcionEnLinea() {
    return (
        <div className="form-container">
            <form>
                <h2>Datos Personales</h2>
                <div className="row">
                    <div className="col"><label>Nombre Completo</label><input required /></div>
                    <div className="col"><label>Tipo de Documento</label><input required /></div>
                    <div className="col"><label>Número de Documento</label><input required /></div>
                </div>
                <div className="row">
                    <div className="col"><label>Fecha Expedición Documento</label><input type="date" required /></div>
                    <div className="col"><label>Estado Civil</label><input required /></div>
                    <div className="col"><label>Género</label><input required /></div>
                    <div className="col"><label>Padre o Madre Cabeza de Familia</label><input required /></div>
                </div>
                <div className="row">
                    <div className="col"><label>Fecha de Nacimiento</label><input type="date" required /></div>
                    <div className="col"><label>Lugar de Nacimiento</label><input required /></div>
                    <div className="col"><label>Profesión u Oficio</label><input required /></div>
                    <div className="col"><label>Rh</label><input required /></div>
                </div>
                <div className="row">
                    <div className="col"><label>Dirección Domicilio</label><input required /></div>
                    <div className="col"><label>Barrio</label><input required /></div>
                    <div className="col"><label>Municipio</label><input required /></div>
                    <div className="col"><label>Departamento</label><input required /></div>
                </div>
                <div className="row">
                    <div className="col"><label>Tipo de Vivienda</label><input required /></div>
                    <div className="col"><label>Correo Electrónico</label><input type="email" required /></div>
                    <div className="col"><label>Teléfono Fijo</label><input required /></div>
                    <div className="col"><label>Celular</label><input required /></div>
                </div>
                <div className="row">
                    <div className="col"><label>Nombre Completo del Cónyuge</label><input required /></div>
                    <div className="col"><label>Tipo de Documento Cónyuge</label><input required /></div>
                    <div className="col"><label>Fecha Nacimiento del Cónyuge</label><input type="date" required /></div>
                    <div className="col"><label>Ocupación Cónyuge</label><input required /></div>
                </div>

                <h2>Situación Laboral del Docente</h2>
                <div className="row">
                    <div className="col"><label>Escalafón</label><input required /></div>
                    <div className="col"><label>Fecha Nombramiento en Propiedad</label><input type="date" required /></div>
                    <div className="col"><label>Jornada</label><input required /></div>
                </div>
                <div className="row">
                    <div className="col"><label>Cargo</label><input required /></div>
                    <div className="col"><label>Institución Educativa</label><input required /></div>
                    <div className="col"><label>Teléfono Institución</label><input required /></div>
                    <div className="col"><label>Municipio Institución</label><input required /></div>
                </div>
                <div className="row">
                    <div className="col"><label>Departamento</label><input required /></div>
                    <div className="col"><label>Nivel</label><input required /></div>
                    <div className="col"><label>Código</label><input required /></div>
                    <div className="col"><label>Tiempo de Servicio</label><input required /></div>
                </div>

                <h2>Situación Laboral no Docente</h2>
                <div className="row">
                    <div className="col"><label>Empresa en la que Trabaja</label><input required /></div>
                    <div className="col"><label>Ocupación</label><input required /></div>
                    <div className="col"><label>Dirección del Despacho</label><input required /></div>
                    <div className="col"><label>Teléfono</label><input required /></div>
                </div>
                <div className="row">
                    <div className="col"><label>Teléfono Móvil</label><input required /></div>
                    <div className="col"><label>Tipo de Contrato</label><input required /></div>
                    <div className="col"><label>Fecha de Ingreso</label><input type="date" required /></div>
                </div>

                <h2>Pensionado</h2>
                <div className="row">
                    <div className="col"><label>Pagaduría de Pensión</label><input required /></div>
                    <div className="col"><label>Resolución de Pensión</label><input required /></div>
                    <div className="col"><label>Fecha de Pensión</label><input type="date" required /></div>
                </div>

                <h2>Información Económica</h2>
                <label>Principal Actividad Económica Personal</label><input required />
                <label>Otras Ingresos Mensuales</label><input required />
                <label>Total Ingresos Mensuales</label><input required />
                <label>Total Egresos Mensuales</label><input required />
                <label>Total Activos</label><input required />
                <label>Total Pasivos</label><input required />
                <label>Otra Actividad</label><input required />
                <label>Segunda Actividad Económica</label><input required />
                <label>Descripción Otros Ingresos</label><input required />
                <label>Asociado a Otros Cooperativas</label><input required />

                <h2>Valor de Aporte Mensual</h2>
                <label>Aporte %</label><input required />
                <label>Entidad Pagadora</label><input required />

                <h2>Referencias</h2>
                <div className="row">
                    <div className="col"><label>Nombre</label><input required /></div>
                    <div className="col"><label>Dirección</label><input required /></div>
                    <div className="col"><label>Teléfono Fijo</label><input required /></div>
                    <div className="col"><label>Móvil</label><input required /></div>
                </div>
                <div className="row">
                    <div className="col"><label>Nombre</label><input required /></div>
                    <div className="col"><label>Dirección</label><input required /></div>
                    <div className="col"><label>Teléfono Fijo</label><input required /></div>
                    <div className="col"><label>Móvil</label><input required /></div>
                </div>

                <h2>Grupo Familiar - Beneficiarios</h2>
                <div className="row">
                    <div className="col"><label>Nombre</label><input required /></div>
                    <div className="col"><label>Parentesco</label><input required /></div>
                    <div className="col"><label>Mail</label><input type="email" required /></div>
                    <div className="col"><label>Estudia</label><input required /></div>
                    <div className="col"><label>Subsidio</label><input required /></div>
                </div>

                <h2>Información General</h2>
                <label>Información General</label><textarea required></textarea>
                <label>¿Es usted?</label><input required />
                <label>Autorización para ser Contactado</label><input required />
                <label>Nombre Asociación que lo Vincula</label><input required />
                <label>Está Vinculado con Alguna Institución Religiosa</label><input required />
                <label>Municipio</label><input required />
                <label>Departamento</label><input required />
                <label>¿Tiene algún tipo de discapacidad certificada?</label><input required />
                <label>¿Está recibiendo algún tipo de subsidio?</label><input required />

                <h2>Autorización y Declaración</h2>
                <p>Autorizo a COONADOC para... (se puede agregar texto de declaración completo aquí si se desea).</p>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
