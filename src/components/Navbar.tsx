"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo and Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 101 }}>
          <Image 
            src="/images/logo.jpeg" 
            alt="Logo Ajax Mougalie" 
            width={50} 
            height={50} 
            style={{ borderRadius: '50%', border: '2px solid var(--primary)' }}
          />
          <div style={{ fontWeight: '900', fontSize: '1.5rem', fontFamily: 'Oswald', color: 'var(--text-light)', letterSpacing: '1px' }}>
            AJAX <span className="text-gradient">MOUGALIE</span>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div 
          className={`hamburger ${isOpen ? 'open' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#accueil" onClick={() => setIsOpen(false)}>Accueil</a></li>
          <li><a href="#staff" onClick={() => setIsOpen(false)}>Staff</a></li>
          <li><a href="#equipe" onClick={() => setIsOpen(false)}>L'Équipe</a></li>
          <li><a href="#galerie" onClick={() => setIsOpen(false)}>Galerie</a></li>
        </ul>
      </div>
    </nav>
  );
}
