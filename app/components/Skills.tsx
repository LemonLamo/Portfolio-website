'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-teal-400 to-cyan-400',
    bgColor: 'bg-teal-50 dark:bg-teal-950/30',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', darkColor: '#000000' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    ],
  },
  {
    title: 'Backend',
    color: 'from-rose-400 to-pink-400',
    bgColor: 'bg-rose-50 dark:bg-rose-950/30',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#ffffff', darkColor: '#000000' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Java', icon: FaJava, color: '#007396' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
    ],
  },
  {
    title: 'Database',
    color: 'from-amber-400 to-orange-400',
    bgColor: 'bg-amber-50 dark:bg-amber-950/30',
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
    title: 'DevOps & Cloud',
    color: 'from-emerald-400 to-green-400',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          y: 50,
          opacity: 0,
          duration: 1,
          delay: index * 0.08,
          ease: 'power3.out',
        });

        const skillItems = card.querySelectorAll('.skill-item');
        skillItems.forEach((item) => {
          item.addEventListener('mouseenter', () => {
            gsap.to(item, {
              x: 8,
              scale: 1.05,
              duration: 0.4,
              ease: 'power2.out',
            });
          });
          item.addEventListener('mouseleave', () => {
            gsap.to(item, {
              x: 0,
              scale: 1,
              duration: 0.4,
              ease: 'power2.out',
            });
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Core technologies I work with to build modern applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`group ${category.bgColor} p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border-2 border-gray-200 dark:border-gray-700 hover:border-current hover:-translate-y-1`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-1 h-10 rounded-full bg-linear-to-b ${category.color}`} />
                  <h3 className={`text-lg font-bold bg-linear-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    const isDarkMode = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
                    const iconColor = skill.darkColor && !isDarkMode ? skill.darkColor : skill.color;
                    
                    return (
                      <li
                        key={skill.name}
                        className="skill-item flex items-center gap-3 text-gray-800 dark:text-gray-200 cursor-pointer group/item"
                      >
                        <div className="relative flex-shrink-0">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover/item:scale-110 bg-white dark:bg-gray-800 shadow-sm"
                          >
                            <Icon
                              className="w-6 h-6 transition-all duration-300"
                              style={{
                                color: iconColor,
                                filter: iconColor === '#ffffff' || iconColor === '#000000' 
                                  ? 'none' 
                                  : 'drop-shadow(0 0 2px currentColor)',
                              }}
                            />
                          </div>
                        </div>
                        <span className="font-medium text-sm group-hover/item:font-semibold transition-all">
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
            + Many more tools and technologies in my toolkit 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
