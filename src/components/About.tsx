import { Terminal, Database, Code, Cpu } from 'lucide-react';

const About = () => {
  const capabilities = [
    {
      icon: Terminal,
      title: 'SYSTEM.CORE',
      description: 'Advanced terminal operations, system optimization, and low-level programming.',
      metrics: '99.9% UPTIME'
    },
    {
      icon: Database,
      title: 'DATA.ENGINE',
      description: 'Distributed databases, real-time analytics, and scalable data architecture.',
      metrics: '10TB+ PROCESSED'
    },
    {
      icon: Code,
      title: 'DEV.STACK',
      description: 'Full-stack development, microservices, and cloud-native applications.',
      metrics: '100+ PROJECTS'
    },
    {
      icon: Cpu,
      title: 'AI.NEURAL',
      description: 'Machine learning algorithms, neural networks, and intelligent automation.',
      metrics: '95% ACCURACY'
    }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-mono text-sm text-green-400 tracking-widest">SYSTEM.ABOUT</span>
          </div>
          
          <h2 className="text-3xl md:text-6xl font-mono font-black mb-8 tracking-wider">
            <span className="gradient-text">DNA FORGE HUB</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            A minimalist development collective focused on building efficient, 
            scalable, and aesthetically clean digital solutions. We specialize in 
            systems-level programming, modern web architecture, and innovative user interfaces.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="glass-card p-6 group hover:border-glow transition-all duration-500 pulse-border"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <capability.icon className="h-8 w-8 text-green-400 group-hover:scale-110 transition-transform" />
                <div className="text-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
              
              <h3 className="text-mono font-bold text-white mb-3 tracking-wider">
                {capability.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {capability.description}
              </p>
              
              <div className="text-mono text-xs text-green-400 font-medium">
                {capability.metrics}
              </div>
            </div>
          ))}
        </div>

        {/* Core Philosophy */}
        <div className="glass-card p-8 md:p-12 text-center">
          <h3 className="text-mono text-xl font-bold text-white mb-6 tracking-wider">
            CORE.PHILOSOPHY
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-mono font-black text-green-400">01</div>
              <div className="text-mono text-sm text-white">MINIMAL</div>
              <div className="text-xs text-muted-foreground">Less is always more</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-2xl font-mono font-black text-cyan-400">02</div>
              <div className="text-mono text-sm text-white">FUNCTIONAL</div>
              <div className="text-xs text-muted-foreground">Purpose-driven design</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-2xl font-mono font-black text-blue-400">03</div>
              <div className="text-mono text-sm text-white">ELEGANT</div>
              <div className="text-xs text-muted-foreground">Beauty in simplicity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;