import FAQ from '@/components/FAQ';

export const metadata = {
  title: 'Preguntas Frecuentes | COONADOC',
  description: 'Respuestas a las preguntas más comunes sobre COONADOC y nuestros servicios para docentes.'
};

export default function FAQPage() {
  return (
    <main className="min-h-screen  py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Preguntas Frecuentes</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre COONADOC, nuestros servicios y cómo podemos ayudarte.
          </p>
        </div>
        
        <FAQ />
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">¿No encuentras la respuesta que buscas?</p>
          <a 
            href="/contacto" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </main>
  );
} 