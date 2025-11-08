'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const contactMethods = [
  {
    type: 'Email',
    value: 'lamia.koucem@gmail.com',
    href: 'mailto:lamia.koucem@gmail.com',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    gradient: 'from-teal-400 to-cyan-400',
  },
  {
    type: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://linkedin.com/in/lamia%20koucem',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    gradient: 'from-cyan-400 to-blue-400',
  },
  {
    type: 'GitHub',
    value: 'View my code',
    href: 'https://github.com/LemonLamo',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    gradient: 'from-amber-400 to-orange-400',
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple fade in on load
      gsap.from([contentRef.current, ...cardsRef.current], {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-16 px-6 apple-grid relative overflow-hidden"
    >

      <div className="max-w-4xl mx-auto relative z-10">
        <div ref={contentRef}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 text-center mb-10 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <a
                key={method.type}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative flex flex-col items-center p-6 glass-effect rounded-3xl hover:shadow-2xl hover:shadow-[#ff7b6c]/20 transition-all duration-700 overflow-hidden ${hoveredIndex === index ? 'scale-105' : 'scale-100'}`}
              >
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className={`w-16 h-16 glass-effect rounded-2xl flex items-center justify-center mb-4 transform transition-all duration-700 ${hoveredIndex === index ? 'scale-110' : 'scale-100'} ${method.type === 'Email' || method.type === 'GitHub' ? 'text-[#ff7b6c]' : 'text-[#a78bfa]'}`}>
                    {method.icon}
                  </div>
                  <h3 className={`font-semibold text-lg mb-2 transition-colors duration-500 ${method.type === 'Email' || method.type === 'GitHub' ? 'text-[#ff7b6c]' : 'text-[#a78bfa]'}`}>
                    {method.type}
                  </h3>
                  <p className="text-sm text-center text-gray-600 dark:text-gray-400 transition-colors duration-500">
                    {method.value}
                  </p>
                </div>

                {/* Animated arrow */}
                <div className={`absolute bottom-4 right-4 transform transition-all duration-500 ${method.type === 'Email' || method.type === 'GitHub' ? 'text-[#ff7b6c]' : 'text-[#a78bfa]'} ${hoveredIndex === index ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'}`}>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Let's collaborate and create something amazing together!
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 glass-effect rounded-full relative overflow-hidden group border border-[#ff7b6c]/30">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff7b6c] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ff7b6c]"></span>
              </span>
              <span className="relative font-semibold gradient-text">Available for opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
