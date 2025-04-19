'use client';
import Link from "next/link";
import {useState} from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const[menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
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
        <li><Link href="/Noticias">Noticias</Link></li>
        <li><Link href="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}
  