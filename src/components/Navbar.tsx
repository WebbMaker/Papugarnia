/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS, PHONE, BRAND_NAME, logoImage } from '../data';

export default function Navbar() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-brand-dark/10 bg-brand-cream/80 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo - Louis Ansa styled Minimalist Editorial */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleScrollTo('hero')}>
          <div className="w-12 h-12 rounded-xl bg-brand-cream flex items-center justify-center overflow-hidden border border-brand-dark/10 shadow-sm hover:scale-105 transition-transform duration-300">
            <img
              src={logoImage}
              alt="Papugarnia Logo"
              className="w-full h-full object-contain p-0.5"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-tight text-md font-bold text-brand-green leading-none">
              PAPUGARNIA
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-gold leading-none mt-1">
              O L S Z T Y N
            </span>
          </div>
        </div>

        {/* Minimalist Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'O nas', target: 'about' },
            { label: 'Doświadczenia', target: 'experiences' },
            { label: 'Gatunki', target: 'species' },
            { label: 'Wizyta & Cennik', target: 'visit' },
          ].map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleScrollTo(item.target)}
              className="text-xs uppercase font-mono tracking-widest text-brand-dark/80 hover:text-brand-accent transition-colors duration-300 cursor-pointer relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-brand-accent hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Blocks - Telephone & Social Quick-Links */}
        <div className="flex items-center gap-6">
          <a
            href={`tel:${PHONE.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full border border-brand-green/20 flex items-center justify-center group-hover:border-brand-accent transition-colors duration-300">
              <Phone className="w-3.5 h-3.5 text-brand-green group-hover:text-brand-accent transition-colors" />
            </div>
            <span className="font-mono text-xs text-brand-green font-medium group-hover:text-brand-accent transition-colors hidden sm:inline">
              {PHONE}
            </span>
          </a>

          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1.5 bg-brand-green hover:bg-brand-accent text-brand-cream py-2 px-4 rounded-full font-mono text-[10px] tracking-widest uppercase transition-all duration-300 shadow-sm"
          >
            SPOŁECZNOŚĆ
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </header>
  );
}
