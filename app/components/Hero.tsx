'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const codeWindowRef = useRef<HTMLDivElement>(null);
  const codeLineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const starRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTab, setActiveTab] = useState('App.tsx');
  const [isTyping, setIsTyping] = useState(false);
  const [code, setCode] = useState(`const profile = {
  name: "Lamia Koucem",
  role: "Full Stack Developer",
  location: "Algeria",
  skills: [
    "React & Next.js",
    "TypeScript", 
    "Node.js",
    "Spring Boot",
    "MongoDB"
  ],
  passion: "Building innovative solutions"
};
`);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Text animations
      tl.from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'expo.out',
      })
        .from(
          subtitleRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 1,
          },
          '-=0.8'
        )
        .from(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.9,
          },
          '-=0.6'
        );

      // Code window animation with Apple-style entry
      gsap.from(codeWindowRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.4)',
        delay: 0.3,
      });

      // Animate code lines with typing effect
      codeLineRefs.current.forEach((line, index) => {
        if (!line) return;
        gsap.from(line, {
          x: -10,
          opacity: 0,
          duration: 0.5,
          delay: 1 + index * 0.08,
          ease: 'power2.out',
        });
      });

      // Shooting stars animation
      starRefs.current.forEach((star, index) => {
        if (!star) return;
        gsap.to(star, {
          x: 300,
          y: 300,
          opacity: 0,
          duration: 3,
          delay: index * 2.5,
          repeat: -1,
          repeatDelay: 5,
          ease: 'power1.in',
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const codeSnippets: Record<string, Array<{ color: string; text: string }>> = {
    'App.tsx': [
      { color: 'text-purple-400', text: 'import' },
      { color: 'text-gray-300', text: ' React ' },
      { color: 'text-purple-400', text: 'from' },
      { color: 'text-[#ff7b6c]', text: ' "react"' },
      { color: 'text-gray-500', text: ';' },
      { color: '', text: '' },
      { color: 'text-purple-400', text: 'const' },
      { color: 'text-blue-400', text: ' Developer' },
      { color: 'text-gray-300', text: ' = () => {' },
      { color: 'text-purple-400', text: '  return' },
      { color: 'text-gray-300', text: ' (' },
      { color: 'text-gray-300', text: '    <div className="profile">' },
      { color: 'text-[#ff7b6c]', text: '      <h1>Lamia Koucem</h1>' },
      { color: 'text-gray-400', text: '      <p>Software Engineer @ USTHB</p>' },
      { color: 'text-purple-400', text: '      <span>Status:</span>' },
      { color: 'text-[#a78bfa]', text: ' Available' },
      { color: 'text-gray-300', text: '    </div>' },
      { color: 'text-gray-300', text: '  )' },
      { color: 'text-gray-300', text: '}' },
    ],
    'skills.ts': [
      { color: 'text-purple-400', text: 'export const' },
      { color: 'text-blue-400', text: ' skills' },
      { color: 'text-gray-300', text: ' = {' },
      { color: 'text-[#ff7b6c]', text: '  frontend' },
      { color: 'text-gray-300', text: ': [' },
      { color: 'text-[#a78bfa]', text: '    "React", "Next.js", "TypeScript"' },
      { color: 'text-gray-300', text: '  ],' },
      { color: 'text-[#ff7b6c]', text: '  backend' },
      { color: 'text-gray-300', text: ': [' },
      { color: 'text-[#a78bfa]', text: '    "Node.js", "Spring Boot"' },
      { color: 'text-gray-300', text: '  ],' },
      { color: 'text-[#ff7b6c]', text: '  tools' },
      { color: 'text-gray-300', text: ': [' },
      { color: 'text-[#a78bfa]', text: '    "Docker", "Git", "AWS"' },
      { color: 'text-gray-300', text: '  ]' },
      { color: 'text-gray-300', text: '}' },
    ],
  };

  const currentSnippet = codeSnippets[activeTab] || codeSnippets['App.tsx'];

  return (
    <section
      ref={heroRef}
      className="relative min-h-[85vh] flex items-center justify-center px-6 py-16 overflow-hidden apple-grid"
      id="home"
    >


      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Main Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1
              ref={titleRef}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Hi, I'm{' '}
              <span className="gradient-text highlight-line block mt-2">
                Lamia Koucem
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              Software Engineering Student at{' '}
              <span className="font-semibold text-[#ff7b6c]">USTHB</span>, crafting elegant solutions with modern technologies.
            </p>
          </div>

          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-apple px-8 py-4 bg-[#ff7b6c]/80 hover:bg-[#ff7b6c] text-white font-semibold transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-apple px-8 py-4 bg-white/50 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-800 text-gray-900 dark:text-white font-semibold transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right: Code Editor - Responsive */}
        <div 
          ref={codeWindowRef} 
          className="w-full lg:w-auto"
        >
          <div className="glass-effect rounded-2xl overflow-hidden shadow-2xl w-full lg:max-w-xl">
            {/* Window Header */}
            <div className="px-4 py-3 flex items-center gap-3 border-b border-[#ff7b6c]/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:brightness-110 transition-all cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:brightness-110 transition-all cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:brightness-110 transition-all cursor-pointer" />
              </div>
              <div className="flex gap-1 ml-4">
                <button className="px-3 py-1 text-xs font-medium rounded-lg bg-[#ff7b6c]/15 text-[#ff7b6c] dark:text-[#ff8a78]">
                  {activeTab}
                </button>
              </div>
            </div>
            
            {/* Code Editor Area */}
            <div className="relative">
              <div className="absolute top-5 left-2 text-xs text-gray-400 font-mono select-none pointer-events-none z-10">
                {code.split('\n').map((_, i) => (
                  <div key={i} className="h-[22.4px] text-right pr-3" style={{ lineHeight: '1.6' }}>
                    {i + 1}
                  </div>
                ))}
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck={false}
                className="w-full p-5 pl-12 bg-white/50 dark:bg-gray-900/50 font-mono text-sm text-gray-700 dark:text-gray-300 min-h-[350px] resize-none outline-none border-none focus:ring-0 relative z-20"
                style={{
                  lineHeight: '1.6',
                  tabSize: 2,
                  caretColor: '#ff7b6c',
                }}
              />
            </div>

            {/* Status Bar */}
            <div className="px-4 py-2 flex items-center justify-between text-xs border-t border-[#ff7b6c]/10 bg-white/30 dark:bg-gray-900/30">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Ready</span>
                </div>
                <span className="text-gray-500">JavaScript</span>
              </div>
              <span className="text-gray-500">Ln {code.split('\n').length}, Col {code.split('\n').pop()?.length || 0}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

