export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative apple-grid py-16 px-6 overflow-hidden border-t border-[#ff7b6c]/20">
      {/* Subtle glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#ff7b6c]/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Left: Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">
              Lamia Koucem
            </h3>
            <p className="text-gray-900 dark:text-gray-400 text-sm leading-relaxed">
              Software Engineering Student
              <br />
              @ USTHB
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-4 py-1.5 glass-effect rounded-full text-[#ff7b6c] text-xs font-semibold">
                Full Stack Developer
              </span>
              <span className="px-4 py-1.5 glass-effect rounded-full text-[#a78bfa] text-xs font-semibold">
                Available
              </span>
            </div>
          </div>

          {/* Middle: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
              Navigation
            </h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-900 dark:text-gray-400 hover:text-[#ff7b6c] transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff7b6c] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="https://github.com/LemonLamo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-900 dark:text-gray-400 hover:text-[#ff7b6c] transition-colors duration-300 group"
              >
                <div className="w-10 h-10 glass-effect rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/lamia-koucem-1a4447260"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-900 dark:text-gray-400 hover:text-[#a78bfa] transition-colors duration-300 group"
              >
                <div className="w-10 h-10 glass-effect rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="mailto:lamia.koucem@gmail.com"
                className="flex items-center gap-3 text-gray-900 dark:text-gray-400 hover:text-[#ff7b6c] transition-colors duration-300 group"
              >
                <div className="w-10 h-10 glass-effect rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-[#ff7b6c]/30 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-900 dark:text-gray-400">
            © {currentYear} Lamia Koucem. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-gray-900 dark:text-gray-400">
            <span>Built with</span>
            <div className="flex items-center gap-2">
              <span className="text-[#ff7b6c] font-semibold">Next.js</span>
              <span>•</span>
              <span className="text-[#a78bfa] font-semibold">GSAP</span>
              <span>•</span>
              <span className="text-[#ff7b6c] font-semibold">Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
