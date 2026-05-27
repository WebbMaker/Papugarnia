/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Facebook, Instagram, Shield, Award } from 'lucide-react';
import { SOCIAL_LINKS, BRAND_NAME, ADDRESS, PHONE, HOURS, logoImage } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-brand-cream pt-20 pb-8 border-t border-white/10 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Presentation */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-cream flex items-center justify-center overflow-hidden border border-white/10 shadow-sm">
                  <img
                    src={logoImage}
                    alt="Papugarnia Logo"
                    className="w-full h-full object-contain p-0.5"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif tracking-tight text-lg font-bold text-[#C08E3E] leading-none">
                    PAPUGARNIA
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-brand-cream/60 leading-none mt-1">
                    O L S Z T Y N
                  </span>
                </div>
              </div>

              <p className="text-sm font-light leading-relaxed text-brand-cream/60 max-w-sm font-sans mt-4">
                Całoroczna, unikalna atrakcja przyrodnicza i minizoo bez klatek. Poczuj magię bliskiego kontaktu z naturą i egzotycznymi, kolorowymi mieszkańcami.
              </p>
            </div>

            {/* Quick Badges inside footer */}
            <div className="flex gap-4 mt-8">
              <div className="flex items-center gap-1.5 opacity-60">
                <Shield className="w-4 h-4 text-brand-accent" />
                <span className="font-mono text-[9px] uppercase tracking-wider">
                  Certyfikowany Opiekun
                </span>
              </div>
              <div className="flex items-center gap-1.5 opacity-60">
                <Award className="w-4 h-4 text-brand-accent" />
                <span className="font-mono text-[9px] uppercase tracking-wider">
                  Atrakcja Roku Olsztyn
                </span>
              </div>
            </div>
          </div>

          {/* Quick Details Desk */}
          <div className="md:col-span-4 flex flex-col gap-4 font-sans text-sm font-light text-brand-cream/70">
            <span className="font-mono text-[9px] uppercase tracking-widest text-brand-gold font-bold">
              SZCZEGÓŁY KONTAKTU
            </span>
            <p>
              <strong className="text-white font-medium block mb-1">Miejsce:</strong>
              {ADDRESS} • Olsztyn, woj. warmińsko-mazurskie
            </p>
            <p>
              <strong className="text-white font-medium block mb-1">Infolinia:</strong>
              <a href={`tel:${PHONE.replace(/\s+/g, '')}`} className="hover:text-brand-accent transition-colors font-mono">
                {PHONE}
              </a>
            </p>
            <p>
              <strong className="text-white font-medium block mb-1">Godziny i warunki:</strong>
              {HOURS} • W pełni zadaszony i klimatyzowany obiekt całoroczny.
            </p>
          </div>

          {/* Dynamic Social Links Block - Highlighted per user specification */}
          <div className="md:col-span-3 flex flex-col justify-start md:items-end gap-6">
            <div className="text-left md:text-right">
              <span className="font-mono text-[9px] uppercase tracking-widest text-brand-gold font-bold block mb-4">
                ŚLEDŹ NAS
              </span>

              {/* TWO SPECIFIC SOCIAL ICONS REQUESTED */}
              <div className="flex gap-4 md:justify-end">
                {/* Facebook Trigger */}
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Wejdź na profil Papugarni na Facebooku"
                  className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-brand-cream hover:text-brand-accent hover:border-brand-accent cursor-pointer transition-all duration-300 transform hover:scale-105"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                {/* Instagram Trigger */}
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Wejdź na profil Papugarni na Instagramie"
                  className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-brand-cream hover:text-brand-accent hover:border-brand-accent cursor-pointer transition-all duration-300 transform hover:scale-105"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <p className="text-[11px] text-brand-cream/40 text-left md:text-right leading-relaxed max-w-[200px]">
              Kliknij ikonki powyżej, aby przenieść się do naszych oficjalnych profili społecznościowych.
            </p>
          </div>

        </div>

        {/* Legal Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-brand-cream/40">
          <p>© {currentYear} {BRAND_NAME}. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-6">
            <span className="hover:text-brand-accent transition-colors">
              Zintegrowana witryna luksusowa
            </span>
            <span className="hover:text-brand-accent transition-colors">
              Inspiracja Louis Ansa
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
