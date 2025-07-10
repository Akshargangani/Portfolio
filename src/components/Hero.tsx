import React, { useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { aboutMe } from '../data';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (title) title.classList.add('animate-fade-in');
    if (subtitle) {
      setTimeout(() => {
        subtitle.classList.add('animate-slide-up');
      }, 300);
    }
    if (cta) {
      setTimeout(() => {
        cta.classList.add('animate-fade-in');
      }, 600);
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-50 via-indigo-50 to-sky-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] dark:opacity-[0.03]" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block">
            <h1
              ref={titleRef}
              className="text-6xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 dark:from-violet-400 dark:via-indigo-400 dark:to-sky-400 opacity-0 mb-8"
            >
              {aboutMe.name}
            </h1>
            <div className="absolute -inset-1 blur-2xl bg-gradient-to-r from-violet-600/20 via-indigo-600/20 to-sky-600/20 dark:from-violet-400/10 dark:via-indigo-400/10 dark:to-sky-400/10 -z-10" />
          </div>

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-12 opacity-0"
          >
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMe.title}</span>
            <br />
            crafting exceptional digital experiences
          </p>

          <div 
            ref={ctaRef}
            className="flex flex-wrap items-center justify-center gap-6 opacity-0"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 dark:from-violet-500 dark:via-indigo-500 dark:to-sky-500 text-white font-medium rounded-full shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transform hover:translate-y-[-2px] transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-medium rounded-full shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-16 flex items-center justify-center space-x-6">
            <a
              href="https://github.com/Akshargangani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transform hover:translate-y-[-2px] transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/akshar-gangani/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transform hover:translate-y-[-2px] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </a>
            <a
              href={`mailto:${aboutMe.email}`}
              className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transform hover:translate-y-[-2px] transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce-slow">
        <a
          href="#about"
          className="p-2 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transform hover:translate-y-[-2px] transition-all duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6 text-slate-700 dark:text-slate-300" />
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-violet-600/10 via-indigo-600/10 to-sky-600/10 dark:from-violet-400/5 dark:via-indigo-400/5 dark:to-sky-400/5 rounded-bl-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-violet-600/10 via-indigo-600/10 to-sky-600/10 dark:from-violet-400/5 dark:via-indigo-400/5 dark:to-sky-400/5 rounded-tr-full blur-3xl" />
    </section>
  );
};

export default Hero;