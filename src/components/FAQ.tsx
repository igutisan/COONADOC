'use client';
import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: '¿Qué es COONADOC?',
    answer: 'COONADOC es la Cooperativa Nacional de Docentes, una organización que brinda servicios y beneficios exclusivos para docentes y trabajadores del sector educativo.'
  },
  {
    question: '¿Cómo puedo afiliarme a COONADOC?',
    answer: 'Para afiliarte a COONADOC, puedes utilizar nuestro proceso de inscripción en línea disponible en nuestra página web o visitar nuestra oficina más cercana con los documentos requeridos: identificación válida, comprobante de domicilio y constancia laboral.'
  },
  {
    question: '¿Cuáles son los beneficios de ser miembro de COONADOC?',
    answer: 'Los miembros de COONADOC disfrutan de beneficios como acceso a préstamos con tasas preferenciales, programas de ahorro, descuentos en establecimientos afiliados, capacitaciones profesionales y acceso a eventos exclusivos.'
  },
  {
    question: '¿Cuánto tiempo toma procesar mi solicitud de afiliación?',
    answer: 'Normalmente, el proceso de afiliación toma entre 5 a 7 días hábiles, dependiendo de la verificación de documentos y el volumen de solicitudes.'
  },
  {
    question: '¿Puedo cancelar mi membresía? ¿Hay alguna penalización?',
    answer: 'Sí, puedes cancelar tu membresía en cualquier momento presentando una solicitud por escrito. No hay penalizaciones por cancelación, aunque deberás liquidar cualquier obligación pendiente con la cooperativa.'
  },
  {
    question: '¿Cómo puedo contactar al servicio de atención al cliente?',
    answer: 'Puedes contactarnos a través de nuestro formulario de contacto en la página web, llamando a nuestro número de atención al cliente, o visitando cualquiera de nuestras oficinas en horario laboral.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-700">Preguntas Frecuentes</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div 
            key={index} 
            className="border border-green-200 rounded-lg overflow-hidden shadow-sm"
          >
            <button
              className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-green-50 transition-colors duration-200"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-green-800">{faq.question}</span>
              <span className={`transform transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-4 bg-green-50 border-t border-green-200">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ; 