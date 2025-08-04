import { Terminal, ChevronDown, Home, Users, Calendar, FolderOpen, Briefcase, Mail } from 'lucide-react';
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
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/90 border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Terminal className="h-7 w-7 text-green-400 group-hover:text-cyan-400 transition-all duration-300" />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-cyan-400 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="font-mono">
              <span className="text-lg font-bold text-white tracking-tight group-hover:text-green-400 transition-colors duration-300">DNA</span>
              <span className="text-lg font-bold text-green-400 tracking-tight ml-0.5 group-hover:text-cyan-400 transition-colors duration-300">FORGE</span>
              <span className="text-lg font-bold text-cyan-400 tracking-tight ml-0.5 group-hover:text-green-400 transition-colors duration-300">HUB</span>
            </div>
          </Link>

          {/* Simple Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {isHomePage ? (
              <a
                href="#home"
                onClick={(e) => handleSmoothScroll(e, 'home')}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === 'home'
                    ? 'text-green-400' 
                    : 'text-gray-300 hover:text-green-400'
                }`}
              >
                Home
              </a>
            ) : (
              <Link 
                to="/"
                className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors duration-300"
              >
                Home
              </Link>
            )}

            {isHomePage ? (
              <a 
                href="#about" 
                onClick={(e) => handleSmoothScroll(e, 'about')}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === 'about' 
                    ? 'text-green-400' 
                    : 'text-gray-300 hover:text-green-400'
                }`}
              >
                About
              </a>
            ) : (
              <Link 
                to="/#about"
                className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors duration-300"
              >
                About
              </Link>
            )}

            {isHomePage ? (
              <a 
                href="#team" 
                onClick={(e) => handleSmoothScroll(e, 'team')}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === 'team' 
                    ? 'text-green-400' 
                    : 'text-gray-300 hover:text-green-400'
                }`}
              >
                Team
              </a>
            ) : (
              <Link 
                to="/#team"
                className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors duration-300"
              >
                Team
              </Link>
            )}

            <Link
              to="/events"
              className={`text-sm font-medium transition-colors duration-300 ${
                currentPath === 'events' 
                  ? 'text-green-400' 
                  : 'text-gray-300 hover:text-green-400'
              }`}
            >
              Events
            </Link>

            <Link 
              to="/projects"
              className={`text-sm font-medium transition-colors duration-300 ${
                location.pathname === '/projects' 
                  ? 'text-green-400' 
                  : 'text-gray-300 hover:text-green-400'
              }`}
            >
              Projects
            </Link>

            <Link 
              to="/opportunities"
              className={`text-sm font-medium transition-colors duration-300 ${
                location.pathname === '/opportunities' 
                  ? 'text-blue-400' 
                  : 'text-gray-300 hover:text-blue-400'
              }`}
            >
              Opportunities
            </Link>

            {isHomePage ? (
              <a 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === 'contact' 
                    ? 'text-green-400' 
                    : 'text-gray-300 hover:text-green-400'
                }`}
              >
                Contact
              </a>
            ) : (
              <Link 
                to="/#contact"
                className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors duration-300"
              >
                Contact
              </Link>
            )}
          </div>

          {/* Sign In Button - Visible and Clean */}
          <div className="flex items-center">
            <Button
              size="sm"
              className="bg-green-400 text-black hover:bg-green-300 font-medium text-sm px-6 py-2 transition-all duration-300 rounded-md"
              asChild
            >
              <Link to="/login">
                Sign In
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;