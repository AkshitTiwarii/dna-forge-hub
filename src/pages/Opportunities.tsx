import { Briefcase, Code2, Trophy, BookOpen, Users, Clock, MapPin, ArrowLeft, Wrench, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Opportunities = () => {
  const sections = [
    {
      icon: Briefcase,
      title: 'Internships',
      description: 'Hands-on experience with real-world projects',
      color: 'blue',
      path: '/internships'
    },
    {
      icon: Trophy,
      title: 'Hackathons',
      description: 'Competitive coding events and challenges',
      color: 'purple',
      path: '/hackathons'
    },
    {
      icon: Code2,
      title: 'Job Openings',
      description: 'Career opportunities in tech industry',
      color: 'green',
      path: '/job-openings'
    },
    {
      icon: BookOpen,
      title: 'Free Resources',
      description: 'Learning materials and study guides',
      color: 'orange',
      path: '/free-resources'
    },
    {
      icon: Users,
      title: 'Mentorship',
      description: 'One-on-one guidance from industry experts',
      color: 'cyan',
      path: '/mentorship'
    },
    {
      icon: Sparkles,
      title: 'Workshops',
      description: 'Skill-building sessions and training programs',
      color: 'pink',
      path: '/workshops'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'from-blue-500/10 to-blue-600/5',
        border: 'border-blue-400/30',
        icon: 'text-blue-400',
        glow: 'hover:shadow-blue-400/20'
      },
      purple: {
        bg: 'from-purple-500/10 to-purple-600/5',
        border: 'border-purple-400/30',
        icon: 'text-purple-400',
        glow: 'hover:shadow-purple-400/20'
      },
      green: {
        bg: 'from-green-500/10 to-green-600/5',
        border: 'border-green-400/30',
        icon: 'text-green-400',
        glow: 'hover:shadow-green-400/20'
      },
      orange: {
        bg: 'from-orange-500/10 to-orange-600/5',
        border: 'border-orange-400/30',
        icon: 'text-orange-400',
        glow: 'hover:shadow-orange-400/20'
      },
      cyan: {
        bg: 'from-cyan-500/10 to-cyan-600/5',
        border: 'border-cyan-400/30',
        icon: 'text-cyan-400',
        glow: 'hover:shadow-cyan-400/20'
      },
      pink: {
        bg: 'from-pink-500/10 to-pink-600/5',
        border: 'border-pink-400/30',
        icon: 'text-pink-400',
        glow: 'hover:shadow-pink-400/20'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden pb-20 md:pb-0">
      <Navigation />
      {/* Clean professional background with subtle patterns */}
      <div className="absolute inset-0">
        {/* Minimal dot grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-violet-950/20" />
        
        {/* Clean vertical lines for structure */}
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/10 to-transparent" />
        <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-violet-500/10 to-transparent" />
        
        {/* Minimal accent elements */}
        <div className="absolute top-32 left-8 w-2 h-2 bg-blue-500/30 rounded-full" />
        <div className="absolute top-48 right-12 w-1 h-1 bg-violet-500/30 rounded-full" />
        <div className="absolute bottom-40 left-16 w-1.5 h-1.5 bg-cyan-500/30 rounded-full" />
        <div className="absolute bottom-24 right-8 w-2 h-2 bg-emerald-500/30 rounded-full" />
      </div>

      {/* Header */}
      <div className="relative z-10 pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to DNA Forge Hub
            </Link>
          </div>

          {/* Page Title */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#111111] border border-gray-800 rounded-lg px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-gray-400 text-sm font-medium tracking-wide">DEVELOPER OPPORTUNITIES</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
              Opportunities
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              Curated opportunities for developers to grow, learn, and build remarkable careers.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Available Opportunities Notice */}
          <div className="mb-16">
            <div className="bg-[#111111] border border-gray-800 rounded-xl p-8 text-center max-w-2xl mx-auto">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code2 className="h-6 w-6 text-green-500" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-3">Opportunities Portal</h2>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                Explore various opportunities curated for the developer community. 
                Click on any category to learn more and get started.
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                <span>Now Available</span>
              </div>
            </div>
          </div>

          {/* Opportunity Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              const colorClasses = getColorClasses(section.color);
              
              return (
                <Link
                  key={index}
                  to={section.path}
                  className={`bg-[#111111] border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300 group relative overflow-hidden cursor-pointer hover:scale-105 hover:shadow-lg ${colorClasses.glow}`}
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br ${colorClasses.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`h-6 w-6 ${colorClasses.icon}`} />
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                      {section.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      {section.description}
                    </p>

                    <div className="mt-4 inline-flex items-center text-xs text-gray-500 group-hover:text-blue-400 transition-colors">
                      <span>Learn More</span>
                      <ArrowLeft className="h-3 w-3 ml-1 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-[#111111] border border-gray-800 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-white">Stay Connected</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Be the first to access new opportunities when they launch. 
                Join our developer community for updates and insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  className="bg-white text-black hover:bg-gray-100 px-6 py-2 text-sm font-medium"
                  asChild
                >
                  <Link 
                    to="/" 
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = '/#contact';
                      setTimeout(() => {
                        document.getElementById('contact')?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }, 0);
                    }}
                  >
                    Get Updates
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white px-6 py-2 text-sm"
                  asChild
                >
                  <Link 
                    to="/" 
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = '/#team';
                      setTimeout(() => {
                        document.getElementById('team')?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }, 0);
                    }}
                  >
                    Join Community
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-16 text-center">
            <div className="flex items-center justify-center gap-6 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                <span>Now Available</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3 w-3" />
                <span>Global Access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Opportunities;
