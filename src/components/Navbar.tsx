'use client';
import Link from "next/link";
import {useState} from "react";
import "../styles/Navbar.css";
import { FaChevronDown } from 'react-icons/fa';
import { MdLogin } from "react-icons/md";


export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [noticiasSubmenu, setNoticiasSubmenu] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const toggleNoticiasSubmenu = () => {
    setNoticiasSubmenu(!noticiasSubmenu);
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
        <li><Link href="/contacto">Contacto</Link></li>
        <li>
          <Link href="/login" className="login-icon-link flex items-center space-x-1">
            <MdLogin size={20} />
            <span>Iniciar Sesión</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
  