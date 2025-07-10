import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  toggleTheme: () => void;
  theme: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleTheme, theme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="fixed z-50 flex items-center justify-center p-3 text-white bg-indigo-600 rounded-full shadow-lg bottom-6 right-6 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300"
      aria-label="Toggle dark mode"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

export default ThemeToggle;