import { ArrowRight, Code, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const features = [
    { icon: Code, text: 'Open Source' },
    { icon: Users, text: 'Community' },
    { icon: Zap, text: 'Innovation' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">DNA Society</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Developers of Next Gen Application
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Building the future through code, collaboration, and community. 
            Join us in creating innovative solutions that shape tomorrow's digital landscape.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full hover-glow"
              >
                <feature.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button
              size="lg"
              className="btn-primary hover-glow text-lg px-8 py-6"
              asChild
            >
              <a href="#contact">
                Join DNA Society
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="glass-card hover-glow text-lg px-8 py-6"
              asChild
            >
              <a href="#projects">
                View Our Work
              </a>
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-primary-glow rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;