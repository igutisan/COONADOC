import "../styles/Contacto.css";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram ,FaWhatsapp } from 'react-icons/fa';

export default function Contacto() {
    return (
      <div className="social-icons">
          <a href="https://www.facebook.com/COONADOC/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.youtube.com/channel/UCV9denEEUEbxAt2uLwbnaDg" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://x.com/Coonadoc" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/coopcoonadoc/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://api.whatsapp.com/send?phone=573115019158" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
    );
}
  