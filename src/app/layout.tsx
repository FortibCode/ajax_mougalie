import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Ajax de Moungalie | Site Officiel',
  description: 'Bienvenue sur le site officiel de l\'équipe de football Ajax de Mougalie. Découvrez nos joueurs, nos entraîneurs et nos dernières actualités.',
  icons: {
    icon: '/images/logo.jpeg',
    apple: '/images/logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
        
        <footer style={{ background: '#0b1120', padding: '3rem 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="container">
            <h3 style={{ marginBottom: '1rem', fontFamily: 'Oswald', letterSpacing: '2px' }}>AJAX DE MOUGALIE</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>© 2026 Ajax de Moungalie. Tous droits réservés.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
