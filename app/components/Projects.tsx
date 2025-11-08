'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Luna AI',
    description: 'AI-powered mobile platform designed to empower and support breast cancer patients throughout their journey from diagnosis to recovery through intelligent guidance, emotional connection, and real human support.',
    technologies: ['AI/ML', 'Mobile Development', 'Healthcare'],
    gradient: 'from-pink-400/20 to-rose-400/20',
    borderColor: 'border-pink-400/30',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    link: 'https://github.com/LemonLamo/Luna-AI',
  },
  {
    title: 'NutriFind',
    description: 'Smart nutrition tracking and meal planning application helping users make informed dietary choices and achieve their health goals.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    gradient: 'from-green-400/20 to-emerald-400/20',
    borderColor: 'border-green-400/30',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop',
    link: 'https://github.com/LemonLamo/NutriFind',
  },
  {
    title: 'Apex Consulting',
    description: 'Professional consulting platform connecting businesses with expert advisors for strategic guidance and business development.',
    technologies: ['Next.js', 'TypeScript', 'Full Stack'],
    gradient: 'from-blue-400/20 to-cyan-400/20',
    borderColor: 'border-blue-400/30',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    link: 'https://github.com/LemonLamo/apex-consulting',
  },
  {
    title: 'TraceIt',
    description: 'Advanced tracking and logistics management system providing real-time visibility and optimization for supply chain operations.',
    technologies: ['JavaScript', 'Express', 'PostgreSQL'],
    gradient: 'from-orange-400/20 to-amber-400/20',
    borderColor: 'border-orange-400/30',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
    link: 'https://github.com/LemonLamo/TraceIt',
  },
  {
    title: 'PFE Project',
    description: 'End-of-studies project showcasing modern web development practices with TypeScript and scalable architecture.',
    technologies: ['TypeScript', 'Full Stack', 'Modern Web'],
    gradient: 'from-purple-400/20 to-violet-400/20',
    borderColor: 'border-purple-400/30',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    link: 'https://github.com/LemonLamo/PFE',
  },
  {
    title: 'Hollow Dev Challenges',
    description: 'Collaborative platform for developers to participate in coding challenges, share solutions, and showcase their skills.',
    technologies: ['React', 'WebSockets', 'Node.js'],
    gradient: 'from-teal-400/20 to-cyan-400/20',
    borderColor: 'border-teal-400/30',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
    link: 'https://github.com/LemonLamo/hollow-dev-challenges',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-16 px-6 apple-grid relative overflow-hidden"
    >

      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative glass-effect rounded-3xl hover:shadow-2xl hover:shadow-[#ff7b6c]/20 transition-all duration-700 overflow-hidden ${hoveredIndex === index ? 'scale-105' : 'scale-100'}`}
            >
              <div className="relative z-10">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden rounded-t-3xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-[#ff7b6c] transition-all duration-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-900 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 glass-effect border border-[#a78bfa]/20 text-[#a78bfa] text-xs rounded-full font-semibold transition-all duration-500 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#ff7b6c] font-semibold hover:gap-3 transition-all duration-500 group/link"
                  >
                    View Project
                    <svg
                      className="w-5 h-5 transition-transform duration-500 group-hover/link:translate-x-1"
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
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
