'use client';

import { useRef } from 'react';

const education = [
  {
    degree: 'Master\'s Degree in Software Engineering',
    institution: 'USTHB',
    period: '2025 - Present',
    status: 'Currently Pursuing',
    description: 'Advanced studies in software engineering, focusing on modern development practices and system architecture.',
  },
  {
    degree: 'Bachelor\'s Degree in Software Engineering',
    institution: 'USTHB',
    period: '2022 - 2025',
    status: 'Completed',
    description: 'Graduated in June 2025 with comprehensive training in software development, algorithms, and system design.',
  },
  {
    degree: 'Baccalaureate in Mathematics',
    institution: 'Toufik Bouattoura High School',
    period: '2022',
    status: 'Completed',
    description: 'Specialized in mathematics field, building a strong analytical foundation.',
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-16 px-6 apple-grid relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Education <span style={{ color: 'var(--accent-purple)' }}>Journey</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: 'var(--accent-pink)' }} />
          <p className="text-base sm:text-lg mt-4 px-4"
            style={{ color: 'var(--text-secondary)' }}
          >
            My academic background and continuous learning path
          </p>
        </div>

        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl hover:scale-[1.02] hover:shadow-xl transition-all duration-500 overflow-hidden"
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '2px solid',
                borderColor: index % 2 === 0 ? 'var(--accent-purple)' : 'var(--accent-pink)'
              }}
            >
              {/* Header with dots */}
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ 
                backgroundColor: index % 2 === 0 ? 'rgba(196, 181, 253, 0.1)' : 'rgba(251, 207, 232, 0.1)',
                borderBottomColor: 'var(--card-border)'
              }}>
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#c4b5fd' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#f9a8d4' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#e9d5ff' }} />
                <div className="ml-auto">
                  <span 
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: index % 2 === 0 ? 'rgba(139, 92, 246, 0.15)' : 'rgba(236, 72, 153, 0.15)',
                      color: index % 2 === 0 ? 'var(--accent-purple)' : 'var(--accent-pink)',
                    }}
                  >
                    {item.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 
                      className="text-xl sm:text-2xl font-bold mb-2"
                      style={{ color: index % 2 === 0 ? 'var(--accent-purple)' : 'var(--accent-pink)' }}
                    >
                      {item.degree}
                    </h3>
                    <p 
                      className="text-base sm:text-lg font-semibold mb-1"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.institution}
                    </p>
                  </div>
                  <div 
                    className="text-sm sm:text-base font-semibold"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.period}
                  </div>
                </div>
                <p 
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
