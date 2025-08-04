import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Grid Dots Background */}
      <div className="absolute inset-0">
        {/* Base black background */}
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Grid dots pattern - more visible */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px'
          }}
        />
        
        {/* Additional smaller dots for depth */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(34, 197, 94, 0.3) 0.5px, transparent 0.5px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: '20px 20px'
          }}
        />
        
        {/* Radial fade-out mask - increased fade effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 50% 50%, transparent 0%, transparent 20%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.9) 80%, rgba(0, 0, 0, 1) 100%)`
          }}
        />
        
        {/* Enhanced top and bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        
        {/* Badge */}
        <div className={`inline-flex items-center bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8 text-sm transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
          <span className="text-green-400 font-medium">SYSTEM.ONLINE</span>
        </div>
        
        {/* Main Heading */}
        <div className={`mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight relative">
              <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-flow relative">
                DNA FORGE HUB
                {/* Sparkling effects */}
                <span className="absolute -top-2 left-10 w-1 h-1 bg-white rounded-full animate-ping opacity-75"></span>
                <span className="absolute -top-4 right-20 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-300"></span>
                <span className="absolute top-8 left-32 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-500"></span>
                <span className="absolute -top-1 right-10 w-0.5 h-0.5 bg-purple-400 rounded-full animate-pulse delay-700"></span>
                <span className="absolute top-6 left-56 w-1 h-1 bg-white rounded-full animate-ping delay-1000"></span>
                <span className="absolute -top-3 left-80 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-1200"></span>
                
                {/* Larger sparkle effects */}
                <span className="absolute -top-6 left-40 w-2 h-2 bg-white rounded-full animate-bounce delay-200 opacity-60"></span>
                <span className="absolute top-10 right-32 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-800 opacity-60"></span>
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-green-400 mb-6 tracking-wide">
            WHERE ELITE DEVELOPERS FORGE THE FUTURE
          </p>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A minimalist development collective focused on building efficient, scalable, and 
            aesthetically clean digital solutions. We specialize in systems-level programming, 
            modern web architecture, and innovative user interfaces.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-black font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://chat.whatsapp.com/LOC5LAO9iDAD8S9OtygofA?mode=ac_t" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                Join Community
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 bg-transparent text-gray-300 hover:text-green-400 hover:border-green-400 text-lg px-8 py-4 rounded-full transition-all duration-300"
              asChild
            >
              <a href="/projects" className="flex items-center gap-3">
                View Projects
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="absolute bottom-0 left-0 right-0 backdrop-blur-lg bg-black/30 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-mono text-sm">DNA FORGE AI</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About</a>
              <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a>
              <a href="/projects" className="text-gray-400 hover:text-white transition-colors text-sm">Projects</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


