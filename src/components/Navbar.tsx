import { useState, useEffect } from 'react';
import { Menu, X, Home, User, GraduationCap, FolderOpen, Briefcase, Code, Activity, MessageSquare, BookOpen, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './theme-provider';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [activeSection, setActiveSection] = useState('home');
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    // { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Projects', href: '#projects', icon: FolderOpen },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    // { name: 'Skills', href: '#skills', icon: Code },
    // { name: 'Activity', href: '#activity', icon: Activity },
    // { name: 'Testimonials', href: '#testimonials', icon: MessageSquare },
    // { name: 'Blog', href: '#blog', icon: BookOpen },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? `${
              isDarkMode 
                ? 'bg-gray-900/95 border-b border-gray-700/50' 
                : 'bg-white/95'
            } backdrop-blur-xl shadow-lg py-3` 
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="section-container">
        <div className="flex items-center justify-between w-full">
          {/* Left spacer for balance */}
          <div className="lg:flex-1"></div>
          
          {/* Desktop Menu - Centered */}
          <nav className="hidden lg:flex items-center justify-center space-x-1 flex-1">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.substring(1);
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <motion.a
                    href={link.href}
                    className={`relative flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? isDarkMode
                          ? 'text-portfolio-accent bg-portfolio-accent/10'
                          : 'text-portfolio-accent bg-portfolio-accent/10'
                        : isDarkMode
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                        : 'text-gray-700 hover:text-portfolio-primary hover:bg-gray-100/50'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={16} className="transition-transform group-hover:scale-110" />
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-portfolio-accent/20 to-blue-500/20 rounded-lg -z-10"
                        layoutId="activeTab"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.a>
                </motion.div>
              );
            })}
          </nav>

          {/* Right side - Mobile Menu Toggle */}
          <div className="flex justify-end lg:flex-1">
            <motion.button 
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                  : 'text-portfolio-primary hover:bg-gray-100/50'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className={`lg:hidden fixed top-0 right-0 h-full w-80 z-50 ${
                isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'
              } backdrop-blur-xl border-l ${
                isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'
              } shadow-2xl`}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="p-6 pt-20">
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className={`text-lg font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Navigation
                  </h3>
                  <div className={`h-1 w-12 rounded-full bg-gradient-to-r from-portfolio-accent to-blue-500`} />
                </motion.div>
                
                <nav className="space-y-2">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon;
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                      >
                        <motion.a
                          href={link.href}
                          className={`flex items-center gap-4 p-4 rounded-xl text-base font-medium transition-all duration-300 ${
                            isActive
                              ? 'bg-portfolio-accent text-white shadow-lg'
                              : isDarkMode
                              ? 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                              : 'text-gray-700 hover:text-portfolio-primary hover:bg-gray-100/50'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <motion.div
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            className={`p-2 rounded-lg ${
                              isActive 
                                ? 'bg-white/20' 
                                : isDarkMode 
                                ? 'bg-gray-700/50' 
                                : 'bg-gray-200/50'
                            }`}
                          >
                            <Icon size={18} />
                          </motion.div>
                          <span>{link.name}</span>
                          {isActive && (
                            <motion.div
                              className="ml-auto w-2 h-2 bg-white rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", bounce: 0.5 }}
                            />
                          )}
                        </motion.a>
                      </motion.div>
                    );
                  })}
                </nav>
                
                <motion.div
                  className="mt-8 pt-6 border-t border-gray-200/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className={`text-sm text-center ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Data Scientist & ML Engineer
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
