'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

interface Element3D {
  id: number;
  emoji: string;
  name: string;
  x: number;
  y: number;
}

export default function DraggableElements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [elements] = useState<Element3D[]>([
    { id: 1, emoji: '💻', name: 'Code', x: 10, y: 15 },
    { id: 2, emoji: '🚀', name: 'Deploy', x: 85, y: 20 },
    { id: 3, emoji: '⚡', name: 'Speed', x: 15, y: 70 },
    { id: 4, emoji: '🎨', name: 'Design', x: 80, y: 75 },
    { id: 5, emoji: '🔧', name: 'Tools', x: 45, y: 45 },
  ]);

  useEffect(() => {
    if (!containerRef.current) return;

    const draggables = elements.map((element) => {
      const el = document.getElementById(`draggable-${element.id}`);
      if (!el) return null;

      // Floating animation
      gsap.to(el, {
        y: '+=15',
        duration: 2 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Make draggable
      return Draggable.create(el, {
        type: 'x,y',
        bounds: containerRef.current,
        inertia: true,
        onDrag: function() {
          gsap.to(this.target, {
            rotation: this.deltaX * 0.5,
            scale: 1.1,
            duration: 0.3,
          });
        },
        onDragEnd: function() {
          gsap.to(this.target, {
            rotation: 0,
            scale: 1,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)',
          });
        },
      })[0];
    });

    return () => {
      draggables.forEach((d) => d?.kill());
    };
  }, [elements]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {elements.map((element) => (
        <div
          key={element.id}
          id={`draggable-${element.id}`}
          className="absolute pointer-events-auto cursor-move group"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="relative">
            {/* 3D Effect Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff7b6c]/20 to-[#a78bfa]/20 rounded-2xl blur-xl transform scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Main Element */}
            <div 
              className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/20 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[#ff7b6c]/20"
              style={{
                transform: 'rotateX(10deg) rotateY(10deg)',
                transition: 'transform 0.3s ease',
              }}
            >
              <div className="text-3xl mb-1 filter drop-shadow-lg transform group-hover:scale-110 transition-transform">
                {element.emoji}
              </div>
              <div className="text-[10px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                {element.name}
              </div>
            </div>

            {/* Shine Effect */}
            <div 
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              style={{
                transform: 'translateX(-100%)',
                animation: 'shine 2s infinite',
              }}
            />
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) translateY(-100%);
          }
          100% {
            transform: translateX(100%) translateY(100%);
          }
        }
      `}</style>
    </div>
  );
}
