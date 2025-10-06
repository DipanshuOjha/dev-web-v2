
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Moon, Sun } from 'lucide-react';
import { Switch } from './ui/switch';
import { cn } from '@/lib/utils';
import { useTheme } from './theme-provider';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === "dark";
  
  
  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div className={cn(
      "min-h-screen flex flex-col transition-colors duration-300",
      isDarkMode 
        ? "dark bg-gray-900 text-white" 
        : "bg-white text-gray-900"
    )}>
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg">
        <Sun className="w-4 h-4 text-yellow-500" />
        <Switch 
          checked={isDarkMode}
          onCheckedChange={toggleTheme}
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
