'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const ThemeLamp = ({ isDark, onClick }: { isDark: boolean; onClick: () => void }) => {
  const lampRef = useRef<SVGSVGElement>(null);
  const bulbRef = useRef<SVGCircleElement>(null);
  const glowRef = useRef<SVGEllipseElement>(null);

  useEffect(() => {
    if (!lampRef.current || !bulbRef.current || !glowRef.current) return;

    if (isDark) {
      // Dark mode - lamp is OFF (no glow)
      gsap.to(bulbRef.current, { fill: '#e5e7eb', duration: 0.4 });
      gsap.to(glowRef.current, { opacity: 0, duration: 0.4 });
    } else {
      // Light mode - lamp is ON (warm yellow glow)
      gsap.to(bulbRef.current, { fill: '#fde68a', duration: 0.4 });
      gsap.to(glowRef.current, { opacity: 1, duration: 0.4 });
    }
  }, [isDark]);

  return (
    <svg
      ref={lampRef}
      width="80"
      height="160"
      viewBox="0 0 80 160"
      className="cursor-pointer transition-transform hover:scale-105"
      onClick={onClick}
    >
      {/* Cord */}
      <line x1="40" y1="0" x2="40" y2="40" stroke="#64748b" strokeWidth="1.5" />
      
      {/* Top mounting bracket */}
      <ellipse cx="40" cy="40" rx="6" ry="2.5" fill="#9f7aea" />
      <rect x="34" y="40" width="12" height="3" fill="#9f7aea" />
      
      {/* Lamp shade top rim */}
      <ellipse cx="40" cy="43" rx="26" ry="5" fill="#b794f6" />
      
      {/* Main shade body - smooth dome */}
      <path
        d="M 14 43 L 14 68 Q 14 75, 22 78 L 58 78 Q 66 75, 66 68 L 66 43 Z"
        fill="#9f7aea"
      />
      
      {/* Shade bottom rim */}
      <ellipse cx="40" cy="78" rx="18" ry="3" fill="#8b5cf6" />
      
      {/* Light glow effect when on */}
      <ellipse
        ref={glowRef}
        cx="40"
        cy="95"
        rx="22"
        ry="12"
        fill="#fde68a"
        opacity="0"
      />
      
      {/* Light bulb */}
      <circle
        ref={bulbRef}
        cx="40"
        cy="88"
        r="8"
        fill="#e5e7eb"
      />
    </svg>
  );
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const codeWindowRef = useRef<HTMLDivElement>(null);
  const computerRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
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
    // Sync with actual theme on mount
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);

    // Listen for theme changes from navbar toggle
    const handleThemeChange = () => {
      const currentTheme = document.documentElement.classList.contains('dark');
      setIsDarkMode(currentTheme);
    };

    window.addEventListener('themechange', handleThemeChange);
    return () => window.removeEventListener('themechange', handleThemeChange);
  }, []);

  // All loading animations removed

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => {
    const html = document.documentElement;
    const newTheme = !isDarkMode;
    
    // GSAP animation for theme transition
    gsap.to('body', {
      opacity: 0.7,
      duration: 0.2,
      onComplete: () => {
        if (newTheme) {
          html.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          html.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
        setIsDarkMode(newTheme);
        gsap.to('body', { opacity: 1, duration: 0.3 });
        
        // Dispatch custom event to sync with other components
        window.dispatchEvent(new Event('themechange'));
      }
    });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 overflow-hidden"
      id="home"
      style={{
        background: `linear-gradient(to right, var(--hero-bg-left) 0%, var(--hero-bg-left) 50%, var(--hero-bg-right) 50%, var(--hero-bg-right) 100%)`,
        position: 'relative'
      }}
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(to right, var(--accent-purple) 1px, transparent 1px),
          linear-gradient(to bottom, var(--accent-purple) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Theme toggle lamp - centered top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50">
        <ThemeLamp isDark={isDarkMode} onClick={toggleTheme} />
      </div>

      {/* Simple centered layout */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: '80px' }}>
        {/* Text Section - Always centered and on top */}
        <div className="text-center mb-4">
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            <span className="block text-xl sm:text-2xl font-normal mb-2" style={{ color: 'var(--text-secondary)' }}>
              Hi, I'm
            </span>
            <span className="italic" style={{ color: 'var(--accent-purple)' }}>
              Lamia{' '}
            </span>
            <span style={{ color: 'var(--accent-pink)' }}>
              Koucem
            </span>
          </h1>
          
          <p
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            I like <span className="font-bold italic" style={{ color: 'var(--accent-pink)' }}>creating</span> <span className="font-bold" style={{ color: 'var(--accent-purple)' }}>innovative solutions</span> with code.
          </p>
        </div>

        {/* Computer Section - Always below text, centered */}
        <div className="flex justify-center">
          <div ref={computerRef} className="w-full max-w-md lg:max-w-lg" style={{ animation: 'none', transform: 'none', transition: 'none' }}>
          {/* Computer Monitor */}
          <div className="relative">
          {/* Monitor bezel */}
          <div
            className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl shadow-2xl"
            style={{
              backgroundColor: 'var(--text-primary)',
              border: '3px solid var(--text-primary)'
            }}
          >
            {/* Screen */}
            <div
              className="rounded-lg sm:rounded-xl overflow-hidden shadow-xl"
              style={{
                backgroundColor: 'var(--code-editor-bg)',
                border: '2px solid var(--accent-purple)'
              }}
            >
              {/* Window Header */}
              <div
                className="px-2 sm:px-3 py-1.5 sm:py-2 flex items-center gap-1.5 sm:gap-2 border-b"
                style={{
                  backgroundColor: 'var(--code-editor-header-bg)',
                  borderColor: 'var(--accent-purple)'
                }}
              >
                <div className="flex gap-1 sm:gap-1.5">
                  <div
                    className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full hover:brightness-110 transition-all cursor-pointer"
                    style={{ backgroundColor: '#ff5f56' }}
                  />
                  <div
                    className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full hover:brightness-110 transition-all cursor-pointer"
                    style={{ backgroundColor: '#ffbd2e' }}
                  />
                  <div
                    className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full hover:brightness-110 transition-all cursor-pointer"
                    style={{ backgroundColor: '#27c93f' }}
                  />
                </div>

                <div className="flex gap-1 ml-1.5 sm:ml-3">
                  <button
                    className="px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-semibold rounded-md"
                    style={{
                      backgroundColor: 'var(--accent-purple)',
                      color: '#ffffff'
                    }}
                  >
                    {activeTab}
                  </button>
                </div>
              </div>

              {/* Code Editor Area */}
              <div className="relative">
                <div
                  className="absolute top-3 sm:top-5 left-2 text-xs font-mono select-none pointer-events-none z-10"
                  style={{ color: 'var(--code-line-number)' }}
                >
                  {code.split('\n').map((_, i) => (
                    <div
                      key={i}
                      className="h-5 sm:h-[22.4px] text-right pr-2 sm:pr-3"
                      style={{ lineHeight: '1.6' }}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>

                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  spellCheck={false}
                  className="w-full p-2 sm:p-3 pl-8 sm:pl-10 font-mono text-[10px] sm:text-xs min-h-[200px] sm:min-h-[250px] resize-none outline-none border-none focus:ring-0 relative z-20 overflow-hidden"
                  style={{
                    lineHeight: '1.6',
                    tabSize: 2,
                    caretColor: 'var(--accent-pink)',
                    backgroundColor: 'transparent',
                    color: 'var(--code-editor-text)'
                  }}
                />
              </div>

              {/* Status Bar */}
              <div
                className="px-3 sm:px-4 py-1.5 sm:py-2 flex items-center justify-between text-xs border-t"
                style={{
                  backgroundColor: 'var(--code-editor-status-bg)',
                  borderColor: 'var(--accent-purple)'
                }}
              >
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: 'var(--accent-purple)' }}
                    />
                    <span
                      className="font-medium hidden sm:inline"
                      style={{ color: 'var(--code-editor-text)' }}
                    >
                      Ready
                    </span>
                  </div>
                  <span className="hidden sm:inline" style={{ color: 'var(--code-line-number)' }}>
                    TypeScript
                  </span>
                </div>

                <span className="text-xs" style={{ color: 'var(--code-line-number)' }}>
                  Ln {code.split('\n').length}
                </span>
              </div>
            </div>
            
            {/* Monitor chin/bottom bezel */}
            <div className="h-8 sm:h-10 rounded-b-2xl sm:rounded-b-3xl" 
              style={{ backgroundColor: 'var(--text-primary)' }} />
          </div>
          
          {/* Monitor stand */}
          <div className="flex flex-col items-center mt-2">
            {/* Stand neck */}
            <div className="w-4 sm:w-6 h-6 sm:h-8" 
              style={{ backgroundColor: 'var(--text-primary)' }} />
            {/* Stand base */}
            <div className="w-20 sm:w-28 h-2 sm:h-3 rounded-full" 
              style={{ backgroundColor: 'var(--text-primary)' }} />
          </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

