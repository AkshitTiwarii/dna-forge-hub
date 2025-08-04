import { ArrowLeft, Home, Briefcase, MapPin, Clock, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const InternshipsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-blue-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className="text-blue-400 hover:text-white hover:bg-blue-400/20"
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
              <span className="text-2xl font-bold text-blue-400">DNA</span>
              <span className="text-xl text-muted-foreground">Internships</span>
            </div>
            
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/DNA-DEVELOPERS-DEV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 border border-blue-400/50 text-blue-400 hover:bg-blue-400/20 rounded-md transition-colors"
              >
                <Briefcase className="h-4 w-4" />
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
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-400/30">
                <Briefcase className="h-10 w-10 text-black" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Internship Opportunities
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Gain hands-on experience with real-world projects and kickstart your career in technology
            </p>

            <div className="inline-flex items-center gap-2 bg-blue-400/20 border border-blue-400 px-6 py-3 rounded-full">
              <Clock className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-semibold">Opening Soon</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Why Choose <span className="text-blue-400">DNA Internships</span>?
              </h2>
              <p className="text-xl text-muted-foreground">Real projects, real impact, real growth</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Users,
                  title: "Mentorship Program",
                  description: "Work directly with experienced developers and industry professionals",
                  color: "text-blue-400",
                  borderColor: "border-blue-400/30"
                },
                {
                  icon: Briefcase,
                  title: "Real Projects",
                  description: "Contribute to actual products and see your code in production",
                  color: "text-cyan-400",
                  borderColor: "border-cyan-400/30"
                },
                {
                  icon: ExternalLink,
                  title: "Career Growth",
                  description: "Build portfolio, gain references, and unlock future opportunities",
                  color: "text-purple-400",
                  borderColor: "border-purple-400/30"
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
            <div className="glass-card p-12 rounded-2xl border border-blue-400/30">
              <h3 className="text-4xl font-bold mb-6 text-blue-400">
                🚀 Applications Opening Soon
              </h3>
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                We're preparing exciting internship positions for passionate developers. 
                Stay tuned for application details and requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  className="bg-gradient-to-r from-blue-400 to-cyan-400 text-black hover:from-blue-500 hover:to-cyan-500 px-10 py-4 text-xl font-bold rounded-full shadow-lg shadow-blue-400/30 hover:shadow-blue-400/50 transition-all duration-300"
                  onClick={() => {
                    window.location.href = '/#contact';
                  }}
                >
                  Get Notified
                </Button>
                
                <Link
                  to="/opportunities"
                  className="inline-flex items-center border-2 border-blue-400/60 bg-black/40 backdrop-blur-sm text-blue-400 hover:bg-blue-400 hover:text-black hover:border-blue-400 px-8 py-4 text-lg font-semibold rounded-full shadow-lg shadow-blue-400/20 hover:shadow-blue-400/40 hover:scale-105 transition-all duration-300 group transform"
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

export default InternshipsPage;
