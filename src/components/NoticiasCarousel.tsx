"use client";

import { useState, useEffect, useCallback } from 'react';
import { FaCalendarAlt, FaUser, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

interface Noticia {
  id: number;
  titulo: string;
  contenido: string;
  imagen?: string;
  autor?: string;
  fecha: string;
}

export default function NoticiasCarousel() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Cargar noticias desde localStorage
  useEffect(() => {
    const cargarNoticias = () => {
      const noticiasGuardadas = localStorage.getItem('noticias');
      if (noticiasGuardadas) {
        try {
          const noticiasData = JSON.parse(noticiasGuardadas);
          // Ordenar por fecha y limitar a 5 noticias recientes
          const noticiasRecientes = [...noticiasData]
            .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
            .slice(0, 5);
          setNoticias(noticiasRecientes);
        } catch (error) {
          console.error('Error al cargar noticias:', error);
        }
      }
    };

    cargarNoticias();
    
    // Actualizar cuando cambie el localStorage
    window.addEventListener('storage', cargarNoticias);
    return () => window.removeEventListener('storage', cargarNoticias);
  }, []);

  // Auto-avance del carrusel cada 5 segundos
  useEffect(() => {
    if (noticias.length <= 1) return;
    
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 7000);
    
    return () => clearInterval(interval);
  }, [noticias.length, activeIndex, isAnimating]);

  // Formatear fecha para mostrar
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

  // Truncar texto para el resumen
  const truncarTexto = (texto: string, longitud: number = 180) => {
    if (texto.length <= longitud) return texto;
    return texto.slice(0, longitud) + '...';
  };

  // Navegación del carrusel
  const prevSlide = useCallback(() => {
    if (isAnimating || noticias.length <= 1) return;
    
    setIsAnimating(true);
    setActiveIndex((current) => {
      const newIndex = current === 0 ? noticias.length - 1 : current - 1;
      return newIndex;
    });
    
    setTimeout(() => setIsAnimating(false), 500);
  }, [noticias.length, isAnimating]);

  const nextSlide = useCallback(() => {
    if (isAnimating || noticias.length <= 1) return;
    
    setIsAnimating(true);
    setActiveIndex((current) => {
      const newIndex = current === noticias.length - 1 ? 0 : current + 1;
      return newIndex;
    });
    
    setTimeout(() => setIsAnimating(false), 500);
  }, [noticias.length, isAnimating]);

  // Soporte para gestos táctiles
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Si no hay noticias
  if (noticias.length === 0) {
    return (
      <div className="bg-gray-100 rounded-lg p-8 text-center">
        <p className="text-gray-500">No hay noticias disponibles en este momento...</p>
      </div>
    );
  }

  // Si solo hay una noticia
  if (noticias.length === 1) {
    const noticia = noticias[0];
    return (
      <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: noticia.imagen 
              ? `url(${noticia.imagen})` 
              : 'url(https://via.placeholder.com/1200x600?text=Noticia)' 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h2 className="text-3xl font-bold mb-2">{noticia.titulo}</h2>
            <div className="flex flex-wrap items-center text-sm mb-4">
              <span className="flex items-center mr-4">
                <FaCalendarAlt className="mr-1" />
                {formatearFecha(noticia.fecha)}
              </span>
              {noticia.autor && (
                <span className="flex items-center">
                  <FaUser className="mr-1" />
                  {noticia.autor}
                </span>
              )}
            </div>
            <p className="text-gray-200 mb-4">{truncarTexto(noticia.contenido)}</p>
            <Link 
              href={`/noticias/${noticia.id}`} 
              className="inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition duration-300"
            >
              Leer más
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Múltiples noticias - carrusel
  return (
    <div 
      className="relative w-full h-96 overflow-hidden rounded-xl shadow-xl"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {noticias.map((noticia, index) => (
          <div 
            key={noticia.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{ 
              backgroundImage: noticia.imagen 
                ? `url(${noticia.imagen})` 
                : 'url(https://via.placeholder.com/1200x600?text=Noticia)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">{noticia.titulo}</h2>
              <div className="flex flex-wrap items-center text-sm mb-4">
                <span className="flex items-center mr-4">
                  <FaCalendarAlt className="mr-1" />
                  {formatearFecha(noticia.fecha)}
                </span>
                {noticia.autor && (
                  <span className="flex items-center">
                    <FaUser className="mr-1" />
                    {noticia.autor}
                  </span>
                )}
              </div>
              <p className="text-gray-200 mb-4">{truncarTexto(noticia.contenido)}</p>
              <Link 
                href={`/noticias/${noticia.id}`}
                className="inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition duration-300"
              >
                Leer más
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Controles de navegación */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors z-20"
        onClick={prevSlide}
        aria-label="Noticia anterior"
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors z-20"
        onClick={nextSlide}
        aria-label="Noticia siguiente"
      >
        <FaChevronRight />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {noticias.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === activeIndex ? 'bg-white' : 'bg-white/40'
            }`}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setActiveIndex(index);
                setTimeout(() => setIsAnimating(false), 500);
              }
            }}
            aria-label={`Ir a noticia ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 