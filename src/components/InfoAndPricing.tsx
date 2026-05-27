/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Clock, MapPin, Phone, MessageSquare, Star, Sparkles, CheckSquare } from 'lucide-react';
import { ADDRESS, REGION, PHONE, HOURS, GOOGLE_RATING, OPINIONS_COUNT, REVIEWS, PRICING_INFO } from '../data';

export default function InfoAndPricing() {
  return (
    <section id="visit" className="py-24 md:py-32 bg-brand-cream relative">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Underline Divider */}
        <div className="w-full h-[1px] bg-brand-dark/10 mb-20" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-start">
          
          {/* Left Block: Business Desk (Contact, Hours, safe food) */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold">
                INFORMACJE DLA ODWIEDZAJĄCYCH
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight text-brand-green leading-none mt-4">
                GODZINY, ADRES <br />
                <span className="italic font-light text-brand-accent">& REGUŁY WIZYTY</span>
              </h2>
            </div>

            {/* Custom Stationeries Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Hours Card */}
              <div className="bg-brand-lightCream border border-brand-dark/15 p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-brand-green/5 flex items-center justify-center mb-4">
                    <Clock className="w-5 h-5 text-brand-green" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brand-green mb-1">
                    Godziny Otwarcia
                  </h4>
                  <p className="font-mono text-xs text-brand-gold uppercase tracking-widest font-semibold mb-3">
                    Cały Tydzień
                  </p>
                  <p className="text-xl font-serif text-brand-dark/95 font-medium">
                    10:00 – 19:00
                  </p>
                </div>
                <span className="text-[10px] text-brand-dark/40 font-mono mt-4">
                  Poniedziałek – Niedziela
                </span>
              </div>

              {/* Feed Card */}
              <div className="bg-brand-lightCream border border-brand-dark/15 p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-brand-green/5 flex items-center justify-center mb-4">
                    <Sparkles className="w-5 h-5 text-brand-green" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brand-green mb-1">
                    Pokarm dla Zwierząt
                  </h4>
                  <p className="font-mono text-xs text-brand-accent uppercase tracking-widest font-semibold mb-3">
                    Tylko na miejscu
                  </p>
                  <p className="text-xs text-brand-dark/75 leading-relaxed font-sans">
                    Dbamy o bezwzględny rygor zdrowotny. Obowiązuje kategoryczny zakaz wnoszenia własnego pożywienia. Specjalna, atestowana karma do karmienia z ręki sprzedawana jest przy kasie.
                  </p>
                </div>
                <span className="text-[10px] text-brand-dark/40 font-mono mt-4">
                  Wsparcie dobrobytu flory & fauny
                </span>
              </div>

            </div>

            {/* Google Testimonials Column */}
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-brand-dark/10 pb-4">
                <MessageSquare className="w-5 h-5 text-brand-gold" />
                <h3 className="font-serif text-xl font-bold text-brand-green">
                  Co mówią nasi goście?
                </h3>
              </div>

              <div className="space-y-6">
                {REVIEWS.map(review => (
                  <div key={review.id} className="border-l-2 border-brand-accent/40 pl-5 pt-1">
                    <p className="italic text-brand-dark/85 text-sm font-light leading-relaxed font-sans mb-2">
                      „{review.content}”
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-xs font-bold text-brand-green">
                        {review.author}
                      </span>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-brand-accent fill-brand-accent" />
                        ))}
                        <span className="font-mono text-[9px] text-brand-dark/50 ml-1">
                          ({review.source})
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Block: Coordinate Map representation & Quick facts */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Direct Contact Block */}
            <div className="bg-[#0D2C1E] text-brand-cream border border-brand-emerald p-8 rounded-3xl relative overflow-hidden">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#C08E3E] block mb-3">
                KASY & RESERWACJE GRUPOWE
              </span>
              <h3 className="font-serif text-3xl font-light tracking-tight text-white mb-6">
                Chcesz nas odwiedzić? <br />
                <span className="font-bold italic text-brand-accent">Zadzwoń do nas</span>
              </h3>

              <div className="space-y-4">
                <a
                  href={`tel:${PHONE.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <Phone className="w-5 h-5 text-brand-accent" />
                  <div>
                    <span className="font-mono text-[10px] uppercase text-brand-cream/50 block">
                      Infolinia i Kontakt
                    </span>
                    <span className="font-mono text-md font-bold text-brand-cream block">
                      {PHONE}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                  <MapPin className="w-5 h-5 text-brand-accent" />
                  <div>
                    <span className="font-mono text-[10px] uppercase text-brand-cream/50 block">
                      Nasz Adres
                    </span>
                    <span className="font-serif text-sm font-medium text-brand-cream block">
                      {ADDRESS}, Olsztyn
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 text-[11px] text-brand-cream/65 leading-relaxed">
                * Nie prowadzimy gastronomii dla ludzi. Zachęcamy do zaplanowania obfitego posiłku przed wizytą, zwłaszcza w przypadku grup szkolnych.
              </div>
            </div>

            {/* Custom Vector Style Map Mockup */}
            <div className="bg-brand-lightCream border border-brand-dark/15 p-6 rounded-3xl">
              <div className="flex justify-between items-center mb-4 border-b border-brand-dark/10 pb-3">
                <span className="font-mono text-[9px] text-[#4F5E52] uppercase tracking-wider font-bold">
                  Interaktywna Lokalizacja
                </span>
                <span className="font-mono text-[9px] text-brand-accent uppercase tracking-wider">
                  Olsztyn • woj. warmińsko-mazurskie
                </span>
              </div>
              
              {/* Interactive Google Map Container */}
              <div className="aspect-[16/10] bg-brand-dark rounded-xl relative overflow-hidden border border-brand-dark/40 shadow-inner group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2358.9818847844005!2d20.492576912389146!3d53.7719943538466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e27ec6ee7dfebf%3A0xe543fa0df67f671c!2sPapugarnia%20Olsztyn!5e0!3m2!1spl!2spl!4v1717000000000!5m2!1spl!2spl"
                  className="w-full h-full border-0 grayscale-[25%] contrast-[110%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  title="Interaktywna mapa Papugarni Olsztyn"
                ></iframe>

                {/* Elegant overlay panel for directions and visual harmony */}
                <div className="absolute bottom-3 right-3 bg-[#0D2C1E]/95 border border-[#15422F] px-3 py-1.5 rounded-lg shadow-md backdrop-blur-md flex items-center gap-2 pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping" />
                  <span className="font-mono text-[8px] text-[#C08E3E] tracking-widest uppercase font-semibold">
                    MAPA NAŻYWO
                  </span>
                </div>
              </div>

              {/* General check details */}
              <div className="mt-4 flex flex-col gap-2">
                {[
                  "Ułatwienia dostępu dla wózków dziecięcych i inwalidzkich",
                  "Bezpłatny parking samochodowy i autobusowy",
                  "Ciepły zadaszony budynek na deszczowe i mroźnie dni"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckSquare className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                    <span className="text-xs text-brand-dark/75 font-light">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
