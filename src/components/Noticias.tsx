"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';

interface Noticia {
  id: number;
  titulo: string;
  contenido: string;
  imagen?: string;
  autor?: string;
  fecha: string;
}

export default function Noticias() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  
  
  useEffect(() => {
    const cargarNoticias = () => {
      const noticiasGuardadas = localStorage.getItem('noticias');
      if (noticiasGuardadas) {
        try {
          const noticiasData = JSON.parse(noticiasGuardadas);
          const noticiasRecientes = [...noticiasData]
            .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
            .slice(0, 3);
          setNoticias(noticiasRecientes);
        } catch (error) {
          console.error('Error al cargar noticias:', error);
        }
      }
    };

    cargarNoticias();
    
   
    window.addEventListener('storage', cargarNoticias);
    return () => window.removeEventListener('storage', cargarNoticias);
  }, []);

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

  // Truncar texto largo
  const truncarTexto = (texto: string, longitud: number = 120) => {
    if (texto.length <= longitud) return texto;
    return texto.slice(0, longitud) + '...';
  };

  if (noticias.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-gray-500">No hay noticias disponibles en este momento.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {noticias.map(noticia => (
        <div key={noticia.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          {noticia.imagen && (
            <div className="h-48 overflow-hidden">
              <img 
                src={noticia.imagen} 
                alt={noticia.titulo} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x400?text=Noticia';
                }}
              />
            </div>
          )}
          <div className="p-5">
            <h3 className="text-xl font-bold mb-2 text-gray-800">{noticia.titulo}</h3>
            
            <div className="flex flex-wrap text-sm text-gray-500 mb-3">
              <div className="flex items-center mr-4">
                <FaCalendarAlt className="mr-1" />
                <span>{formatearFecha(noticia.fecha)}</span>
              </div>
              {noticia.autor && (
                <div className="flex items-center">
                  <FaUser className="mr-1" />
                  <span>{noticia.autor}</span>
                </div>
              )}
            </div>
            
            <p className="text-gray-600 mb-4">
              {truncarTexto(noticia.contenido)}
            </p>
            
            <Link href={`/noticias/${noticia.id}`} className="inline-block text-orange-500 hover:text-orange-600 font-medium">
              Leer más →
            </Link>
          </div>
        </div>
      ))}
      
      <div className="col-span-full mt-4 text-center">
        <Link href="/noticias" className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg">
          Ver todas las noticias
        </Link>
      </div>
    </div>
  );
}
  