import { Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useStore } from '@/lib/store';
import { UserAvatar } from './UserAvatar';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const currentPath = location.pathname.slice(1) || '';

  // Reset active section when changing pages
  useEffect(() => {
    setActiveSection('');
  }, [location.pathname]);

  useEffect(() => {
    if (!isHomePage) return;
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'team', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      let currentSection = '';

      // Special handling for home section - active when at the very top
      if (scrollPosition < window.innerHeight / 2) {
        currentSection = 'home';
      } else {
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop - 200; // Add some buffer
            const offsetBottom = offsetTop + element.offsetHeight;

            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
              currentSection = section;
              break;
            }
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Terminal className="h-8 w-8 text-green-400 animate-pulse group-hover:text-cyan-400 transition-colors duration-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
            </div>
            <div className="font-mono">
              <span className="text-xl font-black text-white tracking-wider group-hover:text-green-400 transition-colors duration-300">DNA</span>
              <span className="text-xl font-black text-green-400 tracking-wider ml-1 group-hover:text-cyan-400 transition-colors duration-300">FORGE</span>
              <span className="text-xl font-black text-cyan-400 tracking-wider ml-1 group-hover:text-green-400 transition-colors duration-300">HUB</span>
            </div>
          </Link>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <a
                href="#home"
                onClick={(e) => handleSmoothScroll(e, 'home')}
                className={`font-mono text-sm tracking-wide transition-all duration-300 relative ${
                  activeSection === 'home'
                    ? 'text-green-400' 
                    : 'text-gray-300 hover:text-green-400'
                }`}
              >
                HOME
                {activeSection === 'home' && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400 animate-pulse"></div>
                )}
              </a>
            ) : (
              <Link 
                to="/"
                className="font-mono text-sm tracking-wide transition-all duration-300 relative text-gray-300 hover:text-green-400"
              >
                HOME
              </Link>
            )}
            {isHomePage ? (
              <a 
                href="#about" 
                onClick={(e) => handleSmoothScroll(e, 'about')}
                className={`font-mono text-sm tracking-wide transition-all duration-300 relative ${
                  activeSection === 'about' 
                    ? 'text-green-400' 
                    : 'text-gray-300 hover:text-green-400'
                }`}
              >
                ABOUT
                {activeSection === 'about' && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400 animate-pulse"></div>
                )}
              </a>
            ) : (
              <Link 
                to="/#about"
                className="font-mono text-sm tracking-wide transition-all duration-300 relative text-gray-300 hover:text-green-400"
              >
                ABOUT
              </Link>
            )}

            {isHomePage ? (
              <a 
                href="#team" 
                onClick={(e) => handleSmoothScroll(e, 'team')}
                className={`font-mono text-sm tracking-wide transition-all duration-300 relative ${
                  activeSection === 'team' 
                    ? 'text-green-400' 
                    : 'text-gray-300 hover:text-green-400'
                }`}
              >
                TEAM
                {activeSection === 'team' && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400 animate-pulse"></div>
                )}
              </a>
            ) : (
              <Link 
                to="/#team"
                className="font-mono text-sm tracking-wide transition-all duration-300 relative text-gray-300 hover:text-green-400"
              >
                TEAM
              </Link>
            )}

            <Link
              to="/events"
              className={`font-mono text-sm tracking-wide transition-all duration-300 relative ${
                currentPath === 'events' 
                  ? 'text-green-400' 
                  : 'text-gray-300 hover:text-green-400'
              }`}
            >
              EVENTS
              {currentPath === 'events' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400 animate-pulse"></div>
              )}
            </Link>

            {isHomePage ? (
              <a 
                href="#projects" 
                onClick={(e) => handleSmoothScroll(e, 'projects')}
                className={`font-mono text-sm tracking-wide transition-all duration-300 relative ${
                  activeSection === 'projects' 
                    ? 'text-green-400' 
                    : 'text-gray-300 hover:text-green-400'
                }`}
              >
                PROJECTS
                {activeSection === 'projects' && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400 animate-pulse"></div>
                )}
              </a>
            ) : (
              <Link 
                to="/#projects"
                className="font-mono text-sm tracking-wide transition-all duration-300 relative text-gray-300 hover:text-green-400"
              >
                PROJECTS
              </Link>
            )}

            <Link 
              to="/opportunities"
              className={`font-mono text-sm tracking-wide transition-all duration-300 relative ${
                location.pathname === '/opportunities' 
                  ? 'text-blue-400' 
                  : 'text-gray-300 hover:text-blue-400'
              }`}
            >
              OPPORTUNITIES
            </Link>

            {isHomePage ? (
              <a 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className={`font-mono text-sm tracking-wide transition-all duration-300 relative ${
                  activeSection === 'contact' 
                    ? 'text-green-400' 
                    : 'text-gray-300 hover:text-green-400'
                }`}
              >
                CONTACT
                {activeSection === 'contact' && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400 animate-pulse"></div>
                )}
              </a>
            ) : (
              <Link 
                to="/#contact"
                className="font-mono text-sm tracking-wide transition-all duration-300 relative text-gray-300 hover:text-green-400"
              >
                CONTACT
              </Link>
            )}
          </div>

          {/* System Status */}
          <div className="flex items-center space-x-4">
            <Button
              size="sm"
              className="bg-transparent border border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-mono text-xs px-4 py-2 tracking-wide transition-all duration-200"
              asChild
            >
              <Link to="/login">
                INIT
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;