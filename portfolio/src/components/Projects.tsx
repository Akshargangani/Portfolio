import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Search, Tags } from 'lucide-react';
import { projects } from '../data';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleProjects, setVisibleProjects] = useState(projects);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Extract unique tags from all projects
  const allTags = ['all', ...Array.from(new Set(projects.flatMap((project) => project.tags)))];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            // Animate project cards
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-slide-up');
              }, 100 * index);
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

  useEffect(() => {
    const filtered = projects.filter((project) => {
      const matchesFilter = filter === 'all' || project.tags.includes(filter);
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
    setVisibleProjects(filtered);
  }, [filter, searchQuery]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 opacity-0"
    >
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <p>Explore my recent work and creative solutions</p>
        </div>

        <div className="mb-12 space-y-6">
          {/* Search and Filter Bar */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 rounded-full border-2 border-transparent focus:border-indigo-500 dark:focus:border-indigo-400 outline-none transition-all duration-300"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <Tags className="w-5 h-5 text-slate-400 flex-shrink-0" />
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    filter === tag
                      ? 'bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 text-white shadow-lg shadow-indigo-500/25'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:shadow-md'
                  }`}
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="project-card group opacity-0"
            >
              <div className="relative overflow-hidden aspect-video rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-3 mb-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300"
                          aria-label="Visit project"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300"
                          aria-label="View source code"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </a>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={`${project.id}-${tag}`}
                          className="px-3 py-1 text-xs font-medium text-white bg-white/10 backdrop-blur-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-slate-600 dark:text-slate-400">
              No projects found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;