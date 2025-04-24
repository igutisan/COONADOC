'use client';

import { useState, useEffect } from 'react';
import { FaPaperPlane, FaExclamationCircle, FaCheckCircle } from 'react-icons/fa';

type FormData = {
  nombre: string;
  email: string;
  telefono: string;
  asunto: string;
  mensaje: string;
};

type FormErrors = {
  [key in keyof FormData]?: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key in keyof FormData]?: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Validación en tiempo real cuando los campos cambian o pierden el foco
  useEffect(() => {
    if (Object.keys(touched).length > 0) {
      validateForm();
    }
  }, [formData, touched]);

  const validateForm = () => {
    const newErrors: FormErrors = {};

    
    if (touched.nombre && !formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    } else if (touched.nombre && formData.nombre.trim().length < 3) {
      newErrors.nombre = 'El nombre debe tener al menos 3 caracteres';
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (touched.email && !formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (touched.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Por favor, ingresa un email válido';
    }

 
    const phoneRegex = /^[0-9]{10,15}$/;
    if (touched.telefono && formData.telefono.trim() && !phoneRegex.test(formData.telefono.replace(/\D/g, ''))) {
      newErrors.telefono = 'Por favor, ingresa un número de teléfono válido';
    }

   
    if (touched.asunto && !formData.asunto.trim()) {
      newErrors.asunto = 'El asunto es obligatorio';
    }

    
    if (touched.mensaje && !formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es obligatorio';
    } else if (touched.mensaje && formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Marcamos todos los campos como tocados para validar el formulario completo
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key as keyof FormData] = true;
      return acc;
    }, {} as { [key in keyof FormData]: boolean });
    
    setTouched(allTouched);
    
    const isValid = validateForm();
    
    if (!isValid) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
   
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      });
      setTouched({});
      setSubmitSuccess(true);
      
     
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="bg-[#3b731c] text-white p-6">
        <h2 className="text-2xl font-bold">Envíanos un mensaje</h2>
        <p className="mt-2 opacity-90">
          Completa el formulario y nos pondremos en contacto contigo lo antes posible
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6">
        {submitSuccess && (
          <div className="mb-6 p-4 bg-[#f0f5ec] border-l-4 border-[#3b731c] text-[#3b731c] flex items-start">
            <FaCheckCircle className="text-[#3b731c] mt-1 mr-2 flex-shrink-0" />
            <div>
              <p className="font-medium">¡Mensaje enviado con éxito!</p>
              <p>Nos pondremos en contacto contigo lo antes posible.</p>
            </div>
          </div>
        )}
        
        {submitError && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-start">
            <FaExclamationCircle className="text-red-500 mt-1 mr-2 flex-shrink-0" />
            <div>
              <p className="font-medium">Error al enviar</p>
              <p>{submitError}</p>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre completo <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
                errors.nombre 
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                  : touched.nombre 
                    ? 'border-[#3b731c] focus:border-[#3b731c] focus:ring-[#e8f0e3]' 
                    : 'border-gray-300 focus:border-[#3b731c] focus:ring-[#e8f0e3]'
              }`}
              placeholder="Tu nombre completo"
            />
            {errors.nombre && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <FaExclamationCircle className="mr-1" /> {errors.nombre}
              </p>
            )}
          </div>
          
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo electrónico <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
                errors.email 
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                  : touched.email 
                    ? 'border-[#3b731c] focus:border-[#3b731c] focus:ring-[#e8f0e3]' 
                    : 'border-gray-300 focus:border-[#3b731c] focus:ring-[#e8f0e3]'
              }`}
              placeholder="tucorreo@ejemplo.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <FaExclamationCircle className="mr-1" /> {errors.email}
              </p>
            )}
          </div>
          
          {/* Teléfono */}
          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
                errors.telefono 
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                  : touched.telefono && formData.telefono
                    ? 'border-[#3b731c] focus:border-[#3b731c] focus:ring-[#e8f0e3]' 
                    : 'border-gray-300 focus:border-[#3b731c] focus:ring-[#e8f0e3]'
              }`}
              placeholder="Tu número de teléfono"
            />
            {errors.telefono && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <FaExclamationCircle className="mr-1" /> {errors.telefono}
              </p>
            )}
          </div>
          
          {/* Asunto */}
          <div>
            <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">
              Asunto <span className="text-red-500">*</span>
            </label>
            <select
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
                errors.asunto 
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                  : touched.asunto 
                    ? 'border-[#3b731c] focus:border-[#3b731c] focus:ring-[#e8f0e3]' 
                    : 'border-gray-300 focus:border-[#3b731c] focus:ring-[#e8f0e3]'
              }`}
            >
              <option value="">Selecciona un asunto</option>
              <option value="Información general">Información general</option>
              <option value="Afiliación">Afiliación</option>
              <option value="Créditos">Créditos</option>
              <option value="Sugerencias">Sugerencias</option>
              <option value="Quejas o reclamos">Quejas o reclamos</option>
              <option value="Otro">Otro</option>
            </select>
            {errors.asunto && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <FaExclamationCircle className="mr-1" /> {errors.asunto}
              </p>
            )}
          </div>
        </div>
        
        {/* Mensaje */}
        <div className="mb-6">
          <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
            Mensaje <span className="text-red-500">*</span>
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={5}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
              errors.mensaje 
                ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                : touched.mensaje 
                  ? 'border-[#3b731c] focus:border-[#3b731c] focus:ring-[#e8f0e3]' 
                  : 'border-gray-300 focus:border-[#3b731c] focus:ring-[#e8f0e3]'
            }`}
            placeholder="Escribe tu mensaje aquí..."
          />
          {errors.mensaje && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <FaExclamationCircle className="mr-1" /> {errors.mensaje}
            </p>
          )}
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition shadow-md flex items-center ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </>
            ) : (
              <>
                <FaPaperPlane className="mr-2" /> Enviar mensaje
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm; 