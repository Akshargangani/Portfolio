import React from 'react';
import { socials } from '../data';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
  twitter: <Twitter size={20} />,
  instagram: <Instagram size={20} />,
  mail: <Mail size={20} />,
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-slate-900 text-slate-300">
      <div className="container">
        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          <div>
            <h3 className="text-xl font-bold text-white">Portfolio</h3>
            <p className="mt-2 text-sm text-slate-400">
              Showcasing my work and skills
            </p>
          </div>

          <div className="flex items-center space-x-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-colors duration-300 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white"
                aria-label={social.name}
              >
                {iconMap[social.icon] || <span>{social.name}</span>}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 mt-8 text-sm text-center text-slate-500 border-t border-slate-800">
          <p>
            &copy; {currentYear} All Rights Reserved. Designed &amp; Developed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;