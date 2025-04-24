"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { FaCalendarAlt, FaUser, FaArrowLeft, FaShare, FaBookmark, FaClock } from 'react-icons/fa';

interface Noticia {
  id: number;
  titulo: string;
  contenido: string;
  imagen?: string;
  autor?: string;
  fecha: string;
}

export default function NoticiaDetalle() {
  const [noticia, setNoticia] = useState<Noticia | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  useEffect(() => {
    if (!id) {
      setError("ID de noticia no válido");
      setCargando(false);
      return;
    }

    try {
      const noticiasGuardadas = localStorage.getItem('noticias');
      if (!noticiasGuardadas) {
        setError("No se encontraron noticias");
        setCargando(false);
        return;
      }

      const noticias = JSON.parse(noticiasGuardadas) as Noticia[];
      const noticiaEncontrada = noticias.find(n => n.id === parseInt(id));

      if (!noticiaEncontrada) {
        setError("Noticia no encontrada");
      } else {
        setNoticia(noticiaEncontrada);
      }
    } catch (err) {
      console.error('Error al cargar la noticia:', err);
      setError("Error al cargar la noticia");
    } finally {
      setCargando(false);
    }
  }, [id]);

  const formatearFecha = (fechaStr: string) => {
    try {
      const fecha = new Date(fechaStr);
      return fecha.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return fechaStr;
    }
  };

  const calcularTiempoLectura = (texto: string) => {
    const palabrasPorMinuto = 200;
    const palabras = texto.split(/\s+/).length;
    const minutos = Math.ceil(palabras / palabrasPorMinuto);
    return minutos;
  };

  const volver = () => {
    router.back();
  };

  if (cargando) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-t-4 border-orange-500 border-solid rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando noticia...</p>
        </div>
      </div>
    );
  }

  if (error || !noticia) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-md bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Error</h1>
          <p className="text-gray-700 mb-6">{error || "No se pudo cargar la noticia"}</p>
          <button 
            onClick={volver}
            className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300"
          >
            <FaArrowLeft className="mr-2" /> Volver
          </button>
        </div>
      </div>
    );
  }

  // Calcular tiempo de lectura para la noticia actual
  const tiempoLectura = calcularTiempoLectura(noticia.contenido);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero banner con imagen */}
      <div 
        className="relative h-80 md:h-96 lg:h-[500px] w-full bg-cover bg-center"
        style={{ 
          backgroundImage: noticia.imagen 
            ? `url(${noticia.imagen})` 
            : 'url(https://via.placeholder.com/1200x600?text=COONADOC)', 
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 text-white max-w-6xl mx-auto">
          <button 
            onClick={volver}
            className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-full mb-4 shadow-lg hover:bg-orange-600 transition-all transform hover:scale-105"
          >
            <FaArrowLeft className="mr-2" /> Volver
          </button>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{noticia.titulo}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-6 relative z-10">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Cabecera de metadatos */}
          <div className="p-6 md:p-8 border-b border-gray-100">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex items-center mb-2 md:mb-0">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white mr-3">
                  <span className="font-bold">{noticia.autor ? noticia.autor.charAt(0).toUpperCase() : 'C'}</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{noticia.autor || 'COONADOC'}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <FaCalendarAlt className="mr-1 text-orange-500" />
                    <span>{formatearFecha(noticia.fecha)}</span>
                    <span className="mx-2">•</span>
                    <FaClock className="mr-1 text-orange-500" />
                    <span>{tiempoLectura} min de lectura</span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <FaBookmark className="text-gray-600" />
                </button>
                <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <FaShare className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Contenido de la noticia */}
          <div className="p-6 md:p-8">
            <div className="prose prose-lg max-w-none">
              {noticia.contenido.split('\n').map((parrafo, index) => (
                parrafo ? (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {parrafo}
                  </p>
                ) : <br key={index} />
              ))}
            </div>
            
            {/* Bloque de información adicional */}
            <div className="mt-12 p-6 bg-blue-50 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-dark-800 mb-2">Sobre COONADOC</h3>
              <p className="text-dark-700">
                Somos una cooperativa de aportes y crédito que cuenta con talento humano idóneo, 
                entrega servicios integrales de manera socialmente responsable y sostenible.
              </p>
            </div>
          </div>
          
          {/* Pie de artículo */}
          <div className="bg-gray-50 p-6 md:p-8 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <button 
                onClick={volver}
                className="inline-flex items-center px-5 py-2.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-md"
              >
                <FaArrowLeft className="mr-2" /> Volver a noticias
              </button>
              
              <div className="text-right">
                <p className="text-sm text-gray-500 mb-1">¿Quieres saber más?</p>
                <a href="/contacto" className="text-blue-600 hover:underline font-medium">Contáctanos</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 