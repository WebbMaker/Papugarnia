/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Sparkles, Globe, Heart } from 'lucide-react';
import { SPECIES } from '../data';

export default function ExoticSpecies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedType, setSelectedType] = useState<'all' | 'large' | 'small'>('all');

  const filteredSpecies = SPECIES.filter(s => {
    if (selectedType === 'all') return true;
    return s.type === selectedType;
  });

  return (
    <section
      id="species"
      ref={containerRef}
      className="py-24 md:py-32 bg-[#F6F2E9] border-t border-brand-dark/10 relative"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Editorial Title Block */}
        <div className="flex flex-col lg:flex-row items-baseline justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold">
              GATUNKI Z TRZECH KONTYNENTÓW
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tight text-brand-green leading-none mt-4">
              NASI <br className="hidden sm:inline" />
              <span className="italic font-light text-brand-accent">MIESZKAŃCY</span>
            </h2>
          </div>

          <div className="flex flex-col md:items-end">
            <p className="text-sm font-light text-brand-dark/70 max-w-md md:text-right leading-relaxed mb-6">
              Na hali wolnego lotu spotkasz przedstawicieli fauny Ameryki, Afryki oraz Australii. Dowiedz się więcej o ich pochodzeniu oraz unikalnych, sprytnych nawykach.
            </p>

            {/* Premium Pill Filter Buttons */}
            <div className="flex gap-2 p-1 bg-brand-dark/5 backdrop-blur-md rounded-full border border-brand-dark/10">
              {(['all', 'large', 'small'] as const).map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-6 py-2 rounded-full font-mono text-[9px] uppercase tracking-widest transition-all cursor-pointer ${
                    selectedType === type
                      ? 'bg-brand-green text-brand-cream shadow-sm'
                      : 'text-brand-dark/60 hover:text-brand-dark hover:bg-black/5'
                  }`}
                >
                  {type === 'all' && 'Wszystkie'}
                  {type === 'large' && 'Duże okazy'}
                  {type === 'small' && 'Małe wisienki'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Asymmetrical Masonry Grid Layout (Louis Ansa Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {filteredSpecies.map((bird, idx) => {
            // Apply asymmetric line placements via Tailwind grid spans
            const colSpanClass = idx === 0 
              ? 'lg:col-span-8' 
              : idx === 1 
                ? 'lg:col-span-4' 
                : 'lg:col-span-12';

            return (
              <div
                key={bird.id}
                className={`${colSpanClass} bg-brand-lightCream border border-brand-dark/15 rounded-3xl p-8 md:p-10 transition-all duration-300 hover:shadow-xl relative overflow-hidden group`}
              >
                {/* Visual Top Bar decoration */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-dark/10 pb-6 mb-8">
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full border border-brand-green/20 flex items-center justify-center font-mono text-xs text-brand-green font-bold bg-brand-cream/60 shadow-sm">
                      {idx + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-3xl font-bold tracking-tight text-brand-green">
                        {bird.name}
                      </h3>
                      {bird.latinName && (
                        <p className="font-mono text-xs italic text-brand-accent mt-0.5">
                          {bird.latinName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-brand-cream py-1.5 px-3 rounded-full border border-brand-dark/10 self-start sm:self-auto">
                    <Globe className="w-3.5 h-3.5 text-brand-gold" />
                    <span className="font-mono text-[9px] uppercase tracking-widest text-brand-olive font-semibold">
                      {bird.origin}
                    </span>
                  </div>
                </div>

                {/* Grid of details inside card */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-7">
                    <p className="text-sm font-light leading-relaxed text-brand-dark/80 mb-6 font-sans">
                      {bird.description}
                    </p>

                    {/* Color palette indicators reflecting feathers */}
                    <div className="flex items-center gap-2 mt-4">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-brand-olive font-bold">
                        Pióra:
                      </span>
                      <div className="flex gap-1.5">
                        {bird.colors.map((color, i) => (
                          <div
                            key={i}
                            className="w-4 h-4 rounded-full border border-base shadow-inner"
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Highlight box / Trivia */}
                  <div className="md:col-span-5 bg-[#0D2C1E]/5 rounded-2xl p-6 border border-brand-green/10">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-brand-accent animate-pulse" />
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#E29B26] font-bold">
                        CIEKAWOSTKA
                      </span>
                    </div>
                    <p className="text-xs text-brand-dark/85 font-light leading-relaxed font-sans">
                      {bird.funFact}
                    </p>
                  </div>
                </div>

                {/* Large aesthetic decorative water-mark pattern under overlay inside each card */}
                <span className="absolute bottom-4 right-6 font-serif text-8xl font-black text-brand-dark/[0.015] pointer-events-none select-none">
                  {bird.name.substring(0, 3)}
                </span>
                
              </div>
            );
          })}
          
        </div>

        {/* Informative Warning block in a minimalist grid */}
        <div className="mt-16 bg-brand-green text-brand-cream border border-brand-emerald rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-3 flex justify-start md:justify-center">
              <div className="w-16 h-16 rounded-full bg-brand-accent/20 flex items-center justify-center text-3xl">
                💎
              </div>
            </div>
            <div className="md:col-span-9">
              <h4 className="font-serif text-2xl font-bold text-brand-accent mb-2">
                Słodkie Pieszczoszki, ale też sprytni złodziejaszkowie!
              </h4>
              <p className="text-sm text-brand-cream/80 leading-relaxed font-light font-sans">
                Nasze ptaki są niezwykle towarzyskie, ale wykazują olbrzymie zainteresowanie błyszczącymi elementami ubioru. Kolczyki, błyskotki, bransoletki, zegarki oraz plastikowe ozdobne guziki stanowią dla nich świetną zabawkę. <span className="text-[#FAF8F4] font-medium">Przed wejściem na halę bezwzględnie zdejmij wszelką biżuterię.</span> Dziękujemy za wyrozumiałość i dbanie o bezpieczeństwo ptasich przyjaciół!
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
