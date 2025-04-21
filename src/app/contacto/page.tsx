export default function ContactSection() {
  return (
    <section className=" text-gray-800 py-32 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 w-full">
       
        <div className="w-full lg:w-1/2 px-2">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">Contáctanos</h2>

          <div className="space-y-4 mb-8 text-sm sm:text-base">
            <p>
              <strong>Atención al cliente:</strong> +57 311 501 9158
            </p>
            <p>
              <strong>Coordinación:</strong> +57 312 636 2913
            </p>
            <p>
              <strong>Tesorería:</strong> +57 322 403 2936
            </p>
            <p>
              <strong>Crédito y cartera:</strong> +57 300 832 8192
            </p>
            <p>
              <strong>Línea fija:</strong> +57 601 752 3313
            </p>
          </div>

          <div className="space-y-2 mb-8 text-sm sm:text-base">
            <p>
              <strong>Email:</strong>
            </p>
            <p>
              <a
                href="mailto:gerencia@coonadoc.co"
                className="text-blue-500 hover:underline"
              >
                gerencia@coonadoc.co
              </a>
            </p>
            <p>
              <a
                href="mailto:coordinacion@coonadoc.co"
                className="text-blue-500 hover:underline"
              >
                coordinacion@coonadoc.co
              </a>
            </p>
            <p>
              <a
                href="mailto:coonadoc@yahoo.com"
                className="text-blue-500 hover:underline"
              >
                coonadoc@yahoo.com
              </a>
            </p>
            <p>
              <a
                href="mailto:cooperativanacionaldedocentes@gmail.com"
                className="text-blue-500 hover:underline"
              >
                cooperativanacionaldedocentes@gmail.com
              </a>
            </p>
            <p>
              <a
                href="mailto:servicioalclientecoonadoc@gmail.com"
                className="text-blue-500 hover:underline"
              >
                servicioalclientecoonadoc@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Horarios de Atención</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Lunes a Viernes: 08:00 - 17:00</li>
              <li>Sábados: 08:00 - 12:00 (Primer sábado del mes)</li>
            </ul>
          </div>
        </div>

  
        <div className="w-full lg:w-1/2 px-2">
          <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=4.619514240216461,-74.07214210472841&hl=es&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
