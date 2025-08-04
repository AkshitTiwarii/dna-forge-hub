import { ArrowLeft, Home, Github, BookOpen, Download, ExternalLink, Library, FileText, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FreeResourcesPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-green-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className="text-green-400 hover:text-white hover:bg-green-400/20"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back
              </Button>
              <Link 
                to="/"
                className="inline-flex items-center px-4 py-2 text-green-400 hover:text-white hover:bg-green-400/20 rounded-md transition-colors"
              >
                <Home className="h-5 w-5 mr-2" />
                Home
              </Link>
            </div>
            
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2">
              <span className="text-2xl font-bold text-green-400">DNA</span>
              <span className="text-xl text-muted-foreground">Free Resources</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Link
                to="https://github.com/DNA-Community"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 border border-green-400/50 text-green-400 hover:bg-green-400/20 rounded-md transition-colors"
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
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-400/30">
                <BookOpen className="h-10 w-10 text-black" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Free Resources
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Curated learning materials, templates, tools, and guides to accelerate your development journey
            </p>

            <div className="inline-flex items-center gap-2 bg-green-400/20 border border-green-400 px-6 py-3 rounded-full">
              <Download className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-semibold">Free Download</span>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                What's <span className="text-green-400">Available</span>?
              </h2>
              <p className="text-xl text-muted-foreground">High-quality resources at no cost</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Library,
                  title: "Learning Libraries",
                  description: "Comprehensive guides, tutorials, and documentation for all skill levels",
                  color: "text-green-400",
                  borderColor: "border-green-400/30"
                },
                {
                  icon: FileText,
                  title: "Templates & Tools",
                  description: "Ready-to-use project templates, code snippets, and development tools",
                  color: "text-emerald-400",
                  borderColor: "border-emerald-400/30"
                },
                {
                  icon: Zap,
                  title: "Quick References",
                  description: "Cheat sheets, best practices, and quick reference guides for developers",
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

          {/* Coming Soon Section */}
          <div className="text-center">
            <div className="glass-card p-12 rounded-2xl border border-green-400/30">
              <h3 className="text-4xl font-bold mb-6 text-green-400">
                📚 Resource Library Coming Soon
              </h3>
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                We're building a comprehensive collection of free resources including tutorials, templates, 
                tools, and guides. Get notified when the resource library goes live.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button className="bg-gradient-to-r from-green-400 to-emerald-400 text-black hover:from-green-500 hover:to-emerald-500 px-10 py-4 text-xl font-bold rounded-full shadow-lg shadow-green-400/30 hover:shadow-green-400/50 transition-all duration-300">
                  Get Early Access
                  <Download className="h-5 w-5 ml-2" />
                </Button>
                
                <Link
                  to="/opportunities"
                  className="inline-flex items-center border-2 border-green-400/60 bg-black/40 backdrop-blur-sm text-green-400 hover:bg-green-400 hover:text-black hover:border-green-400 px-8 py-4 text-lg font-semibold rounded-full shadow-lg shadow-green-400/20 hover:shadow-green-400/40 hover:scale-105 transition-all duration-300 group transform"
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

export default FreeResourcesPage;
