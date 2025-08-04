import { Rocket, Zap, Star, Github, ExternalLink, Code, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Innovative solutions and open-source contributions that drive the future of
            technology.
          </p>
        </div>

        {/* Featured Project - DNA Forge Hub */}
        <div className="mb-20">
          <div className="glass-card p-8 rounded-2xl max-w-6xl mx-auto border border-purple-400/30 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-400/10">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Project Icon/Logo */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-2xl flex items-center justify-center animate-pulse">
                  <span className="text-3xl font-bold text-black">🧬</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <h3 className="text-3xl font-bold gradient-text">DNA Forge Hub</h3>
                  <div className="px-3 py-1 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-full border border-purple-400/30">
                    <span className="text-sm font-semibold text-purple-400">Featured</span>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground mb-4 max-w-2xl">
                  Official Platform of DNA – Developers of Next Gen Application. Empowering students, developers, and innovators through open-source collaboration, AI tools, and tech-driven community engagement.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                  {['React', 'TypeScript', 'TailwindCSS', 'Vite', 'Framer Motion'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800/50 text-cyan-400 rounded-full text-sm border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 glass-card rounded-lg border border-gray-800">
                    <Rocket className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Modern UI/UX</p>
                  </div>
                  <div className="text-center p-3 glass-card rounded-lg border border-gray-800">
                    <Zap className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">AI Integrations</p>
                  </div>
                  <div className="text-center p-3 glass-card rounded-lg border border-gray-800">
                    <Star className="h-6 w-6 text-green-400 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Community Focus</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    className="bg-gradient-to-r from-purple-400 to-cyan-400 text-black hover:from-purple-500 hover:to-cyan-500 px-6 py-3 transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a href="https://dna-forge-hub.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Visit Live Site
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-6 py-3 transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a href="https://github.com/AkshitTiwarii/dna-forge-hub" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5 mr-2" />
                      View Source
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              All <span className="gradient-text">Projects</span>
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive collection of my open-source projects across various technologies and domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'MOSDAC Help-Bot',
                description: 'Next-Gen Geospatial Intelligence AI assistant for meteorological and satellite data with RAG pipeline and knowledge graphs.',
                techStack: ['Python', 'Streamlit', 'AI/ML', 'FAISS'],
                github: 'https://github.com/AkshitTiwarii/MOSDAC',
                stars: 2,
                category: 'AI/ML'
              },
              {
                title: 'AI ChatBot',
                description: 'Intelligent conversational AI bot with modern frontend and Python backend integration.',
                techStack: ['TypeScript', 'Python', 'HTML', 'CSS'],
                github: 'https://github.com/AkshitTiwarii/AI_ChatBot',
                stars: 2,
                category: 'AI/ML'
              },
              {
                title: 'DSA in Java',
                description: 'Comprehensive beginner-friendly guide for learning Data Structures and Algorithms in Java.',
                techStack: ['Java', 'Education', 'DSA'],
                github: 'https://github.com/AkshitTiwarii/DSA-IN-JAVA',
                stars: 2,
                category: 'Education'
              },
              {
                title: 'Client Portfolio Website',
                description: 'Professional portfolio website for economics professional with modern React design.',
                techStack: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
                github: 'https://github.com/AkshitTiwarii/clients-porfolio-website',
                demo: 'https://ishika-economics-profile.vercel.app/',
                stars: 1,
                category: 'Web Dev'
              },
              {
                title: 'Italaco Future Forge',
                description: 'Modern e-commerce platform built with React and TypeScript using shadcn-ui components.',
                techStack: ['React', 'TypeScript', 'Vite', 'shadcn-ui'],
                github: 'https://github.com/AkshitTiwarii/italaco-future-forge',
                demo: 'https://italaco-future-forge.vercel.app/',
                stars: 1,
                category: 'E-commerce'
              },
              {
                title: 'Unit Converter App',
                description: 'My first Android app built with Kotlin and Jetpack Compose for various unit conversions.',
                techStack: ['Kotlin', 'Android', 'Jetpack Compose'],
                github: 'https://github.com/AkshitTiwarii/UnitConvertor',
                stars: 1,
                category: 'Mobile'
              },
              {
                title: 'Next.js Commerce',
                description: 'Modern e-commerce solution built with Next.js and TypeScript for scalable online stores.',
                techStack: ['Next.js', 'TypeScript', 'Commerce'],
                github: 'https://github.com/AkshitTiwarii/nextjs-commerce',
                stars: 1,
                category: 'E-commerce'
              },
              {
                title: 'Hindi Literature Library',
                description: 'Digital library platform for Hindi literature with modern web interface.',
                techStack: ['HTML', 'CSS', 'JavaScript'],
                github: 'https://github.com/AkshitTiwarii/hindi-sahitya-library',
                stars: 1,
                category: 'Web Dev'
              },
              {
                title: 'Hindi Final App',
                description: 'Web application focused on Hindi language content and user interface.',
                techStack: ['HTML', 'CSS', 'JavaScript'],
                github: 'https://github.com/AkshitTiwarii/hindifinalapp',
                stars: 1,
                category: 'Web Dev'
              },
              {
                title: 'GitHack',
                description: 'Developer tool for GitHub workflow automation and repository management.',
                techStack: ['Scripting', 'GitHub API'],
                github: 'https://github.com/AkshitTiwarii/GitHack',
                stars: 1,
                category: 'Tools'
              },
              {
                title: 'Hindi Library',
                description: 'Collection and management system for Hindi literature and educational content.',
                techStack: ['Web Tech'],
                github: 'https://github.com/AkshitTiwarii/HindiLibrary',
                stars: 1,
                category: 'Education'
              },
              {
                title: 'Learning Repository',
                description: 'Personal learning journey documentation with code examples and projects.',
                techStack: ['Various'],
                github: 'https://github.com/AkshitTiwarii/learning',
                stars: 1,
                category: 'Education'
              }
            ].map((project, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl border border-gray-800 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-400/10 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h4>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm">{project.stars}</span>
                    </div>
                  </div>
                  <div className="px-2 py-1 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-lg border border-purple-400/30">
                    <span className="text-xs font-semibold text-purple-400">{project.category}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800/50 text-cyan-400 rounded text-xs border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 bg-gray-800/50 text-gray-400 rounded text-xs border border-gray-700/50">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-black flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  
                  {project.demo && (
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-400/20 to-cyan-400/20 text-cyan-400 hover:from-purple-400 hover:to-cyan-400 hover:text-black border border-cyan-400/50 flex-1"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Projects Stats */}
          <div className="text-center">
            <div className="flex justify-center items-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">12+</div>
                <div className="text-muted-foreground text-sm">Open Source Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">15+</div>
                <div className="text-muted-foreground text-sm">GitHub Stars</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">5+</div>
                <div className="text-muted-foreground text-sm">Tech Stacks</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-purple-400 to-cyan-400 text-black hover:from-purple-500 hover:to-cyan-500 px-8 py-3"
                asChild
              >
                <a href="https://github.com/AkshitTiwarii" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  View All on GitHub
                </a>
              </Button>
              
              <Button
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-3"
                asChild
              >
                <a href="#contact">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Let's Collaborate
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="text-center mb-12">
          <div className="glass-card p-16 rounded-2xl max-w-6xl mx-auto border border-dashed border-purple-400/30">
            <div className="mb-12">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Code className="h-12 w-12 text-purple-400" />
                <Plus className="h-6 w-6 text-cyan-400 ml-2" />
              </div>
              <h3 className="text-4xl font-bold mb-4">
                <span className="text-purple-400 animate-pulse">More Projects</span>
                <br />
                <span className="text-cyan-400">Coming Soon_</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
                We're cooking up some incredible open-source projects that will
                revolutionize how developers build, collaborate, and innovate together.
              </p>
            </div>

            {/* Upcoming Projects Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: 'GSoC Contributors Dashboard',
                  description: 'Comprehensive dashboard with projects, mentors, and leaderboard',
                  icon: Star,
                  color: 'purple'
                },
                {
                  title: 'AI Resume Builder',
                  description: 'Generate clean, customizable developer resumes',
                  icon: Zap,
                  color: 'cyan'
                },
                {
                  title: 'AI Portfolio Generator',
                  description: 'One-click deploy your developer portfolio',
                  icon: Rocket,
                  color: 'green'
                },
                {
                  title: 'Community Chatbot',
                  description: 'AI assistant for DNA community and tech help',
                  icon: Code,
                  color: 'yellow'
                },
                {
                  title: 'Project Analyzer',
                  description: 'AI-powered GitHub repo feedback and suggestions',
                  icon: Github,
                  color: 'pink'
                },
                {
                  title: 'Hackathon Archive',
                  description: 'Showcase past projects and winning submissions',
                  icon: ExternalLink,
                  color: 'orange'
                }
              ].map((project, index) => {
                const IconComponent = project.icon;
                
                return (
                  <div
                    key={index}
                    className="glass-card p-6 rounded-xl border border-dashed border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400/10 to-cyan-400/10 flex items-center justify-center group-hover:animate-pulse border border-dashed border-purple-400/30">
                        <IconComponent className="h-8 w-8 text-purple-400" />
                      </div>
                      <h4 className="text-lg font-bold mb-2 text-purple-400">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Development Progress */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-muted-foreground mb-4">Development Progress</h4>
              <div className="relative">
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 rounded-full transition-all duration-1000 ease-out animate-pulse"
                    style={{ width: '75%' }}
                  ></div>
                </div>
                <div className="text-center mt-3">
                  <span className="text-2xl font-bold text-cyan-400">75%</span>
                  <span className="text-muted-foreground ml-2">Complete</span>
                </div>
              </div>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center space-x-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-purple-400 animate-bounce"></div>
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 rounded-full bg-green-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400 animate-bounce" style={{ animationDelay: '0.3s' }}></div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-purple-400 text-black hover:bg-purple-500 px-8 py-3 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://github.com/DNA-DEVELOPERS-DEV" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  Follow on GitHub
                </a>
              </Button>
              
              <Button
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="#contact">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Get Notified
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
