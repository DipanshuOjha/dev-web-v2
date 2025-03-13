
import { ReactNode, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Moon, Sun } from 'lucide-react';
import { Switch } from './ui/switch';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Apply dark mode when the toggle changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  
  // Check system preference on initial load
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  return (
    <div className={cn(
      "min-h-screen flex flex-col transition-colors duration-300",
      isDarkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
    )}>
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg">
        <Sun className="w-4 h-4 text-yellow-500" />
        <Switch 
          checked={isDarkMode}
          onCheckedChange={setIsDarkMode}
          className="data-[state=checked]:bg-portfolio-accent"
        />
        <Moon className="w-4 h-4 text-portfolio-primary dark:text-blue-400" />
      </div>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
