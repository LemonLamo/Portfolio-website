'use client';

import { useRef } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 px-6 apple-grid relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-900 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about creating elegant digital experiences
          </p>
        </div>

        {/* Main Content */}
        <div ref={contentRef} className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-3xl p-8 md:p-12 mb-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-900 dark:text-gray-300 leading-relaxed">
                I'm a <span className="font-semibold text-[#ff7b6c] highlight-line">software engineering student at USTHB</span>, 
                driven by a passion for building innovative and impactful solutions. With hands-on experience in 
                modern web technologies and full-stack development, I specialize in creating scalable, 
                performant applications that deliver exceptional user experiences.
              </p>
              <p className="text-lg text-gray-900 dark:text-gray-300 leading-relaxed">
                My journey spans <span className="font-semibold text-[#ff7b6c]">frontend frameworks</span> like React and Next.js, 
                <span className="font-semibold text-[#a78bfa]"> backend technologies</span> including Node.js and Spring Boot, 
                and modern DevOps practices. I'm constantly exploring emerging technologies to stay at the forefront of innovation.
              </p>
            </div>

            {/* Key Values */}
            <div className="flex flex-wrap gap-3 mt-8">
              {['Clean Code', 'Problem Solving', 'Continuous Learning', 'Team Collaboration'].map((value) => (
                <span
                  key={value}
                  className="px-5 py-2.5 glass-effect rounded-full text-sm font-semibold text-gray-900 dark:text-gray-300 hover:scale-105 hover:border-[#ff7b6c]/30 transition-all duration-300"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
