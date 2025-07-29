import { Terminal, Wifi, Cpu, HardDrive } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
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
              className="text-gray-300 hover:text-green-400 font-mono text-sm tracking-wide transition-colors duration-200"
            >
              HOME
            </a>
            <a 
              href="#about" 
              className="text-gray-300 hover:text-green-400 font-mono text-sm tracking-wide transition-colors duration-200"
            >
              ABOUT
            </a>
            <a 
              href="#team" 
              className="text-gray-300 hover:text-green-400 font-mono text-sm tracking-wide transition-colors duration-200"
            >
              TEAM
            </a>
            <a 
              href="#events" 
              className="text-gray-300 hover:text-green-400 font-mono text-sm tracking-wide transition-colors duration-200"
            >
              EVENTS
            </a>
            <a 
              href="#projects" 
              className="text-gray-300 hover:text-green-400 font-mono text-sm tracking-wide transition-colors duration-200"
            >
              PROJECTS
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-green-400 font-mono text-sm tracking-wide transition-colors duration-200"
            >
              CONTACT
            </a>
          </div>

          {/* System Status */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-3 bg-gray-900 border border-gray-700 rounded-lg px-3 py-1">
              <div className="flex items-center space-x-1">
                <Wifi className="h-3 w-3 text-green-400" />
                <span className="text-xs text-green-400 font-mono">CONNECTED</span>
              </div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="flex items-center space-x-1">
                <Cpu className="h-3 w-3 text-blue-400" />
                <span className="text-xs text-blue-400 font-mono">2.1GHz</span>
              </div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="flex items-center space-x-1">
                <HardDrive className="h-3 w-3 text-purple-400" />
                <span className="text-xs text-purple-400 font-mono">75%</span>
              </div>
            </div>
            
            <Button
              size="sm"
              className="bg-transparent border border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-mono text-xs px-4 py-2 tracking-wide transition-all duration-200"
            >
              INIT
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;