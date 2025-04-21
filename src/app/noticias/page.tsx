export default function NoticiasPage() {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Crear Noticia</h1>
  
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
              <input
                type="text"
                placeholder="Título de la noticia"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contenido</label>
              <textarea
                rows={5}
                placeholder="Escribe el contenido aquí..."
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Imagen destacada (URL)</label>
              <input
                type="text"
                placeholder="https://ejemplo.com/imagen.jpg"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Autor</label>
                <input
                  type="text"
                  placeholder="Nombre del autor"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de publicación</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
  
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-xl transition duration-300 shadow-md"
              >
                Publicar Noticia
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  