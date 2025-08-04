import { ArrowLeft, Home, Sparkles, Calendar, Users, ExternalLink, BookOpen, Video, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WorkshopsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-pink-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className="text-pink-400 hover:text-white hover:bg-pink-400/20"
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
              <span className="text-2xl font-bold text-pink-400">DNA</span>
              <span className="text-xl text-muted-foreground">Workshops</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Link
                to="/events"
                className="inline-flex items-center px-3 py-2 border border-pink-400/50 text-pink-400 hover:bg-pink-400/20 rounded-md transition-colors"
              >
                <Sparkles className="h-4 w-4" />
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
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-400/30">
                <Sparkles className="h-10 w-10 text-black" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Workshops & Training
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Skill-building sessions, training programs, and hands-on learning experiences
            </p>

            <div className="inline-flex items-center gap-2 bg-pink-400/20 border border-pink-400 px-6 py-3 rounded-full">
              <Calendar className="w-4 h-4 text-pink-400" />
              <span className="text-pink-400 font-semibold">View Events Page</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Available <span className="text-pink-400">DNA Workshops</span>
              </h2>
              <p className="text-xl text-muted-foreground">Check our events page for current workshops</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: BookOpen,
                  title: "Technical Workshops",
                  description: "Deep-dive sessions on latest technologies and development practices",
                  color: "text-pink-400",
                  borderColor: "border-pink-400/30"
                },
                {
                  icon: Video,
                  title: "Live Sessions",
                  description: "Interactive workshops with industry experts and hands-on coding",
                  color: "text-purple-400",
                  borderColor: "border-purple-400/30"
                },
                {
                  icon: FileText,
                  title: "Certificates",
                  description: "Earn completion certificates for your professional portfolio",
                  color: "text-cyan-400",
                  borderColor: "border-cyan-400/30"
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

          {/* Events Link Section */}
          <div className="text-center">
            <div className="glass-card p-12 rounded-2xl border border-pink-400/30">
              <h3 className="text-4xl font-bold mb-6 text-pink-400">
                🎓 Current Workshops Available
              </h3>
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                We regularly host workshops and training sessions. 
                Check our events page to see what's currently available and register for upcoming sessions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  to="/events"
                  className="bg-gradient-to-r from-pink-400 to-purple-400 text-black hover:from-pink-500 hover:to-purple-500 px-10 py-4 text-xl font-bold rounded-full shadow-lg shadow-pink-400/30 hover:shadow-pink-400/50 transition-all duration-300 inline-flex items-center"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  View Events Page
                </Link>
                
                <Link
                  to="/opportunities"
                  className="inline-flex items-center border-2 border-pink-400/60 bg-black/40 backdrop-blur-sm text-pink-400 hover:bg-pink-400 hover:text-black hover:border-pink-400 px-8 py-4 text-lg font-semibold rounded-full shadow-lg shadow-pink-400/20 hover:shadow-pink-400/40 hover:scale-105 transition-all duration-300 group transform"
                >
                  All Opportunities
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

export default WorkshopsPage;
