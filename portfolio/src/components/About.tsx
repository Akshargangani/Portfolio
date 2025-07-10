import React, { useEffect, useRef } from 'react';
import { MapPin, Mail, Phone, CheckCircle } from 'lucide-react';
import { aboutMe } from '../data';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
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
      id="about"
      ref={sectionRef}
      className="section bg-white dark:bg-slate-800 opacity-0"
    >
      <div className="container">
        <div className="section-title">
          <h2 className="relative inline-block text-slate-900 dark:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-indigo-500 dark:after:bg-indigo-400">
            About Me
          </h2>
          <p>Get to know me better</p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-6">
            {/* Profile Image Section */}
            <div className="relative w-full max-w-md mx-auto mb-8">
              <div className="relative z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 rounded-2xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 rounded-2xl transform -rotate-3 scale-105"></div>
                <div className="relative">
                  <img
                    src={aboutMe.profileImage}
                    alt={aboutMe.name}
                    className="w-full h-auto rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 rounded-full blur-2xl"></div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              My Story
            </h3>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              {aboutMe.bio.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <MapPin className="w-5 h-5 mr-3 text-indigo-600 dark:text-indigo-400" />
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Location
                  </p>
                  <p className="text-slate-900 dark:text-white">
                    {aboutMe.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <Mail className="w-5 h-5 mr-3 text-indigo-600 dark:text-indigo-400" />
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Email
                  </p>
                  <p className="text-slate-900 dark:text-white">
                    {aboutMe.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <Phone className="w-5 h-5 mr-3 text-indigo-600 dark:text-indigo-400" />
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Phone
                  </p>
                  <p className="text-slate-900 dark:text-white">
                    {aboutMe.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <CheckCircle className="w-5 h-5 mr-3 text-indigo-600 dark:text-indigo-400" />
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Availability
                  </p>
                  <p className="text-slate-900 dark:text-white">
                    {aboutMe.availability}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#contact"
                className="btn btn-primary"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;