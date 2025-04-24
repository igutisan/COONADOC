'use client';
import Link from "next/link";
import { useState, useContext } from "react";
import "../styles/Navbar.css";
import { FaChevronDown } from 'react-icons/fa';
import { MdLogin, MdLogout } from "react-icons/md";
import { AuthContext } from "../app/context/AuthContext"; // 👈 importa el contexto

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [noticiasSubmenu, setNoticiasSubmenu] = useState(false);

  const { autenticado, setAutenticado } = useContext(AuthContext); // 👈 usa el contexto

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const toggleNoticiasSubmenu = () => {
    setNoticiasSubmenu(!noticiasSubmenu);
  };

  const cerrarSesion = () => {
    const confirmar = window.confirm("¿Estás seguro que deseas cerrar sesión?");
    if (confirmar) {
      localStorage.removeItem("autenticado");
      setAutenticado(false); // 👈 actualiza el contexto
      window.location.href = "/";
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/images/image.png" alt="logoCoonadoc" />
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`navbar-links ${menuAbierto ? 'active' : ''}`}>
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/quienes-somos">Quiénes Somos</Link></li>
        <li><Link href="/afiliacion">Afiliación</Link></li>
        <li><Link href="/formatos">Formatos</Link></li>
        <li><Link href="/faq">Preguntas Frecuentes</Link></li>

        {autenticado && (
          <li className="submenu-container">
            <button 
              onClick={toggleNoticiasSubmenu} 
              className="submenu-toggle"
            >
              Noticias <FaChevronDown className={`submenu-icon ${noticiasSubmenu ? 'rotated' : ''}`} />
            </button>
            <ul className={`submenu ${noticiasSubmenu ? 'active' : ''}`}>
              <li><Link href="/noticias">Crear Noticia</Link></li>
              <li><Link href="/gestion-noticias">Gestionar Noticias</Link></li>
            </ul>
          </li>
        )}

        <li><Link href="/contacto">Contacto</Link></li>

        {!autenticado ? (
          <li>
            <Link href="/login" className="login-icon-link">
              <MdLogin size={20} />
              <span>Iniciar Sesión</span>
            </Link>
          </li>
        ) : (
          <li>
            <a onClick={cerrarSesion} className="logout-button">
              <MdLogout size={20} />
              <span>Cerrar Sesión</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
