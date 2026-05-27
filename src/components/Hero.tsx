/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Sparkles, ArrowDown } from 'lucide-react';
import { heroImage, REGION, ADDRESS, GOOGLE_RATING, OPINIONS_COUNT } from '../data';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const titleLine3Ref = useRef<HTMLSpanElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const metadataRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.6 } });

      // Animate the background image scale immediately from 1.2 to 1.0 (spectacular slow scale)
      tl.fromTo(
        bgImageRef.current,
        { scale: 1.25, filter: 'brightness(0.5)' },
        { scale: 1.0, filter: 'brightness(0.75)', duration: 2.5, ease: 'power3.out' },
        0
      );

      // Masked typography slide up
      tl.fromTo(
        [titleLine1Ref.current, titleLine2Ref.current, titleLine3Ref.current],
        { y: '100%', rotate: 2 },
        { y: '0%', rotate: 0, stagger: 0.15, ease: 'power4.out', duration: 1.8 },
        0.4
      );

      // Metadata fade-in
      tl.fromTo(
        metadataRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
        1.2
      );

      // Quick-stats and badges fade-in
      tl.fromTo(
        badgesRef.current?.children || [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 1.2 },
        1.4
      );

      // Parallax effect on scroll for the background image
      gsap.to(bgImageRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        yPercent: 15,
        scale: 1.05,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-end bg-brand-dark text-brand-cream overflow-hidden px-6 pt-32 pb-16 md:pb-24"
    >
      {/* Cinematic Parallax Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          ref={bgImageRef}
          src={heroImage}
          alt="Papugarnia Olsztyn - Egzotyczne Ptaki"
          className="w-full h-full object-cover origin-center"
          referrerPolicy="no-referrer"
        />
        {/* Warm luxury overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/25 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-brand-green/10 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        
        {/* Left Side: Massive Masked Typography Heading */}
        <div className="lg:col-span-8 flex flex-col items-start">
          <div className="flex items-center gap-2 mb-4 bg-brand-accent/20 border border-brand-accent/30 py-1.5 px-3 rounded-full">
            <Sparkles className="w-3 h-3 text-brand-accent animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-accent">
              Wolny Lot • Brak Klatek • Całorocznie
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl xl:text-8xl font-serif font-black tracking-tight leading-[0.9] text-brand-cream flex flex-col">
            <span className="masked-title block overflow-hidden pb-1">
              <span ref={titleLine1Ref} className="block origin-left">
                TU PTAKI
              </span>
            </span>
            <span className="masked-title block overflow-hidden pb-1 italic text-brand-accent">
              <span ref={titleLine2Ref} className="block origin-left">
                LATAJĄ
              </span>
            </span>
            <span className="masked-title block overflow-hidden pb-1">
              <span ref={titleLine3Ref} className="block origin-left">
                WOLNO!
              </span>
            </span>
          </h1>

          <p ref={metadataRef} className="mt-8 text-base md:text-lg max-w-md text-brand-cream/80 font-sans font-light leading-relaxed">
            Poznaj puszyste, kolorowe ary, sprytne kakadu i urocze papużki w naturalnej, w pełni zadaszonej tropikalnej oazie w Olsztynie. Całkowity brak klatek.
          </p>
        </div>

        {/* Right Side: Informational editorial widgets */}
        <div ref={badgesRef} className="lg:col-span-4 flex flex-col gap-4">
          
          {/* Rating Badge */}
          <div className="backdrop-blur-md bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1">
                <span className="font-serif text-3xl font-bold text-brand-accent">{GOOGLE_RATING}</span>
                <span className="text-brand-accent text-sm">★</span>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-brand-cream/60 mt-1">
                Wzorowa Ocena Google Maps
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs text-brand-cream font-mono font-medium block">
                {OPINIONS_COUNT}
              </span>
              <span className="text-[10px] text-brand-cream/40 block mt-0.5">
                opinii gości
              </span>
            </div>
          </div>

          {/* Quick Details Widget */}
          <div className="backdrop-blur-md bg-[#0D2C1E]/40 border border-[#15422F]/40 p-5 rounded-2xl">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#C08E3E] block mb-2">
              LOKALIZACJA & CZAS
            </span>
            <h3 className="font-serif text-lg font-medium text-brand-cream mb-1">
              {ADDRESS}
            </h3>
            <p className="text-xs text-brand-cream/75 leading-relaxed">
              Olsztyn, {REGION} • Otwarte 7 dni w tygodniu od 10:00 do 19:00.
            </p>
          </div>

        </div>

      </div>

      {/* Decorative Slide-down micro button */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <button
          onClick={handleScrollDown}
          className="flex flex-col items-center gap-2 group cursor-pointer"
        >
          <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-brand-cream/40 group-hover:text-brand-accent transition-colors">
            Eksploruj
          </span>
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-accent transition-colors">
            <ArrowDown className="w-3.5 h-3.5 text-brand-cream/50 group-hover:text-brand-accent animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}
