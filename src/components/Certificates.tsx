import React, { useEffect, useRef } from 'react';
import { Calendar, Award, ExternalLink } from 'lucide-react';
import { certificates } from '../data';

const Certificates: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            // Animate timeline items
            const timelineItems = document.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-slide-up');
              }, 300 + index * 150);
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

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="section bg-slate-50 dark:bg-slate-900 opacity-0"
    >
      <div className="container">
        <div className="section-title">
          <h2 className="relative inline-block text-slate-900 dark:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-indigo-500 dark:after:bg-indigo-400">
            Certificates
          </h2>
          <p>Education &amp; certifications</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 w-1 h-full bg-indigo-200 dark:bg-indigo-900/30 md:left-1/2 md:-ml-0.5"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {certificates.map((certificate, index) => (
              <div
                key={certificate.id}
                className={`timeline-item relative opacity-0 ${
                  index % 2 === 0
                    ? 'md:ml-auto md:pl-8 pl-8 md:pr-0'
                    : 'md:mr-auto md:pr-8 pl-8 md:pl-0'
                }`}
                style={{
                  width: '100%',
                  maxWidth: 'calc(50% - 32px)',
                }}
              >
                {/* Timeline Dot */}
                <div
                  className="absolute top-0 left-0 w-8 h-8 p-1 -ml-4 bg-white rounded-full shadow-md dark:bg-slate-800 md:left-1/2 md:-ml-4 z-10"
                  style={{
                    transform: 'translateX(0)',
                  }}
                >
                  <div className="w-full h-full bg-indigo-500 dark:bg-indigo-400 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="relative p-6 bg-white rounded-lg shadow-md dark:bg-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {certificate.title}
                    </h3>
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <Calendar size={14} className="mr-1" />
                      {certificate.date}
                    </div>
                  </div>
                  <div className="mb-4 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    {certificate.organization}
                  </div>
                  <p className="mb-4 text-slate-700 dark:text-slate-300">
                    {certificate.description}
                  </p>
                  {certificate.link && (
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      View Certificate
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;