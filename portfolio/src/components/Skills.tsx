import React, { useEffect, useRef } from 'react';
import { skills } from '../data';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            // Animate skill bars
            const skillBars = document.querySelectorAll('.skill-bar-fill');
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.width = `${(bar as HTMLElement).dataset.level}%`;
              }, 300 + index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryTitles = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    design: 'Design',
    other: 'Other Skills',
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section bg-slate-50 dark:bg-slate-900 opacity-0"
    >
      <div className="container">
        <div className="section-title">
          <h2 className="relative inline-block text-slate-900 dark:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-indigo-500 dark:after:bg-indigo-400">
            My Skills
          </h2>
          <p>Technical skills &amp; proficiency</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {categoryTitles[category as keyof typeof categoryTitles]}
              </h3>
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-slate-600 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="skill-bar-fill h-full bg-indigo-600 dark:bg-indigo-500 rounded-full transition-all duration-1000 ease-out-expo"
                        style={{ width: '0%' }}
                        data-level={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;