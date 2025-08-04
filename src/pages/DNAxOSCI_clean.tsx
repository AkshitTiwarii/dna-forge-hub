import { ArrowLeft, Home, Calendar, Clock, MapPin, Users, Github, ExternalLink, Target, CheckCircle, Award, Code, Star, GitBranch, Zap, Book, Globe, Heart, Lightbulb, TrendingUp, Shield, Rocket, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DNAxOSCI = () => {
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
              <a 
                href="/"
                className="inline-flex items-center px-4 py-2 text-cyan-400 hover:text-white hover:bg-cyan-400/20 rounded-md transition-colors"
              >
                <Home className="h-5 w-5 mr-2" />
                Home
              </a>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-green-400">DNA</span>
              <span className="text-xl text-muted-foreground">×</span>
              <span className="text-2xl font-bold text-cyan-400">OSCI</span>
            </div>
            
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/DNA-DEVELOPERS-DEV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 border border-green-400/50 text-green-400 hover:bg-green-400/20 rounded-md transition-colors"
              >
                <Github className="h-4 w-4" />
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
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-400/30">
                <span className="text-3xl font-bold text-black">🧬</span>
              </div>
              <Zap className="h-8 w-8 text-yellow-400" />
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-400/30">
                <span className="text-3xl font-bold text-black">🔗</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              DNA × OSCI Partnership
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Empowering the next generation of developers through open source collaboration and community-driven learning
            </p>

            <div className="inline-flex items-center gap-2 bg-green-400/20 border border-green-400 px-6 py-3 rounded-full">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-semibold">Official Community Partnership</span>
            </div>
          </div>

          {/* What is OSCI Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                What is <span className="text-cyan-400">OSCI</span>?
              </h2>
              <p className="text-xl text-muted-foreground">Understanding Open Source Connect India</p>
            </div>

            <div className="glass-card p-10 rounded-2xl mb-8 border border-cyan-400/30">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-cyan-400 mb-6">Open Source Connect India (OSCI)</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    OSCI is India's premier platform dedicated to fostering open source culture and connecting developers 
                    with meaningful contribution opportunities. Founded with the vision of making open source accessible 
                    to everyone, OSCI bridges the gap between newcomers and established open source projects.
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <Globe className="h-6 w-6 text-cyan-400" />
                    <a 
                      href="https://osci.tech" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-white transition-colors font-semibold"
                    >
                      Visit OSCI Official Website →
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Users2, label: "Community Partners", value: "50+" },
                    { icon: Code, label: "Open Projects", value: "1000+" },
                    { icon: Star, label: "Contributors", value: "5000+" },
                    { icon: Heart, label: "Success Stories", value: "500+" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-black/30 rounded-lg">
                      <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* What is Open Source Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Understanding <span className="text-green-400">Open Source</span>
              </h2>
              <p className="text-xl text-muted-foreground">The foundation of modern software development</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8 rounded-2xl border border-green-400/20">
                <div className="flex items-center gap-3 mb-6">
                  <Book className="h-8 w-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-green-400">What is Open Source?</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-white">Open Source</strong> refers to software whose source code is freely available 
                    for anyone to view, modify, and distribute. It's built on the principle of collaborative development 
                    where developers worldwide contribute to improve software.
                  </p>
                  <p>
                    Unlike proprietary software, open source projects encourage transparency, community involvement, 
                    and shared ownership of code, leading to more robust and innovative solutions.
                  </p>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl border border-purple-400/20">
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="h-8 w-8 text-purple-400" />
                  <h3 className="text-2xl font-bold text-purple-400">Core Principles</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { title: "Transparency", desc: "Source code is openly accessible to everyone" },
                    { title: "Collaboration", desc: "Multiple developers work together on projects" },
                    { title: "Community", desc: "Built by and for the developer community" },
                    { title: "Innovation", desc: "Rapid development through shared knowledge" }
                  ].map((principle, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-400 mt-1" />
                      <div>
                        <div className="font-semibold text-white">{principle.title}</div>
                        <div className="text-sm text-muted-foreground">{principle.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* How Open Source Works */}
            <div className="glass-card p-10 rounded-2xl border border-yellow-400/20 mb-8">
              <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">How Open Source Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  {
                    step: "1",
                    title: "Discover Projects",
                    description: "Find interesting projects on platforms like GitHub, GitLab",
                    icon: Target
                  },
                  {
                    step: "2", 
                    title: "Learn & Understand",
                    description: "Study the codebase, documentation, and contribution guidelines",
                    icon: Book
                  },
                  {
                    step: "3",
                    title: "Start Contributing",
                    description: "Submit bug fixes, features, documentation improvements",
                    icon: Code
                  },
                  {
                    step: "4",
                    title: "Build Community",
                    description: "Engage with maintainers, help other contributors, grow together",
                    icon: Users2
                  }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-400/30">
                      <step.icon className="h-8 w-8 text-yellow-400" />
                    </div>
                    <div className="text-yellow-400 font-bold mb-2">Step {step.step}</div>
                    <h4 className="font-semibold text-white mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Partnership Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                How This Partnership <span className="text-green-400">Helps Students</span>
              </h2>
              <p className="text-xl text-muted-foreground">Comprehensive benefits for your development journey</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: TrendingUp,
                  title: "Skill Development",
                  description: "Learn industry-standard practices by working on real-world projects with experienced mentors",
                  color: "text-green-400",
                  borderColor: "border-green-400/30"
                },
                {
                  icon: Users2,
                  title: "Networking Opportunities",
                  description: "Connect with developers, maintainers, and industry professionals from across the globe",
                  color: "text-cyan-400",
                  borderColor: "border-cyan-400/30"
                },
                {
                  icon: Star,
                  title: "Portfolio Enhancement",
                  description: "Build an impressive GitHub profile with meaningful contributions to popular open source projects",
                  color: "text-yellow-400",
                  borderColor: "border-yellow-400/30"
                },
                {
                  icon: Shield,
                  title: "Mentorship & Guidance",
                  description: "Receive personalized guidance from experienced open source contributors and project maintainers",
                  color: "text-purple-400",
                  borderColor: "border-purple-400/30"
                },
                {
                  icon: Rocket,
                  title: "Career Advancement",
                  description: "Open source contributions are highly valued by employers and can significantly boost your career",
                  color: "text-orange-400",
                  borderColor: "border-orange-400/30"
                },
                {
                  icon: Book,
                  title: "Learning Resources",
                  description: "Access exclusive tutorials, workshops, and educational content designed for all skill levels",
                  color: "text-pink-400",
                  borderColor: "border-pink-400/30"
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

          {/* Why Open Source Matters */}
          <div className="mb-20">
            <div className="glass-card p-10 rounded-2xl border border-cyan-400/30">
              <h2 className="text-4xl font-bold text-center mb-8">
                Why <span className="text-cyan-400">Open Source</span> Matters for Students
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Real-World Experience</h4>
                      <p className="text-muted-foreground">Work on projects used by millions of people worldwide, gaining experience that can't be taught in classrooms.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Industry Recognition</h4>
                      <p className="text-muted-foreground">Major companies like Google, Microsoft, and Facebook actively recruit from open source communities.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Global Collaboration</h4>
                      <p className="text-muted-foreground">Learn to work with diverse teams across different time zones, cultures, and expertise levels.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Technical Skills</h4>
                      <p className="text-muted-foreground">Master version control, code review processes, testing, documentation, and other essential development skills.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Problem-Solving</h4>
                      <p className="text-muted-foreground">Tackle complex, real-world problems that require creative solutions and critical thinking.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Future-Proof Career</h4>
                      <p className="text-muted-foreground">Open source skills remain relevant across technologies and continue to grow in importance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="glass-card p-12 rounded-2xl border border-green-400/30">
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                🚀 Start Your Open Source Journey Today
              </h3>
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                Join thousands of students who are already building their careers through open source contributions. 
                The DNA × OSCI partnership provides the perfect platform to begin your journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  className="bg-gradient-to-r from-green-400 to-cyan-400 text-black hover:from-green-500 hover:to-cyan-500 px-10 py-4 text-xl font-bold rounded-full shadow-lg shadow-green-400/30 hover:shadow-green-400/50 transition-all duration-300"
                  onClick={() => {
                    window.open("https://osci.tech", "_blank");
                  }}
                >
                  🌐 Explore OSCI Platform
                </Button>
                
                <a
                  href="https://github.com/DNA-DEVELOPERS-DEV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 group"
                >
                  <Github className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform" />
                  Visit DNA GitHub
                  <ExternalLink className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground">
                  Questions? Reach out to us at{" "}
                  <a href="mailto:dna.developers.next.gen@outlook.com" className="text-cyan-400 hover:text-white transition-colors">
                    dna.developers.next.gen@outlook.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DNAxOSCI;
