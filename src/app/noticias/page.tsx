"use client";
import { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaImage, FaLink, FaUpload } from 'react-icons/fa';

interface Noticia {
  id: number;
  titulo: string;
  contenido: string;
  imagen?: string;
  autor?: string;
  fecha: string;
}

export default function NoticiasPage() {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [imagen, setImagen] = useState('');
  const [autor, setAutor] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');
  const [cargandoImagen, setCargandoImagen] = useState(false);
  const [modoImagen, setModoImagen] = useState<'url' | 'archivo'>('url');
  const router = useRouter();

  //Función para redirig si no esta logeado como admin
  useEffect(() => {
    const autenticado = localStorage.getItem('autenticado');
    if (autenticado !== 'true') {
      router.push('/login');
    }
  }, []);

  // Función para convertir archivo a base64
  const convertirArchivoABase64 = (archivo: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  // Manejar carga de imagen desde dispositivo
  const manejarCargaImagen = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const archivos = e.target.files;
    if (!archivos || archivos.length === 0) return;

    const archivo = archivos[0];
    
    // Validar que sea una imagen
    if (!archivo.type.startsWith('image/')) {
      alert('Por favor selecciona un archivo de imagen válido (JPG, PNG, etc.)');
      return;
    }
    
    // Validar tamaño (máx. 5MB)
    if (archivo.size > 5 * 1024 * 1024) {
      alert('La imagen es demasiado grande. El tamaño máximo es 5MB.');
      return;
    }

    try {
      setCargandoImagen(true);
      const base64 = await convertirArchivoABase64(archivo);
      setImagen(base64);
    } catch (error) {
      console.error('Error al convertir la imagen:', error);
      alert('Error al procesar la imagen. Por favor intenta con otra.');
    } finally {
      setCargandoImagen(false);
    }
  };

  const publicarNoticia = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!titulo.trim() || !contenido.trim()) {
      alert('Por favor completa al menos el título y el contenido');
      return;
    }

    const nuevaNoticia: Noticia = {
      id: Date.now(),
      titulo,
      contenido,
      imagen: imagen || undefined,
      autor: autor || undefined,
      fecha: new Date().toISOString().split('T')[0]
    };

    // Guardar en localStorage
    try {
      const noticiasGuardadas = localStorage.getItem('noticias');
      let noticias: Noticia[] = [];
      
      if (noticiasGuardadas) {
        noticias = JSON.parse(noticiasGuardadas);
      }
      
      noticias.push(nuevaNoticia);
      localStorage.setItem('noticias', JSON.stringify(noticias));
      
      setTitulo('');
      setContenido('');
      setImagen('');
      setAutor('');
      
      setMensajeExito('¡Noticia publicada con éxito!');
      setTimeout(() => {
        setMensajeExito('');
      }, 3000);
    } catch (error) {
      console.error('Error al guardar la noticia:', error);
      alert('Ha ocurrido un error al guardar la noticia');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Crear Noticia</h1>

        {mensajeExito && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 text-center">
            {mensajeExito}
          </div>
        )}

        <form className="space-y-5" onSubmit={publicarNoticia}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
            <input
              type="text"
              placeholder="Título de la noticia"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contenido</label>
            <textarea
              rows={5}
              placeholder="Escribe el contenido aquí..."
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={contenido}
              onChange={(e) => setContenido(e.target.value)}
              required
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-700">Imagen destacada</label>
              <div className="flex space-x-2">
                <button 
                  type="button"
                  onClick={() => setModoImagen('url')}
                  className={`text-xs px-2 py-1 rounded ${modoImagen === 'url' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                  <FaLink className="inline mr-1" /> URL
                </button>
                <button 
                  type="button"
                  onClick={() => setModoImagen('archivo')}
                  className={`text-xs px-2 py-1 rounded ${modoImagen === 'archivo' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                  <FaUpload className="inline mr-1" /> Subir archivo
                </button>
              </div>
            </div>

            {modoImagen === 'url' ? (
              <input
                type="text"
                placeholder="https://ejemplo.com/imagen.jpg"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={imagen}
                onChange={(e) => setImagen(e.target.value)}
              />
            ) : (
              <div className="mt-1">
                <label 
                  className="flex flex-col items-center px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50"
                >
                  <span className="flex items-center space-x-2">
                    <FaImage className="text-gray-400" />
                    <span className="text-gray-600">
                      {cargandoImagen ? 'Procesando imagen...' : 'Selecciona una imagen o arrástrala aquí'}
                    </span>
                  </span>
                  <input 
                    type="file" 
                    className="hidden" 
                    accept="image/*"
                    onChange={manejarCargaImagen}
                    disabled={cargandoImagen}
                  />
                </label>
              </div>
            )}

            {imagen && (
              <div className="mt-2">
                <p className="text-sm text-gray-500 mb-1">Vista previa:</p>
                <div className="relative w-full h-40 overflow-hidden rounded-lg border border-gray-300">
                  <img 
                    src={imagen} 
                    alt="Vista previa" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x250?text=Error+de+imagen';
                    }}
                  />
                  <button
                    type="button"
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-75 hover:opacity-100"
                    onClick={() => setImagen('')}
                  >
                    ×
                  </button>
                </div>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Autor</label>
            <input
              type="text"
              placeholder="Nombre del autor"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
            />
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-xl transition duration-300 shadow-md"
              disabled={cargandoImagen}
            >
              {cargandoImagen ? 'Procesando...' : 'Publicar Noticia'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
  