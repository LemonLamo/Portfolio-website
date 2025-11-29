'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface CinematicIntroProps {
  onComplete: () => void;
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [showLoading, setShowLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Phase 1: Loading animation
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 10 + 5;
      });
    }, 150);

    // Transition directly to portfolio after loading completes (skip terminal)
    setTimeout(() => {
      if (loadingRef.current && containerRef.current) {
        gsap.to(loadingRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
        });
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          delay: 0.3,
          onComplete: () => onComplete()
        });
      }
    }, 2500);
  }, [onComplete]);



  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-[#1e1e1e] overflow-hidden"
    >
      {/* Loading Screen */}
      {showLoading && (
        <div 
          ref={loadingRef}
          className="absolute inset-0 flex flex-col items-center justify-center z-50"
        >
          <div className="text-center space-y-8">
            {/* Lemon Logo with bounce animation - Using image for consistent rendering */}
            <div className="flex justify-center items-center">
              <div className="text-8xl animate-bounce" style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}>
                🍋
              </div>
            </div>
            
            {/* Loading text */}
            <div className="space-y-3">
              <h2 className="text-3xl font-bold bg-linear-to-r from-[#ff7b6c] to-[#a78bfa] bg-clip-text text-transparent">
                Loading Portfolio
              </h2>
              <p className="text-gray-400 font-mono text-sm">
                Initializing workspace...
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-80 h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              <div 
                className="h-full bg-linear-to-r from-[#ff7b6c] to-[#a78bfa] transition-all duration-300 rounded-full"
                style={{ width: `${Math.min(loadingProgress, 100)}%` }}
              />
            </div>

            {/* Percentage */}
            <p className="text-[#ff7b6c] font-mono text-xl font-bold">
              {Math.floor(Math.min(loadingProgress, 100))}%
            </p>
          </div>
        </div>
      )}

      {/* Terminal Window */}
      {!showLoading && (
        <div 
          ref={terminalRef}
          className="w-full max-w-4xl mx-auto glass-effect rounded-3xl shadow-2xl border border-white/10"
          style={{ transformOrigin: 'center center' }}
        >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/5 rounded-t-3xl border-b border-white/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-gray-400 text-sm font-mono">
            terminal
          </div>
          <div className="w-3 h-3" /> {/* Spacer for centering */}
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm min-h-[400px] bg-white/5"
        >
          {lines.map((line, index) => (
            <div
              key={index}
              className={`mb-1 ${
                line && line.startsWith('$') 
                  ? 'text-[#ff7b6c]' 
                  : line && line.startsWith('>')
                  ? 'text-gray-400'
                  : line && line.startsWith('✓')
                  ? 'text-[#10b981]'
                  : line && line.includes('Welcome')
                  ? 'text-[#a78bfa] text-lg font-bold mt-2'
                  : 'text-gray-300'
              }`}
            >
              {line || '\u00A0'}
            </div>
          ))}
          {currentLine === lines.length - 1 && (
            <div className="inline-block w-2 h-4 bg-[#ff7b6c] animate-pulse ml-1" />
          )}
        </div>
      </div>
      )}
    </div>
  );
}
