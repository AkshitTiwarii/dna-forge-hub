import { Home, Users, Award, Briefcase, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const MobileNav = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        const sections = ['team', 'contact'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        setActiveSection(current || null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const isActive = (path: string, sectionId?: string) => {
    if (path === '/' && sectionId) {
      return location.pathname === '/' && activeSection === sectionId;
    }
    return location.pathname === path;
  };
  
  const handleNavigation = (path: string, sectionId?: string) => {
    if (path !== location.pathname) {
      if (path === '/' && sectionId) {
        window.location.href = `/#${sectionId}`;
        // After navigation completes, scroll to the section
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 0);
      } else {
        window.location.href = path;
      }
    } else if (path === '/' && !sectionId) {
      // When clicking home button while already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId) {
      scrollToSection(sectionId);
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-lg border-t border-white/10 px-6 py-2 md:hidden z-50">
      <div className="flex items-center justify-between max-w-md mx-auto relative">
        {/* Left Items */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => handleNavigation('/events')}
            className={`flex flex-col items-center text-xs transition-colors duration-200 ${
              isActive('/events') ? 'text-green-400' : 'text-muted-foreground hover:text-white/80'
            }`}
          >
            <Award className="h-5 w-5" />
            <span>Events</span>
          </button>
          <button
            onClick={() => handleNavigation('/', 'team')}
            className={`flex flex-col items-center text-xs transition-colors duration-200 ${
              isActive('/', 'team') ? 'text-green-400' : 'text-muted-foreground hover:text-white/80'
            }`}
          >
            <Users className="h-5 w-5" />
            <span>Team</span>
          </button>
        </div>

        {/* Center Home Button */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-5">
          <button
            onClick={() => handleNavigation('/')}
            className={`flex flex-col items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 text-black shadow-lg ${
              location.pathname === '/' ? 'scale-110' : ''
            } transition-transform duration-200`}
          >
            <Home className="h-6 w-6" />
          </button>
        </div>

        {/* Right Items */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => handleNavigation('/opportunities')}
            className={`flex flex-col items-center text-xs transition-colors duration-200 ${
              isActive('/opportunities') ? 'text-green-400' : 'text-muted-foreground hover:text-white/80'
            }`}
          >
            <Briefcase className="h-5 w-5" />
            <span>Jobs</span>
          </button>
          <button
            onClick={() => handleNavigation('/', 'contact')}
            className={`flex flex-col items-center text-xs transition-colors duration-200 ${
              isActive('/', 'contact') ? 'text-green-400' : 'text-muted-foreground hover:text-white/80'
            }`}
          >
            <Mail className="h-5 w-5" />
            <span>Contact</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
