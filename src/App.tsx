/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HorizontalExperiences from './components/HorizontalExperiences';
import ExoticSpecies from './components/ExoticSpecies';
import InfoAndPricing from './components/InfoAndPricing';
import Footer from './components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Instantiate Lenis for silky smooth inertia-based scrolling (Louis Ansa Style)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Synchronize Lenis scrolling timeline with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Lag smoothing guarantees that frame drops do not stutter ScrollTrigger timelines
    gsap.ticker.lagSmoothing(0);

    // Initial page entering motion
    const ctx = gsap.context(() => {
      gsap.fromTo(
        'body',
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out' }
      );
    });

    return () => {
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-cream text-brand-dark selection:bg-brand-accent selection:text-brand-dark overflow-hidden">
      
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Main Narrative Flow */}
      <main>
        {/* Sections aligned strictly with layout guidelines */}
        <Hero />
        <About />
        <HorizontalExperiences />
        <ExoticSpecies />
        <InfoAndPricing />
      </main>

      {/* 3. Footer containing Facebook & Instagram anchors */}
      <Footer />

    </div>
  );
}
