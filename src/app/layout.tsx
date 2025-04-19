import './globals.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

export const metadata = {
  title: 'COONADOC',
  description: 'Sitio web de la cooperativa',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
