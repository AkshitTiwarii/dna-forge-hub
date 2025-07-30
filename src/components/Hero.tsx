import { ArrowRight, Code, Terminal, Cpu, Network, Users, Zap, Star, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, opacity: number, speed: number}>>([]);
  const fullText = 'DNA FORGE HUB';

  // Initialize particles
  useEffect(() => {
    const initialParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.5 + 0.1
    }));
    setParticles(initialParticles);
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => {
        const newY = particle.y - particle.speed;
        return {
          ...particle,
          y: newY < -10 ? window.innerHeight + 10 : newY,
          x: particle.x + Math.sin(newY * 0.01) * 0.5,
          opacity: newY < -10 ? Math.random() * 0.5 + 0.1 : particle.opacity
        };
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated Particles Background */}
      <div className="absolute inset-0 z-0">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-green-400 rounded-full"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 2}px rgba(0, 255, 128, ${particle.opacity})`
            }}
          />
        ))}
      </div>

      {/* Interactive Grid Background - Layer 1 */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 grid-background"></div>
      </div>
      
      {/* Additional moving grid overlay - Layer 2 */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 128, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 128, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridMove 25s linear infinite'
        }}></div>
      </div>

      {/* Cyan accent grid - Layer 3 */}
      <div className="absolute inset-0 opacity-12">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          animation: 'gridMove 35s linear infinite reverse'
        }}></div>
      </div>

      {/* Floating grid particles */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(0, 255, 128, 0.2) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(0, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          animation: 'gridMove 40s linear infinite'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Terminal Header */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="font-mono text-sm text-gray-400 ml-4">terminal</span>
            </div>
            <div className="font-mono text-sm">
              <span className="text-green-400">user@dna-forge:~$</span>
              <span className="text-white ml-2">init --project=dna-forge-hub</span>
              <span className="text-green-400 animate-pulse ml-1">|</span>
            </div>
          </div>

          {/* Main Title */}
          <div className="mb-8">
            <div className="inline-flex items-center bg-green-400/10 border border-green-400/30 rounded-full px-6 py-2 mb-6">
              <Star className="h-4 w-4 text-green-400 mr-2" />
              <span className="text-green-400 font-mono text-sm">Join the Future of Development</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-wider text-white">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent font-mono">
                {displayText || 'DNA FORGE HUB'}
              </span>
              <span className="animate-pulse text-green-400">_</span>
            </h1>
          </div>
          
          <div className="mb-12">
            <p className="text-2xl md:text-3xl text-white mb-4 font-bold">
              Where <span className="text-green-400">Innovation</span> Meets <span className="text-cyan-400">Excellence</span>
            </p>
            
            <p className="text-lg text-gray-400 mb-6 max-w-4xl mx-auto font-light leading-relaxed">
              Build tomorrow's digital infrastructure through clean code, innovative design, 
              and seamless user experiences. Join our community of developers, designers, and tech enthusiasts.
            </p>

            <div className="flex justify-center gap-8 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-green-400" />
                <span>200+ Active Members</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4 text-cyan-400" />
                <span>5+ Projects Built</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-400" />
                <span>Open Source Contributions</span>
              </div>
            </div>
          </div>

          {/* Primary CTA Button */}
          <div className="flex justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-400 to-green-500 text-black hover:from-green-500 hover:to-green-600 font-bold text-lg px-12 py-4 rounded-xl shadow-lg shadow-green-400/25 hover:shadow-green-400/40 transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="https://chat.whatsapp.com/LOC5LAO9iDAD8S9OtygofA?mode=ac_t" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <Zap className="h-5 w-5" />
                JOIN DNA FORGE HUB
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Secondary Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a 
              href="#projects" 
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-cyan-400/10"
            >
              <Code className="h-4 w-4" />
              Explore Projects
            </a>
            
            <a 
              href="/opportunities" 
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-blue-400/10"
            >
              <Briefcase className="h-4 w-4" />
              Opportunities
            </a>
            
            <a 
              href="#about" 
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-purple-400/10"
            >
              <Users className="h-4 w-4" />
              Meet the Team
            </a>
          </div>

          {/* Status Bar */}
          <div className="mt-16 bg-gray-900 border border-gray-700 rounded-lg p-4 max-w-md mx-auto">
            <div className="flex items-center justify-between font-mono text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-green-400">ONLINE</span>
              </div>
              <div className="text-gray-400">
                UPTIME: 99.9%
              </div>
              <div className="text-gray-400">
                LOAD: 0.1
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator 
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center bg-black/20 backdrop-blur-sm">
            <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse shadow-lg shadow-green-400/50"></div>
          </div>
          <div className="text-xs text-green-400 font-mono mt-2 text-center opacity-70">SCROLL</div>
        </div>*/}
      </div> 
    </section>
  );
};

export default Hero;


