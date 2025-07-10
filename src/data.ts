import { Skill, Project, Certificate, NavItem, Social } from './types';

export const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export const skills: Skill[] = [
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'Next.js', level: 88, category: 'frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express', level: 82, category: 'backend' },
  { name: 'PostgreSQL', level: 78, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  { name: 'UI/UX Design', level: 88, category: 'design' },
  { name: 'Figma', level: 85, category: 'design' },
  { name: 'Git', level: 90, category: 'other' },
  { name: 'DevOps', level: 75, category: 'other' },
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'AI-Powered Task Manager',
    description: 'Smart task management app with AI-driven prioritization and scheduling.',
    image: 'https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'TypeScript', 'Node.js', 'AI'],
    github: 'https://github.com/Akshargangani',
    link: 'https://ai-task-manager.demo',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Real-time Analytics Dashboard',
    description: 'Interactive dashboard for real-time data visualization and analysis.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'D3.js', 'WebSocket'],
    github: 'https://github.com/Akshargangani',
    link: 'https://analytics-dashboard.demo',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'E-Learning Platform',
    description: 'Modern platform for online education with interactive courses.',
    image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Akshargangani',
    link: 'https://elearning-platform.demo',
    featured: true,
  }
];

export const certificates: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Advanced React & GraphQL',
    organization: 'Frontend Masters',
    date: 'March 2024',
    description: 'Advanced concepts in React and GraphQL development.',
    link: 'https://frontendmasters.com/cert/123',
  },
  {
    id: 'cert-2',
    title: 'AWS Solutions Architect',
    organization: 'Amazon Web Services',
    date: 'January 2024',
    description: 'Cloud architecture and AWS services certification.',
    link: 'https://aws.amazon.com/cert/456',
  },
  {
    id: 'cert-3',
    title: 'Full Stack Development',
    organization: 'University of Technology',
    date: 'December 2023',
    description: 'Comprehensive full stack web development program.',
    link: 'https://university.edu/cert/789',
  }
];

export const socials: Social[] = [
  { name: 'GitHub', url: 'https://github.com/Akshargangani', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/akshar-gangani/', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://x.com/akshar_gangani', icon: 'twitter' },
];

export const aboutMe = {
  name: 'Akshar Patel',
  title: 'Full Stack Developer',
  profileImage: "https://gateway.pinata.cloud/ipfs/QmciTgwt3iUndBu1TerQSaEva3mQMXzr2EUvGBMPeusJAZ",
  bio: `Passionate full stack developer with expertise in building modern web applications. Specializing in React, Node.js, and cloud technologies.

  With 5+ years of experience, I've helped startups and enterprises deliver exceptional digital experiences. I believe in clean code, user-centric design, and continuous learning.
  
  Currently focused on AI integration and cloud-native applications.`,
  location: 'San Francisco, CA',
  email: 'akshargangani2006@gmail.com',
  phone: '+1 (555) 123-4567',
  availability: 'Open to new opportunities',
};