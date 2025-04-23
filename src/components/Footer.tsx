'use client';
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img id="logo1" src="/images/image.png" alt="logoCoonadoc" />
          <img id="logo2" src="/images/superSolidaria.png" alt="logoSupersolidaria" />
        </div>

        <div className="footer-socials">
          <a href="/">Política Integral</a>
          -
          <a href="/afiliacion">Privacidad de datos personales</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} COONADOC - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
