import { ArrowLeft, Home, Github, Briefcase, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const JobOpeningsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className="text-cyan-400 hover:text-white hover:bg-cyan-400/20"
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
              <span className="text-2xl font-bold text-cyan-400">DNA</span>
              <span className="text-xl text-muted-foreground">Job Openings</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Link
                to="https://github.com/DNA-Community"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/20 rounded-md transition-colors"
              >
                <Github className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-400/30">
                <Briefcase className="h-10 w-10 text-black" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Job Opportunities
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Full-time positions, part-time roles, and career opportunities with DNA community partners
            </p>

            <div className="inline-flex items-center gap-2 bg-cyan-400/20 border border-cyan-400 px-6 py-3 rounded-full">
              <CheckCircle className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Career Growth</span>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Why Join Our <span className="text-cyan-400">Partner Companies</span>?
              </h2>
              <p className="text-xl text-muted-foreground">Exclusive access to vetted opportunities</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: CheckCircle,
                  title: "Verified Positions",
                  description: "All job openings are verified and from trusted partner companies",
                  color: "text-cyan-400",
                  borderColor: "border-cyan-400/30"
                },
                {
                  icon: ArrowRight,
                  title: "Direct Access",
                  description: "Skip the queue with direct referrals and fast-track applications",
                  color: "text-blue-400",
                  borderColor: "border-blue-400/30"
                },
                {
                  icon: Briefcase,
                  title: "Growth Focus",
                  description: "Positions focused on skill development and career advancement",
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
            <div className="glass-card p-12 rounded-2xl border border-cyan-400/30">
              <h3 className="text-4xl font-bold mb-6 text-cyan-400">
                💼 Job Board Coming Soon
              </h3>
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                We're building partnerships with leading companies to bring you exclusive job opportunities. 
                Be the first to know when positions open up.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button className="bg-gradient-to-r from-cyan-400 to-blue-400 text-black hover:from-cyan-500 hover:to-blue-500 px-10 py-4 text-xl font-bold rounded-full shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-all duration-300">
                  Get Notified
                  <CheckCircle className="h-5 w-5 ml-2" />
                </Button>
                
                <Link
                  to="/opportunities"
                  className="inline-flex items-center border-2 border-cyan-400/60 bg-black/40 backdrop-blur-sm text-cyan-400 hover:bg-cyan-400 hover:text-black hover:border-cyan-400 px-8 py-4 text-lg font-semibold rounded-full shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40 hover:scale-105 transition-all duration-300 group transform"
                >
                  Back to Opportunities
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

export default JobOpeningsPage;
