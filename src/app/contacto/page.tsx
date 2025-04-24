"use client";

import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaPhoneAlt, FaMobileAlt, FaMoneyBillWave, FaCreditCard } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm';

export default function ContactSection() {

  const customGreen = "#3b731c";
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#f0f5ec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#3b731c]">Contáctanos</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos comprometidos a brindarte la mejor atención. No dudes en comunicarte con nosotros para cualquier consulta o solicitud.
          </p>
        </div>
        
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
         
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-[#3b731c] text-white p-6">
              <h2 className="text-2xl font-bold">Información de contacto</h2>
              <p className="mt-2 opacity-90">
                Comunícate con nosotros a través de cualquiera de nuestros canales de atención
              </p>
            </div>
            
            <div className="p-6">
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                  <FaPhone className="text-orange-500 mr-2" /> Números telefónicos
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
                    <div className="bg-orange-100 p-3 rounded-full mr-3">
                      <FaMobileAlt className="text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Atención al cliente</p>
                      <p className="font-medium text-gray-800">+57 311 501 9158</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
                    <div className="bg-orange-100 p-3 rounded-full mr-3">
                      <FaMobileAlt className="text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Coordinación</p>
                      <p className="font-medium text-gray-800">+57 312 636 2913</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
                    <div className="bg-orange-100 p-3 rounded-full mr-3">
                      <FaMoneyBillWave className="text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Tesorería</p>
                      <p className="font-medium text-gray-800">+57 322 403 2936</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
                    <div className="bg-orange-100 p-3 rounded-full mr-3">
                      <FaCreditCard className="text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Crédito y cartera</p>
                      <p className="font-medium text-gray-800">+57 300 832 8192</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
                    <div className="bg-orange-100 p-3 rounded-full mr-3">
                      <FaPhoneAlt className="text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Línea fija</p>
                      <p className="font-medium text-gray-800">+57 601 752 3313</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Correos electrónicos */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                  <FaEnvelope className="text-orange-500 mr-2" /> Correos electrónicos
                </h3>
                
                <div className="space-y-3">
                  <a 
                    href="mailto:gerencia@coonadoc.co" 
                    className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-[#f0f5ec] hover:text-[#3b731c] transition"
                  >
                    <div className="bg-[#e8f0e3] p-3 rounded-full mr-3">
                      <FaEnvelope className="text-[#3b731c]" />
                    </div>
                    <span className="font-medium">gerencia@coonadoc.co</span>
                  </a>
                  
                  <a 
                    href="mailto:coordinacion@coonadoc.co" 
                    className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-[#f0f5ec] hover:text-[#3b731c] transition"
                  >
                    <div className="bg-[#e8f0e3] p-3 rounded-full mr-3">
                      <FaEnvelope className="text-[#3b731c]" />
                    </div>
                    <span className="font-medium">coordinacion@coonadoc.co</span>
                  </a>
                  
                  <a 
                    href="mailto:coonadoc@yahoo.com" 
                    className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-[#f0f5ec] hover:text-[#3b731c] transition"
                  >
                    <div className="bg-[#e8f0e3] p-3 rounded-full mr-3">
                      <FaEnvelope className="text-[#3b731c]" />
                    </div>
                    <span className="font-medium">coonadoc@yahoo.com</span>
                  </a>
                  
                  <a 
                    href="mailto:cooperativanacionaldedocentes@gmail.com" 
                    className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-[#f0f5ec] hover:text-[#3b731c] transition"
                  >
                    <div className="bg-[#e8f0e3] p-3 rounded-full mr-3">
                      <FaEnvelope className="text-[#3b731c]" />
                    </div>
                    <span className="font-medium truncate">cooperativanacionaldedocentes@gmail.com</span>
                  </a>
                  
                  <a 
                    href="mailto:servicioalclientecoonadoc@gmail.com" 
                    className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-[#f0f5ec] hover:text-[#3b731c] transition"
                  >
                    <div className="bg-[#e8f0e3] p-3 rounded-full mr-3">
                      <FaEnvelope className="text-[#3b731c]" />
                    </div>
                    <span className="font-medium truncate">servicioalclientecoonadoc@gmail.com</span>
                  </a>
                </div>
              </div>
              
              {/* Horarios */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                  <FaClock className="text-orange-500 mr-2" /> Horarios de atención
                </h3>
                
                <div className="p-4 bg-[#f0f5ec] rounded-lg border-l-4 border-[#3b731c]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-[#3b731c] rounded-full mr-2"></div>
                      <span className="text-gray-700">Lunes a Viernes: <strong>08:00 - 17:00</strong></span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                      <span className="text-gray-700">Sábados (primer sábado del mes): <strong>08:00 - 12:00</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mapa y ubicación */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-orange-500 text-white p-6">
              <h2 className="text-2xl font-bold">Nuestra ubicación</h2>
              <p className="mt-2 opacity-90 flex items-center">
                <FaMapMarkerAlt className="mr-2" /> 
                Calle 39 # 14 - 24 Piso 3, Bogotá - Colombia
              </p>
            </div>
            
            <div className="w-full h-[400px] lg:h-[480px]">
              <iframe
                src="https://www.google.com/maps?q=4.619514240216461,-74.07214210472841&hl=es&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
            
            <div className="p-6 bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500">¿Necesitas ayuda?</p>
                  <p className="text-xl font-bold text-[#3b731c]">¡Ven y visítanos!</p>
                </div>
                <a 
                  href="https://goo.gl/maps/FsHsBZKoZfzaZWYY9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition shadow-sm"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Formulario de contacto - ocupa todo el ancho */}
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
