'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    if (!cursorDot) return;

    // Mouse move handler - instant positioning
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorDot) {
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
      }
    };

    // Add hover detection for interactive elements
    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // Attach listeners
    document.addEventListener('mousemove', handleMouseMove);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, .cursor-pointer, input, textarea, [role="button"]'
    );
    
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isHovering]);

  return (
    <>
      {/* Cursor dot only */}
      <div
        ref={cursorDotRef}
        className="custom-cursor-dot fixed pointer-events-none"
        style={{
          width: isHovering ? '16px' : '10px',
          height: isHovering ? '16px' : '10px',
          borderRadius: '50%',
          backgroundColor: 'white',
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
          transition: 'width 0.15s ease, height 0.15s ease',
          left: 0,
          top: 0,
        }}
      />

      <style jsx>{`
        @media (hover: none) and (pointer: coarse) {
          .custom-cursor,
          .custom-cursor-dot {
            display: none;
          }
        }
        
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
