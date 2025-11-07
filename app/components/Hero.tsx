'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const codeWindowRef = useRef<HTMLDivElement>(null);
  const codeLineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Text animations
      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.4,
        ease: 'expo.out',
      })
        .from(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1.2,
          },
          '-=1'
        )
        .from(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 1,
          },
          '-=0.8'
        );

      // Code window animation
      gsap.from(codeWindowRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.5,
      });

      // Animate code lines sequentially
      codeLineRefs.current.forEach((line, index) => {
        if (!line) return;
        gsap.from(line, {
          x: -20,
          opacity: 0,
          duration: 0.6,
          delay: 1.2 + index * 0.15,
          ease: 'power2.out',
        });
      });

      // Floating animation for code window
      gsap.to(codeWindowRef.current, {
        y: -15,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const codeSnippet = [
    { color: 'text-rose-400', text: 'const' },
    { color: 'text-cyan-400', text: ' developer = {' },
    { color: 'text-gray-400', text: '  name:' },
    { color: 'text-teal-400', text: ' "Lamia Koucem",' },
    { color: 'text-gray-400', text: '  role:' },
    { color: 'text-teal-400', text: ' "Software Engineer",' },
    { color: 'text-gray-400', text: '  skills: [' },
    { color: 'text-amber-400', text: '    "React", "Node.js", "Docker"' },
    { color: 'text-gray-400', text: '  ],' },
    { color: 'text-gray-400', text: '  passion:' },
    { color: 'text-teal-400', text: ' "Building Amazing Things"' },
    { color: 'text-cyan-400', text: '};' },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden hero-pattern-cubes"
      id="home"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Main Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full text-teal-600 dark:text-teal-400 text-sm font-semibold backdrop-blur-sm">
                👋 Welcome to my portfolio
              </span>
            </div>
            
            <h1
              ref={titleRef}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              I'm{' '}
              <span className="gradient-text block mt-2">
                Lamia Koucem
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              Software Engineering Student crafting{' '}
              <span className="text-teal-600 dark:text-teal-400 font-semibold">innovative</span> and{' '}
              <span className="text-rose-400 font-semibold">elegant</span> solutions
            </p>
          </div>

          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-linear-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/30 flex items-center gap-2"
            >
              View My Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-teal-500 text-teal-600 dark:text-teal-400 hover:bg-teal-500 hover:text-white rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-xl"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right: Floating Code Window */}
        <div ref={codeWindowRef} className="hidden lg:block">
          <div className="bg-gray-900 dark:bg-gray-950 rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
            {/* Window Header */}
            <div className="bg-gray-800 dark:bg-gray-900 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-teal-500" />
              </div>
              <span className="text-gray-400 text-sm ml-4 font-mono">developer.js</span>
            </div>
            
            {/* Code Content */}
            <div className="p-6 font-mono text-sm space-y-1">
              {codeSnippet.map((line, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    codeLineRefs.current[index] = el;
                  }}
                  className={`${line.color} leading-relaxed`}
                >
                  {line.text}
                </div>
              ))}
            </div>

            {/* Status Bar */}
            <div className="bg-teal-500/10 border-t border-teal-500/30 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-teal-400 text-xs font-semibold">Ready to collaborate</span>
              </div>
              <span className="text-gray-500 text-xs">USTHB</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Scroll Down</span>
          <svg
            className="w-6 h-6 text-teal-600 dark:text-teal-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}

