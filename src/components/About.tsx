import { Terminal, Database, Code, Cpu, Users, Zap, Github, Globe, BookOpen, Trophy, Rocket, Heart, Calendar, Briefcase, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {

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
          
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed mb-8">
            We are <strong className="text-green-400">DNA Forge Hub</strong> - a dynamic community of passionate developers, 
            innovators, and tech enthusiasts united by our love for code and cutting-edge technology. 
            Born from the vision of creating exceptional digital experiences, we've grown into a 
            thriving ecosystem where creativity meets functionality.
          </p>

          <p className="text-base text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our collective spans across diverse domains - from full-stack web development and mobile apps 
            to AI/ML, blockchain, and emerging technologies. We don't just build software; 
            we craft digital solutions that make a difference.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="text-center">
          <h3 className="text-mono text-xl font-bold text-white mb-8 tracking-wider">
            JOIN.THE.FORGE
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            <Button
              variant="outline"
              className="group glass-card border-green-400/30 hover:border-green-400 hover:bg-green-400/10 text-green-400 p-6 h-auto flex-col gap-3"
              asChild
            >
              <a href="https://chat.whatsapp.com/LOC5LAO9iDAD8S9OtygofA" target="_blank" rel="noopener noreferrer">
                <Users className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <div className="text-center">
                  <div className="font-mono text-sm font-bold">JOIN COMMUNITY</div>
                  <div className="text-xs opacity-70">Connect with 200+ developers</div>
                </div>
              </a>
            </Button>

            <Button
              variant="outline"
              className="group glass-card border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/10 text-cyan-400 p-6 h-auto flex-col gap-3"
              asChild
            >
              <a href="/projects">
                <Code className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <div className="text-center">
                  <div className="font-mono text-sm font-bold">VIEW PROJECTS</div>
                  <div className="text-xs opacity-70">Explore our latest work</div>
                </div>
              </a>
            </Button>

            <Button
              variant="outline"
              className="group glass-card border-orange-400/30 hover:border-orange-400 hover:bg-orange-400/10 text-orange-400 p-6 h-auto flex-col gap-3"
              asChild
            >
              <Link to="/events">
                <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <div className="text-center">
                  <div className="font-mono text-sm font-bold">EVENTS</div>
                  <div className="text-xs opacity-70">Workshops & Meetups</div>
                </div>
              </Link>
            </Button>

            <Button
              variant="outline"
              className="group glass-card border-emerald-400/30 hover:border-emerald-400 hover:bg-emerald-400/10 text-emerald-400 p-6 h-auto flex-col gap-3"
              asChild
            >
              <Link to="/opportunities">
                <Briefcase className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <div className="text-center">
                  <div className="font-mono text-sm font-bold">OPPORTUNITIES</div>
                  <div className="text-xs opacity-70">Jobs, Internships & More</div>
                </div>
              </Link>
            </Button>

            <Button
              variant="outline"
              className="group glass-card border-violet-400/30 hover:border-violet-400 hover:bg-violet-400/10 text-violet-400 p-6 h-auto flex-col gap-3"
              asChild
            >
              <Link to="/opportunities#hackathons">
                <Sparkles className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <div className="text-center">
                  <div className="font-mono text-sm font-bold">HACKATHONS</div>
                  <div className="text-xs opacity-70">Competitive Coding Events</div>
                </div>
              </Link>
            </Button>

            <Button
              variant="outline"
              className="group glass-card border-purple-400/30 hover:border-purple-400 hover:bg-purple-400/10 text-purple-400 p-6 h-auto flex-col gap-3"
              asChild
            >
              <a href="https://gssoc.girlscript.tech/" target="_blank" rel="noopener noreferrer">
                <Trophy className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <div className="text-center">
                  <div className="font-mono text-sm font-bold">GSSOC DASHBOARD</div>
                  <div className="text-xs opacity-70">GirlScript Summer of Code</div>
                </div>
              </a>
            </Button>

            <Button
              variant="outline"
              className="group glass-card border-yellow-400/30 hover:border-yellow-400 hover:bg-yellow-400/10 text-yellow-400 p-6 h-auto flex-col gap-3"
              asChild
            >
              <a href="https://www.osconnect.org/" target="_blank" rel="noopener noreferrer">
                <Rocket className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <div className="text-center">
                  <div className="font-mono text-sm font-bold">OSCI DASHBOARD</div>
                  <div className="text-xs opacity-70">Open Source Connect India</div>
                </div>
              </a>
            </Button>

            <Button
              variant="outline"
              className="group glass-card border-pink-400/30 hover:border-pink-400 hover:bg-pink-400/10 text-pink-400 p-6 h-auto flex-col gap-3"
              asChild
            >
              <a href="https://github.com/AkshitTiwarii" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <div className="text-center">
                  <div className="font-mono text-sm font-bold">GITHUB PROFILE</div>
                  <div className="text-xs opacity-70">View our repositories</div>
                </div>
              </a>
            </Button>

            <Button
              variant="outline"
              className="group glass-card border-indigo-400/30 hover:border-indigo-400 hover:bg-indigo-400/10 text-indigo-400 p-6 h-auto flex-col gap-3"
              asChild
            >
              <a href="#contact">
                <BookOpen className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <div className="text-center">
                  <div className="font-mono text-sm font-bold">GET IN TOUCH</div>
                  <div className="text-xs opacity-70">Connect with our team</div>
                </div>
              </a>
            </Button>
          </div>

          <div className="mt-8 glass-card p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-red-400 animate-pulse" />
              <span className="text-mono text-sm text-white">BUILT.WITH.PASSION</span>
              <Heart className="w-5 h-5 text-red-400 animate-pulse" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              More than just a development group, we're a family of tech enthusiasts who believe 
              in the power of collaboration, continuous learning, and making technology accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;