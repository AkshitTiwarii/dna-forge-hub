import { Rocket, Zap, Star, Github, ExternalLink, Code, Plus, ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsPage = () => {
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
              <Button
                variant="ghost"
                className="text-cyan-400 hover:text-white hover:bg-cyan-400/20"
                asChild
              >
                <a href="/">
                  <Home className="h-5 w-5 mr-2" />
                  Home
                </a>
              </Button>
            </div>
            
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2">
              <span className="text-2xl font-bold gradient-text">DNA</span>
              <span className="text-xl text-muted-foreground">Projects</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-purple-400/50 text-purple-400 hover:bg-purple-400/20"
                asChild
              >
                <a href="https://github.com/AkshitTiwarii" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <section id="projects" className="py-20 pt-32">
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
                // High Complexity Projects (Most Stars/Forks/Complex Tech)
                {
                  title: 'Ken-rolex Profile',
                  description: 'Professional GitHub profile with advanced configuration and custom features.',
                  techStack: ['GitHub Actions', 'Markdown', 'Profile Config'],
                  github: 'https://github.com/Rajan167030/Ken-rolex',
                  stars: 4,
                  forks: 6,
                  category: 'Profile',
                  author: 'Rajan167030',
                  complexity: 'High'
                },
                {
                  title: 'Carbonx',
                  description: 'AI + Web3 Powered Carbon Credit Exchange Platform with blockchain integration, ML models, and smart contracts.',
                  techStack: ['Next.js', 'AI/ML', 'Blockchain', 'Solidity'],
                  github: 'https://github.com/Rajan167030/Carbonx',
                  stars: 0,
                  forks: 0,
                  category: 'Web3/AI',
                  author: 'Rajan167030',
                  complexity: 'High'
                },
                {
                  title: 'FI-AI Advisor',
                  description: 'AI Personal Finance Advisor with interactive dashboard, Gemini AI integration, and real-time analysis.',
                  techStack: ['React', 'TypeScript', 'AI/ML', 'Gemini AI'],
                  github: 'https://github.com/Rajan167030/FI-AI-advisor-',
                  stars: 1,
                  forks: 2,
                  category: 'AI/ML',
                  author: 'Rajan167030',
                  complexity: 'High'
                },
                {
                  title: 'MOSDAC Help-Bot',
                  description: 'Next-Gen Geospatial Intelligence AI assistant for meteorological and satellite data with RAG pipeline and knowledge graphs.',
                  techStack: ['Python', 'Streamlit', 'AI/ML', 'FAISS'],
                  github: 'https://github.com/AkshitTiwarii/MOSDAC',
                  stars: 2,
                  forks: 0,
                  category: 'AI/ML',
                  author: 'AkshitTiwarii',
                  complexity: 'High'
                },
                {
                  title: 'DNA Community Website',
                  description: 'Professional React website for DNA coding community with responsive design and modern UI/UX.',
                  techStack: ['React', 'Vite', 'CSS3', 'JavaScript'],
                  github: 'https://github.com/DeepanshuS1/DNA-Website',
                  stars: 2,
                  forks: 1,
                  category: 'Community',
                  author: 'DeepanshuS1',
                  complexity: 'High'
                },
                {
                  title: 'culinaryAI',
                  description: 'AI-powered culinary application with recipe recommendations and food analysis.',
                  techStack: ['TypeScript', 'AI/ML', 'React'],
                  github: 'https://github.com/Rajan167030/culinaryAI',
                  stars: 2,
                  forks: 1,
                  category: 'AI/ML',
                  author: 'Rajan167030',
                  complexity: 'High'
                },
                
                // Medium Complexity Projects
                {
                  title: 'AI ChatBot',
                  description: 'Intelligent conversational AI bot with modern frontend and Python backend integration.',
                  techStack: ['TypeScript', 'Python', 'HTML', 'CSS'],
                  github: 'https://github.com/AkshitTiwarii/AI_ChatBot',
                  stars: 2,
                  forks: 1,
                  category: 'AI/ML',
                  author: 'AkshitTiwarii',
                  complexity: 'Medium'
                },
                {
                  title: 'DSA in Java',
                  description: 'Comprehensive beginner-friendly guide for learning Data Structures and Algorithms in Java.',
                  techStack: ['Java', 'Education', 'DSA'],
                  github: 'https://github.com/AkshitTiwarii/DSA-IN-JAVA',
                  stars: 2,
                  forks: 0,
                  category: 'Education',
                  author: 'AkshitTiwarii',
                  complexity: 'Medium'
                },
                {
                  title: 'Lumina.ai',
                  description: 'Advanced AI Chatbot with TypeScript implementation and intelligent conversation capabilities.',
                  techStack: ['TypeScript', 'AI/ML', 'React'],
                  github: 'https://github.com/Rajan167030/Lumina.ai',
                  stars: 2,
                  forks: 2,
                  category: 'AI/ML',
                  author: 'Rajan167030',
                  complexity: 'Medium'
                },
                {
                  title: 'git-battel',
                  description: 'GitHub battle application for comparing developer profiles and repositories.',
                  techStack: ['TypeScript', 'GitHub API', 'React'],
                  github: 'https://github.com/Rajan167030/git-battel',
                  stars: 2,
                  forks: 1,
                  category: 'Developer Tools',
                  author: 'Rajan167030',
                  complexity: 'Medium'
                },
                {
                  title: 'Client Portfolio Website',
                  description: 'Professional portfolio website for economics professional with modern React design.',
                  techStack: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
                  github: 'https://github.com/AkshitTiwarii/clients-porfolio-website',
                  demo: 'https://ishika-economics-profile.vercel.app/',
                  stars: 1,
                  forks: 0,
                  category: 'Web Dev',
                  author: 'AkshitTiwarii',
                  complexity: 'Medium'
                },
                {
                  title: 'RepoRefine',
                  description: 'AI-powered README generator for GitHub repositories with advanced markdown features.',
                  techStack: ['TypeScript', 'Next.js', 'AI/ML'],
                  github: 'https://github.com/Rajan167030/RepoRefine',
                  stars: 0,
                  forks: 1,
                  category: 'Developer Tools',
                  author: 'Rajan167030',
                  complexity: 'Medium'
                },
                {
                  title: 'Italaco Future Forge',
                  description: 'Modern e-commerce platform built with React and TypeScript using shadcn-ui components.',
                  techStack: ['React', 'TypeScript', 'Vite', 'shadcn-ui'],
                  github: 'https://github.com/AkshitTiwarii/italaco-future-forge',
                  demo: 'https://italaco-future-forge.vercel.app/',
                  stars: 1,
                  forks: 0,
                  category: 'E-commerce',
                  author: 'AkshitTiwarii',
                  complexity: 'Medium'
                },
                {
                  title: 'SQUARE',
                  description: 'TypeScript-based application with modern development practices.',
                  techStack: ['TypeScript', 'React', 'Modern JS'],
                  github: 'https://github.com/Rajan167030/SQUARE',
                  stars: 0,
                  forks: 1,
                  category: 'Web Dev',
                  author: 'Rajan167030',
                  complexity: 'Medium'
                },
                {
                  title: 'dev-developer',
                  description: 'Developer tools and utilities built with TypeScript for enhanced productivity.',
                  techStack: ['TypeScript', 'Developer Tools'],
                  github: 'https://github.com/Rajan167030/dev-developer',
                  stars: 0,
                  forks: 1,
                  category: 'Developer Tools',
                  author: 'Rajan167030',
                  complexity: 'Medium'
                },
                {
                  title: 'anynomus-feedback-app',
                  description: 'Anonymous feedback application built for advice and community input.',
                  techStack: ['JavaScript', 'React', 'Node.js'],
                  github: 'https://github.com/Rajan167030/anynomus-feedback-app',
                  stars: 0,
                  forks: 1,
                  category: 'Community',
                  author: 'Rajan167030',
                  complexity: 'Medium'
                },

                // Low Complexity Projects
                {
                  title: 'Unit Converter App',
                  description: 'First Android app built with Kotlin and Jetpack Compose for various unit conversions.',
                  techStack: ['Kotlin', 'Android', 'Jetpack Compose'],
                  github: 'https://github.com/AkshitTiwarii/UnitConvertor',
                  stars: 1,
                  forks: 0,
                  category: 'Mobile',
                  author: 'AkshitTiwarii',
                  complexity: 'Low'
                },
                {
                  title: 'Multiple Message Sender',
                  description: 'Python utility to send multiple messages multiple times for automation.',
                  techStack: ['Python', 'Automation'],
                  github: 'https://github.com/DeepanshuS1/Multiple_message_sender',
                  stars: 1,
                  forks: 0,
                  category: 'Utility',
                  author: 'DeepanshuS1',
                  complexity: 'Low'
                },
                {
                  title: 'birthday-bell',
                  description: 'Birthday reminder application with notification features.',
                  techStack: ['JavaScript', 'Web App'],
                  github: 'https://github.com/Rajan167030/birthday-bell',
                  stars: 1,
                  forks: 0,
                  category: 'Utility',
                  author: 'Rajan167030',
                  complexity: 'Low'
                },
                {
                  title: 'Next.js Commerce',
                  description: 'Modern e-commerce solution built with Next.js and TypeScript for scalable online stores.',
                  techStack: ['Next.js', 'TypeScript', 'Commerce'],
                  github: 'https://github.com/AkshitTiwarii/nextjs-commerce',
                  stars: 1,
                  forks: 0,
                  category: 'E-commerce',
                  author: 'AkshitTiwarii',
                  complexity: 'Medium'
                },
                {
                  title: 'Hindi Literature Library',
                  description: 'Digital library platform for Hindi literature with modern web interface.',
                  techStack: ['HTML', 'CSS', 'JavaScript'],
                  github: 'https://github.com/AkshitTiwarii/hindi-sahitya-library',
                  stars: 1,
                  forks: 1,
                  category: 'Education',
                  author: 'AkshitTiwarii',
                  complexity: 'Low'
                },
                {
                  title: 'SuperFlix',
                  description: 'Netflix homepage clone with responsive design and modern CSS styling.',
                  techStack: ['HTML', 'CSS', 'UI Clone'],
                  github: 'https://github.com/DeepanshuS1/SuperFlix',
                  stars: 0,
                  forks: 0,
                  category: 'UI Clone',
                  author: 'DeepanshuS1',
                  complexity: 'Low'
                },
                {
                  title: 'Spotify Clone',
                  description: 'Spotify interface clone with CSS styling and responsive design.',
                  techStack: ['HTML', 'CSS', 'UI Clone'],
                  github: 'https://github.com/DeepanshuS1/Spotify',
                  stars: 0,
                  forks: 0,
                  category: 'UI Clone',
                  author: 'DeepanshuS1',
                  complexity: 'Low'
                },
                {
                  title: 'Personal Portfolio',
                  description: 'Personal portfolio website showcasing projects and skills.',
                  techStack: ['HTML', 'CSS', 'JavaScript'],
                  github: 'https://github.com/DeepanshuS1/Personal-Portfolio',
                  stars: 0,
                  forks: 0,
                  category: 'Portfolio',
                  author: 'DeepanshuS1',
                  complexity: 'Low'
                },
                {
                  title: 'Stop Watch',
                  description: 'JavaScript-based stopwatch application with timing functionality.',
                  techStack: ['JavaScript', 'HTML', 'CSS'],
                  github: 'https://github.com/DeepanshuS1/Stop-Watch',
                  stars: 0,
                  forks: 0,
                  category: 'Utility',
                  author: 'DeepanshuS1',
                  complexity: 'Low'
                },
                {
                  title: 'Hacking Terminal',
                  description: 'Terminal simulation exercise for learning command line interfaces.',
                  techStack: ['JavaScript', 'Terminal UI'],
                  github: 'https://github.com/DeepanshuS1/Hacking-Terminal',
                  stars: 0,
                  forks: 0,
                  category: 'Educational',
                  author: 'DeepanshuS1',
                  complexity: 'Low'
                },
                {
                  title: 'MCP-Forge',
                  description: 'MCP Server Generator for creating modular component protocols.',
                  techStack: ['TypeScript', 'Generator Tools'],
                  github: 'https://github.com/Rajan167030/MCP-Forge',
                  stars: 0,
                  forks: 0,
                  category: 'Developer Tools',
                  author: 'Rajan167030',
                  complexity: 'Medium'
                },
                {
                  title: 'Anon-Link',
                  description: 'Anonymous link sharing platform (work in progress).',
                  techStack: ['Web Development', 'Privacy Tools'],
                  github: 'https://github.com/Rajan167030/Anon-Link',
                  stars: 0,
                  forks: 0,
                  category: 'Privacy',
                  author: 'Rajan167030',
                  complexity: 'Medium'
                },
                {
                  title: 'meme-generator',
                  description: 'Meme generator application with mock data and customization options.',
                  techStack: ['JavaScript', 'React', 'API'],
                  github: 'https://github.com/Rajan167030/meme-generator-',
                  stars: 0,
                  forks: 0,
                  category: 'Entertainment',
                  author: 'Rajan167030',
                  complexity: 'Low'
                }
              ]
              // Sort by complexity (High -> Medium -> Low) then by stars and forks
              .sort((a, b) => {
                const complexityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
                const complexityDiff = complexityOrder[b.complexity] - complexityOrder[a.complexity];
                if (complexityDiff !== 0) return complexityDiff;
                
                const starsAndForksA = a.stars + a.forks;
                const starsAndForksB = b.stars + b.forks;
                return starsAndForksB - starsAndForksA;
              })
              .map((project, index) => {
                const getComplexityColor = (complexity) => {
                  switch (complexity) {
                    case 'High': return 'text-red-400 border-red-400/30 bg-red-400/10';
                    case 'Medium': return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10';
                    case 'Low': return 'text-green-400 border-green-400/30 bg-green-400/10';
                    default: return 'text-gray-400 border-gray-400/30 bg-gray-400/10';
                  }
                };

                return (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl border border-gray-800 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-400/10 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h4>
                      {(project.stars > 0 || project.forks > 0) && (
                        <div className="flex items-center gap-2 text-yellow-400">
                          {project.stars > 0 && (
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-current" />
                              <span className="text-sm">{project.stars}</span>
                            </div>
                          )}
                          {project.forks > 0 && (
                            <div className="flex items-center gap-1">
                              <Github className="h-4 w-4" />
                              <span className="text-sm">{project.forks}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="px-2 py-1 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-lg border border-purple-400/30">
                        <span className="text-xs font-semibold text-purple-400">{project.category}</span>
                      </div>
                      <div className={`px-2 py-1 rounded-lg border text-xs font-semibold ${getComplexityColor(project.complexity)}`}>
                        {project.complexity}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="text-xs text-gray-500 mb-4">
                    By <span className="text-cyan-400 font-semibold">{project.author}</span>
                  </div>

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
              )})}
            </div>

            {/* Projects Stats */}
            <div className="text-center">
              <div className="flex justify-center items-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">30+</div>
                  <div className="text-muted-foreground text-sm">Open Source Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">25+</div>
                  <div className="text-muted-foreground text-sm">GitHub Stars</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">20+</div>
                  <div className="text-muted-foreground text-sm">Forks & Contributions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">3</div>
                  <div className="text-muted-foreground text-sm">Team Contributors</div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-muted-foreground mb-4">Project Complexity Distribution</h4>
                <div className="flex justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-sm text-red-400">High Complexity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm text-yellow-400">Medium Complexity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-green-400">Low Complexity</span>
                  </div>
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
    </div>
  );
};

export default ProjectsPage;
