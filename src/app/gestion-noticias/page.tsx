"use client";

import { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaCalendarAlt, FaUser, FaLink } from 'react-icons/fa';
import Link from 'next/link';

interface Noticia {
  id: number;
  titulo: string;
  contenido: string;
  imagen?: string;
  autor?: string;
  fecha: string;
}

export default function GestionNoticias() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [noticiaEditando, setNoticiaEditando] = useState<Noticia | null>(null);
  const [mostrarModal, setMostrarModal] = useState(false);


  useEffect(() => {
    const cargarNoticias = () => {
      const noticiasGuardadas = localStorage.getItem('noticias');
      if (noticiasGuardadas) {
        try {
          const noticiasData = JSON.parse(noticiasGuardadas);
          
          const noticiasOrdenadas = [...noticiasData].sort((a, b) => {
            const fechaA = new Date(a.fecha).getTime();
            const fechaB = new Date(b.fecha).getTime();
            return fechaB - fechaA;
          });
          setNoticias(noticiasOrdenadas);
        } catch (error) {
          console.error('Error al cargar noticias:', error);
        }
      }
    };

    cargarNoticias();
    
    
    window.addEventListener('storage', cargarNoticias);
    return () => window.removeEventListener('storage', cargarNoticias);
  }, []);


  const guardarNoticias = (noticiasActualizadas: Noticia[]) => {
    localStorage.setItem('noticias', JSON.stringify(noticiasActualizadas));
    setNoticias(noticiasActualizadas);
   
    window.dispatchEvent(new Event('storage'));
  };

  
  const eliminarNoticia = (id: number) => {
    if (confirm('¿Estás seguro de que deseas eliminar esta noticia?')) {
      const noticiasActualizadas = noticias.filter(noticia => noticia.id !== id);
      guardarNoticias(noticiasActualizadas);
    }
  };

  
  const editarNoticia = (noticia: Noticia) => {
    setNoticiaEditando({ ...noticia });
    setMostrarModal(true);
  };

 
  const guardarCambios = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noticiaEditando) return;

    const noticiasActualizadas = noticias.map(noticia => 
      noticia.id === noticiaEditando.id ? noticiaEditando : noticia
    );
    
    guardarNoticias(noticiasActualizadas);
    setMostrarModal(false);
    setNoticiaEditando(null);
  };


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

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Gestión de Noticias</h1>
        <Link href="/noticias">
          <span className="bg-orange-700 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
            Crear Nueva Noticia
          </span>
        </Link>
      </div>

      {noticias.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-gray-500 mb-4">No hay noticias publicadas todavía.</p>
          <Link href="/noticias">
            <span className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
              Crear mi primera noticia
            </span>
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Noticia
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                  Detalles
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {noticias.map((noticia) => (
                <tr key={noticia.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-start">
                      {noticia.imagen && (
                        <img 
                          src={noticia.imagen} 
                          alt={noticia.titulo}
                          className="h-16 w-16 object-cover rounded mr-3"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=Error';
                          }}
                        />
                      )}
                      <div>
                        <div className="text-sm font-medium text-gray-900">{noticia.titulo}</div>
                        <div className="text-sm text-gray-500 line-clamp-2">{noticia.contenido}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <div className="text-sm text-gray-500 flex flex-col space-y-1">
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2 text-gray-400" />
                        {formatearFecha(noticia.fecha)}
                      </div>
                      {noticia.autor && (
                        <div className="flex items-center">
                          <FaUser className="mr-2 text-gray-400" />
                          {noticia.autor}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => editarNoticia(noticia)}
                      className="text-indigo-600 hover:text-indigo-900 mx-1"
                    >
                      <FaEdit className="inline" /> Editar
                    </button>
                    <button
                      onClick={() => eliminarNoticia(noticia.id)}
                      className="text-red-600 hover:text-red-900 mx-1"
                    >
                      <FaTrash className="inline" /> Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal de edición */}
      {mostrarModal && noticiaEditando && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Editar Noticia</h2>
              <form onSubmit={guardarCambios}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    value={noticiaEditando.titulo}
                    onChange={(e) => setNoticiaEditando({...noticiaEditando, titulo: e.target.value})}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contenido</label>
                  <textarea
                    className="w-full border border-gray-300 rounded-lg p-2"
                    rows={5}
                    value={noticiaEditando.contenido}
                    onChange={(e) => setNoticiaEditando({...noticiaEditando, contenido: e.target.value})}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Imagen URL</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    value={noticiaEditando.imagen || ''}
                    onChange={(e) => setNoticiaEditando({...noticiaEditando, imagen: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Autor</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-2"
                      value={noticiaEditando.autor || ''}
                      onChange={(e) => setNoticiaEditando({...noticiaEditando, autor: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Fecha</label>
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded-lg p-2"
                      value={noticiaEditando.fecha}
                      onChange={(e) => setNoticiaEditando({...noticiaEditando, fecha: e.target.value})}
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
                    onClick={() => {
                      setMostrarModal(false);
                      setNoticiaEditando(null);
                    }}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Guardar Cambios
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 