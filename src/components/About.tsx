/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Check, ShieldAlert, Umbrella, Sparkles } from 'lucide-react';
import { familyParrotsImage, PRICING_INFO } from '../data';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in left and right column asymmetrically on scroll
      gsap.fromTo(
        leftColRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        rightColRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'top 25%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-brand-lightCream relative overflow-hidden"
    >
      {/* Decorative large serif letter "P" in the background */}
      <div className="absolute top-10 right-[-5%] text-[40vw] font-serif font-black text-brand-dark/[0.02] select-none pointer-events-none leading-none">
        P
      </div>

      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
        
        {/* Left Column: Manifesto Quote & Image Container */}
        <div ref={leftColRef} className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold">
              NASZA FILOZOFIA
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-brand-green leading-[1.1] mt-4 mb-8">
              Zwierzę jako przyjaciel, <br />
              <span className="italic font-light text-brand-accent">natura na wyciągnięcie dłoni</span>
            </h2>
            <blockquote className="border-l-2 border-brand-accent pl-6 italic text-brand-dark/80 text-lg md:text-xl font-serif leading-relaxed mb-8">
              „Papugarnia to przestrzeń wolna od klatek. Ptaki są u nas gospodarzami, latają swobodnie w wielkiej, zrewitalizowanej hali i chętnie nawiązują autentyczne, radosne więzi z ludźmi.”
            </blockquote>
          </div>

          {/* Overlapping, asymmetric photo collage style */}
          <div className="relative mt-8 group overflow-hidden rounded-3xl border border-brand-dark/15 aspect-[4/3] shadow-lg">
            <img
              src={familyParrotsImage}
              alt="Interakcja z egzotycznymi ptakami w Olsztynie"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Elegant contextual tag styled as an overlay badge */}
            <div className="absolute bottom-6 left-6 bg-brand-dark/80 backdrop-blur-md px-4 py-2.5 rounded-xl text-brand-cream border border-white/10 flex items-center gap-2">
              <Umbrella className="w-4 h-4 text-brand-accent" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#FAF8F4]">
                Atrakcja pod dachem • Na każdą pogodę
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Key Details & Special features */}
        <div ref={rightColRef} className="lg:col-span-6 flex flex-col justify-center gap-8 pl-0 lg:pl-6">
          
          {/* Main paragraphs */}
          <div className="prose text-brand-dark/85 font-light leading-relaxed text-base space-y-6">
            <p>
              Papugarnia Olsztyn to wyjątkowe minizoo i ekosystem przyrodniczy stworzony z myślą o bezpośrednich, wolnych interakcjach z naturą. Przestrzeń jest całkowicie zadaszona, ogrzewana i bezpieczna dla zwiedzających bez względu na pory roku czy pogodę na zewnątrz.
            </p>
            <p>
              Niezależnie od tego, czy planujesz emocjonującą wizytę z najmłodszymi pociechami, wycieczkę szkolną o walorach głęboko edukacyjnych, czy po prostu luksusową chwilę relaksu w zieleni – u nas znajdziesz radosną i angażującą bliskość flory i fauny.
            </p>
          </div>

          {/* Fact items with dynamic layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            
            {/* Fact 1 */}
            <div className="p-5 bg-brand-cream border border-brand-dark/15 rounded-2xl flex flex-col justify-between">
              <div>
                <Check className="w-5 h-5 text-brand-accent mb-3" />
                <h4 className="font-serif text-lg font-bold text-brand-green mb-1">
                  Bezpieczna Karma
                </h4>
                <p className="text-xs text-brand-dark/75 leading-relaxed">
                  Nie serwujemy jedzenia dla ludzi. Na miejscu kupisz wyłącznie atestowaną, zdrową karmę zaprojektowaną dla ptasich żołądków do samodzielnego karmienia.
                </p>
              </div>
            </div>

            {/* Fact 2 */}
            <div className="p-5 bg-brand-cream border border-brand-dark/15 rounded-2xl flex flex-col justify-between">
              <div>
                <ShieldAlert className="w-5 h-5 text-brand-accent mb-3" />
                <h4 className="font-serif text-lg font-bold text-brand-green mb-1">
                  Nakaz Zdjęcia Biżuterii
                </h4>
                <p className="text-xs text-brand-dark/75 leading-relaxed">
                  Nasi upierzeni spryciarze uwielbiają błyszczące guziki, kolczyki i pierścionki! Prosimy o zdjęcie ozdób przed wejściem na halę wolnego obcowania.
                </p>
              </div>
            </div>

            {/* Fact 3 */}
            <div className="p-5 bg-brand-cream border border-brand-dark/15 rounded-2xl flex flex-col justify-between">
              <div>
                <Sparkles className="w-5 h-5 text-brand-accent mb-3" />
                <h4 className="font-serif text-lg font-bold text-brand-green mb-1">
                  Świętujemy Wspólnie
                </h4>
                <p className="text-xs text-brand-dark/75 leading-relaxed">
                  Z pasją celebrujemy święta kalendarzowe na naszych mediach społecznościowych, wspólnie organizując unikalne wydarzenia edukacyjno-rozrywkowe.
                </p>
              </div>
            </div>

            {/* Fact 4 */}
            <div className="p-5 bg-[#0D2C1E] text-brand-cream rounded-2xl flex flex-col justify-between">
              <div>
                <Umbrella className="w-5 h-5 text-[#C08E3E] mb-3" />
                <h4 className="font-serif text-lg font-bold text-[#C08E3E] mb-1">
                  Całoroczna Atrakcja
                </h4>
                <p className="text-xs text-brand-cream/80 leading-relaxed">
                  Zmienne warunki atmosferyczne nas nie dotyczą. Zadaszony i klimatyzowany pawilon to pewny punkt udanej wycieczki przy każdej pogodzie.
                </p>
              </div>
            </div>

          </div>

          {/* Quick Notice */}
          <div className="flex items-center gap-3 p-4 bg-brand-accent/10 border border-brand-accent/20 rounded-xl">
            <span className="text-xl">🦜</span>
            <span className="text-xs text-brand-green/90 font-mono tracking-tight font-medium">
              Edukacja przyrodnicza wspierana przez wykwalifikowany, serdeczny personel medyczny i opiekuńczy.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
