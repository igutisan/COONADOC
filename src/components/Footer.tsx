'use client';
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/images/image.png" alt="logoCoonadoc" />
          <img src="/images/supersolidaria.png" alt="logoSupersolidaria" />
          <span>COONADOC</span>
        </div>

        <div className="footer-socials">
          <a href="/">Términos y condiciones de uso</a>
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
