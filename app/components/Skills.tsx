'use client';

import { useRef } from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiMysql,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiExpress,
  SiOracle,
  SiPhp,
  SiC,
  SiLinux,
  SiBootstrap,
  SiFigma,
  SiRabbitmq,
  SiPostman,
  SiTailwindcss,
  SiRedis,
  SiPostgresql,
  SiGraphql,
  SiAmazon,
  SiSpringboot,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-[#ff7b6c] to-[#a78bfa]',
    bgColor: 'glass-effect',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    ],
  },
  {
    title: 'Backend',
    color: 'from-[#a78bfa] to-[#ff7b6c]',
    bgColor: 'glass-effect',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#ffffff' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Java', icon: FaJava, color: '#007396' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
    ],
  },
  {
    title: 'Database',
    color: 'from-[#ff7b6c] to-[#a78bfa]',
    bgColor: 'glass-effect',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      { name: 'Oracle', icon: SiOracle, color: '#F80000' },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
    ],
  },
  {
    title: 'DevOps & Tools',
    color: 'from-[#a78bfa] to-[#ff7b6c]',
    bgColor: 'glass-effect',
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624' },
      { name: 'RabbitMQ', icon: SiRabbitmq, color: '#FF6600' },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-16 px-6 apple-grid relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I use to build exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`group ${category.bgColor} p-6 rounded-3xl hover:scale-105 transition-all duration-300 border-2 border-white/5 hover:border-[#ff7b6c]/30 shadow-lg hover:shadow-2xl hover:shadow-[#ff7b6c]/10`}
            >
              <div className="relative z-10">
                {/* Category Header with improved styling */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className={`w-1 h-16 rounded-full bg-linear-to-b ${category.color} shadow-lg`} />
                  <h3 className={`text-2xl font-bold bg-linear-to-r ${category.color} bg-clip-text text-transparent tracking-tight`}>
                    {category.title}
                  </h3>
                </div>
                
                <ul className="space-y-2.5">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    
                    return (
                      <li
                        key={skill.name}
                        className="skill-item flex items-center gap-3 text-gray-800 dark:text-gray-200 cursor-pointer group/item hover:bg-white/5 p-2.5 rounded-xl transition-all duration-300"
                      >
                        <div className="relative shrink-0">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover/item:scale-110 bg-white/50 dark:bg-gray-800/50 border-2 border-white/10 group-hover/item:border-[#ff7b6c]/50 group-hover/item:shadow-lg group-hover/item:shadow-[#ff7b6c]/20"
                          >
                            <Icon
                              className="w-5 h-5 transition-all duration-300"
                              style={{
                                color: skill.color,
                              }}
                            />
                          </div>
                        </div>
                        <span className="font-semibold text-sm group-hover/item:text-[#ff7b6c] transition-all">
                          {skill.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 dark:text-gray-400 italic">
            + Many more tools and technologies in my toolkit...
          </p>
        </div>
      </div>
    </section>
  );
}
