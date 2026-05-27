/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, Volume2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { EXPERIENCES } from '../data';

export default function HorizontalExperiences() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Calculate scroll width dynamically
      const scrollAmt = () => {
        const scrollWidth = scrollSectionRef.current?.scrollWidth || 0;
        const viewportWidth = window.innerWidth;
        return -(scrollWidth - viewportWidth);
      };

      // Set up GSAP horizontal scroll with pinning
      gsap.fromTo(
        scrollSectionRef.current,
        { x: 0 },
        {
          x: scrollAmt,
          ease: 'none',
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top top',
            end: () => `+=${(scrollSectionRef.current?.scrollWidth || 0) * 0.75}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        }
      );
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="relative overflow-hidden bg-brand-dark text-brand-cream">
      {/* Absolute indicators or typography rails inside pinned section */}
      <div className="absolute top-10 left-10 z-20 pointer-events-none mix-blend-difference">
        <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-brand-gold/60">
          PAPUGARNIA EXPERIENCE • KROK PO KROKU
        </span>
      </div>

      <div
        ref={scrollSectionRef}
        className="flex flex-nowrap h-screen items-center py-20 w-max"
      >
        {/* Intro Slide */}
        <div className="w-[100vw] h-full flex flex-col justify-center px-10 md:px-24 shrink-0">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-brand-accent tracking-[0.2em] uppercase">
              CO ZOBACZYSZ I PRZEŻYJESZ
            </span>
            <h3 className="text-5xl md:text-7xl font-serif font-black tracking-tight leading-none mt-4 text-brand-cream">
              INTERAKCJA <br />
              <span className="italic font-light text-brand-accent">BEZ BARIER</span>
            </h3>
            <p className="mt-6 text-base text-brand-cream/70 font-sans font-light leading-relaxed">
              Przewiń dalej w dół, aby sprawdzić, co czyni naszą papugarnię luksusowym azylem dzikich, radosnych zwierząt. Odkryj bogactwo kolorów, dźwięków i bezpiecznego obcowania okiem wybitnych opiekunów.
            </p>
            <div className="mt-8 flex items-center gap-2">
              <span className="w-10 h-[1px] bg-brand-accent block" />
              <span className="font-mono text-[10px] tracking-widest uppercase text-brand-accent">
                Przesuwaj dalej by odkryć
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Slides based on data.ts */}
        {EXPERIENCES.map((exp, idx) => {
          // Select beautiful icons based on experiences index
          const icons = [
            <HeartHandshake className="w-6 h-6 text-brand-accent" />,
            <CheckCircle2 className="w-6 h-6 text-brand-accent" />,
            <ShieldCheck className="w-6 h-6 text-brand-accent" />,
            <Volume2 className="w-6 h-6 text-brand-accent" />
          ];

          return (
            <div
              key={exp.id}
              className="w-[90vw] md:w-[75vw] xl:w-[65vw] h-[75vh] px-6 md:px-12 shrink-0 flex items-center justify-center border-l border-white/10"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full w-full">
                
                {/* Text Block */}
                <div className="md:col-span-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-serif text-3xl font-light text-brand-accent tracking-tighter/50">
                      0{idx + 1}
                    </span>
                    <div className="w-8 h-[1.5px] bg-[#C08E3E]/50" />
                    <span className="font-mono text-[10px] tracking-widest uppercase text-brand-gold/85">
                      {exp.accentText}
                    </span>
                  </div>

                  <h4 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-white mb-2">
                    {exp.title}
                  </h4>
                  <p className="font-mono text-[11px] text-brand-accent uppercase tracking-widest mb-6">
                    {exp.subtitle}
                  </p>

                  <p className="text-sm text-brand-cream/80 leading-relaxed font-light mb-8 max-w-md">
                    {exp.description}
                  </p>

                  {/* Interactivity details or direct instruction */}
                  {exp.behaviorTip && (
                    <div className="p-4 bg-white/[0.03] border border-white/10 rounded-xl max-w-md">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-brand-accent block mb-1">
                        ℹ Wskazówka Opiekuna:
                      </span>
                      <p className="text-xs text-brand-cream/70 font-light">
                        {exp.behaviorTip}
                      </p>
                    </div>
                  )}
                </div>

                {/* Cover Image Block */}
                <div className="md:col-span-6 h-full relative group rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover grayscale-[35%] hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-transparent to-transparent opacity-90 transition-opacity" />
                  
                  {/* Micro branding block at the corner resembling Louis Ansa layout */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-brand-dark/80 backdrop-blur-md py-1 px-3 border border-white/10 rounded-full">
                    {icons[idx]}
                    <span className="font-mono text-[9px] text-brand-cream tracking-widest uppercase">
                      PAPUGARNIA
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="font-mono text-[10px] text-brand-gold font-bold tracking-[0.2em] block mb-1">
                      EGZOTYCZNY ŚWIAT
                    </span>
                    <span className="font-serif text-lg font-light text-brand-cream italic">
                      Bezpieczeństwo i niesamowita sensoryka przyrody
                    </span>
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
