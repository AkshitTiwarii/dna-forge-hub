import { Rocket, Zap, Star, Github, ExternalLink, Code, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const features = [
    {
      icon: Rocket,
      title: 'Performance Tools',
      description: 'Next-gen development utilities',
      color: 'purple'
    },
    {
      icon: Zap,
      title: 'AI Integration',
      description: 'Smart coding assistance',
      color: 'cyan'
    },
    {
      icon: Star,
      title: 'Community Focus',
      description: 'Built by developers, for developers',
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple':
        return {
          icon: 'text-purple-400',
          title: 'text-purple-400',
          glow: 'hover:shadow-purple-400/20'
        };
      case 'cyan':
        return {
          icon: 'text-cyan-400',
          title: 'text-cyan-400',
          glow: 'hover:shadow-cyan-400/20'
        };
      case 'green':
        return {
          icon: 'text-green-400',
          title: 'text-green-400',
          glow: 'hover:shadow-green-400/20'
        };
      default:
        return {
          icon: 'text-gray-400',
          title: 'text-gray-400',
          glow: 'hover:shadow-gray-400/20'
        };
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Innovative solutions and open-source contributions that drive the future of
            technology.
          </p>
        </div>

        {/* Coming Soon Section */}
        <div className="text-center mb-12">
          <div className="glass-card p-16 rounded-2xl max-w-6xl mx-auto border border-dashed border-purple-400/30">
            <div className="mb-12">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Code className="h-12 w-12 text-purple-400" />
                <Plus className="h-6 w-6 text-cyan-400 ml-2" />
              </div>
              <h3 className="text-4xl font-bold mb-4">
                <span className="text-purple-400 animate-pulse">Amazing Projects</span>
                <br />
                <span className="text-cyan-400">Coming Soon_</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
                We're cooking up some incredible open-source projects that will
                revolutionize how developers build, collaborate, and innovate together.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {features.map((feature, index) => {
                const colors = getColorClasses(feature.color);
                const IconComponent = feature.icon;
                
                return (
                  <div
                    key={index}
                    className={`glass-card p-6 rounded-xl border border-gray-800 hover:border-${feature.color}-400/50 transition-all duration-300 hover:transform hover:scale-105 ${colors.glow} hover:shadow-2xl group`}
                  >
                    <div className="text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-${feature.color}-400/20 to-${feature.color}-400/10 flex items-center justify-center group-hover:animate-pulse`}>
                        <IconComponent className={`h-8 w-8 ${colors.icon}`} />
                      </div>
                      <h4 className={`text-xl font-bold mb-2 ${colors.title}`}>
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Development Progress */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-muted-foreground mb-4">Development Progress</h4>
              <div className="relative">
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 rounded-full transition-all duration-1000 ease-out animate-pulse"
                    style={{ width: '75%' }}
                  ></div>
                </div>
                <div className="text-center mt-3">
                  <span className="text-2xl font-bold text-cyan-400">75%</span>
                  <span className="text-muted-foreground ml-2">Complete</span>
                </div>
              </div>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center space-x-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-purple-400 animate-bounce"></div>
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 rounded-full bg-green-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400 animate-bounce" style={{ animationDelay: '0.3s' }}></div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-purple-400 text-black hover:bg-purple-500 px-8 py-3 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://github.com/DNA-DEVELOPERS-DEV" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  Follow on GitHub
                </a>
              </Button>
              
              <Button
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="#contact">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Get Notified
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
