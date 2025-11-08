'use client';

import { useState } from 'react';
import CinematicIntro from './components/CinematicIntro';
import CursorTrail from './components/CursorTrail';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    // Small delay to ensure smooth transition
    setTimeout(() => setShowContent(true), 50);
  };

  if (showIntro) {
    return <CinematicIntro onComplete={handleIntroComplete} />;
  }

  return (
    <div className={`min-h-screen relative overflow-x-hidden transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      <CursorTrail />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
