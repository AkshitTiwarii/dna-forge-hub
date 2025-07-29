import { ArrowRight, Code, Terminal, Cpu, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'DNA FORGE HUB';

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
          <h1 className="text-4xl md:text-8xl font-black mb-6 tracking-wider text-white">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent font-mono">
              {displayText || 'DNA FORGE HUB'}
            </span>
            <span className="animate-pulse text-green-400">_</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-4 font-light tracking-wide">
            CODE • DEVELOP • DEPLOY
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Building tomorrow's digital infrastructure through clean code, 
            innovative design, and seamless user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-mono text-lg px-12 py-6 tracking-wider transition-all duration-300"
              asChild
            >
              <a href="#contact" className="flex items-center gap-3">
                INITIALIZE
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-mono text-lg px-12 py-6 tracking-wider transition-all duration-300"
              asChild
            >
              <a href="#projects" className="flex items-center gap-3">
                EXPLORE
                <Code className="h-5 w-5" />
              </a>
            </Button>
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


