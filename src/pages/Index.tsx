import { useState, useEffect } from 'react';
import { Github, ExternalLink, Zap, Code2, Users } from 'lucide-react';

const Index = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    console.log('Index component mounted');
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-foreground">Loading...</div>
    </div>;
  }
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 glass-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-2xl font-bold gradient-text">DNA Society</span>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/dnasociety" className="text-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </header>
      
      <main className="pt-16">
        {/* Hero Section with Grid */}
        <section id="home" className="min-h-screen flex items-center justify-center hero-bg">
          <div className="text-center z-10 relative">
            <h1 className="text-7xl md:text-9xl font-bold mb-8 gradient-text animate-float">
              DNA Society
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Developers of Next Gen Application
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Building the future through code, collaboration, and community. 
              Join us in creating innovative solutions that shape tomorrow's digital landscape.
            </p>
            
            {/* Feature Cards */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                { icon: Code2, text: 'Open Source', desc: 'Collaborative Development' },
                { icon: Users, text: 'Community', desc: 'Growing Together' },
                { icon: Zap, text: 'Innovation', desc: 'Cutting Edge Tech' }
              ].map((feature, index) => (
                <div key={index} className="glass-card grid-interactive p-6 rounded-xl hover-glow group cursor-pointer">
                  <feature.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:animate-pulse-glow" />
                  <h3 className="font-bold text-lg mb-1">{feature.text}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold hover-glow">
                Join DNA Society
              </button>
              <button className="glass-card border border-primary px-8 py-4 rounded-lg text-lg font-semibold hover-glow">
                View Projects
              </button>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-bold mb-8 gradient-text">About DNA Society</h2>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  We are a community of passionate developers, designers, and innovators 
                  committed to building the future of digital experiences.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From humble beginnings as a study group to becoming a thriving community 
                  of creators, we've grown into a collective that champions open-source 
                  development, mentorship, and collaborative innovation.
                </p>
              </div>
              <div className="glass-card grid-interactive p-8 rounded-2xl hover-glow">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                    <div className="text-muted-foreground">Active Members</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold gradient-text mb-2">25+</div>
                    <div className="text-muted-foreground">Projects</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold gradient-text mb-2">100+</div>
                    <div className="text-muted-foreground">Events</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold gradient-text mb-2">3+</div>
                    <div className="text-muted-foreground">Years Strong</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-20 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-bold text-center mb-16 gradient-text">Our Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'DevFlow', desc: 'Project management tool with AI insights', tech: 'React, Node.js' },
                { name: 'CodeMentor AI', desc: 'Intelligent code review platform', tech: 'Python, FastAPI' },
                { name: 'OpenSource Hub', desc: 'Platform for discovering open-source projects', tech: 'Next.js, Supabase' }
              ].map((project, index) => (
                <div key={index} className="glass-card grid-interactive p-6 rounded-2xl hover-glow group">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.name}</h3>
                  <p className="text-muted-foreground mb-4">{project.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary">{project.tech}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-bold mb-8 gradient-text">Get In Touch</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Ready to join our community or collaborate on a project? 
              Let's build something amazing together.
            </p>
            <div className="glass-card grid-interactive p-8 rounded-2xl max-w-2xl mx-auto hover-glow">
              <div className="space-y-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-4 bg-input border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-4 bg-input border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full p-4 bg-input border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                ></textarea>
                <button className="btn-primary w-full py-4 rounded-lg text-lg font-semibold hover-glow">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-card/50 border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span className="text-2xl font-bold gradient-text mb-4 block">DNA Society</span>
              <p className="text-muted-foreground">Developers of Next Gen Application</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors">Home</a>
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
                <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">Projects</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/dnasociety" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 mt-8 text-center text-muted-foreground">
            <p>© 2024 DNA Society. Built with ❤️ and cutting-edge tech.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
