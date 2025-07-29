import { Plus, Code, Zap, Rocket, Star } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions and open-source contributions that drive 
            the future of technology.
          </p>
        </div>

        {/* Coming Soon Animation */}
        <div className="text-center">
          <div className="glass-card p-16 rounded-3xl max-w-4xl mx-auto border-2 border-dashed border-purple-400 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-8 h-8 border-2 border-purple-400 rounded animate-spin"></div>
              <div className="absolute top-8 right-8 w-6 h-6 border-2 border-cyan-400 rounded-full animate-bounce"></div>
              <div className="absolute bottom-8 left-12 w-4 h-4 bg-green-400 rounded animate-pulse"></div>
              <div className="absolute bottom-4 right-16 w-5 h-5 border-2 border-yellow-400 rotate-45 animate-spin"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10">
              {/* Icon Container */}
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <Code className="h-12 w-12 text-black animate-pulse" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                    <Plus className="h-4 w-4 text-black animate-spin" />
                  </div>
                </div>
              </div>

              {/* Title with Typewriter Effect */}
              <h3 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
                <span className="text-purple-400">Amazing Projects</span>
                <br />
                <span className="text-cyan-400">Coming Soon</span>
                <span className="animate-pulse text-green-400">_</span>
              </h3>

              {/* Description */}
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're cooking up some incredible open-source projects that will revolutionize 
                how developers build, collaborate, and innovate together.
              </p>

              {/* Feature Previews */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="glass-card p-6 rounded-xl border border-purple-400/30">
                  <Rocket className="h-8 w-8 text-purple-400 mx-auto mb-3 animate-bounce" />
                  <h4 className="font-bold text-purple-400 mb-2">Performance Tools</h4>
                  <p className="text-sm text-muted-foreground">Next-gen development utilities</p>
                </div>
                <div className="glass-card p-6 rounded-xl border border-cyan-400/30">
                  <Zap className="h-8 w-8 text-cyan-400 mx-auto mb-3 animate-pulse" />
                  <h4 className="font-bold text-cyan-400 mb-2">AI Integration</h4>
                  <p className="text-sm text-muted-foreground">Smart coding assistance</p>
                </div>
                <div className="glass-card p-6 rounded-xl border border-green-400/30">
                  <Star className="h-8 w-8 text-green-400 mx-auto mb-3 animate-spin" />
                  <h4 className="font-bold text-green-400 mb-2">Community Focus</h4>
                  <p className="text-sm text-muted-foreground">Built by developers, for developers</p>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="text-sm text-muted-foreground mb-2">Development Progress</div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse" style={{width: '75%'}}></div>
                </div>
                <div className="text-sm text-cyan-400 mt-2 font-mono">75% Complete</div>
              </div>

              {/* Animated Dots */}
              <div className="flex justify-center space-x-4">
                <div className="w-4 h-4 bg-purple-400 rounded-full animate-bounce"></div>
                <div className="w-4 h-4 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-4 h-4 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
              </div>

              {/* Call to Action */}
              <div className="mt-8">
                <p className="text-muted-foreground text-sm">
                  Want to be notified when we launch? Follow us on GitHub!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Coming Soon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 opacity-60">
          {[1, 2, 3].map((index) => (
            <div key={index} className="glass-card p-6 rounded-2xl border-dashed border-2 border-gray-600">
              <div className="h-48 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-gray-600 border-t-cyan-400 rounded-full animate-spin"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded w-1/2 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
