import '../../styles/InscripcionFormulario.css';

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

                <section className="declaracion">
                <h2>AUTORIZACIÓN Y DECLARACIÓN</h2>

                <p><strong>Consulta y reporte en centrales de riesgo:</strong><br />
                    Autorizo a COONADOC, para:<br />
                    A. Consultar: En cualquier tiempo a cualquier central de información de riesgo, toda la información relevante para conocer mi desempeño como deudor, mi capacidad de pago o para valorar el riesgo futuro de concederme un crédito.<br />
                    B. Reportar a la correspondiente central de información de riesgo, datos, tratados o sin tratar, tanto sobre el cumplimiento oportuno como sobre el incumplimiento, si lo hubiere, de mis obligaciones crediticias, o de mis deberes legales de contenido patrimonial, de tal forma que éstas presenten una información veraz, pertinente, completa actualizada y exacta de mi desempeño como deudor después de haber cruzado y procesado diversos datos útiles para obtener una información significativa.<br />
                    C. Suministrar a la correspondiente central de información de riesgo datos relativos a mis solicitudes de crédito, así como otros atinentes a mis relaciones comerciales, financieras y en general socioeconómicas que yo haya entregado o que consten en registros públicos, bases de datos públicos o documentos públicos.<br />
                    D. Conservar, con las debidas actualizaciones y durante el período señalado en sus reglamentos, la información indicada en los literales B) y C) de esta cláusula.<br />
                    La autorización anterior no me impedirá ejercer mi derecho a corroborar en cualquier tiempo en la entidad o en la central de información de riesgo a la cual se hayan suministrado mis datos, que la información suministrada es veraz, completa, exacta y actualizada, y en caso de que no lo sea, a que se deje constancia de mi desacuerdo, a exigir su rectificación y a que se informe sobre las correcciones efectuadas.
                </p>

                <p><strong>Autorización para tratamiento de datos personales:</strong><br />
                    Autorizo de manera expresa, suficiente, voluntaria e informada a “Coonadoc” para incluir y actualizar los datos personales en su base de datos siendo estos capturados, administrados, tratados, procesados, operados, verificados y usados por “Coonadoc” responsable de la información.<br />
                    Como titular de la información suministrada usted gozara de los siguientes derechos:<br />
                    A. Conocer, actualizar y rectificar sus datos personales.<br />
                    B. Solicitar prueba de la autorización otorgada.<br />
                    C. Ser informado respecto del uso que se les ha dado a sus datos personales.<br />
                    D. Revocar la autorización y/o solicitar la suspensión de datos cuando en el tratamiento no se respeten los principios constitucionales y legales.<br />
                    E. Acceder en forma gratuita a sus datos personales.
                </p>

                <p><strong>Certifico</strong> que los datos personales suministrados por mí en este formulario son veraces, completos, exactos, actualizados, reales y comprobables. Por lo tanto, cualquier error en la información suministrada será única y exclusivamente mi responsabilidad.</p>

                <p><strong>Declaración de origen de fondos:</strong><br />
                    Obrando en nombre propio, de manera voluntaria y dando certeza de que todo lo aquí consignado es cierto, realizo la siguiente declaración de origen de fondos a Coonadoc:<br />
                    1. Los recursos que deposite en la Cooperativa por concepto de aportes y como pago de las obligaciones que llegare a tener proceden de las siguientes fuentes de ingreso: ____________________________<br />
                    2. Declaro que los ingresos que entregue no provienen de ninguna actividad contemplada en el Código Penal Colombiano o en cualquier forma que lo modifique o adicione, ni efectuaré transacciones destinadas a tales actividades o en favor de personas relacionadas con las mismas.<br />
                    3. Autorizo a Coonadoc a tomar las medidas correspondientes en el caso de detectar cualquier inconsistencia en la información consignada en este formulario e igualmente me obligo a reportar por lo menos una vez al año los cambios que se hayan generado respecto de la información aquí contenida.
                </p>

                <p>Por la presente solicito mi ADMISIÓN como asociado(a) de “COONADOC”, me adhiero y someto al estatuto y los reglamentos aprobados por la Asamblea General de Asociados. Si soy asociado vinculado a una entidad con convenio de descuento por nómina, autorizo que se descuenten las obligaciones contraídas con la Cooperativa. Si soy asociado particular o convengo pagos por caja, acepto la fecha de pago de las cuotas informadas en el momento de realizar mis solicitudes. Declaro que los datos contenidos en el presente formulario son correctos.</p>

                <p><strong>Actualización de Datos:</strong> El Asociado se obliga a informar y actualizar a COONADOC por escrito y oportunamente cualquier cambio en los datos cifras y demás información suministrada a Coonadoc así como entregar los soportes documentados con una periodicidad como mínimo anual de conformidad con las normas legales y las circulares de la Superintendencia de Economía solidaria.</p>

                <p><strong>Correspondencia:</strong> Autorizo a COONADOC para que sea comunicada toda la información relevante de la cooperativa a través de correo físico electrónico, teléfono fijo y móvil vía mensajes de texto mediante cualquier medio análogo y/o digital de comunicación. El vinculado se obliga revisar de manera oportuna y periódica los estados de cuenta de Coonadoc que pone a su disposición por medio tecnológico.</p>

                <p><strong>Revocatorias:</strong> Coonadoc podrá dar por terminada cualquier relación comercial contractual o de negocios con el suscrito. Teniendo como fundamento:<br />
                    I. las cláusulas establecidas en los contratos de los diferentes productos.<br />
                    II. la conexión con cualquier tipo de investigación, requerimientos de entidades de control, noticias o procesos relacionados con delitos fuentes de lavado de activos y financiación de terrorismo (LAFT).
                </p>

                <p><strong>Destrucción de documentos:</strong> Autorizo expresamente a Coonadoc para que en el evento de ser negada o anulada mi solicitud y/o no acercarme a recoger los documentos con los cuales se instrumenta esta operación. En un plazo no superior a treinta (30) días hábiles después de la radicación, estos sean destruidos o eliminados de la forma como esté contemplado en las políticas internas de la Cooperativa.</p>
                </section>





                <h2>Transacciones en Moneda Extranjera</h2>
                <label>¿Realiza transacciones en moneda extranjera?</label>
                <input required />
                <label>¿Tiene cuentas en el exterior?</label>
                <input required />
                <label>País</label>
                <input required />
                <label>Entidad</label>
                <input required />

                <h2>Autorización y Declaración Final</h2>
                <p>
                    Declaro que la información suministrada es veraz y autorizo a la Cooperativa COONADOC a verificarla en cualquier momento. 
                    Así mismo, autorizo el tratamiento de mis datos personales de acuerdo con la Ley 1581 de 2012 y el Decreto 1377 de 2013.
                </p>
                <div className="row">
                    <div className="col">
                        <label>Lugar y Fecha</label>
                        <input required />
                    </div>
                    <div className="col">
                        <label>Firma</label>
                        <input required />
                    </div>
                </div>


                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
