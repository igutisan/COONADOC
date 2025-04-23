"use client";

import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function LoginPage() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {setAutenticado} = useContext(AuthContext);
  const router = useRouter();
  

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Datos de ejemplo: usuario admin / contraseña admin123
    if (usuario === 'admin' && password === 'admin123') {
      localStorage.setItem('autenticado', 'true');
      setAutenticado(true);
      router.push('/');
    } else {
      setError('Credenciales inválidas');
      setUsuario('');
      setPassword('');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h1>
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700">
          Ingresar
        </button>
      </form>
    </div>
  );
}
