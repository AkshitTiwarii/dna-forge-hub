import { ArrowLeft, Home, Trophy, Calendar, MapPin, Users, ExternalLink, Code, Award, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HackathonsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className="text-purple-400 hover:text-white hover:bg-purple-400/20"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back
              </Button>
              <Link 
                to="/"
                className="inline-flex items-center px-4 py-2 text-cyan-400 hover:text-white hover:bg-cyan-400/20 rounded-md transition-colors"
              >
                <Home className="h-5 w-5 mr-2" />
                Home
              </Link>
            </div>
            
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2">
              <span className="text-2xl font-bold text-purple-400">DNA</span>
              <span className="text-xl text-muted-foreground">Hackathons</span>
            </div>
            
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/DNA-DEVELOPERS-DEV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 border border-purple-400/50 text-purple-400 hover:bg-purple-400/20 rounded-md transition-colors"
              >
                <Trophy className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-400/30">
                <Trophy className="h-10 w-10 text-black" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Hackathon Events
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Competitive coding events, challenges, and innovation marathons for developers
            </p>

            <div className="inline-flex items-center gap-2 bg-purple-400/20 border border-purple-400 px-6 py-3 rounded-full">
              <Calendar className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 font-semibold">Events Loading</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Why Join <span className="text-purple-400">DNA Hackathons</span>?
              </h2>
              <p className="text-xl text-muted-foreground">Code, compete, and conquer</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Code,
                  title: "Innovation Challenges",
                  description: "Solve real-world problems with cutting-edge technology solutions",
                  color: "text-purple-400",
                  borderColor: "border-purple-400/30"
                },
                {
                  icon: Award,
                  title: "Prizes & Recognition",
                  description: "Win exciting prizes and gain recognition in the developer community",
                  color: "text-pink-400",
                  borderColor: "border-pink-400/30"
                },
                {
                  icon: Zap,
                  title: "Rapid Learning",
                  description: "Learn new technologies and frameworks in intensive coding sessions",
                  color: "text-red-400",
                  borderColor: "border-red-400/30"
                }
              ].map((benefit, index) => (
                <div key={index} className={`glass-card p-6 rounded-2xl border ${benefit.borderColor} hover:scale-105 transition-all duration-300`}>
                  <benefit.icon className={`h-12 w-12 ${benefit.color} mb-4`} />
                  <h3 className={`text-xl font-bold ${benefit.color} mb-3`}>{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="text-center">
            <div className="glass-card p-12 rounded-2xl border border-purple-400/30">
              <h3 className="text-4xl font-bold mb-6 text-purple-400">
                🏆 Epic Hackathons Coming Soon
              </h3>
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                Get ready for intense coding competitions, innovative challenges, and the chance to 
                showcase your skills alongside the best developers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  className="bg-gradient-to-r from-purple-400 to-pink-400 text-black hover:from-purple-500 hover:to-pink-500 px-10 py-4 text-xl font-bold rounded-full shadow-lg shadow-purple-400/30 hover:shadow-purple-400/50 transition-all duration-300"
                  onClick={() => {
                    window.location.href = '/#contact';
                  }}
                >
                  Get Updates
                </Button>
                
                <Link
                  to="/opportunities"
                  className="inline-flex items-center border-2 border-purple-400/60 bg-black/40 backdrop-blur-sm text-purple-400 hover:bg-purple-400 hover:text-black hover:border-purple-400 px-8 py-4 text-lg font-semibold rounded-full shadow-lg shadow-purple-400/20 hover:shadow-purple-400/40 hover:scale-105 transition-all duration-300 group transform"
                >
                  View All Opportunities
                  <ExternalLink className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonsPage;
