import { Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '@/lib/store';
import { UserAvatar } from './UserAvatar';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'team', 'events', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
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
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Terminal className="h-8 w-8 text-green-400 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
            </div>
            <div className="font-mono">
              <span className="text-xl font-black text-white tracking-wider">DNA</span>
              <span className="text-xl font-black text-green-400 tracking-wider ml-1">FORGE</span>
              <span className="text-xl font-black text-cyan-400 tracking-wider ml-1">HUB</span>
            </div>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
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
            <a 
              href="#events" 
              onClick={(e) => handleSmoothScroll(e, 'events')}
              className={`font-mono text-sm tracking-wide transition-all duration-300 relative ${
                activeSection === 'events' 
                  ? 'text-green-400' 
                  : 'text-gray-300 hover:text-green-400'
              }`}
            >
              EVENTS
              {activeSection === 'events' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400 animate-pulse"></div>
              )}
            </a>
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
            <Link 
              to="/opportunities"
              className="font-mono text-sm tracking-wide transition-all duration-300 relative text-gray-300 hover:text-blue-400"
            >
              OPPORTUNITIES
            </Link>
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