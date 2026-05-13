import Image from 'next/image';

export default function Home() {
  const allImages = [
    "WhatsApp Image 2026-05-12 at 23.02.29.jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.30 (1).jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.30.jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.31.jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.32.jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.33.jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.34 (1).jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.34.jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.35 (1).jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.35.jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.39.jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.41.jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.42.jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.43.jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.46.jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.47.jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.48.jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.49 (1).jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.49.jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.50.jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.51 (1).jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.51.jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.52.jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.55 (1).jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.55 (2).jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.55.jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.56 (1).jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.56.jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.57.jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.58.jpeg",
    "WhatsApp Image 2026-05-12 at 23.02.59.jpeg",
    "WhatsApp Image 2026-05-12 at 23.03.00.jpeg",
    "WhatsApp Image 2026-05-12 at 23.03.01.jpeg",
    "WhatsApp Image 2026-05-12 at 23.03.02.jpeg",
    "WhatsApp Image 2026-05-12 at 23.03.04.jpeg",
    "WhatsApp Image 2026-05-12 at 23.03.05.jpeg",
    "WhatsApp Image 2026-05-12 at 23.03.06 (1).jpeg",
    "WhatsApp Image 2026-05-12 at 23.03.06.jpeg",
    "WhatsApp Image 2026-05-12 at 23.03.07.jpeg"
  ];

  const featuredPlayers = allImages.slice(0, 12);
  const galleryImages = allImages.slice(12);

  const comments = [
    "DÉTERMINATION", "TALENT PUR", "LA PUISSANCE", "L'ÉLITE", 
    "VITESSE MAX", "IMBATTABLE", "ESPRIT D'ÉQUIPE", "PASSION",
    "LE GUERRIER", "STRATÈGE", "MUR INFRANCHISSABLE", "LA MAGIE"
  ];

  return (
    <main>
      {/* Hero Section PSG Style with Logo and Ken Burns zoom */}
      <section id="accueil" className="hero">
        <div className="hero-bg hero-bg-anim">
          <Image 
            src="/images/image_1.jpeg" 
            alt="Ajax Mougalie Background" 
            fill 
            style={{ objectFit: 'cover' }} 
            priority
          />
        </div>
        <div className="container hero-content animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <div className="delay-1" style={{ marginBottom: '1rem' }}>
            <Image 
              src="/images/logo.jpeg" 
              alt="Logo Central" 
              width={180} 
              height={180} 
              style={{ borderRadius: '50%', border: '4px solid var(--primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
            />
          </div>

          <h1 className="delay-2">
            ICI C&apos;EST <br />
            <span className="text-gradient">MOUNGALIE</span>
          </h1>
          <p className="delay-3" style={{ fontSize: '1.2rem', fontWeight: 300, maxWidth: '600px', marginBottom: '3rem', animation: 'floatP 6s ease-in-out infinite' }}>
            L&apos;excellence n&apos;est pas un acte, mais une habitude. Bienvenue dans l&apos;arène de l&apos;Ajax.
          </p>
          <a href="#equipe" className="btn-primary delay-3">L&apos;Équipe Première</a>
        </div>
      </section>

      {/* Team Roster Netflix Style */}
      <section id="equipe" style={{ background: 'var(--bg-dark)' }}>
        <div className="huge-title" style={{ top: '20%' }}>MOUNGALIE</div>
        <div className="container">
          <h2 className="section-title">Les Guerriers</h2>
          
          <div className="netflix-row">
            {featuredPlayers.map((img, idx) => (
              <div key={idx} className="netflix-card">
                <Image 
                  src={`/images/${img}`} 
                  alt={`Joueur ${idx + 1}`} 
                  fill 
                  className="netflix-img"
                  sizes="300px"
                />
                <div className="player-info">
                  <h3 className="player-name">N°{idx + 1}</h3>
                  <div className="player-comment">{comments[idx]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Section Netflix Style */}
      <section id="staff" style={{ background: '#001A3D', overflow: 'hidden' }}>
        <div className="huge-title">LE STAFF</div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <h2 className="section-title">Les Stratèges</h2>
          
          <div className="netflix-row" style={{ justifyContent: 'center' }}>
            <div className="netflix-card" style={{ flex: '0 0 350px' }}>
              <Image 
                src="/images/coach_melo.jpeg" 
                alt="Coach Melo" 
                fill 
                className="netflix-img"
                sizes="350px"
              />
              <div className="player-info">
                <h3 className="player-name">COACH MELO</h3>
                <div className="player-comment">LE MASTERMIND</div>
              </div>
            </div>

            <div className="netflix-card" style={{ flex: '0 0 350px' }}>
              <Image 
                src="/images/coach_profina.jpeg" 
                alt="Coach Profina" 
                fill 
                className="netflix-img"
                sizes="350px"
              />
              <div className="player-info">
                <h3 className="player-name">COACH PREFINA</h3>
                <div className="player-comment">LE MENTOR</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Huge Gallery Masonry */}
      <section id="galerie" style={{ background: '#000' }}>
        <div className="huge-title" style={{ top: '50%', color: 'rgba(200, 16, 46, 0.08)' }}>PASSION</div>
        <div className="container">
          <h2 className="section-title">Au Coeur de l&apos;Action</h2>
          
          <div className="gallery-masonry">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="gallery-item">
                <Image 
                  src={`/images/${img}`} 
                  alt={`Galerie ${idx}`} 
                  width={500}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="gallery-overlay">
                  <div className="gallery-text">ÉNORME</div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

    </main>
  );
}
