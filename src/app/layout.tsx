import './globals.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthProvider } from './context/AuthContext'; // ruta corregida según estructura

export const metadata = {
  title: 'COONADOC',
  description: 'Sitio web de la cooperativa',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
