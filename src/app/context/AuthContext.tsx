'use client';
import { createContext, useState, useEffect, ReactNode } from 'react';

type AuthContextType = {
  autenticado: boolean;
  setAutenticado: (value: boolean) => void;
};

export const AuthContext = createContext<AuthContextType>({
  autenticado: false,
  setAutenticado: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [autenticado, setAutenticado] = useState(false);

  useEffect(() => {
    const sesion = localStorage.getItem('autenticado');
    setAutenticado(sesion === 'true');
  }, []);

  return (
    <AuthContext.Provider value={{ autenticado, setAutenticado }}>
      {children}
    </AuthContext.Provider>
  );
};
